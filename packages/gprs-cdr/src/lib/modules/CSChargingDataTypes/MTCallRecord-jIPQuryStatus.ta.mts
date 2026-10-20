/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MTCallRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord-jIPQuryStatus ::= INTEGER {
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
type MTCallRecord_jIPQuryStatus = INTEGER;

/**
 * @summary MTCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_successfulQuery: MTCallRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_noQueryResponseMsg: MTCallRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_queryProtocolErr: MTCallRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_queryResponseDataErr: MTCallRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_queryRejected: MTCallRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_queryNotPerformed: MTCallRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MTCallRecord_jIPQuryStatus_queryUnsuccessful: MTCallRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: MTCallRecord_jIPQuryStatus = MTCallRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MTCallRecord_jIPQuryStatus: $.ASN1Decoder<MTCallRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_MTCallRecord_jIPQuryStatus: $.ASN1Encoder<MTCallRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
