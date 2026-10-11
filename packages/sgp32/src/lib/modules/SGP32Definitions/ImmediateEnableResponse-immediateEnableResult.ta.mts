/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ImmediateEnableResponse_immediateEnableResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImmediateEnableResponse-immediateEnableResult ::= INTEGER {
 *     ok(0),
 *     immediateEnableNotAvailable(1),
 *     noSessionContext(4),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ImmediateEnableResponse_immediateEnableResult = INTEGER;

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_ok: ImmediateEnableResponse_immediateEnableResult = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_ok
 * @constant
 * @type {number}
 */
export
const ok: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable: ImmediateEnableResponse_immediateEnableResult = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable
 * @constant
 * @type {number}
 */
export
const immediateEnableNotAvailable: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_noSessionContext
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_noSessionContext: ImmediateEnableResponse_immediateEnableResult = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_noSessionContext
 * @constant
 * @type {number}
 */
export
const noSessionContext: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_catBusy
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_catBusy: ImmediateEnableResponse_immediateEnableResult = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_catBusy
 * @constant
 * @type {number}
 */
export
const catBusy: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_undefinedError: ImmediateEnableResponse_immediateEnableResult = 127; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_undefinedError
 * @constant
 * @type {number}
 */
export
const undefinedError: ImmediateEnableResponse_immediateEnableResult = ImmediateEnableResponse_immediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ImmediateEnableResponse_immediateEnableResult: $.ASN1Decoder<ImmediateEnableResponse_immediateEnableResult> = $._decodeInteger;
export const _encode_ImmediateEnableResponse_immediateEnableResult: $.ASN1Encoder<ImmediateEnableResponse_immediateEnableResult> = $._encodeInteger;


/* eslint-enable */
