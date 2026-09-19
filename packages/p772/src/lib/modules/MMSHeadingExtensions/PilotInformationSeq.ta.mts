/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PilotInformation, _decode_PilotInformation, _encode_PilotInformation } from "../MMSHeadingExtensions/PilotInformation.ta.mjs";
// export { PilotInformation, _decode_PilotInformation, _encode_PilotInformation } from "../MMSHeadingExtensions/PilotInformation.ta.mjs";


/**
 * @summary PilotInformationSeq
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PilotInformationSeq  ::=  SEQUENCE OF PilotInformation
 * ```
 */
export
type PilotInformationSeq = PilotInformation[]; // SequenceOfType

let _cached_decoder_for_PilotInformationSeq: $.ASN1Decoder<PilotInformationSeq> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PilotInformationSeq
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PilotInformationSeq (el: _Element): PilotInformationSeq {
    if (!_cached_decoder_for_PilotInformationSeq) { _cached_decoder_for_PilotInformationSeq = $._decodeSequenceOf<PilotInformation>(() => _decode_PilotInformation); }
    return _cached_decoder_for_PilotInformationSeq(el);
}

let _cached_encoder_for_PilotInformationSeq: $.ASN1Encoder<PilotInformationSeq> | null = null;

/**
 * @summary Encodes a(n) PilotInformationSeq into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PilotInformationSeq, encoded as an ASN.1 Element.
 */
export
function _encode_PilotInformationSeq (value: PilotInformationSeq, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PilotInformationSeq) { _cached_encoder_for_PilotInformationSeq = $._encodeSequenceOf<PilotInformation>(() => _encode_PilotInformation, $.BER); }
    return _cached_encoder_for_PilotInformationSeq(value, elGetter);
}


/* eslint-enable */
