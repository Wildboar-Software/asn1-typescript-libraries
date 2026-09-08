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
import { ClientCertificateType, _enum_for_ClientCertificateType, _decode_ClientCertificateType, _encode_ClientCertificateType } from "../TSM/ClientCertificateType.ta.mjs";



/**
 * @summary ClientCertificateTypes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ClientCertificateTypes     ::=     SEQUENCE OF ClientCertificateType
 * ```
 */
export
type ClientCertificateTypes = ClientCertificateType[]; // SequenceOfType

let _cached_decoder_for_ClientCertificateTypes: $.ASN1Decoder<ClientCertificateTypes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ClientCertificateTypes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ClientCertificateTypes (el: _Element): ClientCertificateTypes {
    if (!_cached_decoder_for_ClientCertificateTypes) { _cached_decoder_for_ClientCertificateTypes = $._decodeSequenceOf<ClientCertificateType>(() => _decode_ClientCertificateType); }
    return _cached_decoder_for_ClientCertificateTypes(el);
}

let _cached_encoder_for_ClientCertificateTypes: $.ASN1Encoder<ClientCertificateTypes> | null = null;

/**
 * @summary Encodes a(n) ClientCertificateTypes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ClientCertificateTypes, encoded as an ASN.1 Element.
 */
export
function _encode_ClientCertificateTypes (value: ClientCertificateTypes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ClientCertificateTypes) { _cached_encoder_for_ClientCertificateTypes = $._encodeSequenceOf<ClientCertificateType>(() => _encode_ClientCertificateType, $.BER); }
    return _cached_encoder_for_ClientCertificateTypes(value, elGetter);
}


/* eslint-enable */
