/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_tf_application } from "../LdapTrustFabric/id-oc-tf-application.va.mjs";


/**
 * @summary tf_application
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tf-application OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName
 *                               | tf-application-id }
 *   MAY CONTAIN               { displayName
 *                               | seeAlso
 *                               | description
 *                               | tf-source-repository
 *                               | tf-software-repository
 *                               | tf-issue-repository
 *                               | tf-creator }
 *   LDAP-NAME                 {"tf-application"}
 *   ID                        id-oc-tf-application }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tf_application: OBJECT_CLASS = undefined;

/* eslint-enable */
