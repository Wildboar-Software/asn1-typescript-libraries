/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedLong, _decode_IntUnsignedLong, _encode_IntUnsignedLong } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedLong.ta.mjs";


/**
 * @summary NumberOfCltusProcessed
 * @description
 * 
 * How many CLTUs the provider has attempted to radiate during this service
 * instance. The count includes CLTUs that radiated, expired, or aborted, and a
 * CLTU currently being radiated. Zero when none have been attempted.
 * Accumulated for the whole provision period and kept across release, abort,
 * and protocol abort. CCSDS 912.1-B-5, sections 3.9.2.11, 3.1.11, and 2.6.4.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NumberOfCltusProcessed         ::=    IntUnsignedLong
 * ```
 */
export
type NumberOfCltusProcessed = IntUnsignedLong; // DefinedType

let _cached_decoder_for_NumberOfCltusProcessed: $.ASN1Decoder<NumberOfCltusProcessed> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NumberOfCltusProcessed
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NumberOfCltusProcessed (el: _Element): NumberOfCltusProcessed {
    if (!_cached_decoder_for_NumberOfCltusProcessed) { _cached_decoder_for_NumberOfCltusProcessed = _decode_IntUnsignedLong; }
    return _cached_decoder_for_NumberOfCltusProcessed(el);
}

let _cached_encoder_for_NumberOfCltusProcessed: $.ASN1Encoder<NumberOfCltusProcessed> | null = null;

/**
 * @summary Encodes a(n) NumberOfCltusProcessed into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NumberOfCltusProcessed, encoded as an ASN.1 Element.
 */
export
function _encode_NumberOfCltusProcessed (value: NumberOfCltusProcessed, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NumberOfCltusProcessed) { _cached_encoder_for_NumberOfCltusProcessed = _encode_IntUnsignedLong; }
    return _cached_encoder_for_NumberOfCltusProcessed(value, elGetter);
}


/* eslint-enable */
