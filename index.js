/*!
 * @author Renato Aloi <renato.aloi@gmail.com>
 * date 12/21/2018
 * Pagar.me Api integration react-native module
 */

//import mom from 'moment';
//const moment = mom().locale('pt-br');
import moment from 'moment/min/moment-with-locales';
import 'moment/locale/pt-br';
//import { NativeModules } from 'react-native';

//const { RNPagarMe } = NativeModules;

/* export default class RNPagarMe {
  getName = () => {
    return "Alguma coisa ai";
  }
}; */

export default class RNPagarMe {

    static getName = (name = 'Bob') => {
        return `Olá ${name}`;
    }

    /**
     * Inicia token da api
     * 
     * @param {string} ap_key
     */
    static init = (api_key) => {
        RNPagarMe.ApiToken = api_key;

        console.log('RNPagarMe.ApiToken 1', api_key);
    }

    /**
     * Cria cliente
     * 
     * @param {string} id 
     * @param {string} nome
     * @param {string} email
     * @param {string} cpf
     * @param {string} telefone (formato DDNNNNNNNN)
     * @param {string} data_nascimento (formato DD/MM/YYYY)
     * 
     * @return {object} { status (int), response (string) }
     */
    static createCustomer = async (id, nome, email, cpf, telefone, data_nascimento) => {
        var status = 200;
        var response = '';

        console.log('RNPagarMe.ApiToken 2', RNPagarMe.ApiToken);

        const customer = {
            api_key: RNPagarMe.ApiToken,
            external_id: id,
            name: nome,
            type: 'individual',
            country: 'br',
            email: email,
            documents: [
                {
                    type: 'cpf',
                    number: cpf
                }
            ],
            phone_numbers: [
                '+55' + telefone
            ],
            birthday: moment(data_nascimento, 'DD/MM/YYYY').format('YYYY-MM-DD')
        };

        const config = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(customer)
        };
        const url = 'https://api.pagar.me/1/customers';

        console.log('config.body', config.body);

        var resultId = '';
        try {
            const res = await fetch(url, config);
            const j = await res.json();
            console.log('sent ok!', response);
            status = res.status;
            response = JSON.stringify(j);
        } catch (e) {
            console.log('sent error!', e.message);
            status = 500;
            response = e.message;
        }

        console.log('response object', { status, response });

        return { status, response };
    }
};

// usage --- 

//PagarMe.getName();
