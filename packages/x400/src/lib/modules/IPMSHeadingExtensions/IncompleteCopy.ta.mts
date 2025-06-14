/* eslint-disable */
import {
    NULL,
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

/* START_OF_SYMBOL_DEFINITION IncompleteCopy */
/**
 * @summary IncompleteCopy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * IncompleteCopy  ::=  NULL
 * ```
 */
export type IncompleteCopy = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION IncompleteCopy */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteCopy */
let _cached_decoder_for_IncompleteCopy: $.ASN1Decoder<IncompleteCopy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_IncompleteCopy */

/* START_OF_SYMBOL_DEFINITION _decode_IncompleteCopy */
/**
 * @summary Decodes an ASN.1 element into a(n) IncompleteCopy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {IncompleteCopy} The decoded data structure.
 */
export function _decode_IncompleteCopy(el: _Element) {
    if (!_cached_decoder_for_IncompleteCopy) {
        _cached_decoder_for_IncompleteCopy = $._decodeNull;
    }
    return _cached_decoder_for_IncompleteCopy(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_IncompleteCopy */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteCopy */
let _cached_encoder_for_IncompleteCopy: $.ASN1Encoder<IncompleteCopy> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_IncompleteCopy */

/* START_OF_SYMBOL_DEFINITION _encode_IncompleteCopy */
/**
 * @summary Encodes a(n) IncompleteCopy into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IncompleteCopy, encoded as an ASN.1 Element.
 */
export function _encode_IncompleteCopy(
    value: IncompleteCopy,
    elGetter: $.ASN1Encoder<IncompleteCopy>
) {
    if (!_cached_encoder_for_IncompleteCopy) {
        _cached_encoder_for_IncompleteCopy = $._encodeNull;
    }
    return _cached_encoder_for_IncompleteCopy(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_IncompleteCopy */

/* eslint-enable */
