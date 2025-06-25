/* eslint-disable */
import { ASN1Element as _Element } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    TraceItem,
    _decode_TraceItem,
    _encode_TraceItem,
} from "../DistributedOperations/TraceItem.ta.mjs";
/**
 * @summary TraceInformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TraceInformation  ::=  SEQUENCE OF TraceItem
 * ```
 */
export type TraceInformation = TraceItem[]; // SequenceOfType

let _cached_decoder_for_TraceInformation: $.ASN1Decoder<TraceInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TraceInformation
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TraceInformation} The decoded data structure.
 */
export function _decode_TraceInformation(el: _Element): TraceInformation {
    if (!_cached_decoder_for_TraceInformation) {
        _cached_decoder_for_TraceInformation = $._decodeSequenceOf<TraceItem>(
            () => _decode_TraceItem
        );
    }
    return _cached_decoder_for_TraceInformation(el);
}

let _cached_encoder_for_TraceInformation: $.ASN1Encoder<TraceInformation> | null = null;

/**
 * @summary Encodes a(n) TraceInformation into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TraceInformation, encoded as an ASN.1 Element.
 */
export function _encode_TraceInformation(
    value: TraceInformation,
    elGetter: $.ASN1Encoder<TraceInformation>
): _Element {
    if (!_cached_encoder_for_TraceInformation) {
        _cached_encoder_for_TraceInformation = $._encodeSequenceOf<TraceItem>(
            () => _encode_TraceItem,
            $.DER
        );
    }
    return _cached_encoder_for_TraceInformation(value, elGetter);
}


/* eslint-enable */
