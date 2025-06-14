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
    SimpleNameType,
    _decode_SimpleNameType,
    _encode_SimpleNameType,
} from '@wildboar/attribute-asn1module/src/lib/modules/Attribute-ASN1Module/SimpleNameType.ta.mjs';
/* START_OF_SYMBOL_DEFINITION ClockID */
/**
 * @summary ClockID
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClockID  ::=  SimpleNameType
 * ```
 */
export type ClockID = SimpleNameType; // DefinedType
/* END_OF_SYMBOL_DEFINITION ClockID */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockID */
let _cached_decoder_for_ClockID: $.ASN1Decoder<ClockID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ClockID */

/* START_OF_SYMBOL_DEFINITION _decode_ClockID */
/**
 * @summary Decodes an ASN.1 element into a(n) ClockID
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClockID} The decoded data structure.
 */
export function _decode_ClockID(el: _Element) {
    if (!_cached_decoder_for_ClockID) {
        _cached_decoder_for_ClockID = _decode_SimpleNameType;
    }
    return _cached_decoder_for_ClockID(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ClockID */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockID */
let _cached_encoder_for_ClockID: $.ASN1Encoder<ClockID> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ClockID */

/* START_OF_SYMBOL_DEFINITION _encode_ClockID */
/**
 * @summary Encodes a(n) ClockID into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClockID, encoded as an ASN.1 Element.
 */
export function _encode_ClockID(
    value: ClockID,
    elGetter: $.ASN1Encoder<ClockID>
) {
    if (!_cached_encoder_for_ClockID) {
        _cached_encoder_for_ClockID = _encode_SimpleNameType;
    }
    return _cached_encoder_for_ClockID(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ClockID */

/* eslint-enable */
