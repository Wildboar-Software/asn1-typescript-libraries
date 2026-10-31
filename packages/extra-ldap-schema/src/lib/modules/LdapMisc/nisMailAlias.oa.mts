/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
// export { rfc822MailMember } from "../LdapMisc/rfc822MailMember.oa.mjs";
// export { id_oc_nisMailAlias } from "../LdapMisc/id-oc-nisMailAlias.va.mjs";


/**
 * @summary nisMailAlias
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nisMailAlias OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { rfc822MailMember }
 *   LDAP-NAME                 {"nisMailAlias"}
 *   LDAP-DESC                 "NIS mail alias"
 *   ID                        id-oc-nisMailAlias }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nisMailAlias: OBJECT_CLASS = undefined;

/* eslint-enable */
