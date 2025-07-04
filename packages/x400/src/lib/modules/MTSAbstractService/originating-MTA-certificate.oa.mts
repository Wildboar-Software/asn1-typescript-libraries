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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    OriginatingMTACertificate,
    _decode_OriginatingMTACertificate,
    _encode_OriginatingMTACertificate,
} from '../MTSAbstractService/OriginatingMTACertificate.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary originating_MTA_certificate
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * originating-MTA-certificate EXTENSION ::= {
 *   OriginatingMTACertificate,
 *   IDENTIFIED BY  standard-extension:34
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<OriginatingMTACertificate>}
 * @implements {EXTENSION<OriginatingMTACertificate>}
 */
export const originating_MTA_certificate: EXTENSION<OriginatingMTACertificate> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_OriginatingMTACertificate,
    },
    encoderFor: {
        '&Type': _encode_OriginatingMTACertificate,
    },
    '&id': {
        standard_extension: 34,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
