/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MOCallRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MOCallRecord-lrnQuryStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type MOCallRecord_lrnQuryStatus = INTEGER;

/**
 * @summary MOCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_successfulQuery: MOCallRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_noQueryResponseMsg: MOCallRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryProtocolErr: MOCallRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryResponseDataErr: MOCallRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryRejected: MOCallRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryNotPerformed: MOCallRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const MOCallRecord_lrnQuryStatus_queryUnsuccessful: MOCallRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary MOCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: MOCallRecord_lrnQuryStatus = MOCallRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_MOCallRecord_lrnQuryStatus: $.ASN1Decoder<MOCallRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_MOCallRecord_lrnQuryStatus: $.ASN1Encoder<MOCallRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
