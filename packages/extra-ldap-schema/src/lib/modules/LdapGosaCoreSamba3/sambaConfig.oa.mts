/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_oc_sambaConfig } from "../LdapGosaCoreSamba3/id-oc-sambaConfig.va.mjs";


/**
 * @summary sambaConfig
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * sambaConfig OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   KIND                      auxiliary
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"sambaConfig"}
 *   LDAP-DESC                 "Samba Configuration Section"
 *   ID                        id-oc-sambaConfig }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const sambaConfig: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "sambaConfig" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Samba Configuration Section" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_sambaConfig /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

