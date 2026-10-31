/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { top } from "../InformationFramework/top.oa.mjs";
// export { id_oc_dicomDevice } from "../LdapDicom/id-oc-dicomDevice.va.mjs";


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
const dicomDevice: OBJECT_CLASS = undefined;

/* eslint-enable */
