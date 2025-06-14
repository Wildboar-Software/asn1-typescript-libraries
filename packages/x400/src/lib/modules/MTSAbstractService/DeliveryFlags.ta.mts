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

/* START_OF_SYMBOL_DEFINITION DeliveryFlags */
/**
 * @summary DeliveryFlags
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DeliveryFlags  ::=  BIT STRING {
 *   implicit-conversion-prohibited(1) -- implicit-conversion-prohibited 'one',
 *
 *   -- implicit-conversion-allowed 'zero' --}(SIZE (0..ub-bit-options))
 * ```
 */
export type DeliveryFlags = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION DeliveryFlags */

/* START_OF_SYMBOL_DEFINITION DeliveryFlags_implicit_conversion_prohibited */
/**
 * @summary DeliveryFlags_implicit_conversion_prohibited
 * @constant
 */
export const DeliveryFlags_implicit_conversion_prohibited: number = 1; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION DeliveryFlags_implicit_conversion_prohibited */

/* START_OF_SYMBOL_DEFINITION implicit_conversion_prohibited */
/**
 * @summary implicit_conversion_prohibited
 * @constant
 */
export const implicit_conversion_prohibited: number = DeliveryFlags_implicit_conversion_prohibited; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION implicit_conversion_prohibited */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryFlags */
let _cached_decoder_for_DeliveryFlags: $.ASN1Decoder<DeliveryFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_DeliveryFlags */

/* START_OF_SYMBOL_DEFINITION _decode_DeliveryFlags */
/**
 * @summary Decodes an ASN.1 element into a(n) DeliveryFlags
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DeliveryFlags} The decoded data structure.
 */
export function _decode_DeliveryFlags(el: _Element) {
    if (!_cached_decoder_for_DeliveryFlags) {
        _cached_decoder_for_DeliveryFlags = $._decodeBitString;
    }
    return _cached_decoder_for_DeliveryFlags(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_DeliveryFlags */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryFlags */
let _cached_encoder_for_DeliveryFlags: $.ASN1Encoder<DeliveryFlags> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_DeliveryFlags */

/* START_OF_SYMBOL_DEFINITION _encode_DeliveryFlags */
/**
 * @summary Encodes a(n) DeliveryFlags into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeliveryFlags, encoded as an ASN.1 Element.
 */
export function _encode_DeliveryFlags(
    value: DeliveryFlags,
    elGetter: $.ASN1Encoder<DeliveryFlags>
) {
    if (!_cached_encoder_for_DeliveryFlags) {
        _cached_encoder_for_DeliveryFlags = $._encodeBitString;
    }
    return _cached_encoder_for_DeliveryFlags(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_DeliveryFlags */

/* eslint-enable */
