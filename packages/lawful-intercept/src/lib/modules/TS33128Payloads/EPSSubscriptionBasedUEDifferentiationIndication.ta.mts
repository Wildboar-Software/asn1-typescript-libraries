/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";
// export { ExternalASNType, _decode_ExternalASNType, _encode_ExternalASNType } from "../TS33128Payloads/ExternalASNType.ta.mjs";


/**
 * @summary EPSSubscriptionBasedUEDifferentiationIndication
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSSubscriptionBasedUEDifferentiationIndication  ::=  ExternalASNType
 * ```
 */
export
type EPSSubscriptionBasedUEDifferentiationIndication = ExternalASNType; // DefinedType

let _cached_decoder_for_EPSSubscriptionBasedUEDifferentiationIndication: $.ASN1Decoder<EPSSubscriptionBasedUEDifferentiationIndication> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSSubscriptionBasedUEDifferentiationIndication
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSSubscriptionBasedUEDifferentiationIndication (el: _Element): EPSSubscriptionBasedUEDifferentiationIndication {
    if (!_cached_decoder_for_EPSSubscriptionBasedUEDifferentiationIndication) { _cached_decoder_for_EPSSubscriptionBasedUEDifferentiationIndication = _decode_ExternalASNType; }
    return _cached_decoder_for_EPSSubscriptionBasedUEDifferentiationIndication(el);
}

let _cached_encoder_for_EPSSubscriptionBasedUEDifferentiationIndication: $.ASN1Encoder<EPSSubscriptionBasedUEDifferentiationIndication> | null = null;

/**
 * @summary Encodes a(n) EPSSubscriptionBasedUEDifferentiationIndication into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSSubscriptionBasedUEDifferentiationIndication, encoded as an ASN.1 Element.
 */
export
function _encode_EPSSubscriptionBasedUEDifferentiationIndication (value: EPSSubscriptionBasedUEDifferentiationIndication, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSSubscriptionBasedUEDifferentiationIndication) { _cached_encoder_for_EPSSubscriptionBasedUEDifferentiationIndication = _encode_ExternalASNType; }
    return _cached_encoder_for_EPSSubscriptionBasedUEDifferentiationIndication(value, elGetter);
}


/* eslint-enable */
