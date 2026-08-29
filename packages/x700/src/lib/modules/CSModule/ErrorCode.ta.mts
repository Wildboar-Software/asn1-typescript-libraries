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
    ErrorCode_Item,
    _decode_ErrorCode_Item,
    _encode_ErrorCode_Item,
} from '../CSModule/ErrorCode-Item.ta.mjs';
/**
 * @summary ErrorCode
 * @description
 *
 * Outcome of script execution, as a set of named integers, in
 * `executionResultInfo` and `triggerResultInfo`. `{noError}`
 * on success; otherwise one or more of:
 *
 * - `noError` (0) — success.
 * - `noScriptError` (1) — script name not specified (no
 *   execution parameter list and no default).
 * - `scriptRejectedError` (2) — script not in the launch pad's
 *   `availableScriptList`.
 * - `invalidParameterTypeError` (3) — parameter type mismatch.
 * - `invalidParameterValueError` (4) — parameter value invalid
 *   (e.g. out of range).
 * - `scriptSyntaxError` (5) — script syntax error.
 * - `scriptExecutionFailedError` (6) — failed for a reason
 *   other than syntax.
 * - `invalidParmeterNumber` (7) — wrong parameter count
 *   (spec spelling).
 * - `unauthorizedAccessError` (8) — access denied to an object
 *   the script uses.
 *
 * ITU-T Rec. X.753 (10/97)
 * [§8.2.1](https://www.itu.int/rec/T-REC-X.753-199710-I),
 * §8.2.2, A.8.
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
export function _decode_ErrorCode(el: _Element): ErrorCode {
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
): _Element {
    if (!_cached_encoder_for_ErrorCode) {
        _cached_encoder_for_ErrorCode = $._encodeSetOf<ErrorCode_Item>(
            () => _encode_ErrorCode_Item,
            $.BER
        );
    }
    return _cached_encoder_for_ErrorCode(value, elGetter);
}


/* eslint-enable */
