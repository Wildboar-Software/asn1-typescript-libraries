/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_omemoPerson } from "../LdapOmemo/id-oc-omemoPerson.va.mjs";
import { omemoBundle } from "../LdapOmemo/omemoBundle.oa.mjs";

/**
 * @summary omemoPerson
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * omemoPerson OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { omemoBundle }
 *   LDAP-NAME                 {"omemoPerson"}
 *   LDAP-DESC                 "Person with OMEMO encryption support"
 *   ID                        id-oc-omemoPerson }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const omemoPerson: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [omemoBundle] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["omemoPerson"],
    "&ldapDesc": "Person with OMEMO encryption support" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_omemoPerson /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
