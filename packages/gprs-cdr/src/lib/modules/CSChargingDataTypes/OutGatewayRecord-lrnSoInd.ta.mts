/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OutGatewayRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type OutGatewayRecord_lrnSoInd = INTEGER;

/**
 * @summary OutGatewayRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnSoInd_lRN_NP_Database: 1 = 1 satisfies OutGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = OutGatewayRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnSoInd_switchingSystemData: 2 = 2 satisfies OutGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = OutGatewayRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnSoInd_incomingsignaling: 3 = 3 satisfies OutGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = OutGatewayRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_lrnSoInd_unknown: 9 = 9 satisfies OutGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = OutGatewayRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_lrnSoInd: $.ASN1Decoder<OutGatewayRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_OutGatewayRecord_lrnSoInd: $.ASN1Encoder<OutGatewayRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
