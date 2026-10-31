/* eslint-disable */
import { type ATTRIBUTE } from "../InformationFramework/ATTRIBUTE.oca.mjs";
// export { AttributeUsage, _enum_for_AttributeUsage, AttributeUsage_userApplications /* IMPORTED_LONG_ENUMERATION_ITEM */, userApplications /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_directoryOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, directoryOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_distributedOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, distributedOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, AttributeUsage_dSAOperation /* IMPORTED_LONG_ENUMERATION_ITEM */, dSAOperation /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AttributeUsage, _encode_AttributeUsage } from "../InformationFramework/AttributeUsage.ta.mjs";
// export { booleanMatch } from "../SelectedAttributeTypes/booleanMatch.oa.mjs";
// export { boolean_ } from "../SelectedAttributeTypes/boolean.oa.mjs";
// export { id_at_zimbraPrefContactsDisableAutocompleteOnContactGroupMembers } from "../LdapZimbra/id-at-zimbraPrefContactsDisableAutocompleteOnContactGroupMembers.va.mjs";


/**
 * @summary zimbraPrefContactsDisableAutocompleteOnContactGroupMembers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraPrefContactsDisableAutocompleteOnContactGroupMembers ATTRIBUTE ::= {
 *   WITH SYNTAX               BOOLEAN
 *   EQUALITY MATCHING RULE    booleanMatch
 *   SINGLE VALUE              TRUE
 *   LDAP-SYNTAX               boolean.&id
 *   LDAP-NAME                 {"zimbraPrefContactsDisableAutocompleteOnContactGroupMembers"}
 *   LDAP-DESC                 "Deprecated since: 8.0.0. Since 8.0.0, the contact group can contain member references, but member references are not searchable.. Orig desc: Disables autocomplete matching against the members email address."
 *   ID                        id-at-zimbraPrefContactsDisableAutocompleteOnContactGroupMembers }
 * ```
 * 
 * @constant
 * @type {ATTRIBUTE}
 * @implements {ATTRIBUTE}
 */
export
const zimbraPrefContactsDisableAutocompleteOnContactGroupMembers: ATTRIBUTE = undefined;

/* eslint-enable */
