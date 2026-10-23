/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { LegInformation, _decode_LegInformation, _encode_LegInformation } from "../IN-CS-1-DataTypes-appendix/LegInformation.ta.mjs";
// export { LegInformation, _decode_LegInformation, _encode_LegInformation } from "../IN-CS-1-DataTypes-appendix/LegInformation.ta.mjs";


/**
 * @summary CallPartyHandlingResultsArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CallPartyHandlingResultsArg  ::=  SEQUENCE OF LegInformation
 * ```
 */
export
type CallPartyHandlingResultsArg = LegInformation[]; // SequenceOfType

let _cached_decoder_for_CallPartyHandlingResultsArg: $.ASN1Decoder<CallPartyHandlingResultsArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CallPartyHandlingResultsArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CallPartyHandlingResultsArg (el: _Element): CallPartyHandlingResultsArg {
    if (!_cached_decoder_for_CallPartyHandlingResultsArg) { _cached_decoder_for_CallPartyHandlingResultsArg = $._decodeSequenceOf<LegInformation>(() => _decode_LegInformation); }
    return _cached_decoder_for_CallPartyHandlingResultsArg(el);
}

let _cached_encoder_for_CallPartyHandlingResultsArg: $.ASN1Encoder<CallPartyHandlingResultsArg> | null = null;

/**
 * @summary Encodes a(n) CallPartyHandlingResultsArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CallPartyHandlingResultsArg, encoded as an ASN.1 Element.
 */
export
function _encode_CallPartyHandlingResultsArg (value: CallPartyHandlingResultsArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CallPartyHandlingResultsArg) { _cached_encoder_for_CallPartyHandlingResultsArg = $._encodeSequenceOf<LegInformation>(() => _encode_LegInformation, $.BER); }
    return _cached_encoder_for_CallPartyHandlingResultsArg(value, elGetter);
}


/* eslint-enable */
