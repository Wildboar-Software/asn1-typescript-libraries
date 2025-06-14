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

/* START_OF_SYMBOL_DEFINITION ModeConfirmed */
/**
 * @summary ModeConfirmed
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ModeConfirmed  ::=  BOOLEAN
 * ```
 */
export type ModeConfirmed = BOOLEAN; // BooleanType
/* END_OF_SYMBOL_DEFINITION ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ModeConfirmed */
let _cached_decoder_for_ModeConfirmed: $.ASN1Decoder<ModeConfirmed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _decode_ModeConfirmed */
/**
 * @summary Decodes an ASN.1 element into a(n) ModeConfirmed
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ModeConfirmed} The decoded data structure.
 */
export function _decode_ModeConfirmed(el: _Element) {
    if (!_cached_decoder_for_ModeConfirmed) {
        _cached_decoder_for_ModeConfirmed = $._decodeBoolean;
    }
    return _cached_decoder_for_ModeConfirmed(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ModeConfirmed */
let _cached_encoder_for_ModeConfirmed: $.ASN1Encoder<ModeConfirmed> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ModeConfirmed */

/* START_OF_SYMBOL_DEFINITION _encode_ModeConfirmed */
/**
 * @summary Encodes a(n) ModeConfirmed into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModeConfirmed, encoded as an ASN.1 Element.
 */
export function _encode_ModeConfirmed(
    value: ModeConfirmed,
    elGetter: $.ASN1Encoder<ModeConfirmed>
) {
    if (!_cached_encoder_for_ModeConfirmed) {
        _cached_encoder_for_ModeConfirmed = $._encodeBoolean;
    }
    return _cached_encoder_for_ModeConfirmed(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ModeConfirmed */

/* eslint-enable */
