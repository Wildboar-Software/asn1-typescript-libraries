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
const RoamingRecord_jIPQuryStatus_successfulQuery: 1 = 1 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: 1 = RoamingRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_noQueryResponseMsg: 2 = 2 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: 2 = RoamingRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryProtocolErr: 4 = 4 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: 4 = RoamingRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryResponseDataErr: 5 = 5 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: 5 = RoamingRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryRejected: 6 = 6 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: 6 = RoamingRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryNotPerformed: 9 = 9 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: 9 = RoamingRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryUnsuccessful: 99 = 99 satisfies RoamingRecord_jIPQuryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: 99 = RoamingRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RoamingRecord_jIPQuryStatus: $.ASN1Decoder<RoamingRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_RoamingRecord_jIPQuryStatus: $.ASN1Encoder<RoamingRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
