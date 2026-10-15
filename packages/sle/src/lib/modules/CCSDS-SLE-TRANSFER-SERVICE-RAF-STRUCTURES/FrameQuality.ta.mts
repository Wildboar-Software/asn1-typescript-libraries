/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FrameQuality
 * @description
 * 
 * Annotation of one delivered frame after Reed-Solomon or LDPC decoding, Frame
 * Error Control Field evaluation, or the USLP Frame Validation Check Procedure.
 * At any one time the coding, and for telemetry frames the frame length, is the
 * same for every frame on the physical channel. Which coding and length are in
 * use is managed information, known before the frames arrive.
 * 
 * CCSDS 911.1-B-5, sections 3.6.2.6, 2.4.1, 2.4.2, and 1.3.2.2.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FrameQuality                  ::=  INTEGER
 * {   good                              (0)
 * ,   erred                             (1)
 * ,   undetermined                      (2)
 * }
 * ```
 */
export
type FrameQuality = INTEGER;

/**
 * @summary FrameQuality_good
 * @description
 * 
 * The frame passed the applicable check. For Reed-Solomon or LDPC, every
 * codeword is valid after decoding, including Reed-Solomon used as the outer
 * code of a concatenated scheme. For any other frame, the Frame Error Control
 * Field indicates no errors. A USLP frame passed CCSDS 732.1-B-2 subsection
 * 4.3.10.3. Subsection 4.3.10.3.4 c) is outside RAF production. A good
 * Reed-Solomon frame is delivered with its check symbols removed.
 * 
 * CCSDS 911.1-B-5, sections 3.6.2.6, 2.4.1, and 2.4.2.
 * @constant
 * @type {number}
 */
export
const FrameQuality_good: FrameQuality = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_good
 * @description
 * 
 * The frame passed the applicable codeword, FECF, or USLP validation check
 * (CCSDS 911.1-B-5, section 3.6.2.6).
 * @constant
 * @type {number}
 */
export
const good: FrameQuality = FrameQuality_good; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_erred
 * @description
 * 
 * The frame failed the applicable check. A Reed-Solomon or LDPC frame contains
 * at least one invalid codeword after decoding. A frame that is neither has a
 * Frame Error Control Field that indicates at least one error. At least one
 * included USLP validation check failed. An erred Reed-Solomon frame is
 * delivered as the unmodified decoder input, check symbols included.
 * 
 * CCSDS 911.1-B-5, sections 3.6.2.6, 2.4.1, and 3.6.2.8.
 * @constant
 * @type {number}
 */
export
const FrameQuality_erred: FrameQuality = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_erred
 * @description
 * 
 * The frame failed the applicable codeword, FECF, or USLP validation check
 * (CCSDS 911.1-B-5, section 3.6.2.6).
 * @constant
 * @type {number}
 */
export
const erred: FrameQuality = FrameQuality_erred; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_undetermined
 * @description
 * 
 * The decoding result is unspecified. Decoding may have been skipped, a
 * non-standard decoding may have been used, or the results are withheld. The
 * exact meaning is implementation dependent. RAF-START delivers this quality
 * only when the requested frame quality is `allFrames`.
 * 
 * CCSDS 911.1-B-5, section 3.6.2.6.
 * @constant
 * @type {number}
 */
export
const FrameQuality_undetermined: FrameQuality = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary FrameQuality_undetermined
 * @description
 * 
 * Decoding result unspecified and implementation dependent; delivered only for
 * `allFrames` (CCSDS 911.1-B-5, section 3.6.2.6).
 * @constant
 * @type {number}
 */
export
const undetermined: FrameQuality = FrameQuality_undetermined; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_FrameQuality: $.ASN1Decoder<FrameQuality> = $._decodeInteger;
export const _encode_FrameQuality: $.ASN1Encoder<FrameQuality> = $._encodeInteger;


/* eslint-enable */
