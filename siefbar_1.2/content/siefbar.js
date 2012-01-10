var pathSelectorCall = "<xsl:variable name=\"image\">"
					 + "\n\t<xsl:call-template name=\"select-valid-path\">"
					 + "\n\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"//path1\"/></xsl:with-param>"
					 + "\n\t\t\t<xsl:with-param name=\"alternate_1\"><xsl:value-of select=\"//path2\"/></xsl:with-param>"
					 + "\n\t\t<xsl:with-param name=\"alternate_2\"><xsl:value-of select=\"//path3\"/></xsl:with-param>"
					 + "\n\t</xsl:call-template>"
					 + "\n</xsl:variable>";	

var phoneExtraction = "<!-- String extract-phone(String string, Char[] delimiters = \"&#160; \") -->"
					+ "\n<xsl:template name=\"extract-phone\">"
					+ "\n\t<xsl:param name=\"string\"/>"
					+ "\n\t<xsl:param name=\"delimiters\"/>\n"
					+ "\n\t<xsl:variable name=\"__delimiters\">"
					+ "\n\t\t<xsl:if test=\"$delimiters\"><xsl:value-of select=\"$delimiters\"/></xsl:if>"
					+ "\n\t\t<xsl:if test=\"not($delimiters)\"><xsl:value-of select=\"'&#160; '\"/></xsl:if>"
					+ "\n\t</xsl:variable>\n"
					+ "\n\t<xsl:variable name=\"__normalize_string\" select=\"normalize-space(translate($string, $__delimiters, ''))\"/>"
					+ "\n\t<xsl:variable name=\"__normalize_phone\"  select=\"$__normalize_string\"/>"
					+ "\n\t<xsl:variable name=\"__mask\" select=\"translate($__normalize_phone, '0123456789xX+()-', '0000000000000000')\"/>"
					+ "\n\t<xsl:variable name=\"__start_idx\" select=\"string-length(substring-before($__mask, '0')) + 1\"/>"
					+ "\n\t<xsl:variable name=\"__string\" select=\"substring($__normalize_phone, $__start_idx)\"/>"
					+ "\n\t<xsl:variable name=\"__string_normalized\" select=\"substring($__mask, $__start_idx)\"/>\n"
					+ "\n\t<xsl:choose>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000') and substring($__string_normalized, 7 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 7)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '00000000') and substring($__string_normalized, 8 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 8)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '000000000') and substring($__string_normalized, 9 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 9)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000000') and substring($__string_normalized, 10 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 10)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '00000000000') and substring($__string_normalized, 11 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 11)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '000000000000') and substring($__string_normalized, 12 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 12)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000000000') and substring($__string_normalized, 13 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 13)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '00000000000000') and substring($__string_normalized, 14 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 14)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '000000000000000') and substring($__string_normalized, 15 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 15)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000000000000') and substring($__string_normalized, 16 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 16)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '00000000000000000') and substring($__string_normalized, 17 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 17)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '000000000000000000') and substring($__string_normalized, 18 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 18)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000000000000000') and substring($__string_normalized, 19 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 19)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '00000000000000000000') and substring($__string_normalized, 20 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 20)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '000000000000000000000') and substring($__string_normalized, 21 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 21)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000000000000000000') and substring($__string_normalized, 22 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 22)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '00000000000000000000000') and substring($__string_normalized, 23 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 23)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '000000000000000000000000') and substring($__string_normalized, 24 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 24)\"/></xsl:when>"
					+ "\n\t\t<xsl:when test=\"starts-with($__string_normalized, '0000000000000000000000000') and substring($__string_normalized, 25 + 1, 1) != '0'\"><xsl:value-of select=\"substring($__string, 1, 25)\"/></xsl:when>"
					+ "\n\t\t<xsl:otherwise><xsl:value-of select=\"substring($__string, 1)\"/></xsl:otherwise>"
					+ "\n\t</xsl:choose>"
				    + "\n</xsl:template>";

var phoneExtractionCall = "<xsl:variable name=\"tempPhone\">"
						+ "\n\t<xsl:call-template name=\"extract-phone\">"
						+ "\n\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"//path\"/></xsl:with-param>"
						+ "\n\t</xsl:call-template>"
						+ "\n</xsl:variable>";

var pictureUrls = "<xsl:variable name=\"__web_site\" select=\"'http://my.web-site.com/'\"/>"
				+ "\n<xsl:variable name=\"image\">"
				+ "\n\t<xsl:variable name=\"__raw_image\">"
				+ "\n\t\t<xsl:call-template name=\"select-valid-path\">"
				+ "\n\t\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"//path1\"/></xsl:with-param>"
				+ "\n\t\t\t<xsl:with-param name=\"alternate_1\"><xsl:value-of select=\"//path2\"/></xsl:with-param>"
				+ "\n\t\t\t<xsl:with-param name=\"alternate_2\"><xsl:value-of select=\"//path3\"/></xsl:with-param>"
				+ "\n\t\t</xsl:call-template>"
				+ "\n\t</xsl:variable>"
				+ "\n\t<xsl:choose>"
				+ "\n\t\t<xsl:when test=\"starts-with($__raw_image, 'http')\"><xsl:value-of select=\"$__raw_image\"/></xsl:when>"
				+ "\n\t\t<xsl:when test=\"string-length($__raw_image) &gt; 0\"><xsl:value-of select=\"concat($__web_site, $__raw_image)\"/></xsl:when>"
				+ "\n\t</xsl:choose>"
				+ "\n</xsl:variable>\n"
				+ "\n<xsl:variable name=\"hasImage\" select=\"string-length($image) &gt; string-length($__web_site)\"/>";

