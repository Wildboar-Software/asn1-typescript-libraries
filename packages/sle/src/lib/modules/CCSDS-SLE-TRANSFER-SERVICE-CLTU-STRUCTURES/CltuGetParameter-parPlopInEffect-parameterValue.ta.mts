/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue
 * @description
 * 
 * Physical Layer Operations Procedure in use for CLTU radiation. plop1 is 0 and
 * plop2 is 1. Modulation of acquisition and idle sequences is under service
 * management. CCSDS 912.1-B-5, table 3-11, section 3.6.2.8, and section 2.7.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuGetParameter-parPlopInEffect-parameterValue ::= INTEGER
 *       {  plop1                                  (0)
 *       ,  plop2                                  (1)
 *       }
 * ```
 */
export
type CltuGetParameter_parPlopInEffect_parameterValue = INTEGER;

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop1
 * @description
 *
 * PLOP-1 is in effect. The carrier starts unmodulated (CMM-1). Each CLTU is
 * preceded by an acquisition sequence and, when configured, a leading idle
 * sequence, then the CLTU, then an optional trailing idle sequence. The carrier
 * then stays free of CLTU-related modulation until delay-time expires, the next
 * CLTU is ready, or the session ends. CCSDS 912.1-B-5, table 3-11 and section
 * 3.6.2.8.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parPlopInEffect_parameterValue_plop1: CltuGetParameter_parPlopInEffect_parameterValue = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop1
 * @description
 *
 * PLOP-1: acquisition and optional idle around each CLTU, then an unmodulated
 * carrier for delay-time (CCSDS 912.1-B-5, section 3.6.2.8).
 * @constant
 * @type {number}
 */
export
const plop1: CltuGetParameter_parPlopInEffect_parameterValue = CltuGetParameter_parPlopInEffect_parameterValue_plop1; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop2
 * @description
 *
 * PLOP-2 is in effect. After the uplink sweep and one acquisition sequence, an
 * idle sequence of no fixed length runs continuously and each CLTU is inserted
 * into it. delay-time is measured from the trailing edge of the CLTU. The book
 * notes that reference [2] ends PLOP-2 with a return to an unmodulated carrier,
 * and that no standard signal selects that moment. CCSDS 912.1-B-5, table 3-11
 * and section 3.6.2.8.
 * @constant
 * @type {number}
 */
export
const CltuGetParameter_parPlopInEffect_parameterValue_plop2: CltuGetParameter_parPlopInEffect_parameterValue = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CltuGetParameter_parPlopInEffect_parameterValue_plop2
 * @description
 *
 * PLOP-2: one acquisition sequence, then idle with CLTUs inserted (CCSDS
 * 912.1-B-5, section 3.6.2.8).
 * @constant
 * @type {number}
 */
export
const plop2: CltuGetParameter_parPlopInEffect_parameterValue = CltuGetParameter_parPlopInEffect_parameterValue_plop2; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_CltuGetParameter_parPlopInEffect_parameterValue: $.ASN1Decoder<CltuGetParameter_parPlopInEffect_parameterValue> = $._decodeInteger;
export const _encode_CltuGetParameter_parPlopInEffect_parameterValue: $.ASN1Encoder<CltuGetParameter_parPlopInEffect_parameterValue> = $._encodeInteger;


/* eslint-enable */
