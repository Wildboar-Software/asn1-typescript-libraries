/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ApplicationIdentifier
 * @description
 * 
 * Service type requested by BIND. For the RAF service in this book the value is
 * `rtnAllFrames`. Annex A2.2 also assigns numbers for other SLE service types.
 * Section 3 defines only 'Rtn All Frames'.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.7 and annex A2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplicationIdentifier       ::=     INTEGER
 * { rtnAllFrames                (0)
 * , rtnInsert                   (1)
 * , rtnChFrames                 (2)
 * -- rtnChFrames includes rtnMcFrames and rtnVcFrames
 * , rtnChFsh                    (3)
 * -- rtnChFsh includes rtnMcFsh and rtnVcFsh
 * , rtnChOcf                    (4)
 * -- rtnChOcf includes rtnMcOcf and rtnVcOcf
 * , rtnBitstr                   (5)    -- AOS
 * , rtnSpacePkt                 (6)
 * , fwdAosSpacePkt              (7)
 * , fwdAosVca                   (8)
 * , fwdBitstr                   (9)
 * , fwdProtoVcdu                (10)
 * , fwdInsert                   (11)
 * , fwdCVcdu                    (12)
 * , fwdTcSpacePkt               (13) -- conventional telecommand
 * , fwdTcVca                    (14) -- conventional telecommand
 * , fwdTcFrame                  (15)
 * , fwdCltu                     (16)
 * }
 * ```
 */
export
type ApplicationIdentifier = INTEGER;

/**
 * @summary ApplicationIdentifier_rtnAllFrames
 * @description
 * 
 * RAF service type 'Rtn All Frames'. For RAF-BIND this is the only valid
 * service-type.
 * 
 * CCSDS 911.1-B-5, section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnAllFrames: 0 = 0 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnAllFrames
 * @description
 * 
 * RAF service type 'Rtn All Frames', the only valid RAF-BIND service-type
 * (CCSDS 911.1-B-5, section 3.2.2.7).
 * @constant
 * @type {number}
 */
export
const rtnAllFrames: 0 = ApplicationIdentifier_rtnAllFrames; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnInsert
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnInsert: 1 = 1 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnInsert
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const rtnInsert: 1 = ApplicationIdentifier_rtnInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFrames
 * @description
 * 
 * Annex A2.2 assigns this number and states that rtnChFrames includes
 * rtnMcFrames and rtnVcFrames. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnChFrames: 2 = 2 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFrames
 * @description
 * 
 * Annex A2.2 assigns this number and states that rtnChFrames includes
 * rtnMcFrames and rtnVcFrames. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const rtnChFrames: 2 = ApplicationIdentifier_rtnChFrames; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFsh
 * @description
 * 
 * Annex A2.2 assigns this number and states that rtnChFsh includes rtnMcFsh and
 * rtnVcFsh. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnChFsh: 3 = 3 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChFsh
 * @description
 * 
 * Annex A2.2 assigns this number and states that rtnChFsh includes rtnMcFsh and
 * rtnVcFsh. Section 3 does not define this service type (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const rtnChFsh: 3 = ApplicationIdentifier_rtnChFsh; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChOcf
 * @description
 * 
 * Annex A2.2 assigns this number and states that rtnChOcf includes rtnMcOcf and
 * rtnVcOcf. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnChOcf: 4 = 4 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnChOcf
 * @description
 * 
 * Annex A2.2 assigns this number and states that rtnChOcf includes rtnMcOcf and
 * rtnVcOcf. Section 3 does not define this service type (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const rtnChOcf: 4 = ApplicationIdentifier_rtnChOcf; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnBitstr
 * @description
 * 
 * Annex A2.2 assigns this number and annotates it "AOS". Section 3 does not
 * define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnBitstr: 5 = 5 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnBitstr
 * @description
 * 
 * Annex A2.2 assigns this number and annotates it "AOS". Section 3 does not
 * define this service type (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const rtnBitstr: 5 = ApplicationIdentifier_rtnBitstr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnSpacePkt
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_rtnSpacePkt: 6 = 6 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_rtnSpacePkt
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const rtnSpacePkt: 6 = ApplicationIdentifier_rtnSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosSpacePkt
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdAosSpacePkt: 7 = 7 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosSpacePkt
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdAosSpacePkt: 7 = ApplicationIdentifier_fwdAosSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosVca
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdAosVca: 8 = 8 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdAosVca
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdAosVca: 8 = ApplicationIdentifier_fwdAosVca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdBitstr
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdBitstr: 9 = 9 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdBitstr
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdBitstr: 9 = ApplicationIdentifier_fwdBitstr; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdProtoVcdu
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdProtoVcdu: 10 = 10 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdProtoVcdu
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdProtoVcdu: 10 = ApplicationIdentifier_fwdProtoVcdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdInsert
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdInsert: 11 = 11 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdInsert
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdInsert: 11 = ApplicationIdentifier_fwdInsert; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCVcdu
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdCVcdu: 12 = 12 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCVcdu
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdCVcdu: 12 = ApplicationIdentifier_fwdCVcdu; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcSpacePkt
 * @description
 * 
 * Annex A2.2 assigns this number and annotates it "conventional telecommand".
 * Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdTcSpacePkt: 13 = 13 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcSpacePkt
 * @description
 * 
 * Annex A2.2 assigns this number and annotates it "conventional telecommand".
 * Section 3 does not define this service type (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdTcSpacePkt: 13 = ApplicationIdentifier_fwdTcSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcVca
 * @description
 * 
 * Annex A2.2 assigns this number and annotates it "conventional telecommand".
 * Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdTcVca: 14 = 14 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcVca
 * @description
 * 
 * Annex A2.2 assigns this number and annotates it "conventional telecommand".
 * Section 3 does not define this service type (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdTcVca: 14 = ApplicationIdentifier_fwdTcVca; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcFrame
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdTcFrame: 15 = 15 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdTcFrame
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdTcFrame: 15 = ApplicationIdentifier_fwdTcFrame; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCltu
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type.
 * 
 * CCSDS 911.1-B-5, annex A2.2 and section 3.2.2.7.
 * @constant
 * @type {number}
 */
export
const ApplicationIdentifier_fwdCltu: 16 = 16 satisfies ApplicationIdentifier; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ApplicationIdentifier_fwdCltu
 * @description
 * 
 * Annex A2.2 assigns this number. Section 3 does not define this service type
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const fwdCltu: 16 = ApplicationIdentifier_fwdCltu; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ApplicationIdentifier: $.ASN1Decoder<ApplicationIdentifier> = $._decodeInteger;
export const _encode_ApplicationIdentifier: $.ASN1Encoder<ApplicationIdentifier> = $._encodeInteger;


/* eslint-enable */
