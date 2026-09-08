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
 * @summary Compression_Item_v42bisCompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v42bisCompressionActive ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Compression_Item_v42bisCompressionActive {
    none = 0,
    initOnly = 1,
    respOnly = 2,
    both = 3,
}

/**
 * @summary Compression_Item_v42bisCompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v42bisCompressionActive ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Compression_Item_v42bisCompressionActive = _enum_for_Compression_Item_v42bisCompressionActive;

/**
 * @summary Compression_Item_v42bisCompressionActive
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-v42bisCompressionActive ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const Compression_Item_v42bisCompressionActive = _enum_for_Compression_Item_v42bisCompressionActive;

/**
 * @summary Compression_Item_v42bisCompressionActive_none
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_none: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v42bisCompressionActive_initOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_initOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.initOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initOnly
 * @constant
 * @type {number}
 */
export
const initOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.initOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v42bisCompressionActive_respOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_respOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.respOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary respOnly
 * @constant
 * @type {number}
 */
export
const respOnly: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.respOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_v42bisCompressionActive_both
 * @constant
 * @type {number}
 */
export
const Compression_Item_v42bisCompressionActive_both: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary both
 * @constant
 * @type {number}
 */
export
const both: Compression_Item_v42bisCompressionActive = Compression_Item_v42bisCompressionActive.both; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Compression_Item_v42bisCompressionActive: $.ASN1Decoder<Compression_Item_v42bisCompressionActive> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Compression_Item_v42bisCompressionActive
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Compression_Item_v42bisCompressionActive (el: _Element): Compression_Item_v42bisCompressionActive {
    if (!_cached_decoder_for_Compression_Item_v42bisCompressionActive) { _cached_decoder_for_Compression_Item_v42bisCompressionActive = $._decodeEnumerated; }
    return _cached_decoder_for_Compression_Item_v42bisCompressionActive(el);
}

let _cached_encoder_for_Compression_Item_v42bisCompressionActive: $.ASN1Encoder<Compression_Item_v42bisCompressionActive> | null = null;

/**
 * @summary Encodes a(n) Compression_Item_v42bisCompressionActive into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Compression_Item_v42bisCompressionActive, encoded as an ASN.1 Element.
 */
export
function _encode_Compression_Item_v42bisCompressionActive (value: Compression_Item_v42bisCompressionActive, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Compression_Item_v42bisCompressionActive) { _cached_encoder_for_Compression_Item_v42bisCompressionActive = $._encodeEnumerated; }
    return _cached_encoder_for_Compression_Item_v42bisCompressionActive(value, elGetter);
}


/* eslint-enable */
