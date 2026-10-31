/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { abstract } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_tuftsEduPerson } from "../LdapTuftsSchema/id-oc-tuftsEduPerson.va.mjs";
import { tuftsEduDisplayNameLF } from "../LdapTuftsSchema/tuftsEduDisplayNameLF.oa.mjs";

/**
 * @summary tuftsEduPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * tuftsEduPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      abstract
 *   MAY CONTAIN               { tuftsEduDisplayNameLF }
 *   LDAP-NAME                 {"tuftsEduPerson"}
 *   LDAP-DESC                 "Tufts schema extensions for people directory entries"
 *   ID                        id-oc-tuftsEduPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const tuftsEduPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": abstract /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [tuftsEduDisplayNameLF] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["tuftsEduPerson"],
    "&ldapDesc": "Tufts schema extensions for people directory entries" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_tuftsEduPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
