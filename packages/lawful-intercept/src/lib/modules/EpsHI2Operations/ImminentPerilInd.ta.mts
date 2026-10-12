/* eslint-disable */
import {
    ASN1Element as _Element,
    ENUMERATED
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
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_request: ImminentPerilInd = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary request
 * @constant
 * @type {number}
 */
export
const request: ImminentPerilInd = ImminentPerilInd_request; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImminentPerilInd_response
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_response: ImminentPerilInd = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary response
 * @constant
 * @type {number}
 */
export
const response: ImminentPerilInd = ImminentPerilInd_response; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ImminentPerilInd_cancel
 * @constant
 * @type {number}
 */
export
const ImminentPerilInd_cancel: ImminentPerilInd = 3; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cancel
 * @constant
 * @type {number}
 */
export
const cancel: ImminentPerilInd = ImminentPerilInd_cancel; /* SHORT_NAMED_ENUMERATED_VALUE */
export const _decode_ImminentPerilInd: $.ASN1Decoder<ImminentPerilInd> = $._decodeEnumerated;
export const _encode_ImminentPerilInd: $.ASN1Encoder<ImminentPerilInd> = $._encodeEnumerated;


/* eslint-enable */
