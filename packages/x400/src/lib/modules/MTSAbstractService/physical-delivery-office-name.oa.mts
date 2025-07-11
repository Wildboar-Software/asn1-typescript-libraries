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
    PhysicalDeliveryOfficeName,
    _decode_PhysicalDeliveryOfficeName,
    _encode_PhysicalDeliveryOfficeName,
} from '../MTSAbstractService/PhysicalDeliveryOfficeName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary physical_delivery_office_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *   PhysicalDeliveryOfficeName
 *   IDENTIFIED BY  10
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeName>}
 * @implements {EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeName>}
 */
export const physical_delivery_office_name: EXTENSION_ATTRIBUTE<PhysicalDeliveryOfficeName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_PhysicalDeliveryOfficeName,
    },
    encoderFor: {
        '&Type': _encode_PhysicalDeliveryOfficeName,
    },
    '&id': 10 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
