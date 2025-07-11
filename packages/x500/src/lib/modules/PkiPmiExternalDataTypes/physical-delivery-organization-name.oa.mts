/* eslint-disable */
import { type EXTENSION_ATTRIBUTE } from "../PkiPmiExternalDataTypes/EXTENSION-ATTRIBUTE.oca.mjs";
import {
    PhysicalDeliveryOrganizationName,
    _decode_PhysicalDeliveryOrganizationName,
    _encode_PhysicalDeliveryOrganizationName,
} from "../PkiPmiExternalDataTypes/PhysicalDeliveryOrganizationName.ta.mjs";
/**
 * @summary physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {
 *                  PhysicalDeliveryOrganizationName
 *   IDENTIFIED BY  14 }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryOrganizationName>}
 */
export const physical_delivery_organization_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryOrganizationName> = {
    class: "EXTENSION-ATTRIBUTE",
    decoderFor: {
        "&Type": _decode_PhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        "&Type": _encode_PhysicalDeliveryOrganizationName,
    },
    "&id": 14 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    "&Type": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
