<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xp="http://www.giuntilabs.com/exact/xp_v1d0">

  <xsl:output method="text" encoding="UTF-8" omit-xml-declaration="yes" indent="no" media-type="application/json" />

  <xsl:variable name="lowercase" select="'abcdefghijklmnopqrstuvwxyz'" />
  <xsl:variable name="uppercase" select="'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" />

  <xsl:strip-space elements="*" />

  <xsl:template match="TWNSCPS_Session">
    <xsl:text>"root": {</xsl:text>
      <xsl:call-template name="printAttributes" />

    <xsl:for-each select="Overview"> <!-- should only be one of these -->
      <xsl:text>, "overview": {
            "type": "overview",
        </xsl:text>
        <xsl:call-template name="printAttributes" />
        <xsl:text>
        ,
        </xsl:text>
    <xsl:call-template name="getContents" />
    <xsl:text>
    }
        </xsl:text>
      </xsl:for-each>
  <xsl:for-each select="BackgroundImage"> <!-- should only be one of these -->
      <xsl:text>, "backgroundImage": {
            "type": "backgroundImage",
        </xsl:text>
        <xsl:call-template name="printAttributes" />
        <xsl:text>
        ,
        </xsl:text>
    <xsl:call-template name="components" />
    <xsl:text>
    }
        </xsl:text>
  </xsl:for-each>
    
    <xsl:text>, "stageAssets": [</xsl:text>

        <xsl:for-each select="StageAssets/TWNSCPS_StageAsset">
          <xsl:text>
          {
            "type": "stageAsset",
          </xsl:text>

            <xsl:call-template name="printAttributes" />

            <xsl:choose> <!-- when this a glossary, references or related_sessions node run processDelimitedStringNode-->
        <!--
              <xsl:when test="contains(name(),'Glossary') or 
                              contains(name(),'References') or 
                              contains(name(),'Related_Sessions')">
          <xsl:if test="*">
              <xsl:text>,</xsl:text>
            <xsl:call-template name="processDelimitedStringNode" />
          </xsl:if>
              </xsl:when>
        -->
              <xsl:when test="@xp:fieldtype='folder'">
              <!--
              <xsl:when test="contains(name(),'Authors') or 
                              contains(name(),'Module_Editors') or 
                              contains(name(),'Custom_Details') or 
                              contains(name(),'Downloads') or 
                              contains(name(),'Credits')"> -->

                  <xsl:text>,</xsl:text>

                  <xsl:call-template name="components" />
              
              </xsl:when>  
              <xsl:when test="@xp:fieldtype='text'">
                  <xsl:text>,</xsl:text>
                  <xsl:call-template name="getContents" />
                </xsl:when>  
            </xsl:choose>
          
          <xsl:text>}</xsl:text>

          <xsl:if test="position() != last()">

            <xsl:text>,</xsl:text>

          </xsl:if>
        </xsl:for-each>

    <xsl:text>]</xsl:text>

  <xsl:if test="Pages/TWNSCPS_Page">
    , "pages": [
    <xsl:for-each select="Pages/TWNSCPS_Page">
      <xsl:text>
          {
            "type": "page",
          </xsl:text>

      <xsl:call-template name="printAttributes" />

      <xsl:choose>
        <!-- when this a glossary, references or related_sessions node run processDelimitedStringNode-->
        <!--
              <xsl:when test="contains(name(),'Glossary') or 
                              contains(name(),'References') or 
                              contains(name(),'Related_Sessions')">
          <xsl:if test="*">
              <xsl:text>,</xsl:text>
            <xsl:call-template name="processDelimitedStringNode" />
          </xsl:if>
              </xsl:when>
        -->
        <xsl:when test="@xp:fieldtype='folder'">
          <!--
              <xsl:when test="contains(name(),'Authors') or 
                              contains(name(),'Module_Editors') or 
                              contains(name(),'Custom_Details') or 
                              contains(name(),'Downloads') or 
                              contains(name(),'Credits')"> -->

          <xsl:text>,</xsl:text>

          <xsl:call-template name="components" />

        </xsl:when>
        <xsl:when test="@xp:fieldtype='text'">
          <xsl:text>,</xsl:text>
          <xsl:call-template name="getContents" />
        </xsl:when>
      </xsl:choose>

      <xsl:text>}</xsl:text>

      <xsl:if test="position() != last()">

        <xsl:text>,</xsl:text>

      </xsl:if>
    </xsl:for-each>

    <xsl:text>]</xsl:text>
  </xsl:if>	  
    <xsl:text>}</xsl:text>
