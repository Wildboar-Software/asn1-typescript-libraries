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
    UniversalPhysicalDeliveryOfficeName,
    _decode_UniversalPhysicalDeliveryOfficeName,
    _encode_UniversalPhysicalDeliveryOfficeName,
} from '../MTSAbstractService/UniversalPhysicalDeliveryOfficeName.ta.mjs';
import { type EXTENSION_ATTRIBUTE } from '../MTSAbstractService/EXTENSION-ATTRIBUTE.oca.mjs';
/**
 * @summary universal_physical_delivery_office_name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * universal-physical-delivery-office-name EXTENSION-ATTRIBUTE ::= {
 *   UniversalPhysicalDeliveryOfficeName
 *   IDENTIFIED BY  29
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeName>}
 * @implements {EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeName>}
 */
export const universal_physical_delivery_office_name: EXTENSION_ATTRIBUTE<UniversalPhysicalDeliveryOfficeName> = {
    class: 'EXTENSION-ATTRIBUTE',
    decoderFor: {
        '&Type': _decode_UniversalPhysicalDeliveryOfficeName,
    },
    encoderFor: {
        '&Type': _encode_UniversalPhysicalDeliveryOfficeName,
    },
    '&id': 29 /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
