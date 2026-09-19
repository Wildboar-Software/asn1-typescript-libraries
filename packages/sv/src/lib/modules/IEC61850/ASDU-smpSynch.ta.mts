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
 * @summary ASDU_smpSynch
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ASDU-smpSynch ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ASDU_smpSynch = INTEGER;

/**
 * @summary ASDU_smpSynch_none
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_none: ASDU_smpSynch = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_none
 * @constant
 * @type {number}
 */
export
const none: ASDU_smpSynch = ASDU_smpSynch_none; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_local
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_local: ASDU_smpSynch = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_local
 * @constant
 * @type {number}
 */
export
const local: ASDU_smpSynch = ASDU_smpSynch_local; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_global
 * @constant
 * @type {number}
 */
export
const ASDU_smpSynch_global: ASDU_smpSynch = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary ASDU_smpSynch_global
 * @constant
 * @type {number}
 */
export
const global: ASDU_smpSynch = ASDU_smpSynch_global; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_ASDU_smpSynch: $.ASN1Decoder<ASDU_smpSynch> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ASDU_smpSynch
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ASDU_smpSynch (el: _Element): ASDU_smpSynch {
    if (!_cached_decoder_for_ASDU_smpSynch) { _cached_decoder_for_ASDU_smpSynch = $._decodeInteger; }
    return _cached_decoder_for_ASDU_smpSynch(el);
}

let _cached_encoder_for_ASDU_smpSynch: $.ASN1Encoder<ASDU_smpSynch> | null = null;

/**
 * @summary Encodes a(n) ASDU_smpSynch into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ASDU_smpSynch, encoded as an ASN.1 Element.
 */
export
function _encode_ASDU_smpSynch (value: ASDU_smpSynch, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ASDU_smpSynch) { _cached_encoder_for_ASDU_smpSynch = $._encodeInteger; }
    return _cached_encoder_for_ASDU_smpSynch(value, elGetter);
}


/* eslint-enable */
