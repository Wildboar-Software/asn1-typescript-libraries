/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { id_oc_gLUE2Share } from "../LdapGlue508Share/id-oc-gLUE2Share.va.mjs";


/**
 * @summary gLUE2Share
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Share OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ShareID
 *                               | gLUE2ShareServiceForeignKey }
 *   MAY CONTAIN               { gLUE2ShareDescription
 *                               | gLUE2ShareEndpointForeignKey
 *                               | gLUE2ShareResourceForeignKey }
 *   LDAP-NAME                 {"GLUE2Share"}
 *   LDAP-DESC                 "A share"
 *   ID                        id-oc-gLUE2Share }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Share: OBJECT_CLASS = undefined;

/* eslint-enable */
