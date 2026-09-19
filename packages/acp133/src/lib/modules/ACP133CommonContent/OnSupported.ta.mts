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
 * @summary OnSupported
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OnSupported  ::=  BIT STRING { acp127-nn(0), acp127-pn(1), acp127-tn(2) }
 * ```
 */
export
type OnSupported = BIT_STRING;

/**
 * @summary OnSupported_acp127_nn
 * @constant
 */
export
const OnSupported_acp127_nn: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary acp127_nn
 * @constant
 */
export
const acp127_nn: number = OnSupported_acp127_nn; /* SHORT_NAMED_BIT */

/**
 * @summary OnSupported_acp127_pn
 * @constant
 */
export
const OnSupported_acp127_pn: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary acp127_pn
 * @constant
 */
export
const acp127_pn: number = OnSupported_acp127_pn; /* SHORT_NAMED_BIT */

/**
 * @summary OnSupported_acp127_tn
 * @constant
 */
export
const OnSupported_acp127_tn: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary acp127_tn
 * @constant
 */
export
const acp127_tn: number = OnSupported_acp127_tn; /* SHORT_NAMED_BIT */

let _cached_decoder_for_OnSupported: $.ASN1Decoder<OnSupported> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) OnSupported
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_OnSupported (el: _Element): OnSupported {
    if (!_cached_decoder_for_OnSupported) { _cached_decoder_for_OnSupported = $._decodeBitString; }
    return _cached_decoder_for_OnSupported(el);
}

let _cached_encoder_for_OnSupported: $.ASN1Encoder<OnSupported> | null = null;

/**
 * @summary Encodes a(n) OnSupported into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The OnSupported, encoded as an ASN.1 Element.
 */
export
function _encode_OnSupported (value: OnSupported, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_OnSupported) { _cached_encoder_for_OnSupported = $._encodeBitString; }
    return _cached_encoder_for_OnSupported(value, elGetter);
}


/* eslint-enable */
