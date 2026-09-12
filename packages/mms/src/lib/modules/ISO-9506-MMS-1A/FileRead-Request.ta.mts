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
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../ISO-9506-MMS-1/Integer32.ta.mjs";


/**
 * @summary FileRead_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileRead-Request  ::=  Integer32
 * ```
 */
export
type FileRead_Request = Integer32; // DefinedType

let _cached_decoder_for_FileRead_Request: $.ASN1Decoder<FileRead_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileRead_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileRead_Request (el: _Element): FileRead_Request {
    if (!_cached_decoder_for_FileRead_Request) { _cached_decoder_for_FileRead_Request = _decode_Integer32; }
    return _cached_decoder_for_FileRead_Request(el);
}

let _cached_encoder_for_FileRead_Request: $.ASN1Encoder<FileRead_Request> | null = null;

/**
 * @summary Encodes a(n) FileRead_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileRead_Request, encoded as an ASN.1 Element.
 */
export
function _encode_FileRead_Request (value: FileRead_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileRead_Request) { _cached_encoder_for_FileRead_Request = _encode_Integer32; }
    return _cached_encoder_for_FileRead_Request(value, elGetter);
}


/* eslint-enable */
