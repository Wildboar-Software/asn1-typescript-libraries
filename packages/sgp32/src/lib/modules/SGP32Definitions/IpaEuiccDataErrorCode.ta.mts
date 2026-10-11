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
export const _decode_IpaEuiccDataErrorCode: $.ASN1Decoder<IpaEuiccDataErrorCode> = $._decodeInteger;
export const _encode_IpaEuiccDataErrorCode: $.ASN1Encoder<IpaEuiccDataErrorCode> = $._encodeInteger;


/* eslint-enable */
