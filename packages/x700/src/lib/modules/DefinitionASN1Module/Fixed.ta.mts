/* eslint-disable */
import {
    BOOLEAN,
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

/* START_OF_SYMBOL_DEFINITION Fixed */
/**
 * @summary Fixed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Fixed  ::=  BOOLEAN
 * ```
 */
export type Fixed = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION Fixed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Fixed */
let _cached_decoder_for_Fixed: $.ASN1Decoder<Fixed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Fixed */

/* START_OF_SYMBOL_DEFINITION _decode_Fixed */
/**
 * @summary Decodes an ASN.1 element into a(n) Fixed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Fixed} The decoded data structure.
 */
export function _decode_Fixed(el: _Element) {
    if (!_cached_decoder_for_Fixed) {
        _cached_decoder_for_Fixed = $._decodeBoolean;
    }
    return _cached_decoder_for_Fixed(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Fixed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Fixed */
let _cached_encoder_for_Fixed: $.ASN1Encoder<Fixed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Fixed */

/* START_OF_SYMBOL_DEFINITION _encode_Fixed */
/**
 * @summary Encodes a(n) Fixed into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Fixed, encoded as an ASN.1 Element.
 */
export function _encode_Fixed(value: Fixed, elGetter: $.ASN1Encoder<Fixed>) {
    if (!_cached_encoder_for_Fixed) {
        _cached_encoder_for_Fixed = $._encodeBoolean;
    }
    return _cached_encoder_for_Fixed(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Fixed */

/* eslint-enable */
