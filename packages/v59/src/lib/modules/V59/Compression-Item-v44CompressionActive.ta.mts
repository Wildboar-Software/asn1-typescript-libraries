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
 * @summary Compression_Item_v44CompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v44CompressionActive ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Compression_Item_v44CompressionActive {
    none = 0,
    txOnly = 1,
    rxOnly = 2,
    both = 3,
}

/**
 * @summary Compression_Item_v44CompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v44CompressionActive ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Compression_Item_v44CompressionActive = _enum_for_Compression_Item_v44CompressionActive;

/**
 * @summary Compression_Item_v44CompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v44CompressionActive ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const Compression_Item_v44CompressionActive = _enum_for_Compression_Item_v44CompressionActive;

/**
 * @summary Compression_Item_v44CompressionActive_none
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_none: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_txOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_txOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.txOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary txOnly
 * @constant
 * @type {number}
 */
export
const txOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.txOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_rxOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_rxOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.rxOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary rxOnly
 * @constant
 * @type {number}
 */
export
const rxOnly: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.rxOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v44CompressionActive_both
 * @constant
 * @type {number}
 */
export
const Compression_Item_v44CompressionActive_both: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Compression_Item_v44CompressionActive = Compression_Item_v44CompressionActive.both; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Compression_Item_v44CompressionActive: $.ASN1Decoder<Compression_Item_v44CompressionActive> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Compression_Item_v44CompressionActive
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Compression_Item_v44CompressionActive (el: _Element): Compression_Item_v44CompressionActive {
    if (!_cached_decoder_for_Compression_Item_v44CompressionActive) { _cached_decoder_for_Compression_Item_v44CompressionActive = $._decodeEnumerated; }
    return _cached_decoder_for_Compression_Item_v44CompressionActive(el);
}

let _cached_encoder_for_Compression_Item_v44CompressionActive: $.ASN1Encoder<Compression_Item_v44CompressionActive> | null = null;

/**
 * @summary Encodes a(n) Compression_Item_v44CompressionActive into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Compression_Item_v44CompressionActive, encoded as an ASN.1 Element.
 */
export
function _encode_Compression_Item_v44CompressionActive (value: Compression_Item_v44CompressionActive, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Compression_Item_v44CompressionActive) { _cached_encoder_for_Compression_Item_v44CompressionActive = $._encodeEnumerated; }
    return _cached_encoder_for_Compression_Item_v44CompressionActive(value, elGetter);
}


/* eslint-enable */
