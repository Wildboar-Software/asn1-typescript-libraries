/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ipaCertMapConfigObject } from "../LdapCertmap/id-oc-ipaCertMapConfigObject.va.mjs";
import { ipaCertMapPromptUsername } from "../LdapCertmap/ipaCertMapPromptUsername.oa.mjs";

/**
 * @summary ipaCertMapConfigObject
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaCertMapConfigObject OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { ipaCertMapPromptUsername }
 *   LDAP-NAME                 {"ipaCertMapConfigObject"}
 *   LDAP-DESC                 "IPA Certificate Mapping global config options"
 *   ID                        id-oc-ipaCertMapConfigObject }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaCertMapConfigObject: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ipaCertMapPromptUsername] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaCertMapConfigObject"],
    "&ldapDesc": "IPA Certificate Mapping global config options" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaCertMapConfigObject /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
