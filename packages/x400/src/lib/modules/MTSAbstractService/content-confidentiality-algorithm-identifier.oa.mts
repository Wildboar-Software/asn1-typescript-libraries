/* eslint-disable */
import {
    TRUE_BIT,
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
    Criticality_for_delivery /* IMPORTED_LONG_NAMED_BIT */,
    _decode_Criticality,
    _encode_Criticality,
} from '../MTSAbstractService/Criticality.ta.mjs';
import {
    ContentConfidentialityAlgorithmIdentifier,
    _decode_ContentConfidentialityAlgorithmIdentifier,
    _encode_ContentConfidentialityAlgorithmIdentifier,
} from '../MTSAbstractService/ContentConfidentialityAlgorithmIdentifier.ta.mjs';
import { type EXTENSION } from '../MTSAbstractService/EXTENSION.oca.mjs';
/**
 * @summary content_confidentiality_algorithm_identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * content-confidentiality-algorithm-identifier EXTENSION ::= {
 *   ContentConfidentialityAlgorithmIdentifier,
 *   RECOMMENDED CRITICALITY  {for-delivery},
 *   IDENTIFIED BY            standard-extension:17
 * }
 * ```
 *
 * @constant
 * @type {EXTENSION<ContentConfidentialityAlgorithmIdentifier>}
 * @implements {EXTENSION<ContentConfidentialityAlgorithmIdentifier>}
 */
export const content_confidentiality_algorithm_identifier: EXTENSION<ContentConfidentialityAlgorithmIdentifier> = {
    class: 'EXTENSION',
    decoderFor: {
        '&Type': _decode_ContentConfidentialityAlgorithmIdentifier,
    },
    encoderFor: {
        '&Type': _encode_ContentConfidentialityAlgorithmIdentifier,
    },
    '&recommended': (() => {
        const _ret = new Uint8ClampedArray(3);
        _ret[Criticality_for_delivery] = TRUE_BIT;
        return _ret;
    })() /* OBJECT_FIELD_SETTING */,
    '&id': {
        standard_extension: 17,
    } /* OBJECT_FIELD_SETTING */ /* UNIQUE_OBJECT_FIELD_SETTING */,
    '&Type': 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};

/* eslint-enable */
