/* eslint-disable */
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PTCFloorActivity
 * @description
 * 
 * Sequence of: a) "TBCP_Request": Received by the PTC server to request
 * permission for the PTC target or PTC participant to send a talk burst. b)
 * "TBCP_Granted": Used by the PTC server to notify the PTC target or PTC
 * participant that it has been granted permission to send a talk burst. c)
 * "TBCP_Deny": Used by the PTC server to notify a PTC target or PTC participant
 * that it has been denied permission to send a talk burst. d) "TBCP_Idle": Used
 * by the PTC server to notify the PTC target or PTC participant that no one has
 * the permission to send a Talk Burst at the moment and that it may accept the
 * TBCP talk burst request message. e) "TBCP_Taken": Used by the PTC server to
 * notify the PTC target or PTC participant that another PTC participant has
 * been given permission to send a talk burst. f) "TBCP_Revoke": Used by the PTC
 * server to revoke the media resource from the PTC target or PTC participant
 * and can be used for pre-emption functionality but is also used by the system
 * to prevent overly long use of the media resource. g) "TBCP_Queued": Indicates
 * the request to talk is queued, if queued floor control is supported. Include
 * identification of the PTC target or PTC participant that has the queued talk
 * burst, if known. h) "TBCP_Release": Indicates the request to talk has
 * completed.
 *
 * 3GPP TS 33.128, clause 7.5.2.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorActivity   ::=  ENUMERATED
 * {
 *     tBCPRequest(1),
 *     tBCPGranted(2),
 *     tBCPDeny(3),
 *     tBCPIdle(4),
 *     tBCPTaken(5),
 *     tBCPRevoke(6),
 *     tBCPQueued(7),
 *     tBCPRelease(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_PTCFloorActivity {
    tBCPRequest = 1,
    tBCPGranted = 2,
    tBCPDeny = 3,
    tBCPIdle = 4,
    tBCPTaken = 5,
    tBCPRevoke = 6,
    tBCPQueued = 7,
    tBCPRelease = 8,
}

/**
 * @summary PTCFloorActivity
 * @description
 * 
 * Sequence of: a) "TBCP_Request": Received by the PTC server to request
 * permission for the PTC target or PTC participant to send a talk burst. b)
 * "TBCP_Granted": Used by the PTC server to notify the PTC target or PTC
 * participant that it has been granted permission to send a talk burst. c)
 * "TBCP_Deny": Used by the PTC server to notify a PTC target or PTC participant
 * that it has been denied permission to send a talk burst. d) "TBCP_Idle": Used
 * by the PTC server to notify the PTC target or PTC participant that no one has
 * the permission to send a Talk Burst at the moment and that it may accept the
 * TBCP talk burst request message. e) "TBCP_Taken": Used by the PTC server to
 * notify the PTC target or PTC participant that another PTC participant has
 * been given permission to send a talk burst. f) "TBCP_Revoke": Used by the PTC
 * server to revoke the media resource from the PTC target or PTC participant
 * and can be used for pre-emption functionality but is also used by the system
 * to prevent overly long use of the media resource. g) "TBCP_Queued": Indicates
 * the request to talk is queued, if queued floor control is supported. Include
 * identification of the PTC target or PTC participant that has the queued talk
 * burst, if known. h) "TBCP_Release": Indicates the request to talk has
 * completed.
 *
 * 3GPP TS 33.128, clause 7.5.2.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorActivity   ::=  ENUMERATED
 * {
 *     tBCPRequest(1),
 *     tBCPGranted(2),
 *     tBCPDeny(3),
 *     tBCPIdle(4),
 *     tBCPTaken(5),
 *     tBCPRevoke(6),
 *     tBCPQueued(7),
 *     tBCPRelease(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type PTCFloorActivity = _enum_for_PTCFloorActivity;

/**
 * @summary PTCFloorActivity
 * @description
 * 
 * Sequence of: a) "TBCP_Request": Received by the PTC server to request
 * permission for the PTC target or PTC participant to send a talk burst. b)
 * "TBCP_Granted": Used by the PTC server to notify the PTC target or PTC
 * participant that it has been granted permission to send a talk burst. c)
 * "TBCP_Deny": Used by the PTC server to notify a PTC target or PTC participant
 * that it has been denied permission to send a talk burst. d) "TBCP_Idle": Used
 * by the PTC server to notify the PTC target or PTC participant that no one has
 * the permission to send a Talk Burst at the moment and that it may accept the
 * TBCP talk burst request message. e) "TBCP_Taken": Used by the PTC server to
 * notify the PTC target or PTC participant that another PTC participant has
 * been given permission to send a talk burst. f) "TBCP_Revoke": Used by the PTC
 * server to revoke the media resource from the PTC target or PTC participant
 * and can be used for pre-emption functionality but is also used by the system
 * to prevent overly long use of the media resource. g) "TBCP_Queued": Indicates
 * the request to talk is queued, if queued floor control is supported. Include
 * identification of the PTC target or PTC participant that has the queued talk
 * burst, if known. h) "TBCP_Release": Indicates the request to talk has
 * completed.
 *
 * 3GPP TS 33.128, clause 7.5.2.14.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PTCFloorActivity   ::=  ENUMERATED
 * {
 *     tBCPRequest(1),
 *     tBCPGranted(2),
 *     tBCPDeny(3),
 *     tBCPIdle(4),
 *     tBCPTaken(5),
 *     tBCPRevoke(6),
 *     tBCPQueued(7),
 *     tBCPRelease(8)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const PTCFloorActivity = _enum_for_PTCFloorActivity;

/**
 * @summary PTCFloorActivity_tBCPRequest
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPRequest = PTCFloorActivity.tBCPRequest; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPRequest
 * @constant
 * @type {number}
 */
export
const tBCPRequest = PTCFloorActivity.tBCPRequest; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPGranted
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPGranted = PTCFloorActivity.tBCPGranted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPGranted
 * @constant
 * @type {number}
 */
export
const tBCPGranted = PTCFloorActivity.tBCPGranted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPDeny
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPDeny = PTCFloorActivity.tBCPDeny; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPDeny
 * @constant
 * @type {number}
 */
export
const tBCPDeny = PTCFloorActivity.tBCPDeny; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPIdle
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPIdle = PTCFloorActivity.tBCPIdle; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPIdle
 * @constant
 * @type {number}
 */
export
const tBCPIdle = PTCFloorActivity.tBCPIdle; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPTaken
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPTaken = PTCFloorActivity.tBCPTaken; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPTaken
 * @constant
 * @type {number}
 */
export
const tBCPTaken = PTCFloorActivity.tBCPTaken; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPRevoke
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPRevoke = PTCFloorActivity.tBCPRevoke; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPRevoke
 * @constant
 * @type {number}
 */
export
const tBCPRevoke = PTCFloorActivity.tBCPRevoke; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPQueued
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPQueued = PTCFloorActivity.tBCPQueued; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPQueued
 * @constant
 * @type {number}
 */
export
const tBCPQueued = PTCFloorActivity.tBCPQueued; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary PTCFloorActivity_tBCPRelease
 * @constant
 * @type {number}
 */
export
const PTCFloorActivity_tBCPRelease = PTCFloorActivity.tBCPRelease; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary tBCPRelease
 * @constant
 * @type {number}
 */
export
const tBCPRelease = PTCFloorActivity.tBCPRelease; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_PTCFloorActivity: $.ASN1Decoder<PTCFloorActivity> = $._decodeEnumerated;
export const _encode_PTCFloorActivity: $.ASN1Encoder<PTCFloorActivity> = $._encodeEnumerated;


/* eslint-enable */
