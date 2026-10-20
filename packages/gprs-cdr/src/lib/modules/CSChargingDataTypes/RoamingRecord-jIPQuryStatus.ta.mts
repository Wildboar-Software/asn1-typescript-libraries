/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RoamingRecord_jIPQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoamingRecord-jIPQuryStatus ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
const RoamingRecord_jIPQuryStatus_successfulQuery: RoamingRecord_jIPQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_noQueryResponseMsg: RoamingRecord_jIPQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryProtocolErr: RoamingRecord_jIPQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryResponseDataErr: RoamingRecord_jIPQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryRejected: RoamingRecord_jIPQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryNotPerformed: RoamingRecord_jIPQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const RoamingRecord_jIPQuryStatus_queryUnsuccessful: RoamingRecord_jIPQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RoamingRecord_jIPQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: RoamingRecord_jIPQuryStatus = RoamingRecord_jIPQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_RoamingRecord_jIPQuryStatus: $.ASN1Decoder<RoamingRecord_jIPQuryStatus> = $._decodeInteger;

export
const _encode_RoamingRecord_jIPQuryStatus: $.ASN1Encoder<RoamingRecord_jIPQuryStatus> = $._encodeInteger;

/* eslint-enable */
