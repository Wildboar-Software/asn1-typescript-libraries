/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DialogBeginPDU, _decode_DialogBeginPDU, _encode_DialogBeginPDU } from "../Dialog-Service-Pdus-asn1-97/DialogBeginPDU.ta.mjs";
import { DialogEndPDU, _decode_DialogEndPDU, _encode_DialogEndPDU } from "../Dialog-Service-Pdus-asn1-97/DialogEndPDU.ta.mjs";
import { DialogContinuePDU, _decode_DialogContinuePDU, _encode_DialogContinuePDU } from "../Dialog-Service-Pdus-asn1-97/DialogContinuePDU.ta.mjs";
import { DialogAbortPDU, _decode_DialogAbortPDU, _encode_DialogAbortPDU } from "../Dialog-Service-Pdus-asn1-97/DialogAbortPDU.ta.mjs";

/**
 * @summary DseAPDU
 * @description
 *
 * One dialogue PDU: begin, continue, end, or abort (ECMA-165 §6.6 Table 1,
 * §8.4, §11.3.3.3). Sent when the network protocol profile is `dse`. Begin
 * opens a dialogue and starts timer T_Originating_Dialogue at the initiator.
 * Continue establishes or carries on the active dialogue. End terminates it.
 * Abort abandons it. Except for abort, the PDU may carry ROSE or ACSE APDUs.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DseAPDU  ::=  CHOICE {
 *     begin [12] IMPLICIT DialogBeginPDU,
 *     end [14] IMPLICIT DialogEndPDU,
 *     continue [15] IMPLICIT DialogContinuePDU,
 *     abort [17] IMPLICIT DialogAbortPDU
 * }
 * ```
 */
export
type DseAPDU =
    { begin: DialogBeginPDU } /* CHOICE_ALT_ROOT */
    | { end: DialogEndPDU } /* CHOICE_ALT_ROOT */
    | { continue_: DialogContinuePDU } /* CHOICE_ALT_ROOT */
    | { abort: DialogAbortPDU } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_DseAPDU: $.ASN1Decoder<DseAPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DseAPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DseAPDU (el: _Element): DseAPDU {
    if (!_cached_decoder_for_DseAPDU) { _cached_decoder_for_DseAPDU = $._decode_inextensible_choice<DseAPDU>({
    "CONTEXT 12": [ "begin", $._decode_implicit<DialogBeginPDU>(() => _decode_DialogBeginPDU) ],
    "CONTEXT 14": [ "end", $._decode_implicit<DialogEndPDU>(() => _decode_DialogEndPDU) ],
    "CONTEXT 15": [ "continue_", $._decode_implicit<DialogContinuePDU>(() => _decode_DialogContinuePDU) ],
    "CONTEXT 17": [ "abort", $._decode_implicit<DialogAbortPDU>(() => _decode_DialogAbortPDU) ]
}); }
    return _cached_decoder_for_DseAPDU(el);
}

let _cached_encoder_for_DseAPDU: $.ASN1Encoder<DseAPDU> | null = null;

/**
 * @summary Encodes a(n) DseAPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DseAPDU, encoded as an ASN.1 Element.
 */
export
function _encode_DseAPDU (value: DseAPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DseAPDU) { _cached_encoder_for_DseAPDU = $._encode_choice<DseAPDU>({
    "begin": $._encode_implicit(_TagClass.context, 12, () => _encode_DialogBeginPDU, $.BER),
    "end": $._encode_implicit(_TagClass.context, 14, () => _encode_DialogEndPDU, $.BER),
    "continue_": $._encode_implicit(_TagClass.context, 15, () => _encode_DialogContinuePDU, $.BER),
    "abort": $._encode_implicit(_TagClass.context, 17, () => _encode_DialogAbortPDU, $.BER),
}, $.BER); }
    return _cached_encoder_for_DseAPDU(value, elGetter);
}

/* eslint-enable */
