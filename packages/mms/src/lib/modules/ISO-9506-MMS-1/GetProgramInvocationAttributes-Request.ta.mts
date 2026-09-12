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
 * @summary GetProgramInvocationAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetProgramInvocationAttributes-Request  ::=  Identifier
 * ```
 */
export
type GetProgramInvocationAttributes_Request = Identifier; // DefinedType

let _cached_decoder_for_GetProgramInvocationAttributes_Request: $.ASN1Decoder<GetProgramInvocationAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetProgramInvocationAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetProgramInvocationAttributes_Request (el: _Element): GetProgramInvocationAttributes_Request {
    if (!_cached_decoder_for_GetProgramInvocationAttributes_Request) { _cached_decoder_for_GetProgramInvocationAttributes_Request = _decode_Identifier; }
    return _cached_decoder_for_GetProgramInvocationAttributes_Request(el);
}

let _cached_encoder_for_GetProgramInvocationAttributes_Request: $.ASN1Encoder<GetProgramInvocationAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetProgramInvocationAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetProgramInvocationAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetProgramInvocationAttributes_Request (value: GetProgramInvocationAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetProgramInvocationAttributes_Request) { _cached_encoder_for_GetProgramInvocationAttributes_Request = _encode_Identifier; }
    return _cached_encoder_for_GetProgramInvocationAttributes_Request(value, elGetter);
}


/* eslint-enable */
