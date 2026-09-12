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
import { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";
// export { FileName, _decode_FileName, _encode_FileName } from "../ISO-9506-MMS-1/FileName.ta.mjs";


/**
 * @summary FileDelete_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FileDelete-Request  ::=  FileName
 * ```
 */
export
type FileDelete_Request = FileName; // DefinedType

let _cached_decoder_for_FileDelete_Request: $.ASN1Decoder<FileDelete_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FileDelete_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FileDelete_Request (el: _Element): FileDelete_Request {
    if (!_cached_decoder_for_FileDelete_Request) { _cached_decoder_for_FileDelete_Request = _decode_FileName; }
    return _cached_decoder_for_FileDelete_Request(el);
}

let _cached_encoder_for_FileDelete_Request: $.ASN1Encoder<FileDelete_Request> | null = null;

/**
 * @summary Encodes a(n) FileDelete_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FileDelete_Request, encoded as an ASN.1 Element.
 */
export
function _encode_FileDelete_Request (value: FileDelete_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FileDelete_Request) { _cached_encoder_for_FileDelete_Request = _encode_FileName; }
    return _cached_encoder_for_FileDelete_Request(value, elGetter);
}


/* eslint-enable */
