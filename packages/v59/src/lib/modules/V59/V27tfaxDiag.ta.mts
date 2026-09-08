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
import { V27tfaxDiag_Item, _decode_V27tfaxDiag_Item, _encode_V27tfaxDiag_Item } from "../V59/V27tfaxDiag-Item.ta.mjs";

/**
 * @summary V27tfaxDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V27tfaxDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV27T         Capabilities,
 *               v27TxLevel       TxPowerLevel,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type V27tfaxDiag = V27tfaxDiag_Item[]; // SequenceOfType

let _cached_decoder_for_V27tfaxDiag: $.ASN1Decoder<V27tfaxDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V27tfaxDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V27tfaxDiag (el: _Element): V27tfaxDiag {
    if (!_cached_decoder_for_V27tfaxDiag) { _cached_decoder_for_V27tfaxDiag = $._decodeSequenceOf<V27tfaxDiag_Item>(() => _decode_V27tfaxDiag_Item); }
    return _cached_decoder_for_V27tfaxDiag(el);
}

let _cached_encoder_for_V27tfaxDiag: $.ASN1Encoder<V27tfaxDiag> | null = null;

/**
 * @summary Encodes a(n) V27tfaxDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V27tfaxDiag, encoded as an ASN.1 Element.
 */
export
function _encode_V27tfaxDiag (value: V27tfaxDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V27tfaxDiag) { _cached_encoder_for_V27tfaxDiag = $._encodeSequenceOf<V27tfaxDiag_Item>(() => _encode_V27tfaxDiag_Item, $.BER); }
    return _cached_encoder_for_V27tfaxDiag(value, elGetter);
}

/* eslint-enable */
