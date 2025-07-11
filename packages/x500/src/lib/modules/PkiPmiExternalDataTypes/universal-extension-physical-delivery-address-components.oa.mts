/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    UniversalExtensionPhysicalDeliveryAddressComponents,
    _decode_UniversalExtensionPhysicalDeliveryAddressComponents,
    _encode_UniversalExtensionPhysicalDeliveryAddressComponents,
} from "../PkiPmiExternalDataTypes/UniversalExtensionPhysicalDeliveryAddressComponents.ta.mjs";
/**
 * @summary universal_extension_physical_delivery_address_components
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-extension-physical-delivery-address-components EXTENSION-ATTRIBUTE ::= {
 *                  UniversalExtensionPhysicalDeliveryAddressComponents
 *   IDENTIFIED BY  34 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalExtensionPhysicalDeliveryAddressComponents>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalExtensionPhysicalDeliveryAddressComponents>}
 */
export const universal_extension_physical_delivery_address_components: EXTENSION_ATTRIBUTE<UniversalExtensionPhysicalDeliveryAddressComponents> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_UniversalExtensionPhysicalDeliveryAddressComponents,
    },
    encoderFor: {
        "&Type": _encode_UniversalExtensionPhysicalDeliveryAddressComponents,
    },
    "&id": 34 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
