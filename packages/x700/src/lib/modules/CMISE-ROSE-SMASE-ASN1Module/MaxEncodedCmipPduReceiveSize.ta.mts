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

/* START_OF_SYMBOL_DEFINITION MaxEncodedCmipPduReceiveSize */
/**
 * @summary MaxEncodedCmipPduReceiveSize
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MaxEncodedCmipPduReceiveSize  ::=  INTEGER(0..MAX)
 * ```
 */
export type MaxEncodedCmipPduReceiveSize = INTEGER;
/* END_OF_SYMBOL_DEFINITION MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxEncodedCmipPduReceiveSize */
let _cached_decoder_for_MaxEncodedCmipPduReceiveSize: $.ASN1Decoder<MaxEncodedCmipPduReceiveSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _decode_MaxEncodedCmipPduReceiveSize */
/**
 * @summary Decodes an ASN.1 element into a(n) MaxEncodedCmipPduReceiveSize
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MaxEncodedCmipPduReceiveSize} The decoded data structure.
 */
export function _decode_MaxEncodedCmipPduReceiveSize(el: _Element) {
    if (!_cached_decoder_for_MaxEncodedCmipPduReceiveSize) {
        _cached_decoder_for_MaxEncodedCmipPduReceiveSize = $._decodeInteger;
    }
    return _cached_decoder_for_MaxEncodedCmipPduReceiveSize(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxEncodedCmipPduReceiveSize */
let _cached_encoder_for_MaxEncodedCmipPduReceiveSize: $.ASN1Encoder<MaxEncodedCmipPduReceiveSize> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MaxEncodedCmipPduReceiveSize */

/* START_OF_SYMBOL_DEFINITION _encode_MaxEncodedCmipPduReceiveSize */
/**
 * @summary Encodes a(n) MaxEncodedCmipPduReceiveSize into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaxEncodedCmipPduReceiveSize, encoded as an ASN.1 Element.
 */
export function _encode_MaxEncodedCmipPduReceiveSize(
    value: MaxEncodedCmipPduReceiveSize,
    elGetter: $.ASN1Encoder<MaxEncodedCmipPduReceiveSize>
) {
    if (!_cached_encoder_for_MaxEncodedCmipPduReceiveSize) {
        _cached_encoder_for_MaxEncodedCmipPduReceiveSize = $._encodeInteger;
    }
    return _cached_encoder_for_MaxEncodedCmipPduReceiveSize(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MaxEncodedCmipPduReceiveSize */

/* eslint-enable */
