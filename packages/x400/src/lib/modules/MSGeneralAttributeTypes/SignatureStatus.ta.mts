/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION SignatureStatus */
/**
 * @summary SignatureStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SignatureStatus  ::=  INTEGER {
 *   signature-absent(0), verification-in-progress(1), verification-succeeded(2),
 *   verification-not-possible(3), content-converted(4), signature-encrypted(5),
 *   algorithm-not-supported(6), certificate-not-obtainable(7),
 *   verification-failed(8)}
 * ```
 */
export type SignatureStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION SignatureStatus */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_signature_absent */
/**
 * @summary SignatureStatus_signature_absent
 * @constant
 * @type {number}
 */
export const SignatureStatus_signature_absent: SignatureStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_signature_absent */

/* START_OF_SYMBOL_DEFINITION signature_absent */
/**
 * @summary SignatureStatus_signature_absent
 * @constant
 * @type {number}
 */
export const signature_absent: SignatureStatus = SignatureStatus_signature_absent; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signature_absent */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_verification_in_progress */
/**
 * @summary SignatureStatus_verification_in_progress
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_in_progress: SignatureStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_verification_in_progress */

/* START_OF_SYMBOL_DEFINITION verification_in_progress */
/**
 * @summary SignatureStatus_verification_in_progress
 * @constant
 * @type {number}
 */
export const verification_in_progress: SignatureStatus = SignatureStatus_verification_in_progress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION verification_in_progress */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_verification_succeeded */
/**
 * @summary SignatureStatus_verification_succeeded
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_succeeded: SignatureStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_verification_succeeded */

/* START_OF_SYMBOL_DEFINITION verification_succeeded */
/**
 * @summary SignatureStatus_verification_succeeded
 * @constant
 * @type {number}
 */
export const verification_succeeded: SignatureStatus = SignatureStatus_verification_succeeded; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION verification_succeeded */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_verification_not_possible */
/**
 * @summary SignatureStatus_verification_not_possible
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_not_possible: SignatureStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_verification_not_possible */

/* START_OF_SYMBOL_DEFINITION verification_not_possible */
/**
 * @summary SignatureStatus_verification_not_possible
 * @constant
 * @type {number}
 */
export const verification_not_possible: SignatureStatus = SignatureStatus_verification_not_possible; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION verification_not_possible */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_content_converted */
/**
 * @summary SignatureStatus_content_converted
 * @constant
 * @type {number}
 */
export const SignatureStatus_content_converted: SignatureStatus = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_content_converted */

/* START_OF_SYMBOL_DEFINITION content_converted */
/**
 * @summary SignatureStatus_content_converted
 * @constant
 * @type {number}
 */
export const content_converted: SignatureStatus = SignatureStatus_content_converted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION content_converted */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_signature_encrypted */
/**
 * @summary SignatureStatus_signature_encrypted
 * @constant
 * @type {number}
 */
export const SignatureStatus_signature_encrypted: SignatureStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_signature_encrypted */

/* START_OF_SYMBOL_DEFINITION signature_encrypted */
/**
 * @summary SignatureStatus_signature_encrypted
 * @constant
 * @type {number}
 */
export const signature_encrypted: SignatureStatus = SignatureStatus_signature_encrypted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION signature_encrypted */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_algorithm_not_supported */
/**
 * @summary SignatureStatus_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const SignatureStatus_algorithm_not_supported: SignatureStatus = 6; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_algorithm_not_supported */

/* START_OF_SYMBOL_DEFINITION algorithm_not_supported */
/**
 * @summary SignatureStatus_algorithm_not_supported
 * @constant
 * @type {number}
 */
export const algorithm_not_supported: SignatureStatus = SignatureStatus_algorithm_not_supported; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION algorithm_not_supported */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_certificate_not_obtainable */
/**
 * @summary SignatureStatus_certificate_not_obtainable
 * @constant
 * @type {number}
 */
export const SignatureStatus_certificate_not_obtainable: SignatureStatus = 7; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_certificate_not_obtainable */

/* START_OF_SYMBOL_DEFINITION certificate_not_obtainable */
/**
 * @summary SignatureStatus_certificate_not_obtainable
 * @constant
 * @type {number}
 */
export const certificate_not_obtainable: SignatureStatus = SignatureStatus_certificate_not_obtainable; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION certificate_not_obtainable */

/* START_OF_SYMBOL_DEFINITION SignatureStatus_verification_failed */
/**
 * @summary SignatureStatus_verification_failed
 * @constant
 * @type {number}
 */
export const SignatureStatus_verification_failed: SignatureStatus = 8; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION SignatureStatus_verification_failed */

/* START_OF_SYMBOL_DEFINITION verification_failed */
/**
 * @summary SignatureStatus_verification_failed
 * @constant
 * @type {number}
 */
export const verification_failed: SignatureStatus = SignatureStatus_verification_failed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION verification_failed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureStatus */
let _cached_decoder_for_SignatureStatus: $.ASN1Decoder<SignatureStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SignatureStatus */

/* START_OF_SYMBOL_DEFINITION _decode_SignatureStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) SignatureStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SignatureStatus} The decoded data structure.
 */
export function _decode_SignatureStatus(el: _Element) {
    if (!_cached_decoder_for_SignatureStatus) {
        _cached_decoder_for_SignatureStatus = $._decodeInteger;
    }
    return _cached_decoder_for_SignatureStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SignatureStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureStatus */
let _cached_encoder_for_SignatureStatus: $.ASN1Encoder<SignatureStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SignatureStatus */

/* START_OF_SYMBOL_DEFINITION _encode_SignatureStatus */
/**
 * @summary Encodes a(n) SignatureStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SignatureStatus, encoded as an ASN.1 Element.
 */
export function _encode_SignatureStatus(
    value: SignatureStatus,
    elGetter: $.ASN1Encoder<SignatureStatus>
) {
    if (!_cached_encoder_for_SignatureStatus) {
        _cached_encoder_for_SignatureStatus = $._encodeInteger;
    }
    return _cached_encoder_for_SignatureStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SignatureStatus */

/* eslint-enable */
