/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_oxAuthUmaPCT } from "../LdapOx/id-oc-oxAuthUmaPCT.va.mjs";


/**
 * @summary oxAuthUmaPCT
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthUmaPCT OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { clnId
 *                               | iat
 *                               | exp
 *                               | del
 *                               | tknCde
 *                               | oxClaimValues }
 *   LDAP-NAME                 {"oxAuthUmaPCT"}
 *   ID                        id-oc-oxAuthUmaPCT }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthUmaPCT: OBJECT_CLASS = undefined;

/* eslint-enable */
