/* eslint-disable */
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../Notation/Identifier.ta.mjs";
import { firstCredentials } from "../DirectorySecurityExchanges/firstCredentials.oa.mjs";
// export { firstCredentials } from "../DirectorySecurityExchanges/firstCredentials.oa.mjs";
import { secondCredentials } from "../DirectorySecurityExchanges/secondCredentials.oa.mjs";
// export { secondCredentials } from "../DirectorySecurityExchanges/secondCredentials.oa.mjs";
import { thirdCredentials } from "../DirectorySecurityExchanges/thirdCredentials.oa.mjs";
// export { thirdCredentials } from "../DirectorySecurityExchanges/thirdCredentials.oa.mjs";
import { type SECURITY_EXCHANGE } from "../Notation/SECURITY-EXCHANGE.oca.mjs";


/**
 * @summary dirAuthenticationThreeWay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dirAuthenticationThreeWay SECURITY-EXCHANGE ::= {
 *   SE-ITEMS    {firstCredentials | secondCredentials | thirdCredentials}
 *   IDENTIFIER  global:{id-se-threewayse}
 * }
 * ```
 * 
 * @constant
 * @type {SECURITY_EXCHANGE}
 * @implements {SECURITY_EXCHANGE}
 */
export
const dirAuthenticationThreeWay: SECURITY_EXCHANGE = {
    class: "SECURITY-EXCHANGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&SE-Items": [ firstCredentials, secondCredentials, thirdCredentials, ] /* OBJECT_FIELD_SETTING */,
    "&sE-Identifier": undefined,
};

/* eslint-enable */
