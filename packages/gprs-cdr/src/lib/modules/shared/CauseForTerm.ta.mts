/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CauseForTerm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseForTerm  ::=  INTEGER {
 *    normalRelease                       ( 0 ),
 *    partialRecord                       ( 1 ),
 *    partialRecordCallReestablishment    ( 2 ),
 *    unsuccessfulCallAttempt             ( 3 ),
 *    abnormalRelease                     ( 4 ),
 *    cAMELInitCallRelease                ( 5 ),
 *    unauthorizedRequestingNetwork       ( 52 ),
 *    unauthorizedLCSClient               ( 53 ),
 *    positionMethodFailure               ( 54 ),
 *    unknownOrUnreachableLCSClient       ( 58 )}
 * ```
 */
export
type CauseForTerm = INTEGER;

/**
 * @summary CauseForTerm_normalRelease
 * @constant
 * @type {number}
 */
export
const CauseForTerm_normalRelease: CauseForTerm = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_normalRelease
 * @constant
 * @type {number}
 */
export
const normalRelease: CauseForTerm = CauseForTerm_normalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecord
 * @constant
 * @type {number}
 */
export
const CauseForTerm_partialRecord: CauseForTerm = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecord
 * @constant
 * @type {number}
 */
export
const partialRecord: CauseForTerm = CauseForTerm_partialRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecordCallReestablishment
 * @constant
 * @type {number}
 */
export
const CauseForTerm_partialRecordCallReestablishment: CauseForTerm = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_partialRecordCallReestablishment
 * @constant
 * @type {number}
 */
export
const partialRecordCallReestablishment: CauseForTerm = CauseForTerm_partialRecordCallReestablishment; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unsuccessfulCallAttempt
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unsuccessfulCallAttempt: CauseForTerm = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unsuccessfulCallAttempt
 * @constant
 * @type {number}
 */
export
const unsuccessfulCallAttempt: CauseForTerm = CauseForTerm_unsuccessfulCallAttempt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_abnormalRelease
 * @constant
 * @type {number}
 */
export
const CauseForTerm_abnormalRelease: CauseForTerm = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_abnormalRelease
 * @constant
 * @type {number}
 */
export
const abnormalRelease: CauseForTerm = CauseForTerm_abnormalRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const CauseForTerm_cAMELInitCallRelease: CauseForTerm = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_cAMELInitCallRelease
 * @constant
 * @type {number}
 */
export
const cAMELInitCallRelease: CauseForTerm = CauseForTerm_cAMELInitCallRelease; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unauthorizedRequestingNetwork: CauseForTerm = 52; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedRequestingNetwork
 * @constant
 * @type {number}
 */
export
const unauthorizedRequestingNetwork: CauseForTerm = CauseForTerm_unauthorizedRequestingNetwork; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unauthorizedLCSClient: CauseForTerm = 53; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unauthorizedLCSClient
 * @constant
 * @type {number}
 */
export
const unauthorizedLCSClient: CauseForTerm = CauseForTerm_unauthorizedLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const CauseForTerm_positionMethodFailure: CauseForTerm = 54; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_positionMethodFailure
 * @constant
 * @type {number}
 */
export
const positionMethodFailure: CauseForTerm = CauseForTerm_positionMethodFailure; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const CauseForTerm_unknownOrUnreachableLCSClient: CauseForTerm = 58; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CauseForTerm_unknownOrUnreachableLCSClient
 * @constant
 * @type {number}
 */
export
const unknownOrUnreachableLCSClient: CauseForTerm = CauseForTerm_unknownOrUnreachableLCSClient; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CauseForTerm: $.ASN1Decoder<CauseForTerm> = $._decodeInteger;

export
const _encode_CauseForTerm: $.ASN1Encoder<CauseForTerm> = $._encodeInteger;

/* eslint-enable */
