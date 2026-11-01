/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_gLUE2Extension } from "../LdapGlue502Extension/id-oc-gLUE2Extension.va.mjs";
import { gLUE2ExtensionLocalID } from "../LdapGlue502Extension/gLUE2ExtensionLocalID.oa.mjs";
import { gLUE2ExtensionKey } from "../LdapGlue502Extension/gLUE2ExtensionKey.oa.mjs";
import { gLUE2ExtensionValue } from "../LdapGlue502Extension/gLUE2ExtensionValue.oa.mjs";
import { gLUE2ExtensionEntityForeignKey } from "../LdapGlue502Extension/gLUE2ExtensionEntityForeignKey.oa.mjs";


/**
 * @summary gLUE2Extension
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gLUE2Extension OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { gLUE2ExtensionLocalID
 *                               | gLUE2ExtensionKey
 *                               | gLUE2ExtensionValue
 *                               | gLUE2ExtensionEntityForeignKey }
 *   LDAP-NAME                 {"GLUE2Extension"}
 *   LDAP-DESC                 "A key/value pair enabling the association of extra information"
 *   ID                        id-oc-gLUE2Extension }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gLUE2Extension: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ gLUE2ExtensionLocalID, gLUE2ExtensionKey, gLUE2ExtensionValue, gLUE2ExtensionEntityForeignKey, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "GLUE2Extension" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "A key/value pair enabling the association of extra information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gLUE2Extension /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

