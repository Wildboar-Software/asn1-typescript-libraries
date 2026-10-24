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
const ApplicationIdentifier_rtnAllFrames: ApplicationIdentifier = 0; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnAllFrames: ApplicationIdentifier = ApplicationIdentifier_rtnAllFrames; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_rtnInsert: ApplicationIdentifier = 1; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnInsert: ApplicationIdentifier = ApplicationIdentifier_rtnInsert; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_rtnChFrames: ApplicationIdentifier = 2; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnChFrames: ApplicationIdentifier = ApplicationIdentifier_rtnChFrames; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_rtnChFsh: ApplicationIdentifier = 3; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnChFsh: ApplicationIdentifier = ApplicationIdentifier_rtnChFsh; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_rtnChOcf: ApplicationIdentifier = 4; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnChOcf: ApplicationIdentifier = ApplicationIdentifier_rtnChOcf; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_rtnBitstr: ApplicationIdentifier = 5; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnBitstr: ApplicationIdentifier = ApplicationIdentifier_rtnBitstr; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_rtnSpacePkt: ApplicationIdentifier = 6; /* LONG_NAMED_INTEGER_VALUE */

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
const rtnSpacePkt: ApplicationIdentifier = ApplicationIdentifier_rtnSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdAosSpacePkt: ApplicationIdentifier = 7; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdAosSpacePkt: ApplicationIdentifier = ApplicationIdentifier_fwdAosSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdAosVca: ApplicationIdentifier = 8; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdAosVca: ApplicationIdentifier = ApplicationIdentifier_fwdAosVca; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdBitstr: ApplicationIdentifier = 9; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdBitstr: ApplicationIdentifier = ApplicationIdentifier_fwdBitstr; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdProtoVcdu: ApplicationIdentifier = 10; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdProtoVcdu: ApplicationIdentifier = ApplicationIdentifier_fwdProtoVcdu; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdInsert: ApplicationIdentifier = 11; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdInsert: ApplicationIdentifier = ApplicationIdentifier_fwdInsert; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdCVcdu: ApplicationIdentifier = 12; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdCVcdu: ApplicationIdentifier = ApplicationIdentifier_fwdCVcdu; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdTcSpacePkt: ApplicationIdentifier = 13; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdTcSpacePkt: ApplicationIdentifier = ApplicationIdentifier_fwdTcSpacePkt; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdTcVca: ApplicationIdentifier = 14; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdTcVca: ApplicationIdentifier = ApplicationIdentifier_fwdTcVca; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdTcFrame: ApplicationIdentifier = 15; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdTcFrame: ApplicationIdentifier = ApplicationIdentifier_fwdTcFrame; /* SHORT_NAMED_INTEGER_VALUE */

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
const ApplicationIdentifier_fwdCltu: ApplicationIdentifier = 16; /* LONG_NAMED_INTEGER_VALUE */

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
const fwdCltu: ApplicationIdentifier = ApplicationIdentifier_fwdCltu; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ApplicationIdentifier: $.ASN1Decoder<ApplicationIdentifier> = $._decodeInteger;
export const _encode_ApplicationIdentifier: $.ASN1Encoder<ApplicationIdentifier> = $._encodeInteger;


/* eslint-enable */
