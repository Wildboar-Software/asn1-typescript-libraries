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



/**
 * @summary ApplyRestrictions
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ApplyRestrictions  ::=  [152] IMPLICIT BIT STRING{
 *         code(0),
 *         toll(1)
 *     }
 * ```
 */
export
type ApplyRestrictions = BIT_STRING;

/**
 * @summary ApplyRestrictions_code
 * @constant
 */
export
const ApplyRestrictions_code: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary code
 * @constant
 */
export
const code: number = ApplyRestrictions_code; /* SHORT_NAMED_BIT */

/**
 * @summary ApplyRestrictions_toll
 * @constant
 */
export
const ApplyRestrictions_toll: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary toll
 * @constant
 */
export
const toll: number = ApplyRestrictions_toll; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ApplyRestrictions: $.ASN1Decoder<ApplyRestrictions> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ApplyRestrictions
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ApplyRestrictions (el: _Element): ApplyRestrictions {
    if (!_cached_decoder_for_ApplyRestrictions) { _cached_decoder_for_ApplyRestrictions = $._decode_implicit<ApplyRestrictions>(() => $._decodeBitString); }
    return _cached_decoder_for_ApplyRestrictions(el);
}

let _cached_encoder_for_ApplyRestrictions: $.ASN1Encoder<ApplyRestrictions> | null = null;

/**
 * @summary Encodes a(n) ApplyRestrictions into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ApplyRestrictions, encoded as an ASN.1 Element.
 */
export
function _encode_ApplyRestrictions (value: ApplyRestrictions, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ApplyRestrictions) { _cached_encoder_for_ApplyRestrictions = $._encode_implicit(_TagClass.context, 152, () => $._encodeBitString, $.BER); }
    return _cached_encoder_for_ApplyRestrictions(value, elGetter);
}


/* eslint-enable */
