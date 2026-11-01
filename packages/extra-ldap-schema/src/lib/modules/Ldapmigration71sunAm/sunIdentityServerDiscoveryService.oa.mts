/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
import { sunIdentityServerDynamicDiscoEntries } from "../Ldapmigration71sunAm/sunIdentityServerDynamicDiscoEntries.oa.mjs";
// export { sunIdentityServerDynamicDiscoEntries } from "../Ldapmigration71sunAm/sunIdentityServerDynamicDiscoEntries.oa.mjs";
import { id_oc_sunIdentityServerDiscoveryService } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerDiscoveryService.va.mjs";
// export { id_oc_sunIdentityServerDiscoveryService } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerDiscoveryService.va.mjs";


/**
 * @summary sunIdentityServerDiscoveryService
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sunIdentityServerDiscoveryService OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { sunIdentityServerDynamicDiscoEntries }
 *   LDAP-NAME                 {"sunIdentityServerDiscoveryService"}
 *   LDAP-DESC                 "Discovery Service OC"
 *   ID                        id-oc-sunIdentityServerDiscoveryService }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sunIdentityServerDiscoveryService: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ sunIdentityServerDynamicDiscoEntries, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sunIdentityServerDiscoveryService" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Discovery Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIdentityServerDiscoveryService /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
