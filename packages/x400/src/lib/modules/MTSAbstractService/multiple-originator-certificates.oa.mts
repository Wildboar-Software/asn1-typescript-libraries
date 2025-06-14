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
    _decode_ExtensionType,
    _encode_ExtensionType,
} from '../MTSAbstractService/ExtensionType.ta.mjs';
import {
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ExtendedCertificates,
    _decode_ExtendedCertificates,
    _encode_ExtendedCertificates,
} from '../MTSAbstractService/ExtendedCertificates.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/* START_OF_SYMBOL_DEFINITION multiple_originator_certificates */
/**
 * @summary multiple_originator_certificates
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * multiple-originator-certificates EXTENSION ::= {
 *   ExtendedCertificates,
 *   IDENTIFIED BY  standard-extension:40
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ExtendedCertificates>}
 * @implements {EXTENSION<ExtendedCertificates>}
 */
export const multiple_originator_certificates: EXTENSION<ExtendedCertificates> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ExtendedCertificates,
    },
    encoderFor: {
        '&Type': _encode_ExtendedCertificates,
    },
    '&id': {
        standard_extension: 40,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};
/* END_OF_SYMBOL_DEFINITION multiple_originator_certificates */

/* eslint-enable */
