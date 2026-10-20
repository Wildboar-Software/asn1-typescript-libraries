/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CPCauseForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPCauseForRecClosing  ::=  INTEGER {
 *    normalRelease                   ( 0 ), 
 *    abnormalRelease                 ( 1 ), 
 *    volumeLimit                     ( 2 ), 
 *    timeLimit                       ( 3 ), 
 *    maxNIDDsubmissions              ( 4 ), 
 *    servingNodeChange               ( 5 ), 
 *    pLMNChange                      ( 6 ), 
 *    servingPLMNRateControlChange    ( 7 ), 
 *    aPNRateControlChange            ( 8 ), 
 *    rATTypeChange                   ( 9 ), 
 *    managementIntervention          ( 10 )}
 * ```
 */
export
type CPCauseForRecClosing = INTEGER;

/**
 * @summary CPCauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_normalRelease: CPCauseForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CPCauseForRecClosing = CPCauseForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_abnormalRelease: CPCauseForRecClosing = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: CPCauseForRecClosing = CPCauseForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_volumeLimit: CPCauseForRecClosing = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: CPCauseForRecClosing = CPCauseForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_timeLimit: CPCauseForRecClosing = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: CPCauseForRecClosing = CPCauseForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_maxNIDDsubmissions
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_maxNIDDsubmissions: CPCauseForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_maxNIDDsubmissions
 * @constant
 * @type {number}
 */
export
const maxNIDDsubmissions: CPCauseForRecClosing = CPCauseForRecClosing_maxNIDDsubmissions; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_servingNodeChange: CPCauseForRecClosing = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const servingNodeChange: CPCauseForRecClosing = CPCauseForRecClosing_servingNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_pLMNChange
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_pLMNChange: CPCauseForRecClosing = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_pLMNChange
 * @constant
 * @type {number}
 */
export
const pLMNChange: CPCauseForRecClosing = CPCauseForRecClosing_pLMNChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingPLMNRateControlChange
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_servingPLMNRateControlChange: CPCauseForRecClosing = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_servingPLMNRateControlChange
 * @constant
 * @type {number}
 */
export
const servingPLMNRateControlChange: CPCauseForRecClosing = CPCauseForRecClosing_servingPLMNRateControlChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_aPNRateControlChange
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_aPNRateControlChange: CPCauseForRecClosing = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_aPNRateControlChange
 * @constant
 * @type {number}
 */
export
const aPNRateControlChange: CPCauseForRecClosing = CPCauseForRecClosing_aPNRateControlChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_rATTypeChange
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_rATTypeChange: CPCauseForRecClosing = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_rATTypeChange
 * @constant
 * @type {number}
 */
export
const rATTypeChange: CPCauseForRecClosing = CPCauseForRecClosing_rATTypeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const CPCauseForRecClosing_managementIntervention: CPCauseForRecClosing = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CPCauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: CPCauseForRecClosing = CPCauseForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CPCauseForRecClosing: $.ASN1Decoder<CPCauseForRecClosing> = $._decodeInteger;

export
const _encode_CPCauseForRecClosing: $.ASN1Encoder<CPCauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
