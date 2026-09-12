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
 * @summary DeleteDomain_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteDomain-Request  ::=  Identifier
 * ```
 */
export
type DeleteDomain_Request = Identifier; // DefinedType

let _cached_decoder_for_DeleteDomain_Request: $.ASN1Decoder<DeleteDomain_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteDomain_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteDomain_Request (el: _Element): DeleteDomain_Request {
    if (!_cached_decoder_for_DeleteDomain_Request) { _cached_decoder_for_DeleteDomain_Request = _decode_Identifier; }
    return _cached_decoder_for_DeleteDomain_Request(el);
}

let _cached_encoder_for_DeleteDomain_Request: $.ASN1Encoder<DeleteDomain_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteDomain_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteDomain_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteDomain_Request (value: DeleteDomain_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteDomain_Request) { _cached_encoder_for_DeleteDomain_Request = _encode_Identifier; }
    return _cached_encoder_for_DeleteDomain_Request(value, elGetter);
}


/* eslint-enable */