var tokenize = "<!-- String tokenize(String string, Char separator[5], Positive[0..7] item) -->"
			 + "\n<xsl:template name=\"tokenize\">"
			 + "\n\t<xsl:param name=\"string\"/>"
			 + "\n\t<xsl:param name=\"separator\"/> "
			 + "\n\t<xsl:param name=\"item\"/> "
			 + "\n\t<xsl:variable name=\"__separator\" select=\"substring($separator, 1, 1)\"/>"
			 + "\n\t<xsl:variable name=\"__string\">"
			 + "\n\t\t<xsl:choose>"
			 + "\n\t\t\t<xsl:when test=\"string-length($separator) = 1\"><xsl:value-of select=\"$string\"/></xsl:when>"
			 + "\n\t\t\t<xsl:when test=\"string-length($separator) = 2\"><xsl:value-of select=\"translate($string, $separator, concat($__separator, $__separator))\"/></xsl:when>"
			 + "\n\t\t\t<xsl:when test=\"string-length($separator) = 3\"><xsl:value-of select=\"translate($string, $separator, concat($__separator, $__separator, $__separator))\"/></xsl:when>"
			 + "\n\t\t\t<xsl:when test=\"string-length($separator) = 4\"><xsl:value-of select=\"translate($string, $separator, concat($__separator, $__separator, $__separator, $__separator))\"/></xsl:when>"
			 + "\n\t\t\t<xsl:when test=\"string-length($separator) = 5\"><xsl:value-of select=\"translate($string, $separator, concat($__separator, $__separator, $__separator, $__separator, $__separator))\"/></xsl:when>"
			 + "\n\t\t</xsl:choose>"
			 + "\n\t</xsl:variable>" 
			 + "\n\t<xsl:choose>"
  			 + "\n\t\t<xsl:when test=\"number($item) = \'NaN\'\">ERROR</xsl:when>"
			 + "\n\t\t<xsl:when test=\"$item = 0\"><xsl:value-of select=\"$__string\"/></xsl:when>"
			 + "\n\t\t<xsl:when test=\"$item = 1\"><xsl:value-of select=\"substring-before($__string, $__separator)\"/></xsl:when>"
			 + "\n\t\t<xsl:when test=\"$item = 2\">"
			 + "\n\t\t\t<xsl:variable name=\"__candidate\" select=\"substring-after($__string, $__separator)\"/>"
			 + "\n\t\t\t<xsl:choose>"
			 + "\n\t\t\t\t<xsl:when test=\"contains($__candidate, $__separator)\">"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"substring-before($__candidate, $__separator)\"/>"
			 + "\n\t\t\t\t</xsl:when>"
			 + "\n\t\t\t\t<xsl:otherwise>"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"$__candidate\"/>"
			 + "\n\t\t\t\t</xsl:otherwise>"
			 + "\n\t\t\t</xsl:choose>"
			 + "\n\t\t</xsl:when>\n"
			 + "\n\t\t<xsl:when test=\"$item = 3\">"
			 + "\n\t\t\t<xsl:variable name=\"__candidate\" select=\"substring-after(substring-after($__string, $__separator), $__separator)\"/>"
			 + "\n\t\t\t<xsl:choose>"
			 + "\n\t\t\t\t<xsl:when test=\"contains($__candidate, $__separator)\">"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"substring-before($__candidate, $__separator)\"/>"
		   	 + "\n\t\t\t\t</xsl:when>"
			 + "\n\t\t\t\t<xsl:otherwise>"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"$__candidate\"/>"
			 + "\n\t\t\t\t</xsl:otherwise>"
		     + "\n\t\t\t</xsl:choose>"
			 + "\n\t\t</xsl:when>\n"
			 + "\n\t\t<xsl:when test=\"$item = 4\">"
			 + "\n\t\t\t<xsl:variable name=\"__candidate\" select=\"substring-after(substring-after(substring-after($__string, $__separator), $__separator), $__separator)\"/>"
			 + "\n\t\t\t<xsl:choose>"
			 + "\n\t\t\t\t<xsl:when test=\"contains($__candidate, $__separator)\">"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"substring-before($__candidate, $__separator)\"/>"
			 + "\n\t\t\t\t</xsl:when>"
			 + "\n\t\t\t\t<xsl:otherwise>"
			 + "\n\t\t\t\t\t<<xsl:value-of select=\"$__candidate\"/>"
			 + "\n\t\t\t\t</xsl:otherwise>"
		     + "\n\t\t\t</xsl:choose>"
			 + "\n\t\t</xsl:when>\n"
			 + "\n\t\t<xsl:when test=\"$item = 5\">"
			 + "\n\t\t\t<xsl:variable name=\"__candidate\" select=\"substring-after(substring-after(substring-after(substring-after($__string, $__separator), $__separator), $__separator), $__separator)\"/>"
			 + "\n\t\t\t<xsl:choose>"
			 + "\n\t\t\t\t<xsl:when test=\"contains($__candidate, $__separator)\">"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"substring-before($__candidate, $__separator)\"/>"
			 + "\n\t\t\t\t</xsl:when>"
			 + "\n\t\t\t\t<xsl:otherwise>"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"$__candidate\"/>"
			 + "\n\t\t\t\t</xsl:otherwise>"
			 + "\n\t\t\t</xsl:choose>"
			 + "\n\t\t</xsl:when>\n"
			 + "\n\t\t<xsl:when test=\"$item = 6\">"
			 + "\n\t\t<xsl:variable name=\"__candidate\" select=\"substring-after(substring-after(substring-after(substring-after(substring-after($__string, $__separator), $__separator), $__separator), $__separator), $__separator)\"/>"
			 + "\n\t\t\t<xsl:choose>"
			 + "\n\t\t\t\t<xsl:when test=\"contains($__candidate, $__separator)\">"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"substring-before($__candidate, $__separator)\"/>"
			 + "\n\t\t\t\t</xsl:when>"
			 + "\n\t\t\t\t<xsl:otherwise>"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"$__candidate\"/>"
			 + "\n\t\t\t\t</xsl:otherwise>"
			 + "\n\t\t\t</xsl:choose>"
			 + "\n\t\t</xsl:when>\n"
			 + "\n\t\t<xsl:when test=\"$item = 7\">"
			 + "\n\t\t<xsl:variable name=\"__candidate\" select=\"substring-after(substring-after(substring-after(substring-after(substring-after(substring-after($__string, $__separator), $__separator), $__separator), $__separator), $__separator), $__separator)\"/>"
			 + "\n\t\t\t<xsl:choose>"
			 + "\n\t\t\t\t<xsl:when test=\"contains($__candidate, $__separator)\">"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"substring-before($__candidate, $__separator)\"/>"
			 + "\n\t\t\t\t</xsl:when>"
			 + "\n\t\t\t\t<xsl:otherwise>"
			 + "\n\t\t\t\t\t<xsl:value-of select=\"$__candidate\"/>"
			 + "\n\t\t\t\t</xsl:otherwise>"
			 + "\n\t\t\t</xsl:choose>"
			 + "\n\t\t</xsl:when>"
			 + "\n\t</xsl:choose>"
		     + "\n</xsl:template>";
			   
