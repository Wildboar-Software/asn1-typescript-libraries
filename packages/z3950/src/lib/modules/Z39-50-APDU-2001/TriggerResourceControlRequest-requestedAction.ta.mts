/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary TriggerResourceControlRequest_requestedAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TriggerResourceControlRequest-requestedAction ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TriggerResourceControlRequest_requestedAction = INTEGER;

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceReport
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_resourceReport: TriggerResourceControlRequest_requestedAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceReport
 * @constant
 * @type {number}
 */
export
const resourceReport: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_resourceReport; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceControl
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_resourceControl: TriggerResourceControlRequest_requestedAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_resourceControl
 * @constant
 * @type {number}
 */
export
const resourceControl: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_resourceControl; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_cancel
 * @constant
 * @type {number}
 */
export
const TriggerResourceControlRequest_requestedAction_cancel: TriggerResourceControlRequest_requestedAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary TriggerResourceControlRequest_requestedAction_cancel
 * @constant
 * @type {number}
 */
export
const cancel: TriggerResourceControlRequest_requestedAction = TriggerResourceControlRequest_requestedAction_cancel; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_TriggerResourceControlRequest_requestedAction: $.ASN1Decoder<TriggerResourceControlRequest_requestedAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TriggerResourceControlRequest_requestedAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TriggerResourceControlRequest_requestedAction (el: _Element): TriggerResourceControlRequest_requestedAction {
    if (!_cached_decoder_for_TriggerResourceControlRequest_requestedAction) { _cached_decoder_for_TriggerResourceControlRequest_requestedAction = $._decodeInteger; }
    return _cached_decoder_for_TriggerResourceControlRequest_requestedAction(el);
}

let _cached_encoder_for_TriggerResourceControlRequest_requestedAction: $.ASN1Encoder<TriggerResourceControlRequest_requestedAction> | null = null;

/**
 * @summary Encodes a(n) TriggerResourceControlRequest_requestedAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TriggerResourceControlRequest_requestedAction, encoded as an ASN.1 Element.
 */
export
function _encode_TriggerResourceControlRequest_requestedAction (value: TriggerResourceControlRequest_requestedAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TriggerResourceControlRequest_requestedAction) { _cached_encoder_for_TriggerResourceControlRequest_requestedAction = $._encodeInteger; }
    return _cached_encoder_for_TriggerResourceControlRequest_requestedAction(value, elGetter);
}


/* eslint-enable */
