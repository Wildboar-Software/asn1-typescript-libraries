/* eslint-disable */
import { ThreeWayCredentials, _decode_ThreeWayCredentials, _encode_ThreeWayCredentials } from "../DirectorySecurityExchanges/ThreeWayCredentials.ta.mjs";
// export { ThreeWayCredentials, _decode_ThreeWayCredentials, _encode_ThreeWayCredentials } from "../DirectorySecurityExchanges/ThreeWayCredentials.ta.mjs";
import { authenticationFailure } from "../DirectorySecurityExchanges/authenticationFailure.oa.mjs";
// export { authenticationFailure } from "../DirectorySecurityExchanges/authenticationFailure.oa.mjs";
import { type SEC_EXCHG_ITEM } from "../Notation/SEC-EXCHG-ITEM.oca.mjs";


/**
 * @summary firstCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * firstCredentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE  ThreeWayCredentials
 *   ITEM-ID    1
 *   ERRORS     {authenticationFailure}
 * }
 * ```
 * 
 * @constant
 * @type {SEC_EXCHG_ITEM<ThreeWayCredentials>}
 * @implements {SEC_EXCHG_ITEM<ThreeWayCredentials>}
 */
export
const firstCredentials: SEC_EXCHG_ITEM<ThreeWayCredentials> = {
    class: "SEC-EXCHG-ITEM",
    decoderFor: {
        "&ItemType": _decode_ThreeWayCredentials,
    },
    encoderFor: {
        "&ItemType": _encode_ThreeWayCredentials,
    },
    "&itemId": 1 /* OBJECT_FIELD_SETTING */,
    "&Errors": [ authenticationFailure, ] /* OBJECT_FIELD_SETTING */,
    "&ItemType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
