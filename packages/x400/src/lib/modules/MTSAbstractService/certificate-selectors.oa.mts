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
    CertificateSelectors,
    _decode_CertificateSelectors,
    _encode_CertificateSelectors,
} from '../MTSAbstractService/CertificateSelectors.ta.mjs';
import { EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary certificate_selectors
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * certificate-selectors EXTENSION ::= {
 *   CertificateSelectors,
 *   IDENTIFIED BY  standard-extension:45
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<CertificateSelectors>}
 * @implements {EXTENSION<CertificateSelectors>}
 */
export const certificate_selectors: EXTENSION<CertificateSelectors> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_CertificateSelectors,
    },
    encoderFor: {
        '&Type': _encode_CertificateSelectors,
    },
    '&id': {
        standard_extension: 45,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    '&recommended': new Uint8ClampedArray(
        []
    ) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
