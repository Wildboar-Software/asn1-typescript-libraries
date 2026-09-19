/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ThisEntry, _decode_ThisEntry, _encode_ThisEntry } from "../EnhancedSecurity/ThisEntry.ta.mjs";
// export { ThisEntry, _decode_ThisEntry, _encode_ThisEntry } from "../EnhancedSecurity/ThisEntry.ta.mjs";
import { SpecificallyIdentified, _decode_SpecificallyIdentified, _encode_SpecificallyIdentified } from "../EnhancedSecurity/SpecificallyIdentified.ta.mjs";
// export { SpecificallyIdentified, _decode_SpecificallyIdentified, _encode_SpecificallyIdentified } from "../EnhancedSecurity/SpecificallyIdentified.ta.mjs";


/**
 * @summary Signer
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Signer  ::=  CHOICE {
 *   thisEntry   [0]  EXPLICIT ThisEntry,
 *   thirdParty  [1]  SpecificallyIdentified,
 *   ... }
 * ```
 */
export
type Signer =
    { thisEntry: ThisEntry } /* CHOICE_ALT_ROOT */
    | { thirdParty: SpecificallyIdentified } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_Signer: $.ASN1Decoder<Signer> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Signer
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Signer (el: _Element): Signer {
    if (!_cached_decoder_for_Signer) { _cached_decoder_for_Signer = $._decode_extensible_choice<Signer>({
    "CONTEXT 0": [ "thisEntry", $._decode_explicit<ThisEntry>(() => _decode_ThisEntry) ],
    "CONTEXT 1": [ "thirdParty", $._decode_implicit<SpecificallyIdentified>(() => _decode_SpecificallyIdentified) ]
}); }
    return _cached_decoder_for_Signer(el);
}

let _cached_encoder_for_Signer: $.ASN1Encoder<Signer> | null = null;

/**
 * @summary Encodes a(n) Signer into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Signer, encoded as an ASN.1 Element.
 */
export
function _encode_Signer (value: Signer, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Signer) { _cached_encoder_for_Signer = $._encode_choice<Signer>({
    "thisEntry": $._encode_explicit(_TagClass.context, 0, () => _encode_ThisEntry, $.BER),
    "thirdParty": $._encode_implicit(_TagClass.context, 1, () => _encode_SpecificallyIdentified, $.BER),
}, $.BER); }
    return _cached_encoder_for_Signer(value, elGetter);
}


/* eslint-enable */
