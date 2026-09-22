/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaEuiccDataErrorCode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IpaEuiccDataErrorCode  ::=  INTEGER {
 *     incorrectTagList (1),
 *     euiccCiPKIdNotFound(5),
 *     ecallActive(104),
 *     undefinedError(127)
 * }
 * ```
 */
export
type IpaEuiccDataErrorCode = INTEGER;

/**
 * @summary IpaEuiccDataErrorCode_incorrectTagList
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_incorrectTagList: IpaEuiccDataErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_incorrectTagList
 * @constant
 * @type {number}
 */
export
const incorrectTagList: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_incorrectTagList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_euiccCiPKIdNotFound
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_euiccCiPKIdNotFound: IpaEuiccDataErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_euiccCiPKIdNotFound
 * @constant
 * @type {number}
 */
export
const euiccCiPKIdNotFound: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_euiccCiPKIdNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_ecallActive
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_ecallActive: IpaEuiccDataErrorCode = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_ecallActive
 * @constant
 * @type {number}
 */
export
const ecallActive: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_undefinedError: IpaEuiccDataErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_IpaEuiccDataErrorCode: $.ASN1Decoder<IpaEuiccDataErrorCode> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IpaEuiccDataErrorCode
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IpaEuiccDataErrorCode (el: _Element): IpaEuiccDataErrorCode {
    if (!_cached_decoder_for_IpaEuiccDataErrorCode) { _cached_decoder_for_IpaEuiccDataErrorCode = $._decodeInteger; }
    return _cached_decoder_for_IpaEuiccDataErrorCode(el);
}

let _cached_encoder_for_IpaEuiccDataErrorCode: $.ASN1Encoder<IpaEuiccDataErrorCode> | null = null;

/**
 * @summary Encodes a(n) IpaEuiccDataErrorCode into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IpaEuiccDataErrorCode, encoded as an ASN.1 Element.
 */
export
function _encode_IpaEuiccDataErrorCode (value: IpaEuiccDataErrorCode, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IpaEuiccDataErrorCode) { _cached_encoder_for_IpaEuiccDataErrorCode = $._encodeInteger; }
    return _cached_encoder_for_IpaEuiccDataErrorCode(value, elGetter);
}


/* eslint-enable */
