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
import { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";
// export { MMSString, _decode_MMSString, _encode_MMSString } from "../ISO-9506-MMS-1/MMSString.ta.mjs";


/**
 * @summary Input_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Input-Response  ::=  MMSString
 * ```
 */
export
type Input_Response = MMSString; // DefinedType

let _cached_decoder_for_Input_Response: $.ASN1Decoder<Input_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Input_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Input_Response (el: _Element): Input_Response {
    if (!_cached_decoder_for_Input_Response) { _cached_decoder_for_Input_Response = _decode_MMSString; }
    return _cached_decoder_for_Input_Response(el);
}

let _cached_encoder_for_Input_Response: $.ASN1Encoder<Input_Response> | null = null;

/**
 * @summary Encodes a(n) Input_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Input_Response, encoded as an ASN.1 Element.
 */
export
function _encode_Input_Response (value: Input_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Input_Response) { _cached_encoder_for_Input_Response = _encode_MMSString; }
    return _cached_encoder_for_Input_Response(value, elGetter);
}


/* eslint-enable */
