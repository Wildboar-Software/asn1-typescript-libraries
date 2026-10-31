/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomUniqueAETitlesRegistryRoot } from "../LdapDicom/id-oc-dicomUniqueAETitlesRegistryRoot.va.mjs";
import { commonName } from "../SelectedAttributeTypes/commonName.oa.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";

/**
 * @summary dicomUniqueAETitlesRegistryRoot
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomUniqueAETitlesRegistryRoot OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { commonName }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"dicomUniqueAETitlesRegistryRoot"}
 *   LDAP-DESC                 "Root of the Unique DICOM AE-Title Registry Hierarchy"
 *   ID                        id-oc-dicomUniqueAETitlesRegistryRoot }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomUniqueAETitlesRegistryRoot: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [commonName] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomUniqueAETitlesRegistryRoot"],
    "&ldapDesc": "Root of the Unique DICOM AE-Title Registry Hierarchy" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomUniqueAETitlesRegistryRoot /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
