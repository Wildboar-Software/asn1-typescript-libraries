/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LocationRoutingNumberQueryStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationRoutingNumberQueryStatus  ::=  INTEGER {
 *    successfulQuery         ( 1 ),
 *    noQueryResponseMsg      ( 2 ),
 *    queryProtocolErr        ( 4 ),
 *    queryResponseDataErr    ( 5 ),
 *    queryRejected           ( 6 ),
 *    queryNotPerformed       ( 9 ),
 *    queryUnsuccessful       ( 99 )}
 * ```
 */
export
type LocationRoutingNumberQueryStatus = INTEGER;

/**
 * @summary LocationRoutingNumberQueryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_successfulQuery: 1 = 1 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: 1 = LocationRoutingNumberQueryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_noQueryResponseMsg: 2 = 2 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: 2 = LocationRoutingNumberQueryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryProtocolErr: 4 = 4 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: 4 = LocationRoutingNumberQueryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryResponseDataErr: 5 = 5 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: 5 = LocationRoutingNumberQueryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryRejected: 6 = 6 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: 6 = LocationRoutingNumberQueryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryNotPerformed: 9 = 9 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: 9 = LocationRoutingNumberQueryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryUnsuccessful: 99 = 99 satisfies LocationRoutingNumberQueryStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: 99 = LocationRoutingNumberQueryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_LocationRoutingNumberQueryStatus: $.ASN1Decoder<LocationRoutingNumberQueryStatus> = $._decodeInteger;

export
const _encode_LocationRoutingNumberQueryStatus: $.ASN1Encoder<LocationRoutingNumberQueryStatus> = $._encodeInteger;

/* eslint-enable */
