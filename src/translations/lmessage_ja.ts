<?xml version="1.0" ?><!DOCTYPE TS><TS language="ja" sourcelanguage="en" version="2.0">
<context>
    <name>AddAddressDialog</name>
    <message>
        <location filename="../lmessageqt/addaddressdialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>新しい項目を追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/addaddressdialog.ui" line="29"/>
        <source>Label</source>
        <translation>ラベル</translation>
    </message>
    <message>
        <location filename="../lmessageqt/addaddressdialog.ui" line="39"/>
        <source>Address</source>
        <translation>アドレス</translation>
    </message>
</context>
<context>
    <name>EmailGatewayDialog</name>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="14"/>
        <source>Email gateway</source>
        <translation>メールゲートウェイ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="30"/>
        <source>Register on email gateway</source>
        <translation>メールゲートウェイで登録</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="82"/>
        <source>Account status at email gateway</source>
        <translation>メールゲートウェイのアカウント状態</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="95"/>
        <source>Change account settings at email gateway</source>
        <translation>メールゲートウェイでアカウントの設定を変更</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="108"/>
        <source>Unregister from email gateway</source>
        <translation>メールゲートウェイから登録抹消</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="69"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.</source>
        <translation>メールゲートウェイを使用すると、メールユーザーと通信できます。 現在、Mailchuck メールゲートウェイ (@mailchuck.com) のみが利用可能です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="23"/>
        <source>Desired email address (including @mailchuck.com):</source>
        <translation>希望のメールアドレス (@mailchuck.com を含む):</translation>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.ui" line="59"/>
        <source>@mailchuck.com</source>
        <translation>@mailchuck.com</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="286"/>
        <source>Registration failed:</source>
        <translation>登録に失敗しました:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="288"/>
        <source>The requested email address is not available, please try a new one.</source>
        <translation>リクエストしたメールアドレスは利用できません。新しいメールアドレスを試してください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="334"/>
        <source>Sending email gateway registration request</source>
        <translation>メールゲートウェイの登録リクエストを送信しています</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="342"/>
        <source>Sending email gateway unregistration request</source>
        <translation>メールゲートウェイの登録抹消リクエストを送信しています</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="348"/>
        <source>Sending email gateway status request</source>
        <translation>メールゲートウェイの状態リクエストを送信しています</translation>
    </message>
</context>
<context>
    <name>EmailGatewayRegistrationDialog</name>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2266"/>
        <source>Registration failed:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2266"/>
        <source>The requested email address is not available, please try a new one. Fill out the new desired email address (including @mailchuck.com) below:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.py" line="102"/>
        <source>Email gateway registration</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/emailgateway.py" line="103"/>
        <source>Email gateway allows you to communicate with email users. Currently, only the Mailchuck email gateway (@mailchuck.com) is available.
Please type the desired email address (including @mailchuck.com) below:</source>
        <translation type="unfinished"/>
    </message>
</context>
<context>
    <name>Mailchuck</name>
    <message>
        <location filename="../lmessageqt/account.py" line="225"/>
        <source># You can use this to configure your email gateway account
# Uncomment the setting you want to use
# Here are the options:
# 
# pgp: server
# The email gateway will create and maintain PGP keys for you and sign, verify,
# encrypt and decrypt on your behalf. When you want to use PGP but are lazy,
# use this. Requires subscription.
#
# pgp: local
# The email gateway will not conduct PGP operations on your behalf. You can
# either not use PGP at all, or use it locally.
#
# attachments: yes
# Incoming attachments in the email will be uploaded to MEGA.nz, and you can
# download them from there by following the link. Requires a subscription.
#
# attachments: no
# Attachments will be ignored.
# 
# archive: yes
# Your incoming emails will be archived on the server. Use this if you need
# help with debugging problems or you need a third party proof of emails. This
# however means that the operator of the service will be able to read your
# emails even after they have been delivered to you.
#
# archive: no
# Incoming emails will be deleted from the server as soon as they are relayed
# to you.
#
# masterpubkey_btc: BIP44 xpub key or electrum v1 public seed
# offset_btc: integer (defaults to 0)
# feeamount: number with up to 8 decimal places
# feecurrency: BTC, XBT, USD, EUR or GBP
# Use these if you want to charge people who send you emails. If this is on and
# an unknown person sends you an email, they will be requested to pay the fee
# specified. As this scheme uses deterministic public keys, you will receive
# the money directly. To turn it off again, set &quot;feeamount&quot; to 0. Requires
# subscription.
</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/account.py" line="299"/>
        <source># You can use this to configure your email gateway account
# Uncomment the setting you want to use
# Here are the options:
#
# pgp: server
# The email gateway will create and maintain PGP keys for you and sign, verify,
# encrypt and decrypt on your behalf. When you want to use PGP but are lazy,
# use this. Requires subscription.
#
# pgp: local
# The email gateway will not conduct PGP operations on your behalf. You can
# either not use PGP at all, or use it locally.
#
# attachments: yes
# Incoming attachments in the email will be uploaded to MEGA.nz, and you can
# download them from there by following the link. Requires a subscription.
#
# attachments: no
# Attachments will be ignored.
#
# archive: yes
# Your incoming emails will be archived on the server. Use this if you need
# help with debugging problems or you need a third party proof of emails. This
# however means that the operator of the service will be able to read your
# emails even after they have been delivered to you.
#
# archive: no
# Incoming emails will be deleted from the server as soon as they are relayed
# to you.
#
# masterpubkey_btc: BIP44 xpub key or electrum v1 public seed
# offset_btc: integer (defaults to 0)
# feeamount: number with up to 8 decimal places
# feecurrency: BTC, XBT, USD, EUR or GBP
# Use these if you want to charge people who send you emails. If this is on and
# an unknown person sends you an email, they will be requested to pay the fee
# specified. As this scheme uses deterministic public keys, you will receive
# the money directly. To turn it off again, set &quot;feeamount&quot; to 0. Requires
# subscription.
</source>
        <translation># これを使用して、メールゲートウェイアカウントを設定できます
# 使用する設定のコメントを外してください
# オプションは次のとおりです:
# 
# pgp: server
# メールゲートウェイは、あなたのために PGP 鍵を作成および管理し、
# あなたに代わって署名、検証、暗号化と復号化を行います。 PGPを使用したいが、
# 面倒なときは、これを使用してください。 サブスクリプションが必要です。
#
# pgp: local
# メールゲートウェイは、あなたに代わって PGP 操作を行いません。
# PGP をまったく使用しないか、ローカルで使用することができます。
#
# attachments: yes
# 受信メールの添付ファイルは MEGA.nz にアップロードされ、リンクをフォローして
# そこからダウンロードすることができます。 サブスクリプションが必要です。
#
# attachments: no
# 添付ファイルは無視されます。
# 
# archive: yes
# 受信メールはサーバーにアーカイブされます。 問題のデバッグで支援が必要な場合や、
# メールの第三者証明が必要な場合に、これを使用してください。 しかし、これは、
# メールがあなたに配信された後でも、サービスの運営者があなたのメールを
# 読むことができるということを意味します。
#
# archive: no
# 受信メールは、あなたに転送されるとすぐにサーバーから削除されます。
#
# masterpubkey_btc: BIP44 xpub key または electrum v1 public seed
# offset_btc: 整数 (デフォルトは 0)
# feeamount: 小数点以下 8 桁までの数字
# feecurrency: BTC, XBT, USD, EUR または GBP
# メールを送信した人に請求したい場合に、これらを使用します。 これがオンで、
# 不明な人があなたにメールを送信した場合、指定された手数料を支払うように要求されます。
# この方式は決定的な公開鍵を使用するため、直接お金を受け取ることになります。
# もう一度オフにするには、「feeamount」を 0 に設定します。
# サブスクリプションが必要です。
</translation>
    </message>
