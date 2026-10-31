/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_schacUserEntitlements } from "../LdapSchac/id-oc-schacUserEntitlements.va.mjs";
import { schacUserStatus } from "../LdapSchac/schacUserStatus.oa.mjs";

/**
 * @summary schacUserEntitlements
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * schacUserEntitlements OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { schacUserStatus }
 *   LDAP-NAME                 {"schacUserEntitlements"}
 *   LDAP-DESC                 "Authorization for services"
 *   ID                        id-oc-schacUserEntitlements }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const schacUserEntitlements: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [schacUserStatus] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["schacUserEntitlements"],
    "&ldapDesc": "Authorization for services" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_schacUserEntitlements /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
