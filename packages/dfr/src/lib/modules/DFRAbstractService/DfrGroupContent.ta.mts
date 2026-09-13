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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";
// export { DfrUniquePermanentIdentifier, _decode_DfrUniquePermanentIdentifier, _encode_DfrUniquePermanentIdentifier } from "../DFRAbstractService/DfrUniquePermanentIdentifier.ta.mjs";


/**
 * @summary DfrGroupContent
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DfrGroupContent  ::=  SEQUENCE OF DfrUniquePermanentIdentifier
 * ```
 */
export
type DfrGroupContent = DfrUniquePermanentIdentifier[]; // SequenceOfType

let _cached_decoder_for_DfrGroupContent: $.ASN1Decoder<DfrGroupContent> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DfrGroupContent
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DfrGroupContent (el: _Element): DfrGroupContent {
    if (!_cached_decoder_for_DfrGroupContent) { _cached_decoder_for_DfrGroupContent = $._decodeSequenceOf<DfrUniquePermanentIdentifier>(() => _decode_DfrUniquePermanentIdentifier); }
    return _cached_decoder_for_DfrGroupContent(el);
}

let _cached_encoder_for_DfrGroupContent: $.ASN1Encoder<DfrGroupContent> | null = null;

/**
 * @summary Encodes a(n) DfrGroupContent into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DfrGroupContent, encoded as an ASN.1 Element.
 */
export
function _encode_DfrGroupContent (value: DfrGroupContent, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DfrGroupContent) { _cached_encoder_for_DfrGroupContent = $._encodeSequenceOf<DfrUniquePermanentIdentifier>(() => _encode_DfrUniquePermanentIdentifier, $.BER); }
    return _cached_encoder_for_DfrGroupContent(value, elGetter);
}


/* eslint-enable */
