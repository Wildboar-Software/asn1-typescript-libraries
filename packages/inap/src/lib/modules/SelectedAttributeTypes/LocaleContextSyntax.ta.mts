/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { ub_localeContextSyntax } from "../UpperBounds/ub-localeContextSyntax.va.mjs";


/**
 * @summary LocaleContextSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocaleContextSyntax  ::=  CHOICE {
 *   localeID1  OBJECT IDENTIFIER,
 *   localeID2  DirectoryString{ub-localeContextSyntax}
 * }
 * ```
 */
export
type LocaleContextSyntax =
    { localeID1: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { localeID2: DirectoryString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LocaleContextSyntax: $.ASN1Decoder<LocaleContextSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocaleContextSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocaleContextSyntax (el: _Element): LocaleContextSyntax {
    if (!_cached_decoder_for_LocaleContextSyntax) { _cached_decoder_for_LocaleContextSyntax = $._decode_inextensible_choice<LocaleContextSyntax>({
    "UNIVERSAL 6": [ "localeID1", $._decodeObjectIdentifier ],
    "UNIVERSAL 20": [ "localeID2", _decode_DirectoryString ],
    "UNIVERSAL 19": [ "localeID2", _decode_DirectoryString ],
    "UNIVERSAL 28": [ "localeID2", _decode_DirectoryString ],
    "UNIVERSAL 30": [ "localeID2", _decode_DirectoryString ],
    "UNIVERSAL 12": [ "localeID2", _decode_DirectoryString ]
}); }
    return _cached_decoder_for_LocaleContextSyntax(el);
}

let _cached_encoder_for_LocaleContextSyntax: $.ASN1Encoder<LocaleContextSyntax> | null = null;

/**
 * @summary Encodes a(n) LocaleContextSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocaleContextSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_LocaleContextSyntax (value: LocaleContextSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocaleContextSyntax) { _cached_encoder_for_LocaleContextSyntax = $._encode_choice<LocaleContextSyntax>({
    "localeID1": $._encodeObjectIdentifier,
    "localeID2": _encode_DirectoryString,
}, $.BER); }
    return _cached_encoder_for_LocaleContextSyntax(value, elGetter);
}


/* eslint-enable */
