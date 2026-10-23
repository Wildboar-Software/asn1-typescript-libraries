/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary MWIActivateArg_argumentExt
 * @description
 *
 * Optional manufacturer-specific extension on `mWIActivate`. ECMA-242 §6.3.1
 * defines `MWIExtSet` as `{...}` and names no member. It does not say when to
 * send one extension rather than several.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-242/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-241/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIActivateArg-argumentExt ::= CHOICE {
 *     extension [6] IMPLICIT Extension {{MWIExtSet}},
 *     multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{MWIExtSet}}
 * }
 * ```
 */
export
type MWIActivateArg_argumentExt =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MWIActivateArg_argumentExt: $.ASN1Decoder<MWIActivateArg_argumentExt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIActivateArg_argumentExt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIActivateArg_argumentExt (el: _Element): MWIActivateArg_argumentExt {
    if (!_cached_decoder_for_MWIActivateArg_argumentExt) { _cached_decoder_for_MWIActivateArg_argumentExt = $._decode_inextensible_choice<MWIActivateArg_argumentExt>({
    "CONTEXT 6": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MWIActivateArg_argumentExt(el);
}

let _cached_encoder_for_MWIActivateArg_argumentExt: $.ASN1Encoder<MWIActivateArg_argumentExt> | null = null;

/**
 * @summary Encodes a(n) MWIActivateArg_argumentExt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIActivateArg_argumentExt, encoded as an ASN.1 Element.
 */
export
function _encode_MWIActivateArg_argumentExt (value: MWIActivateArg_argumentExt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIActivateArg_argumentExt) { _cached_encoder_for_MWIActivateArg_argumentExt = $._encode_choice<MWIActivateArg_argumentExt>({
    "extension": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MWIActivateArg_argumentExt(value, elGetter);
}

/* eslint-enable */
