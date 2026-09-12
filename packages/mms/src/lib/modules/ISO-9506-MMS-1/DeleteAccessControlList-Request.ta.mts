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
 * @summary DeleteAccessControlList_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteAccessControlList-Request  ::=  Identifier
 * ```
 */
export
type DeleteAccessControlList_Request = Identifier; // DefinedType

let _cached_decoder_for_DeleteAccessControlList_Request: $.ASN1Decoder<DeleteAccessControlList_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteAccessControlList_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteAccessControlList_Request (el: _Element): DeleteAccessControlList_Request {
    if (!_cached_decoder_for_DeleteAccessControlList_Request) { _cached_decoder_for_DeleteAccessControlList_Request = _decode_Identifier; }
    return _cached_decoder_for_DeleteAccessControlList_Request(el);
}

let _cached_encoder_for_DeleteAccessControlList_Request: $.ASN1Encoder<DeleteAccessControlList_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteAccessControlList_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteAccessControlList_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteAccessControlList_Request (value: DeleteAccessControlList_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteAccessControlList_Request) { _cached_encoder_for_DeleteAccessControlList_Request = _encode_Identifier; }
    return _cached_encoder_for_DeleteAccessControlList_Request(value, elGetter);
}


/* eslint-enable */
