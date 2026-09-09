import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "./CollectedDigits.ta.mjs";

/**
 * @summary CollectedInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CollectedInfo ::= CHOICE {
 collectedDigits			[0] CollectedDigits
 }
 * ```
 *
 */
export type CollectedInfo =
{ collectedDigits: CollectedDigits };

let _cached_decoder_for_CollectedInfo: $.ASN1Decoder<CollectedInfo> | null = null;
export function _decode_CollectedInfo (el: _Element): CollectedInfo {
    if (!_cached_decoder_for_CollectedInfo) {
        _cached_decoder_for_CollectedInfo = $._decode_inextensible_choice<CollectedInfo>({
    "CONTEXT 0": [ "collectedDigits", $._decode_implicit<CollectedDigits>(() => _decode_CollectedDigits) ]
        });
    }
    return _cached_decoder_for_CollectedInfo(el);
}

let _cached_encoder_for_CollectedInfo: $.ASN1Encoder<CollectedInfo> | null = null;
export function _encode_CollectedInfo (value: CollectedInfo, elGetter: $.ASN1Encoder<CollectedInfo>): _Element {
    if (!_cached_encoder_for_CollectedInfo) {
        _cached_encoder_for_CollectedInfo = $._encode_choice<CollectedInfo>({
    "collectedDigits": $._encode_implicit(_TagClass.context, 0, () => _encode_CollectedDigits, $.BER)
        }, $.BER);
    }
    return _cached_encoder_for_CollectedInfo(value, elGetter);
}
