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

/* START_OF_SYMBOL_DEFINITION Lifetime */
/**
 * @summary Lifetime
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Lifetime  ::=  INTEGER(1..255)
 * ```
 */
export type Lifetime = INTEGER;
/* END_OF_SYMBOL_DEFINITION Lifetime */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Lifetime */
let _cached_decoder_for_Lifetime: $.ASN1Decoder<Lifetime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Lifetime */

/* START_OF_SYMBOL_DEFINITION _decode_Lifetime */
/**
 * @summary Decodes an ASN.1 element into a(n) Lifetime
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Lifetime} The decoded data structure.
 */
export function _decode_Lifetime(el: _Element) {
    if (!_cached_decoder_for_Lifetime) {
        _cached_decoder_for_Lifetime = $._decodeInteger;
    }
    return _cached_decoder_for_Lifetime(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Lifetime */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Lifetime */
let _cached_encoder_for_Lifetime: $.ASN1Encoder<Lifetime> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Lifetime */

/* START_OF_SYMBOL_DEFINITION _encode_Lifetime */
/**
 * @summary Encodes a(n) Lifetime into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Lifetime, encoded as an ASN.1 Element.
 */
export function _encode_Lifetime(
    value: Lifetime,
    elGetter: $.ASN1Encoder<Lifetime>
) {
    if (!_cached_encoder_for_Lifetime) {
        _cached_encoder_for_Lifetime = $._encodeInteger;
    }
    return _cached_encoder_for_Lifetime(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Lifetime */

/* eslint-enable */
