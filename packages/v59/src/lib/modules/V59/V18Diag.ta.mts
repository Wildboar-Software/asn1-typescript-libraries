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
import { V18Diag_Item, _decode_V18Diag_Item, _encode_V18Diag_Item } from "../V59/V18Diag-Item.ta.mjs";

/**
 * @summary V18Diag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V18Diag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {modeV18          Capabilities,
 *               v18used
 *                 ENUMERATED {none(0), v18-V21Hi(1), v18-V21Lo(2), v18-V61C(3),
 *                             v18-V61A(4), v21Hi(5), v21Lo(6), dTMF(7),
 *                             eDT(8), baudot45(9), baudot47(10), baudot50(11),
 *                             v23Hi(12), v23Lo(13), bellHi(14), bellLo(15)},
 *               v18TxLevel       TxPowerLevel,
 *               rxLevelEstimate  V59String OPTIONAL,
 *               ...}
 * ```
 */
export
type V18Diag = V18Diag_Item[]; // SequenceOfType

let _cached_decoder_for_V18Diag: $.ASN1Decoder<V18Diag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V18Diag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V18Diag (el: _Element): V18Diag {
    if (!_cached_decoder_for_V18Diag) { _cached_decoder_for_V18Diag = $._decodeSequenceOf<V18Diag_Item>(() => _decode_V18Diag_Item); }
    return _cached_decoder_for_V18Diag(el);
}

let _cached_encoder_for_V18Diag: $.ASN1Encoder<V18Diag> | null = null;

/**
 * @summary Encodes a(n) V18Diag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V18Diag, encoded as an ASN.1 Element.
 */
export
function _encode_V18Diag (value: V18Diag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V18Diag) { _cached_encoder_for_V18Diag = $._encodeSequenceOf<V18Diag_Item>(() => _encode_V18Diag_Item, $.BER); }
    return _cached_encoder_for_V18Diag(value, elGetter);
}

/* eslint-enable */
