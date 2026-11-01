/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { id_oc_gotoDevice } from "../LdapGosaCoreGoto/id-oc-gotoDevice.va.mjs";
import { gotoHotplugDevice } from "../LdapGosaCoreGoto/gotoHotplugDevice.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";


/**
 * @summary gotoDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * gotoDevice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { gotoHotplugDevice
 *                               | description }
 *   LDAP-NAME                 {"gotoDevice"}
 *   LDAP-DESC                 "GOto - contains environment settings (v2.7)"
 *   ID                        id-oc-gotoDevice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const gotoDevice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ gotoHotplugDevice, description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "gotoDevice" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "GOto - contains environment settings (v2.7)" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_gotoDevice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

