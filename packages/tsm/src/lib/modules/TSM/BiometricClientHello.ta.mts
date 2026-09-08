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
import { BiometricMethod, _decode_BiometricMethod, _encode_BiometricMethod } from "../TSM/BiometricMethod.ta.mjs";
// export { BiometricMethod, _decode_BiometricMethod, _encode_BiometricMethod } from "../TSM/BiometricMethod.ta.mjs";


/**
 * @summary BiometricClientHello
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BiometricClientHello  ::=  SEQUENCE(SIZE(1..MAX)) OF BiometricMethod
 * ```
 */
export
type BiometricClientHello = BiometricMethod[]; // SequenceOfType

let _cached_decoder_for_BiometricClientHello: $.ASN1Decoder<BiometricClientHello> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BiometricClientHello
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BiometricClientHello (el: _Element): BiometricClientHello {
    if (!_cached_decoder_for_BiometricClientHello) { _cached_decoder_for_BiometricClientHello = $._decodeSequenceOf<BiometricMethod>(() => _decode_BiometricMethod); }
    return _cached_decoder_for_BiometricClientHello(el);
}

let _cached_encoder_for_BiometricClientHello: $.ASN1Encoder<BiometricClientHello> | null = null;

/**
 * @summary Encodes a(n) BiometricClientHello into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BiometricClientHello, encoded as an ASN.1 Element.
 */
export
function _encode_BiometricClientHello (value: BiometricClientHello, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BiometricClientHello) { _cached_encoder_for_BiometricClientHello = $._encodeSequenceOf<BiometricMethod>(() => _encode_BiometricMethod, $.BER); }
    return _cached_encoder_for_BiometricClientHello(value, elGetter);
}


/* eslint-enable */
