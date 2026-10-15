/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary Duration
 * @description
 * 
 * A length of time expressed in microseconds, from 0 through 4294967295.
 * Section 3 does not define an RAF parameter of this type.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Duration                 ::=    IntUnsignedLong
 * ```
 */
export
type Duration = IntUnsignedLong; // DefinedType

let _cached_decoder_for_Duration: $.ASN1Decoder<Duration> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Duration
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Duration (el: _Element): Duration {
    if (!_cached_decoder_for_Duration) { _cached_decoder_for_Duration = _decode_IntUnsignedLong; }
    return _cached_decoder_for_Duration(el);
}

let _cached_encoder_for_Duration: $.ASN1Encoder<Duration> | null = null;

/**
 * @summary Encodes a(n) Duration into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Duration, encoded as an ASN.1 Element.
 */
export
function _encode_Duration (value: Duration, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Duration) { _cached_encoder_for_Duration = _encode_IntUnsignedLong; }
    return _cached_encoder_for_Duration(value, elGetter);
}


/* eslint-enable */
