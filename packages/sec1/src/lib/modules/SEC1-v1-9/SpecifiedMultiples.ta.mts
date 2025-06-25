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
import { SpecifiedMultiples_Item, _decode_SpecifiedMultiples_Item, _encode_SpecifiedMultiples_Item } from "../SEC1-v1-9/SpecifiedMultiples-Item.ta.mjs";
/**
 * @summary SpecifiedMultiples
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SpecifiedMultiples  ::=  SEQUENCE OF SEQUENCE {
 *     multiple INTEGER,
 *     point ECPoint }
 * ```
 */
export
type SpecifiedMultiples = SpecifiedMultiples_Item[]; // SequenceOfType

let _cached_decoder_for_SpecifiedMultiples: $.ASN1Decoder<SpecifiedMultiples> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecifiedMultiples
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SpecifiedMultiples} The decoded data structure.
 */
export
function _decode_SpecifiedMultiples (el: _Element): SpecifiedMultiples {
    if (!_cached_decoder_for_SpecifiedMultiples) { _cached_decoder_for_SpecifiedMultiples = $._decodeSequenceOf<SpecifiedMultiples_Item>(() => _decode_SpecifiedMultiples_Item); }
    return _cached_decoder_for_SpecifiedMultiples(el);
}

let _cached_encoder_for_SpecifiedMultiples: $.ASN1Encoder<SpecifiedMultiples> | null = null;

/**
 * @summary Encodes a(n) SpecifiedMultiples into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecifiedMultiples, encoded as an ASN.1 Element.
 */
export
function _encode_SpecifiedMultiples (value: SpecifiedMultiples, elGetter: $.ASN1Encoder<SpecifiedMultiples>): _Element {
    if (!_cached_encoder_for_SpecifiedMultiples) { _cached_encoder_for_SpecifiedMultiples = $._encodeSequenceOf<SpecifiedMultiples_Item>(() => _encode_SpecifiedMultiples_Item, $.DER); }
    return _cached_encoder_for_SpecifiedMultiples(value, elGetter);
}


/* eslint-enable */
