/* eslint-disable */
import { SPKM_REP_TI, _decode_SPKM_REP_TI, _encode_SPKM_REP_TI } from "../SpkmGssTokens/SPKM-REP-TI.ta.mjs";
// export { SPKM_REP_TI, _decode_SPKM_REP_TI, _encode_SPKM_REP_TI } from "../SpkmGssTokens/SPKM-REP-TI.ta.mjs";
import { spkmFailure } from "../DirectorySecurityExchanges/spkmFailure.oa.mjs";
// export { spkmFailure } from "../DirectorySecurityExchanges/spkmFailure.oa.mjs";
import { type SEC_EXCHG_ITEM } from "../Notation/SEC-EXCHG-ITEM.oca.mjs";


/**
 * @summary spkmSecondCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * spkmSecondCredentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE SPKM-REP-TI ITEM-ID  2
 *   ERRORS                         {spkmFailure}
 * }
 * ```
 * 
 * @constant
 * @type {SEC_EXCHG_ITEM<SPKM_REP_TI>}
 * @implements {SEC_EXCHG_ITEM<SPKM_REP_TI>}
 */
export
const spkmSecondCredentials: SEC_EXCHG_ITEM<SPKM_REP_TI> = {
    class: "SEC-EXCHG-ITEM",
    decoderFor: {
        "&ItemType": _decode_SPKM_REP_TI,
    },
    encoderFor: {
        "&ItemType": _encode_SPKM_REP_TI,
    },
    "&itemId": 2 /* OBJECT_FIELD_SETTING */,
    "&Errors": [ spkmFailure, ] /* OBJECT_FIELD_SETTING */,
    "&ItemType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
