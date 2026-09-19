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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../PKIX1Explicit88/SubjectPublicKeyInfo.ta.mjs";
// export { SubjectPublicKeyInfo, _decode_SubjectPublicKeyInfo, _encode_SubjectPublicKeyInfo } from "../PKIX1Explicit88/SubjectPublicKeyInfo.ta.mjs";
import { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";
// export { Certificate, _decode_Certificate, _encode_Certificate } from "../PKIX1Explicit88/Certificate.ta.mjs";


/**
 * @summary EimConfigurationData_eimPublicKeyData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EimConfigurationData-eimPublicKeyData ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type EimConfigurationData_eimPublicKeyData =
    { eimPublicKey: SubjectPublicKeyInfo } /* CHOICE_ALT_ROOT */
    | { eimCertificate: Certificate } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EimConfigurationData_eimPublicKeyData: $.ASN1Decoder<EimConfigurationData_eimPublicKeyData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EimConfigurationData_eimPublicKeyData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EimConfigurationData_eimPublicKeyData (el: _Element): EimConfigurationData_eimPublicKeyData {
    if (!_cached_decoder_for_EimConfigurationData_eimPublicKeyData) { _cached_decoder_for_EimConfigurationData_eimPublicKeyData = $._decode_inextensible_choice<EimConfigurationData_eimPublicKeyData>({
    "CONTEXT 0": [ "eimPublicKey", _decode_SubjectPublicKeyInfo ],
    "CONTEXT 1": [ "eimCertificate", _decode_Certificate ]
}); }
    return _cached_decoder_for_EimConfigurationData_eimPublicKeyData(el);
}

let _cached_encoder_for_EimConfigurationData_eimPublicKeyData: $.ASN1Encoder<EimConfigurationData_eimPublicKeyData> | null = null;

/**
 * @summary Encodes a(n) EimConfigurationData_eimPublicKeyData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EimConfigurationData_eimPublicKeyData, encoded as an ASN.1 Element.
 */
export
function _encode_EimConfigurationData_eimPublicKeyData (value: EimConfigurationData_eimPublicKeyData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EimConfigurationData_eimPublicKeyData) { _cached_encoder_for_EimConfigurationData_eimPublicKeyData = $._encode_choice<EimConfigurationData_eimPublicKeyData>({
    "eimPublicKey": _encode_SubjectPublicKeyInfo,
    "eimCertificate": _encode_Certificate,
}, $.BER); }
    return _cached_encoder_for_EimConfigurationData_eimPublicKeyData(value, elGetter);
}


/* eslint-enable */
