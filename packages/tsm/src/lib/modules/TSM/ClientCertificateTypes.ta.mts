/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { ClientCertificateType, _enum_for_ClientCertificateType, ClientCertificateType_rsa_sign /* IMPORTED_LONG_ENUMERATION_ITEM */, rsa_sign /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClientCertificateType_dss_sign /* IMPORTED_LONG_ENUMERATION_ITEM */, dss_sign /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClientCertificateType_rsa_fixed_dh /* IMPORTED_LONG_ENUMERATION_ITEM */, rsa_fixed_dh /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClientCertificateType_dss_fixed_dn /* IMPORTED_LONG_ENUMERATION_ITEM */, dss_fixed_dn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ClientCertificateType, _encode_ClientCertificateType } from "../TSM/ClientCertificateType.ta.mjs";
// export { ClientCertificateType, _enum_for_ClientCertificateType, ClientCertificateType_rsa_sign /* IMPORTED_LONG_ENUMERATION_ITEM */, rsa_sign /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClientCertificateType_dss_sign /* IMPORTED_LONG_ENUMERATION_ITEM */, dss_sign /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClientCertificateType_rsa_fixed_dh /* IMPORTED_LONG_ENUMERATION_ITEM */, rsa_fixed_dh /* IMPORTED_SHORT_ENUMERATION_ITEM */, ClientCertificateType_dss_fixed_dn /* IMPORTED_LONG_ENUMERATION_ITEM */, dss_fixed_dn /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ClientCertificateType, _encode_ClientCertificateType } from "../TSM/ClientCertificateType.ta.mjs";


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
