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
import { V29faxDiag_Item, _decode_V29faxDiag_Item, _encode_V29faxDiag_Item } from "../V59/V29faxDiag-Item.ta.mjs";

/**
 * @summary V29faxDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V29faxDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV29          Capabilities,
 *               v29TxLevel       TxPowerLevel,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type V29faxDiag = V29faxDiag_Item[]; // SequenceOfType

let _cached_decoder_for_V29faxDiag: $.ASN1Decoder<V29faxDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V29faxDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V29faxDiag (el: _Element): V29faxDiag {
    if (!_cached_decoder_for_V29faxDiag) { _cached_decoder_for_V29faxDiag = $._decodeSequenceOf<V29faxDiag_Item>(() => _decode_V29faxDiag_Item); }
    return _cached_decoder_for_V29faxDiag(el);
}

let _cached_encoder_for_V29faxDiag: $.ASN1Encoder<V29faxDiag> | null = null;

/**
 * @summary Encodes a(n) V29faxDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V29faxDiag, encoded as an ASN.1 Element.
 */
export
function _encode_V29faxDiag (value: V29faxDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V29faxDiag) { _cached_encoder_for_V29faxDiag = $._encodeSequenceOf<V29faxDiag_Item>(() => _encode_V29faxDiag_Item, $.BER); }
    return _cached_encoder_for_V29faxDiag(value, elGetter);
}

/* eslint-enable */
