/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary StateAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StateAction  ::=  INTEGER {
 *     sta-update  (0)
 * 
 * }
 * ```
 */
export
type StateAction = INTEGER;

/**
 * @summary StateAction_sta_update
 * @constant
 * @type {number}
 */
export
const StateAction_sta_update: StateAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StateAction_sta_update
 * @constant
 * @type {number}
 */
export
const sta_update: StateAction = StateAction_sta_update; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_StateAction: $.ASN1Decoder<StateAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StateAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StateAction (el: _Element): StateAction {
    if (!_cached_decoder_for_StateAction) { _cached_decoder_for_StateAction = $._decodeInteger; }
    return _cached_decoder_for_StateAction(el);
}

let _cached_encoder_for_StateAction: $.ASN1Encoder<StateAction> | null = null;

/**
 * @summary Encodes a(n) StateAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StateAction, encoded as an ASN.1 Element.
 */
export
function _encode_StateAction (value: StateAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StateAction) { _cached_encoder_for_StateAction = $._encodeInteger; }
    return _cached_encoder_for_StateAction(value, elGetter);
}


/* eslint-enable */
