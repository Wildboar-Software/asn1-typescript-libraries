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
import { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";
// export { ServiceError, _decode_ServiceError, _encode_ServiceError } from "../ISO-9506-MMS-1/ServiceError.ta.mjs";


/**
 * @summary Conclude_ErrorPDU
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Conclude-ErrorPDU  ::=  ServiceError
 * ```
 */
export
type Conclude_ErrorPDU = ServiceError; // DefinedType

let _cached_decoder_for_Conclude_ErrorPDU: $.ASN1Decoder<Conclude_ErrorPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Conclude_ErrorPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Conclude_ErrorPDU (el: _Element): Conclude_ErrorPDU {
    if (!_cached_decoder_for_Conclude_ErrorPDU) { _cached_decoder_for_Conclude_ErrorPDU = _decode_ServiceError; }
    return _cached_decoder_for_Conclude_ErrorPDU(el);
}

let _cached_encoder_for_Conclude_ErrorPDU: $.ASN1Encoder<Conclude_ErrorPDU> | null = null;

/**
 * @summary Encodes a(n) Conclude_ErrorPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Conclude_ErrorPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Conclude_ErrorPDU (value: Conclude_ErrorPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Conclude_ErrorPDU) { _cached_encoder_for_Conclude_ErrorPDU = _encode_ServiceError; }
    return _cached_encoder_for_Conclude_ErrorPDU(value, elGetter);
}


/* eslint-enable */
