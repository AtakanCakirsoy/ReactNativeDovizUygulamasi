//Dil bağımlı olması için oluşturduğumuz sayfa. Tek tek kullanılan terimleri,
//cümleleri tanımlıyorsun ve kod veriyorsun, en, tr vs. sonra 
//diğer sayfalara import ediyorsun bu sayfayı
//App.js sayfasına if yapısı ile deviceInfo 'tr' ise .setLanguage('tr') yazıyorsun Örnek olarak.
//text ifadelerin olduğu yerede mesela {strings.Birim} yazıyorsun oluyor.

import LocalizedStrings from 'react-native-localization'; //npm install --save react-native-localization

const strings = new LocalizedStrings({
  "en-US": {
    Doviz: "Foreign Currency",
    Birim: "Unit",
    Alis: "Buying",
    Satis: "Selling",
    Degisim: "Change"
  },
  en: {
    Doviz: "Foreign Currency",
    Altin: "Gold",
    Birim: "Unit",
    Alis: "Buying",
    Satis: "Selling",
    Degisim: "Change"
  },
  tr: {
    Doviz: "Döviz",
    Altin: "Altın",
    Birim: "Birim",
    Alis: "Alış",
    Satis: "Satış",
    Degisim: "Değişim"
  }
});

export default strings;