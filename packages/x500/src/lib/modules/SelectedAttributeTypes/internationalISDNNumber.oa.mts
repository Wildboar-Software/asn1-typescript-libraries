/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { id_at_internationalISDNNumber } from "../SelectedAttributeTypes/id-at-internationalISDNNumber.va.mjs";
import {
    InternationalISDNNumber,
    _decode_InternationalISDNNumber,
    _encode_InternationalISDNNumber,
} from "../SelectedAttributeTypes/InternationalISDNNumber.ta.mjs";
import { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
import { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
import { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa.mjs";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
export {
    AttributeUsage,
    AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */,
    AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */,
    directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_AttributeUsage,
    _encode_AttributeUsage,
    _enum_for_AttributeUsage,
} from "../InformationFramework/AttributeUsage.ta.mjs";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.mjs";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.mjs";
export { id_at_internationalISDNNumber } from "../SelectedAttributeTypes/id-at-internationalISDNNumber.va.mjs";
export {
    InternationalISDNNumber,
    _decode_InternationalISDNNumber,
    _encode_InternationalISDNNumber,
} from "../SelectedAttributeTypes/InternationalISDNNumber.ta.mjs";
export { numericString } from "../SelectedAttributeTypes/numericString.oa.mjs";
export { numericStringMatch } from "../SelectedAttributeTypes/numericStringMatch.oa.mjs";
export { numericStringSubstringsMatch } from "../SelectedAttributeTypes/numericStringSubstringsMatch.oa.mjs";

/* START_OF_SYMBOL_DEFINITION internationalISDNNumber */
/**
 * @summary internationalISDNNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * internationalISDNNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              InternationalISDNNumber
 *   EQUALITY MATCHING RULE   numericStringMatch
 *   SUBSTRINGS MATCHING RULE numericStringSubstringsMatch
 *   LDAP-SYNTAX              numericString.&id
 *   LDAP-NAME                {"internationalISDNNumber"}
 *   ID                       id-at-internationalISDNNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<InternationalISDNNumber>}
 * @implements {ATTRIBUTE<InternationalISDNNumber>}
 */
export const internationalISDNNumber: ATTRIBUTE<InternationalISDNNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_InternationalISDNNumber,
    },
    encoderFor: {
        "&Type": _encode_InternationalISDNNumber,
    },
    "&equality-match": numericStringMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": numericStringSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": numericString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["internationalISDNNumber"],
    "&id": id_at_internationalISDNNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION internationalISDNNumber */

/* eslint-enable */
