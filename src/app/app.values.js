import appModule from './app.module';

const env ="dev"

appModule.value('apiEndPoints', {
    getSections: env === 'prod' ? 'https://gist.githubusercontent.com/arvin09/2d4ce5112d8086eec23461a548a19478/raw/f4f4c04ab802f3320f6b768c39fce7c73040b4f4/getSections.json': './data/getSections.json',
    getSlots: env === 'prod'? 'https://gist.githubusercontent.com/arvin09/4cc350e2526ca4a48e20c67eb16458d1/raw/1dac4d2dfacd220422b4c426dc58fd5ee16db63a/getSlots.json' : './data/getSolts.json'
});