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
import { V34HdxDiag_Item, _decode_V34HdxDiag_Item, _encode_V34HdxDiag_Item } from "../V59/V34HdxDiag-Item.ta.mjs";

/**
 * @summary V34HdxDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34HdxDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV34H         Capabilities,
 *               iNFO0Tx          V59String,
 *               iNFO0Rx          V59String,
 *               iNFOh            V59String,
 *               mPh              V59String,
 *               precodeCoeffTx   V59String OPTIONAL,
 *               v34TxLevel       TxPowerLevel,
 *               symbolRate       V59String OPTIONAL,
 *               carrierFreq      V59String OPTIONAL,
 *               dataHistory      V59String OPTIONAL,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               noiseEstimate    V59String OPTIONAL,
 *               rxSignalQuality  V59String OPTIONAL,
 *               cCrate
 *                 ENUMERATED {t12R12(0), t24R24(1), t12R24(2), t24R12(3)},
 *               ...}
 * ```
 */
export
type V34HdxDiag = V34HdxDiag_Item[]; // SequenceOfType

let _cached_decoder_for_V34HdxDiag: $.ASN1Decoder<V34HdxDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V34HdxDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V34HdxDiag (el: _Element): V34HdxDiag {
    if (!_cached_decoder_for_V34HdxDiag) { _cached_decoder_for_V34HdxDiag = $._decodeSequenceOf<V34HdxDiag_Item>(() => _decode_V34HdxDiag_Item); }
    return _cached_decoder_for_V34HdxDiag(el);
}

let _cached_encoder_for_V34HdxDiag: $.ASN1Encoder<V34HdxDiag> | null = null;

/**
 * @summary Encodes a(n) V34HdxDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V34HdxDiag, encoded as an ASN.1 Element.
 */
export
function _encode_V34HdxDiag (value: V34HdxDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V34HdxDiag) { _cached_encoder_for_V34HdxDiag = $._encodeSequenceOf<V34HdxDiag_Item>(() => _encode_V34HdxDiag_Item, $.BER); }
    return _cached_encoder_for_V34HdxDiag(value, elGetter);
}

/* eslint-enable */
