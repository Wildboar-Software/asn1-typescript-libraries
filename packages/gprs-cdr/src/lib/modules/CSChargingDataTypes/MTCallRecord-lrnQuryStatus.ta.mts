/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MTCallRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MTCallRecord-lrnQuryStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type MTCallRecord_lrnQuryStatus = INTEGER;

/**
 * @summary MTCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_successfulQuery: MTCallRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_noQueryResponseMsg: MTCallRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryProtocolErr: MTCallRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryResponseDataErr: MTCallRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryRejected: MTCallRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryNotPerformed: MTCallRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MTCallRecord_lrnQuryStatus_queryUnsuccessful: MTCallRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MTCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: MTCallRecord_lrnQuryStatus = MTCallRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MTCallRecord_lrnQuryStatus: $.ASN1Decoder<MTCallRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_MTCallRecord_lrnQuryStatus: $.ASN1Encoder<MTCallRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
