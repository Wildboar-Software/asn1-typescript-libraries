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
import { V23Diag_Item, _decode_V23Diag_Item, _encode_V23Diag_Item } from "../V59/V23Diag-Item.ta.mjs";

/**
 * @summary V23Diag
 * @description
 *
 * High-level V.23 diagnostics (Tag-ID `0Fxx`). ITU-T Rec. V.59 (11/2000) §6.3,
 * §6.8.9.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V23Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV23           Capabilities,
 *               v23TxLevel        TxPowerLevel,
 *               duplex            BOOLEAN,
 *               transmitDataRate  V23Drate,
 *               receiveDataRate   V23Drate,
 *               rxLevelEstimate   V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type V23Diag = V23Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V23Diag: $.ASN1Decoder<V23Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V23Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V23Diag (el: _Element): V23Diag {
    if (!_cached_decoder_for_V23Diag) { _cached_decoder_for_V23Diag = $._decodeSequenceOf<V23Diag_Item>(() => _decode_V23Diag_Item); }
    return _cached_decoder_for_V23Diag(el);
}

let _cached_encoder_for_V23Diag: $.ASN1Encoder<V23Diag> | null = null;

/**
 * @summary Encodes a(n) V23Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V23Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V23Diag (value: V23Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V23Diag) { _cached_encoder_for_V23Diag = $._encodeSequenceOf<V23Diag_Item>(() => _encode_V23Diag_Item, $.BER); }
    return _cached_encoder_for_V23Diag(value, elGetter);
}

/* eslint-enable */
