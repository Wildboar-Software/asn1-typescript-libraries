/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
import { id_oc_ipsecISAKMPPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecISAKMPPolicy.va.mjs";


/**
 * @summary ipsecISAKMPPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecISAKMPPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipsecBase }
 *   LDAP-NAME                 {"ipsecISAKMPPolicy"}
 *   ID                        id-oc-ipsecISAKMPPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecISAKMPPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipsecBase, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipsecISAKMPPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipsecISAKMPPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

