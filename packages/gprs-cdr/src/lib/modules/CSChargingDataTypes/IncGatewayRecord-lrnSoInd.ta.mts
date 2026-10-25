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
const IncGatewayRecord_lrnSoInd_lRN_NP_Database: 1 = 1 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_lRN_NP_Database
 * @constant
 * @type {number}
 */
export
const lRN_NP_Database: 1 = IncGatewayRecord_lrnSoInd_lRN_NP_Database; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_switchingSystemData: 2 = 2 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_switchingSystemData
 * @constant
 * @type {number}
 */
export
const switchingSystemData: 2 = IncGatewayRecord_lrnSoInd_switchingSystemData; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_incomingsignaling: 3 = 3 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_incomingsignaling
 * @constant
 * @type {number}
 */
export
const incomingsignaling: 3 = IncGatewayRecord_lrnSoInd_incomingsignaling; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const IncGatewayRecord_lrnSoInd_unknown: 9 = 9 satisfies IncGatewayRecord_lrnSoInd; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary IncGatewayRecord_lrnSoInd_unknown
 * @constant
 * @type {number}
 */
export
const unknown: 9 = IncGatewayRecord_lrnSoInd_unknown; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_IncGatewayRecord_lrnSoInd: $.ASN1Decoder<IncGatewayRecord_lrnSoInd> = $._decodeInteger;

export
const _encode_IncGatewayRecord_lrnSoInd: $.ASN1Encoder<IncGatewayRecord_lrnSoInd> = $._encodeInteger;

/* eslint-enable */
