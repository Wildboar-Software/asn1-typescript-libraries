/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetNicknameResponse_setNicknameResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetNicknameResponse-setNicknameResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SetNicknameResponse_setNicknameResult = INTEGER;

/**
 * @summary SetNicknameResponse_setNicknameResult_ok
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_ok: SetNicknameResponse_setNicknameResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_ok
 * @constant
 * @type {number}
 */
export
const ok: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_iccidNotFound
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_iccidNotFound: SetNicknameResponse_setNicknameResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_iccidNotFound
 * @constant
 * @type {number}
 */
export
const iccidNotFound: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_iccidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_undefinedError
 * @constant
 * @type {number}
 */
export
const SetNicknameResponse_setNicknameResult_undefinedError: SetNicknameResponse_setNicknameResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetNicknameResponse_setNicknameResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: SetNicknameResponse_setNicknameResult = SetNicknameResponse_setNicknameResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SetNicknameResponse_setNicknameResult: $.ASN1Decoder<SetNicknameResponse_setNicknameResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetNicknameResponse_setNicknameResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetNicknameResponse_setNicknameResult (el: _Element): SetNicknameResponse_setNicknameResult {
    if (!_cached_decoder_for_SetNicknameResponse_setNicknameResult) { _cached_decoder_for_SetNicknameResponse_setNicknameResult = $._decodeInteger; }
    return _cached_decoder_for_SetNicknameResponse_setNicknameResult(el);
}

let _cached_encoder_for_SetNicknameResponse_setNicknameResult: $.ASN1Encoder<SetNicknameResponse_setNicknameResult> | null = null;

/**
 * @summary Encodes a(n) SetNicknameResponse_setNicknameResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetNicknameResponse_setNicknameResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetNicknameResponse_setNicknameResult (value: SetNicknameResponse_setNicknameResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetNicknameResponse_setNicknameResult) { _cached_encoder_for_SetNicknameResponse_setNicknameResult = $._encodeInteger; }
    return _cached_encoder_for_SetNicknameResponse_setNicknameResult(value, elGetter);
}


/* eslint-enable */
