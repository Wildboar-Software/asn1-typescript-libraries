/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import {
    DirectoryString,
    _decode_DirectoryString,
    _encode_DirectoryString,
} from "@wildboar/x500/src/lib/modules/SelectedAttributeTypes/DirectoryString.ta.mjs";


/**
 * @summary PostalAddress
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PostalAddress  ::=  SEQUENCE SIZE(1..6) OF DirectoryString{maxSize}
 * ```
 */
export
type PostalAddress = DirectoryString[]; // SequenceOfType

let _cached_decoder_for_PostalAddress: $.ASN1Decoder<PostalAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PostalAddress
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PostalAddress} The decoded data structure.
 */
export
function _decode_PostalAddress (el: _Element) {
    if (!_cached_decoder_for_PostalAddress) { _cached_decoder_for_PostalAddress = $._decodeSequenceOf<DirectoryString>(() => _decode_DirectoryString); }
    return _cached_decoder_for_PostalAddress(el);
}

let _cached_encoder_for_PostalAddress: $.ASN1Encoder<PostalAddress> | null = null;

/**
 * @summary Encodes a(n) PostalAddress into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PostalAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PostalAddress (value: PostalAddress, elGetter: $.ASN1Encoder<PostalAddress>) {
    if (!_cached_encoder_for_PostalAddress) { _cached_encoder_for_PostalAddress = $._encodeSequenceOf<DirectoryString>(() => _encode_DirectoryString, $.DER); }
    return _cached_encoder_for_PostalAddress(value, elGetter);
}


/* eslint-enable */
