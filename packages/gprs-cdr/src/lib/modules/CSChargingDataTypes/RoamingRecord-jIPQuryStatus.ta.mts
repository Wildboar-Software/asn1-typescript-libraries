/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingRecord-jIPQuryStatus ::= INTEGER {
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
type RoamingRecord_jIPQuryStatus = INTEGER;

/**
 * @summary RoamingRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_successfulQuery = 1 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery = RoamingRecord_jIPQuryStatus_successfulQuery satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_noQueryResponseMsg = 2 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg = RoamingRecord_jIPQuryStatus_noQueryResponseMsg satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryProtocolErr = 4 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr = RoamingRecord_jIPQuryStatus_queryProtocolErr satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryResponseDataErr = 5 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr = RoamingRecord_jIPQuryStatus_queryResponseDataErr satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryRejected = 6 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected = RoamingRecord_jIPQuryStatus_queryRejected satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryNotPerformed = 9 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed = RoamingRecord_jIPQuryStatus_queryNotPerformed satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryUnsuccessful = 99 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful = RoamingRecord_jIPQuryStatus_queryUnsuccessful satisfies RoamingRecord_jIPQuryStatus; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RoamingRecord_jIPQuryStatus: $.ASN1Decoder<RoamingRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_RoamingRecord_jIPQuryStatus: $.ASN1Encoder<RoamingRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
