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

/* START_OF_SYMBOL_DEFINITION Reach */
/**
 * @summary Reach
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Reach  ::=  INTEGER
 * ```
 */
export type Reach = INTEGER;
/* END_OF_SYMBOL_DEFINITION Reach */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Reach */
let _cached_decoder_for_Reach: $.ASN1Decoder<Reach> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Reach */

/* START_OF_SYMBOL_DEFINITION _decode_Reach */
/**
 * @summary Decodes an ASN.1 element into a(n) Reach
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Reach} The decoded data structure.
 */
export function _decode_Reach(el: _Element) {
    if (!_cached_decoder_for_Reach) {
        _cached_decoder_for_Reach = $._decodeInteger;
    }
    return _cached_decoder_for_Reach(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Reach */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Reach */
let _cached_encoder_for_Reach: $.ASN1Encoder<Reach> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Reach */

/* START_OF_SYMBOL_DEFINITION _encode_Reach */
/**
 * @summary Encodes a(n) Reach into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Reach, encoded as an ASN.1 Element.
 */
export function _encode_Reach(value: Reach, elGetter: $.ASN1Encoder<Reach>) {
    if (!_cached_encoder_for_Reach) {
        _cached_encoder_for_Reach = $._encodeInteger;
    }
    return _cached_encoder_for_Reach(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Reach */

/* eslint-enable */
