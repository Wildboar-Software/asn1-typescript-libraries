/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TransmissionMode
 * @description
 * 
 * Transmission mode requested for one Space Packet. Sequence-controlled service
 * gives a high probability of complete delivery, with no duplication and no
 * delivery out of sequence. Expedited service delivers Packets in the specified
 * sequence and does not guarantee complete delivery. Forward offline delivery
 * is not defined in this issue. The permitted mode for an instance is a
 * separate managed parameter.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.9, 3.1.8.1.5, and 3.1.8.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TransmissionMode         ::=    INTEGER
 * {  sequenceControlled         (0)   -- AD mode
 * ,  expedited                  (1)   -- BD mode
 * ,  sequenceControlledUnblock  (2)   -- AD mode with unblocking
 * }
 * ```
 */
export
type TransmissionMode = INTEGER;

/**
 * @summary TransmissionMode_sequenceControlled
 * @description
 * 
 * Sequence-controlled (AD) transmission. The Packet is delivered with a high
 * probability of completeness, without duplication, and in sequence.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.9 and 3.1.8.1.5.
 * @constant
 * @type {number}
 */
export
const TransmissionMode_sequenceControlled = 0 satisfies TransmissionMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlled
 * @description
 * 
 * Sequence-controlled (AD) transmission (CCSDS 912.3-B-3, section 3.6.2.9).
 * @constant
 * @type {number}
 */
export
const sequenceControlled = TransmissionMode_sequenceControlled satisfies TransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_expedited
 * @description
 * 
 * Expedited (BD) transmission. Packets are delivered in the specified sequence.
 * Complete delivery is not guaranteed.
 * 
 * CCSDS 912.3-B-3, sections 3.6.2.9 and 3.1.8.1.5.
 * @constant
 * @type {number}
 */
export
const TransmissionMode_expedited = 1 satisfies TransmissionMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_expedited
 * @description
 * 
 * Expedited (BD) transmission (CCSDS 912.3-B-3, section 3.6.2.9).
 * @constant
 * @type {number}
 */
export
const expedited = TransmissionMode_expedited satisfies TransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlledUnblock
 * @description
 * 
 * Unblock AD mode and transmit this Packet in sequence-controlled (AD) mode.
 * Accepted only while AD mode is blocked. Accepting it unblocks AD mode.
 * 
 * CCSDS 912.3-B-3, section 3.6.2.9.
 * @constant
 * @type {number}
 */
export
const TransmissionMode_sequenceControlledUnblock = 2 satisfies TransmissionMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TransmissionMode_sequenceControlledUnblock
 * @description
 * 
 * Unblock AD mode and transmit this Packet in AD mode (CCSDS 912.3-B-3, section
 * 3.6.2.9).
 * @constant
 * @type {number}
 */
export
const sequenceControlledUnblock = TransmissionMode_sequenceControlledUnblock satisfies TransmissionMode; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_TransmissionMode: $.ASN1Decoder<TransmissionMode> = $._decodeInteger;
export const _encode_TransmissionMode: $.ASN1Encoder<TransmissionMode> = $._encodeInteger;


/* eslint-enable */
