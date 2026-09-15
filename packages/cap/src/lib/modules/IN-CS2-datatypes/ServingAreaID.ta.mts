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
 * @summary ServingAreaID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServingAreaID{PARAMETERS-BOUND:bound}  ::= 
 *   LocationNumber{bound}
 * ```
 */
export
type ServingAreaID = LocationNumber; // DefinedType

let _cached_decoder_for_ServingAreaID: $.ASN1Decoder<ServingAreaID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServingAreaID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServingAreaID (el: _Element): ServingAreaID {
    if (!_cached_decoder_for_ServingAreaID) { _cached_decoder_for_ServingAreaID = _decode_LocationNumber; }
    return _cached_decoder_for_ServingAreaID(el);
}

let _cached_encoder_for_ServingAreaID: $.ASN1Encoder<ServingAreaID> | null = null;

/**
 * @summary Encodes a(n) ServingAreaID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServingAreaID, encoded as an ASN.1 Element.
 */
export
function _encode_ServingAreaID (value: ServingAreaID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServingAreaID) { _cached_encoder_for_ServingAreaID = _encode_LocationNumber; }
    return _cached_encoder_for_ServingAreaID(value, elGetter);
}


/* eslint-enable */
