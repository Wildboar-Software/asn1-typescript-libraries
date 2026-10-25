/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ForwardDuStatus
 * @description
 * 
 * Status of a forward data unit. Annex A2.1 names the numbers and annotates
 * some of them as FSP or CLTU. Section 3 does not define the condition that
 * produces any of these codes.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardDuStatus         ::=     INTEGER
 * { radiated                       (0)
 * , expired                        (1)
 * , interrupted                    (2)
 * , acknowledged                   (3)     -- FSP
 * , productionStarted              (4)     -- CLTU: 'radiation started'
 * , productionNotStarted           (5)     -- CLTU: 'radiation not started'
 * , unsupportedTransmissionMode    (6)     -- FSP
 * }
 * ```
 */
export
type ForwardDuStatus = INTEGER;

/**
 * @summary ForwardDuStatus_radiated
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_radiated: 0 = 0 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_radiated
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * produces it (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const radiated: 0 = ForwardDuStatus_radiated; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_expired
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_expired: 1 = 1 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_expired
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * produces it (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const expired: 1 = ForwardDuStatus_expired; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_interrupted
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_interrupted: 2 = 2 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_interrupted
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * produces it (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const interrupted: 2 = ForwardDuStatus_interrupted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_acknowledged
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it "FSP". Section 3 does not
 * define the condition that produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_acknowledged: 3 = 3 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_acknowledged
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it "FSP". Section 3 does not
 * define the condition (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const acknowledged: 3 = ForwardDuStatus_acknowledged; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionStarted
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it CLTU: 'radiation started'.
 * Section 3 does not define the condition that produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_productionStarted: 4 = 4 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionStarted
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it CLTU: 'radiation started'.
 * Section 3 does not define the condition (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const productionStarted: 4 = ForwardDuStatus_productionStarted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionNotStarted
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it CLTU: 'radiation not
 * started'. Section 3 does not define the condition that produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_productionNotStarted: 5 = 5 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_productionNotStarted
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it CLTU: 'radiation not
 * started'. Section 3 does not define the condition (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const productionNotStarted: 5 = ForwardDuStatus_productionNotStarted; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_unsupportedTransmissionMode
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it "FSP". Section 3 does not
 * define the condition that produces it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const ForwardDuStatus_unsupportedTransmissionMode: 6 = 6 satisfies ForwardDuStatus; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ForwardDuStatus_unsupportedTransmissionMode
 * @description
 * 
 * Annex A2.1 assigns this number and annotates it "FSP". Section 3 does not
 * define the condition (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const unsupportedTransmissionMode: 6 = ForwardDuStatus_unsupportedTransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ForwardDuStatus: $.ASN1Decoder<ForwardDuStatus> = $._decodeInteger;
export const _encode_ForwardDuStatus: $.ASN1Encoder<ForwardDuStatus> = $._encodeInteger;


/* eslint-enable */
