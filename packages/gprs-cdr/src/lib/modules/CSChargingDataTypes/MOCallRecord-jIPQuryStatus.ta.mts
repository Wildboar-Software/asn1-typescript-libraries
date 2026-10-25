/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-jIPQuryStatus ::= INTEGER {
 *    successfulQuery         ( 1 ),
 *    noQueryResponseMsg      ( 2 ),
 *    queryProtocolErr        ( 4 ),
 *    queryResponseDataErr    ( 5 ),
 *    queryRejected           ( 6 ),
 *    queryNotPerformed       ( 9 ),
 *    queryUnsuccessful       ( 99 )
 * }
 * ```
 */
export
type MOCallRecord_jIPQuryStatus = INTEGER;

/**
 * @summary MOCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_successfulQuery = 1 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = MOCallRecord_jIPQuryStatus_successfulQuery satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_noQueryResponseMsg = 2 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = MOCallRecord_jIPQuryStatus_noQueryResponseMsg satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryProtocolErr = 4 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = MOCallRecord_jIPQuryStatus_queryProtocolErr satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryResponseDataErr = 5 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = MOCallRecord_jIPQuryStatus_queryResponseDataErr satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryRejected = 6 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = MOCallRecord_jIPQuryStatus_queryRejected satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryNotPerformed = 9 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = MOCallRecord_jIPQuryStatus_queryNotPerformed satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MOCallRecord_jIPQuryStatus_queryUnsuccessful = 99 satisfies MOCallRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = MOCallRecord_jIPQuryStatus_queryUnsuccessful satisfies MOCallRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_jIPQuryStatus: $.ASN1Decoder<MOCallRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_MOCallRecord_jIPQuryStatus: $.ASN1Encoder<MOCallRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