</context>
<context>
    <name>MainWindow</name>
    <message>
        <location filename="../lmessageqt/__init__.py" line="166"/>
        <source>Reply to sender</source>
        <translation>送信元に返信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="168"/>
        <source>Reply to channel</source>
        <translation>チャンネルに返信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="170"/>
        <source>Add sender to your Address Book</source>
        <translation>送信元をアドレス帳に追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="174"/>
        <source>Add sender to your Blacklist</source>
        <translation>送信元をブラックリストに追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="374"/>
        <source>Move to Trash</source>
        <translation>ゴミ箱へ移動</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="181"/>
        <source>Undelete</source>
        <translation>削除を元に戻す</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="184"/>
        <source>View HTML code as formatted text</source>
        <translation>HTMLコードを整形したテキストで表示</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="188"/>
        <source>Save message as...</source>
        <translation>形式を選択してメッセージを保存</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="192"/>
        <source>Mark Unread</source>
        <translation>未読にする</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="346"/>
        <source>New</source>
        <translation>新規</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="122"/>
        <source>Enable</source>
        <translation>有効</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="125"/>
        <source>Disable</source>
        <translation>無効</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="128"/>
        <source>Set avatar...</source>
        <translation>アバターを設定...</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="118"/>
        <source>Copy address to clipboard</source>
        <translation>アドレスをコピー</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="293"/>
        <source>Special address behavior...</source>
        <translation>アドレスの特別な動作</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="240"/>
        <source>Email gateway</source>
        <translation>メールゲートウェイ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="115"/>
        <source>Delete</source>
        <translation>削除</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="309"/>
        <source>Send message to this address</source>
        <translation>このアドレスへ送信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="317"/>
        <source>Subscribe to this address</source>
        <translation>このアドレスを購読</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="329"/>
        <source>Add New Address</source>
        <translation>アドレスを追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="377"/>
        <source>Copy destination address to clipboard</source>
        <translation>宛先アドレスをコピー</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="381"/>
        <source>Force send</source>
        <translation>強制的に送信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="597"/>
        <source>One of your addresses, %1, is an old version 1 address. Version 1 addresses are no longer supported. May we delete it now?</source>
        <translation>%1は古いバージョン1のアドレスです。バージョン1のアドレスはサポートが終了しています。すぐに削除しますか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1042"/>
        <source>Waiting for their encryption key. Will request it again soon.</source>
        <translation>暗号鍵を待っています。 すぐにもう一度リクエストします。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="990"/>
        <source>Encryption key request queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1048"/>
        <source>Queued.</source>
        <translation>キューに入りました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1051"/>
        <source>Message sent. Waiting for acknowledgement. Sent at %1</source>
        <translation>メッセージを送信しました。 確認応答を待っています。 %1 で送信されました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1054"/>
        <source>Message sent. Sent at %1</source>
        <translation>メッセージは送信されました。送信先: %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1002"/>
        <source>Need to do work to send message. Work is queued.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1060"/>
        <source>Acknowledgement of the message received %1</source>
        <translation>メッセージの確認を受け取りました %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2152"/>
        <source>Broadcast queued.</source>
        <translation>配信がキューに入りました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1069"/>
        <source>Broadcast on %1</source>
        <translation>配信: %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1072"/>
        <source>Problem: The work demanded by the recipient is more difficult than you are willing to do. %1</source>
        <translation>問題: 受信者が要求している処理は現在あなたが設定しているよりも高い難易度です。 %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1075"/>
        <source>Problem: The recipient&apos;s encryption key is no good. Could not encrypt message. %1</source>
        <translation>問題: 受信者の暗号鍵は正当でない物です。メッセージを暗号化できません。 %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1078"/>
        <source>Forced difficulty override. Send should start soon.</source>
        <translation>難易度を強制上書きしました。まもなく送信されます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1081"/>
        <source>Unknown status: %1 %2</source>
        <translation>不明なステータス: %1 %2</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1622"/>
        <source>Not Connected</source>
        <translation>未接続</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1212"/>
        <source>Show LMessage</source>
        <translation>LMessageを表示</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="709"/>
        <source>Send</source>
        <translation>送る</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1235"/>
        <source>Subscribe</source>
        <translation>購読</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1241"/>
        <source>Channel</source>
        <translation>チャンネル</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="755"/>
        <source>Quit</source>
        <translation>終了</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1467"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file.</source>
        <translation>プログラムと同じディレクトリに保存されているkeys.datファイルを編集することで鍵を管理できます。ファイルをバックアップしておくことは重要です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1471"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 %1 
It is important that you back up this file.</source>
        <translation>%1
に保存されているkeys.datファイルを編集することで鍵を管理できます。
このファイルをバックアップしておくことは重要です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1478"/>
        <source>Open keys.dat?</source>
        <translation>keys.datを開きますか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1475"/>
        <source>You may manage your keys by editing the keys.dat file stored in the same directory as this program. It is important that you back up this file. Would you like to open the file now? (Be sure to close LMessage before making any changes.)</source>
        <translation>プログラムと同じディレクトリに保存されているkeys.datファイルを編集することで鍵を管理できます。このファイルをバックアップしておくことは重要です。すぐにファイルを開きますか？（必ず編集する前にLMessageを終了してください）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1478"/>
        <source>You may manage your keys by editing the keys.dat file stored in
 %1 
It is important that you back up this file. Would you like to open the file now? (Be sure to close LMessage before making any changes.)</source>
        <translation>%1
に保存されているkeys.datファイルを編集することで鍵を管理できます。
ファイルをバックアップしておくことは重要です。すぐにファイルを開きますか？（必ず編集する前にLMessageを終了してください）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1485"/>
        <source>Delete trash?</source>
        <translation>ゴミ箱を空にしますか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1485"/>
        <source>Are you sure you want to delete all trashed messages?</source>
        <translation>ゴミ箱内のメッセージを全て削除してもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1503"/>
        <source>bad passphrase</source>
        <translation>不正なパスフレーズ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1503"/>
        <source>You must type your passphrase. If you don&apos;t have one then this is not the form for you.</source>
        <translation>パスフレーズを入力してください。パスフレーズがない場合は入力する必要はありません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1526"/>
        <source>Bad address version number</source>
        <translation>不正なアドレスのバージョン番号</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1516"/>
        <source>Your address version number must be a number: either 3 or 4.</source>
        <translation>アドレスのバージョン番号は数字にする必要があります: 3 または 4。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1526"/>
        <source>Your address version number must be either 3 or 4.</source>
        <translation>アドレスのバージョン番号は、3 または 4 のどちらかにする必要があります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1608"/>
        <source>Chan name needed</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1608"/>
        <source>You didn&apos;t enter a chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1628"/>
        <source>Address already present</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1628"/>
        <source>Could not add chan because it appears to already be one of your identities.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1632"/>
        <source>Success</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1603"/>
        <source>Successfully created chan. To let others join your chan, give them the chan name and this LMessage address: %1. This address also appears in &apos;Your Identities&apos;.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1612"/>
        <source>Address too new</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1612"/>
        <source>Although that LMessage address might be valid, its version number is too new for us to handle. Perhaps you need to upgrade LMessage.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1616"/>
        <source>Address invalid</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1616"/>
        <source>That LMessage address is not valid.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1624"/>
        <source>Address does not match chan name</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1624"/>
        <source>Although the LMessage address you entered was valid, it doesn&apos;t match the chan name.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1632"/>
        <source>Successfully joined chan. </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1607"/>
        <source>Connection lost</source>
        <translation>接続が切断されました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1657"/>
        <source>Connected</source>
        <translation>接続済み</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1777"/>
        <source>Message trashed</source>
        <translation>メッセージが削除されました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1866"/>
        <source>The TTL, or Time-To-Live is the length of time that the network will hold the message.
 The recipient must get it during this time. If your LMessage client does not hear an acknowledgement, it
 will resend the message automatically. The longer the Time-To-Live, the
 more work your computer must do to send the message. A Time-To-Live of four or five days is often appropriate.</source>
        <translation>TTL または Time-To-Live は、ネットワークがメッセージを保持する時間の長さです。
