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
import { StatusResponse, _decode_StatusResponse, _encode_StatusResponse } from "../ISO-9506-MMS-1/StatusResponse.ta.mjs";
// export { StatusResponse, _decode_StatusResponse, _encode_StatusResponse } from "../ISO-9506-MMS-1/StatusResponse.ta.mjs";


/**
 * @summary VMDReset_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VMDReset-Response  ::=  StatusResponse
 * ```
 */
export
type VMDReset_Response = StatusResponse; // DefinedType

let _cached_decoder_for_VMDReset_Response: $.ASN1Decoder<VMDReset_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VMDReset_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VMDReset_Response (el: _Element): VMDReset_Response {
    if (!_cached_decoder_for_VMDReset_Response) { _cached_decoder_for_VMDReset_Response = _decode_StatusResponse; }
    return _cached_decoder_for_VMDReset_Response(el);
}

let _cached_encoder_for_VMDReset_Response: $.ASN1Encoder<VMDReset_Response> | null = null;

/**
 * @summary Encodes a(n) VMDReset_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VMDReset_Response, encoded as an ASN.1 Element.
 */
export
function _encode_VMDReset_Response (value: VMDReset_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VMDReset_Response) { _cached_encoder_for_VMDReset_Response = _encode_StatusResponse; }
    return _cached_encoder_for_VMDReset_Response(value, elGetter);
}


/* eslint-enable */
