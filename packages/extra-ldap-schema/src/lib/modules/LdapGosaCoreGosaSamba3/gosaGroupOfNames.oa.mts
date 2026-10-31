/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gosaGroupOfNames } from "../LdapGosaCoreGosaSamba3/id-oc-gosaGroupOfNames.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { member } from "../SelectedAttributeTypes/member.oa.mjs";
import { gosaGroupObjects } from "./gosaGroupObjects.oa.mjs";

/**
 * @summary gosaGroupOfNames
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gosaGroupOfNames OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName
 *                               | gosaGroupObjects }
 *   MAY CONTAIN               { member
 *                               | description }
 *   LDAP-NAME                 {"gosaGroupOfNames"}
 *   LDAP-DESC                 "GOsa object grouping (v2.7)"
 *   ID                        id-oc-gosaGroupOfNames }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gosaGroupOfNames: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName, gosaGroupObjects] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [member, description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gosaGroupOfNames"],
    "&ldapDesc": "GOsa object grouping (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gosaGroupOfNames /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
