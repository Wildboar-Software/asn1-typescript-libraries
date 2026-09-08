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
import { V34Diag_Item, _decode_V34Diag_Item, _encode_V34Diag_Item } from "../V59/V34Diag-Item.ta.mjs";

/**
 * @summary V34Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V34Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV34           Capabilities,
 *               iNFO0Tx           V59String,
 *               iNFO0Rx           V59String,
 *               iNFO1c            V59String,
 *               iNFO1a            V59String,
 *               mPTx              V59String,
 *               mPRx              V59String,
 *               precodeCoeffTx    V59String OPTIONAL,
 *               precodeCoeffRx    V59String OPTIONAL,
 *               v34TxLevel        TxPowerLevel,
 *               txSymbolRate      SymbolRate OPTIONAL,
 *               rxSymbolRate      SymbolRate OPTIONAL,
 *               txCarrierFreq     CarrierFreq OPTIONAL,
 *               rxCarrierFreq     CarrierFreq OPTIONAL,
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
type V34Diag = V34Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V34Diag: $.ASN1Decoder<V34Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V34Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V34Diag (el: _Element): V34Diag {
    if (!_cached_decoder_for_V34Diag) { _cached_decoder_for_V34Diag = $._decodeSequenceOf<V34Diag_Item>(() => _decode_V34Diag_Item); }
    return _cached_decoder_for_V34Diag(el);
}

let _cached_encoder_for_V34Diag: $.ASN1Encoder<V34Diag> | null = null;

/**
 * @summary Encodes a(n) V34Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V34Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V34Diag (value: V34Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V34Diag) { _cached_encoder_for_V34Diag = $._encodeSequenceOf<V34Diag_Item>(() => _encode_V34Diag_Item, $.BER); }
    return _cached_encoder_for_V34Diag(value, elGetter);
}

/* eslint-enable */
