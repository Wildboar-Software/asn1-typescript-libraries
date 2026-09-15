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
 * @summary TravellingClassMark
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TravellingClassMark{PARAMETERS-BOUND:bound}  ::=  LocationNumber{bound}
 * ```
 */
export
type TravellingClassMark = LocationNumber; // DefinedType

let _cached_decoder_for_TravellingClassMark: $.ASN1Decoder<TravellingClassMark> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TravellingClassMark
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TravellingClassMark (el: _Element): TravellingClassMark {
    if (!_cached_decoder_for_TravellingClassMark) { _cached_decoder_for_TravellingClassMark = _decode_LocationNumber; }
    return _cached_decoder_for_TravellingClassMark(el);
}

let _cached_encoder_for_TravellingClassMark: $.ASN1Encoder<TravellingClassMark> | null = null;

/**
 * @summary Encodes a(n) TravellingClassMark into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TravellingClassMark, encoded as an ASN.1 Element.
 */
export
function _encode_TravellingClassMark (value: TravellingClassMark, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TravellingClassMark) { _cached_encoder_for_TravellingClassMark = _encode_LocationNumber; }
    return _cached_encoder_for_TravellingClassMark(value, elGetter);
}


/* eslint-enable */
