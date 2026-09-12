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
 * @summary DeleteUnitControl_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteUnitControl-Request  ::=  Identifier
 * ```
 */
export
type DeleteUnitControl_Request = Identifier; // DefinedType

let _cached_decoder_for_DeleteUnitControl_Request: $.ASN1Decoder<DeleteUnitControl_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteUnitControl_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteUnitControl_Request (el: _Element): DeleteUnitControl_Request {
    if (!_cached_decoder_for_DeleteUnitControl_Request) { _cached_decoder_for_DeleteUnitControl_Request = _decode_Identifier; }
    return _cached_decoder_for_DeleteUnitControl_Request(el);
}

let _cached_encoder_for_DeleteUnitControl_Request: $.ASN1Encoder<DeleteUnitControl_Request> | null = null;

/**
 * @summary Encodes a(n) DeleteUnitControl_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteUnitControl_Request, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteUnitControl_Request (value: DeleteUnitControl_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteUnitControl_Request) { _cached_encoder_for_DeleteUnitControl_Request = _encode_Identifier; }
    return _cached_encoder_for_DeleteUnitControl_Request(value, elGetter);
}


/* eslint-enable */
