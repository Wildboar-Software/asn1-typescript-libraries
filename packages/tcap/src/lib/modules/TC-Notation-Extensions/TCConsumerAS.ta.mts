/* eslint-disable */
import {
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
import {
    TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta.mjs';
/* START_OF_SYMBOL_DEFINITION TCConsumerAS */
/**
 * @summary TCConsumerAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCConsumerAS{OPERATION-PACKAGE:package}  ::=
 *   TCMessage{{ConsumerPerforms  {package}}, {ConsumerPerforms  {package}}}
 * ```
 */
export type TCConsumerAS = TCMessage; // DefinedType
/* END_OF_SYMBOL_DEFINITION TCConsumerAS */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TCConsumerAS */
let _cached_decoder_for_TCConsumerAS: $.ASN1Decoder<TCConsumerAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TCConsumerAS */

/* START_OF_SYMBOL_DEFINITION _decode_TCConsumerAS */
/**
 * @summary Decodes an ASN.1 element into a(n) TCConsumerAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCConsumerAS} The decoded data structure.
 */
export function _decode_TCConsumerAS(el: _Element) {
    if (!_cached_decoder_for_TCConsumerAS) {
        _cached_decoder_for_TCConsumerAS = _decode_TCMessage;
    }
    return _cached_decoder_for_TCConsumerAS(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TCConsumerAS */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TCConsumerAS */
let _cached_encoder_for_TCConsumerAS: $.ASN1Encoder<TCConsumerAS> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TCConsumerAS */

/* START_OF_SYMBOL_DEFINITION _encode_TCConsumerAS */
/**
 * @summary Encodes a(n) TCConsumerAS into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCConsumerAS, encoded as an ASN.1 Element.
 */
export function _encode_TCConsumerAS(
    value: TCConsumerAS,
    elGetter: $.ASN1Encoder<TCConsumerAS>
) {
    if (!_cached_encoder_for_TCConsumerAS) {
        _cached_encoder_for_TCConsumerAS = _encode_TCMessage;
    }
    return _cached_encoder_for_TCConsumerAS(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TCConsumerAS */

/* eslint-enable */
