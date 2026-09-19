/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
// export { ExtAttributes } from "../AuthenticationFramework/ExtAttributes.osa.mjs";


/**
 * @summary OidOrAttr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OidOrAttr  ::=  CHOICE {
 *   oid       ATTRIBUTE.&id ({ ExtAttributes }),
 *   attribute Attribute {{ ExtAttributes }},
 *   ... }
 * ```
 */
export
type OidOrAttr =
    { oid: _Element /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ } /* CHOICE_ALT_ROOT */
    | { attribute: Attribute } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_OidOrAttr: $.ASN1Decoder<OidOrAttr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OidOrAttr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OidOrAttr (el: _Element): OidOrAttr {
    if (!_cached_decoder_for_OidOrAttr) { _cached_decoder_for_OidOrAttr = $._decode_extensible_choice<OidOrAttr>({
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "oid", $._decodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */ ],
    "// FIXME: COULD_NOT_COMPILE_TAG_KEY": [ "attribute", _decode_Attribute ]
}); }
    return _cached_decoder_for_OidOrAttr(el);
}

let _cached_encoder_for_OidOrAttr: $.ASN1Encoder<OidOrAttr> | null = null;

/**
 * @summary Encodes a(n) OidOrAttr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OidOrAttr, encoded as an ASN.1 Element.
 */
export
function _encode_OidOrAttr (value: OidOrAttr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OidOrAttr) { _cached_encoder_for_OidOrAttr = $._encode_choice<OidOrAttr>({
    "oid": $._encodeAny /* COULD_NOT_RESOLVE_OBJECT_CLASS_DEF */,
    "attribute": _encode_Attribute,
}, $.BER); }
    return _cached_encoder_for_OidOrAttr(value, elGetter);
}


/* eslint-enable */
