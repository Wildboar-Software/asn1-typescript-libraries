/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RequestedControlWordTypeNumber, _decode_RequestedControlWordTypeNumber, _encode_RequestedControlWordTypeNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedControlWordTypeNumber.ta.mjs";
// export { RequestedControlWordTypeNumber, RequestedControlWordTypeNumber_allControlWords /* IMPORTED_LONG_NAMED_INTEGER */, allControlWords /* IMPORTED_SHORT_NAMED_INTEGER */, RequestedControlWordTypeNumber_clcw /* IMPORTED_LONG_NAMED_INTEGER */, clcw /* IMPORTED_SHORT_NAMED_INTEGER */, RequestedControlWordTypeNumber_notClcw /* IMPORTED_LONG_NAMED_INTEGER */, notClcw /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_RequestedControlWordTypeNumber, _encode_RequestedControlWordTypeNumber } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/RequestedControlWordTypeNumber.ta.mjs";


function integerIsOneOf (value: number | bigint, allowed: readonly bigint[]): boolean {
    const n = typeof value === "bigint" ? value : BigInt(value);
    return allowed.includes(n);
}

/**
 * @summary ControlWordTypeNumber
 * @description
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

let _cached_encoder_for_ControlWordTypeNumber: $.ASN1Encoder<ControlWordTypeNumber> | null = null;

/**
 * @summary Encodes a(n) ControlWordTypeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlWordTypeNumber, encoded as an ASN.1 Element.
 */
export
function _encode_ControlWordTypeNumber (value: ControlWordTypeNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlWordTypeNumber) { _cached_encoder_for_ControlWordTypeNumber = _encode_RequestedControlWordTypeNumber; }
    return _cached_encoder_for_ControlWordTypeNumber(value, elGetter);
}


/* eslint-enable */
import { RequestedControlWordTypeNumber_allControlWords, RequestedControlWordTypeNumber_clcw, RequestedControlWordTypeNumber_notClcw } from "./RequestedControlWordTypeNumber.ta.mjs";
