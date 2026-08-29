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
import { id_med_device } from '../E-health-identification/id-med-device.va.mjs';
import {
    DeviceIdentification,
    _decode_DeviceIdentification,
    _encode_DeviceIdentification,
} from '../E-health-identification/DeviceIdentification.ta.mjs';
import { type IDENTIFICATION } from '../E-health-identification/IDENTIFICATION.oca.mjs';

/**
 * @summary deviceIdentification
 * @description
 *
 * `IDENTIFICATION` object for medical devices: category
 * `id-med-device`, identified with `DeviceIdentification`. ITU-T
 * X.1080.1 (05/2018) §8.9.
 * https://www.itu.int/rec/T-REC-X.1080.1-201805-I
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * deviceIdentification IDENTIFICATION ::= {
 *   CATEGORY        id-med-device
 *   IDENTIFIED WITH DeviceIdentification }
 * ```
 *
 * @constant
 * @type {IDENTIFICATION<DeviceIdentification>}
 * @implements {IDENTIFICATION<DeviceIdentification>}
 */
export const deviceIdentification: IDENTIFICATION<DeviceIdentification> = {
    class: 'IDENTIFICATION',
    decoderFor: {
        '&Identification': _decode_DeviceIdentification,
    },
    encoderFor: {
        '&Identification': _encode_DeviceIdentification,
    },
    '&category': id_med_device /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Identification': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
