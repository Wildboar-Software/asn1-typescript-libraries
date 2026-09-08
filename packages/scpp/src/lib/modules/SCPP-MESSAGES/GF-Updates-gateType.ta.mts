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
 * @summary GF_Updates_gateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates-gateType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_GF_Updates_gateType {
    sgf = 0,
    rgf = 1,
}

/**
 * @summary GF_Updates_gateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates-gateType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type GF_Updates_gateType = _enum_for_GF_Updates_gateType;

/**
 * @summary GF_Updates_gateType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GF-Updates-gateType ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const GF_Updates_gateType = _enum_for_GF_Updates_gateType;

/**
 * @summary GF_Updates_gateType_sgf
 * @constant
 * @type {number}
 */
export
const GF_Updates_gateType_sgf: GF_Updates_gateType = GF_Updates_gateType.sgf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary sgf
 * @constant
 * @type {number}
 */
export
const sgf: GF_Updates_gateType = GF_Updates_gateType.sgf; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary GF_Updates_gateType_rgf
 * @constant
 * @type {number}
 */
export
const GF_Updates_gateType_rgf: GF_Updates_gateType = GF_Updates_gateType.rgf; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rgf
 * @constant
 * @type {number}
 */
export
const rgf: GF_Updates_gateType = GF_Updates_gateType.rgf; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_GF_Updates_gateType: $.ASN1Decoder<GF_Updates_gateType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GF_Updates_gateType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GF_Updates_gateType (el: _Element): GF_Updates_gateType {
    if (!_cached_decoder_for_GF_Updates_gateType) { _cached_decoder_for_GF_Updates_gateType = $._decodeEnumerated; }
    return _cached_decoder_for_GF_Updates_gateType(el);
}

let _cached_encoder_for_GF_Updates_gateType: $.ASN1Encoder<GF_Updates_gateType> | null = null;

/**
 * @summary Encodes a(n) GF_Updates_gateType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GF_Updates_gateType, encoded as an ASN.1 Element.
 */
export
function _encode_GF_Updates_gateType (value: GF_Updates_gateType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GF_Updates_gateType) { _cached_encoder_for_GF_Updates_gateType = $._encodeEnumerated; }
    return _cached_encoder_for_GF_Updates_gateType(value, elGetter);
}


/* eslint-enable */
