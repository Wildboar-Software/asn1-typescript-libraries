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
import { V8bisDiag_Item, _decode_V8bisDiag_Item, _encode_V8bisDiag_Item } from "../V59/V8bisDiag-Item.ta.mjs";

/**
 * @summary V8bisDiag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * V8bisDiag  ::= 
 *   SEQUENCE OF
 *     SEQUENCE {v8bisTransaction  INTEGER(1..13),
 *               mR
 *                 SEQUENCE {mRtype      V8bisSignalType,
 *                           mRSequence  V59String},
 *               cR
 *                 SEQUENCE {cRtype      V8bisSignalType,
 *                           cRSequence  V59String},
 *               cL                SEQUENCE {cLSequence  V59String},
 *               cLR               SEQUENCE {cLRSequence  V59String},
 *               eS
 *                 SEQUENCE {eSType
 *                             CHOICE {nONE  INTEGER(0),
 *                                     i     INTEGER(1),
 *                                     r     INTEGER(2)},
 *                           eSSequence  V59String},
 *               ackNak
 *                 SEQUENCE {aCK
 *                             CHOICE {nONE  INTEGER(0),
 *                                     aCK1  INTEGER(1),
 *                                     aCK2  INTEGER(2)},
 *                           nAK
 *                             CHOICE {none  INTEGER(0),
 *                                     nAK1  INTEGER(1),
 *                                     nAK2  INTEGER(2),
 *                                     nAK3  INTEGER(3),
 *                                     nAK4  INTEGER(4)}}}
 * ```
 */
export
type V8bisDiag = V8bisDiag_Item[]; // SequenceOfType

let _cached_decoder_for_V8bisDiag: $.ASN1Decoder<V8bisDiag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) V8bisDiag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_V8bisDiag (el: _Element): V8bisDiag {
    if (!_cached_decoder_for_V8bisDiag) { _cached_decoder_for_V8bisDiag = $._decodeSequenceOf<V8bisDiag_Item>(() => _decode_V8bisDiag_Item); }
    return _cached_decoder_for_V8bisDiag(el);
}

let _cached_encoder_for_V8bisDiag: $.ASN1Encoder<V8bisDiag> | null = null;

/**
 * @summary Encodes a(n) V8bisDiag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The V8bisDiag, encoded as an ASN.1 Element.
 */
export
function _encode_V8bisDiag (value: V8bisDiag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_V8bisDiag) { _cached_encoder_for_V8bisDiag = $._encodeSequenceOf<V8bisDiag_Item>(() => _encode_V8bisDiag_Item, $.BER); }
    return _cached_encoder_for_V8bisDiag(value, elGetter);
}

/* eslint-enable */
