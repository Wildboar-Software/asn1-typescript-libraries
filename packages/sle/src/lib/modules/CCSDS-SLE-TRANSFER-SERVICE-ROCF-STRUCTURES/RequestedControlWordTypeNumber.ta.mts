/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RequestedControlWordTypeNumber
 * @description
 * 
 * Integer form of the control word type, used when reporting the permitted set
 * and the requested type. The ROCF-START invocation itself uses
 * ControlWordType, whose clcw alternative also carries the telecommand VC. 0
 * delivers every control word, 1 delivers CLCWs (control word type 0), and 2
 * delivers control word type 1, the setting used to obtain Frame Security
 * Reports.
 *
 * CCSDS 911.5-B-4, section 3.4.2.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestedControlWordTypeNumber    ::=    INTEGER
 * {  allControlWords                        (0)
 * ,  clcw                                   (1)
 * ,  notClcw                                (2)
 * }
 * ```
 */
export
type RequestedControlWordTypeNumber = INTEGER;

/**
 * @summary RequestedControlWordTypeNumber_allControlWords
 * @description
 * 
 * Deliver every OCF from the selected channel, whatever control word it
 * contains. CCSDS 911.5-B-4, section 3.4.2.8.
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_allControlWords = 0 satisfies RequestedControlWordTypeNumber; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_allControlWords
 * @description
 * 
 * Every control word type on the selected channel is delivered (CCSDS
 * 911.5-B-4, section 3.4.2.8).
 * @constant
 * @type {number}
 */
export
const allControlWords = RequestedControlWordTypeNumber_allControlWords satisfies RequestedControlWordTypeNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_clcw
 * @description
 * 
 * Deliver OCFs whose control word type is 0, a Communications Link Control
 * Word. CCSDS 911.5-B-4, section 3.4.2.8.
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_clcw = 1 satisfies RequestedControlWordTypeNumber; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_clcw
 * @description
 * 
 * Deliver CLCW reports, control word type 0 (CCSDS 911.5-B-4, section
 * 3.4.2.8).
 * @constant
 * @type {number}
 */
export
const clcw = RequestedControlWordTypeNumber_clcw satisfies RequestedControlWordTypeNumber; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_notClcw
 * @description
 * 
 * Deliver OCFs whose control word type is 1. Section 3.4.2.8 says this is the
 * setting used to obtain Frame Security Reports. CCSDS 911.5-B-4, section
 * 3.4.2.8.
 * @constant
 * @type {number}
 */
export
const RequestedControlWordTypeNumber_notClcw = 2 satisfies RequestedControlWordTypeNumber; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RequestedControlWordTypeNumber_notClcw
 * @description
 * 
 * Deliver control word type 1, the setting used to obtain Frame Security
 * Reports (CCSDS 911.5-B-4, section 3.4.2.8).
 * @constant
 * @type {number}
 */
export
const notClcw = RequestedControlWordTypeNumber_notClcw satisfies RequestedControlWordTypeNumber; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_RequestedControlWordTypeNumber: $.ASN1Decoder<RequestedControlWordTypeNumber> = $._decodeInteger;
export const _encode_RequestedControlWordTypeNumber: $.ASN1Encoder<RequestedControlWordTypeNumber> = $._encodeInteger;


/* eslint-enable */
