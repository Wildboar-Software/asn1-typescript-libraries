import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type InformationToSend, _decode_InformationToSend, _encode_InformationToSend } from "./InformationToSend.ta.mjs";
import { type Cause, _decode_Cause, _encode_Cause } from "./Cause.ta.mjs";

/**
 * @summary GapTreatment
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * GapTreatment {PARAMETERS-BOUND : bound} ::= CHOICE {
 *  informationToSend			[0] InformationToSend {bound},
 *  releaseCause			[1] Cause {bound}
 *  }
 * ```
 *
 */
export type GapTreatment =
{ informationToSend: InformationToSend }
    | { releaseCause: Cause };

let _cached_decoder_for_GapTreatment: $.ASN1Decoder<GapTreatment> | null = null;
export function _decode_GapTreatment (el: _Element): GapTreatment {
    if (!_cached_decoder_for_GapTreatment) {
        _cached_decoder_for_GapTreatment = $._decode_inextensible_choice<GapTreatment>({
    "CONTEXT 0": [ "informationToSend", $._decode_explicit<InformationToSend>(() => _decode_InformationToSend) ],
    "CONTEXT 1": [ "releaseCause", $._decode_implicit<Cause>(() => _decode_Cause) ]
        });
    }
    return _cached_decoder_for_GapTreatment(el);
}

let _cached_encoder_for_GapTreatment: $.ASN1Encoder<GapTreatment> | null = null;
export function _encode_GapTreatment (value: GapTreatment, elGetter: $.ASN1Encoder<GapTreatment>): _Element {
    if (!_cached_encoder_for_GapTreatment) {
        _cached_encoder_for_GapTreatment = $._encode_choice<GapTreatment>({
    "informationToSend": $._encode_explicit(_TagClass.context, 0, () => _encode_InformationToSend, $.BER),
    "releaseCause": $._encode_implicit(_TagClass.context, 1, () => _encode_Cause, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_GapTreatment(value, elGetter);
}
