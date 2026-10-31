/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { gLUE2Entity } from "../LdapGlue501Entity/gLUE2Entity.oa.mjs";
// export { gLUE2ManagerProductVersion } from "../LdapGlue509Manager/gLUE2ManagerProductVersion.oa.mjs";
// export { id_oc_gLUE2Manager } from "../LdapGlue509Manager/id-oc-gLUE2Manager.va.mjs";


/**
 * @summary gLUE2Manager
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Manager OBJECT-CLASS ::= {
 *   SUBCLASS OF               { gLUE2Entity }
 *   MUST CONTAIN              { gLUE2ManagerID
 *                               | gLUE2ManagerProductName
 *                               | gLUE2ManagerServiceForeignKey }
 *   MAY CONTAIN               { gLUE2ManagerProductVersion }
 *   LDAP-NAME                 {"GLUE2Manager"}
 *   LDAP-DESC                 "A manager"
 *   ID                        id-oc-gLUE2Manager }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Manager: OBJECT_CLASS = undefined;

/* eslint-enable */
