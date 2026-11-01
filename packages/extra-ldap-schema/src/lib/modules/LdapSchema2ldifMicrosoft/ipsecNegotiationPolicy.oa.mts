/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
import { id_oc_ipsecNegotiationPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecNegotiationPolicy.va.mjs";
import { iPSECNegotiationPolicyType } from "../MSUser/iPSECNegotiationPolicyType.oa.mjs";
import { iPSECNegotiationPolicyAction } from "../MSUser/iPSECNegotiationPolicyAction.oa.mjs";


/**
 * @summary ipsecNegotiationPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecNegotiationPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipsecBase }
 *   MAY CONTAIN               { iPSECNegotiationPolicyType
 *                               | iPSECNegotiationPolicyAction }
 *   LDAP-NAME                 {"ipsecNegotiationPolicy"}
 *   ID                        id-oc-ipsecNegotiationPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecNegotiationPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipsecBase, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iPSECNegotiationPolicyType, iPSECNegotiationPolicyAction, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipsecNegotiationPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipsecNegotiationPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

