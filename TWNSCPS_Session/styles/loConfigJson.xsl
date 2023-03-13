<?xml version="1.0"?>
<xsl:stylesheet version="1.0" 
   xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
   xmlns:xp="http://www.giuntilabs.com/exact/xp_v1d0">

  <xsl:include href="configFunctions.xsl"/>

  <xsl:output method="text" encoding="UTF-8" omit-xml-declaration="yes" indent="no" media-type="application/json" />

  <xsl:template match="/">
    <xsl:text>{</xsl:text>
    
      <xsl:apply-templates />

    <xsl:text>}</xsl:text>
  </xsl:template>
  
 
</xsl:stylesheet>