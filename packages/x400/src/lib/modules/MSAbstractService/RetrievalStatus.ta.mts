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

/* START_OF_SYMBOL_DEFINITION RetrievalStatus */
/**
 * @summary RetrievalStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * RetrievalStatus  ::=  INTEGER {new(0), listed(1), processed(2)}
 * ```
 */
export type RetrievalStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION RetrievalStatus */

/* START_OF_SYMBOL_DEFINITION RetrievalStatus_new_ */
/**
 * @summary RetrievalStatus_new_
 * @constant
 * @type {number}
 */
export const RetrievalStatus_new_: RetrievalStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalStatus_new_ */

/* START_OF_SYMBOL_DEFINITION new_ */
/**
 * @summary RetrievalStatus_new_
 * @constant
 * @type {number}
 */
export const new_: RetrievalStatus = RetrievalStatus_new_; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION new_ */

/* START_OF_SYMBOL_DEFINITION RetrievalStatus_listed */
/**
 * @summary RetrievalStatus_listed
 * @constant
 * @type {number}
 */
export const RetrievalStatus_listed: RetrievalStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalStatus_listed */

/* START_OF_SYMBOL_DEFINITION listed */
/**
 * @summary RetrievalStatus_listed
 * @constant
 * @type {number}
 */
export const listed: RetrievalStatus = RetrievalStatus_listed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION listed */

/* START_OF_SYMBOL_DEFINITION RetrievalStatus_processed */
/**
 * @summary RetrievalStatus_processed
 * @constant
 * @type {number}
 */
export const RetrievalStatus_processed: RetrievalStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION RetrievalStatus_processed */

/* START_OF_SYMBOL_DEFINITION processed */
/**
 * @summary RetrievalStatus_processed
 * @constant
 * @type {number}
 */
export const processed: RetrievalStatus = RetrievalStatus_processed; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION processed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalStatus */
let _cached_decoder_for_RetrievalStatus: $.ASN1Decoder<RetrievalStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_RetrievalStatus */

/* START_OF_SYMBOL_DEFINITION _decode_RetrievalStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) RetrievalStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {RetrievalStatus} The decoded data structure.
 */
export function _decode_RetrievalStatus(el: _Element) {
    if (!_cached_decoder_for_RetrievalStatus) {
        _cached_decoder_for_RetrievalStatus = $._decodeInteger;
    }
    return _cached_decoder_for_RetrievalStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_RetrievalStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalStatus */
let _cached_encoder_for_RetrievalStatus: $.ASN1Encoder<RetrievalStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_RetrievalStatus */

/* START_OF_SYMBOL_DEFINITION _encode_RetrievalStatus */
/**
 * @summary Encodes a(n) RetrievalStatus into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RetrievalStatus, encoded as an ASN.1 Element.
 */
export function _encode_RetrievalStatus(
    value: RetrievalStatus,
    elGetter: $.ASN1Encoder<RetrievalStatus>
) {
    if (!_cached_encoder_for_RetrievalStatus) {
        _cached_encoder_for_RetrievalStatus = $._encodeInteger;
    }
    return _cached_encoder_for_RetrievalStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_RetrievalStatus */

/* eslint-enable */
