/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary NumberOfCltusRadiated
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCltusRadiated          ::=    IntUnsignedLong
 * ```
 */
export
type NumberOfCltusRadiated = IntUnsignedLong; // DefinedType

let _cached_decoder_for_NumberOfCltusRadiated: $.ASN1Decoder<NumberOfCltusRadiated> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCltusRadiated
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfCltusRadiated (el: _Element): NumberOfCltusRadiated {
    if (!_cached_decoder_for_NumberOfCltusRadiated) { _cached_decoder_for_NumberOfCltusRadiated = _decode_IntUnsignedLong; }
    return _cached_decoder_for_NumberOfCltusRadiated(el);
}

let _cached_encoder_for_NumberOfCltusRadiated: $.ASN1Encoder<NumberOfCltusRadiated> | null = null;

/**
 * @summary Encodes a(n) NumberOfCltusRadiated into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCltusRadiated, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfCltusRadiated (value: NumberOfCltusRadiated, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfCltusRadiated) { _cached_encoder_for_NumberOfCltusRadiated = _encode_IntUnsignedLong; }
    return _cached_encoder_for_NumberOfCltusRadiated(value, elGetter);
}


/* eslint-enable */
