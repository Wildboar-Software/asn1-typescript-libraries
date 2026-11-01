/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_site } from "../LdapSchema2ldifMicrosoft/id-oc-site.va.mjs";
import { location } from "../MSUser/location.oa.mjs";
import { notificationList } from "../MSUser/notificationList.oa.mjs";
import { managedBy } from "../MSUser/managedBy.oa.mjs";
import { gPLink } from "../MSUser/gPLink.oa.mjs";
import { gPOptions } from "../MSUser/gPOptions.oa.mjs";
import { mSMQSiteID } from "../MSUser/mSMQSiteID.oa.mjs";
import { mSMQNt4Stub } from "../MSUser/mSMQNt4Stub.oa.mjs";
import { mSMQSiteForeign } from "../MSUser/mSMQSiteForeign.oa.mjs";
import { mSMQInterval1 } from "../MSUser/mSMQInterval1.oa.mjs";
import { mSMQInterval2 } from "../MSUser/mSMQInterval2.oa.mjs";
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
const site: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ location, notificationList, managedBy, gPLink, gPOptions, mSMQSiteID, mSMQNt4Stub, mSMQSiteForeign, mSMQInterval1, mSMQInterval2, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "site" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_site /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
