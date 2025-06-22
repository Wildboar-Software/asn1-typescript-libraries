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
import * as $ from '@wildboar/asn1/functional';
import {
    ErrorCode_Item,
    _decode_ErrorCode_Item,
    _encode_ErrorCode_Item,
} from '../CSModule/ErrorCode-Item.ta.mjs';
/**
 * @summary ErrorCode
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ErrorCode  ::=
 *   SET OF
 *     INTEGER {noError(0), noScriptError(1), scriptRejectedError(2),
 *              invalidParameterTypeError(3), invalidParameterValueError(4),
 *              scriptSyntaxError(5), scriptExecutionFailedError(6),
 *              invalidParmeterNumber(7), unauthorizedAccessError(8)}
 * ```
 */
export type ErrorCode = ErrorCode_Item[]; // SetOfType

let _cached_decoder_for_ErrorCode: $.ASN1Decoder<ErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ErrorCode
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ErrorCode} The decoded data structure.
 */
export function _decode_ErrorCode(el: _Element) {
    if (!_cached_decoder_for_ErrorCode) {
        _cached_decoder_for_ErrorCode = $._decodeSetOf<ErrorCode_Item>(
            () => _decode_ErrorCode_Item
        );
    }
    return _cached_decoder_for_ErrorCode(el);
}

let _cached_encoder_for_ErrorCode: $.ASN1Encoder<ErrorCode> | null = null;

/**
 * @summary Encodes a(n) ErrorCode into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ErrorCode, encoded as an ASN.1 Element.
 */
export function _encode_ErrorCode(
    value: ErrorCode,
    elGetter: $.ASN1Encoder<ErrorCode>
) {
    if (!_cached_encoder_for_ErrorCode) {
        _cached_encoder_for_ErrorCode = $._encodeSetOf<ErrorCode_Item>(
            () => _encode_ErrorCode_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ErrorCode(value, elGetter);
}


/* eslint-enable */
