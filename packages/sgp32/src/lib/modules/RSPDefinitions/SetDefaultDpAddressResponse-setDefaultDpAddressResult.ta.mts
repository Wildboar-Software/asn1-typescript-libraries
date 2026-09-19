/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SetDefaultDpAddressResponse-setDefaultDpAddressResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type SetDefaultDpAddressResponse_setDefaultDpAddressResult = INTEGER;

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok
 * @constant
 * @type {number}
 */
export
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok: SetDefaultDpAddressResponse_setDefaultDpAddressResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok
 * @constant
 * @type {number}
 */
export
const ok: SetDefaultDpAddressResponse_setDefaultDpAddressResult = SetDefaultDpAddressResponse_setDefaultDpAddressResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError
 * @constant
 * @type {number}
 */
export
const SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError: SetDefaultDpAddressResponse_setDefaultDpAddressResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: SetDefaultDpAddressResponse_setDefaultDpAddressResult = SetDefaultDpAddressResponse_setDefaultDpAddressResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult: $.ASN1Decoder<SetDefaultDpAddressResponse_setDefaultDpAddressResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SetDefaultDpAddressResponse_setDefaultDpAddressResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SetDefaultDpAddressResponse_setDefaultDpAddressResult (el: _Element): SetDefaultDpAddressResponse_setDefaultDpAddressResult {
    if (!_cached_decoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult) { _cached_decoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult = $._decodeInteger; }
    return _cached_decoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult(el);
}

let _cached_encoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult: $.ASN1Encoder<SetDefaultDpAddressResponse_setDefaultDpAddressResult> | null = null;

/**
 * @summary Encodes a(n) SetDefaultDpAddressResponse_setDefaultDpAddressResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SetDefaultDpAddressResponse_setDefaultDpAddressResult, encoded as an ASN.1 Element.
 */
export
function _encode_SetDefaultDpAddressResponse_setDefaultDpAddressResult (value: SetDefaultDpAddressResponse_setDefaultDpAddressResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult) { _cached_encoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult = $._encodeInteger; }
    return _cached_encoder_for_SetDefaultDpAddressResponse_setDefaultDpAddressResult(value, elGetter);
}


/* eslint-enable */