var tokenizeCall = "<xsl:call-template name=\"tokenize\">"
				 + "\n\t<xsl:with-param name=\"string\"><xsl:value-of select=\"//xpath\"/></xsl:with-param>"
				 + "\n\t<xsl:with-param name=\"separator\">/</xsl:with-param>"
				 + "\n\t<xsl:with-param name=\"item\">3</xsl:with-param>"
				 + "\n</xsl:call-template>";

var dateTime =  "<!-- RFC3339_TIME extract-time(String string, Boolean australia-time-zone = false, String default-time-zone = \"\", Char delimiters[] = \":\") -->"
			 +  "\n<xsl:template name=\"extract-time\">"
			 +  "\n\t<xsl:param name=\"string\">"
			 +  "\n\t<xsl:param name=\"australia-time-zone\"/>"
			 +	"\n\t<xsl:param name=\"default-time-zone\"/>"
			 +	"\n\t<xsl:param name=\"delimiters\"/>\n"
			 +	"\n\t<xsl:variable name=\"__string\" select=\"$string\"/>"
			 +	"\n\t<xsl:variable name=\"__is_australia\" select=\"$australia-time-zone\"/>"
			 +	"\n\t<xsl:variable name=\"__default_time_zone\" select=\"$default-time-zone\"/>"
			 +	"\n\t<xsl:variable name=\"__delimiters\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"string-length($delimiters) = 0\">:</xsl:when>"
			 +	"\n\t\t\t<xsl:otherwise><xsl:value-of select=\"$delimiters\"/></xsl:otherwise>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__digits\" select=\"('0123456789')\"/>"
			 +	"\n\t<xsl:variable name=\"__zdigits\" select=\"('0000000000')\"/>"
			 +	"\n\t<xsl:variable name=\"__lower\" select=\"('abcdefghijklmnopqrstuvwxyz')\"/>"
			 +	"\n\t<xsl:variable name=\"__upper\" select=\"('ABCDEFGHIJKLMNOPQRSTUVWXYZ()')\"/>\n"
			 +	"\n\t<xsl:variable name=\"__raw_time_swept\">"
			 +	"\n\t\t<xsl:variable name=\"__n_chars\" select=\"translate($__string, $__upper, $__lower)\"/>"
			 +	"\n\t\t<xsl:variable name=\"__n_sweep\" select=\"normalize-space(translate($__n_chars, '&#160;', ''))\"/>"
			 +	"\n\t\t<xsl:variable name=\"__n_delimiters\">"
			 +	"\n\t\t<xsl:variable name=\"__numbers_of_delimiters\" select=\"string-length($__delimiters)\"/>"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"$__numbers_of_delimiters = 1\"><xsl:value-of select=\"translate($__n_sweep, $__delimiters, ':')\"/></xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__numbers_of_delimiters = 2\"><xsl:value-of select=\"translate($__n_sweep, $__delimiters, '::')\"/></xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__numbers_of_delimiters = 3\"><xsl:value-of select=\"translate($__n_sweep, $__delimiters, ':::')\"/></xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__numbers_of_delimiters = 4\"><xsl:value-of select=\"translate($__n_sweep, $__delimiters, '::::')\"/></xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__numbers_of_delimiters = 5\"><xsl:value-of select=\"translate($__n_sweep, $__delimiters, ':::::')\"/></xsl:when>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:value-of select=\"$__n_delimiters\"/>"
			 +	"\n</xsl:variable>\n"
			 +	"\n<xsl:variable name=\"__raw_time_normalized\">"
			 +	"\n\t<xsl:variable name=\"__n_digits\" select=\"translate($__raw_time_swept, $__digits, $__zdigits)\"/>"
			 +	"\n\t<xsl:value-of select=\"$__n_digits\"/>"
			 +	"\n</xsl:variable>\n"
			 +	"\n<xsl:variable name=\"__time_zone_shift\">"
			 +	"\n\t<xsl:variable name=\"__raw_time_zone_normalized\" select=\"substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, '0:00')) + 1)\"/>\n"
			 +	"\n\t<xsl:variable name=\"__z_zone\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'utc')\">utc</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'gmt')\">gmt</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wet')\">wet</xsl:when>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:choose>"
			 +	"\n\t\t<!-- time-zone mnemonic conversion into RFC 3339 standard time-zone shift -->"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'acdt')\">+10:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'acst')\">+09:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'adt')\">-03:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'aedt')\">+11:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'aest')\">+10:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'akdt')\">-08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'akst')\">-09:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'awdt')\">+09:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'awst')\">+08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'bst')\">+01:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cdt') and $__is_australia\">+10:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cdt')\">-05:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cedt')\">+02:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cest')\">+02:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cet')\">+01:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cit')\">+08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cst') and $__is_australia\">+09:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cst')\">-06:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'cxt')\">+07:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'edt') and $__is_australia\">+11:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'edt')\">-04:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'eedt')\">+03:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'eest')\">+03:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'eet')\">+02:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'eit')\">+09:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'est') and $__is_australia\">+10:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'est')\">-05:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'et')\">-05:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'haa')\">-03:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hac')\">-05:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hadt')\">-09:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hae')\">-04:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hap')\">-07:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'har')\">-06:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hast')\">-10:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hat')\">-02:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hay')\">-08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hna')\">-04:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hnc')\">-06:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hne')\">-05:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hnp')\">-08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hnr')\">-07:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hnt')\">-03:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hny')\">-09:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'hst')\">-10:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'ist')\">+01:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'mdt')\">-06:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'mesz')\">+02:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'mez')\">+01:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'msd')\">+04:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'msk')\">+03:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'mst')\">-07:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'naest')\">-05:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'ndt')\">-02:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'nft')\">+11:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'nst')\">-03:30</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'pdt')\">-07:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'pst')\">-08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wdt')\">+09:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wedt')\">+01:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'west')\">+01:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wst')\">+08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wib')\">+07:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wita')\">+08:00</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_zone_normalized, 'wit')\">+07:00</xsl:when>\n"
			 +	"\n\t\t<!-- Z-zone handling: GMT, UTC, WET -->"
			 +	"\n\t\t<xsl:when test=\"string-length($__z_zone) &gt; 0\">"
			 +	"\n\t\t\t<xsl:variable name=\"__time_shift_candidate_normalized\" select=\"substring-after(translate($__raw_time_normalized, '+-', '++'), $__z_zone)\"/>"
			 +	"\n\t\t\t<xsl:variable name=\"__time_shift_candidate\" select=\"substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, $__z_zone)) + 4)\"/>"
			 +	"\n\t\t\t<xsl:choose>"
			 +	"\n\t\t\t\t<xsl:when test=\"starts-with($__time_shift_candidate_normalized, '+0:00')\"><xsl:value-of select=\"concat(substring($__time_shift_candidate, 1, 1), '0', substring($__time_shift_candidate, 2, 4))\"/></xsl:when>"
			 +	"\n\t\t\t\t<xsl:when test=\"starts-with($__time_shift_candidate_normalized, '+00:00')\"><xsl:value-of select=\"substring($__time_shift_candidate, 1, 6)\"/></xsl:when>"
			 +	"\n\t\t\t\t<xsl:when test=\"starts-with($__time_shift_candidate_normalized, '+00')\"><xsl:value-of select=\"concat(substring($__time_shift_candidate, 1, 3), ':00')\"/></xsl:when>"
			 +	"\n\t\t\t\t<xsl:when test=\"starts-with($__time_shift_candidate_normalized, '+0')\"><xsl:value-of select=\"concat(substring($__time_shift_candidate, 1, 1), '0', substring($__time_shift_candidate, 2, 1), ':00')\"/></xsl:when>"
			 +	"\n\t\t\t\t<xsl:otherwise>Z</xsl:otherwise>"
			 +	"\n\t\t\t</xsl:choose>"
			 +	"\n\t\t</xsl:when>\n"
			 +	"\n\t\t<!-- RFC #3339 formatted data handling -->"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, ':00z')\">Z</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, ':00+00:00')\">"
			 +	"\n\t\t\t<xsl:value-of select=\"substring-after(substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, ':00+00:00')) + 1, 9), ':00')\"/>"
			 +	"\n\t\t</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, ':00-00:00')\">"
			 +	"\n\t\t\t<xsl:value-of select=\"substring-after(substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, ':00-00:00')) + 1, 9), ':00')\"/>"
			 +	"\n\t\t</xsl:when>\n\n"
			 +	"\n\t\t<xsl:otherwise>"
			 +	"\n\t\t\t<xsl:value-of select=\"$__default_time_zone\"/>"
			 +	"\n\t\t</xsl:otherwise>"
			 +	"\n\t</xsl:choose>"
			 +	"\n</xsl:variable>\n"
			 +	"\n<!-- time extraction -->"
			 +	"\n<xsl:variable name=\"__time_extracted\">"
			 +	"\n\t<xsl:variable name=\"__pattern_01\">00:00:00</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__pattern_02\">0:00:00</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__pattern_03\">00:00</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__pattern_04\">0:00</xsl:variable>\n"
			 +	"\n\t<xsl:choose>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, $__pattern_01)\">"
			 +	"\n\t\t\t<xsl:value-of select=\"substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, $__pattern_01)) + 1, string-length($__pattern_01))\"/>"
			 +	"\n\t\t</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, $__pattern_02)\">"
			 +	"\n\t\t\t<xsl:value-of select=\"substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, $__pattern_02)) + 1, string-length($__pattern_02))\"/>"
			 +	"\n\t\t</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, $__pattern_03)\">"
			 +	"\n\t\t\t<xsl:value-of select=\"substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, $__pattern_03)) + 1, string-length($__pattern_03))\"/>"
			 +	"\n\t\t</xsl:when>"
			 +	"\n\t\t<xsl:when test=\"contains($__raw_time_normalized, $__pattern_04)\">"
			 +	"\n\t\t\t<xsl:value-of select=\"substring($__raw_time_swept, string-length(substring-before($__raw_time_normalized, $__pattern_04)) + 1, string-length($__pattern_04))\"/>"
			 +	"\n\t\t</xsl:when>"
			 +	"\n\t\t<xsl:otherwise/>"
			 +	"\n\t</xsl:choose>"
			 +	"\n</xsl:variable>\n"
			 +	"\n<!-- HOUR extraction and formatting -->"
			 +	"\n<xsl:variable name=\"__hh\">"
			 +	"\n\t<xsl:variable name=\"__hr_format\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_time_normalized, '0pm')\">12pm</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_time_normalized, '0 pm')\">12pm</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_time_normalized, '0am')\">12am</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_time_normalized, '0 am')\">12am</xsl:when>"
			 +	"\n\t\t\t<xsl:otherwise>24</xsl:otherwise>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__raw_hh\">"
			 +	"\n\t\t<xsl:variable name=\"__extracted_hh\" select=\"number(substring-before($__time_extracted, ':'))\"/>"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"$__extracted_hh = 12\">"
			 +	"\n\t\t\t\t<xsl:choose>"
			 +	"\n\t\t\t\t\t<xsl:when test=\"$__hr_format = '12pm'\">12</xsl:when>"
			 +	"\n\t\t\t\t\t<xsl:when test=\"$__hr_format = '12am'\">00</xsl:when>"
			 +	"\n\t\t\t\t\t<xsl:when test=\"$__hr_format = '24'\">12</xsl:when>"
			 +	"\n\t\t\t\t</xsl:choose>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:otherwise>"
			 +	"\n\t\t\t\t<xsl:choose>"
			 +	"\n\t\t\t\t\t<xsl:when test=\"$__hr_format = '12pm'\"><xsl:value-of select=\"$__extracted_hh + 12\"/></xsl:when>"
			 +	"\n\t\t\t\t\t<xsl:when test=\"$__hr_format = '12am'\"><xsl:value-of select=\"$__extracted_hh\"/></xsl:when>"
			 +	"\n\t\t\t\t\t<xsl:when test=\"$__hr_format = '24'\"><xsl:value-of select=\"$__extracted_hh\"/></xsl:when>"
			 +	"\n\t\t\t\t</xsl:choose>"
			 +	"\n\t\t\t</xsl:otherwise>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:choose>"
			 +	"\n\t\t<xsl:when test=\"string-length($__raw_hh) = 1\"><xsl:value-of select=\"concat('0', $__raw_hh)\"/></xsl:when>"
			 +	"\n\t\t<xsl:otherwise><xsl:value-of select=\"$__raw_hh\"/></xsl:otherwise>"
			 +	"\n\t</xsl:choose>"
			 +	"\n</xsl:variable>\n"
			 +	"\n<!-- MINUTES extraction and formatting -->"
			 +	"\n<xsl:variable name=\"__mm\">"
			 +	"\n\t<xsl:variable name=\"__raw_mm\" select=\"substring-before(substring-after($__time_extracted, ':'), ':')\"/>\n"
			 +	"\n\t<xsl:choose>"
			 +	"\n\t\t<xsl:when test=\"string-length($__raw_mm) = 0\"><xsl:value-of select=\"substring-after($__time_extracted, ':')\"/></xsl:when>"
			 +	"\n\t\t<xsl:otherwise><xsl:value-of select=\"$__raw_mm\"/></xsl:otherwise>"
			 +	"\n\t</xsl:choose>"
			 +	"\n</xsl:variable>"
			 +	"\n<!-- SECONDS extraction and formatting -->"
			 +	"\n<xsl:variable name=\"__ss\">"
			 +	"\n\t<xsl:variable name=\"__raw_ss\" select=\"substring-after(substring-after($__time_extracted, ':'), ':')\"/>\n"
			 +	"\n\t<xsl:choose>"
			 +	"\n\t\t<xsl:when test=\"string-length($__raw_ss) = 0\">00</xsl:when>"
			 +	"\n\t\t<xsl:otherwise><xsl:value-of select=\"$__raw_ss\"/></xsl:otherwise>"
			 +	"\n\t</xsl:choose>"
			 +	"\n</xsl:variable>\n"
			 +	"\n<!-- time displayed iff it complies with RFC 3339 format -->"
			 +	"\n<xsl:choose>"
			 +	"\n\t<xsl:when test=\"string-length($__time_extracted) = 0\"/>\n"
			 +	"\n\t<!-- RFC 3339 time-zone constraint relaxed -->"
			 +	"\n\t<!--"
			 +	"\n\t<xsl:when test=\"not($__time_zone_shift = 'Z') and not(translate($__time_zone_shift, '+-0123456789:', '0000000000000') = '000000')\">INVALID TIME ZONE</xsl:when>"
			 +	"\n\t-->\n"
			 +	"\n\t<xsl:otherwise>"
			 +	"\n\t\t<xsl:value-of select=\"concat($__hh, ':', $__mm, ':', $__ss, $__time_zone_shift)\"/>"
			 +	"\n\t</xsl:otherwise>"
			 +	"\n</xsl:choose>"
			 +	"\n</xsl:template> <!-- END template extract-time -->\n"
			 +	"\n<!-- RFC3339_TIME extract-date(String string,"
             +  "\n\t\t\t\t\tString month = \"\","
             +  "\n\t\t\t\t\tString day = \"\","
             +  "\n\t\t\t\t\tString january,"
             +  "\n\t\t\t\t\tString february,"
             +  "\n\t\t\t\t\tString march,"
             +  "\n\t\t\t\t\tString april,"
             +  "\n\t\t\t\t\tString may,"
             +  "\n\t\t\t\t\tString june,"
             +  "\n\t\t\t\t\tString july,"
             +  "\n\t\t\t\t\tString august,"
             +  "\n\t\t\t\t\tString september,"
             +  "\n\t\t\t\t\tString october,"
             +  "\n\t\t\t\t\tString november,"
             +  "\n\t\t\t\t\tString december) -->"
			 +	"\n<xsl:template name=\"extract-date\">"
			 +	"\n\t<xsl:param name=\"string\"/>"
			 +	"\n\t<xsl:param name=\"month\"/>"
			 +	"\n\t<xsl:param name=\"day\"/>\n"
			 +	"\n\t<xsl:param name=\"january\"/>"
			 +	"\n\t<xsl:param name=\"february\"/>"
			 +	"\n\t<xsl:param name=\"march\"/>"
			 +	"\n\t<xsl:param name=\"april\"/>"
			 +	"\n\t<xsl:param name=\"may\"/>"
			 +	"\n\t<xsl:param name=\"june\"/>"
			 +	"\n\t<xsl:param name=\"july\"/>"
			 +	"\n\t<xsl:param name=\"august\"/>"
			 +	"\n\t<xsl:param name=\"september\"/>"
			 +	"\n\t<xsl:param name=\"october\"/>"
			 +	"\n\t<xsl:param name=\"november\"/>"
			 +	"\n\t<xsl:param name=\"december\"/>\n"
			 +	"\n\t<xsl:variable name=\"__lower\" select=\"('abcdefghijklmnopqrstuvwxyz')\"/>"
			 +	"\n\t<xsl:variable name=\"__upper\" select=\"('ABCDEFGHIJKLMNOPQRSTUVWXYZ')\"/>"
			 +	"\n\t<xsl:variable name=\"__digit\" select=\"('0123456789')\"/>"
			 +	"\n\t<xsl:variable name=\"__zero\" select=\"('0000000000')\"/>\n"
			 +	"\n\t<xsl:variable name=\"__string\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($string, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__month\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($month, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__day\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($day, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__january\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($january, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__february\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($february, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__march\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($march, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__april\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($april, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__may\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($may, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__june\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($june, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__july\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($july, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__august\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($august, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__september\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($september, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__october\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($october, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__november\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($november, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__december\">"
			 +	"\n\t\t<xsl:value-of select=\"translate($december, $__lower, $__upper)\"/>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__dateRaw_mask\" select=\"translate($__string, $__digit, $__zero)\"/>\n"
			 +	"\n\t<xsl:variable name=\"__raw_MM_normalized\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"string-length($__month) = 0\"><xsl:value-of select=\"$__string\"/></xsl:when>"
			 +	"\n\t\t\t<xsl:otherwise><xsl:value-of select=\"$__month\"/></xsl:otherwise>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__MM_mask\" select=\"translate($__raw_MM_normalized, $__digit, $__zero)\"/>\n"
			 +	"\n\t<xsl:variable name=\"__raw_DD_normalized\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"string-length($__month) = 0\"><xsl:value-of select=\"$__string\"/></xsl:when>"
			 +	"\n\t\t\t<xsl:otherwise><xsl:value-of select=\"$__day\"/></xsl:otherwise>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>"
			 +	"\n\t<xsl:variable name=\"__DD_mask\" select=\"translate($__raw_DD_normalized, $__digit, $__zero)\"/>\n"
			 +	"\n\t<xsl:variable name=\"__YYYY\" select=\"substring($__string, string-length(substring-before($__dateRaw_mask, '0000')) + 1, 4)\"/>\n"
			 +	"\n\t<xsl:variable name=\"__MM\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__january)\">01</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__february)\">02</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__march)\">03</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__april)\">04</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__may)\">05</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__june)\">06</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__july)\">07</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__august)\">08</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__september)\">09</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__october)\">10</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__november)\">11</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains($__raw_MM_normalized, $__december)\">12</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__MM_mask = '0'\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"concat('0', $__raw_MM_normalized)\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__MM_mask = '00'\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"$__raw_MM_normalized\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__DD\">"
			 +	"\n\t\t<xsl:choose>"
			 +	"\n\t\t\t<xsl:when test=\"$__DD_mask = '0'\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"concat('0', $__raw_DD_normalized)\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"$__DD_mask = '00'\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"$__raw_DD_normalized\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains(substring-before($__DD_mask, '0000'), '00')\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"substring($__raw_DD_normalized, string-length(substring-before($__dateRaw_mask, '00')) + 1, 2)\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains(substring-before($__DD_mask, '0000'), '0')\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"concat('0', substring($__raw_DD_normalized, string-length(substring-before($__dateRaw_mask, '0')) + 1, 1))\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains(substring-after($__DD_mask, '0000'), '00')\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"substring($__raw_DD_normalized, string-length(substring-before(substring-after($__dateRaw_mask, '0000'), '00')) + 1, 2)\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t\t<xsl:when test=\"contains(substring-after($__DD_mask, '0000'), '0')\">"
			 +	"\n\t\t\t\t<xsl:value-of select=\"concat('0', substring($__raw_DD_normalized, string-length(substring-before(substring-after($__dateRaw_mask, '0000'), '0')) + 1, 1))\"/>"
			 +	"\n\t\t\t</xsl:when>"
			 +	"\n\t\t</xsl:choose>"
			 +	"\n\t</xsl:variable>\n"
			 +	"\n\t<xsl:variable name=\"__is_YYYY\" select=\"translate($__YYYY, $__digit, $__zero) = '0000'\"/>"
			 +	"\n\t<xsl:variable name=\"__is_MM\" select=\"translate($__MM, $__digit, $__zero) = '00'\"/>"
			 +	"\n\t<xsl:variable name=\"__is_DD\" select=\"translate($__DD, $__digit, $__zero) = '00'\"/>\n"
			 +	"\n\t<xsl:choose>"
			 +	"\n\t\t<xsl:when test=\"not($__is_YYYY) or not($__is_MM) or not($__is_DD)\"/>"
			 +	"\n\t\t<xsl:otherwise>"
			 +	"\n\t\t\t<xsl:value-of select=\"concat($__YYYY, '-', $__MM, '-', $__DD)\"/>"
			 +	"\n\t\t</xsl:otherwise>"
			 +	"\n\t</xsl:choose>"
			 +	"\n</xsl:template> <!-- END template extract-date -->";

