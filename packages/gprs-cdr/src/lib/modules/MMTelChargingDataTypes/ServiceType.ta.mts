/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ServiceType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceType  ::=  INTEGER {
 *    oIPresentation      ( 0 ),
 *    oIRestriction       ( 1 ),
 *    tIPresentation      ( 2 ),
 *    tIRestriction       ( 3 ),
 *    hOLD                ( 4 ),
 *    cBarring            ( 5 ),
 *    cDIVersion          ( 6 ),
 *    cWaiting            ( 8 ),
 *    mWaitingIndic       ( 9 ),
 *    cONF                ( 10 ),
 *    fLexibleAlerting    ( 11 ),
 *    cCBS                ( 12 ),
 *    cCNR                ( 13 ),
 *    mCID                ( 14 ),
 *    cAT                 ( 15 ),
 *    cUG                 ( 16 ),
 *    pNM                 ( 17 ),
 *    cRS                 ( 18 ),
 *    aoC                 ( 19 ),
 *    eCT                 ( 20 )}
 * ```
 */
export
type ServiceType = INTEGER;

/**
 * @summary ServiceType_oIPresentation
 * @constant
 * @type {number}
 */
export
const ServiceType_oIPresentation: ServiceType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_oIPresentation
 * @constant
 * @type {number}
 */
export
const oIPresentation: ServiceType = ServiceType_oIPresentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_oIRestriction
 * @constant
 * @type {number}
 */
export
const ServiceType_oIRestriction: ServiceType = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_oIRestriction
 * @constant
 * @type {number}
 */
export
const oIRestriction: ServiceType = ServiceType_oIRestriction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_tIPresentation
 * @constant
 * @type {number}
 */
export
const ServiceType_tIPresentation: ServiceType = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_tIPresentation
 * @constant
 * @type {number}
 */
export
const tIPresentation: ServiceType = ServiceType_tIPresentation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_tIRestriction
 * @constant
 * @type {number}
 */
export
const ServiceType_tIRestriction: ServiceType = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_tIRestriction
 * @constant
 * @type {number}
 */
export
const tIRestriction: ServiceType = ServiceType_tIRestriction; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_hOLD
 * @constant
 * @type {number}
 */
export
const ServiceType_hOLD: ServiceType = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_hOLD
 * @constant
 * @type {number}
 */
export
const hOLD: ServiceType = ServiceType_hOLD; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cBarring
 * @constant
 * @type {number}
 */
export
const ServiceType_cBarring: ServiceType = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cBarring
 * @constant
 * @type {number}
 */
export
const cBarring: ServiceType = ServiceType_cBarring; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cDIVersion
 * @constant
 * @type {number}
 */
export
const ServiceType_cDIVersion: ServiceType = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cDIVersion
 * @constant
 * @type {number}
 */
export
const cDIVersion: ServiceType = ServiceType_cDIVersion; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cWaiting
 * @constant
 * @type {number}
 */
export
const ServiceType_cWaiting: ServiceType = 8; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cWaiting
 * @constant
 * @type {number}
 */
export
const cWaiting: ServiceType = ServiceType_cWaiting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_mWaitingIndic
 * @constant
 * @type {number}
 */
export
const ServiceType_mWaitingIndic: ServiceType = 9; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_mWaitingIndic
 * @constant
 * @type {number}
 */
export
const mWaitingIndic: ServiceType = ServiceType_mWaitingIndic; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cONF
 * @constant
 * @type {number}
 */
export
const ServiceType_cONF: ServiceType = 10; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cONF
 * @constant
 * @type {number}
 */
export
const cONF: ServiceType = ServiceType_cONF; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_fLexibleAlerting
 * @constant
 * @type {number}
 */
export
const ServiceType_fLexibleAlerting: ServiceType = 11; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_fLexibleAlerting
 * @constant
 * @type {number}
 */
export
const fLexibleAlerting: ServiceType = ServiceType_fLexibleAlerting; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cCBS
 * @constant
 * @type {number}
 */
export
const ServiceType_cCBS: ServiceType = 12; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cCBS
 * @constant
 * @type {number}
 */
export
const cCBS: ServiceType = ServiceType_cCBS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cCNR
 * @constant
 * @type {number}
 */
export
const ServiceType_cCNR: ServiceType = 13; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cCNR
 * @constant
 * @type {number}
 */
export
const cCNR: ServiceType = ServiceType_cCNR; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_mCID
 * @constant
 * @type {number}
 */
export
const ServiceType_mCID: ServiceType = 14; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_mCID
 * @constant
 * @type {number}
 */
export
const mCID: ServiceType = ServiceType_mCID; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cAT
 * @constant
 * @type {number}
 */
export
const ServiceType_cAT: ServiceType = 15; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cAT
 * @constant
 * @type {number}
 */
export
const cAT: ServiceType = ServiceType_cAT; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cUG
 * @constant
 * @type {number}
 */
export
const ServiceType_cUG: ServiceType = 16; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cUG
 * @constant
 * @type {number}
 */
export
const cUG: ServiceType = ServiceType_cUG; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_pNM
 * @constant
 * @type {number}
 */
export
const ServiceType_pNM: ServiceType = 17; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_pNM
 * @constant
 * @type {number}
 */
export
const pNM: ServiceType = ServiceType_pNM; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cRS
 * @constant
 * @type {number}
 */
export
const ServiceType_cRS: ServiceType = 18; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_cRS
 * @constant
 * @type {number}
 */
export
const cRS: ServiceType = ServiceType_cRS; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_aoC
 * @constant
 * @type {number}
 */
export
const ServiceType_aoC: ServiceType = 19; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_aoC
 * @constant
 * @type {number}
 */
export
const aoC: ServiceType = ServiceType_aoC; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_eCT
 * @constant
 * @type {number}
 */
export
const ServiceType_eCT: ServiceType = 20; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ServiceType_eCT
 * @constant
 * @type {number}
 */
export
const eCT: ServiceType = ServiceType_eCT; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_ServiceType: $.ASN1Decoder<ServiceType> = $._decodeInteger;

export
const _encode_ServiceType: $.ASN1Encoder<ServiceType> = $._encodeInteger;

/* eslint-enable */
