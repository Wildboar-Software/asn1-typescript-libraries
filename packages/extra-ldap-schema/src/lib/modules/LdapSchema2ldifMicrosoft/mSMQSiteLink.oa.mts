/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_mSMQSiteLink } from "../LdapSchema2ldifMicrosoft/id-oc-mSMQSiteLink.va.mjs";


/**
 * @summary mSMQSiteLink
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * mSMQSiteLink OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { mSMQSite1
 *                               | mSMQSite2
 *                               | mSMQCost }
 *   MAY CONTAIN               { mSMQSiteGates
 *                               | mSMQSiteGatesMig }
 *   LDAP-NAME                 {"mSMQSiteLink"}
 *   ID                        id-oc-mSMQSiteLink }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const mSMQSiteLink: OBJECT_CLASS = undefined;

/* eslint-enable */
