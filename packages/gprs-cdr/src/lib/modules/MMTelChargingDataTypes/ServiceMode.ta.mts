/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceMode
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceMode  ::=  INTEGER {
 *    cFunCond           ( 0 ),
 *    cFbusy             ( 1 ),
 *    cFnoReply          ( 2 ),
 *    cFnotLogged        ( 3 ),
 *    deflection         ( 4 ),
 *    notReach           ( 5 ),
 *    iCBarring          ( 6 ),
 *    oCBarring          ( 7 ),
 *    aCRejection        ( 8 ),
 *    eCTBlind           ( 9 ),
 *    eCTConsultative    ( 10 ),
 *    threePTY           ( 11 ),
 *    aoC-S              ( 12 ),
 *    aoC-D              ( 13 ),
 *    aoC-E              ( 14 )}
 * ```
 */
export
type ServiceMode = INTEGER;

/**
 * @summary ServiceMode_cFunCond
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFunCond: ServiceMode = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFunCond
 * @constant
 * @type {number}
 */
export
const cFunCond: ServiceMode = ServiceMode_cFunCond; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFbusy
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFbusy: ServiceMode = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFbusy
 * @constant
 * @type {number}
 */
export
const cFbusy: ServiceMode = ServiceMode_cFbusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFnoReply
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFnoReply: ServiceMode = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFnoReply
 * @constant
 * @type {number}
 */
export
const cFnoReply: ServiceMode = ServiceMode_cFnoReply; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFnotLogged
 * @constant
 * @type {number}
 */
export
const ServiceMode_cFnotLogged: ServiceMode = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_cFnotLogged
 * @constant
 * @type {number}
 */
export
const cFnotLogged: ServiceMode = ServiceMode_cFnotLogged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_deflection
 * @constant
 * @type {number}
 */
export
const ServiceMode_deflection: ServiceMode = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_deflection
 * @constant
 * @type {number}
 */
export
const deflection: ServiceMode = ServiceMode_deflection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_notReach
 * @constant
 * @type {number}
 */
export
const ServiceMode_notReach: ServiceMode = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_notReach
 * @constant
 * @type {number}
 */
export
const notReach: ServiceMode = ServiceMode_notReach; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_iCBarring
 * @constant
 * @type {number}
 */
export
const ServiceMode_iCBarring: ServiceMode = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_iCBarring
 * @constant
 * @type {number}
 */
export
const iCBarring: ServiceMode = ServiceMode_iCBarring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_oCBarring
 * @constant
 * @type {number}
 */
export
const ServiceMode_oCBarring: ServiceMode = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_oCBarring
 * @constant
 * @type {number}
 */
export
const oCBarring: ServiceMode = ServiceMode_oCBarring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aCRejection
 * @constant
 * @type {number}
 */
export
const ServiceMode_aCRejection: ServiceMode = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aCRejection
 * @constant
 * @type {number}
 */
export
const aCRejection: ServiceMode = ServiceMode_aCRejection; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_eCTBlind
 * @constant
 * @type {number}
 */
export
const ServiceMode_eCTBlind: ServiceMode = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_eCTBlind
 * @constant
 * @type {number}
 */
export
const eCTBlind: ServiceMode = ServiceMode_eCTBlind; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_eCTConsultative
 * @constant
 * @type {number}
 */
export
const ServiceMode_eCTConsultative: ServiceMode = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_eCTConsultative
 * @constant
 * @type {number}
 */
export
const eCTConsultative: ServiceMode = ServiceMode_eCTConsultative; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_threePTY
 * @constant
 * @type {number}
 */
export
const ServiceMode_threePTY: ServiceMode = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_threePTY
 * @constant
 * @type {number}
 */
export
const threePTY: ServiceMode = ServiceMode_threePTY; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_S
 * @constant
 * @type {number}
 */
export
const ServiceMode_aoC_S: ServiceMode = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_S
 * @constant
 * @type {number}
 */
export
const aoC_S: ServiceMode = ServiceMode_aoC_S; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_D
 * @constant
 * @type {number}
 */
export
const ServiceMode_aoC_D: ServiceMode = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_D
 * @constant
 * @type {number}
 */
export
const aoC_D: ServiceMode = ServiceMode_aoC_D; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_E
 * @constant
 * @type {number}
 */
export
const ServiceMode_aoC_E: ServiceMode = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceMode_aoC_E
 * @constant
 * @type {number}
 */
export
const aoC_E: ServiceMode = ServiceMode_aoC_E; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ServiceMode: $.ASN1Decoder<ServiceMode> = $._decodeInteger;

export
const _encode_ServiceMode: $.ASN1Encoder<ServiceMode> = $._encodeInteger;

/* eslint-enable */
