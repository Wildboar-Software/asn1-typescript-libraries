/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Trigger, _decode_Trigger, _encode_Trigger } from "../IN-SSF-SCF-datatypes/Trigger.ta.mjs";
// export { Trigger, _decode_Trigger, _encode_Trigger } from "../IN-SSF-SCF-datatypes/Trigger.ta.mjs";


/**
 * @summary Triggers
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Triggers  ::=  SEQUENCE OF Trigger
 * ```
 */
export
type Triggers = Trigger[]; // SequenceOfType

let _cached_decoder_for_Triggers: $.ASN1Decoder<Triggers> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Triggers
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Triggers (el: _Element): Triggers {
    if (!_cached_decoder_for_Triggers) { _cached_decoder_for_Triggers = $._decodeSequenceOf<Trigger>(() => _decode_Trigger); }
    return _cached_decoder_for_Triggers(el);
}

let _cached_encoder_for_Triggers: $.ASN1Encoder<Triggers> | null = null;

/**
 * @summary Encodes a(n) Triggers into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Triggers, encoded as an ASN.1 Element.
 */
export
function _encode_Triggers (value: Triggers, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Triggers) { _cached_encoder_for_Triggers = $._encodeSequenceOf<Trigger>(() => _encode_Trigger, $.BER); }
    return _cached_encoder_for_Triggers(value, elGetter);
}


/* eslint-enable */
