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
import { InvokeIdType, _decode_InvokeIdType, _encode_InvokeIdType } from "../IN-CS2-datatypes/InvokeIdType.ta.mjs";
// export { InvokeIdType, _decode_InvokeIdType, _encode_InvokeIdType } from "../IN-CS2-datatypes/InvokeIdType.ta.mjs";


/**
 * @summary InvokeID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeID  ::=  InvokeIdType
 * ```
 */
export
type InvokeID = InvokeIdType; // DefinedType

let _cached_decoder_for_InvokeID: $.ASN1Decoder<InvokeID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvokeID (el: _Element): InvokeID {
    if (!_cached_decoder_for_InvokeID) { _cached_decoder_for_InvokeID = _decode_InvokeIdType; }
    return _cached_decoder_for_InvokeID(el);
}

let _cached_encoder_for_InvokeID: $.ASN1Encoder<InvokeID> | null = null;

/**
 * @summary Encodes a(n) InvokeID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeID, encoded as an ASN.1 Element.
 */
export
function _encode_InvokeID (value: InvokeID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvokeID) { _cached_encoder_for_InvokeID = _encode_InvokeIdType; }
    return _cached_encoder_for_InvokeID(value, elGetter);
}


/* eslint-enable */
