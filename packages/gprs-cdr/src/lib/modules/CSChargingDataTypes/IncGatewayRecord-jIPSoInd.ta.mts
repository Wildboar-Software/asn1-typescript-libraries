/* eslint-disable */
import {
    INTEGER
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
const IncGatewayRecord_jIPSoInd_lRN_NP_Database: IncGatewayRecord_jIPSoInd = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: IncGatewayRecord_jIPSoInd = IncGatewayRecord_jIPSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_switchingSystemData: IncGatewayRecord_jIPSoInd = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: IncGatewayRecord_jIPSoInd = IncGatewayRecord_jIPSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_incomingsignaling: IncGatewayRecord_jIPSoInd = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: IncGatewayRecord_jIPSoInd = IncGatewayRecord_jIPSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_jIPSoInd_unknown: IncGatewayRecord_jIPSoInd = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_jIPSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: IncGatewayRecord_jIPSoInd = IncGatewayRecord_jIPSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_jIPSoInd: $.ASN1Decoder<IncGatewayRecord_jIPSoInd> = $._decodeInteger;

export
const _encode_IncGatewayRecord_jIPSoInd: $.ASN1Encoder<IncGatewayRecord_jIPSoInd> = $._encodeInteger;

/* eslint-enable */
