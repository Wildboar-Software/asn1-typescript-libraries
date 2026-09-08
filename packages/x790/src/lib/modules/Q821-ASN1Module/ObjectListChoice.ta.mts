/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";

import {
    RangeOfObjects,
    _decode_RangeOfObjects,
    _encode_RangeOfObjects,
} from "../Q821-ASN1Module/RangeOfObjects.ta.mjs";



/**
 * @summary ObjectListChoice
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ObjectListChoice  ::=  CHOICE {
 *   singleObject    [1]  ObjectInstance,
 *   rangeOfObjects  [2]  RangeOfObjects
 * }
 * ```
 */
export
type ObjectListChoice =
    { singleObject: ObjectInstance } /* CHOICE_ALT_ROOT */
    | { rangeOfObjects: RangeOfObjects } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ObjectListChoice: $.ASN1Decoder<ObjectListChoice> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ObjectListChoice
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ObjectListChoice (el: _Element): ObjectListChoice {
    if (!_cached_decoder_for_ObjectListChoice) { _cached_decoder_for_ObjectListChoice = $._decode_inextensible_choice<ObjectListChoice>({
    "CONTEXT 1": [ "singleObject", $._decode_explicit<ObjectInstance>(() => _decode_ObjectInstance) ],
    "CONTEXT 2": [ "rangeOfObjects", $._decode_implicit<RangeOfObjects>(() => _decode_RangeOfObjects) ]
}); }
    return _cached_decoder_for_ObjectListChoice(el);
}

let _cached_encoder_for_ObjectListChoice: $.ASN1Encoder<ObjectListChoice> | null = null;

/**
 * @summary Encodes a(n) ObjectListChoice into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ObjectListChoice, encoded as an ASN.1 Element.
 */
export
function _encode_ObjectListChoice (value: ObjectListChoice, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ObjectListChoice) { _cached_encoder_for_ObjectListChoice = $._encode_choice<ObjectListChoice>({
    "singleObject": $._encode_explicit(_TagClass.context, 1, () => _encode_ObjectInstance, $.BER),
    "rangeOfObjects": $._encode_implicit(_TagClass.context, 2, () => _encode_RangeOfObjects, $.BER),
}, $.BER); }
    return _cached_encoder_for_ObjectListChoice(value, elGetter);
}


/* eslint-enable */