受信者は、この時間の間に取得する必要があります。 LMessage クライアントが確認応答を受け取らないと、
自動的にメッセージが再送信されます。 TTL（Time-To-Live）が長くなるほど、
コンピュータがメッセージを送信するために必要な処理が増えます。 多くの場合 4〜5 日のTTL（Time-To-Live）が適切です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1911"/>
        <source>Message too long</source>
        <translation>メッセージが長すぎます</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1911"/>
        <source>The message that you are trying to send is too long by %1 bytes. (The maximum is 261644 bytes). Please cut it down before sending.</source>
        <translation>送信しようとしているメッセージが %1 バイト長すぎます。  (最大は261644バイトです)。 送信する前に短くしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1953"/>
        <source>Error: Your account wasn&apos;t registered at an email gateway. Sending registration now as %1, please wait for the registration to be processed before retrying sending.</source>
        <translation>エラー: アカウントがメールゲートウェイに登録されていません。 今 %1 として登録を送信しています。送信を再試行する前に、登録が処理されるのをお待ちください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2008"/>
        <source>Error: LMessage addresses start with BM-   Please check %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2011"/>
        <source>Error: The address %1 is not typed or copied correctly. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2014"/>
        <source>Error: The address %1 contains invalid characters. Please check it.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2017"/>
        <source>Error: The address version in %1 is too high. Either you need to upgrade your LMessage software or your acquaintance is being clever.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2020"/>
        <source>Error: Some data encoded in the address %1 is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2023"/>
        <source>Error: Some data encoded in the address %1 is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2026"/>
        <source>Error: Some data encoded in the address %1 is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2029"/>
        <source>Error: Something is wrong with the address %1.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2104"/>
        <source>Error: You must specify a From address. If you don&apos;t have one, go to the &apos;Your Identities&apos; tab.</source>
        <translation>エラー: 送信元アドレスを指定してください。まだ作成していない場合には「アドレス一覧」のタブを開いてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2038"/>
        <source>Address version number</source>
        <translation>アドレスのバージョン番号</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2038"/>
        <source>Concerning the address %1, LMessage cannot understand address version numbers of %2. Perhaps upgrade LMessage to the latest version.</source>
        <translation>アドレス %1 に接続しています。%2 のバージョン番号は処理できません。LMessageを最新のバージョンへアップデートしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2042"/>
        <source>Stream number</source>
        <translation>ストリーム番号</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2042"/>
        <source>Concerning the address %1, LMessage cannot handle stream numbers of %2. Perhaps upgrade LMessage to the latest version.</source>
        <translation>アドレス %1 に接続しています。%2 のストリーム番号は処理できません。LMessageを最新のバージョンへアップデートしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2047"/>
        <source>Warning: You are currently not connected. LMessage will do the work necessary to send the message but it won&apos;t send until you connect.</source>
        <translation>警告: 接続されていません。LMessageはメッセージ送信の処理を行いますが、ネットワークに接続するまで送信はされません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2096"/>
        <source>Message queued.</source>
        <translation>メッセージがキューに入りました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2100"/>
        <source>Your &apos;To&apos; field is empty.</source>
        <translation>宛先が指定されていません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2161"/>
        <source>Right click one or more entries in your address book and select &apos;Send message to this address&apos;.</source>
        <translation>アドレス帳から一つ、または複数のアドレスを右クリックして「このアドレスへ送信」を選んでください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2177"/>
        <source>Fetched address from namecoin identity.</source>
        <translation>namecoin IDからアドレスを取得。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2289"/>
        <source>New Message</source>
        <translation>新規メッセージ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2260"/>
        <source>From </source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2638"/>
        <source>Sending email gateway registration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="60"/>
        <source>Address is valid.</source>
        <translation>アドレスが不正です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="94"/>
        <source>The address you entered was invalid. Ignoring it.</source>
        <translation>入力されたアドレスは不正です。無視されました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2319"/>
        <source>Error: You cannot add the same address to your address book twice. Try renaming the existing one if you want.</source>
        <translation>エラー: 同じアドレスを複数アドレス帳に追加する事はできません。既存の項目をリネームしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3359"/>
        <source>Error: You cannot add the same address to your subscriptions twice. Perhaps rename the existing one if you want.</source>
        <translation>エラー: 購読に、同じアドレスを2回追加することはできません。 必要に応じて、既存の名前を変更してください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2441"/>
        <source>Restart</source>
        <translation>再開</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2427"/>
        <source>You must restart LMessage for the port number change to take effect.</source>
        <translation>ポート番号の変更を有効にするにはLMessageを再起動してください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2441"/>
        <source>LMessage will use your proxy from now on but you may want to manually restart LMessage now to close existing connections (if any).</source>
        <translation>プロキシの設定を有効にするには手動でLMessageを再起動してください。既に接続がある場合は切断されます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2470"/>
        <source>Number needed</source>
        <translation>数字が必要です</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2470"/>
        <source>Your maximum download and upload rate must be numbers. Ignoring what you typed.</source>
        <translation>最大ダウンロード数とアップロード数は数字にする必要があります。 入力されたものを無視します。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2550"/>
        <source>Will not resend ever</source>
        <translation>今後再送信されません</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2550"/>
        <source>Note that the time limit you entered is less than the amount of time LMessage waits for the first resend attempt therefore your messages will never be resent.</source>
        <translation>入力した時間制限は、LMessageが最初の再送試行を待つ時間よりも短いため、メッセージは再送信されないことにご注意ください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2611"/>
        <source>Sending email gateway unregistration request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2615"/>
        <source>Sending email gateway status request</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="136"/>
        <source>Passphrase mismatch</source>
        <translation>パスフレーズが一致しません</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="136"/>
        <source>The passphrase you entered twice doesn&apos;t match. Try again.</source>
        <translation>再度入力されたパスフレーズが一致しません。再入力してください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="144"/>
        <source>Choose a passphrase</source>
        <translation>パスフレーズを選択してください</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="144"/>
        <source>You really do need a passphrase.</source>
        <translation>パスフレーズが必要です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3038"/>
        <source>Address is gone</source>
        <translation>アドレスが無効になりました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3038"/>
        <source>LMessage cannot find your address %1. Perhaps you removed it?</source>
        <translation>アドレス %1 が見つかりません。既に削除していませんか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3041"/>
        <source>Address disabled</source>
        <translation>アドレスが無効になりました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3041"/>
        <source>Error: The address from which you are trying to send is disabled. You&apos;ll have to enable it on the &apos;Your Identities&apos; tab before using it.</source>
        <translation>エラー: 送信しようとしたアドレスは無効になっています。使用する前に「アドレス一覧」で有効にしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3020"/>
        <source>Entry added to the Address Book. Edit the label to your liking.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3116"/>
        <source>Entry added to the blacklist. Edit the label to your liking.</source>
        <translation>ブラックリストに項目が追加されました。ラベルは自由に編集できます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3121"/>
        <source>Error: You cannot add the same address to your blacklist twice. Try renaming the existing one if you want.</source>
        <translation>エラー: ブラックリストに同じアドレスを2回追加することはできません。 必要に応じて既存の名前を変更してみてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3263"/>
        <source>Moved items to trash.</source>
        <translation>アイテムをゴミ箱へ移動。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3207"/>
        <source>Undeleted item.</source>
        <translation>アイテムの削除を元に戻します。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3231"/>
        <source>Save As...</source>
        <translation>形式を選択して保存</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3240"/>
        <source>Write error.</source>
        <translation>書き込みエラー。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3343"/>
        <source>No addresses selected.</source>
        <translation>アドレスが未選択です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3398"/>
        <source>If you delete the subscription, messages that you already received will become inaccessible. Maybe you can consider disabling the subscription instead. Disabled subscriptions will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the subscription?</source>
        <translation>購読を削除すると、すでに受信したメッセージにアクセスできなくなります。 代わりに、購読を無効にすることもできます。 無効になった購読は新しいメッセージを受信しませんが、受信したメッセージは表示できます。

購読を削除してもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3645"/>
        <source>If you delete the channel, messages that you already received will become inaccessible. Maybe you can consider disabling the channel instead. Disabled channels will not receive new messages, but you can still view messages you already received.

Are you sure you want to delete the channel?</source>
        <translation>チャンネルを削除すると、すでに受信したメッセージにアクセスできなくなります。 代わりに、チャンネルを無効にすることもできます。 無効になったチャンネルは新しいメッセージを受信しませんが、受信したメッセージは表示できます。

