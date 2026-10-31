/* eslint-disable */
import { type OBJECT_CLASS } from "../InformationFramework/OBJECT-CLASS.oca.mjs";
import { auxiliary } from "../InformationFramework/ObjectClassKind.ta.mjs";
import { ejbcaDeviceCertificate } from "../LdapEjbca/ejbcaDeviceCertificate.oa.mjs";
import { id_oc_ejbcaDevice } from "../LdapEjbca/id-oc-ejbcaDevice.va.mjs";
import { description } from "../SelectedAttributeTypes/description.oa.mjs";
import { device } from "../SelectedObjectClasses/device.oa.mjs";

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
const ejbcaDevice: OBJECT_CLASS = {
    class: "OBJECT-CLASS",
    decoderFor: {},
    encoderFor: {},
    "&Superclasses": [device] /* OBJECT_FIELD_SETTING */,
    "&kind": auxiliary /* OBJECT_FIELD_SETTING */,
    "&MandatoryAttributes": [ejbcaDeviceCertificate] /* OBJECT_FIELD_SETTING */,
    "&OptionalAttributes": [description] /* OBJECT_FIELD_SETTING */,
    "&ldapName": ["ejbcaDevice"],
    "&ldapDesc": "subclass for adding certificates to devices" /* OBJECT_FIELD_SETTING */,
    "&id": id_oc_ejbcaDevice /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
