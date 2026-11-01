/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { id_oc_dicomDevicesRoot } from "../LdapDicom/id-oc-dicomDevicesRoot.va.mjs";


/**
 * @summary dicomDevicesRoot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomDevicesRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"dicomDevicesRoot"}
 *   LDAP-DESC                 "Root of the DICOM Devices Hierarchy"
 *   ID                        id-oc-dicomDevicesRoot }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomDevicesRoot: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ commonName, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ description, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dicomDevicesRoot" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "Root of the DICOM Devices Hierarchy" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomDevicesRoot /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

