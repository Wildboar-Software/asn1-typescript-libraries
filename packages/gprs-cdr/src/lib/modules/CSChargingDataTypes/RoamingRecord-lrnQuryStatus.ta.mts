/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingRecord-lrnQuryStatus ::= INTEGER {
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
type RoamingRecord_lrnQuryStatus = INTEGER;

/**
 * @summary RoamingRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_successfulQuery: RoamingRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_noQueryResponseMsg: RoamingRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_queryProtocolErr: RoamingRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_queryResponseDataErr: RoamingRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_queryRejected: RoamingRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_queryNotPerformed: RoamingRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const RoamingRecord_lrnQuryStatus_queryUnsuccessful: RoamingRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: RoamingRecord_lrnQuryStatus = RoamingRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RoamingRecord_lrnQuryStatus: $.ASN1Decoder<RoamingRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_RoamingRecord_lrnQuryStatus: $.ASN1Encoder<RoamingRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
