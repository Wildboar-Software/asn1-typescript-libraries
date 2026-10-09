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


/**
 * @summary Initiate_ErrorPDU
 * @description
 *
 * Failed Initiate (Result(−)). Error Type is ServiceError (ISO 9506-1:2003
 * §8.2.1.3, clause 24; ISO 9506-2:2003 §8.2.3). The MMS environment is not
 * established.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Initiate-ErrorPDU  ::=  ServiceError
 * ```
 */
export
type Initiate_ErrorPDU = ServiceError; // DefinedType

let _cached_decoder_for_Initiate_ErrorPDU: $.ASN1Decoder<Initiate_ErrorPDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Initiate_ErrorPDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Initiate_ErrorPDU (el: _Element): Initiate_ErrorPDU {
    if (!_cached_decoder_for_Initiate_ErrorPDU) { _cached_decoder_for_Initiate_ErrorPDU = _decode_ServiceError; }
    return _cached_decoder_for_Initiate_ErrorPDU(el);
}

let _cached_encoder_for_Initiate_ErrorPDU: $.ASN1Encoder<Initiate_ErrorPDU> | null = null;

/**
 * @summary Encodes a(n) Initiate_ErrorPDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Initiate_ErrorPDU, encoded as an ASN.1 Element.
 */
export
function _encode_Initiate_ErrorPDU (value: Initiate_ErrorPDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Initiate_ErrorPDU) { _cached_encoder_for_Initiate_ErrorPDU = _encode_ServiceError; }
    return _cached_encoder_for_Initiate_ErrorPDU(value, elGetter);
}


/* eslint-enable */
