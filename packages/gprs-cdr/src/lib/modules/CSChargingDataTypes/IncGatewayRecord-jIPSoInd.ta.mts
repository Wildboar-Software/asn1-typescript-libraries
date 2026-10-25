/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IncGatewayRecord_jIPSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IncGatewayRecord-jIPSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type IncGatewayRecord_jIPSoInd = INTEGER;

/**
 * @summary IncGatewayRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_lRN_NP_Database: 1 = 1 satisfies IncGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = IncGatewayRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_switchingSystemData: 2 = 2 satisfies IncGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = IncGatewayRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_incomingsignaling: 3 = 3 satisfies IncGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = IncGatewayRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_unknown: 9 = 9 satisfies IncGatewayRecord_jIPSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = IncGatewayRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_jIPSoInd: $.ASN1Decoder<IncGatewayRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_IncGatewayRecord_jIPSoInd: $.ASN1Encoder<IncGatewayRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
