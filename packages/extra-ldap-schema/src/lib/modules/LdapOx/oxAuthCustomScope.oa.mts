/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_oxAuthCustomScope } from "../LdapOx/id-oc-oxAuthCustomScope.va.mjs";


/**
 * @summary oxAuthCustomScope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxAuthCustomScope OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { defaultScope
 *                               | description
 *                               | displayName
 *                               | inum
 *                               | oxScopeType
 *                               | oxAuthClaim
 *                               | oxScriptDn
 *                               | oxAuthGroupClaims
 *                               | oxId
 *                               | oxIconUrl
 *                               | oxUmaPolicyScriptDn
 *                               | oxAttributes
 *                               | exp
 *                               | del }
 *   LDAP-NAME                 {"oxAuthCustomScope"}
 *   ID                        id-oc-oxAuthCustomScope }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxAuthCustomScope: OBJECT_CLASS = undefined;

/* eslint-enable */
