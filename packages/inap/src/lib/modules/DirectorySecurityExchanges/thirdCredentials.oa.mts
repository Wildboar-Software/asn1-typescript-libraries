/* eslint-disable */
import { ThreeWayCredentials, _decode_ThreeWayCredentials, _encode_ThreeWayCredentials } from "../DirectorySecurityExchanges/ThreeWayCredentials.ta.mjs";
// export { ThreeWayCredentials, _decode_ThreeWayCredentials, _encode_ThreeWayCredentials } from "../DirectorySecurityExchanges/ThreeWayCredentials.ta.mjs";
import { type SEC_EXCHG_ITEM } from "../Notation/SEC-EXCHG-ITEM.oca.mjs";


/**
 * @summary thirdCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * thirdCredentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE  ThreeWayCredentials
 *   ITEM-ID    3
 * }
 * ```
 * 
 * @constant
 * @type {SEC_EXCHG_ITEM<ThreeWayCredentials>}
 * @implements {SEC_EXCHG_ITEM<ThreeWayCredentials>}
 */
export
const thirdCredentials: SEC_EXCHG_ITEM<ThreeWayCredentials> = {
    class: "SEC-EXCHG-ITEM",
    decoderFor: {
        "&ItemType": _decode_ThreeWayCredentials,
    },
    encoderFor: {
        "&ItemType": _encode_ThreeWayCredentials,
    },
    "&itemId": 3 /* OBJECT_FIELD_SETTING */,
    "&ItemType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
