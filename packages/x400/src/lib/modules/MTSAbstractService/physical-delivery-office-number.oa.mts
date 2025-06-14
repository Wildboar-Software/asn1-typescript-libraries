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
} from 'asn1-ts';
import {
    PhysicalDeliveryOfficeNumber,
    _decode_PhysicalDeliveryOfficeNumber,
    _encode_PhysicalDeliveryOfficeNumber,
} from '../MTSAbstractService/PhysicalDeliveryOfficeNumber.ta.mjs';
import { EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/* START_OF_SYMBOL_DEFINITION physical_delivery_office_number */
/**
 * @summary physical_delivery_office_number
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-number EXTENSION-ATTRIBUTE ::= {
 *   PhysicalDeliveryOfficeNumber
 *   IDENTIFIED BY  11
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeNumber>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeNumber>}
 */
export const physical_delivery_office_number: EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeNumber> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PhysicalDeliveryOfficeNumber,
    },
    encoderFor: {
        '&Type': _encode_PhysicalDeliveryOfficeNumber,
    },
    '&id': 11 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION physical_delivery_office_number */

/* eslint-enable */
