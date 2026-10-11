/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_StreamMode {
    /**
     * Media passes from inside the context to the outside. Received media is
     * not passed into the context (clause 7.1.7.1.1).
     */
    sendOnly = 0,
    /**
     * Media passes from outside the context to the inside. The termination does
     * not send media out (clause 7.1.7.1.1).
     */
    recvOnly = 1,
    /**
     * Media passes both into and out of the context (clause 7.1.7.1.1).
     */
    sendRecv = 2,
    /**
     * No media passes for this stream. This is the default. Signals and events
     * are unaffected (clause 7.1.7).
     */
    inactive = 3,
    /**
     * Media received on the termination is sent back toward the sender, using
     * the Remote descriptor. Nothing is passed between this termination and the
     * others in the context (clause 7.1.7).
     */
    loopBack = 4,
}

/**
 * @summary StreamMode
 * @description
 * 
 * Mode property of LocalControl, also called StreamMode in the encodings (ITU-T
 * Rec. H.248.1 (03/2013) clause 7.1.7.1.1).
 *
 * Directions are relative to the outside of the context. SendOnly does not pass
 * received media into the context. LoopBack returns received media toward the
 * sender, encoded as the Remote descriptor specifies, and passes nothing to
 * other terminations. The default is Inactive. The property governs media flow,
 * not an associated control flow such as RTCP beside RTP.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StreamMode  ::=  ENUMERATED
 *     {
 *         sendOnly(0),
 *         recvOnly(1),
 *         sendRecv(2),
 *         inactive(3),
 *         loopBack(4),
 *         ...
 *     }
 * ```
 * 
 * @enum {number}
 */
export
type StreamMode = _enum_for_StreamMode | ENUMERATED;

/**
 * @summary StreamMode_sendOnly
 * @description
 *
 * Media passes from inside the context to the outside. Received media is not
 * passed into the context (clause 7.1.7.1.1).
 *
 * @constant
 * @type {number}
 */
export
const StreamMode_sendOnly: StreamMode = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sendOnly
 * @constant
 * @type {number}
 */
export
const sendOnly: StreamMode = StreamMode_sendOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_recvOnly
 * @description
 *
 * Media passes from outside the context to the inside. The termination does not
 * send media out (clause 7.1.7.1.1).
 *
 * @constant
 * @type {number}
 */
export
const StreamMode_recvOnly: StreamMode = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recvOnly
 * @constant
 * @type {number}
 */
export
const recvOnly: StreamMode = StreamMode_recvOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_sendRecv
 * @description
 *
 * Media passes both into and out of the context (clause 7.1.7.1.1).
 *
 * @constant
 * @type {number}
 */
export
const StreamMode_sendRecv: StreamMode = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sendRecv
 * @constant
 * @type {number}
 */
export
const sendRecv: StreamMode = StreamMode_sendRecv; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_inactive
 * @description
 *
 * No media passes for this stream. This is the default. Signals and events are
 * unaffected (clause 7.1.7).
 *
 * @constant
 * @type {number}
 */
export
const StreamMode_inactive: StreamMode = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: StreamMode = StreamMode_inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary StreamMode_loopBack
 * @description
 *
 * Media received on the termination is sent back toward the sender, using the
 * Remote descriptor. Nothing is passed between this termination and the others
 * in the context (clause 7.1.7).
 *
 * @constant
 * @type {number}
 */
export
const StreamMode_loopBack: StreamMode = 4; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loopBack
 * @constant
 * @type {number}
 */
export
const loopBack: StreamMode = StreamMode_loopBack; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StreamMode = $._decodeEnumerated;
export const _encode_StreamMode = $._encodeEnumerated;


/* eslint-enable */
