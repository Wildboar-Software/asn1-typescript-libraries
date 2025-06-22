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
    Result,
    _decode_Result,
    _encode_Result,
} from '../ISO8823-PRESENTATION/Result.ta.mjs';

/**
 * @summary Default_context_result
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Default-context-result  ::=  Result
 * ```
 */
export type Default_context_result = Result; // DefinedType


let _cached_decoder_for_Default_context_result: $.ASN1Decoder<Default_context_result> | null = null;


/**
 * @summary Decodes an ASN.1 element into a(n) Default_context_result
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Default_context_result} The decoded data structure.
 */
export function _decode_Default_context_result(el: _Element) {
    if (!_cached_decoder_for_Default_context_result) {
        _cached_decoder_for_Default_context_result = _decode_Result;
    }
    return _cached_decoder_for_Default_context_result(el);
}


let _cached_encoder_for_Default_context_result: $.ASN1Encoder<Default_context_result> | null = null;


/**
 * @summary Encodes a(n) Default_context_result into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Default_context_result, encoded as an ASN.1 Element.
 */
export function _encode_Default_context_result(
    value: Default_context_result,
    elGetter: $.ASN1Encoder<Default_context_result>
) {
    if (!_cached_encoder_for_Default_context_result) {
        _cached_encoder_for_Default_context_result = _encode_Result;
    }
    return _cached_encoder_for_Default_context_result(value, elGetter);
}


/* eslint-enable */
