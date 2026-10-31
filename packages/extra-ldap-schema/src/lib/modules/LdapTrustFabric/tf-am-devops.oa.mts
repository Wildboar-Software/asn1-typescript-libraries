/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_tf_am_devops } from "../LdapTrustFabric/id-oc-tf-am-devops.va.mjs";


/**
 * @summary tf_am_devops
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-am-devops OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { tf-developers
 *                               | tf-maintainers
 *                               | tf-rel-mangers
 *                               | tf-approvers
 *                               | tf-owners }
 *   LDAP-NAME                 {"tf-am-devops"}
 *   ID                        id-oc-tf-am-devops }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_am_devops: OBJECT_CLASS = undefined;

/* eslint-enable */