チャンネルを削除してもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3775"/>
        <source>Do you really want to remove this avatar?</source>
        <translation>このアバターを削除してもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3783"/>
        <source>You have already set an avatar for this address. Do you really want to overwrite it?</source>
        <translation>すでにこのアドレスのアバターを設定しています。 上書きしてもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4185"/>
        <source>Start-on-login not yet supported on your OS.</source>
        <translation>ログイン時に開始は、まだお使いのOSでサポートされていません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4178"/>
        <source>Minimize-to-tray not yet supported on your OS.</source>
        <translation>トレイに最小化は、まだお使いのOSでサポートされていません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4181"/>
        <source>Tray notifications not yet supported on your OS.</source>
        <translation>トレイ通知は、まだお使いのOSでサポートされていません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4352"/>
        <source>Testing...</source>
        <translation>テスト中</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4237"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="35"/>
        <source>The address should start with &apos;&apos;BM-&apos;&apos;</source>
        <translation>アドレスは「BM-」から始まります</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="40"/>
        <source>The address is not typed or copied correctly (the checksum failed).</source>
        <translation>このアドレスは正しく入力、またはコピーされていません。（チェックサムが一致しません）。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="46"/>
        <source>The version number of this address is higher than this software can support. Please upgrade LMessage.</source>
        <translation>このアドレスのバージョン番号はこのプログラムのサポート範囲外です。LMessageをアップデートしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="52"/>
        <source>The address contains invalid characters.</source>
        <translation>入力されたアドレスは不正な文字を含んでいます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="57"/>
        <source>Some data encoded in the address is too short.</source>
        <translation>このアドレスでエンコードされたデータが短すぎます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="62"/>
        <source>Some data encoded in the address is too long.</source>
        <translation>このアドレスでエンコードされたデータが長過ぎます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="67"/>
        <source>Some data encoded in the address is malformed.</source>
        <translation>このアドレスでエンコードされた一部のデータが不正です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4289"/>
        <source>Enter an address above.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="171"/>
        <source>Address is an old type. We cannot display its past broadcasts.</source>
        <translation>アドレスが古い形式です。 過去の配信は表示できません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="186"/>
        <source>There are no recent broadcasts from this address to display.</source>
        <translation>このアドレスから表示する最近の配信はありません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4374"/>
        <source>You are using TCP port %1. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="665"/>
        <source>LMessage</source>
        <translation>LMessage</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="666"/>
        <source>Identities</source>
        <translation>アドレス一覧</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="667"/>
        <source>New Identity</source>
        <translation>新しいアドレス</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="730"/>
        <source>Search</source>
        <translation>検索</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="731"/>
        <source>All</source>
        <translation>全て</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="738"/>
        <source>To</source>
        <translation>宛先</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="740"/>
        <source>From</source>
        <translation>送信元</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="742"/>
        <source>Subject</source>
        <translation>題名</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="735"/>
        <source>Message</source>
        <translation>メッセージ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="744"/>
        <source>Received</source>
        <translation>受信日時</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="683"/>
        <source>Messages</source>
        <translation>メッセージ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="686"/>
        <source>Address book</source>
        <translation>アドレス帳</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="688"/>
        <source>Address</source>
        <translation>アドレス</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="689"/>
        <source>Add Contact</source>
        <translation>連絡先を追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="690"/>
        <source>Fetch Namecoin ID</source>
        <translation>namecoin IDを取得</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="697"/>
        <source>Subject:</source>
        <translation>題名:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="696"/>
        <source>From:</source>
        <translation>送信元:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="693"/>
        <source>To:</source>
        <translation>宛先:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="695"/>
        <source>Send ordinary Message</source>
        <translation>通常のメッセージを送信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="699"/>
        <source>Send Message to your Subscribers</source>
        <translation>購読者にメッセージを送信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="700"/>
        <source>TTL:</source>
        <translation>TTL:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="727"/>
        <source>Subscriptions</source>
        <translation>購読リスト</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="711"/>
        <source>Add new Subscription</source>
        <translation>購読先を追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="745"/>
        <source>Chans</source>
        <translation>ﾁｬﾝﾈﾙ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="729"/>
        <source>Add Chan</source>
        <translation>ﾁｬﾝﾈﾙを追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="750"/>
        <source>File</source>
        <translation>ファイル</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="761"/>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="757"/>
        <source>Help</source>
        <translation>ヘルプ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="753"/>
        <source>Import keys</source>
        <translation>鍵をインポート</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="754"/>
        <source>Manage keys</source>
        <translation>鍵を管理</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="756"/>
        <source>Ctrl+Q</source>
        <translation>Ctrrl+Q</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="758"/>
        <source>F1</source>
        <translation>F1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="759"/>
        <source>Contact support</source>
        <translation>お問い合わせサポート</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="760"/>
        <source>About</source>
        <translation>概要</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="762"/>
        <source>Regenerate deterministic addresses</source>
        <translation>deterministiｃアドレスを再生成</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="763"/>
        <source>Delete all trashed messages</source>
        <translation>ゴミ箱のメッセージを全て削除する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="764"/>
        <source>Join / Create chan</source>
        <translation>ﾁｬﾝﾈﾙに参加 / 作成</translation>
    </message>
    <message>
        <location filename="../lmessageqt/foldertree.py" line="206"/>
        <source>All accounts</source>
        <translation>すべてのアカウント</translation>
    </message>
    <message>
        <location filename="../lmessageqt/messageview.py" line="47"/>
        <source>Zoom level %1%</source>
        <translation>ズーム レベル %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="91"/>
        <source>Error: You cannot add the same address to your list twice. Perhaps rename the existing one if you want.</source>
        <translation>エラー: 同じアドレスを複数リストに追加する事はできません。既存の項目をリネームしてください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="112"/>
        <source>Add new entry</source>
        <translation>新しい項目を追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4334"/>
        <source>Display the %1 recent broadcast(s) from this address.</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1786"/>
        <source>New version of PyLMessage is available: %1. Download it from https://github.com/LMessage/PyLMessage/releases/latest</source>
        <translation>新しいバージョンの PyLMessage が利用可能です: %1。  https://github.com/LMessage/PyLMessage/releases/latest からダウンロードしてください</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2801"/>
        <source>Waiting for PoW to finish... %1%</source>
        <translation>PoW（プルーフオブワーク）が完了するのを待っています... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2811"/>
        <source>Shutting down Pylmessage... %1%</source>
        <translation>Pylmessageをシャットダウンしています... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2830"/>
        <source>Waiting for objects to be sent... %1%</source>
        <translation>オブジェクトの送信待ち... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2848"/>
        <source>Saving settings... %1%</source>
        <translation>設定を保存しています... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2861"/>
        <source>Shutting down core... %1%</source>
        <translation>コアをシャットダウンしています... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2867"/>
        <source>Stopping notifications... %1%</source>
        <translation>通知を停止しています... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2871"/>
        <source>Shutdown imminent... %1%</source>
        <translation>すぐにシャットダウンします... %1%</translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/lmessageui.py" line="706"/>
        <source>%n hour(s)</source>
        <translation><numerusform>%n 時間</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/__init__.py" line="837"/>
        <source>%n day(s)</source>
        <translation><numerusform>%n 日</numerusform></translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2769"/>
        <source>Shutting down PyLMessage... %1%</source>
        <translation>PyLMessageをシャットダウンしています... %1%</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1156"/>
        <source>Sent</source>
        <translation>送信済</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="115"/>
        <source>Generating one new address</source>
        <translation>新しいアドレスを生成しています</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="193"/>
        <source>Done generating address. Doing work necessary to broadcast it...</source>
        <translation>アドレスの生成を完了しました。 配信に必要な処理を行っています...</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="219"/>
        <source>Generating %1 new addresses.</source>
        <translation>%1 の新しいアドレスを生成しています。</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="323"/>
        <source>%1 is already in &apos;Your Identities&apos;. Not adding it again.</source>
        <translation>%1はすでに「アドレス一覧」にあります。 もう一度追加できません。</translation>
    </message>
    <message>
        <location filename="../class_addressGenerator.py" line="377"/>
        <source>Done generating address</source>
        <translation>アドレスの生成を完了しました</translation>
    </message>
    <message>
        <location filename="../class_outgoingSynSender.py" line="228"/>
        <source>SOCKS5 Authentication problem: %1</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Disk full</source>
        <translation>ディスクがいっぱいです</translation>
    </message>
    <message>
        <location filename="../class_sqlThread.py" line="481"/>
        <source>Alert: Your disk or data storage volume is full. LMessage will now exit.</source>
        <translation>アラート: ディスクまたはデータストレージのボリュームがいっぱいです。 LMessageが終了します。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1060"/>
        <source>Error! Could not find sender address (your address) in the keys.dat file.</source>
        <translation>エラー！ keys.datファイルで送信元アドレス (あなたのアドレス) を見つけることができませんでした。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="580"/>
        <source>Doing work necessary to send broadcast...</source>
        <translation>配信に必要な処理を行っています...</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="613"/>
        <source>Broadcast sent on %1</source>
        <translation>配信が送信されました %1</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="721"/>
        <source>Encryption key was requested earlier.</source>
        <translation>暗号鍵は以前にリクエストされました。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="795"/>
        <source>Sending a request for the recipient&apos;s encryption key.</source>
        <translation>受信者の暗号鍵のリクエストを送信します。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="820"/>
        <source>Looking up the receiver&apos;s public key</source>
        <translation>受信者の公開鍵を探しています</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="878"/>
        <source>Problem: Destination is a mobile device who requests that the destination be included in the message but this is disallowed in your settings.  %1</source>
        <translation>問題: メッセージに含まれた宛先のリクエストはモバイルデバイスですが、設定では許可されていません。 %1</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="909"/>
        <source>Doing work necessary to send message.
There is no required difficulty for version 2 addresses like this.</source>
        <translation>メッセージの送信に必要な処理を行っています。
このようなバージョン2のアドレスには、必要な難易度はありません。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="944"/>
        <source>Doing work necessary to send message.
Receiver&apos;s required difficulty: %1 and %2</source>
        <translation>メッセージの送信に必要な処理を行っています。
受信者の必要な難易度: %1 および %2</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="984"/>
        <source>Problem: The work demanded by the recipient (%1 and %2) is more difficult than you are willing to do. %3</source>
        <translation>問題: 受信者が要求している処理 (%1 および %2) は、現在あなたが設定しているよりも高い難易度です。 %3</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1012"/>
        <source>Problem: You are trying to send a message to yourself or a chan but your encryption key could not be found in the keys.dat file. Could not encrypt message. %1</source>
        <translation>問題: あなた自身またはﾁｬﾝﾈﾙにメッセージを送信しようとしていますが、暗号鍵がkeys.datファイルに見つかりませんでした。 メッセージを暗号化できませんでした。 ％1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1057"/>
        <source>Doing work necessary to send message.</source>
        <translation>メッセージの送信に必要な処理を行っています。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1218"/>
        <source>Message sent. Waiting for acknowledgement. Sent on %1</source>
        <translation>メッセージを送信しました。 確認応答を待っています。 %1 で送信しました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1045"/>
        <source>Doing work necessary to request encryption key.</source>
        <translation>暗号鍵のリクエストに必要な処理を行っています。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1380"/>
        <source>Broadcasting the public key request. This program will auto-retry if they are offline.</source>
        <translation>公開鍵のリクエストを配信しています。 このプログラムがオフラインの場合、自動的に再試行されます。</translation>
    </message>
    <message>
        <location filename="../class_singleWorker.py" line="1387"/>
        <source>Sending public key request. Waiting for reply. Requested at %1</source>
        <translation>公開鍵のリクエストを送信しています。 返信を待っています。 %1 でリクエストしました</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="235"/>
        <source>UPnP port mapping established on port %1</source>
        <translation>ポート%1でUPnPポートマッピングが確立しました</translation>
    </message>
    <message>
        <location filename="../upnp.py" line="264"/>
        <source>UPnP port mapping removed</source>
        <translation>UPnPポートマッピングを削除しました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="244"/>
        <source>Mark all messages as read</source>
        <translation>すべてのメッセージを既読にする</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2648"/>
        <source>Are you sure you would like to mark all messages read?</source>
        <translation>すべてのメッセージを既読にしてもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1066"/>
        <source>Doing work necessary to send broadcast.</source>
        <translation>配信に必要な処理を行っています。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2737"/>
        <source>Proof of work pending</source>
        <translation>PoW（証明）を待っています</translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/__init__.py" line="2737"/>
        <source>%n object(s) pending proof of work</source>
        <translation><numerusform>%n オブジェクトが証明待ち (PoW)</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/__init__.py" line="2737"/>
        <source>%n object(s) waiting to be distributed</source>
        <translation><numerusform>%n オブジェクトが配布待ち</numerusform></translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2737"/>
        <source>Wait until these tasks finish?</source>
        <translation>これらのタスクが完了するまで待ちますか？</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="115"/>
        <source>The name %1 was not found.</source>
        <translation>名前 %1 が見つかりませんでした。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="124"/>
        <source>The namecoin query failed (%1)</source>
        <translation>namecoin のクエリに失敗しました (%1)</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="127"/>
        <source>The namecoin query failed.</source>
        <translation>namecoin のクエリに失敗しました。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="133"/>
        <source>The name %1 has no valid JSON data.</source>
        <translation>名前 %1 は有効な JSON データがありません。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="141"/>
        <source>The name %1 has no associated LMessage address.</source>
        <translation>名前 %1 は関連付けられた LMessage アドレスがありません。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="171"/>
        <source>Success!  Namecoind version %1 running.</source>
        <translation>成功!  Namecoind バージョン %1 が実行中。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="182"/>
        <source>Success!  NMControll is up and running.</source>
        <translation>成功!  NMControll が開始して実行中です。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="185"/>
        <source>Couldn&apos;t understand NMControl.</source>
        <translation>NMControl を理解できませんでした。</translation>
    </message>
    <message>
        <location filename="../namecoin.py" line="195"/>
        <source>The connection to namecoin failed.</source>
        <translation>namecoin への接続に失敗しました。</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="120"/>
        <source>Your GPU(s) did not calculate correctly, disabling OpenCL. Please report to the developers.</source>
        <translation>GPUが正しく求められないため、OpenCLが無効になりました。 開発者に報告してください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3823"/>
        <source>Set notification sound...</source>
        <translation>通知音を設定...</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="647"/>
        <source>
        Welcome to easy and secure LMessage
            * send messages to other people
            * send broadcast messages like twitter or
            * discuss in chan(nel)s with other people
        </source>
        <translation>
