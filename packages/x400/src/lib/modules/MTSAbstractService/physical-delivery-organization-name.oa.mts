/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    PhysicalDeliveryOrganizationName,
    _decode_PhysicalDeliveryOrganizationName,
    _encode_PhysicalDeliveryOrganizationName,
} from '../MTSAbstractService/PhysicalDeliveryOrganizationName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary physical_delivery_organization_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-organization-name EXTENSION-ATTRIBUTE ::= {
 *   PhysicalDeliveryOrganizationName
 *   IDENTIFIED BY  14
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryOrganizationName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryOrganizationName>}
 */
export const physical_delivery_organization_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryOrganizationName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PhysicalDeliveryOrganizationName,
    },
    encoderFor: {
        '&Type': _encode_PhysicalDeliveryOrganizationName,
    },
    '&id': 14 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
