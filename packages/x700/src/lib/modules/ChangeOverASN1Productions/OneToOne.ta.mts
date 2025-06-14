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

/* START_OF_SYMBOL_DEFINITION OneToOne */
/**
 * @summary OneToOne
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * OneToOne  ::=  INTEGER(1..1)
 * ```
 */
export type OneToOne = INTEGER;
/* END_OF_SYMBOL_DEFINITION OneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_OneToOne */
let _cached_decoder_for_OneToOne: $.ASN1Decoder<OneToOne> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_OneToOne */

/* START_OF_SYMBOL_DEFINITION _decode_OneToOne */
/**
 * @summary Decodes an ASN.1 element into a(n) OneToOne
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {OneToOne} The decoded data structure.
 */
export function _decode_OneToOne(el: _Element) {
    if (!_cached_decoder_for_OneToOne) {
        _cached_decoder_for_OneToOne = $._decodeInteger;
    }
    return _cached_decoder_for_OneToOne(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_OneToOne */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_OneToOne */
let _cached_encoder_for_OneToOne: $.ASN1Encoder<OneToOne> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_OneToOne */

/* START_OF_SYMBOL_DEFINITION _encode_OneToOne */
/**
 * @summary Encodes a(n) OneToOne into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OneToOne, encoded as an ASN.1 Element.
 */
export function _encode_OneToOne(
    value: OneToOne,
    elGetter: $.ASN1Encoder<OneToOne>
) {
    if (!_cached_encoder_for_OneToOne) {
        _cached_encoder_for_OneToOne = $._encodeInteger;
    }
    return _cached_encoder_for_OneToOne(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_OneToOne */

/* eslint-enable */