簡単で安全な LMessage へようこそ
* 他の人にメッセージを送ります
* Twitter のようなブロードキャストメッセージを送信します
* 他の人と一緒にチャン(ネル)で議論します
        </translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="828"/>
        <source>not recommended for chans</source>
        <translation>ﾁｬﾝﾈﾙにはお勧めしません</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1221"/>
        <source>Quiet Mode</source>
        <translation>マナーモード</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1613"/>
        <source>Problems connecting? Try enabling UPnP in the Network Settings</source>
        <translation>接続に問題がありますか? ネットワーク設定でUPnPを有効にしてみてください</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1940"/>
        <source>You are trying to send an email instead of a lmessage. This requires registering with a gateway. Attempt to register?</source>
        <translation>LMessage の代わりにメールを送信しようとしています。 これは、ゲートウェイに登録する必要があります。 登録しますか?</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1972"/>
        <source>Error: LMessage addresses start with BM-   Please check the recipient address %1</source>
        <translation>エラー: LMessageのアドレスはBM-で始まります。 受信者のアドレス %1 を確認してください</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1978"/>
        <source>Error: The recipient address %1 is not typed or copied correctly. Please check it.</source>
        <translation>エラー: 受信者のアドレス %1 は正しく入力、またはコピーされていません。確認して下さい。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1984"/>
        <source>Error: The recipient address %1 contains invalid characters. Please check it.</source>
        <translation>エラー: 受信者のアドレス %1 は不正な文字を含んでいます。確認して下さい。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1990"/>
        <source>Error: The version of the recipient address %1 is too high. Either you need to upgrade your LMessage software or your acquaintance is being clever.</source>
        <translation>エラー: 受信者アドレスのバージョン %1 は高すぎます。 LMessageソフトウェアをアップグレードする必要があるか、連絡先が賢明になっているかのいずれかです。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="1998"/>
        <source>Error: Some data encoded in the recipient address %1 is too short. There might be something wrong with the software of your acquaintance.</source>
        <translation>エラー: アドレス %1 でエンコードされたデータが短すぎます。連絡先のソフトウェアが何かしら誤っている可能性があります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2006"/>
        <source>Error: Some data encoded in the recipient address %1 is too long. There might be something wrong with the software of your acquaintance.</source>
        <translation>エラー: 受信者のアドレス %1 でエンコードされたデータが短すぎます。連絡先のソフトウェアが何かしら誤っている可能性があります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2014"/>
        <source>Error: Some data encoded in the recipient address %1 is malformed. There might be something wrong with the software of your acquaintance.</source>
        <translation>エラー: 受信者のアドレス %1 でエンコードされたデータの一部が不正です。連絡先のソフトウェアが何かしら誤っている可能性があります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2022"/>
        <source>Error: Something is wrong with the recipient address %1.</source>
        <translation>エラー: 受信者のアドレス %1 には何かしら誤りがあります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2172"/>
        <source>Error: %1</source>
        <translation>エラー: %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2289"/>
        <source>From %1</source>
        <translation>送信元 %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2692"/>
        <source>Disconnecting</source>
        <translation>切断しています</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2692"/>
        <source>Connecting</source>
        <translation>接続しています</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2692"/>
        <source>LMessage will now drop all connectins. Are you sure?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2692"/>
        <source>LMessage will now start connecting to network. Are you sure?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2748"/>
        <source>Synchronisation pending</source>
        <translation>同期を保留しています</translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/__init__.py" line="2748"/>
        <source>LMessage hasn&apos;t synchronised with the network, %n object(s) to be downloaded. If you quit now, it may cause delivery delays. Wait until the synchronisation finishes?</source>
        <translation><numerusform>LMessageはネットワークと同期されていません。%n のオブジェクトをダウンロードする必要があります。 今、終了すると、配信が遅れる可能性があります。 同期が完了するまで待ちますか？</numerusform></translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2758"/>
        <source>Not connected</source>
        <translation>未接続</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2758"/>
        <source>LMessage isn&apos;t connected to the network. If you quit now, it may cause delivery delays. Wait until connected and the synchronisation finishes?</source>
        <translation>LMessageはネットワークに接続していません。 今、終了すると、配信が遅れる可能性があります。 接続して、同期が完了するまで待ちますか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2773"/>
        <source>Waiting for network connection...</source>
        <translation>ネットワーク接続を待っています...</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="2783"/>
        <source>Waiting for finishing synchronisation...</source>
        <translation>同期の完了を待っています...</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="3841"/>
        <source>You have already set a notification sound for this address book entry. Do you really want to overwrite it?</source>
        <translation>すでにこのアドレス帳エントリの通知音を設定しています。 上書きしてもよろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/__init__.py" line="4062"/>
        <source>Error occurred: could not load message from disk.</source>
        <translation>エラーが発生しました: ディスクからメッセージを読み込みできません。</translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/address_dialogs.py" line="194"/>
        <source>Display the %n recent broadcast(s) from this address.</source>
        <translation><numerusform>このアドレスから%nの最新の配信を表示します。</numerusform></translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="658"/>
        <source>Go online</source>
        <translation>オンラインにする</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="658"/>
        <source>Go offline</source>
        <translation>オフラインにする</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="707"/>
        <source>Clear</source>
        <translation>クリア</translation>
    </message>
    <message>
        <location filename="../lmessageqt/foldertree.py" line="10"/>
        <source>inbox</source>
        <translation>受信トレイ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/foldertree.py" line="11"/>
        <source>new</source>
        <translation>新規</translation>
    </message>
    <message>
        <location filename="../lmessageqt/foldertree.py" line="12"/>
        <source>sent</source>
        <translation>送信済</translation>
    </message>
    <message>
        <location filename="../lmessageqt/foldertree.py" line="13"/>
        <source>trash</source>
        <translation>ゴミ箱</translation>
    </message>
</context>
<context>
    <name>MessageView</name>
    <message>
        <location filename="../lmessageqt/messageview.py" line="72"/>
        <source>Follow external link</source>
        <translation>外部リンクをフォロー</translation>
    </message>
    <message>
        <location filename="../lmessageqt/messageview.py" line="72"/>
        <source>The link &quot;%1&quot; will open in a browser. It may be a security risk, it could de-anonymise you or download malicious data. Are you sure?</source>
        <translation>リンク &quot;%1&quot; はブラウザで開きます。 セキュリティリスクの可能性があります。匿名性がなくなったり、悪意のあるデータをダウンロードする可能性があります。 よろしいですか？</translation>
    </message>
    <message>
        <location filename="../lmessageqt/messageview.py" line="117"/>
        <source>HTML detected, click here to display</source>
        <translation>HTMLが検出されました。ここをクリックすると表示します</translation>
    </message>
    <message>
        <location filename="../lmessageqt/messageview.py" line="126"/>
        <source>Click here to disable HTML</source>
        <translation>ここをクリックするとHTMLを無効にします</translation>
    </message>
</context>
<context>
    <name>MsgDecode</name>
    <message>
        <location filename="../helper_msgcoding.py" line="81"/>
        <source>The message has an unknown encoding.
Perhaps you should upgrade LMessage.</source>
        <translation>メッセージのエンコードが不明です。
LMessageをアップグレードする必要があるかもしれません。</translation>
    </message>
    <message>
        <location filename="../helper_msgcoding.py" line="82"/>
        <source>Unknown encoding</source>
        <translation>不明なエンコード</translation>
    </message>
</context>
<context>
    <name>NewAddressDialog</name>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="14"/>
        <source>Create new Address</source>
        <translation>新しいアドレスを作成</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="23"/>
        <source>Here you may generate as many addresses as you like. Indeed, creating and abandoning addresses is encouraged. You may generate addresses by using either random numbers or by using a passphrase. If you use a passphrase, the address is called a &quot;deterministic&quot; address.
