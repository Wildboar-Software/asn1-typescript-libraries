/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";

/**
 * @summary MCMNewMsgArg_argumentExt
 * @description
 *
 * Optional manufacturer extension on `mCMNewMsg` (ECMA-347
 * §6.3.1). One extension, or several. `MCMExtSet` defines
 * none. §6.5.1.1.2 does not mention this component.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-347/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMNewMsgArg-argumentExt ::= CHOICE {
 *     extension [6] IMPLICIT Extension {{MCMExtSet}},
 *     multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{MCMExtSet}}
 * }
 * ```
 */
export
type MCMNewMsgArg_argumentExt =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MCMNewMsgArg_argumentExt: $.ASN1Decoder<MCMNewMsgArg_argumentExt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMNewMsgArg_argumentExt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMNewMsgArg_argumentExt (el: _Element): MCMNewMsgArg_argumentExt {
    if (!_cached_decoder_for_MCMNewMsgArg_argumentExt) { _cached_decoder_for_MCMNewMsgArg_argumentExt = $._decode_inextensible_choice<MCMNewMsgArg_argumentExt>({
    "CONTEXT 6": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MCMNewMsgArg_argumentExt(el);
}

let _cached_encoder_for_MCMNewMsgArg_argumentExt: $.ASN1Encoder<MCMNewMsgArg_argumentExt> | null = null;

/**
 * @summary Encodes a(n) MCMNewMsgArg_argumentExt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMNewMsgArg_argumentExt, encoded as an ASN.1 Element.
 */
export
function _encode_MCMNewMsgArg_argumentExt (value: MCMNewMsgArg_argumentExt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMNewMsgArg_argumentExt) { _cached_encoder_for_MCMNewMsgArg_argumentExt = $._encode_choice<MCMNewMsgArg_argumentExt>({
    "extension": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MCMNewMsgArg_argumentExt(value, elGetter);
}

/* eslint-enable */
