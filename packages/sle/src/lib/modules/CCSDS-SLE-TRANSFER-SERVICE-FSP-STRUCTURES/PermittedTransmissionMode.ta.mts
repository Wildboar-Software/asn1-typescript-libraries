/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PermittedTransmissionMode
 * @description
 * 
 * Transmission modes service management permits for one service instance:
 * sequence-controlled, expedited, or any. A transfer that requests a mode
 * outside this permission is rejected with `invalidTransmissionMode`.
 * 
 * CCSDS 912.3-B-3, sections 3.10.2.5 (table 3-11) and 3.6.2.18.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PermittedTransmissionMode   ::=    INTEGER
 * {  sequenceControlled               (0)
 * ,  expedited                        (1)
 * ,  any                              (2)
 * }
 * ```
 */
export
type PermittedTransmissionMode = INTEGER;

/**
 * @summary PermittedTransmissionMode_sequenceControlled
 * @description
 * 
 * Only sequence-controlled (AD) transmission is permitted for the service
 * instance.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11).
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_sequenceControlled: 0 = 0 satisfies PermittedTransmissionMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_sequenceControlled
 * @description
 * 
 * Only sequence-controlled transmission is permitted (CCSDS 912.3-B-3, table
 * 3-11).
 * @constant
 * @type {number}
 */
export
const sequenceControlled: 0 = PermittedTransmissionMode_sequenceControlled; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_expedited
 * @description
 * 
 * Only expedited (BD) transmission is permitted for the service instance.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11).
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_expedited: 1 = 1 satisfies PermittedTransmissionMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_expedited
 * @description
 * 
 * Only expedited transmission is permitted (CCSDS 912.3-B-3, table 3-11).
 * @constant
 * @type {number}
 */
export
const expedited: 1 = PermittedTransmissionMode_expedited; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_any_
 * @description
 * 
 * The service instance may use sequence-controlled or expedited transmission.
 * Annex A names this value `any`.
 * 
 * CCSDS 912.3-B-3, section 3.10.2.5 (table 3-11) and annex A2.5.
 * @constant
 * @type {number}
 */
export
const PermittedTransmissionMode_any_: 2 = 2 satisfies PermittedTransmissionMode; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary PermittedTransmissionMode_any_
 * @description
 * 
 * Sequence-controlled or expedited transmission is permitted (CCSDS 912.3-B-3,
 * table 3-11).
 * @constant
 * @type {number}
 */
export
const any_: 2 = PermittedTransmissionMode_any_; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_PermittedTransmissionMode: $.ASN1Decoder<PermittedTransmissionMode> = $._decodeInteger;
export const _encode_PermittedTransmissionMode: $.ASN1Encoder<PermittedTransmissionMode> = $._encodeInteger;


/* eslint-enable */
