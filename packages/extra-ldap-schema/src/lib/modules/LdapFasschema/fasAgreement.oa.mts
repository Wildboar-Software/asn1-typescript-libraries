/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ipaAssociation } from "../Ldap60basev2/ipaAssociation.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { id_oc_fasAgreement } from "../LdapFasschema/id-oc-fasAgreement.va.mjs";

/**
 * @summary fasAgreement
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * fasAgreement OBJECT-CLASS ::= {
 *   SUBCLASS OF               { ipaAssociation }
 *   MAY CONTAIN               { member }
 *   LDAP-NAME                 {"fasAgreement"}
 *   LDAP-DESC                 "FAS agreement objectclass"
 *   ID                        id-oc-fasAgreement }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const fasAgreement: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ ipaAssociation, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ member, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "fasAgreement" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "FAS agreement objectclass" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_fasAgreement /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
