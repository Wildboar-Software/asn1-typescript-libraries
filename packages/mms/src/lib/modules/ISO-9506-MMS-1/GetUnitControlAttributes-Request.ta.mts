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
import { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";
// export { Identifier, _decode_Identifier, _encode_Identifier } from "../ISO-9506-MMS-1/Identifier.ta.mjs";


/**
 * @summary GetUnitControlAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetUnitControlAttributes-Request  ::=  Identifier
 * ```
 */
export
type GetUnitControlAttributes_Request = Identifier; // DefinedType

let _cached_decoder_for_GetUnitControlAttributes_Request: $.ASN1Decoder<GetUnitControlAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetUnitControlAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetUnitControlAttributes_Request (el: _Element): GetUnitControlAttributes_Request {
    if (!_cached_decoder_for_GetUnitControlAttributes_Request) { _cached_decoder_for_GetUnitControlAttributes_Request = _decode_Identifier; }
    return _cached_decoder_for_GetUnitControlAttributes_Request(el);
}

let _cached_encoder_for_GetUnitControlAttributes_Request: $.ASN1Encoder<GetUnitControlAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetUnitControlAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetUnitControlAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetUnitControlAttributes_Request (value: GetUnitControlAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetUnitControlAttributes_Request) { _cached_encoder_for_GetUnitControlAttributes_Request = _encode_Identifier; }
    return _cached_encoder_for_GetUnitControlAttributes_Request(value, elGetter);
}


/* eslint-enable */
