/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary ChargeRequestArg_chargeReqArgExtension
 * @description
 *
 * Optional manufacturer-specific extension on `chargeRequest invoke`. ECMA-212
 * §6.3.1 defines `AOCExtSet` as `{...}` and names no member. It does not say
 * when to send one extension rather than several.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeRequestArg-chargeReqArgExtension ::= CHOICE {
 *     extension [1] IMPLICIT Extension {{AOCExtSet}},
 *     multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 * }
 * ```
 */
export
type ChargeRequestArg_chargeReqArgExtension =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ChargeRequestArg_chargeReqArgExtension: $.ASN1Decoder<ChargeRequestArg_chargeReqArgExtension> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeRequestArg_chargeReqArgExtension
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeRequestArg_chargeReqArgExtension (el: _Element): ChargeRequestArg_chargeReqArgExtension {
    if (!_cached_decoder_for_ChargeRequestArg_chargeReqArgExtension) { _cached_decoder_for_ChargeRequestArg_chargeReqArgExtension = $._decode_inextensible_choice<ChargeRequestArg_chargeReqArgExtension>({
    "CONTEXT 1": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 2": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_ChargeRequestArg_chargeReqArgExtension(el);
}

let _cached_encoder_for_ChargeRequestArg_chargeReqArgExtension: $.ASN1Encoder<ChargeRequestArg_chargeReqArgExtension> | null = null;

/**
 * @summary Encodes a(n) ChargeRequestArg_chargeReqArgExtension into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeRequestArg_chargeReqArgExtension, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeRequestArg_chargeReqArgExtension (value: ChargeRequestArg_chargeReqArgExtension, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeRequestArg_chargeReqArgExtension) { _cached_encoder_for_ChargeRequestArg_chargeReqArgExtension = $._encode_choice<ChargeRequestArg_chargeReqArgExtension>({
    "extension": $._encode_implicit(_TagClass.context, 1, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_ChargeRequestArg_chargeReqArgExtension(value, elGetter);
}

/* eslint-enable */
