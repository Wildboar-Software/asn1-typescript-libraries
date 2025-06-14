/* eslint-disable */
import { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
import { id_mr_telephoneNumberMatch } from "../SelectedAttributeTypes/id-mr-telephoneNumberMatch.va.mjs";
import { telephoneNr } from "../SelectedAttributeTypes/telephoneNr.oa.mjs";
import {
    TelephoneNumber,
    _decode_TelephoneNumber,
    _encode_TelephoneNumber,
} from "../SelectedAttributeTypes/TelephoneNumber.ta.mjs";
/* START_OF_SYMBOL_DEFINITION telephoneNumberMatch */
/**
 * @summary telephoneNumberMatch
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * telephoneNumberMatch MATCHING-RULE ::= {
 *   SYNTAX       TelephoneNumber
 *   LDAP-SYNTAX  telephoneNr.&id
 *   LDAP-NAME    {"telephoneNumberMatch"}
 *   ID           id-mr-telephoneNumberMatch }
 * ```
 *
 * @constant
 * @type {MATCHING_RULE<TelephoneNumber>}
 * @implements {MATCHING_RULE<TelephoneNumber>}
 */
export const telephoneNumberMatch: MATCHING_RULE<TelephoneNumber> = {
    class: "MATCHING-RULE",
    decoderFor: {
        "&AssertionType": _decode_TelephoneNumber,
    },
    encoderFor: {
        "&AssertionType": _encode_TelephoneNumber,
    },
    "&ldapSyntax": telephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["telephoneNumberMatch"],
    "&id": id_mr_telephoneNumberMatch /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&AssertionType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION telephoneNumberMatch */

/* eslint-enable */
