/* eslint-disable */
import {
    UTF8String,
    VisibleString,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MMSString
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSString  ::=  CHOICE {
 *        ifChar UTF8String,
 *        notChar VisibleString
 * }
 * ```
 */
export
type MMSString =
    { ifChar: UTF8String } /* CHOICE_ALT_ROOT */
    | { notChar: VisibleString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_MMSString: $.ASN1Decoder<MMSString> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSString
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSString (el: _Element): MMSString {
    if (!_cached_decoder_for_MMSString) { _cached_decoder_for_MMSString = $._decode_inextensible_choice<MMSString>({
    "UNIVERSAL 12": [ "ifChar", $._decodeUTF8String ],
    "UNIVERSAL 26": [ "notChar", $._decodeVisibleString ]
}); }
    return _cached_decoder_for_MMSString(el);
}

let _cached_encoder_for_MMSString: $.ASN1Encoder<MMSString> | null = null;

/**
 * @summary Encodes a(n) MMSString into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSString, encoded as an ASN.1 Element.
 */
export
function _encode_MMSString (value: MMSString, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSString) { _cached_encoder_for_MMSString = $._encode_choice<MMSString>({
    "ifChar": $._encodeUTF8String,
    "notChar": $._encodeVisibleString,
}, $.BER); }
    return _cached_encoder_for_MMSString(value, elGetter);
}


/* eslint-enable */
