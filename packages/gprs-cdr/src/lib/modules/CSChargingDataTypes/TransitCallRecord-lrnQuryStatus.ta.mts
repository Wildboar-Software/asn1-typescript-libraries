/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransitCallRecord_lrnQuryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransitCallRecord-lrnQuryStatus ::= INTEGER {
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
type TransitCallRecord_lrnQuryStatus = INTEGER;

/**
 * @summary TransitCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_successfulQuery: TransitCallRecord_lrnQuryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_noQueryResponseMsg: TransitCallRecord_lrnQuryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_queryProtocolErr: TransitCallRecord_lrnQuryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_queryResponseDataErr: TransitCallRecord_lrnQuryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_queryRejected: TransitCallRecord_lrnQuryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_queryNotPerformed: TransitCallRecord_lrnQuryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const TransitCallRecord_lrnQuryStatus_queryUnsuccessful: TransitCallRecord_lrnQuryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransitCallRecord_lrnQuryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: TransitCallRecord_lrnQuryStatus = TransitCallRecord_lrnQuryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_TransitCallRecord_lrnQuryStatus: $.ASN1Decoder<TransitCallRecord_lrnQuryStatus> = $._decodeInteger;

export
const _encode_TransitCallRecord_lrnQuryStatus: $.ASN1Encoder<TransitCallRecord_lrnQuryStatus> = $._encodeInteger;

/* eslint-enable */
