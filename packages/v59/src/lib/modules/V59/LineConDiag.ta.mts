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
import { LineConDiag_Item, _decode_LineConDiag_Item, _encode_LineConDiag_Item } from "../V59/LineConDiag-Item.ta.mjs";

/**
 * @summary LineConDiag
 * @description
 *
 * High-level PSTN line-condition estimates (Tag-ID `2Dxx`). If present, there
 * is no constraint on when in the call they were measured. ITU-T Rec. V.59
 * (11/2000) §6.3, §6.10.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LineConDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {lineProbeValues  V59String OPTIONAL,
 *               phaseJitter      V59String OPTIONAL,
 *               ampJitter        V59String OPTIONAL,
 *               nLD              V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type LineConDiag = LineConDiag_Item[]; // SequenceOfType

let _cached_decoder_for_LineConDiag: $.ASN1Decoder<LineConDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LineConDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LineConDiag (el: _Element): LineConDiag {
    if (!_cached_decoder_for_LineConDiag) { _cached_decoder_for_LineConDiag = $._decodeSequenceOf<LineConDiag_Item>(() => _decode_LineConDiag_Item); }
    return _cached_decoder_for_LineConDiag(el);
}

let _cached_encoder_for_LineConDiag: $.ASN1Encoder<LineConDiag> | null = null;

/**
 * @summary Encodes a(n) LineConDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LineConDiag, encoded as an ASN.1 Element.
 */
export
function _encode_LineConDiag (value: LineConDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LineConDiag) { _cached_encoder_for_LineConDiag = $._encodeSequenceOf<LineConDiag_Item>(() => _encode_LineConDiag_Item, $.BER); }
    return _cached_encoder_for_LineConDiag(value, elGetter);
}

/* eslint-enable */
