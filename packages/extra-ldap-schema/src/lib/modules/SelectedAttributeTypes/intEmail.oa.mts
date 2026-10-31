/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { IntEmail, _decode_IntEmail, _encode_IntEmail } from "../SelectedAttributeTypes/IntEmail.ta.mjs";
// export { intEmailMatch } from "../SelectedAttributeTypes/intEmailMatch.oa.mjs";
// export { intEmailString } from "../SelectedAttributeTypes/intEmailString.oa.mjs";
// export { id_at_intEmail } from "../SelectedAttributeTypes/id-at-intEmail.va.mjs";


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
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const intEmail: ATTRIBUTE = undefined;

/* eslint-enable */
