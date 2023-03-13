<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
 xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
 xmlns:xlink="http://www.w3.org/1999/xlink"
 xmlns:xp="http://www.giuntilabs.com/exact/xp_v1d0"
 xmlns:xhtml="http://www.w3.org/1999/xhtml"
 xmlns:html="http://www.w3.org/1999/xhtml"
 xmlns:msxsl="urn:schemas-microsoft-com:xslt"
 exclude-result-prefixes="xmlns xsl xlink xp xhtml html msxsl">

    <xsl:output method="html" encoding="UTF-8" indent="yes" omit-xml-declaration="yes"/>
    
   
    <xsl:template match="TWNSCPS_Session">

        <xsl:variable name="cacheBuster">
          <xsl:value-of select="@xp:templateversion"/>
        </xsl:variable> 


        <xsl:text disable-output-escaping="yes"><![CDATA[<!DOCTYPE html>]]></xsl:text>

        <xsl:text disable-output-escaping="yes"><![CDATA[

        <html lang="en-GB">
          <head>
            <meta charset="utf-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width,initial-scale=1.0">
            <link rel="icon" href="../favicon.ico">
            <title>]]></xsl:text><xsl:value-of select="@xp:description"/><xsl:text disable-output-escaping="yes"><![CDATA[</title>
            <script type="application/javascript" rel="prefetch" src="./loConfig.js?]]></xsl:text><xsl:value-of select="$cacheBuster" /><xsl:text disable-output-escaping="yes"><![CDATA["></script>
            <script defer src="../common/js/chunk-vendors.js?]]></xsl:text><xsl:value-of select="$cacheBuster" /><xsl:text disable-output-escaping="yes"><![CDATA["></script>
            <script defer src="../common/js/app.js?]]></xsl:text><xsl:value-of select="$cacheBuster" /><xsl:text disable-output-escaping="yes"><![CDATA["></script>
            <link href="../common/css/app.css?]]></xsl:text><xsl:value-of select="$cacheBuster" /><xsl:text disable-output-escaping="yes"><![CDATA[" rel="stylesheet">
          </head>
          <body>
            <noscript>
              <strong>We're sorry but this web application doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
            </noscript>
            <div id="app"></div>
          </body>
        </html>
        
        ]]></xsl:text>

         <!-- <xsl:apply-templates /> -->
         
    </xsl:template>
    
</xsl:stylesheet>
