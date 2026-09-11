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
import { DTEDCE_Item, _decode_DTEDCE_Item, _encode_DTEDCE_Item } from "../V59/DTEDCE-Item.ta.mjs";

/**
 * @summary DTEDCE
 * @description
 *
 * High-level DTE/DCE interface diagnostics (Tag-ID `31xx`). ITU-T Rec. V.59
 * (11/2000) §6.3, §6.13.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DTEDCE  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {txFlowControl  V59String,
 *               rxFlowControl  V59String,
 *               protocol       V59String,
 *               txSpeed        INTEGER(50..1677215),
 *               rxSpeed        INTEGER(50..1677215),
 *               txThroughput   INTEGER(50..1677215),
 *               rxThroughput   INTEGER(50..1677215),
 *               txErrors       INTEGER(0..65535),
 *               rxErrors       INTEGER(0..65535),
 *               ...}
 * ```
 */
export
type DTEDCE = DTEDCE_Item[]; // SequenceOfType

let _cached_decoder_for_DTEDCE: $.ASN1Decoder<DTEDCE> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DTEDCE
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DTEDCE (el: _Element): DTEDCE {
    if (!_cached_decoder_for_DTEDCE) { _cached_decoder_for_DTEDCE = $._decodeSequenceOf<DTEDCE_Item>(() => _decode_DTEDCE_Item); }
    return _cached_decoder_for_DTEDCE(el);
}

let _cached_encoder_for_DTEDCE: $.ASN1Encoder<DTEDCE> | null = null;

/**
 * @summary Encodes a(n) DTEDCE into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DTEDCE, encoded as an ASN.1 Element.
 */
export
function _encode_DTEDCE (value: DTEDCE, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DTEDCE) { _cached_encoder_for_DTEDCE = $._encodeSequenceOf<DTEDCE_Item>(() => _encode_DTEDCE_Item, $.BER); }
    return _cached_encoder_for_DTEDCE(value, elGetter);
}

/* eslint-enable */
