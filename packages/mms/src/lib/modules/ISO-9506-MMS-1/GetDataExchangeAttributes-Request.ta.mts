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
import { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";
// export { ObjectName, _decode_ObjectName, _encode_ObjectName } from "../ISO-9506-MMS-1/ObjectName.ta.mjs";


/**
 * @summary GetDataExchangeAttributes_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GetDataExchangeAttributes-Request  ::=  ObjectName
 * ```
 */
export
type GetDataExchangeAttributes_Request = ObjectName; // DefinedType

let _cached_decoder_for_GetDataExchangeAttributes_Request: $.ASN1Decoder<GetDataExchangeAttributes_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GetDataExchangeAttributes_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GetDataExchangeAttributes_Request (el: _Element): GetDataExchangeAttributes_Request {
    if (!_cached_decoder_for_GetDataExchangeAttributes_Request) { _cached_decoder_for_GetDataExchangeAttributes_Request = _decode_ObjectName; }
    return _cached_decoder_for_GetDataExchangeAttributes_Request(el);
}

let _cached_encoder_for_GetDataExchangeAttributes_Request: $.ASN1Encoder<GetDataExchangeAttributes_Request> | null = null;

/**
 * @summary Encodes a(n) GetDataExchangeAttributes_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GetDataExchangeAttributes_Request, encoded as an ASN.1 Element.
 */
export
function _encode_GetDataExchangeAttributes_Request (value: GetDataExchangeAttributes_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GetDataExchangeAttributes_Request) { _cached_encoder_for_GetDataExchangeAttributes_Request = _encode_ObjectName; }
    return _cached_encoder_for_GetDataExchangeAttributes_Request(value, elGetter);
}


/* eslint-enable */
