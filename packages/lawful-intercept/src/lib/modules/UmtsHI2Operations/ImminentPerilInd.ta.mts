/* eslint-disable */
import {
    type ENUMERATED
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



export
enum _enum_for_ImminentPerilInd {
    request = 1,
    response = 2,
    cancel = 3,
}

/**
 * @summary ImminentPerilInd
 * @description
 * 
 * MCPTT imminent-peril group call: the request, the response, or the
 * cancellation. The notification is either to the target or from the target.
 * 
 * Mandatory on the imminent-peril group-call report (table 17.3.6).
 * 
 * 3GPP TS 33.108, clause 17.3.6 and annex B.3.
 * 
 * https://www.3gpp.org/DynaReport/33108.htm
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ImminentPerilInd          ::=  ENUMERATED
 * {
 *     request            (1),
 *     response        (2),
 *     cancel            (3),
 *     -- when the MCPTT Imminent Peril Group Call Request, Response or Cancel is detected
 * ...
 * }
 * ```
 * 
 * @enum {number}
 */
export
type ImminentPerilInd = _enum_for_ImminentPerilInd | ENUMERATED;

/**
 * @summary ImminentPerilInd_request
 * @description
 * 
 * Imminent-peril group-call request, to or from the target.
 * 
 * 3GPP TS 33.108, table 17.3.6 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_request = _enum_for_ImminentPerilInd.request satisfies ImminentPerilInd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @description
 * 
 * Imminent-peril group-call request (table 17.3.6).
 * @constant
 * @type {number}
 */
export
const request = ImminentPerilInd_request satisfies ImminentPerilInd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImminentPerilInd_response
 * @description
 * 
 * Response to an imminent-peril group call, to or from the target.
 * 
 * 3GPP TS 33.108, table 17.3.6 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_response = _enum_for_ImminentPerilInd.response satisfies ImminentPerilInd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary response
 * @description
 * 
 * Response to an imminent-peril group call (table 17.3.6).
 * @constant
 * @type {number}
 */
export
const response = ImminentPerilInd_response satisfies ImminentPerilInd; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImminentPerilInd_cancel
 * @description
 * 
 * Cancellation of the imminent-peril group call.
 * 
 * 3GPP TS 33.108, table 17.3.6 and annex B.3.
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_cancel = _enum_for_ImminentPerilInd.cancel satisfies ImminentPerilInd; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @description
 * 
 * Cancellation of the imminent-peril group call (table 17.3.6).
 * @constant
 * @type {number}
 */
export
const cancel = ImminentPerilInd_cancel satisfies ImminentPerilInd; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ImminentPerilInd: $.ASN1Decoder<ImminentPerilInd> = $._decodeEnumerated;
export const _encode_ImminentPerilInd: $.ASN1Encoder<ImminentPerilInd> = $._encodeEnumerated;


/* eslint-enable */
