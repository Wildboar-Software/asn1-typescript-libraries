/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipsecBase } from "../LdapSchema2ldifMicrosoft/ipsecBase.oa.mjs";
import { id_oc_ipsecPolicy } from "../LdapSchema2ldifMicrosoft/id-oc-ipsecPolicy.va.mjs";
import { ipsecISAKMPReference } from "../MSUser/ipsecISAKMPReference.oa.mjs";
import { ipsecNFAReference } from "../MSUser/ipsecNFAReference.oa.mjs";


/**
 * @summary ipsecPolicy
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ipsecPolicy OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipsecBase }
 *   MAY CONTAIN               { ipsecISAKMPReference
 *                               | ipsecNFAReference }
 *   LDAP-NAME                 {"ipsecPolicy"}
 *   ID                        id-oc-ipsecPolicy }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ipsecPolicy: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipsecBase, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ ipsecISAKMPReference, ipsecNFAReference, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "ipsecPolicy" ] /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ipsecPolicy /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

