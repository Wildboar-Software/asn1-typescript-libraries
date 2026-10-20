/* eslint-disable */
import {
    INTEGER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Triggers, _decode_Triggers, _encode_Triggers } from "../IN-CS3-SSF-SCF-datatypes/Triggers.ta.mjs";
// export { Triggers, _decode_Triggers, _encode_Triggers } from "../IN-CS3-SSF-SCF-datatypes/Triggers.ta.mjs";


/**
 * @summary TDPIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDPIdentifier  ::=  CHOICE {
 *   oneTrigger  INTEGER,
 *   triggers    [1]  Triggers
 * }
 * ```
 */
export
type TDPIdentifier =
    { oneTrigger: INTEGER } /* CHOICE_ALT_ROOT */
    | { triggers: Triggers } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TDPIdentifier: $.ASN1Decoder<TDPIdentifier> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDPIdentifier
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDPIdentifier (el: _Element): TDPIdentifier {
    if (!_cached_decoder_for_TDPIdentifier) { _cached_decoder_for_TDPIdentifier = $._decode_inextensible_choice<TDPIdentifier>({
    "UNIVERSAL 2": [ "oneTrigger", $._decodeInteger ],
    "CONTEXT 1": [ "triggers", $._decode_implicit<Triggers>(() => _decode_Triggers) ]
}); }
    return _cached_decoder_for_TDPIdentifier(el);
}

let _cached_encoder_for_TDPIdentifier: $.ASN1Encoder<TDPIdentifier> | null = null;

/**
 * @summary Encodes a(n) TDPIdentifier into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDPIdentifier, encoded as an ASN.1 Element.
 */
export
function _encode_TDPIdentifier (value: TDPIdentifier, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDPIdentifier) { _cached_encoder_for_TDPIdentifier = $._encode_choice<TDPIdentifier>({
    "oneTrigger": $._encodeInteger,
    "triggers": $._encode_implicit(_TagClass.context, 1, () => _encode_Triggers, $.BER),
}, $.BER); }
    return _cached_encoder_for_TDPIdentifier(value, elGetter);
}


/* eslint-enable */
