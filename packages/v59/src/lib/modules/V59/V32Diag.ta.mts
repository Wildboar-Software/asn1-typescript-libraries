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
import { V32Diag_Item, _decode_V32Diag_Item, _encode_V32Diag_Item } from "../V59/V32Diag-Item.ta.mjs";

/**
 * @summary V32Diag
 * @description
 *
 * High-level V.32 / V.32 bis diagnostics (Tag-ID `0Dxx`). ITU-T Rec. V.59
 * (11/2000) §6.3, §6.8.7.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V32Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV32B          Capabilities,
 *               v32TxLevel        TxPowerLevel,
 *               v32txRateSeq      V59String,
 *               v32rxRateSeq      V59String,
 *               txDataHistory     V59String,
 *               rxDataHistory     V59String,
 *               rxLevelEstimate   V59String OPTIONAL,
 *               noiseEstimate     V59String OPTIONAL,
 *               rxSignalQuality   V59String OPTIONAL,
 *               nearEchoEstimate  V59String OPTIONAL,
 *               farEchoEstimate   V59String OPTIONAL,
 *               roundTripDelay    V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type V32Diag = V32Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V32Diag: $.ASN1Decoder<V32Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V32Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V32Diag (el: _Element): V32Diag {
    if (!_cached_decoder_for_V32Diag) { _cached_decoder_for_V32Diag = $._decodeSequenceOf<V32Diag_Item>(() => _decode_V32Diag_Item); }
    return _cached_decoder_for_V32Diag(el);
}

let _cached_encoder_for_V32Diag: $.ASN1Encoder<V32Diag> | null = null;

/**
 * @summary Encodes a(n) V32Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V32Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V32Diag (value: V32Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V32Diag) { _cached_encoder_for_V32Diag = $._encodeSequenceOf<V32Diag_Item>(() => _encode_V32Diag_Item, $.BER); }
    return _cached_encoder_for_V32Diag(value, elGetter);
}

/* eslint-enable */
