/* eslint-disable */
import {
    ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_StreamMode {
    sendOnly = 0,
    recvOnly = 1,
    sendRecv = 2,
    inactive = 3,
    loopBack = 4,
}

/**
 * @summary StreamMode
 * @description
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
