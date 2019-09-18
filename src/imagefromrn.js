import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ImageFromRNUI from './imagefromrn_ui';


export default class CustomElement extends Plugin {

	static get requires() {
		return [ ImageFromRNUI ];
	}


	static get pluginName() {
		return 'ImageFromRN';
	}


	
}
