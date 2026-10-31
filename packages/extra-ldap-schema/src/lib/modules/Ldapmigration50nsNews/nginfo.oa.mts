/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_nginfo } from "../Ldapmigration50nsNews/id-oc-nginfo.va.mjs";


/**
 * @summary nginfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * nginfo OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass
 *                               | ngcomponent }
 *   MAY CONTAIN               { nsnewsACL
 *                               | subtreeACI
 *                               | description
 *                               | nsaclrole
 *                               | nsprettyname
 *                               | nsflags
 *                               | nscreator }
 *   LDAP-NAME                 {"nginfo"}
 *   LDAP-DESC                 "iPlanet defined objectclass"
 *   ID                        id-oc-nginfo }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const nginfo: OBJECT_CLASS = undefined;

/* eslint-enable */
