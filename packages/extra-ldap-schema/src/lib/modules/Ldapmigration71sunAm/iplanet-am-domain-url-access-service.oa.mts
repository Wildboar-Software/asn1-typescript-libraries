/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { iplanet_am_domain_url_access_allow } from "../Ldapmigration71sunAm/iplanet-am-domain-url-access-allow.oa.mjs";
// export { iplanet_am_domain_url_access_allow } from "../Ldapmigration71sunAm/iplanet-am-domain-url-access-allow.oa.mjs";
import { id_oc_iplanet_am_domain_url_access_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-domain-url-access-service.va.mjs";
// export { id_oc_iplanet_am_domain_url_access_service } from "../Ldapmigration71sunAm/id-oc-iplanet-am-domain-url-access-service.va.mjs";


/**
 * @summary iplanet_am_domain_url_access_service
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanet-am-domain-url-access-service OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { iplanet-am-domain-url-access-allow }
 *   LDAP-NAME                 {"iplanet-am-domain-url-access-service"}
 *   LDAP-DESC                 "Domain URL Access Service OC"
 *   ID                        id-oc-iplanet-am-domain-url-access-service }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanet_am_domain_url_access_service: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanet_am_domain_url_access_allow, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanet-am-domain-url-access-service" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Domain URL Access Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanet_am_domain_url_access_service /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
