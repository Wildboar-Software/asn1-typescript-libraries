/* eslint-disable */
import {
    ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IpaEuiccDataErrorCode
 * @description
 * 
 * Error code inside `IpaEuiccDataResponseError`. `ecallActive` is required
 * when the Emergency Profile is enabled. SGP.32 v1.2 section 2.11.2.2 does not
 * further define `incorrectTagList`, `euiccCiPKIdNotFound`, or
 * `undefinedError`. Annex C lists those names only. SGP.32 v1.2, section
 * 2.11.2.2.
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
 * @description
 * SGP.32 v1.2 section 2.11.2.2 names `incorrectTagList(1)` and does not
 * further define the condition that produces it. A tag in `tagList` outside
 * the list in section 2.11.1.2 is ignored without error. Annex C lists the
 * name only.
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_incorrectTagList: IpaEuiccDataErrorCode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_incorrectTagList
 * @description
 * SGP.32 v1.2 section 2.11.2.2 names this code and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const incorrectTagList: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_incorrectTagList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_euiccCiPKIdNotFound
 * @description
 * SGP.32 v1.2 section 2.11.2.2 names `euiccCiPKIdNotFound(5)` and does not
 * further define the condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_euiccCiPKIdNotFound: IpaEuiccDataErrorCode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_euiccCiPKIdNotFound
 * @description
 * SGP.32 v1.2 section 2.11.2.2 names this code and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const euiccCiPKIdNotFound: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_euiccCiPKIdNotFound; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_ecallActive
 * @description
 * Returned when the Emergency Profile is enabled. The IPA stops the procedure
 * and places this code in `IpaEuiccDataResponseError`. SGP.32 v1.2, section
 * 2.11.2.2.
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_ecallActive: IpaEuiccDataErrorCode = 104; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_ecallActive
 * @description
 * The Emergency Profile is enabled, so the IPA stopped and returned this
 * error. SGP.32 v1.2, section 2.11.2.2.
 * @constant
 * @type {number}
 */
export
const ecallActive: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_ecallActive; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_undefinedError
 * @description
 * SGP.32 v1.2 section 2.11.2.2 names `undefinedError(127)` and does not
 * further define the condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const IpaEuiccDataErrorCode_undefinedError: IpaEuiccDataErrorCode = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IpaEuiccDataErrorCode_undefinedError
 * @description
 * SGP.32 v1.2 section 2.11.2.2 names this code and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const undefinedError: IpaEuiccDataErrorCode = IpaEuiccDataErrorCode_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_IpaEuiccDataErrorCode: $.ASN1Decoder<IpaEuiccDataErrorCode> = $._decodeInteger;
export const _encode_IpaEuiccDataErrorCode: $.ASN1Encoder<IpaEuiccDataErrorCode> = $._encodeInteger;


/* eslint-enable */
