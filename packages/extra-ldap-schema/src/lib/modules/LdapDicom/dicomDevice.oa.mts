/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { structural /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomDevice } from "../LdapDicom/id-oc-dicomDevice.va.mjs";
import { dicomDeviceName } from "../LdapDicom/dicomDeviceName.oa.mjs";
import { dicomInstalled } from "../LdapDicom/dicomInstalled.oa.mjs";
import { dicomDescription } from "../LdapDicom/dicomDescription.oa.mjs";
import { dicomManufacturer } from "../LdapDicom/dicomManufacturer.oa.mjs";
import { dicomManufacturerModelName } from "../LdapDicom/dicomManufacturerModelName.oa.mjs";
import { dicomSoftwareVersion } from "../LdapDicom/dicomSoftwareVersion.oa.mjs";
import { dicomStationName } from "../LdapDicom/dicomStationName.oa.mjs";
import { dicomDeviceSerialNumber } from "../LdapDicom/dicomDeviceSerialNumber.oa.mjs";
import { dicomInstitutionName } from "../LdapDicom/dicomInstitutionName.oa.mjs";
import { dicomInstitutionAddress } from "../LdapDicom/dicomInstitutionAddress.oa.mjs";
import { dicomInstitutionDepartmentName } from "../LdapDicom/dicomInstitutionDepartmentName.oa.mjs";
import { dicomIssuerOfPatientID } from "../LdapDicom/dicomIssuerOfPatientID.oa.mjs";
import { dicomVendorData } from "../LdapDicom/dicomVendorData.oa.mjs";
import { dicomPrimaryDeviceType } from "../LdapDicom/dicomPrimaryDeviceType.oa.mjs";
import { dicomRelatedDeviceReference } from "../LdapDicom/dicomRelatedDeviceReference.oa.mjs";
import { dicomAuthorizedNodeCertificateReference } from "../LdapDicom/dicomAuthorizedNodeCertificateReference.oa.mjs";
import { dicomThisNodeCertificateReference } from "../LdapDicom/dicomThisNodeCertificateReference.oa.mjs";


/**
 * @summary dicomDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * dicomDevice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { top }
 *   MUST CONTAIN              { dicomDeviceName
 *                               | dicomInstalled }
 *   MAY CONTAIN               { dicomDescription
 *                               | dicomManufacturer
 *                               | dicomManufacturerModelName
 *                               | dicomSoftwareVersion
 *                               | dicomStationName
 *                               | dicomDeviceSerialNumber
 *                               | dicomInstitutionName
 *                               | dicomInstitutionAddress
 *                               | dicomInstitutionDepartmentName
 *                               | dicomIssuerOfPatientID
 *                               | dicomVendorData
 *                               | dicomPrimaryDeviceType
 *                               | dicomRelatedDeviceReference
 *                               | dicomAuthorizedNodeCertificateReference
 *                               | dicomThisNodeCertificateReference }
 *   LDAP-NAME                 {"dicomDevice"}
 *   LDAP-DESC                 "DICOM Device related information"
 *   ID                        id-oc-dicomDevice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const dicomDevice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {
    },
    encoderFor: {
    },
    "&Superclasses": [ top, ] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ dicomDeviceName, dicomInstalled, ] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [ dicomDescription, dicomManufacturer, dicomManufacturerModelName, dicomSoftwareVersion, dicomStationName, dicomDeviceSerialNumber, dicomInstitutionName, dicomInstitutionAddress, dicomInstitutionDepartmentName, dicomIssuerOfPatientID, dicomVendorData, dicomPrimaryDeviceType, dicomRelatedDeviceReference, dicomAuthorizedNodeCertificateReference, dicomThisNodeCertificateReference, ] /* OBJECT_FIELD_SETTING */,
    "&ldapName": [ "dicomDevice" ] /* OBJECT_FIELD_SETTING */,
    "&ldapDesc": "DICOM Device related information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomDevice /* OBJECT_FIELD_SETTING *//* UNIQUE_OBJECT_FIELD_SETTING */,
    "&kind": structural /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */

