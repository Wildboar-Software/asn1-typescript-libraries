/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_site } from "../LdapSchema2ldifMicrosoft/id-oc-site.va.mjs";


/**
 * @summary site
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * site OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { location
 *                               | notificationList
 *                               | managedBy
 *                               | gPLink
 *                               | gPOptions
 *                               | mSMQSiteID
 *                               | mSMQNt4Stub
 *                               | mSMQSiteForeign
 *                               | mSMQInterval1
 *                               | mSMQInterval2 }
 *   LDAP-NAME                 {"site"}
 *   ID                        id-oc-site }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const site: OBJECT_CLASS = undefined;

/* eslint-enable */
