/* eslint-disable */
import { SPKM_REQ, _decode_SPKM_REQ, _encode_SPKM_REQ } from "../SpkmGssTokens/SPKM-REQ.ta.mjs";
// export { SPKM_REQ, _decode_SPKM_REQ, _encode_SPKM_REQ } from "../SpkmGssTokens/SPKM-REQ.ta.mjs";
import { spkmFailure } from "../DirectorySecurityExchanges/spkmFailure.oa.mjs";
// export { spkmFailure } from "../DirectorySecurityExchanges/spkmFailure.oa.mjs";
import { type SEC_EXCHG_ITEM } from "../Notation/SEC-EXCHG-ITEM.oca.mjs";


/**
 * @summary spkmFirstCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * spkmFirstCredentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE SPKM-REQ ITEM-ID  1
 *   ERRORS                      {spkmFailure}
 * }
 * ```
 * 
 * @constant
 * @type {SEC_EXCHG_ITEM<SPKM_REQ>}
 * @implements {SEC_EXCHG_ITEM<SPKM_REQ>}
 */
export
const spkmFirstCredentials: SEC_EXCHG_ITEM<SPKM_REQ> = {
    class: "SEC-EXCHG-ITEM",
    decoderFor: {
        "&ItemType": _decode_SPKM_REQ,
    },
    encoderFor: {
        "&ItemType": _encode_SPKM_REQ,
    },
    "&itemId": 1 /* OBJECT_FIELD_SETTING */,
    "&Errors": [ spkmFailure, ] /* OBJECT_FIELD_SETTING */,
    "&ItemType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
