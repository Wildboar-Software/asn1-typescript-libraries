/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalPhysicalDeliveryPersonalName,
    _decode_UniversalPhysicalDeliveryPersonalName,
    _encode_UniversalPhysicalDeliveryPersonalName,
} from "../PkiPmiExternalDataTypes/UniversalPhysicalDeliveryPersonalName.ta.mjs";
/**
 * @summary universal_physical_delivery_personal_name
 * @description
 *
 * OR-address extension attribute for the Universal encoding of
 * `physical-delivery-personal-name` (ITU-T X.402 (1999), §18.3.17; X.411 (1999), Annex A).
 * Printable, Teletex and Universal encodings of the same value are equivalent for
 * comparison (X.402 §18.4). Universal language codes are ignored.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  UniversalPhysicalDeliveryPersonalName
 *   IDENTIFIED BY  32 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryPersonalName>}
 */
export const universal_physical_delivery_personal_name: EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryPersonalName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalPhysicalDeliveryPersonalName,
    },
    encoderFor: {
        "&Type": _encode_UniversalPhysicalDeliveryPersonalName,
    },
    "&id": 32 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
