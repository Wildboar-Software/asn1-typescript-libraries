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
    Attribute, _decode_Attribute, _encode_Attribute
} from "@wildboar/x500/src/lib/modules/InformationFramework/Attribute.ta.mjs";


/**
 * @summary ClaimedAttributes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ClaimedAttributes  ::=  SEQUENCE OF Attribute
 * ```
 */
export
type ClaimedAttributes = Attribute[]; // SequenceOfType

let _cached_decoder_for_ClaimedAttributes: $.ASN1Decoder<ClaimedAttributes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClaimedAttributes
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ClaimedAttributes} The decoded data structure.
 */
export
function _decode_ClaimedAttributes (el: _Element) {
    if (!_cached_decoder_for_ClaimedAttributes) { _cached_decoder_for_ClaimedAttributes = $._decodeSequenceOf<Attribute>(() => _decode_Attribute); }
    return _cached_decoder_for_ClaimedAttributes(el);
}

let _cached_encoder_for_ClaimedAttributes: $.ASN1Encoder<ClaimedAttributes> | null = null;

/**
 * @summary Encodes a(n) ClaimedAttributes into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClaimedAttributes, encoded as an ASN.1 Element.
 */
export
function _encode_ClaimedAttributes (value: ClaimedAttributes, elGetter: $.ASN1Encoder<ClaimedAttributes>) {
    if (!_cached_encoder_for_ClaimedAttributes) { _cached_encoder_for_ClaimedAttributes = $._encodeSequenceOf<Attribute>(() => _encode_Attribute, $.DER); }
    return _cached_encoder_for_ClaimedAttributes(value, elGetter);
}


/* eslint-enable */
