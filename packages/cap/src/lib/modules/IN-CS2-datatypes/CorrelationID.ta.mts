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
import { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-CS2-datatypes/Digits.ta.mjs";


/**
 * @summary CorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationID{PARAMETERS-BOUND:bound}  ::=  Digits{bound}
 * ```
 */
export
type CorrelationID = Digits; // DefinedType

let _cached_decoder_for_CorrelationID: $.ASN1Decoder<CorrelationID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelationID (el: _Element): CorrelationID {
    if (!_cached_decoder_for_CorrelationID) { _cached_decoder_for_CorrelationID = _decode_Digits; }
    return _cached_decoder_for_CorrelationID(el);
}

let _cached_encoder_for_CorrelationID: $.ASN1Encoder<CorrelationID> | null = null;

/**
 * @summary Encodes a(n) CorrelationID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationID, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelationID (value: CorrelationID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelationID) { _cached_encoder_for_CorrelationID = _encode_Digits; }
    return _cached_encoder_for_CorrelationID(value, elGetter);
}


/* eslint-enable */
