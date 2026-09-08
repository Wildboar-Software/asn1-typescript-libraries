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
import { V61Diag_Item, _decode_V61Diag_Item, _encode_V61Diag_Item } from "../V59/V61Diag-Item.ta.mjs";

/**
 * @summary V61Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V61Diag  ::=  SEQUENCE OF SEQUENCE {...}
 * ```
 */
export
type V61Diag = V61Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V61Diag: $.ASN1Decoder<V61Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V61Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V61Diag (el: _Element): V61Diag {
    if (!_cached_decoder_for_V61Diag) { _cached_decoder_for_V61Diag = $._decodeSequenceOf<V61Diag_Item>(() => _decode_V61Diag_Item); }
    return _cached_decoder_for_V61Diag(el);
}

let _cached_encoder_for_V61Diag: $.ASN1Encoder<V61Diag> | null = null;

/**
 * @summary Encodes a(n) V61Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V61Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V61Diag (value: V61Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V61Diag) { _cached_encoder_for_V61Diag = $._encodeSequenceOf<V61Diag_Item>(() => _encode_V61Diag_Item, $.BER); }
    return _cached_encoder_for_V61Diag(value, elGetter);
}

/* eslint-enable */
