/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_sunIdentityServerDiscoveryService } from "../Ldapmigration71sunAm/id-oc-sunIdentityServerDiscoveryService.va.mjs";
import { sunIdentityServerDynamicDiscoEntries } from "../Ldapmigration71sunAm/sunIdentityServerDynamicDiscoEntries.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [sunIdentityServerDynamicDiscoEntries] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["sunIdentityServerDiscoveryService"],
    "&ldapDesc": "Discovery Service OC" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sunIdentityServerDiscoveryService /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
