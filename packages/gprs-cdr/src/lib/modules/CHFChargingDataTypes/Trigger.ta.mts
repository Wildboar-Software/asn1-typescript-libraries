/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMFTrigger, _decode_SMFTrigger, _encode_SMFTrigger } from "../CHFChargingDataTypes/SMFTrigger.ta.mjs";


/**
 * @summary Trigger
 * @description
 *
 * Triggers includes the reason for charging information reporting or closing
 * for the used unit container, the 5G data connectivity specific triggers
 * are described in TS 32.255 [15].
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.5.1.14.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Trigger     ::=  CHOICE {
 *    sMFTrigger     [0] IMPLICIT SMFTrigger}
 * ```
 */
export
type Trigger =
    { sMFTrigger: SMFTrigger } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Trigger: $.ASN1Decoder<Trigger> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Trigger
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Trigger (el: _Element): Trigger {
    if (!_cached_decoder_for_Trigger) { _cached_decoder_for_Trigger = $._decode_inextensible_choice<Trigger>({
    "CONTEXT 0": [ "sMFTrigger", $._decode_implicit<SMFTrigger>(() => _decode_SMFTrigger) ]
}); }
    return _cached_decoder_for_Trigger(el);
}

let _cached_encoder_for_Trigger: $.ASN1Encoder<Trigger> | null = null;

/**
 * @summary Encodes a(n) Trigger into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Trigger, encoded as an ASN.1 Element.
 */
export
function _encode_Trigger (value: Trigger, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Trigger) { _cached_encoder_for_Trigger = $._encode_choice<Trigger>({
    "sMFTrigger": $._encode_implicit(_TagClass.context, 0, () => _encode_SMFTrigger, $.BER),
}, $.BER); }
    return _cached_encoder_for_Trigger(value, elGetter);
}


/* eslint-enable */
