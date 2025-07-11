/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PhysicalDeliveryOfficeName,
    _decode_PhysicalDeliveryOfficeName,
    _encode_PhysicalDeliveryOfficeName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryOfficeName.ta.mjs";
/**
 * @summary physical_delivery_office_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryOfficeName
 *   IDENTIFIED BY  10 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeName>}
 */
export const physical_delivery_office_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOfficeName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOfficeName,
    },
    "&id": 10 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
