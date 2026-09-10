import {
    BOOLEAN,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BurstList, _decode_BurstList, _encode_BurstList } from "./BurstList.ta.mjs";

/**
 * @summary AudibleIndicator
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AudibleIndicator ::= CHOICE {
 *  tone				BOOLEAN,
 *  burstList				[1] BurstList
 *  }
 * ```
 *
 */
export type AudibleIndicator =
{ tone: BOOLEAN }
    | { burstList: BurstList };

let _cached_decoder_for_AudibleIndicator: $.ASN1Decoder<AudibleIndicator> | null = null;
export function _decode_AudibleIndicator (el: _Element): AudibleIndicator {
    if (!_cached_decoder_for_AudibleIndicator) {
        _cached_decoder_for_AudibleIndicator = $._decode_inextensible_choice<AudibleIndicator>({
    "UNIVERSAL 1": [ "tone", $._decodeBoolean ],
    "CONTEXT 1": [ "burstList", $._decode_implicit<BurstList>(() => _decode_BurstList) ]
        });
    }
    return _cached_decoder_for_AudibleIndicator(el);
}

let _cached_encoder_for_AudibleIndicator: $.ASN1Encoder<AudibleIndicator> | null = null;
export function _encode_AudibleIndicator (value: AudibleIndicator, elGetter: $.ASN1Encoder<AudibleIndicator>): _Element {
    if (!_cached_encoder_for_AudibleIndicator) {
        _cached_encoder_for_AudibleIndicator = $._encode_choice<AudibleIndicator>({
    "tone": $._encodeBoolean,
    "burstList": $._encode_implicit(_TagClass.context, 1, () => _encode_BurstList, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_AudibleIndicator(value, elGetter);
}
