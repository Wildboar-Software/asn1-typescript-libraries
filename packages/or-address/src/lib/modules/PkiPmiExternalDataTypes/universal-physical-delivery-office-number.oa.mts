/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalPhysicalDeliveryOfficeNumber,
    _decode_UniversalPhysicalDeliveryOfficeNumber,
    _encode_UniversalPhysicalDeliveryOfficeNumber,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryOfficeNumber.ta.mjs";
/**
 * @summary universal_physical_delivery_office_number
 * @description
 *
 * OR-address extension attribute for the Universal encoding of
 * `physical-delivery-office-number` (ITU-T X.402 (1999), §18.3.15; X.411 (1999), Annex A).
 * Printable, Teletex and Universal encodings of the same value are equivalent for
 * comparison (X.402 §18.4). Universal language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-office-number EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOfficeNumber
 *   IDENTIFIED BY  30 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeNumber>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeNumber>}
 */
export const universal_physical_delivery_office_number: EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeNumber> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOfficeNumber,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOfficeNumber,
    },
    "&id": 30 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
