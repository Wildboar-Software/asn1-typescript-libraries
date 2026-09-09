/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../Core-INAP-CS1-DataTypes/Digits.ta.mjs";


/**
 * @summary AdditionalCallingPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AdditionalCallingPartyNumber      ::=  Digits
 * ```
 */
export
type AdditionalCallingPartyNumber = Digits; // DefinedType

let _cached_decoder_for_AdditionalCallingPartyNumber: $.ASN1Decoder<AdditionalCallingPartyNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AdditionalCallingPartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AdditionalCallingPartyNumber (el: _Element): AdditionalCallingPartyNumber {
    if (!_cached_decoder_for_AdditionalCallingPartyNumber) { _cached_decoder_for_AdditionalCallingPartyNumber = _decode_Digits; }
    return _cached_decoder_for_AdditionalCallingPartyNumber(el);
}

let _cached_encoder_for_AdditionalCallingPartyNumber: $.ASN1Encoder<AdditionalCallingPartyNumber> | null = null;

/**
 * @summary Encodes a(n) AdditionalCallingPartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AdditionalCallingPartyNumber, encoded as an ASN.1 Element.
 */
export
function _encode_AdditionalCallingPartyNumber (value: AdditionalCallingPartyNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AdditionalCallingPartyNumber) { _cached_encoder_for_AdditionalCallingPartyNumber = _encode_Digits; }
    return _cached_encoder_for_AdditionalCallingPartyNumber(value, elGetter);
}


/* eslint-enable */