The &apos;Random Number&apos; option is selected by default but deterministic addresses have several pros and cons:</source>
        <translation>複数のアドレスを生成できます。アドレスを自由に生成、破棄することができます。アドレスは乱数かパスフレーズを使って生成できます。もしパスフレーズを使う場合、アドレスはdeterministicアドレスになります。デフォルトでは乱数による生成が選択されますが、deterministicアドレスにも長所と短所があります:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="37"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Pros:&lt;br/&gt;&lt;/span&gt;You can recreate your addresses on any computer from memory. &lt;br/&gt;You need-not worry about backing up your keys.dat file as long as you can remember your passphrase. &lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;Cons:&lt;br/&gt;&lt;/span&gt;You must remember (or write down) your passphrase if you expect to be able to recreate your keys if they are lost. &lt;br/&gt;You must remember the address version number and the stream number along with your passphrase. &lt;br/&gt;If you choose a weak passphrase and someone on the Internet can brute-force it, they can read your messages and send messages as you.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;長所:&lt;br/&gt;&lt;/span&gt;記憶を頼りにアドレスを再生成できます。&lt;br/&gt;keys.datファイルのバックアップの心配をしないでも、パスフレーズを覚えておけばよくなります。&lt;br/&gt;&lt;span style=&quot; font-weight:600;&quot;&gt;短所:&lt;br/&gt;&lt;/span&gt;アドレスの暗号鍵を紛失した場合に備えてアドレスを再生成出来るようにしたい場合、パスフレーズを覚えて（もしくは書き留めて）必要があります。&lt;br/&gt;パスフレーズを覚えておくのに加えて、アドレスのバージョン番号とストリーム番号も覚えておく必要があります。&lt;br/&gt;弱いパスフレーズを設定すると、ネット上の誰かがブルートフォース攻撃を行ってあなたの送信メッセージ、受信メッセージを読んでしまう可能性があります。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="66"/>
        <source>Use a random number generator to make an address</source>
        <translation>アドレスの生成に乱数ジェネレーターを使う</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="79"/>
        <source>Use a passphrase to make addresses</source>
        <translation>アドレスの作成にパスフレーズを使う</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="89"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>アドレスを1、2文字短くするために数分間追加の計算処理を行う</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="96"/>
        <source>Make deterministic addresses</source>
        <translation>deterministiｃアドレスを作る</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="102"/>
        <source>Address version number: 4</source>
        <translation>アドレスのバージョン番号: 4</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="109"/>
        <source>In addition to your passphrase, you must remember these numbers:</source>
        <translation>パスフレーズに加えて、これらの値を覚えておいてください:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="126"/>
        <source>Passphrase</source>
        <translation>パスフレーズ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="133"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>パスフレーズから生成されたアドレスの数:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="153"/>
        <source>Stream number: 1</source>
        <translation>ストリーム数: 1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="173"/>
        <source>Retype passphrase</source>
        <translation>パスフレーズを再入力</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="200"/>
        <source>Randomly generate address</source>
        <translation>ランダムなアドレスを生成する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="206"/>
        <source>Label (not shown to anyone except you)</source>
        <translation>ラベル（他の人からは見えません）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="216"/>
        <source>Use the most available stream</source>
        <translation>最も有効なストリームを使う</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="226"/>
        <source> (best if this is the first of many addresses you will create)</source>
        <translation>（もしこれから複数のアドレスを生成するのであれば、最初の一つに最適です。）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="236"/>
        <source>Use the same stream as an existing address</source>
        <translation>既存のアドレスと同じストリームを利用する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newaddressdialog.ui" line="246"/>
        <source>(saves you some bandwidth and processing power)</source>
        <translation>（帯域と処理能力を節約する）</translation>
    </message>
</context>
<context>
    <name>NewSubscriptionDialog</name>
    <message>
        <location filename="../lmessageqt/newsubscriptiondialog.ui" line="20"/>
        <source>Add new entry</source>
        <translation>新しい項目を追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newsubscriptiondialog.ui" line="26"/>
        <source>Label</source>
        <translation>ラベル</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newsubscriptiondialog.ui" line="36"/>
        <source>Address</source>
        <translation>アドレス</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newsubscriptiondialog.ui" line="59"/>
        <source>Enter an address above.</source>
        <translation>上にアドレスを入力してください。</translation>
    </message>
</context>
<context>
    <name>SpecialAddressBehaviorDialog</name>
    <message>
        <location filename="../lmessageqt/specialaddressbehavior.ui" line="14"/>
        <source>Special Address Behavior</source>
        <translation>アドレスの特別な動作</translation>
    </message>
    <message>
        <location filename="../lmessageqt/specialaddressbehavior.ui" line="20"/>
        <source>Behave as a normal address</source>
        <translation>通常のアドレスにする</translation>
    </message>
    <message>
        <location filename="../lmessageqt/specialaddressbehavior.ui" line="30"/>
        <source>Behave as a pseudo-mailing-list address</source>
        <translation>仮想メーリングリストとして使用する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/specialaddressbehavior.ui" line="37"/>
        <source>Mail received to a pseudo-mailing-list address will be automatically broadcast to subscribers (and thus will be public).</source>
        <translation>仮想メーリングリストのアドレスが受信したアドレスは自動的に購読するユーザーに配信（公開）されます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/specialaddressbehavior.ui" line="47"/>
        <source>Name of the pseudo-mailing-list:</source>
        <translation>仮想メーリングリストの名前:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/address_dialogs.py" line="230"/>
        <source>This is a chan address. You cannot use it as a pseudo-mailing list.</source>
        <translation>chanアドレスは仮想メーリングリストのアドレスには使用できません。</translation>
    </message>
</context>
<context>
    <name>aboutDialog</name>
    <message>
        <location filename="../lmessageqt/about.ui" line="14"/>
        <source>About</source>
        <translation>概要</translation>
    </message>
    <message>
        <location filename="../lmessageqt/about.py" line="68"/>
        <source>PyLMessage</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/about.py" line="69"/>
        <source>version ?</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/about.ui" line="69"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Distributed under the MIT/X11 software license; see &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt;&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;MIT/X11 ソフトウェアライセンスに基づいて配布されます。  &lt;a href=&quot;http://www.opensource.org/licenses/mit-license.php&quot;&gt;&lt;span style=&quot; text-decoration: underline; color:#0000ff;&quot;&gt;http://www.opensource.org/licenses/mit-license.php&lt;/span&gt;&lt;/a&gt; をご覧ください&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../lmessageqt/about.ui" line="59"/>
        <source>This is Beta software.</source>
        <translation>このソフトウェアはベータ版です。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/about.py" line="70"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright Â© 2012-2016 Jonathan Warren&lt;br/&gt;Copyright Â© 2013-2016 The LMessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message encoding="UTF-8">
        <location filename="../lmessageqt/about.ui" line="49"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright © 2012-2016 Jonathan Warren&lt;br/&gt;Copyright © 2013-2017 The LMessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Copyright © 2012-2016 Jonathan Warren&lt;br/&gt;Copyright © 2013-2017 The LMessage Developers&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
</context>
<context>
    <name>blacklist</name>
    <message>
        <location filename="../lmessageqt/blacklist.ui" line="17"/>
        <source>Use a Blacklist (Allow all incoming messages except those on the Blacklist)</source>
        <translation>ブラックリストを使用（全てのメッセージを受信してブラックリストと一致する物だけ除外）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.ui" line="27"/>
        <source>Use a Whitelist (Block all incoming messages except those on the Whitelist)</source>
        <translation>ホワイトリストを使用（全てのメッセージを受信拒否してホワイトリストと一致する物だけ許可）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.ui" line="34"/>
        <source>Add new entry</source>
        <translation>新しい項目を追加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.ui" line="85"/>
        <source>Name or Label</source>
        <translation>名前、ラベル</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.ui" line="90"/>
        <source>Address</source>
        <translation>アドレス</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="151"/>
        <source>Blacklist</source>
        <translation>ブラックリスト</translation>
    </message>
    <message>
        <location filename="../lmessageqt/blacklist.py" line="153"/>
        <source>Whitelist</source>
        <translation>ホワイトリスト</translation>
    </message>
</context>
<context>
    <name>connectDialog</name>
    <message>
        <location filename="../lmessageqt/connect.ui" line="14"/>
        <source>LMessage</source>
        <translation>LMessage</translation>
    </message>
    <message>
        <location filename="../lmessageqt/connect.ui" line="20"/>
        <source>LMessage won&apos;t connect to anyone until you let it. </source>
        <translation>LMessageはあなたが操作しない限りどこへも接続しません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/connect.ui" line="27"/>
        <source>Connect now</source>
        <translation>接続</translation>
    </message>
    <message>
        <location filename="../lmessageqt/connect.ui" line="37"/>
        <source>Let me configure special network settings first</source>
        <translation>最初に特別なネットワークの設定を行ってください</translation>
    </message>
    <message>
        <location filename="../lmessageqt/connect.ui" line="44"/>
        <source>Work offline</source>
        <translation>オフラインで動作</translation>
    </message>
</context>
<context>
    <name>helpDialog</name>
    <message>
        <location filename="../lmessageqt/help.ui" line="14"/>
        <source>Help</source>
        <translation>ヘルプ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/help.ui" line="20"/>
        <source>&lt;a href=&quot;https://lmessage.org/wiki/PyLMessage_Help&quot;&gt;https://lmessage.org/wiki/PyLMessage_Help&lt;/a&gt;</source>
        <translation>&lt;a href=&quot;https://lmessage.org/wiki/PyLMessage_Help&quot;&gt;https://lmessage.org/wiki/PyLMessage_Help&lt;/a&gt;</translation>
    </message>
    <message>
        <location filename="../lmessageqt/help.ui" line="30"/>
        <source>As LMessage is a collaborative project, help can be found online in the LMessage Wiki:</source>
        <translation>LMessageは協働プロジェクトです。ヘルプはLMessage Wikiを参照してください:</translation>
    </message>
</context>
<context>
    <name>iconGlossaryDialog</name>
    <message>
        <location filename="../lmessageqt/iconglossary.ui" line="20"/>
        <source>Icon Glossary</source>
        <translation>アイコン一覧</translation>
    </message>
    <message>
        <location filename="../lmessageqt/iconglossary.ui" line="36"/>
        <source>You have no connections with other peers. </source>
        <translation>他のpeerへ接続されていません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/iconglossary.ui" line="53"/>
        <source>You have made at least one connection to a peer using an outgoing connection but you have not yet received any incoming connections. Your firewall or home router probably isn&apos;t configured to forward incoming TCP connections to your computer. LMessage will work just fine but it would help the LMessage network if you allowed for incoming connections and will help you be a better-connected node.</source>
        <translation>発信接続のために1つ以上のピアへ接続を行っていますが、まだ着信接続を受け取っていません。ファイアーウォールかホームルーターが外部からこのコンピューターへのTCP接続を受け取れるように設定されていないかも知れません。LMessageは正常に動作しますが、外部からの接続を許可してより良く接続されたノードになることはLMessageネットワークへの助けになります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/iconglossary.py" line="85"/>
        <source>You are using TCP port ?. (This can be changed in the settings).</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/iconglossary.ui" line="96"/>
        <source>You do have connections with other peers and your firewall is correctly configured.</source>
        <translation>ファイアーウォールを適切に設定し、他のpeerへ接続してください。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/dialogs.py" line="58"/>
        <source>You are using TCP port %1. (This can be changed in the settings).</source>
        <translation>使用中のポート %1 （設定で変更できます）。</translation>
    </message>
