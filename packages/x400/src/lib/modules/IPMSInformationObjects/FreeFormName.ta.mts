/* eslint-disable */
import {
    TeletexString,
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

/* START_OF_SYMBOL_DEFINITION FreeFormName */
/**
 * @summary FreeFormName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FreeFormName  ::=  TeletexString(SIZE (0..ub-free-form-name))
 * ```
 */
export type FreeFormName = TeletexString; // TeletexString
/* END_OF_SYMBOL_DEFINITION FreeFormName */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_FreeFormName */
let _cached_decoder_for_FreeFormName: $.ASN1Decoder<FreeFormName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_FreeFormName */

/* START_OF_SYMBOL_DEFINITION _decode_FreeFormName */
/**
 * @summary Decodes an ASN.1 element into a(n) FreeFormName
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {FreeFormName} The decoded data structure.
 */
export function _decode_FreeFormName(el: _Element) {
    if (!_cached_decoder_for_FreeFormName) {
        _cached_decoder_for_FreeFormName = $._decodeTeletexString;
    }
    return _cached_decoder_for_FreeFormName(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_FreeFormName */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_FreeFormName */
let _cached_encoder_for_FreeFormName: $.ASN1Encoder<FreeFormName> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_FreeFormName */

/* START_OF_SYMBOL_DEFINITION _encode_FreeFormName */
/**
 * @summary Encodes a(n) FreeFormName into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FreeFormName, encoded as an ASN.1 Element.
 */
export function _encode_FreeFormName(
    value: FreeFormName,
    elGetter: $.ASN1Encoder<FreeFormName>
) {
    if (!_cached_encoder_for_FreeFormName) {
        _cached_encoder_for_FreeFormName = $._encodeTeletexString;
    }
    return _cached_encoder_for_FreeFormName(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_FreeFormName */

/* eslint-enable */
