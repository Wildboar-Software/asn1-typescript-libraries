/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { id_openldap_oc } from "../OpenLDAP/id-openldap-oc.va.mjs";


/**
 * @summary openLDAPou
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * openLDAPou OBJECT-CLASS ::= {
 *     SUBCLASS OF     {organizationalUnit}
 *     KIND            structural
 *     MAY CONTAIN     {buildingName | displayName | labeledURI | organizationName}
 *     LDAP-NAME        {"OpenLDAPou"}
 *     LDAP-DESC       "OpenLDAP Organizational Unit Object"
 *     ID                { id-openldap-oc 4 }
 * }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const openLDAPou: OBJECT_CLASS = undefined;

/* eslint-enable */
