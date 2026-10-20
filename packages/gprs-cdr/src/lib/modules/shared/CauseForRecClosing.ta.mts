/* eslint-disable */
import {
    INTEGER
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
const CauseForRecClosing_normalRelease: CauseForRecClosing = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CauseForRecClosing = CauseForRecClosing_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_abnormalRelease: CauseForRecClosing = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: CauseForRecClosing = CauseForRecClosing_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_cAMELInitCallRelease: CauseForRecClosing = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const cAMELInitCallRelease: CauseForRecClosing = CauseForRecClosing_cAMELInitCallRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_volumeLimit: CauseForRecClosing = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_volumeLimit
 * @constant
 * @type {number}
 */
export
const volumeLimit: CauseForRecClosing = CauseForRecClosing_volumeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_timeLimit: CauseForRecClosing = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_timeLimit
 * @constant
 * @type {number}
 */
export
const timeLimit: CauseForRecClosing = CauseForRecClosing_timeLimit; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_servingNodeChange: CauseForRecClosing = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_servingNodeChange
 * @constant
 * @type {number}
 */
export
const servingNodeChange: CauseForRecClosing = CauseForRecClosing_servingNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_maxChangeCond: CauseForRecClosing = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_maxChangeCond
 * @constant
 * @type {number}
 */
export
const maxChangeCond: CauseForRecClosing = CauseForRecClosing_maxChangeCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_managementIntervention: CauseForRecClosing = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_managementIntervention
 * @constant
 * @type {number}
 */
export
const managementIntervention: CauseForRecClosing = CauseForRecClosing_managementIntervention; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_intraSGSNIntersystemChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_intraSGSNIntersystemChange: CauseForRecClosing = 21; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_intraSGSNIntersystemChange
 * @constant
 * @type {number}
 */
export
const intraSGSNIntersystemChange: CauseForRecClosing = CauseForRecClosing_intraSGSNIntersystemChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_rATChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_rATChange: CauseForRecClosing = 22; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_rATChange
 * @constant
 * @type {number}
 */
export
const rATChange: CauseForRecClosing = CauseForRecClosing_rATChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mSTimeZoneChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_mSTimeZoneChange: CauseForRecClosing = 23; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mSTimeZoneChange
 * @constant
 * @type {number}
 */
export
const mSTimeZoneChange: CauseForRecClosing = CauseForRecClosing_mSTimeZoneChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGSNPLMNIDChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_sGSNPLMNIDChange: CauseForRecClosing = 24; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGSNPLMNIDChange
 * @constant
 * @type {number}
 */
export
const sGSNPLMNIDChange: CauseForRecClosing = CauseForRecClosing_sGSNPLMNIDChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGWChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_sGWChange: CauseForRecClosing = 25; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_sGWChange
 * @constant
 * @type {number}
 */
export
const sGWChange: CauseForRecClosing = CauseForRecClosing_sGWChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_aPNAMBRChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_aPNAMBRChange: CauseForRecClosing = 26; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_aPNAMBRChange
 * @constant
 * @type {number}
 */
export
const aPNAMBRChange: CauseForRecClosing = CauseForRecClosing_aPNAMBRChange; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mOExceptionDataCounterReceipt
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_mOExceptionDataCounterReceipt: CauseForRecClosing = 27; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_mOExceptionDataCounterReceipt
 * @constant
 * @type {number}
 */
export
const mOExceptionDataCounterReceipt: CauseForRecClosing = CauseForRecClosing_mOExceptionDataCounterReceipt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unauthorizedRequestingNetwork: CauseForRecClosing = 52; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const unauthorizedRequestingNetwork: CauseForRecClosing = CauseForRecClosing_unauthorizedRequestingNetwork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unauthorizedLCSClient: CauseForRecClosing = 53; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const unauthorizedLCSClient: CauseForRecClosing = CauseForRecClosing_unauthorizedLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_positionMethodFailure: CauseForRecClosing = 54; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const positionMethodFailure: CauseForRecClosing = CauseForRecClosing_positionMethodFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_unknownOrUnreachableLCSClient: CauseForRecClosing = 58; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const unknownOrUnreachableLCSClient: CauseForRecClosing = CauseForRecClosing_unknownOrUnreachableLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const CauseForRecClosing_listofDownstreamNodeChange: CauseForRecClosing = 59; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForRecClosing_listofDownstreamNodeChange
 * @constant
 * @type {number}
 */
export
const listofDownstreamNodeChange: CauseForRecClosing = CauseForRecClosing_listofDownstreamNodeChange; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CauseForRecClosing: $.ASN1Decoder<CauseForRecClosing> = $._decodeInteger;

export
const _encode_CauseForRecClosing: $.ASN1Encoder<CauseForRecClosing> = $._encodeInteger;

/* eslint-enable */
