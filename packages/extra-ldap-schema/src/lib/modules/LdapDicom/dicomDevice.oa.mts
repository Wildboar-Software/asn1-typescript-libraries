/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { top } from "../InformationFramework/top.oa.mjs";
import { id_oc_dicomDevice } from "../LdapDicom/id-oc-dicomDevice.va.mjs";
import { dicomAuthorizedNodeCertificateReference } from "./dicomAuthorizedNodeCertificateReference.oa.mjs";
import { dicomDescription } from "./dicomDescription.oa.mjs";
import { dicomDeviceName } from "./dicomDeviceName.oa.mjs";
import { dicomDeviceSerialNumber } from "./dicomDeviceSerialNumber.oa.mjs";
import { dicomInstalled } from "./dicomInstalled.oa.mjs";
import { dicomInstitutionAddress } from "./dicomInstitutionAddress.oa.mjs";
import { dicomInstitutionDepartmentName } from "./dicomInstitutionDepartmentName.oa.mjs";
import { dicomInstitutionName } from "./dicomInstitutionName.oa.mjs";
import { dicomIssuerOfPatientID } from "./dicomIssuerOfPatientID.oa.mjs";
import { dicomManufacturer } from "./dicomManufacturer.oa.mjs";
import { dicomManufacturerModelName } from "./dicomManufacturerModelName.oa.mjs";
import { dicomPrimaryDeviceType } from "./dicomPrimaryDeviceType.oa.mjs";
import { dicomRelatedDeviceReference } from "./dicomRelatedDeviceReference.oa.mjs";
import { dicomSoftwareVersion } from "./dicomSoftwareVersion.oa.mjs";
import { dicomStationName } from "./dicomStationName.oa.mjs";
import { dicomThisNodeCertificateReference } from "./dicomThisNodeCertificateReference.oa.mjs";
import { dicomVendorData } from "./dicomVendorData.oa.mjs";

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
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [top] /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [dicomDeviceName, dicomInstalled] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [dicomDescription, dicomManufacturer, dicomManufacturerModelName, dicomSoftwareVersion, dicomStationName, dicomDeviceSerialNumber, dicomInstitutionName, dicomInstitutionAddress, dicomInstitutionDepartmentName, dicomIssuerOfPatientID, dicomVendorData, dicomPrimaryDeviceType, dicomRelatedDeviceReference, dicomAuthorizedNodeCertificateReference, dicomThisNodeCertificateReference] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["dicomDevice"],
    "&ldapDesc": "DICOM Device related information" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_dicomDevice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
