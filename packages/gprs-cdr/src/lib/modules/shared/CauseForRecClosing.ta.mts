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
const CauseForRecClosing_normalRelease = 0 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease = CauseForRecClosing_normalRelease satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_abnormalRelease = 4 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease = CauseForRecClosing_abnormalRelease satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_cAMELInitCallRelease = 5 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const cAMELInitCallRelease = CauseForRecClosing_cAMELInitCallRelease satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_volumeLimit = 16 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit = CauseForRecClosing_volumeLimit satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_timeLimit = 17 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit = CauseForRecClosing_timeLimit satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_servingNodeChange = 18 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const servingNodeChange = CauseForRecClosing_servingNodeChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_maxChangeCond = 19 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond = CauseForRecClosing_maxChangeCond satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_managementIntervention = 20 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention = CauseForRecClosing_managementIntervention satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_intraSGSNIntersystemChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_intraSGSNIntersystemChange = 21 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_intraSGSNIntersystemChange
 * @constant
 * @type {number}
 */
export
const intraSGSNIntersystemChange = CauseForRecClosing_intraSGSNIntersystemChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_rATChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_rATChange = 22 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_rATChange
 * @constant
 * @type {number}
 */
export
const rATChange = CauseForRecClosing_rATChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mSTimeZoneChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_mSTimeZoneChange = 23 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mSTimeZoneChange
 * @constant
 * @type {number}
 */
export
const mSTimeZoneChange = CauseForRecClosing_mSTimeZoneChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGSNPLMNIDChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_sGSNPLMNIDChange = 24 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGSNPLMNIDChange
 * @constant
 * @type {number}
 */
export
const sGSNPLMNIDChange = CauseForRecClosing_sGSNPLMNIDChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGWChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_sGWChange = 25 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGWChange
 * @constant
 * @type {number}
 */
export
const sGWChange = CauseForRecClosing_sGWChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_aPNAMBRChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_aPNAMBRChange = 26 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_aPNAMBRChange
 * @constant
 * @type {number}
 */
export
const aPNAMBRChange = CauseForRecClosing_aPNAMBRChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mOExceptionDataCounterReceipt
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_mOExceptionDataCounterReceipt = 27 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mOExceptionDataCounterReceipt
 * @constant
 * @type {number}
 */
export
const mOExceptionDataCounterReceipt = CauseForRecClosing_mOExceptionDataCounterReceipt satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unauthorizedRequestingNetwork = 52 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const unauthorizedRequestingNetwork = CauseForRecClosing_unauthorizedRequestingNetwork satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unauthorizedLCSClient = 53 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const unauthorizedLCSClient = CauseForRecClosing_unauthorizedLCSClient satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_positionMethodFailure = 54 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const positionMethodFailure = CauseForRecClosing_positionMethodFailure satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unknownOrUnreachableLCSClient = 58 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const unknownOrUnreachableLCSClient = CauseForRecClosing_unknownOrUnreachableLCSClient satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_listofDownstreamNodeChange = 59 satisfies CauseForRecClosing; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange = CauseForRecClosing_listofDownstreamNodeChange satisfies CauseForRecClosing; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CauseForRecClosing: $.ASN1Decoder<CauseForRecClosing> = $._decodeInteger;

export
const _encode_CauseForRecClosing: $.ASN1Encoder<CauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
