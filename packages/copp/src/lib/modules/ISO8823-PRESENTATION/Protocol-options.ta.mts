/* eslint-disable */
import {
    BIT_STRING,
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

/* START_OF_SYMBOL_DEFINITION Protocol_options */
/**
 * @summary Protocol_options
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Protocol-options  ::=  BIT STRING {
 *   nominated-context(0), short-encoding(1), packed-encoding-rules(2)}
 * ```
 */
export type Protocol_options = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION Protocol_options */

/* START_OF_SYMBOL_DEFINITION Protocol_options_nominated_context */
/**
 * @summary Protocol_options_nominated_context
 * @constant
 */
export const Protocol_options_nominated_context: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_options_nominated_context */

/* START_OF_SYMBOL_DEFINITION nominated_context */
/**
 * @summary nominated_context
 * @constant
 */
export const nominated_context: number = Protocol_options_nominated_context; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION nominated_context */

/* START_OF_SYMBOL_DEFINITION Protocol_options_short_encoding */
/**
 * @summary Protocol_options_short_encoding
 * @constant
 */
export const Protocol_options_short_encoding: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_options_short_encoding */

/* START_OF_SYMBOL_DEFINITION short_encoding */
/**
 * @summary short_encoding
 * @constant
 */
export const short_encoding: number = Protocol_options_short_encoding; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION short_encoding */

/* START_OF_SYMBOL_DEFINITION Protocol_options_packed_encoding_rules */
/**
 * @summary Protocol_options_packed_encoding_rules
 * @constant
 */
export const Protocol_options_packed_encoding_rules: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION Protocol_options_packed_encoding_rules */

/* START_OF_SYMBOL_DEFINITION packed_encoding_rules */
/**
 * @summary packed_encoding_rules
 * @constant
 */
export const packed_encoding_rules: number = Protocol_options_packed_encoding_rules; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION packed_encoding_rules */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_options */
let _cached_decoder_for_Protocol_options: $.ASN1Decoder<Protocol_options> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Protocol_options */

/* START_OF_SYMBOL_DEFINITION _decode_Protocol_options */
/**
 * @summary Decodes an ASN.1 element into a(n) Protocol_options
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Protocol_options} The decoded data structure.
 */
export function _decode_Protocol_options(el: _Element) {
    if (!_cached_decoder_for_Protocol_options) {
        _cached_decoder_for_Protocol_options = $._decodeBitString;
    }
    return _cached_decoder_for_Protocol_options(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Protocol_options */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_options */
let _cached_encoder_for_Protocol_options: $.ASN1Encoder<Protocol_options> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Protocol_options */

/* START_OF_SYMBOL_DEFINITION _encode_Protocol_options */
/**
 * @summary Encodes a(n) Protocol_options into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Protocol_options, encoded as an ASN.1 Element.
 */
export function _encode_Protocol_options(
    value: Protocol_options,
    elGetter: $.ASN1Encoder<Protocol_options>
) {
    if (!_cached_encoder_for_Protocol_options) {
        _cached_encoder_for_Protocol_options = $._encodeBitString;
    }
    return _cached_encoder_for_Protocol_options(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Protocol_options */

/* eslint-enable */
