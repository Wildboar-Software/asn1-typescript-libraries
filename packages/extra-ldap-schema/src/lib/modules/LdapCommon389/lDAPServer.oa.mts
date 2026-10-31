/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { id_oc_lDAPServer } from "../LdapCommon389/id-oc-lDAPServer.va.mjs";


/**
 * @summary lDAPServer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * lDAPServer OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | localityName
 *                               | organizationalUnitName
 *                               | seeAlso
 *                               | generation
 *                               | changeLogMaximumAge
 *                               | changeLogMaximumSize }
 *   LDAP-NAME                 {"LDAPServer"}
 *   LDAP-DESC                 "Netscape defined objectclass"
 *   ID                        id-oc-lDAPServer }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const lDAPServer: OBJECT_CLASS = undefined;

/* eslint-enable */
