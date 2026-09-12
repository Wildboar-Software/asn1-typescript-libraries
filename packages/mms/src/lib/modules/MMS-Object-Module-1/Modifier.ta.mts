/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AttachToEventCondition, _decode_AttachToEventCondition, _encode_AttachToEventCondition } from "../ISO-9506-MMS-1/AttachToEventCondition.ta.mjs";
// export { AttachToEventCondition, _decode_AttachToEventCondition, _encode_AttachToEventCondition } from "../ISO-9506-MMS-1/AttachToEventCondition.ta.mjs";
import { AttachToSemaphore, _decode_AttachToSemaphore, _encode_AttachToSemaphore } from "../ISO-9506-MMS-1/AttachToSemaphore.ta.mjs";
// export { AttachToSemaphore, _decode_AttachToSemaphore, _encode_AttachToSemaphore } from "../ISO-9506-MMS-1/AttachToSemaphore.ta.mjs";


/**
 * @summary Modifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Modifier  ::=  CHOICE {
 *     eventModifier         [0] IMPLICIT AttachToEventCondition,
 *     semaphoreModifier     [1] IMPLICIT AttachToSemaphore
 * }
 * ```
 */
export
type Modifier =
    { eventModifier: AttachToEventCondition } /* CHOICE_ALT_ROOT */
    | { semaphoreModifier: AttachToSemaphore } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Modifier: $.ASN1Decoder<Modifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Modifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Modifier (el: _Element): Modifier {
    if (!_cached_decoder_for_Modifier) { _cached_decoder_for_Modifier = $._decode_inextensible_choice<Modifier>({
    "CONTEXT 0": [ "eventModifier", $._decode_implicit<AttachToEventCondition>(() => _decode_AttachToEventCondition) ],
    "CONTEXT 1": [ "semaphoreModifier", $._decode_implicit<AttachToSemaphore>(() => _decode_AttachToSemaphore) ]
}); }
    return _cached_decoder_for_Modifier(el);
}

let _cached_encoder_for_Modifier: $.ASN1Encoder<Modifier> | null = null;

/**
 * @summary Encodes a(n) Modifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Modifier, encoded as an ASN.1 Element.
 */
export
function _encode_Modifier (value: Modifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Modifier) { _cached_encoder_for_Modifier = $._encode_choice<Modifier>({
    "eventModifier": $._encode_implicit(_TagClass.context, 0, () => _encode_AttachToEventCondition, $.BER),
    "semaphoreModifier": $._encode_implicit(_TagClass.context, 1, () => _encode_AttachToSemaphore, $.BER),
}, $.BER); }
    return _cached_encoder_for_Modifier(value, elGetter);
}


/* eslint-enable */
