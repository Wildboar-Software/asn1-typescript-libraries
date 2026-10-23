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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    TCMessage,
    _decode_TCMessage,
    _encode_TCMessage,
} from '../TCAPMessages/TCMessage.ta.mjs';
/**
 * @summary TCSingleAS
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TCSingleAS{OPERATION-PACKAGE:package}  ::=
 *   TCMessage{{AllOperations  {package}}, {AllOperations  {package}}}
 * ```
 */
export type TCSingleAS = TCMessage; // DefinedType

let _cached_decoder_for_TCSingleAS: $.ASN1Decoder<TCSingleAS> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TCSingleAS
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TCSingleAS} The decoded data structure.
 */
export function _decode_TCSingleAS(el: _Element): TCSingleAS {
    if (!_cached_decoder_for_TCSingleAS) {
        _cached_decoder_for_TCSingleAS = _decode_TCMessage;
    }
    return _cached_decoder_for_TCSingleAS(el);
}

let _cached_encoder_for_TCSingleAS: $.ASN1Encoder<TCSingleAS> | null = null;

/**
 * @summary Encodes a(n) TCSingleAS into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TCSingleAS, encoded as an ASN.1 Element.
 */
export function _encode_TCSingleAS(
    value: TCSingleAS,
    elGetter: $.ASN1Encoder<TCSingleAS>
): _Element {
    if (!_cached_encoder_for_TCSingleAS) {
        _cached_encoder_for_TCSingleAS = _encode_TCMessage;
    }
    return _cached_encoder_for_TCSingleAS(value, elGetter);
}


/* eslint-enable */
