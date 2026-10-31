/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { ipaEnabledFlag } from "../Ldap60basev2/ipaEnabledFlag.oa.mjs";
import { id_oc_ipaCertMapRule } from "../LdapCertmap/id-oc-ipaCertMapRule.va.mjs";
import { associatedDomain } from "../MIXERAddressMapping/associatedDomain.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { ipaCertMapMapRule } from "./ipaCertMapMapRule.oa.mjs";
import { ipaCertMapMatchRule } from "./ipaCertMapMatchRule.oa.mjs";
import { ipaCertMapPriority } from "./ipaCertMapPriority.oa.mjs";

/**
 * @summary ipaCertMapRule
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipaCertMapRule OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | ipaCertMapMapRule
 *                               | ipaCertMapMatchRule
 *                               | associatedDomain
 *                               | ipaCertMapPriority
 *                               | ipaEnabledFlag }
 *   LDAP-NAME                 {"ipaCertMapRule"}
 *   LDAP-DESC                 "IPA Certificate Mapping rule"
 *   ID                        id-oc-ipaCertMapRule }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipaCertMapRule: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, ipaCertMapMapRule, ipaCertMapMatchRule, associatedDomain, ipaCertMapPriority, ipaEnabledFlag] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipaCertMapRule"],
    "&ldapDesc": "IPA Certificate Mapping rule" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipaCertMapRule /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
