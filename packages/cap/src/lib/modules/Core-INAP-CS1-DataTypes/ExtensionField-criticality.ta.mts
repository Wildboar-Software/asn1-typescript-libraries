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



/**
 * @summary ExtensionField_criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField-criticality ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_ExtensionField_criticality {
    ignore = 0,
    abort = 1,
}

/**
 * @summary ExtensionField_criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField-criticality ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type ExtensionField_criticality = _enum_for_ExtensionField_criticality;

/**
 * @summary ExtensionField_criticality
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ExtensionField-criticality ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const ExtensionField_criticality = _enum_for_ExtensionField_criticality;

/**
 * @summary ExtensionField_criticality_ignore
 * @constant
 * @type {number}
 */
export
const ExtensionField_criticality_ignore: ExtensionField_criticality = ExtensionField_criticality.ignore; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary ignore
 * @constant
 * @type {number}
 */
export
const ignore: ExtensionField_criticality = ExtensionField_criticality.ignore; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary ExtensionField_criticality_abort
 * @constant
 * @type {number}
 */
export
const ExtensionField_criticality_abort: ExtensionField_criticality = ExtensionField_criticality.abort; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary abort
 * @constant
 * @type {number}
 */
export
const abort: ExtensionField_criticality = ExtensionField_criticality.abort; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_ExtensionField_criticality: $.ASN1Decoder<ExtensionField_criticality> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ExtensionField_criticality
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ExtensionField_criticality (el: _Element): ExtensionField_criticality {
    if (!_cached_decoder_for_ExtensionField_criticality) { _cached_decoder_for_ExtensionField_criticality = $._decodeEnumerated; }
    return _cached_decoder_for_ExtensionField_criticality(el);
}

let _cached_encoder_for_ExtensionField_criticality: $.ASN1Encoder<ExtensionField_criticality> | null = null;

/**
 * @summary Encodes a(n) ExtensionField_criticality into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ExtensionField_criticality, encoded as an ASN.1 Element.
 */
export
function _encode_ExtensionField_criticality (value: ExtensionField_criticality, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ExtensionField_criticality) { _cached_encoder_for_ExtensionField_criticality = $._encodeEnumerated; }
    return _cached_encoder_for_ExtensionField_criticality(value, elGetter);
}


/* eslint-enable */