var dateTimeCallEnglish = "\n\t\t<xsl:call-template name=\"extract-time-rfc3339\">"
						+ "\n\t\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"$__string\"/></xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"month\">"
						+ "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__month_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
						+ "\n\t\t\t</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"day\">"
					    + "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__day_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
					    + "\n\t\t\t</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"january\">jan</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"february\">feb</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"march\">mar</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"april\">apr</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"may\">may</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"june\">jun</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"july\">jul</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"august\">aug</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"september\">sep</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"october\">oct</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"november\">nov</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"december\">dec</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"time-delimiters\">:hH</xsl:with-param>"
						+ "\n\t\t</xsl:call-template>";

var dateTimeCallFrench = "\n\t\t<xsl:call-template name=\"extract-time-rfc3339\">"
						+ "\n\t\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"translate($__string, 'ûפךיטמגאש', 'uoeeeiaau')\"/></xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"month\">"
						+ "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__month_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
						+ "\n\t\t\t</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"day\">"
					    + "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__day_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
					    + "\n\t\t\t</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"january\">jan</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"february\">fev</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"march\">mar</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"april\">avr</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"may\">mai</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"june\">juin</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"july\">juil</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"august\">aou</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"september\">sep</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"october\">oct</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"november\">nov</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"december\">dec</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"time-delimiters\">:hH</xsl:with-param>"
						+ "\n\t\t</xsl:call-template>";
						
