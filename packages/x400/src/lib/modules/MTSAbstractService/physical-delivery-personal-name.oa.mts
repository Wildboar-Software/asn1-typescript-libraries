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
    PhysicalDeliveryPersonalName,
    _decode_PhysicalDeliveryPersonalName,
    _encode_PhysicalDeliveryPersonalName,
} from '../MTSAbstractService/PhysicalDeliveryPersonalName.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary physical_delivery_personal_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-personal-name EXTENSION-ATTRIBUTE ::= {
 *   PhysicalDeliveryPersonalName
 *   IDENTIFIED BY  13
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryPersonalName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryPersonalName>}
 */
export const physical_delivery_personal_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryPersonalName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PhysicalDeliveryPersonalName,
    },
    encoderFor: {
        '&Type': _encode_PhysicalDeliveryPersonalName,
    },
    '&id': 13 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
