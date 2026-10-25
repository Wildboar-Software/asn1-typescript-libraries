/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ImmediateEnableResponse_immediateEnableResult
 * @description
 * 
 * ES10b.ImmediateEnable result. `ok`, `immediateEnableNotAvailable`,
 * `noSessionContext`, and `catBusy` are defined in section 5.9.15. SGP.32 v1.2
 * names `undefinedError(127)` and does not further define it. Annex C lists
 * that name only.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImmediateEnableResponse-immediateEnableResult ::= INTEGER {
 *     ok(0),
 *     immediateEnableNotAvailable(1),
 *     noSessionContext(4),
 *     catBusy(5),
 *     undefinedError(127)
 * }
 * ```
 */
export
type ImmediateEnableResponse_immediateEnableResult = INTEGER;

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_ok
 * @description
 * The eUICC completed the immediate enable (`refreshFlag` false) or has marked
 * the Profiles and will send REFRESH (`refreshFlag` true). SGP.32 v1.2,
 * section 5.9.15.
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_ok = 0 satisfies ImmediateEnableResponse_immediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_ok
 * @description
 * Immediate enabling completed, or the Profiles are marked and REFRESH will be
 * sent. SGP.32 v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const ok = ImmediateEnableResponse_immediateEnableResult_ok; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable
 * @description
 * Immediate enabling was not granted for the newly installed Profile, or the
 * target is an Emergency Profile with `ecallIndication` set to TRUE. SGP.32
 * v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable = 1 satisfies ImmediateEnableResponse_immediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable
 * @description
 * Immediate enabling was not granted, or the target is an Emergency Profile
 * with `ecallIndication` TRUE. SGP.32 v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const immediateEnableNotAvailable = ImmediateEnableResponse_immediateEnableResult_immediateEnableNotAvailable; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_noSessionContext
 * @description
 * Ignoring Notification retrieval commands, the previous ES10 function was not
 * ES10b.LoadBoundProfilePackage. SGP.32 v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_noSessionContext = 4 satisfies ImmediateEnableResponse_immediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_noSessionContext
 * @description
 * The previous ES10 function, ignoring Notification retrieval, was not
 * ES10b.LoadBoundProfilePackage. SGP.32 v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const noSessionContext = ImmediateEnableResponse_immediateEnableResult_noSessionContext; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_catBusy
 * @description
 * A proactive session is still open. The eUICC MAY stop the command with this
 * code. If it does not, it terminates that proactive session internally and
 * continues. SGP.32 v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_catBusy = 5 satisfies ImmediateEnableResponse_immediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_catBusy
 * @description
 * A proactive session is open and the eUICC stopped ImmediateEnable with this
 * code. SGP.32 v1.2, section 5.9.15.
 * @constant
 * @type {number}
 */
export
const catBusy = ImmediateEnableResponse_immediateEnableResult_catBusy; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_undefinedError
 * @description
 * SGP.32 v1.2 section 5.9.15 names `undefinedError(127)` and does not further
 * define the condition that produces it. Annex C lists the name only.
 * @constant
 * @type {number}
 */
export
const ImmediateEnableResponse_immediateEnableResult_undefinedError = 127 satisfies ImmediateEnableResponse_immediateEnableResult; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ImmediateEnableResponse_immediateEnableResult_undefinedError
 * @description
 * SGP.32 v1.2 section 5.9.15 names this code and does not further define the
 * condition that produces it. Annex C.
 * @constant
 * @type {number}
 */
export
const undefinedError = ImmediateEnableResponse_immediateEnableResult_undefinedError; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_ImmediateEnableResponse_immediateEnableResult: $.ASN1Decoder<ImmediateEnableResponse_immediateEnableResult> = $._decodeInteger;
export const _encode_ImmediateEnableResponse_immediateEnableResult: $.ASN1Encoder<ImmediateEnableResponse_immediateEnableResult> = $._encodeInteger;


/* eslint-enable */