var dateTimeCallItalian = "\n\t\t<xsl:call-template name=\"extract-time-rfc3339\">"
						+ "\n\t\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"$__string\"/></xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"month\">"
						+ "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__month_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
						+ "\n\t\t\t</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"day\">"
					    + "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__day_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
					    + "\n\t\t\t</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"january\">gen</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"february\">feb</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"march\">mar</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"april\">apr</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"may\">mag</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"june\">giu</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"july\">lug</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"august\">ago</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"september\">set</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"october\">oct</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"november\">nov</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"december\">dic</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"time-delimiters\">:hH</xsl:with-param>"
						+ "\n\t\t</xsl:call-template>";
						
var dateTimeCallSpanish = "\n\t\t<xsl:call-template name=\"extract-time-rfc3339\">"
						+ "\n\t\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"$__string\"/></xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"month\">"
						+ "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__month_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
						+ "\n\t\t\t</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"day\">"
					    + "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__day_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
					    + "\n\t\t\t</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"january\">ene</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"february\">feb</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"march\">mar</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"april\">abr</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"may\">may</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"june\">jun</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"july\">jul</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"august\">ago</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"september\">sep</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"october\">oct</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"november\">nov</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"december\">dic</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"time-delimiters\">:hH</xsl:with-param>"
						+ "\n\t\t</xsl:call-template>";
						
