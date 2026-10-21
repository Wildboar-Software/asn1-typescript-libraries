/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary MWIDeactivateArg_argumentExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIDeactivateArg-argumentExt ::= CHOICE {
 *     extension [3] IMPLICIT Extension {{MWIExtSet}},
 *     multipleExtension [4] IMPLICIT SEQUENCE OF Extension {{MWIExtSet}}
 * }
 * ```
 */
export
type MWIDeactivateArg_argumentExt =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MWIDeactivateArg_argumentExt: $.ASN1Decoder<MWIDeactivateArg_argumentExt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIDeactivateArg_argumentExt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIDeactivateArg_argumentExt (el: _Element): MWIDeactivateArg_argumentExt {
    if (!_cached_decoder_for_MWIDeactivateArg_argumentExt) { _cached_decoder_for_MWIDeactivateArg_argumentExt = $._decode_inextensible_choice<MWIDeactivateArg_argumentExt>({
    "CONTEXT 3": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 4": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MWIDeactivateArg_argumentExt(el);
}

let _cached_encoder_for_MWIDeactivateArg_argumentExt: $.ASN1Encoder<MWIDeactivateArg_argumentExt> | null = null;

/**
 * @summary Encodes a(n) MWIDeactivateArg_argumentExt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIDeactivateArg_argumentExt, encoded as an ASN.1 Element.
 */
export
function _encode_MWIDeactivateArg_argumentExt (value: MWIDeactivateArg_argumentExt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIDeactivateArg_argumentExt) { _cached_encoder_for_MWIDeactivateArg_argumentExt = $._encode_choice<MWIDeactivateArg_argumentExt>({
    "extension": $._encode_implicit(_TagClass.context, 3, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MWIDeactivateArg_argumentExt(value, elGetter);
}

/* eslint-enable */
