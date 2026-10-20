/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";
// export { Extension, _decode_Extension, _encode_Extension } from "../Manufacturer-specific-service-extension-class-asn1-97/Extension.ta.mjs";


/**
 * @summary MWIInterrogateResElt_argumentExt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MWIInterrogateResElt-argumentExt ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type MWIInterrogateResElt_argumentExt =
    { extension: Extension } /* CHOICE_ALT_ROOT */
    | { multipleExtension: Extension[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MWIInterrogateResElt_argumentExt: $.ASN1Decoder<MWIInterrogateResElt_argumentExt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MWIInterrogateResElt_argumentExt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MWIInterrogateResElt_argumentExt (el: _Element): MWIInterrogateResElt_argumentExt {
    if (!_cached_decoder_for_MWIInterrogateResElt_argumentExt) { _cached_decoder_for_MWIInterrogateResElt_argumentExt = $._decode_inextensible_choice<MWIInterrogateResElt_argumentExt>({
    "CONTEXT 6": [ "extension", $._decode_implicit<Extension>(() => _decode_Extension) ],
    "CONTEXT 7": [ "multipleExtension", $._decode_implicit<Extension[]>(() => $._decodeSequenceOf<Extension>(() => _decode_Extension)) ]
}); }
    return _cached_decoder_for_MWIInterrogateResElt_argumentExt(el);
}

let _cached_encoder_for_MWIInterrogateResElt_argumentExt: $.ASN1Encoder<MWIInterrogateResElt_argumentExt> | null = null;

/**
 * @summary Encodes a(n) MWIInterrogateResElt_argumentExt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MWIInterrogateResElt_argumentExt, encoded as an ASN.1 Element.
 */
export
function _encode_MWIInterrogateResElt_argumentExt (value: MWIInterrogateResElt_argumentExt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MWIInterrogateResElt_argumentExt) { _cached_encoder_for_MWIInterrogateResElt_argumentExt = $._encode_choice<MWIInterrogateResElt_argumentExt>({
    "extension": $._encode_implicit(_TagClass.context, 6, () => _encode_Extension, $.BER),
    "multipleExtension": $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<Extension>(() => _encode_Extension, $.BER), $.BER),
}, $.BER); }
    return _cached_encoder_for_MWIInterrogateResElt_argumentExt(value, elGetter);
}


/* eslint-enable */
