/* eslint-disable */
import { SPKM_REP_IT, _decode_SPKM_REP_IT, _encode_SPKM_REP_IT } from "../SpkmGssTokens/SPKM-REP-IT.ta.mjs";
// export { SPKM_REP_IT, _decode_SPKM_REP_IT, _encode_SPKM_REP_IT } from "../SpkmGssTokens/SPKM-REP-IT.ta.mjs";
import { spkmFailure } from "../DirectorySecurityExchanges/spkmFailure.oa.mjs";
// export { spkmFailure } from "../DirectorySecurityExchanges/spkmFailure.oa.mjs";
import { type SEC_EXCHG_ITEM } from "../Notation/SEC-EXCHG-ITEM.oca.mjs";


/**
 * @summary spkmThirdCredentials
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * spkmThirdCredentials SEC-EXCHG-ITEM ::= {
 *   ITEM-TYPE SPKM-REP-IT ITEM-ID  3
 *   ERRORS                         {spkmFailure}
 * }
 * ```
 * 
 * @constant
 * @type {SEC_EXCHG_ITEM<SPKM_REP_IT>}
 * @implements {SEC_EXCHG_ITEM<SPKM_REP_IT>}
 */
export
const spkmThirdCredentials: SEC_EXCHG_ITEM<SPKM_REP_IT> = {
    class: "SEC-EXCHG-ITEM",
    decoderFor: {
        "&ItemType": _decode_SPKM_REP_IT,
    },
    encoderFor: {
        "&ItemType": _encode_SPKM_REP_IT,
    },
    "&itemId": 3 /* OBJECT_FIELD_SETTING */,
    "&Errors": [ spkmFailure, ] /* OBJECT_FIELD_SETTING */,
    "&ItemType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
