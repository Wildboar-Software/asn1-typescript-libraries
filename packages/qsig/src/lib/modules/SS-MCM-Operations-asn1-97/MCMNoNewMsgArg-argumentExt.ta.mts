/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary MCMNoNewMsgArg_argumentExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCMNoNewMsgArg-argumentExt ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type MCMNoNewMsgArg_argumentExt =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MCMNoNewMsgArg_argumentExt: $.ASN1Decoder<MCMNoNewMsgArg_argumentExt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCMNoNewMsgArg_argumentExt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCMNoNewMsgArg_argumentExt (el: _Element): MCMNoNewMsgArg_argumentExt {
    if (!_cached_decoder_for_MCMNoNewMsgArg_argumentExt) { _cached_decoder_for_MCMNoNewMsgArg_argumentExt = $._decode_inextensible_choice<MCMNoNewMsgArg_argumentExt>({
    "CONTEXT 3": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 4": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MCMNoNewMsgArg_argumentExt(el);
}

let _cached_encoder_for_MCMNoNewMsgArg_argumentExt: $.ASN1Encoder<MCMNoNewMsgArg_argumentExt> | null = null;

/**
 * @summary Encodes a(n) MCMNoNewMsgArg_argumentExt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCMNoNewMsgArg_argumentExt, encoded as an ASN.1 Element.
 */
export
function _encode_MCMNoNewMsgArg_argumentExt (value: MCMNoNewMsgArg_argumentExt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCMNoNewMsgArg_argumentExt) { _cached_encoder_for_MCMNoNewMsgArg_argumentExt = $._encode_choice<MCMNoNewMsgArg_argumentExt>({
    "extension": $._encode_implicit(_TagClass.context, 3, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MCMNoNewMsgArg_argumentExt(value, elGetter);
}


/* eslint-enable */
