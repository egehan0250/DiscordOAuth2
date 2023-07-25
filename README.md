# Discord OAuth2

Bu depoda, Discord OAuth2 entegrasyonunu gerçekleştirmek için gerekli kodları ve talimatları bulabilirsiniz. Bu sayede kullanıcılar Discord hesaplarıyla oturum açabilir.

## İçindekiler
- [Giriş](#giriş)
- [Gereksinimler](#gereksinimler)
- [Discord Botu Oluşturma](#discord-botu-oluşturma)
- [Token Nasıl Alınır?](#token-nasıl-alınır)
- [Client ID Nasıl Elde Edilir?](#client-id-nasıl-elde-edilir)
- [Client Secret Anahtarını Alma](#client-secret-anahtarını-alma)
- [Callback URL (Geri Çağrı URL) Eklemek](#callback-url-geri-çağrı-url-eklemek)
- [Kullanım](#kullanım)

## Giriş

Discord OAuth2, Discord kimlik doğrulamasını GitHub uygulamanızla entegre etmek için basit bir kılavuzdur. Bu sayede kullanıcılar Discord hesaplarıyla giriş yapabilir ve ek hesap oluşturma ihtiyacını azaltabilirsiniz.

## Gereksinimler

Başlamadan önce aşağıdakilere sahip olduğunuzdan emin olun:

- Bir Discord hesabı
- Temel JavaScript ve web geliştirme bilgisi
- Sisteminizde Node.js ve npm'in yüklü olması

## Discord Botu Oluşturma

Entegrasyona başlamak için öncelikle bir Discord botu oluşturmanız gerekiyor:

1. Discord Geliştirici Portalı'na gidin (https://discord.com/developers/applications).
2. "Yeni Uygulama"yı tıklayın ve botunuza bir ad verin.
3. Sol taraftaki menüden "Bot" sekmesine gidin.
4. "Bot Ekle"yi tıklayarak yeni bir bot kullanıcısı oluşturun.
5. Bot bölümünde, botunuzun kullanıcı adını ve profil resmini özelleştirebilirsiniz.

## Token Nasıl Alınır?

Botunuzu oluşturduktan sonra, onun token'ını almanız gerekmektedir:

1. Hala Discord Geliştirici Portalı'nda, uygulamanızın "Bot" bölümüne gidin.
2. "Token"ın altındaki "Kopyala" düğmesine tıklayarak token'ı panonuza kopyalayın.

## Client ID Nasıl Elde Edilir?

Client ID, uygulamanız için benzersiz bir kimliktir. Onu elde etmek için:

1. Discord Geliştirici Portalı'na geri dönün.
2. Sol taraftaki menüden "Genel Bilgiler" sekmesini seçin.
3. "Müşteri Kimliği (Client ID)" altında, uygulamanızın kimliğini bulacaksınız. Kopyalamak için "Kopyala" düğmesini tıklayabilirsiniz.

## Client Secret Anahtarını Alma

Client secret anahtarını oluşturmak için:

1. Discord Geliştirici Portalı'nda sol taraftaki menüden "OAuth2" sekmesine gidin.
2. "OAuth2 URL Oluşturucu" altında "Kapsamlar (Scopes)" bölümünde "bot"u seçin.
3. "Bot İzinleri (Bot Permissions)" bölümünde botunuz için gerekli izinleri seçin.
4. URL, "Kapsamlar" bölümünün altında oluşturulacaktır. URL'yi kopyalayıp tarayıcınıza yapıştırın.
5. Sunucunuzu listeden seçin ve botu yetkilendirin.
6. Yetkilendirme tamamlandıktan sonra, client secret anahtarınızı alacaksınız. **Not: Bu anahtarı güvenli tutun ve kamuya açık olarak paylaşmayın.**

## Callback URL (Geri Çağrı URL) Eklemek

OAuth2 kimlik doğrulama işlemi tamamlandığında, Discord'dan geri çağrı almak için bir geri çağrı URL'si ayarlamalısınız. Bu, kullanıcıların doğrulama işlemi sonrasında yönlendirileceği URL'dir.

1. Discord Developer Portal'a gidin: https://discord.com/developers/applications
2. Mevcut uygulamalarınızdan ya da yeni oluşturduğunuz uygulamanın altında bulunan "OAuth2" sekmesine tıklayın.
3. "Redirects" (Yönlendirmeler) başlığının altında "Redirect URL" (Yönlendirme URL) kısmını göreceksiniz.
4. Yönlendirme URL'sine, kullanıcıların kimlik doğrulama işlemi tamamlandığında yönlendirileceği URL'yi ekleyin.
5. URL'nizi doğruladıktan ve kaydettikten sonra, Discord OAuth2 entegrasyonunda kullanıcılara doğrulama sonrasında yönlendirilecek olan geri çağrı URL'si olarak belirlediğiniz bu adresi kullanabilirsiniz.
6. 
Örneğin, geri çağrı URL'si uygulamanızın ana sayfası olabilir: `https://example.com/callback`
Böylece, kullanıcılar Discord kimlik doğrulamasını tamamladıktan sonra uygulamanıza belirttiğiniz geri çağrı URL'sine yönlendirilecektir.


## Kullanım

1. Bu depoyu yerel makinenize klonlayın.
2. Gerekli bağımlılıkları yüklemek için `npm install` komutunu çalıştırın.
3. Projenin kök dizininde bir `.env` dosyası oluşturun veya hazırda oluşturulmuş `config.js` dosyasına gidin ve aşşağıdaki bilgileri gerektiği gibi doldurun.

```js
module.exports = {
    botToken: "YOUR_BOT_TOKEN",
    clientID: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    callbackURL: "YOUR_CALLBACK_URL",
    scopes: ["YOUR_SCOPES"], // Low level: ["identify"]
}
``` 
