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
import { TxPowerLevel_Item, _decode_TxPowerLevel_Item, _encode_TxPowerLevel_Item } from "../V59/TxPowerLevel-Item.ta.mjs";

/**
 * @summary TxPowerLevel
 * @description
 *
 * Common mid-level transmit-power object (Tag-IDs `45` to `47` under the parent
 * high-level prefix). ITU-T Rec. V.59 (11/2000) §6.4.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TxPowerLevel  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {initialTxPower  V59String,
 *               txPowerDrop     V59String OPTIONAL,
 *               txPower         V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type TxPowerLevel = TxPowerLevel_Item[]; // SequenceOfType

let _cached_decoder_for_TxPowerLevel: $.ASN1Decoder<TxPowerLevel> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TxPowerLevel
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TxPowerLevel (el: _Element): TxPowerLevel {
    if (!_cached_decoder_for_TxPowerLevel) { _cached_decoder_for_TxPowerLevel = $._decodeSequenceOf<TxPowerLevel_Item>(() => _decode_TxPowerLevel_Item); }
    return _cached_decoder_for_TxPowerLevel(el);
}

let _cached_encoder_for_TxPowerLevel: $.ASN1Encoder<TxPowerLevel> | null = null;

/**
 * @summary Encodes a(n) TxPowerLevel into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TxPowerLevel, encoded as an ASN.1 Element.
 */
export
function _encode_TxPowerLevel (value: TxPowerLevel, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TxPowerLevel) { _cached_encoder_for_TxPowerLevel = $._encodeSequenceOf<TxPowerLevel_Item>(() => _encode_TxPowerLevel_Item, $.BER); }
    return _cached_encoder_for_TxPowerLevel(value, elGetter);
}

/* eslint-enable */
