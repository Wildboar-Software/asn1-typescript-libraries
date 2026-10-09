/* eslint-disable */
import {
    ASN1Element as _Element,
    EXTERNAL,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FragmentSyntax
 * @description
 *
 * One fragment of a retrieval record under level-2 segmentation. A
 * fragment is a proper substring of the record, treated as a string
 * of bytes. The concatenation of the fragments from one segmentation
 * of a record, excluding protocol control information, equals the
 * record. The client cannot predict where the server will split.
 * Diagnostic records are not fragmented. `externallyTagged` carries
 * the fragment as an `EXTERNAL`; `notExternallyTagged` carries it as
 * octets. The standard does not say when to choose one alternative
 * over the other. §3.3.3.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FragmentSyntax  ::=  CHOICE {
 *     externallyTagged                    EXTERNAL,
 *     notExternallyTagged                 OCTET STRING
 * }
 * ```
 */
export
type FragmentSyntax =
    { externallyTagged: EXTERNAL } /* CHOICE_ALT_ROOT */
    | { notExternallyTagged: OCTET_STRING } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FragmentSyntax: $.ASN1Decoder<FragmentSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FragmentSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FragmentSyntax (el: _Element): FragmentSyntax {
    if (!_cached_decoder_for_FragmentSyntax) { _cached_decoder_for_FragmentSyntax = $._decode_inextensible_choice<FragmentSyntax>({
    "UNIVERSAL 8": [ "externallyTagged", $._decodeExternal ],
    "UNIVERSAL 4": [ "notExternallyTagged", $._decodeOctetString ]
}); }
    return _cached_decoder_for_FragmentSyntax(el);
}

let _cached_encoder_for_FragmentSyntax: $.ASN1Encoder<FragmentSyntax> | null = null;

/**
 * @summary Encodes a(n) FragmentSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FragmentSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_FragmentSyntax (value: FragmentSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FragmentSyntax) { _cached_encoder_for_FragmentSyntax = $._encode_choice<FragmentSyntax>({
    "externallyTagged": $._encodeExternal,
    "notExternallyTagged": $._encodeOctetString,
}, $.BER); }
    return _cached_encoder_for_FragmentSyntax(value, elGetter);
}


/* eslint-enable */
