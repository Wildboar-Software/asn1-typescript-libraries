/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TermCAMELRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermCAMELRecord-lrnQuryStatus ::= INTEGER {
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
type TermCAMELRecord_lrnQuryStatus = INTEGER;

/**
 * @summary TermCAMELRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_successfulQuery: TermCAMELRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg: TermCAMELRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryProtocolErr: TermCAMELRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryResponseDataErr: TermCAMELRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryRejected: TermCAMELRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryNotPerformed: TermCAMELRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const TermCAMELRecord_lrnQuryStatus_queryUnsuccessful: TermCAMELRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TermCAMELRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: TermCAMELRecord_lrnQuryStatus = TermCAMELRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TermCAMELRecord_lrnQuryStatus: $.ASN1Decoder<TermCAMELRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_TermCAMELRecord_lrnQuryStatus: $.ASN1Encoder<TermCAMELRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
