/* eslint-disable */
import { type MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { type TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
// export { TelephoneNumber, _decode_TelephoneNumber, _encode_TelephoneNumber } from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
import { id_mr_facsimileNumberMatch } from "../SelectedAttributeTypes/id-mr-facsimileNumberMatch.va.mjs";
// export { id_mr_facsimileNumberMatch } from "../SelectedAttributeTypes/id-mr-facsimileNumberMatch.va.mjs";


/**
 * @summary facsimileNumberMatch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * facsimileNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   ID           id-mr-facsimileNumberMatch }
 * ```
 * 
 * @constant
 * @type {MATCHING_RULE<TelephoneNumber>}
 * @implements {MATCHING_RULE<TelephoneNumber>}
 */
export
const facsimileNumberMatch: MATCHING_RULE<TelephoneNumber> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&AssertionType": _encode_TelephoneNumber,
    },
    "&id": id_mr_facsimileNumberMatch /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
