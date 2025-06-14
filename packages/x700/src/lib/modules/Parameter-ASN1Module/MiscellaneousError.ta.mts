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

/* START_OF_SYMBOL_DEFINITION MiscellaneousError */
/**
 * @summary MiscellaneousError
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MiscellaneousError  ::=  NULL
 * ```
 */
export type MiscellaneousError = NULL; // NullType
/* END_OF_SYMBOL_DEFINITION MiscellaneousError */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_MiscellaneousError */
let _cached_decoder_for_MiscellaneousError: $.ASN1Decoder<MiscellaneousError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_MiscellaneousError */

/* START_OF_SYMBOL_DEFINITION _decode_MiscellaneousError */
/**
 * @summary Decodes an ASN.1 element into a(n) MiscellaneousError
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {MiscellaneousError} The decoded data structure.
 */
export function _decode_MiscellaneousError(el: _Element) {
    if (!_cached_decoder_for_MiscellaneousError) {
        _cached_decoder_for_MiscellaneousError = $._decodeNull;
    }
    return _cached_decoder_for_MiscellaneousError(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_MiscellaneousError */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_MiscellaneousError */
let _cached_encoder_for_MiscellaneousError: $.ASN1Encoder<MiscellaneousError> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_MiscellaneousError */

/* START_OF_SYMBOL_DEFINITION _encode_MiscellaneousError */
/**
 * @summary Encodes a(n) MiscellaneousError into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MiscellaneousError, encoded as an ASN.1 Element.
 */
export function _encode_MiscellaneousError(
    value: MiscellaneousError,
    elGetter: $.ASN1Encoder<MiscellaneousError>
) {
    if (!_cached_encoder_for_MiscellaneousError) {
        _cached_encoder_for_MiscellaneousError = $._encodeNull;
    }
    return _cached_encoder_for_MiscellaneousError(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_MiscellaneousError */

/* eslint-enable */
