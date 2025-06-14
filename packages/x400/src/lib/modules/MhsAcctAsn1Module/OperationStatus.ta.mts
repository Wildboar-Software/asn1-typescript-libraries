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

/* START_OF_SYMBOL_DEFINITION OperationStatus */
/**
 * @summary OperationStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OperationStatus  ::=  INTEGER {in-progress(0), ok(1), error(2)}
 * ```
 */
export type OperationStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION OperationStatus */

/* START_OF_SYMBOL_DEFINITION OperationStatus_in_progress */
/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const OperationStatus_in_progress: OperationStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationStatus_in_progress */

/* START_OF_SYMBOL_DEFINITION in_progress */
/**
 * @summary OperationStatus_in_progress
 * @constant
 * @type {number}
 */
export const in_progress: OperationStatus = OperationStatus_in_progress; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION in_progress */

/* START_OF_SYMBOL_DEFINITION OperationStatus_ok */
/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const OperationStatus_ok: OperationStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationStatus_ok */

/* START_OF_SYMBOL_DEFINITION ok */
/**
 * @summary OperationStatus_ok
 * @constant
 * @type {number}
 */
export const ok: OperationStatus = OperationStatus_ok; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ok */

/* START_OF_SYMBOL_DEFINITION OperationStatus_error */
/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const OperationStatus_error: OperationStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION OperationStatus_error */

/* START_OF_SYMBOL_DEFINITION error */
/**
 * @summary OperationStatus_error
 * @constant
 * @type {number}
 */
export const error: OperationStatus = OperationStatus_error; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION error */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationStatus */
let _cached_decoder_for_OperationStatus: $.ASN1Decoder<OperationStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OperationStatus */

/* START_OF_SYMBOL_DEFINITION _decode_OperationStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) OperationStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OperationStatus} The decoded data structure.
 */
export function _decode_OperationStatus(el: _Element) {
    if (!_cached_decoder_for_OperationStatus) {
        _cached_decoder_for_OperationStatus = $._decodeInteger;
    }
    return _cached_decoder_for_OperationStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OperationStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationStatus */
let _cached_encoder_for_OperationStatus: $.ASN1Encoder<OperationStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OperationStatus */

/* START_OF_SYMBOL_DEFINITION _encode_OperationStatus */
/**
 * @summary Encodes a(n) OperationStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OperationStatus, encoded as an ASN.1 Element.
 */
export function _encode_OperationStatus(
    value: OperationStatus,
    elGetter: $.ASN1Encoder<OperationStatus>
) {
    if (!_cached_encoder_for_OperationStatus) {
        _cached_encoder_for_OperationStatus = $._encodeInteger;
    }
    return _cached_encoder_for_OperationStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OperationStatus */

/* eslint-enable */
