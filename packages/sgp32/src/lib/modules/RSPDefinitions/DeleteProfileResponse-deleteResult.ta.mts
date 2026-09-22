/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary DeleteProfileResponse_deleteResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteProfileResponse-deleteResult ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type DeleteProfileResponse_deleteResult = INTEGER;

/**
 * @summary DeleteProfileResponse_deleteResult_ok
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_ok: DeleteProfileResponse_deleteResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_ok
 * @constant
 * @type {number}
 */
export
const ok: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_iccidOrAidNotFound: DeleteProfileResponse_deleteResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_iccidOrAidNotFound
 * @constant
 * @type {number}
 */
export
const iccidOrAidNotFound: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_iccidOrAidNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_profileNotInDisabledState: DeleteProfileResponse_deleteResult = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_profileNotInDisabledState
 * @constant
 * @type {number}
 */
export
const profileNotInDisabledState: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_profileNotInDisabledState; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_disallowedByPolicy: DeleteProfileResponse_deleteResult = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_disallowedByPolicy
 * @constant
 * @type {number}
 */
export
const disallowedByPolicy: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_disallowedByPolicy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_undefinedError
 * @constant
 * @type {number}
 */
export
const DeleteProfileResponse_deleteResult_undefinedError: DeleteProfileResponse_deleteResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DeleteProfileResponse_deleteResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: DeleteProfileResponse_deleteResult = DeleteProfileResponse_deleteResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DeleteProfileResponse_deleteResult: $.ASN1Decoder<DeleteProfileResponse_deleteResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteProfileResponse_deleteResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteProfileResponse_deleteResult (el: _Element): DeleteProfileResponse_deleteResult {
    if (!_cached_decoder_for_DeleteProfileResponse_deleteResult) { _cached_decoder_for_DeleteProfileResponse_deleteResult = $._decodeInteger; }
    return _cached_decoder_for_DeleteProfileResponse_deleteResult(el);
}

let _cached_encoder_for_DeleteProfileResponse_deleteResult: $.ASN1Encoder<DeleteProfileResponse_deleteResult> | null = null;

/**
 * @summary Encodes a(n) DeleteProfileResponse_deleteResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteProfileResponse_deleteResult, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteProfileResponse_deleteResult (value: DeleteProfileResponse_deleteResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteProfileResponse_deleteResult) { _cached_encoder_for_DeleteProfileResponse_deleteResult = $._encodeInteger; }
    return _cached_encoder_for_DeleteProfileResponse_deleteResult(value, elGetter);
}


/* eslint-enable */