var dateTimeCallGerman = "\n\t\t<xsl:call-template name=\"extract-time-rfc3339\">"
						+ "\n\t\t\t<xsl:with-param name=\"string\"><xsl:value-of select=\"translate($__string, 'הü', 'au')\"/></xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"month\">"
						+ "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__month_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
						+ "\n\t\t\t</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"day\">"
					    + "\n\t\t\t\t<xsl:if test=\"$__test_md\">"
						+ "\n\t\t\t\t\t<xsl:value-of select=\"$__day_candidate\"/>"
						+ "\n\t\t\t\t</xsl:if>"
					    + "\n\t\t\t</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"january\">jan</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"february\">feb</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"march\">mar</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"april\">apr</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"may\">may</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"june\">jun</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"july\">jul</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"august\">aug</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"september\">sep</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"october\">okt</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"november\">nov</xsl:with-param>"
						+ "\n\t\t\t<xsl:with-param name=\"december\">dez</xsl:with-param>\n"
						+ "\n\t\t\t<xsl:with-param name=\"time-delimiters\">:hH</xsl:with-param>"
						+ "\n\t\t</xsl:call-template>";

//insert at cursor			 
function insertAtCursor(myField, myValue){
	if (myField.selectionStart || myField.selectionStart == '0') {
		var startPos = myField.selectionStart;
		var endPos = myField.selectionEnd;
		myField.value = myField.value.substring(0, startPos)
					  + myValue
					  + myField.value.substring(endPos, myField.value.length);
	} else {
		myField.value += myValue;
	}
}

