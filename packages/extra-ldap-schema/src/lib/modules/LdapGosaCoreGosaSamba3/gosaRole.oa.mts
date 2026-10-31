/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaRole } from "../LdapGosaCoreGosaSamba3/id-oc-gosaRole.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { gosaAclTemplate } from "./gosaAclTemplate.oa.mjs";

/**
 * @summary gosaRole
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaRole OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gosaAclTemplate
 *                               | commonName }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"gosaRole"}
 *   LDAP-DESC                 "ACL container to define roles (v2.7)"
 *   ID                        id-oc-gosaRole }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaRole: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [gosaAclTemplate, commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaRole"],
    "&ldapDesc": "ACL container to define roles (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaRole /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
