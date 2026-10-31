/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { objectClass } from "../InformationFramework/objectClass.oa.mjs";
// export { id_oc_oxUmaResourcePermission } from "../LdapOx/id-oc-oxUmaResourcePermission.va.mjs";


/**
 * @summary oxUmaResourcePermission
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * oxUmaResourcePermission OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { objectClass }
 *   MAY CONTAIN               { exp
 *                               | del
 *                               | oxAuthUmaScope
 *                               | oxConfigurationCode
 *                               | oxResourceSetId
 *                               | oxAttributes
 *                               | oxTicket
 *                               | oxStatus }
 *   LDAP-NAME                 {"oxUmaResourcePermission"}
 *   ID                        id-oc-oxUmaResourcePermission }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const oxUmaResourcePermission: OBJECT_CLASS = undefined;

/* eslint-enable */
