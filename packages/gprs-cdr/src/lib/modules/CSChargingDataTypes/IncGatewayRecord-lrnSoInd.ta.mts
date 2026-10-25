/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IncGatewayRecord_lrnSoInd
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IncGatewayRecord-lrnSoInd ::= INTEGER {
 *    lRN-NP-Database        ( 1 ),
 *    switchingSystemData    ( 2 ),
 *    incomingsignaling      ( 3 ),
 *    unknown                ( 9 )
 * }
 * ```
 */
export
type IncGatewayRecord_lrnSoInd = INTEGER;

/**
 * @summary IncGatewayRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_lRN_NP_Database = 1 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database = IncGatewayRecord_lrnSoInd_lRN_NP_Database satisfies IncGatewayRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_switchingSystemData = 2 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData = IncGatewayRecord_lrnSoInd_switchingSystemData satisfies IncGatewayRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_incomingsignaling = 3 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling = IncGatewayRecord_lrnSoInd_incomingsignaling satisfies IncGatewayRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_unknown = 9 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown = IncGatewayRecord_lrnSoInd_unknown satisfies IncGatewayRecord_lrnSoInd; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_lrnSoInd: $.ASN1Decoder<IncGatewayRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_IncGatewayRecord_lrnSoInd: $.ASN1Encoder<IncGatewayRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