//call template functions	
function templatePathSelectorCall(textarea){
	insertAtCursor(textarea, pathSelectorCall);
}

function templatePhoneExtraction(textarea){
	insertAtCursor(textarea, phoneExtraction);
}

function templatePhoneExtractionCall(textarea){
	insertAtCursor(textarea, phoneExtractionCall);
}

function templatePicture(textarea){
	insertAtCursor(textarea, pictureUrls);
}

function templateTokenize(textarea){
	insertAtCursor(textarea, tokenize);
}

function templateTokenizeCall(textarea){
	insertAtCursor(textarea, tokenizeCall);
}

function templateDateTime(textarea){
	insertAtCursor(textarea, dateTime);
}

function templateDateTimeCallEnglish(textarea){
	insertAtCursor(textarea, dateTimeCallEnglish);
}

function templateDateTimeCallFrench(textarea){
	insertAtCursor(textarea, dateTimeCallFrench);
}

function templateDateTimeCallSpanish(textarea){
	insertAtCursor(textarea, dateTimeCallSpanish);
}

function templateDateTimeCallItalian(textarea){
	insertAtCursor(textarea, dateTimeCallItalian);
}

function templateDateTimeCallGerman(textarea){
	insertAtCursor(textarea, dateTimeCallGerman);
}

//new browser			
function openTarget(targetURL){
	var tBrowser = document.getElementById("content");
	var tab = tBrowser.addTab(targetURL);
	tBrowser.selectedTab = tab;
}

//other tab functions
function siefDomainSearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/editor/index.php?email=&siefId=&market=All&type=All&state=All&progress=All&svvmstate=all&domain=%25" + encodeURI(query) + "%25";
	openTarget(target);
} 

function siefEditorSearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/editor/editor.php?siefId=" + encodeURI(query);
	openTarget(target);
} 

function siefOutputSearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/output.php?siefId=" + encodeURI(query);
	openTarget(target);
} 

function siefLogSearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/view.php?fileType=log&siefId=" + encodeURI(query);
	openTarget(target);
} 

function siefHistorySearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/ruleHistory.php?siefId=" + encodeURI(query);
	openTarget(target);
} 

function siefReviewerSearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/review/review.php?siefId=" + encodeURI(query);
	openTarget(target);
} 

function siefAdminSearch(event){
	var query = document.getElementById("siefQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/admin/jobs.php?email=&siefId=" + encodeURI(query) + "&market=All&type=All&state=All&progress=All&svvmstate=all&domain=";
	openTarget(target);
} 

function siefCreateNew(){
	var target = "http://svvm.yst.corp.yahoo.com:4080/index";
	openTarget(target);
} 

function siefSignUp(){
	var target = "http://svvm.yst.corp.yahoo.com:4080/signup/index.php";
	openTarget(target);
} 

function siefEditorHome(){
	var target = "http://svvm.yst.corp.yahoo.com:4080/editor/index.php";
	openTarget(target);
} 

function siefReviewerHome(){
	var target = "http://svvm.yst.corp.yahoo.com:4080/review/index.php";
	openTarget(target);
} 

function siefAdminHome(){
	var target = "http://svvm.yst.corp.yahoo.com:4080/admin/jobs.php";
	openTarget(target);
} 

function twikiEscalationAndrea(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationMcFall";
	openTarget(target);
} 

function twikiEscalationAstrid(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationHertwig";
	openTarget(target);
} 

function twikiEscalationBertrand(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationBlanc";
	openTarget(target);
} 

function twikiEscalationChris(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationEvonne";
	openTarget(target);
} 

function twikiEscalationCliff(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationTanaka";
	openTarget(target);
} 

function twikiEscalationMatt(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationBoyd";
	openTarget(target);
} 

function twikiEscalationSean(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationLightholder";
	openTarget(target);
} 

function twikiSecondEscalation(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/EscalationList";
	openTarget(target);
} 

function twikiManualPush(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/SdQAManualPush";
	openTarget(target);
} 

function twikiHome(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/WebHome";
	openTarget(target);
} 

function bugWishlist(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/SdBugs";
	openTarget(target);
} 

function bugKnownIssues(){
	var target = "http://twiki.corp.yahoo.com/view/Searched/StructuredData/KnownIssues";
	openTarget(target);
} 

function bugSiefOutage(){
	var target = "http://bug.corp.yahoo.com/enter_bug.cgi?product=Rich%20Results&component=Editorial%20XSLT%20rules&status_whiteboard=Structured%20Data%20Extraction&emailassigned_to1=1&emailtype1=exact&email1=yst-content-ops%40yahoo-inc.com";
	openTarget(target);
} 

function bugXSLTBug(){
	var target = "http://bug.corp.yahoo.com/enter_bug.cgi?product=Rich%20Results&component=Editorial%20XSLT%20rules&status_whiteboard=Structured%20Data%20Extraction&emailassigned_to1=1&emailtype1=exact&email1=asakhuja%40yahoo-inc.com";
	openTarget(target);
} 

function bugSiefBug(){
	var target = "http://bug.corp.yahoo.com/enter_bug.cgi?product=Rich%20Results&component=SVVM%20UI&status_whiteboard=Structured%20Data%20Extraction&emailassigned_to1=1&emailtype1=exact&email1=kkalyan%40yahoo-inc.com";
	openTarget(target);
} 

function bugSiefRelated(){
	var target = "http://bug.corp.yahoo.com/enter_bug.cgi?product=Rich%20Results&component=SVVM%20UI&status_whiteboard=Structured%20Data%20Extraction&emailassigned_to1=1&emailtype1=exact&email1=sumanths%40yahoo-inc.com";
	openTarget(target);
} 

function bugFESRP(){
	var target = "http://bug.corp.yahoo.com/enter_bug.cgi?product=Search&component=Core%20SRP%20-%20Search%20Monkey&status_whiteboard=Structured%20Data%20Extraction&emailassigned_to1=1&emailtype1=exact&email1=natashaf%40yahoo-inc.com";
	openTarget(target);
} 

function bugCrawl(){
	var target = "http://bug.corp.yahoo.com/enter_bug.cgi?product=yst-content-Crawling&component=catalog&status_whiteboard=Structured%20Data%20Extraction&emailassigned_to1=1&emailtype1=exact&email1=ruslanm%40yahoo-inc.com";
	openTarget(target);
} 

function backYard(){
	var target = "http://backyard.yahoo.com/homepage/us/";
	openTarget(target);
} 

function tokei(){
	var target = "http://rtdev4.search.corp.sp1.yahoo.com:12000/cgi-bin/sisyphus/menu.cgi";
	openTarget(target);
} 

function workForce(){
	var target = "http://yahoo.workforcelogic.com/";
	openTarget(target);
} 

function astridizerCache(event){
	var query = document.getElementById("siefQuery").value;
	var astrid = document.getElementById("astridizerQuery").value;
	var target = "http://svvm.yst.corp.yahoo.com:4080/cachePage.php?siefId=" + encodeURI(query) + "&url=" + encodeURI(astrid);
	openTarget(target);
} 

function astridizerLive(event){
	var astrid = document.getElementById("astridizerQuery").value;
	var target = encodeURI(astrid);
	openTarget(target);
} 

function astridizerLive(event){
	var astrid = document.getElementById("astridizerQuery").value;
	var target = encodeURI(astrid);
	openTarget(target);
} 



