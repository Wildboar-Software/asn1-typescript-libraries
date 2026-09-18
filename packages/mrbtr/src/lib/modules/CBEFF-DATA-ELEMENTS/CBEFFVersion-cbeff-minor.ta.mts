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
 * @summary CBEFFVersion_cbeff_minor
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CBEFFVersion-cbeff-minor ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type CBEFFVersion_cbeff_minor = INTEGER;

/**
 * @summary CBEFFVersion_cbeff_minor_version0
 * @constant
 * @type {number}
 */
export
const CBEFFVersion_cbeff_minor_version0: CBEFFVersion_cbeff_minor = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CBEFFVersion_cbeff_minor_version0
 * @constant
 * @type {number}
 */
export
const version0: CBEFFVersion_cbeff_minor = CBEFFVersion_cbeff_minor_version0; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_CBEFFVersion_cbeff_minor: $.ASN1Decoder<CBEFFVersion_cbeff_minor> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CBEFFVersion_cbeff_minor
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CBEFFVersion_cbeff_minor (el: _Element): CBEFFVersion_cbeff_minor {
    if (!_cached_decoder_for_CBEFFVersion_cbeff_minor) { _cached_decoder_for_CBEFFVersion_cbeff_minor = $._decodeInteger; }
    return _cached_decoder_for_CBEFFVersion_cbeff_minor(el);
}

let _cached_encoder_for_CBEFFVersion_cbeff_minor: $.ASN1Encoder<CBEFFVersion_cbeff_minor> | null = null;

/**
 * @summary Encodes a(n) CBEFFVersion_cbeff_minor into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CBEFFVersion_cbeff_minor, encoded as an ASN.1 Element.
 */
export
function _encode_CBEFFVersion_cbeff_minor (value: CBEFFVersion_cbeff_minor, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CBEFFVersion_cbeff_minor) { _cached_encoder_for_CBEFFVersion_cbeff_minor = $._encodeInteger; }
    return _cached_encoder_for_CBEFFVersion_cbeff_minor(value, elGetter);
}


/* eslint-enable */
