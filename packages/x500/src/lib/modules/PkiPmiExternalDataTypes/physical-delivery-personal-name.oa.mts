/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PhysicalDeliveryPersonalName,
    _decode_PhysicalDeliveryPersonalName,
    _encode_PhysicalDeliveryPersonalName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryPersonalName.ta.mjs";
/**
 * @summary physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryPersonalName
 *   IDENTIFIED BY  13 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryPersonalName>}
 */
export const physical_delivery_personal_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryPersonalName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryPersonalName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryPersonalName,
    },
    "&id": 13 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
