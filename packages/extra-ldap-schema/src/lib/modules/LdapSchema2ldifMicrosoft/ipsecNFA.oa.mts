/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { id_oc_ipsecNFA } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecNFA.va.mjs";
import { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
import { ipsecFilterReference } from "../MSUser/ipsecFilterReference.oa.mjs";
import { ipsecNegotiationPolicyReference } from "../MSUser/ipsecNegotiationPolicyReference.oa.mjs";

/**
 * @summary ipsecNFA
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecNFA OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipsecBase }
 *   MAY CONTAIN               { ipsecNegotiationPolicyReference
 *                               | ipsecFilterReference }
 *   LDAP-NAME                 {"ipsecNFA"}
 *   ID                        id-oc-ipsecNFA }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecNFA: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [ipsecBase] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ipsecNegotiationPolicyReference, ipsecFilterReference] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ipsecNFA"],
    "&id": id_oc_ipsecNFA /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