</xsl:template>

  <xsl:template name="components">
    
    <xsl:text>"components": [ </xsl:text>

    <xsl:for-each select="*">
      <xsl:text>{ </xsl:text>
        <xsl:call-template name="printAttributes" />
      
        <xsl:if test="@xp:fieldtype='text'">
          <xsl:text>,</xsl:text>
          <xsl:call-template name="getContents" />
        </xsl:if>
          
        <xsl:if test="* and @xp:fieldtype!='text'"> <!-- call recursively if child nodes exist -->
          <xsl:text>, </xsl:text>
          <xsl:call-template name="components" />
        </xsl:if>
      
      <xsl:text>} </xsl:text>
        <xsl:if test="position() != last()">
          <!-- if this is not the last page node, add a comma -->
          <xsl:text>,</xsl:text>
        </xsl:if>
      <!-- </xsl:if> -->
    </xsl:for-each>
    <xsl:text>]</xsl:text>
  </xsl:template>

  <xsl:template name="addComma">
    <xsl:if test="*">
      <!-- if there are nodes to process, add a comma to close off the last element -->
      ,
    </xsl:if>
  </xsl:template>

  <!--
  <xsl:template name="processNodes">

    <xsl:text>"</xsl:text>
    <xsl:value-of select="translate(name(), $uppercase, $lowercase)"  />
    <xsl:text>": {</xsl:text>
      <xsl:call-template name="printAttributes" />
      <xsl:text>,</xsl:text>
      <xsl:call-template name="getContents" />
      <xsl:for-each select="*">
        <xsl:text>,</xsl:text>
        <xsl:call-template name="processNodes" />
      </xsl:for-each>
    <xsl:text>}</xsl:text>
  </xsl:template>
  -->
  
  <xsl:template name="addNodeProperties">
    <xsl:param name="applyFurther" select="'true'" />
    <xsl:param name="addClosingBracket" select="'true'" />
    
    <!-- <xsl:call-template name="addComma" /> -->
    <xsl:text>"</xsl:text>
    <xsl:value-of select="translate(name(), $uppercase, $lowercase)"  />
    <xsl:text>": {</xsl:text>
      <xsl:call-template name="printAttributes" />
    
      <xsl:if test="$applyFurther = 'true'">
        <xsl:apply-templates />
      </xsl:if>
    
    <xsl:if test="$addClosingBracket = 'true'">
      <xsl:text>}</xsl:text>
    </xsl:if>
  </xsl:template> 
  
  <xsl:template name="processDelimitedStringNode">
  
    <xsl:text>"contents": </xsl:text>
    <xsl:for-each select="*">

        <xsl:variable name="delimitedStr">
        <xsl:apply-templates mode="deliminatedStr"/>
        </xsl:variable>

        <xsl:text>"</xsl:text>
        <xsl:call-template name="escape">
        <xsl:with-param name="text" select="normalize-space($delimitedStr)" />
        </xsl:call-template>
        <xsl:text>"</xsl:text>

    </xsl:for-each>
    
  </xsl:template>

  <xsl:template name="getContents">

  <xsl:variable name="textVar">
      <xsl:apply-templates mode="deliminatedStr" select="."/>
  </xsl:variable>

    <!-- <xsl:value-of select="translate(normalize-space($textVar), '', '')"/> -->
    
    <xsl:variable name="normalisedText">
      <xsl:call-template name="escape">
            <xsl:with-param name="text" select="normalize-space($textVar)" />
        </xsl:call-template>
  </xsl:variable>
    
  <xsl:text>"contents": "</xsl:text>
  <xsl:value-of select="$normalisedText"/>	    
  <xsl:text>"</xsl:text>
  </xsl:template>

  <xsl:template name="printAttributes">
    <!-- Output node attributes -->
    <xsl:for-each select="@*">

      <xsl:if test="position() != 1">
        <xsl:text>, </xsl:text>  
      </xsl:if>
      
      <xsl:text>"@</xsl:text>
      <xsl:value-of select="translate(local-name(), $uppercase, $lowercase)" />
      <xsl:text>":"</xsl:text>
      
        <!-- commented out because ../ was turning into ../\ -->
        <xsl:call-template name="escape">
          <xsl:with-param name="text" select="current()" />
        </xsl:call-template>
      
      <xsl:text>"</xsl:text>

    </xsl:for-each>

  </xsl:template>
  <!-- &quot; -->
  
  <!-- Replace characters which could cause an invalid JS object, by their escape-codes. -->
  <xsl:template name="escape">
    <xsl:param name="text" />
    <xsl:param name="char" select="'\'" />
    <xsl:param name="nextChar" select="substring(substring-after('\/&quot;&#xD;&#xA;&#x9;',$char),1,1)" />

    <xsl:choose>
      <xsl:when test="$char = ''">
        <xsl:value-of select="$text" />
      </xsl:when>

      <xsl:when test="contains($text,$char)">
        <xsl:call-template name="escape">
          <xsl:with-param name="text" select="substring-before($text,$char)" />
          <xsl:with-param name="char" select="$nextChar" />
        </xsl:call-template>
        <xsl:value-of select="concat('\',translate($char,'&#xD;&#xA;&#x9;','rnt'))" />
        <xsl:call-template name="escape">
          <xsl:with-param name="text" select="substring-after($text,$char)" />
          <xsl:with-param name="char" select="$char" />
        </xsl:call-template>
      </xsl:when>

      <xsl:otherwise>
        <xsl:call-template name="escape">
          <xsl:with-param name="text" select="$text" />
          <xsl:with-param name="char" select="$nextChar" />
        </xsl:call-template>
      </xsl:otherwise>
    </xsl:choose>
  </xsl:template>

  <xsl:template match="br" mode="deliminatedStr">
      <xsl:text disable-output-escaping="yes"><![CDATA[<br>]]></xsl:text>
  </xsl:template>
  
  <xsl:template match="p" mode="deliminatedStr">
    <xsl:text disable-output-escaping="yes"><![CDATA[<p>]]></xsl:text>
  </xsl:template>

  <xsl:template match="ul" mode="deliminatedStr">
    <xsl:text disable-output-escaping="yes"><![CDATA[<ul>]]></xsl:text>
  </xsl:template>
  
  <xsl:template match="ol" mode="deliminatedStr">
    <xsl:text disable-output-escaping="yes"><![CDATA[<ol>]]></xsl:text>
  </xsl:template>
  
  <xsl:template match="li" mode="deliminatedStr">
    <xsl:text disable-output-escaping="yes"><![CDATA[<li>]]></xsl:text>
  </xsl:template>
    
    <xsl:template match="b">
        <strong>
            <xsl:apply-templates/>
        </strong>
    </xsl:template>
    <xsl:template match="i">
        <em>
            <xsl:apply-templates/>
        </em>
    </xsl:template>
      <xsl:template match="strong">
        <strong>
            <xsl:apply-templates/>
        </strong>
    </xsl:template>
    <xsl:template match="em">
        <em>
            <xsl:apply-templates/>
        </em>
    </xsl:template>
    
  <xsl:template match="link" mode="deliminatedStr">
  
    <xsl:text disable-output-escaping="yes"><![CDATA[<a href="]]></xsl:text>

    <xsl:apply-templates select="@href"/>
    <xsl:text disable-output-escaping="yes"><![CDATA[" target="_blank">]]></xsl:text>
    <xsl:apply-templates/>

    <xsl:text disable-output-escaping="yes"><![CDATA[</a>]]></xsl:text>

  </xsl:template>
  
</xsl:stylesheet>