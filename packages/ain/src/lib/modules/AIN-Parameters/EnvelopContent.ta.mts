/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EnvelopContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EnvelopContent  ::=  [75] IMPLICIT OCTET STRING(SIZE(1..180))
 * ```
 */
export
type EnvelopContent = OCTET_STRING; // OctetStringType

let _cached_decoder_for_EnvelopContent: $.ASN1Decoder<EnvelopContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EnvelopContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EnvelopContent (el: _Element): EnvelopContent {
    if (!_cached_decoder_for_EnvelopContent) { _cached_decoder_for_EnvelopContent = $._decode_implicit<EnvelopContent>(() => $._decodeOctetString); }
    return _cached_decoder_for_EnvelopContent(el);
}

let _cached_encoder_for_EnvelopContent: $.ASN1Encoder<EnvelopContent> | null = null;

/**
 * @summary Encodes a(n) EnvelopContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EnvelopContent, encoded as an ASN.1 Element.
 */
export
function _encode_EnvelopContent (value: EnvelopContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EnvelopContent) { _cached_encoder_for_EnvelopContent = $._encode_implicit(_TagClass.context, 75, () => $._encodeOctetString, $.BER); }
    return _cached_encoder_for_EnvelopContent(value, elGetter);
}


/* eslint-enable */
