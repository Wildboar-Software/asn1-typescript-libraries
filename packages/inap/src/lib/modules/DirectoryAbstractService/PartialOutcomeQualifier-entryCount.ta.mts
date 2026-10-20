/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary PartialOutcomeQualifier_entryCount
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PartialOutcomeQualifier-entryCount ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type PartialOutcomeQualifier_entryCount =
    { bestEstimate: INTEGER } /* CHOICE_ALT_ROOT */
    | { lowEstimate: INTEGER } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PartialOutcomeQualifier_entryCount: $.ASN1Decoder<PartialOutcomeQualifier_entryCount> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PartialOutcomeQualifier_entryCount
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PartialOutcomeQualifier_entryCount (el: _Element): PartialOutcomeQualifier_entryCount {
    if (!_cached_decoder_for_PartialOutcomeQualifier_entryCount) { _cached_decoder_for_PartialOutcomeQualifier_entryCount = $._decode_inextensible_choice<PartialOutcomeQualifier_entryCount>({
    "CONTEXT 7": [ "bestEstimate", $._decode_explicit<INTEGER>(() => $._decodeInteger) ],
    "CONTEXT 8": [ "lowEstimate", $._decode_explicit<INTEGER>(() => $._decodeInteger) ]
}); }
    return _cached_decoder_for_PartialOutcomeQualifier_entryCount(el);
}

let _cached_encoder_for_PartialOutcomeQualifier_entryCount: $.ASN1Encoder<PartialOutcomeQualifier_entryCount> | null = null;

/**
 * @summary Encodes a(n) PartialOutcomeQualifier_entryCount into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PartialOutcomeQualifier_entryCount, encoded as an ASN.1 Element.
 */
export
function _encode_PartialOutcomeQualifier_entryCount (value: PartialOutcomeQualifier_entryCount, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PartialOutcomeQualifier_entryCount) { _cached_encoder_for_PartialOutcomeQualifier_entryCount = $._encode_choice<PartialOutcomeQualifier_entryCount>({
    "bestEstimate": $._encode_explicit(_TagClass.context, 7, () => $._encodeInteger, $.BER),
    "lowEstimate": $._encode_explicit(_TagClass.context, 8, () => $._encodeInteger, $.BER),
}, $.BER); }
    return _cached_encoder_for_PartialOutcomeQualifier_entryCount(value, elGetter);
}


/* eslint-enable */
