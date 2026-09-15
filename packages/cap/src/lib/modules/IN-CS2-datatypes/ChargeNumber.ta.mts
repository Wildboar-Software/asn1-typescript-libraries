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
import { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";
// export { LocationNumber, _decode_LocationNumber, _encode_LocationNumber } from "../IN-CS2-datatypes/LocationNumber.ta.mjs";


/**
 * @summary ChargeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeNumber{PARAMETERS-BOUND:bound}  ::= 
 *   LocationNumber{bound}
 * ```
 */
export
type ChargeNumber = LocationNumber; // DefinedType

let _cached_decoder_for_ChargeNumber: $.ASN1Decoder<ChargeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeNumber (el: _Element): ChargeNumber {
    if (!_cached_decoder_for_ChargeNumber) { _cached_decoder_for_ChargeNumber = _decode_LocationNumber; }
    return _cached_decoder_for_ChargeNumber(el);
}

let _cached_encoder_for_ChargeNumber: $.ASN1Encoder<ChargeNumber> | null = null;

/**
 * @summary Encodes a(n) ChargeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeNumber, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeNumber (value: ChargeNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeNumber) { _cached_encoder_for_ChargeNumber = _encode_LocationNumber; }
    return _cached_encoder_for_ChargeNumber(value, elGetter);
}


/* eslint-enable */
