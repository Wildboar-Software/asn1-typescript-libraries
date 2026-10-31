/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gotoSubmenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoSubmenuEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaApplicationIcon } from "./gosaApplicationIcon.oa.mjs";
import { gosaApplicationPriority } from "./gosaApplicationPriority.oa.mjs";

/**
 * @summary gotoSubmenuEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoSubmenuEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaApplicationIcon
 *                               | gosaApplicationPriority }
 *   LDAP-NAME                 {"gotoSubmenuEntry"}
 *   LDAP-DESC                 "GOto - contains environment settings (v2.7)"
 *   ID                        id-oc-gotoSubmenuEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoSubmenuEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaApplicationIcon, gosaApplicationPriority] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gotoSubmenuEntry"],
    "&ldapDesc": "GOto - contains environment settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoSubmenuEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
