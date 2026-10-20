/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OutGatewayRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OutGatewayRecord-jIPSoInd ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
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
const OutGatewayRecord_jIPSoInd_lRN_NP_Database: OutGatewayRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: OutGatewayRecord_jIPSoInd = OutGatewayRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_switchingSystemData: OutGatewayRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: OutGatewayRecord_jIPSoInd = OutGatewayRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_incomingsignaling: OutGatewayRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: OutGatewayRecord_jIPSoInd = OutGatewayRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const OutGatewayRecord_jIPSoInd_unknown: OutGatewayRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OutGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: OutGatewayRecord_jIPSoInd = OutGatewayRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_OutGatewayRecord_jIPSoInd: $.ASN1Decoder<OutGatewayRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_OutGatewayRecord_jIPSoInd: $.ASN1Encoder<OutGatewayRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
