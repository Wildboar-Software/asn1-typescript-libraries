/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.mjs";
import { facsimileNumberMatch } from "../SelectedAttributeTypes/facsimileNumberMatch.oa.mjs";
import { facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/facsimileNumberSubstringsMatch.oa.mjs";
import { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";
import {
    FacsimileTelephoneNumber,
    _decode_FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
import { id_at_facsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-facsimileTelephoneNumber.va.mjs";
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
export { facsimileNumberMatch } from "../SelectedAttributeTypes/facsimileNumberMatch.oa.mjs";
export { facsimileNumberSubstringsMatch } from "../SelectedAttributeTypes/facsimileNumberSubstringsMatch.oa.mjs";
export { facsimileTelephoneNr } from "../SelectedAttributeTypes/facsimileTelephoneNr.oa.mjs";
export {
    FacsimileTelephoneNumber,
    _decode_FacsimileTelephoneNumber,
    _encode_FacsimileTelephoneNumber,
} from "../SelectedAttributeTypes/FacsimileTelephoneNumber.ta.mjs";
export { id_at_facsimileTelephoneNumber } from "../SelectedAttributeTypes/id-at-facsimileTelephoneNumber.va.mjs";

/* START_OF_SYMBOL_DEFINITION facsimileTelephoneNumber */
/**
 * @summary facsimileTelephoneNumber
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * facsimileTelephoneNumber ATTRIBUTE ::= {
 *   WITH SYNTAX              FacsimileTelephoneNumber
 *   EQUALITY MATCHING RULE   facsimileNumberMatch
 *   SUBSTRINGS MATCHING RULE facsimileNumberSubstringsMatch
 *   LDAP-SYNTAX              facsimileTelephoneNr.&id
 *   LDAP-NAME                {"facsimileTelephoneNumber"}
 *   ID                       id-at-facsimileTelephoneNumber }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<FacsimileTelephoneNumber>}
 * @implements {ATTRIBUTE<FacsimileTelephoneNumber>}
 */
export const facsimileTelephoneNumber: ATTRIBUTE<FacsimileTelephoneNumber> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_FacsimileTelephoneNumber,
    },
    encoderFor: {
        "&Type": _encode_FacsimileTelephoneNumber,
    },
    "&equality-match": facsimileNumberMatch /* OBJECT_FIELD_SETTING */,
    "&substrings-match": facsimileNumberSubstringsMatch /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": facsimileTelephoneNr["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["facsimileTelephoneNumber"],
    "&id": id_at_facsimileTelephoneNumber /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&single-valued": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION facsimileTelephoneNumber */

/* eslint-enable */
