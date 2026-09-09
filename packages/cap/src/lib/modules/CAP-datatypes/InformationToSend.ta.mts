import {
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InbandInfo, _decode_InbandInfo, _encode_InbandInfo } from "./InbandInfo.ta.mjs";
import { Tone, _decode_Tone, _encode_Tone } from "./Tone.ta.mjs";

/**
 * @summary InformationToSend
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * InformationToSend {PARAMETERS-BOUND : bound} ::= CHOICE {
 inbandInfo				[0] InbandInfo {bound},
 tone				[1] Tone
 }
 * ```
 *
 */
export type InformationToSend =
{ inbandInfo: InbandInfo }
    | { tone: Tone };

let _cached_decoder_for_InformationToSend: $.ASN1Decoder<InformationToSend> | null = null;
export function _decode_InformationToSend (el: _Element): InformationToSend {
    if (!_cached_decoder_for_InformationToSend) {
        _cached_decoder_for_InformationToSend = $._decode_inextensible_choice<InformationToSend>({
    "CONTEXT 0": [ "inbandInfo", $._decode_implicit<InbandInfo>(() => _decode_InbandInfo) ],
    "CONTEXT 1": [ "tone", $._decode_implicit<Tone>(() => _decode_Tone) ]
        });
    }
    return _cached_decoder_for_InformationToSend(el);
}

let _cached_encoder_for_InformationToSend: $.ASN1Encoder<InformationToSend> | null = null;
export function _encode_InformationToSend (value: InformationToSend, elGetter: $.ASN1Encoder<InformationToSend>): _Element {
    if (!_cached_encoder_for_InformationToSend) {
        _cached_encoder_for_InformationToSend = $._encode_choice<InformationToSend>({
    "inbandInfo": $._encode_implicit(_TagClass.context, 0, () => _encode_InbandInfo, $.BER),
    "tone": $._encode_implicit(_TagClass.context, 1, () => _encode_Tone, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_InformationToSend(value, elGetter);
}
