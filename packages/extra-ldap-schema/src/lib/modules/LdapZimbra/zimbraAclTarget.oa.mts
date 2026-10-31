/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_zimbraAclTarget } from "../LdapZimbra/id-oc-zimbraAclTarget.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { zimbraACE } from "./zimbraACE.oa.mjs";

/**
 * @summary zimbraAclTarget
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * zimbraAclTarget OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description
 *                               | zimbraACE }
 *   LDAP-NAME                 {"zimbraAclTarget"}
 *   LDAP-DESC                 "acl target"
 *   ID                        id-oc-zimbraAclTarget }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const zimbraAclTarget: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description, zimbraACE] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["zimbraAclTarget"],
    "&ldapDesc": "acl target" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_zimbraAclTarget /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
