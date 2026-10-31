/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomConfigurationRoot } from "../LdapDicom/id-oc-dicomConfigurationRoot.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";

/**
 * @summary dicomConfigurationRoot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomConfigurationRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"dicomConfigurationRoot"}
 *   LDAP-DESC                 "Root of the DICOM Configuration Hierarchy"
 *   ID                        id-oc-dicomConfigurationRoot }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomConfigurationRoot: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomConfigurationRoot"],
    "&ldapDesc": "Root of the DICOM Configuration Hierarchy" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomConfigurationRoot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
