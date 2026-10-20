/* eslint-disable */
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../Notation/Identifier.ta.mjs";
import { spkmFirstCredentials } from "../DirectorySecurityExchanges/spkmFirstCredentials.oa.mjs";
// export { spkmFirstCredentials } from "../DirectorySecurityExchanges/spkmFirstCredentials.oa.mjs";
import { spkmSecondCredentials } from "../DirectorySecurityExchanges/spkmSecondCredentials.oa.mjs";
// export { spkmSecondCredentials } from "../DirectorySecurityExchanges/spkmSecondCredentials.oa.mjs";
import { spkmThirdCredentials } from "../DirectorySecurityExchanges/spkmThirdCredentials.oa.mjs";
// export { spkmThirdCredentials } from "../DirectorySecurityExchanges/spkmThirdCredentials.oa.mjs";
import { type SECURITY_EXCHANGE } from "../Notation/SECURITY-EXCHANGE.oca.mjs";


/**
 * @summary spkmThreeWay
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * spkmThreeWay SECURITY-EXCHANGE ::= {
 *   SE-ITEMS
 *     {spkmFirstCredentials | spkmSecondCredentials | spkmThirdCredentials}
 *   IDENTIFIER  global:{id-se-spkmthreewayse}
 * }
 * ```
 * 
 * @constant
 * @type {SECURITY_EXCHANGE}
 * @implements {SECURITY_EXCHANGE}
 */
export
const spkmThreeWay: SECURITY_EXCHANGE = {
    class: "SECURITY-EXCHANGE",
    decoderFor: {
    },
    encoderFor: {
    },
    "&SE-Items": [ spkmFirstCredentials, spkmSecondCredentials, spkmThirdCredentials, ] /* OBJECT_FIELD_SETTING */,
    "&sE-Identifier": undefined,
};

/* eslint-enable */
