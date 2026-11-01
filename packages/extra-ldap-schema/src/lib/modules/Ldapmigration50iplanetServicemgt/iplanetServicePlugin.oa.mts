/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { organizationalUnitName } from "../SelectedAttributeTypes/organizationalUnitName.oa.mjs";
import { id_oc_iplanetServicePlugin } from "../Ldapmigration50iplanetServicemgt/id-oc-iplanetServicePlugin.va.mjs";
import { iplanetPluginID } from "../Ldapmigration50iplanetServicemgt/iplanetPluginID.oa.mjs";
import { iplanetKeyValue } from "../Ldapmigration50iplanetServicemgt/iplanetKeyValue.oa.mjs";
import { iplanetXMLKeyValue } from "../Ldapmigration50iplanetServicemgt/iplanetXMLKeyValue.oa.mjs";
import { iplanetSMSPriority } from "../Ldapmigration50iplanetServicemgt/iplanetSMSPriority.oa.mjs";


/**
 * @summary iplanetServicePlugin
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * iplanetServicePlugin OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { organizationalUnitName }
 *   MAY CONTAIN               { iplanetPluginID
 *                               | iplanetKeyValue
 *                               | iplanetXMLKeyValue
 *                               | iplanetSMSPriority }
 *   LDAP-NAME                 {"iplanetServicePlugin"}
 *   LDAP-DESC                 "Object that stores information specific to service plugins"
 *   ID                        id-oc-iplanetServicePlugin }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const iplanetServicePlugin: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ organizationalUnitName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ iplanetPluginID, iplanetKeyValue, iplanetXMLKeyValue, iplanetSMSPriority, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "iplanetServicePlugin" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Object that stores information specific to service plugins" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_iplanetServicePlugin /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