</context>
<context>
    <name>networkstatus</name>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="39"/>
        <source>Total connections:</source>
        <translation>接続数:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="185"/>
        <source>Since startup:</source>
        <translation>起動日時:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="201"/>
        <source>Processed 0 person-to-person messages.</source>
        <translation>0 通の1対1のメッセージを処理しました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="230"/>
        <source>Processed 0 public keys.</source>
        <translation>0 件の公開鍵を処理しました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="217"/>
        <source>Processed 0 broadcasts.</source>
        <translation>0 件の配信を処理しました。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="282"/>
        <source>Inventory lookups per second: 0</source>
        <translation>毎秒のインベントリ検索: 0</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="243"/>
        <source>Objects to be synced:</source>
        <translation>同期する必要のあるオブジェクト:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="152"/>
        <source>Stream #</source>
        <translation>ストリーム #</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="116"/>
        <source>Connections</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.py" line="171"/>
        <source>Since startup on %1</source>
        <translation>起動日時 %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.py" line="90"/>
        <source>Down: %1/s  Total: %2</source>
        <translation>ダウン: %1/秒  合計: %2</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.py" line="92"/>
        <source>Up: %1/s  Total: %2</source>
        <translation>アップ: %1/秒  合計: %2</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.py" line="153"/>
        <source>Total Connections: %1</source>
        <translation>接続数: %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.py" line="163"/>
        <source>Inventory lookups per second: %1</source>
        <translation>毎秒のインベントリ検索: %1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="256"/>
        <source>Up: 0 kB/s</source>
        <translation>アップ: 0 kB/秒</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="269"/>
        <source>Down: 0 kB/s</source>
        <translation>ダウン: 0 kB/秒</translation>
    </message>
    <message>
        <location filename="../lmessageqt/lmessageui.py" line="749"/>
        <source>Network Status</source>
        <translation>ネットワークの状態</translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/networkstatus.py" line="57"/>
        <source>byte(s)</source>
        <translation><numerusform>バイト</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/networkstatus.py" line="68"/>
        <source>Object(s) to be synced: %n</source>
        <translation><numerusform>同期する必要のあるオブジェクト: %n</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/networkstatus.py" line="72"/>
        <source>Processed %n person-to-person message(s).</source>
        <translation><numerusform>%n 通の1対1のメッセージを処理しました。</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/networkstatus.py" line="77"/>
        <source>Processed %n broadcast message(s).</source>
        <translation><numerusform>%n 件の配信を処理しました。</numerusform></translation>
    </message>
    <message numerus="yes">
        <location filename="../lmessageqt/networkstatus.py" line="82"/>
        <source>Processed %n public key(s).</source>
        <translation><numerusform>%n 件の公開鍵を処理しました。</numerusform></translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="120"/>
        <source>Peer</source>
        <translation>ピア</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="123"/>
        <source>IP address or hostname</source>
        <translation>IP アドレスまたはホスト名</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="128"/>
        <source>Rating</source>
        <translation>評価</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="131"/>
        <source>PyLMessage tracks the success rate of connection attempts to individual nodes. The rating ranges from -1 to 1 and affects the likelihood of selecting the node in the future</source>
        <translation>PyLMessage は、個々のノードへの接続試行の成功率を追跡します。 率は -1 から 1 の範囲で、将来ノードを選択する可能性に影響します</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="136"/>
        <source>User agent</source>
        <translation>ユーザーエージェント</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="139"/>
        <source>Peer&apos;s self-reported software</source>
        <translation>ピアの自己報告ソフトウェア</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="144"/>
        <source>TLS</source>
        <translation>TLS</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="147"/>
        <source>Connection encryption</source>
        <translation>接続暗号化</translation>
    </message>
    <message>
        <location filename="../lmessageqt/networkstatus.ui" line="155"/>
        <source>List of streams negotiated between you and the peer</source>
        <translation>あなたとピアの間でネゴシエーションしたストリームのリスト</translation>
    </message>
</context>
<context>
    <name>newChanDialog</name>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="97"/>
        <source>Dialog</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="98"/>
        <source>Create a new chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="103"/>
        <source>Join a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="100"/>
        <source>Create a chan</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="101"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly then the chan will be secure and private. If you and someone else both create a chan with the same chan name then it is currently very likely that they will be the same chan.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="105"/>
        <source>Chan name:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="104"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and lmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a normal person-to-person message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="106"/>
        <source>Chan lmessage address:</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.ui" line="26"/>
        <source>Create or join a chan</source>
        <translation>ﾁｬﾝﾈﾙを作成または参加</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.ui" line="41"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;A chan exists when a group of people share the same decryption keys. The keys and lmessage address used by a chan are generated from a human-friendly word or phrase (the chan name). To send a message to everyone in the chan, send a message to the chan address.&lt;/p&gt;&lt;p&gt;Chans are experimental and completely unmoderatable.&lt;/p&gt;&lt;p&gt;Enter a name for your chan. If you choose a sufficiently complex chan name (like a strong and unique passphrase) and none of your friends share it publicly, then the chan will be secure and private. However if you and someone else both create a chan with the same chan name, the same chan will be shared.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;グループの人が同じ復号鍵を共有するときに、チャンネルが存在します。 チャンネルによって使用される鍵と lmessage アドレスは、人にやさしい単語や語句 (チャンネル名) から生成されます。 チャンネルの全員にメッセージを送信するには、チャンネルのアドレスにメッセージを送信します。&lt;/p&gt;&lt;p&gt;チャンネルは実験的で完全に調整不能です。&lt;/p&gt;&lt;p&gt;あなたのチャンネルの名前を入力してください。 (強くて固有のパスフレーズのような) 十分に複雑なチャンネルの名前を選んで、友人の誰もそれを公に共有しない場合に、そのチャンネルは安全でプライベートになります。 しかし、あなたと他の誰かの両方で同じ名前のチャンネルを作成すると、同じチャンネルが共有されます。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.ui" line="56"/>
        <source>Chan passphrase/name:</source>
        <translation>チャンネルのパスフレーズ/名前:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.ui" line="63"/>
        <source>Optional, for advanced usage</source>
        <translation>オプション、高度な使い方</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.ui" line="76"/>
        <source>Chan address</source>
        <translation>ﾁｬﾝﾈﾙ アドレス</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.ui" line="101"/>
        <source>Please input chan name/passphrase:</source>
        <translation>ﾁｬﾝﾈﾙ名/パスフレーズを入力してください:</translation>
    </message>
</context>
<context>
    <name>newchandialog</name>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="38"/>
        <source>Successfully created / joined chan %1</source>
        <translation>ﾁｬﾝﾈﾙ %1 を正常に作成 / 参加しました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="44"/>
        <source>Chan creation / joining failed</source>
        <translation>ﾁｬﾝﾈﾙの作成 / 参加に失敗しました</translation>
    </message>
    <message>
        <location filename="../lmessageqt/newchandialog.py" line="50"/>
        <source>Chan creation / joining cancelled</source>
        <translation>ﾁｬﾝﾈﾙの作成 / 参加をキャンセルしました</translation>
    </message>
</context>
<context>
    <name>proofofwork</name>
    <message>
        <location filename="../proofofwork.py" line="163"/>
        <source>C PoW module built successfully.</source>
        <translation>C PoW モジュールのビルドに成功しました。</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="165"/>
        <source>Failed to build C PoW module. Please build it manually.</source>
        <translation>C PoW モジュールのビルドに失敗しました。手動でビルドしてください。</translation>
    </message>
    <message>
        <location filename="../proofofwork.py" line="167"/>
        <source>C PoW module unavailable. Please build it.</source>
        <translation>C PoW モジュールが利用できません。ビルドしてください。</translation>
    </message>
</context>
<context>
    <name>regenerateAddressesDialog</name>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="14"/>
        <source>Regenerate Existing Addresses</source>
        <translation>既存のアドレスを再生成する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="30"/>
        <source>Regenerate existing addresses</source>
        <translation>既存のアドレスを再生成する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="36"/>
        <source>Passphrase</source>
        <translation>パスフレーズ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="53"/>
        <source>Number of addresses to make based on your passphrase:</source>
        <translation>パスフレーズから生成されたアドレスの数:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="89"/>
        <source>Address version number:</source>
        <translation>アドレスのバージョン番号:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="131"/>
        <source>Stream number:</source>
        <translation>ストリーム数:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="153"/>
        <source>1</source>
        <translation>1</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="173"/>
        <source>Spend several minutes of extra computing time to make the address(es) 1 or 2 characters shorter</source>
        <translation>アドレスを1、2文字短くするために数分間追加の計算処理を行う</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="180"/>
        <source>You must check (or not check) this box just like you did (or didn&apos;t) when you made your addresses the first time.</source>
        <translation>もしあなたが初めてアドレスを作ったのであればこのボックスをチェックする必要があります。（そうでない場合はしないでください）。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/regenerateaddresses.ui" line="190"/>
        <source>If you have previously made deterministic addresses but lost them due to an accident (like hard drive failure), you can regenerate them here. If you used the random number generator to make your addresses then this form will be of no use to you.</source>
        <translation>もし以前にdeterministicアドレスを作ったことがあり、何かしらのトラブル（ハードディスクの故障のような）でそれを紛失していた場合、ここで再生成することができます。もし乱数でアドレスを作っていたのであればこのフォームは再生成には使えません。</translation>
    </message>
