/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";
// export { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary NumberOfCltusReceived
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCltusReceived          ::=    IntUnsignedLong
 * ```
 */
export
type NumberOfCltusReceived = IntUnsignedLong; // DefinedType

let _cached_decoder_for_NumberOfCltusReceived: $.ASN1Decoder<NumberOfCltusReceived> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCltusReceived
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfCltusReceived (el: _Element): NumberOfCltusReceived {
    if (!_cached_decoder_for_NumberOfCltusReceived) { _cached_decoder_for_NumberOfCltusReceived = _decode_IntUnsignedLong; }
    return _cached_decoder_for_NumberOfCltusReceived(el);
}

let _cached_encoder_for_NumberOfCltusReceived: $.ASN1Encoder<NumberOfCltusReceived> | null = null;

/**
 * @summary Encodes a(n) NumberOfCltusReceived into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCltusReceived, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfCltusReceived (value: NumberOfCltusReceived, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfCltusReceived) { _cached_encoder_for_NumberOfCltusReceived = _encode_IntUnsignedLong; }
    return _cached_encoder_for_NumberOfCltusReceived(value, elGetter);
}


/* eslint-enable */
