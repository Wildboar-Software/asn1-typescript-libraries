/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RequestedControlWordTypeNumber, _decode_RequestedControlWordTypeNumber, _encode_RequestedControlWordTypeNumber,
    RequestedControlWordTypeNumber_allControlWords,
    RequestedControlWordTypeNumber_clcw,
    RequestedControlWordTypeNumber_notClcw
} from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedControlWordTypeNumber.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary ControlWordTypeNumber
 * @description
 * 
 * One member of the permitted control-word-type set returned by
 * ROCF-GET-PARAMETER. The permitted values are all control words, CLCW, and
 * control word type 1. Service management sets the set. ROCF-START must select
 * a member of it.
 *
 * CCSDS 911.5-B-4, section 3.4.2.8 and table 3-11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlWordTypeNumber    ::=    RequestedControlWordTypeNumber
 * (  allControlWords
 * |  clcw
 * |  notClcw
 * )
 * ```
 */
export
type ControlWordTypeNumber = RequestedControlWordTypeNumber; // DefinedType

let _cached_decoder_for_ControlWordTypeNumber: $.ASN1Decoder<ControlWordTypeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlWordTypeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlWordTypeNumber (el: _Element): ControlWordTypeNumber {
    if (!_cached_decoder_for_ControlWordTypeNumber) { _cached_decoder_for_ControlWordTypeNumber = _decode_RequestedControlWordTypeNumber; }
    const _decoded = _cached_decoder_for_ControlWordTypeNumber(el);
    if (!integerIsOneOf(_decoded, [BigInt(RequestedControlWordTypeNumber_allControlWords), BigInt(RequestedControlWordTypeNumber_clcw), BigInt(RequestedControlWordTypeNumber_notClcw)])) {
        throw new ASN1Error("ControlWordTypeNumber violates RequestedControlWordTypeNumber (allControlWords | clcw | notClcw)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) ControlWordTypeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlWordTypeNumber, encoded as an ASN.1 Element.
 */
export const _encode_ControlWordTypeNumber: $.ASN1Encoder<ControlWordTypeNumber> = _encode_RequestedControlWordTypeNumber;


/* eslint-enable */
