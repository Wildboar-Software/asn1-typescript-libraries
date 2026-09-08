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
import { BioAPI_BIR_BIOMETRIC_TYPE, BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes /* IMPORTED_LONG_NAMED_BIT */, typeMultipleBiometricTypes /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeFace /* IMPORTED_LONG_NAMED_BIT */, typeFace /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeVoice /* IMPORTED_LONG_NAMED_BIT */, typeVoice /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeFinger /* IMPORTED_LONG_NAMED_BIT */, typeFinger /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeIris /* IMPORTED_LONG_NAMED_BIT */, typeIris /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeRetina /* IMPORTED_LONG_NAMED_BIT */, typeRetina /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry /* IMPORTED_LONG_NAMED_BIT */, typeHandGeometry /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign /* IMPORTED_LONG_NAMED_BIT */, typeSignatureSign /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke /* IMPORTED_LONG_NAMED_BIT */, typeKeystroke /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement /* IMPORTED_LONG_NAMED_BIT */, typeLipMovement /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeGait /* IMPORTED_LONG_NAMED_BIT */, typeGait /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeVein /* IMPORTED_LONG_NAMED_BIT */, typeVein /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeDNA /* IMPORTED_LONG_NAMED_BIT */, typeDNA /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeEar /* IMPORTED_LONG_NAMED_BIT */, typeEar /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeFoot /* IMPORTED_LONG_NAMED_BIT */, typeFoot /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeScent /* IMPORTED_LONG_NAMED_BIT */, typeScent /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeOther /* IMPORTED_LONG_NAMED_BIT */, typeOther /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typePassword /* IMPORTED_LONG_NAMED_BIT */, typePassword /* IMPORTED_SHORT_NAMED_BIT */, _decode_BioAPI_BIR_BIOMETRIC_TYPE, _encode_BioAPI_BIR_BIOMETRIC_TYPE } from "../BIP/BioAPI-BIR-BIOMETRIC-TYPE.ta.mjs";
// export { BioAPI_BIR_BIOMETRIC_TYPE, BioAPI_BIR_BIOMETRIC_TYPE_typeMultipleBiometricTypes /* IMPORTED_LONG_NAMED_BIT */, typeMultipleBiometricTypes /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeFace /* IMPORTED_LONG_NAMED_BIT */, typeFace /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeVoice /* IMPORTED_LONG_NAMED_BIT */, typeVoice /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeFinger /* IMPORTED_LONG_NAMED_BIT */, typeFinger /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeIris /* IMPORTED_LONG_NAMED_BIT */, typeIris /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeRetina /* IMPORTED_LONG_NAMED_BIT */, typeRetina /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeHandGeometry /* IMPORTED_LONG_NAMED_BIT */, typeHandGeometry /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeSignatureSign /* IMPORTED_LONG_NAMED_BIT */, typeSignatureSign /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeKeystroke /* IMPORTED_LONG_NAMED_BIT */, typeKeystroke /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeLipMovement /* IMPORTED_LONG_NAMED_BIT */, typeLipMovement /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeGait /* IMPORTED_LONG_NAMED_BIT */, typeGait /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeVein /* IMPORTED_LONG_NAMED_BIT */, typeVein /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeDNA /* IMPORTED_LONG_NAMED_BIT */, typeDNA /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeEar /* IMPORTED_LONG_NAMED_BIT */, typeEar /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeFoot /* IMPORTED_LONG_NAMED_BIT */, typeFoot /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeScent /* IMPORTED_LONG_NAMED_BIT */, typeScent /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typeOther /* IMPORTED_LONG_NAMED_BIT */, typeOther /* IMPORTED_SHORT_NAMED_BIT */, BioAPI_BIR_BIOMETRIC_TYPE_typePassword /* IMPORTED_LONG_NAMED_BIT */, typePassword /* IMPORTED_SHORT_NAMED_BIT */, _decode_BioAPI_BIR_BIOMETRIC_TYPE, _encode_BioAPI_BIR_BIOMETRIC_TYPE } from "../BIP/BioAPI-BIR-BIOMETRIC-TYPE.ta.mjs";


/**
 * @summary BiometricType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricType  ::=  BioAPI-BIR-BIOMETRIC-TYPE
 * ```
 */
export
type BiometricType = BioAPI_BIR_BIOMETRIC_TYPE; // DefinedType

let _cached_decoder_for_BiometricType: $.ASN1Decoder<BiometricType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricType (el: _Element): BiometricType {
    if (!_cached_decoder_for_BiometricType) { _cached_decoder_for_BiometricType = _decode_BioAPI_BIR_BIOMETRIC_TYPE; }
    return _cached_decoder_for_BiometricType(el);
}

let _cached_encoder_for_BiometricType: $.ASN1Encoder<BiometricType> | null = null;

/**
 * @summary Encodes a(n) BiometricType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricType, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricType (value: BiometricType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricType) { _cached_encoder_for_BiometricType = _encode_BioAPI_BIR_BIOMETRIC_TYPE; }
    return _cached_encoder_for_BiometricType(value, elGetter);
}


/* eslint-enable */