</context>
<context>
    <name>settingsDialog</name>
    <message>
        <location filename="../lmessageqt/settings.py" line="483"/>
        <source>Settings</source>
        <translation>設定</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="484"/>
        <source>Start LMessage on user login</source>
        <translation>ユーザのログイン時にLMessageを起動</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="485"/>
        <source>Tray</source>
        <translation>トレイ</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="486"/>
        <source>Start LMessage in the tray (don&apos;t show main window)</source>
        <translation>LMessageをトレイ内で起動する（メインウィンドウを表示しない）</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="491"/>
        <source>Minimize to tray</source>
        <translation>タスクトレイへ最小化</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="492"/>
        <source>Close to tray</source>
        <translation>トレイに閉じる</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="495"/>
        <source>Show notification when message received</source>
        <translation>メッセージの受信時に通知する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="500"/>
        <source>Run in Portable Mode</source>
        <translation>ポータブルモードで実行</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="501"/>
        <source>In Portable Mode, messages and config files are stored in the same directory as the program rather than the normal application-data folder. This makes it convenient to run LMessage from a USB thumb drive.</source>
        <translation>ポータブルモード時、メッセージと設定ファイルは通常のアプリケーションデータのフォルダではなく同じディレクトリに保存されます。これによりLMessageをUSBドライブから実行できます。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="508"/>
        <source>Willingly include unencrypted destination address when sending to a mobile device</source>
        <translation>携帯端末にメッセージを送る時は暗号化されていないアドレスを許可する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="513"/>
        <source>Use Identicons</source>
        <translation>Identiconsを使用する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="514"/>
        <source>Reply below Quote</source>
        <translation>下に返信</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="515"/>
        <source>Interface Language</source>
        <translation>インターフェイス言語</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="516"/>
        <source>System Settings</source>
        <comment>system</comment>
        <translation>システム設定</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="517"/>
        <source>User Interface</source>
        <translation>ユーザインターフェース</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="522"/>
        <source>Listening port</source>
        <translation>リスニングポート</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="523"/>
        <source>Listen for connections on port:</source>
        <translation>接続を待つポート:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="524"/>
        <source>UPnP:</source>
        <translation>UPnP:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="525"/>
        <source>Bandwidth limit</source>
        <translation>帯域幅の制限</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="526"/>
        <source>Maximum download rate (kB/s): [0: unlimited]</source>
        <translation>最大ダウンロード速度 (kB/秒): [0: 無制限]</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="527"/>
        <source>Maximum upload rate (kB/s): [0: unlimited]</source>
        <translation>最大アップロード速度 (kB/秒): [0: 無制限]</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="529"/>
        <source>Proxy server / Tor</source>
        <translation>プロキシサーバー/Tor</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="530"/>
        <source>Type:</source>
        <translation>タイプ:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="531"/>
        <source>Server hostname:</source>
        <translation>サーバーホスト名:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="601"/>
        <source>Port:</source>
        <translation>ポート:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="533"/>
        <source>Authentication</source>
        <translation>認証</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="602"/>
        <source>Username:</source>
        <translation>ユーザー名:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="535"/>
        <source>Pass:</source>
        <translation>パス:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="536"/>
        <source>Listen for incoming connections when using proxy</source>
        <translation>プロキシ使用時に外部からの接続を待機する</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="541"/>
        <source>none</source>
        <translation>無し</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="542"/>
        <source>SOCKS4a</source>
        <translation>SOCKS4a</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="543"/>
        <source>SOCKS5</source>
        <translation>SOCKS5</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="544"/>
        <source>Network Settings</source>
        <translation>ネットワーク設定</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="549"/>
        <source>Total difficulty:</source>
        <translation>全体の難易度:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="550"/>
        <source>The &apos;Total difficulty&apos; affects the absolute amount of work the sender must complete. Doubling this value doubles the amount of work.</source>
        <translation>「全体の難易度」は完全に全てのメッセージに影響します。この値を二倍にすると処理量も二倍になります。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="556"/>
        <source>Small message difficulty:</source>
        <translation>小さいメッセージの難易度:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="557"/>
        <source>When someone sends you a message, their computer must first complete some work. The difficulty of this work, by default, is 1. You may raise this default for new addresses you create by changing the values here. Any new addresses you create will require senders to meet the higher difficulty. There is one exception: if you add a friend or acquaintance to your address book, LMessage will automatically notify them when you next send a message that they need only complete the minimum amount of work: difficulty 1. </source>
        <translation>誰かがあなたにメッセージを送る時、相手のコンピューターはいくらか計算処理を行います。処理の難易度はデフォルトでは1です。この値を変更すると新しいアドレスではこのデフォルト値を引き上げることができます。その場合、新しいアドレスはメッセージの送信者により高い難易度を要求します。例外もあります: 友人や知り合いをアドレス帳に登録すると、LMessageは次にメッセージを送る際、自動的に要求される処理の難易度を最低限の1で済むように通知します。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="566"/>
        <source>The &apos;Small message difficulty&apos; mostly only affects the difficulty of sending small messages. Doubling this value makes it almost twice as difficult to send a small message but doesn&apos;t really affect large messages.</source>
        <translation>「小さいメッセージの難易度」は小さいメッセージを行う時にだけ影響します。この値を二倍にすれば小さなメッセージに必要な処理の難易度は二倍になりますが、実際にはデータ量の多いメッセージには影響しません。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="573"/>
        <source>Demanded difficulty</source>
        <translation>要求される難易度</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="578"/>
        <source>Here you may set the maximum amount of work you are willing to do to send a message to another person. Setting these values to 0 means that any value is acceptable.</source>
        <translation>ここでは他のユーザーへメッセージを送る際に行うことを許可する処理量の上限を設定します。0を設定するとどんな量でも許容します。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="584"/>
        <source>Maximum acceptable total difficulty:</source>
        <translation>許可する難易度の上限:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="585"/>
        <source>Maximum acceptable small message difficulty:</source>
        <translation>小さなメッセージに許可する難易度の上限:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="586"/>
        <source>Max acceptable difficulty</source>
        <translation>許可する最大の難易度</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="473"/>
        <source>Hardware GPU acceleration (OpenCL)</source>
        <translation type="unfinished"/>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="592"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;LMessage can utilize a different Bitcoin-based program called Namecoin to make addresses human-friendly. For example, instead of having to tell your friend your long LMessage address, you can simply tell him to send a message to &lt;span style=&quot; font-style:italic;&quot;&gt;test. &lt;/span&gt;&lt;/p&gt;&lt;p&gt;(Getting your own LMessage address into Namecoin is still rather difficult).&lt;/p&gt;&lt;p&gt;LMessage can use either namecoind directly or a running nmcontrol instance.&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;LMessageはアドレスを読みやすくするため、NamecoinというBitcoinベースの別のプログラムを利用できます。例えば、あなたの友人に長いLMessageアドレスを伝える代わりに、単純に&lt;span style=&quot; font-style:italic;&quot;&gt;テスト&lt;/span&gt;でメッセージを送るよう伝えることができます。&lt;/p&gt;&lt;p&gt;（LMessageアドレスを独自にNamecoinにするのはかなり難しいです）。&lt;/p&gt;&lt;p&gt;LMessageは直接namecoindを使うか、nmcontrolインスタンスを使うことができます。&lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="600"/>
        <source>Host:</source>
        <translation>ホスト:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="603"/>
        <source>Password:</source>
        <translation>パスワード:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="604"/>
        <source>Test</source>
        <translation>テスト</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="605"/>
        <source>Connect to:</source>
        <translation>接続先:</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="606"/>
        <source>Namecoind</source>
        <translation>Namecoind</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="607"/>
        <source>NMControl</source>
        <translation>NMControl</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="608"/>
        <source>Namecoin integration</source>
        <translation>Namecoin連携</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="613"/>
        <source>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;By default, if you send a message to someone and he is offline for more than two days, LMessage will send the message again after an additional two days. This will be continued with exponential backoff forever; messages will be resent after 5, 10, 20 days ect. until the receiver acknowledges them. Here you may change that behavior by having LMessage give up after a certain number of days or months.&lt;/p&gt;&lt;p&gt;Leave these input fields blank for the default behavior. &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</source>
        <translation>&lt;html&gt;&lt;head/&gt;&lt;body&gt;&lt;p&gt;デフォルトでは、あなたが誰かにメッセージを送信して、相手が 2 日以上オフラインになっている場合、 LMessage はさらに 2 日後にメッセージを再送信します。 これは指数関数的後退で永遠に続きます。 受信者がそれらを確認するまで、メッセージは 5、10、20 日後に再送信されます。 ここで LMessage が一定の日数または月数後に諦める数を入力して、その動作を変更することができます。&lt;/p&gt;&lt;p&gt;デフォルトの動作は、この入力フィールドを空白のままにします。 &lt;/p&gt;&lt;/body&gt;&lt;/html&gt;</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="622"/>
        <source>Give up after</source>
        <translation>次の期間後に諦める</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="623"/>
        <source>and</source>
        <translation>と</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="624"/>
        <source>days</source>
        <translation>日</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="625"/>
        <source>months.</source>
        <translation>ヶ月。</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="626"/>
        <source>Resends Expire</source>
        <translation>再送信の期限</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="493"/>
        <source>Hide connection notifications</source>
        <translation>接続通知を非表示</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="528"/>
        <source>Maximum outbound connections: [0: none]</source>
        <translation>最大アウトバウンド接続: [0: なし]</translation>
    </message>
    <message>
        <location filename="../lmessageqt/settings.py" line="591"/>
        <source>Hardware GPU acceleration (OpenCL):</source>
        <translation>ハードウェア GPU アクセラレーション (OpenCL):</translation>
    </message>
</context>
</TS>