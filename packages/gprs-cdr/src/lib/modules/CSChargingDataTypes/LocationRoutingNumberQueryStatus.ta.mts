/* eslint-disable */
import {
    INTEGER
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
const LocationRoutingNumberQueryStatus_successfulQuery: LocationRoutingNumberQueryStatus = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_successfulQuery
 * @constant
 * @type {number}
 */
export
const successfulQuery: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_successfulQuery; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_noQueryResponseMsg: LocationRoutingNumberQueryStatus = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_noQueryResponseMsg
 * @constant
 * @type {number}
 */
export
const noQueryResponseMsg: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_noQueryResponseMsg; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryProtocolErr: LocationRoutingNumberQueryStatus = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryProtocolErr
 * @constant
 * @type {number}
 */
export
const queryProtocolErr: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_queryProtocolErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryResponseDataErr: LocationRoutingNumberQueryStatus = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryResponseDataErr
 * @constant
 * @type {number}
 */
export
const queryResponseDataErr: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_queryResponseDataErr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryRejected: LocationRoutingNumberQueryStatus = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryRejected
 * @constant
 * @type {number}
 */
export
const queryRejected: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_queryRejected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryNotPerformed: LocationRoutingNumberQueryStatus = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryNotPerformed
 * @constant
 * @type {number}
 */
export
const queryNotPerformed: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_queryNotPerformed; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const LocationRoutingNumberQueryStatus_queryUnsuccessful: LocationRoutingNumberQueryStatus = 99; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary LocationRoutingNumberQueryStatus_queryUnsuccessful
 * @constant
 * @type {number}
 */
export
const queryUnsuccessful: LocationRoutingNumberQueryStatus = LocationRoutingNumberQueryStatus_queryUnsuccessful; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_LocationRoutingNumberQueryStatus: $.ASN1Decoder<LocationRoutingNumberQueryStatus> = $._decodeInteger;

export
const _encode_LocationRoutingNumberQueryStatus: $.ASN1Encoder<LocationRoutingNumberQueryStatus> = $._encodeInteger;

/* eslint-enable */
