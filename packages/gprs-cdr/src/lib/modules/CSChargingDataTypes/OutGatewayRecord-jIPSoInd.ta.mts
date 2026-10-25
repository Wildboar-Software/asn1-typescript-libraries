/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OutGatewayRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord-jIPSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type OutGatewayRecord_jIPSoInd = INTEGER;

/**
 * @summary OutGatewayRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_lRN_NP_Database: 1 = 1 satisfies OutGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = OutGatewayRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_switchingSystemData: 2 = 2 satisfies OutGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = OutGatewayRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_incomingsignaling: 3 = 3 satisfies OutGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = OutGatewayRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_unknown: 9 = 9 satisfies OutGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = OutGatewayRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_jIPSoInd: $.ASN1Decoder<OutGatewayRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_OutGatewayRecord_jIPSoInd: $.ASN1Encoder<OutGatewayRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
