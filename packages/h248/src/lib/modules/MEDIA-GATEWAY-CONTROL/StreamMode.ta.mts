/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
const _enum_for_StreamMode = {
    /**
     * Media passes from inside the context to the outside. Received media is
     * not passed into the context (clause 7.1.7.1.1).
     */
    sendOnly: 0,
    /**
     * Media passes from outside the context to the inside. The termination does
     * not send media out (clause 7.1.7.1.1).
     */
    recvOnly: 1,
    /**
     * Media passes both into and out of the context (clause 7.1.7.1.1).
     */
    sendRecv: 2,
    /**
     * No media passes for this stream. This is the default. Signals and events
     * are unaffected (clause 7.1.7).
     */
    inactive: 3,
    /**
     * Media received on the termination is sent back toward the sender, using
     * the Remote descriptor. Nothing is passed between this termination and the
     * others in the context (clause 7.1.7).
     */
    loopBack: 4,
} as const;

export type _enum_for_StreamMode = (typeof _enum_for_StreamMode)[keyof typeof _enum_for_StreamMode];

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
const StreamMode_sendOnly: 0 = _enum_for_StreamMode.sendOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sendOnly
 * @constant
 * @type {number}
 */
export
const sendOnly: 0 = StreamMode_sendOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const StreamMode_recvOnly: 1 = _enum_for_StreamMode.recvOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary recvOnly
 * @constant
 * @type {number}
 */
export
const recvOnly: 1 = StreamMode_recvOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const StreamMode_sendRecv: 2 = _enum_for_StreamMode.sendRecv; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sendRecv
 * @constant
 * @type {number}
 */
export
const sendRecv: 2 = StreamMode_sendRecv; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const StreamMode_inactive: 3 = _enum_for_StreamMode.inactive; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary inactive
 * @constant
 * @type {number}
 */
export
const inactive: 3 = StreamMode_inactive; /* SHORT_NAMED_ENUMERATED_VALUE */

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
const StreamMode_loopBack: 4 = _enum_for_StreamMode.loopBack; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary loopBack
 * @constant
 * @type {number}
 */
export
const loopBack: 4 = StreamMode_loopBack; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_StreamMode: $.ASN1Decoder<StreamMode> = $._decodeEnumerated as $.ASN1Decoder<StreamMode>;
export const _encode_StreamMode: $.ASN1Encoder<StreamMode> = $._encodeEnumerated as $.ASN1Encoder<StreamMode>;


/* eslint-enable */
