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
 * @summary UploadSegment_Request
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UploadSegment-Request  ::=  Integer32
 * ```
 */
export
type UploadSegment_Request = Integer32; // DefinedType

let _cached_decoder_for_UploadSegment_Request: $.ASN1Decoder<UploadSegment_Request> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UploadSegment_Request
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UploadSegment_Request (el: _Element): UploadSegment_Request {
    if (!_cached_decoder_for_UploadSegment_Request) { _cached_decoder_for_UploadSegment_Request = _decode_Integer32; }
    return _cached_decoder_for_UploadSegment_Request(el);
}

let _cached_encoder_for_UploadSegment_Request: $.ASN1Encoder<UploadSegment_Request> | null = null;

/**
 * @summary Encodes a(n) UploadSegment_Request into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UploadSegment_Request, encoded as an ASN.1 Element.
 */
export
function _encode_UploadSegment_Request (value: UploadSegment_Request, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UploadSegment_Request) { _cached_encoder_for_UploadSegment_Request = _encode_Integer32; }
    return _cached_encoder_for_UploadSegment_Request(value, elGetter);
}


/* eslint-enable */
