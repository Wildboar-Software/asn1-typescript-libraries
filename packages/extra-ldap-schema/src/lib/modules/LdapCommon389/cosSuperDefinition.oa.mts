/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ldapSubEntry } from "../LdapSubentry/ldapSubEntry.oa.mjs";
// export { cosAttribute } from "../LdapCommon389/cosAttribute.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_cosSuperDefinition } from "../LdapCommon389/id-oc-cosSuperDefinition.va.mjs";


/**
 * @summary cosSuperDefinition
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * cosSuperDefinition OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ldapSubEntry }
 *   MUST CONTAIN              { cosAttribute }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"cosSuperDefinition"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-cosSuperDefinition }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const cosSuperDefinition: OBJECT_CLASS = undefined;

/* eslint-enable */
