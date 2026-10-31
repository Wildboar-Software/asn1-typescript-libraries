/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
// export { ObjectClassKind, _enum_for_ObjectClassKind, ObjectClassKind_abstract /* IMPORTED_LONG_ENUMERATION_ITEM */, abstract /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_structural /* IMPORTED_LONG_ENUMERATION_ITEM */, structural /* IMPORTED_SHORT_ENUMERATION_ITEM */, ObjectClassKind_auxiliary /* IMPORTED_LONG_ENUMERATION_ITEM */, auxiliary /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ObjectClassKind, _encode_ObjectClassKind } from "../InformationFramework/ObjectClassKind.ta.mjs";
// export { device } from "../SelectedObjectClasses/device.oa.mjs";
// export { ejbcaDeviceCertificate } from "../LdapEjbca/ejbcaDeviceCertificate.oa.mjs";
// export { description } from "../SelectedAttributeTypes/description.oa.mjs";
// export { id_oc_ejbcaDevice } from "../LdapEjbca/id-oc-ejbcaDevice.va.mjs";


/**
 * @summary ejbcaDevice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ejbcaDevice OBJECT-CLASS ::= {
 *   SUBCLASS OF               { device }
 *   KIND                      auxiliary
 *   MUST CONTAIN              { ejbcaDeviceCertificate }
 *   MAY CONTAIN               { description }
 *   LDAP-NAME                 {"ejbcaDevice"}
 *   LDAP-DESC                 "subclass for adding certificates to devices"
 *   ID                        id-oc-ejbcaDevice }
 * ```
 * 
 * @constant
 * @type {OBJECT_CLASS}
 * @implements {OBJECT_CLASS}
 */
export
const ejbcaDevice: OBJECT_CLASS = undefined;

/* eslint-enable */
