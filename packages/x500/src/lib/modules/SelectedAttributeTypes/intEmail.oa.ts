/* eslint-disable */
import { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
import {
    userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */,
} from "../InformationFramework/AttributeUsage.ta.js";
import { id_at_intEmail } from "../SelectedAttributeTypes/id-at-intEmail.va.js";
import {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta.js";
import { intEmailMatch } from "../SelectedAttributeTypes/intEmailMatch.oa.js";
import { intEmailString } from "../SelectedAttributeTypes/intEmailString.oa.js";
export { ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.js";
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
} from "../InformationFramework/AttributeUsage.ta.js";
export { MATCHING_RULE } from "../InformationFramework/MATCHING-RULE.oca.js";
export { SYNTAX_NAME } from "../InformationFramework/SYNTAX-NAME.oca.js";
export { id_at_intEmail } from "../SelectedAttributeTypes/id-at-intEmail.va.js";
export {
    IntEmail,
    _decode_IntEmail,
    _encode_IntEmail,
} from "../SelectedAttributeTypes/IntEmail.ta.js";
export { intEmailMatch } from "../SelectedAttributeTypes/intEmailMatch.oa.js";
export { intEmailString } from "../SelectedAttributeTypes/intEmailString.oa.js";

/* START_OF_SYMBOL_DEFINITION intEmail */
/**
 * @summary intEmail
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * intEmail ATTRIBUTE ::= {
 *   WITH SYNTAX             IntEmail
 *   EQUALITY MATCHING RULE  intEmailMatch
 *   SINGLE VALUE            TRUE
 *   LDAP-SYNTAX             intEmailString.&id
 *   LDAP-NAME               {"Internationalized Email"}
 *   ID                      id-at-intEmail }
 * ```
 *
 * @constant
 * @type {ATTRIBUTE<IntEmail>}
 * @implements {ATTRIBUTE<IntEmail>}
 */
export const intEmail: ATTRIBUTE<IntEmail> = {
    class: "ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_IntEmail,
    },
    encoderFor: {
        "&Type": _encode_IntEmail,
    },
    "&equality-match": intEmailMatch /* OBJECT_FIELD_SETTING */,
    "&single-valued": true /* OBJECT_FIELD_SETTING */,
    "&ldapSyntax": intEmailString["&id"] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["Internationalized Email"],
    "&id": id_at_intEmail /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&collective": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&dummy": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&no-user-modification": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&usage": userApplications /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&obsolete": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION intEmail */

/* eslint-enable */
