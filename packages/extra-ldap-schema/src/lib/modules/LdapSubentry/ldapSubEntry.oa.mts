/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_ldapSubEntry } from "../LdapSubentry/id-oc-ldapSubEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary ldapSubEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ldapSubEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MAY CONTAIN               { commonName }
 *   LDAP-NAME                 {"ldapSubEntry"}
 *   LDAP-DESC                 "LDAP Subentry class, version 1"
 *   ID                        id-oc-ldapSubEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ldapSubEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ldapSubEntry"],
    "&ldapDesc": "LDAP Subentry class, version 1" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ldapSubEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
