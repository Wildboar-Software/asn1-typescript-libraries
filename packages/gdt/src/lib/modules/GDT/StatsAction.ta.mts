/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StatsAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatsAction  ::=  INTEGER {
 *     sa-request  (0),
 *     sa-result   (1)
 * }
 * ```
 */
export
type StatsAction = INTEGER;

/**
 * @summary StatsAction_sa_request
 * @constant
 * @type {number}
 */
export
const StatsAction_sa_request: StatsAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_request
 * @constant
 * @type {number}
 */
export
const sa_request: StatsAction = StatsAction_sa_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_result
 * @constant
 * @type {number}
 */
export
const StatsAction_sa_result: StatsAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_result
 * @constant
 * @type {number}
 */
export
const sa_result: StatsAction = StatsAction_sa_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_StatsAction: $.ASN1Decoder<StatsAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatsAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatsAction (el: _Element): StatsAction {
    if (!_cached_decoder_for_StatsAction) { _cached_decoder_for_StatsAction = $._decodeInteger; }
    return _cached_decoder_for_StatsAction(el);
}

let _cached_encoder_for_StatsAction: $.ASN1Encoder<StatsAction> | null = null;

/**
 * @summary Encodes a(n) StatsAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatsAction, encoded as an ASN.1 Element.
 */
export
function _encode_StatsAction (value: StatsAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatsAction) { _cached_encoder_for_StatsAction = $._encodeInteger; }
    return _cached_encoder_for_StatsAction(value, elGetter);
}


/* eslint-enable */
