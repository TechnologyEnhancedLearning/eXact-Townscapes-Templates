import shutil, zipfile, os, fileinput, fire, sys
import string
from pathlib import Path
"""from xslFiles import xslFiles """

def buildTemplates(copyVueAssets='', templateVersion=0.0, cleanup='y'):
  """
    Creates a set of .xpt archives, inside a single .xpta model archive, which can be installed into eXact's Online Editor.
    :param copyVueAssets: The path to any Vue js, img and css assets you would like to copy in the TWNSCPS_Session root LO.  If this is not specified, no additional files will be copied into the root LO.
    :param templateVersion: The version of the templates and all models within it (e.g. TWNSCPS_Session version and TWNSCPS_Radio version)
    :param cleanup: default is 'y', to to remove all the copied files and folders that are created during the build process.  Set to 'n' if you want to debug an issue with the build script.
    :return: An .xpta file that can be installed in eXact Packager
  """

  models = [  {     'name': 'TWNSCPS_Session', 
                    'sharedStyles': [],
                    'sharedCommon': []
                },
                {   'name': 'TWNSCPS_StageAsset', 
                    'sharedStyles': [],
                    'sharedCommon': []
                },
                {   'name': 'TWNSCPS_Page', 
                    'sharedStyles': [],
                    'sharedCommon': []
                }
           ]     

  if copyVueAssets == '':
    print('No vue asset folder specified.  Vue assets will not be copied into the templates.')

  if templateVersion == 0.0:
      print('Specify the template version (e.g. 1.1):')
      templateVersion = input()

  modelVersions = templateVersion

  #if modelVersions == 0.0:
  #    print('Specify the version for the models (e.g. 6.1):')
  #    modelVersions = input()

  try:
      val = float(str(templateVersion))
      val = float(str(modelVersions))
  except ValueError as e:
      print("Error!  Template version must be a floating point number, e.g. 1.0")
      print(e)
      sys.exit()    

  cwd = Path.cwd()

  distFolder = 'dist'
  xptaFilename = 'eXact-townscapes-templates'
  subLOSearchStr = '<item type="lo" version=""'
  subLOReplaceStr = '<item type="lo" version="' + str(modelVersions) + '"'
  xptVersionSearchStr = '<template version=""'
  xptVersionReplaceStr = '<template version="' + str(modelVersions) + '"'
  rootVersionReplaceStr = '<template version="' + str(templateVersion) + '"'

  if Path.exists(cwd / distFolder):
      shutil.rmtree(cwd / distFolder)

  os.mkdir(cwd / distFolder)

  buildFolder = Path.absolute(cwd / 'dist')

  print('Copying models ...')

  templateZip = zipfile.ZipFile('dist\\' + xptaFilename, 'w', zipfile.ZIP_DEFLATED)

  for model in models:

      modelName = model["name"]
      modelPath = Path.absolute(buildFolder / modelName)

      # copy model code into build folder
      shutil.copytree(cwd / modelName, buildFolder / modelName)
      
      if not Path.exists(buildFolder / modelName / "styles"):
          os.mkdir(buildFolder / modelName / "styles")

      if not Path.exists(buildFolder / modelName / "common"):
          os.mkdir(buildFolder / modelName / "common")

      for styleFile in model["sharedStyles"]:
          shutil.copyfile(cwd / "shared/styles" / styleFile, buildFolder / modelName / "styles" / styleFile)

      # add version numbers to the LO's configuration files
      with fileinput.FileInput(Path.absolute(buildFolder / modelName / 'lomodel.xml'), inplace=True) as file:
          for line in file:
              newLine = line.replace(subLOSearchStr, subLOReplaceStr) # add sub lo version number
              if model["name"] == 'TWNSCPS_Session':
                    newLine = newLine.replace(xptVersionSearchStr, rootVersionReplaceStr) # if this is the root LO, add the template version number to the top of the lomodel.xml

              else:
                  newLine = newLine.replace(xptVersionSearchStr, xptVersionReplaceStr) # if this a sub lo, add the lo's version number to the top of the file

              print(newLine, end='') # write the modified line to the file   
      
      if model["name"] == 'TWNSCPS_Session' and copyVueAssets != '':
        # if this is marked as the root lo and we have specified some vue assets, then
        # remove old assets from the root LO common folder and copy over the new assets 
        # from our specified folder
        # if (copyVueAssets != ""):
        print('Copying Vue assets into root learning object ' + model["name"])
        
        if Path.exists(cwd / copyVueAssets):
            # remove old assets
            shutil.rmtree(modelPath / "common" )
            # copy new ones over into model's common folder
            shutil.copytree(cwd / copyVueAssets, buildFolder / modelName / "common")
            
        else:
            print("WARNING.  Cannot find path to Vue assets.  Path: " + copyVueAssets)

      # zip the model up into an xpt
      shutil.make_archive(buildFolder / modelName, 'zip', buildFolder / modelName)
      xptPath = str(modelName)+'.xpt'
      os.rename(str(buildFolder / modelName)+'.zip', str(buildFolder) + '\\' + xptPath )

      # put the xpt into the template zip file
      templateZip.write(  str(buildFolder) + '\\' + xptPath, xptPath  )

      # clean up, delete the build folder model, it's no longer needed
      if cleanup != 'n':
          shutil.rmtree(buildFolder / modelName)
          os.remove(str(buildFolder) + '\\' + xptPath)
          
      print(str(model["name"]) + ' built')

  templateZip.close()

  os.rename(str(buildFolder)+'\\' + xptaFilename, str(buildFolder) + '\\' + xptaFilename + '-v' + str(templateVersion) + '.xpta')

  print('Build Complete')

if __name__ == "__main__":
  fire.Fire({
    'townscape-templates': buildTemplates
  })