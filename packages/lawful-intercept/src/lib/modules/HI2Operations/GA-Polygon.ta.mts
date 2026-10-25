/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { maxNrOfPoints } from "../HI2Operations/maxNrOfPoints.va.mjs";
import { GA_Polygon_Item, _decode_GA_Polygon_Item, _encode_GA_Polygon_Item } from "../HI2Operations/GA-Polygon-Item.ta.mjs";
// export { GA_Polygon_Item, _decode_GA_Polygon_Item, _encode_GA_Polygon_Item } from "../HI2Operations/GA-Polygon-Item.ta.mjs";


/**
 * @summary GA_Polygon
 * @description
 *
 * UMTS polygon: a sequence of 1 to `maxNrOfPoints` vertices. `maxNrOfPoints`
 * is 15. Each vertex carries geographical coordinates. This document states no
 * vertex order and no closure rule.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), annex D, clause D.5.
 *
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GA-Polygon  ::=  SEQUENCE (SIZE (1..maxNrOfPoints)) OF
 *     SEQUENCE
 *     {
 *         geographicalCoordinates        GeographicalCoordinates,
 *         ...
 *     }
 * ```
 */
export
type GA_Polygon = GA_Polygon_Item[]; // SequenceOfType

let _cached_decoder_for_GA_Polygon: $.ASN1Decoder<GA_Polygon> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GA_Polygon
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GA_Polygon (el: _Element): GA_Polygon {
    if (!_cached_decoder_for_GA_Polygon) { _cached_decoder_for_GA_Polygon = $._decodeSequenceOf<GA_Polygon_Item>(() => _decode_GA_Polygon_Item); }
    const _value = _cached_decoder_for_GA_Polygon(el);
    const _hi = typeof maxNrOfPoints === "bigint" ? Number(maxNrOfPoints) : maxNrOfPoints;
    if (_value.length < 1 || _value.length > _hi) {
        throw new ASN1SizeError("GA_Polygon violates SIZE constraint");
    }
    return _value;
}

let _cached_encoder_for_GA_Polygon: $.ASN1Encoder<GA_Polygon> | null = null;

/**
 * @summary Encodes a(n) GA_Polygon into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GA_Polygon, encoded as an ASN.1 Element.
 */
export
function _encode_GA_Polygon (value: GA_Polygon, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GA_Polygon) { _cached_encoder_for_GA_Polygon = $._encodeSequenceOf<GA_Polygon_Item>(() => _encode_GA_Polygon_Item, $.BER); }
    return _cached_encoder_for_GA_Polygon(value, elGetter);
}


/* eslint-enable */
