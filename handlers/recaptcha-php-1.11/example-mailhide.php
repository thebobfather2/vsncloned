<html><body>
<?
require_once ("recaptchalib.php");

// get a key at https://www.google.com/recaptcha/mailhide/apikey
$mailhide_pubkey = '6Led7P0SAAAAANl3xsvkFZDflowZZz8O48q5Us2v';
$mailhide_privkey = '6Led7P0SAAAAACS1vq-RSydImtmYUh3BkjX6gNlu';

?>

The Mailhide version of example@example.com is
<? echo recaptcha_mailhide_html ($mailhide_pubkey, $mailhide_privkey, "example@example.com"); ?>. <br>

The url for the email is:
<? echo recaptcha_mailhide_url ($mailhide_pubkey, $mailhide_privkey, "example@example.com"); ?> <br>

</body></html>
