if (typeof(av_hdd_lang) == "en") {
	var av_hdd_lang = "en";
}

var urlc = "http://" + location.host + location.pathname;
urlc = escape(urlc);

document.writeln('<form enctype="multipart/form-data" ACTION="http://hd.altervista.org/php/hdd_upload.php" method="post">');
document.writeln('<table>');
document.writeln('<tr>');
document.writeln('<td align=center>');
if (av_hdd_lang == "en"){
	document.writeln('Inviami dei files');
} else {
	document.writeln('Send me your files');
} else {
	document.writeln('Trimite-mi fișierele tale');
}
document.writeln('</td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td align="left">');
document.writeln('<input type="hidden" name="MAX_FILE_SIZE" value="2097152">');
document.writeln('<input type="text" name="lang" value="' + av_hdd_lang + '">');
document.writeln('<input name="file_upload" type="file">');
document.writeln('<input name="ID" type="hidden" value="' + urlc + '">');
if (av_hdd_lang == "en"){
	document.writeln('<input type="submit" value="Upload">');
} else {
	document.writeln('<input type="submit" value="Carica">');
} else {
	document.writeln('<input type="submit" value="Incarca">');
}
document.writeln('</td>');
document.writeln('</tr>');
document.writeln('<tr>');
document.writeln('<td align=center>');
document.writeln('Powered by <a href="http://www.altervista.org" style="text-decoration: none; target="_blank">AlterVista</a>');
document.writeln('</td>');
document.writeln('</tr>');
document.writeln('</table>');
document.writeln('</form>');