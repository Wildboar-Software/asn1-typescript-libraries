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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary DeleteEventCondition_Response
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteEventCondition-Response  ::=  Unsigned32
 * ```
 */
export
type DeleteEventCondition_Response = Unsigned32; // DefinedType

let _cached_decoder_for_DeleteEventCondition_Response: $.ASN1Decoder<DeleteEventCondition_Response> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteEventCondition_Response
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteEventCondition_Response (el: _Element): DeleteEventCondition_Response {
    if (!_cached_decoder_for_DeleteEventCondition_Response) { _cached_decoder_for_DeleteEventCondition_Response = _decode_Unsigned32; }
    return _cached_decoder_for_DeleteEventCondition_Response(el);
}

let _cached_encoder_for_DeleteEventCondition_Response: $.ASN1Encoder<DeleteEventCondition_Response> | null = null;

/**
 * @summary Encodes a(n) DeleteEventCondition_Response into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteEventCondition_Response, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteEventCondition_Response (value: DeleteEventCondition_Response, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteEventCondition_Response) { _cached_encoder_for_DeleteEventCondition_Response = _encode_Unsigned32; }
    return _cached_encoder_for_DeleteEventCondition_Response(value, elGetter);
}


/* eslint-enable */
