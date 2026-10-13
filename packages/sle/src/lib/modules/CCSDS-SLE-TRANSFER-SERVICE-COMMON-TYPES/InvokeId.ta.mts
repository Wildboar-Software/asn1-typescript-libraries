/* eslint-disable */
import {
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IntUnsignedShort, _decode_IntUnsignedShort, _encode_IntUnsignedShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedShort.ta.mjs";
// export { IntUnsignedShort, _decode_IntUnsignedShort, _encode_IntUnsignedShort } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/IntUnsignedShort.ta.mjs";


/**
 * @summary InvokeId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeId                ::=     IntUnsignedShort
 * ```
 */
export
type InvokeId = IntUnsignedShort; // DefinedType

let _cached_decoder_for_InvokeId: $.ASN1Decoder<InvokeId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvokeId (el: _Element): InvokeId {
    if (!_cached_decoder_for_InvokeId) { _cached_decoder_for_InvokeId = _decode_IntUnsignedShort; }
    return _cached_decoder_for_InvokeId(el);
}

let _cached_encoder_for_InvokeId: $.ASN1Encoder<InvokeId> | null = null;

/**
 * @summary Encodes a(n) InvokeId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeId, encoded as an ASN.1 Element.
 */
export
function _encode_InvokeId (value: InvokeId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvokeId) { _cached_encoder_for_InvokeId = _encode_IntUnsignedShort; }
    return _cached_encoder_for_InvokeId(value, elGetter);
}


/* eslint-enable */
