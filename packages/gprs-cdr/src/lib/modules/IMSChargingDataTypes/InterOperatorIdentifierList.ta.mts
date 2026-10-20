/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../IMSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";
// export { InterOperatorIdentifiers, _decode_InterOperatorIdentifiers, _encode_InterOperatorIdentifiers } from "../IMSChargingDataTypes/InterOperatorIdentifiers.ta.mjs";


/**
 * @summary InterOperatorIdentifierList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InterOperatorIdentifierList  ::=  SEQUENCE  OF
 *    InterOperatorIdentifiers
 * ```
 */
export
type InterOperatorIdentifierList = InterOperatorIdentifiers[]; // SequenceOfType

let _cached_decoder_for_InterOperatorIdentifierList: $.ASN1Decoder<InterOperatorIdentifierList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InterOperatorIdentifierList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InterOperatorIdentifierList (el: _Element): InterOperatorIdentifierList {
    if (!_cached_decoder_for_InterOperatorIdentifierList) { _cached_decoder_for_InterOperatorIdentifierList = $._decodeSequenceOf<InterOperatorIdentifiers>(() => _decode_InterOperatorIdentifiers); }
    return _cached_decoder_for_InterOperatorIdentifierList(el);
}

let _cached_encoder_for_InterOperatorIdentifierList: $.ASN1Encoder<InterOperatorIdentifierList> | null = null;

/**
 * @summary Encodes a(n) InterOperatorIdentifierList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InterOperatorIdentifierList, encoded as an ASN.1 Element.
 */
export
function _encode_InterOperatorIdentifierList (value: InterOperatorIdentifierList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InterOperatorIdentifierList) { _cached_encoder_for_InterOperatorIdentifierList = $._encodeSequenceOf<InterOperatorIdentifiers>(() => _encode_InterOperatorIdentifiers, $.BER); }
    return _cached_encoder_for_InterOperatorIdentifierList(value, elGetter);
}


/* eslint-enable */
