/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gotoMenuEntry } from "../LdapGosaCoreGosaSamba3/id-oc-gotoMenuEntry.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { gosaApplicationParameter } from "./gosaApplicationParameter.oa.mjs";
import { gosaApplicationPriority } from "./gosaApplicationPriority.oa.mjs";

/**
 * @summary gotoMenuEntry
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoMenuEntry OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gosaApplicationParameter
 *                               | gosaApplicationPriority }
 *   LDAP-NAME                 {"gotoMenuEntry"}
 *   LDAP-DESC                 "GOto - defines a menu entry (v2.7)"
 *   ID                        id-oc-gotoMenuEntry }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoMenuEntry: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [gosaApplicationParameter, gosaApplicationPriority] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["gotoMenuEntry"],
    "&ldapDesc": "GOto - defines a menu entry (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoMenuEntry /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
