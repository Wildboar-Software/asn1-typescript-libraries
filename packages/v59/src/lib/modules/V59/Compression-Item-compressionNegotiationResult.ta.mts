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
 * @summary Compression_Item_compressionNegotiationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-compressionNegotiationResult ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_Compression_Item_compressionNegotiationResult {
    none = 0,
    v42bisOnly = 1,
    v42bisBoth = 2,
    v44Both = 3,
    v44Only = 4,
    other = 5,
}

/**
 * @summary Compression_Item_compressionNegotiationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-compressionNegotiationResult ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
type Compression_Item_compressionNegotiationResult = _enum_for_Compression_Item_compressionNegotiationResult;

/**
 * @summary Compression_Item_compressionNegotiationResult
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Compression-Item-compressionNegotiationResult ::= ENUMERATED { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @enum {number}
 */
export
const Compression_Item_compressionNegotiationResult = _enum_for_Compression_Item_compressionNegotiationResult;

/**
 * @summary Compression_Item_compressionNegotiationResult_none
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_none: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.none; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary none
 * @constant
 * @type {number}
 */
export
const none: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.none; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v42bisOnly
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v42bisOnly: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisOnly; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v42bisOnly
 * @constant
 * @type {number}
 */
export
const v42bisOnly: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisOnly; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v42bisBoth
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v42bisBoth: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisBoth; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v42bisBoth
 * @constant
 * @type {number}
 */
export
const v42bisBoth: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v42bisBoth; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v44Both
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v44Both: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Both; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v44Both
 * @constant
 * @type {number}
 */
export
const v44Both: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Both; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_v44Only
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_v44Only: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Only; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary v44Only
 * @constant
 * @type {number}
 */
export
const v44Only: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.v44Only; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary Compression_Item_compressionNegotiationResult_other
 * @constant
 * @type {number}
 */
export
const Compression_Item_compressionNegotiationResult_other: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: Compression_Item_compressionNegotiationResult = Compression_Item_compressionNegotiationResult.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_Compression_Item_compressionNegotiationResult: $.ASN1Decoder<Compression_Item_compressionNegotiationResult> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Compression_Item_compressionNegotiationResult
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Compression_Item_compressionNegotiationResult (el: _Element): Compression_Item_compressionNegotiationResult {
    if (!_cached_decoder_for_Compression_Item_compressionNegotiationResult) { _cached_decoder_for_Compression_Item_compressionNegotiationResult = $._decodeEnumerated; }
    return _cached_decoder_for_Compression_Item_compressionNegotiationResult(el);
}

let _cached_encoder_for_Compression_Item_compressionNegotiationResult: $.ASN1Encoder<Compression_Item_compressionNegotiationResult> | null = null;

/**
 * @summary Encodes a(n) Compression_Item_compressionNegotiationResult into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Compression_Item_compressionNegotiationResult, encoded as an ASN.1 Element.
 */
export
function _encode_Compression_Item_compressionNegotiationResult (value: Compression_Item_compressionNegotiationResult, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Compression_Item_compressionNegotiationResult) { _cached_encoder_for_Compression_Item_compressionNegotiationResult = $._encodeEnumerated; }
    return _cached_encoder_for_Compression_Item_compressionNegotiationResult(value, elGetter);
}


/* eslint-enable */
