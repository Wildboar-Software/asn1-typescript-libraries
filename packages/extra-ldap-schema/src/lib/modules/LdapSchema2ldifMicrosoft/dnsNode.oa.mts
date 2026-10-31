/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dnsNode } from "../LdapSchema2ldifMicrosoft/id-oc-dnsNode.va.mjs";
import { dNSProperty } from "../MSUser/dNSProperty.oa.mjs";
import { dNSTombstoned } from "../MSUser/dNSTombstoned.oa.mjs";
import { dnsRecord } from "../MSUser/dnsRecord.oa.mjs";
import { dc } from "../SelectedAttributeTypes/dc.oa.mjs";

/**
 * @summary dnsNode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dnsNode OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dc }
 *   MAY CONTAIN               { dnsRecord
 *                               | dNSProperty
 *                               | dNSTombstoned }
 *   LDAP-NAME                 {"dnsNode"}
 *   ID                        id-oc-dnsNode }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dnsNode: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dc] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dnsRecord, dNSProperty, dNSTombstoned] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dnsNode"],
    "&id": id_oc_dnsNode /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
