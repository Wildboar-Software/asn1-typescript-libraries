/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalPhysicalDeliveryOfficeName,
    _decode_UniversalPhysicalDeliveryOfficeName,
    _encode_UniversalPhysicalDeliveryOfficeName,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryOfficeName.ta.mjs";
/**
 * @summary universal_physical_delivery_office_name
 * @description
 *
 * OR-address extension attribute for the Universal encoding of
 * `physical-delivery-office-name` (ITU-T X.402 (1999), §18.3.14; X.411 (1999), Annex A).
 * Printable, Teletex and Universal encodings of the same value are equivalent for
 * comparison (X.402 §18.4). Universal language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryOfficeName
 *   IDENTIFIED BY  29 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeName>}
 */
export const universal_physical_delivery_office_name: EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryOfficeName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryOfficeName,
    },
    "&id": 29 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
