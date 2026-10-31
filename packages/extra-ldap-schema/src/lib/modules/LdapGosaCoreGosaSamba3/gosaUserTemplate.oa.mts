/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaUserTemplate } from "../LdapGosaCoreGosaSamba3/id-oc-gosaUserTemplate.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";

/**
 * @summary gosaUserTemplate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaUserTemplate OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { commonName }
 *   LDAP-NAME                 {"gosaUserTemplate"}
 *   LDAP-DESC                 "Class for GOsa User Templates (v2.7)"
 *   ID                        id-oc-gosaUserTemplate }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaUserTemplate: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaUserTemplate"],
    "&ldapDesc": "Class for GOsa User Templates (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaUserTemplate /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
