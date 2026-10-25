/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseForRecClosing
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForRecClosing  ::=  INTEGER {
 *    normalRelease                    ( 0 ),
 *    abnormalRelease                  ( 4 ),
 *    cAMELInitCallRelease             ( 5 ),
 *    volumeLimit                      ( 16 ),
 *    timeLimit                        ( 17 ),
 *    servingNodeChange                ( 18 ),
 *    maxChangeCond                    ( 19 ),
 *    managementIntervention           ( 20 ),
 *    intraSGSNIntersystemChange       ( 21 ),
 *    rATChange                        ( 22 ),
 *    mSTimeZoneChange                 ( 23 ),
 *    sGSNPLMNIDChange                 ( 24 ),
 *    sGWChange                        ( 25 ),
 *    aPNAMBRChange                    ( 26 ),
 *    mOExceptionDataCounterReceipt    ( 27 ),
 *    unauthorizedRequestingNetwork    ( 52 ),
 *    unauthorizedLCSClient            ( 53 ),
 *    positionMethodFailure            ( 54 ),
 *    unknownOrUnreachableLCSClient    ( 58 ),
 *    listofDownstreamNodeChange       ( 59 )}
 * ```
 */
export
type CauseForRecClosing = INTEGER;

/**
 * @summary CauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_normalRelease: 0 = 0 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: 0 = CauseForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_abnormalRelease: 4 = 4 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: 4 = CauseForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_cAMELInitCallRelease: 5 = 5 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const cAMELInitCallRelease: 5 = CauseForRecClosing_cAMELInitCallRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_volumeLimit: 16 = 16 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: 16 = CauseForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_timeLimit: 17 = 17 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: 17 = CauseForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_servingNodeChange: 18 = 18 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const servingNodeChange: 18 = CauseForRecClosing_servingNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_maxChangeCond: 19 = 19 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: 19 = CauseForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_managementIntervention: 20 = 20 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: 20 = CauseForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_intraSGSNIntersystemChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_intraSGSNIntersystemChange: 21 = 21 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_intraSGSNIntersystemChange
 * @constant
 * @type {number}
 */
export
const intraSGSNIntersystemChange: 21 = CauseForRecClosing_intraSGSNIntersystemChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_rATChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_rATChange: 22 = 22 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_rATChange
 * @constant
 * @type {number}
 */
export
const rATChange: 22 = CauseForRecClosing_rATChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mSTimeZoneChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_mSTimeZoneChange: 23 = 23 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mSTimeZoneChange
 * @constant
 * @type {number}
 */
export
const mSTimeZoneChange: 23 = CauseForRecClosing_mSTimeZoneChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGSNPLMNIDChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_sGSNPLMNIDChange: 24 = 24 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGSNPLMNIDChange
 * @constant
 * @type {number}
 */
export
const sGSNPLMNIDChange: 24 = CauseForRecClosing_sGSNPLMNIDChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGWChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_sGWChange: 25 = 25 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGWChange
 * @constant
 * @type {number}
 */
export
const sGWChange: 25 = CauseForRecClosing_sGWChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_aPNAMBRChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_aPNAMBRChange: 26 = 26 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_aPNAMBRChange
 * @constant
 * @type {number}
 */
export
const aPNAMBRChange: 26 = CauseForRecClosing_aPNAMBRChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mOExceptionDataCounterReceipt
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_mOExceptionDataCounterReceipt: 27 = 27 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mOExceptionDataCounterReceipt
 * @constant
 * @type {number}
 */
export
const mOExceptionDataCounterReceipt: 27 = CauseForRecClosing_mOExceptionDataCounterReceipt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unauthorizedRequestingNetwork: 52 = 52 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const unauthorizedRequestingNetwork: 52 = CauseForRecClosing_unauthorizedRequestingNetwork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unauthorizedLCSClient: 53 = 53 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const unauthorizedLCSClient: 53 = CauseForRecClosing_unauthorizedLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_positionMethodFailure: 54 = 54 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const positionMethodFailure: 54 = CauseForRecClosing_positionMethodFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unknownOrUnreachableLCSClient: 58 = 58 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const unknownOrUnreachableLCSClient: 58 = CauseForRecClosing_unknownOrUnreachableLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_listofDownstreamNodeChange: 59 = 59 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: 59 = CauseForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CauseForRecClosing: $.ASN1Decoder<CauseForRecClosing> = $._decodeInteger;

export
const _encode_CauseForRecClosing: $.ASN1Encoder<CauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
