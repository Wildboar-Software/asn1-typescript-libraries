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
 * @summary EncodingAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncodingAlgorithm  ::=  ENUMERATED
 * {     aDPCM6K             ( 0),
 *     aDPCM8K             ( 1),
 *     muLawPCM6K             ( 2),
 *     aLawPCM6K             ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EncodingAlgorithm {
    aDPCM6K = 0,
    aDPCM8K = 1,
    muLawPCM6K = 2,
    aLawPCM6K = 3,
}

/**
 * @summary EncodingAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncodingAlgorithm  ::=  ENUMERATED
 * {     aDPCM6K             ( 0),
 *     aDPCM8K             ( 1),
 *     muLawPCM6K             ( 2),
 *     aLawPCM6K             ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
type EncodingAlgorithm = _enum_for_EncodingAlgorithm;

/**
 * @summary EncodingAlgorithm
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncodingAlgorithm  ::=  ENUMERATED
 * {     aDPCM6K             ( 0),
 *     aDPCM8K             ( 1),
 *     muLawPCM6K             ( 2),
 *     aLawPCM6K             ( 3) }
 * ```
 * 
 * @enum {number}
 */
export
const EncodingAlgorithm = _enum_for_EncodingAlgorithm;

/**
 * @summary EncodingAlgorithm_aDPCM6K
 * @constant
 * @type {number}
 */
export
const EncodingAlgorithm_aDPCM6K: EncodingAlgorithm = EncodingAlgorithm.aDPCM6K; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aDPCM6K
 * @constant
 * @type {number}
 */
export
const aDPCM6K: EncodingAlgorithm = EncodingAlgorithm.aDPCM6K; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncodingAlgorithm_aDPCM8K
 * @constant
 * @type {number}
 */
export
const EncodingAlgorithm_aDPCM8K: EncodingAlgorithm = EncodingAlgorithm.aDPCM8K; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aDPCM8K
 * @constant
 * @type {number}
 */
export
const aDPCM8K: EncodingAlgorithm = EncodingAlgorithm.aDPCM8K; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncodingAlgorithm_muLawPCM6K
 * @constant
 * @type {number}
 */
export
const EncodingAlgorithm_muLawPCM6K: EncodingAlgorithm = EncodingAlgorithm.muLawPCM6K; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary muLawPCM6K
 * @constant
 * @type {number}
 */
export
const muLawPCM6K: EncodingAlgorithm = EncodingAlgorithm.muLawPCM6K; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EncodingAlgorithm_aLawPCM6K
 * @constant
 * @type {number}
 */
export
const EncodingAlgorithm_aLawPCM6K: EncodingAlgorithm = EncodingAlgorithm.aLawPCM6K; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary aLawPCM6K
 * @constant
 * @type {number}
 */
export
const aLawPCM6K: EncodingAlgorithm = EncodingAlgorithm.aLawPCM6K; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EncodingAlgorithm: $.ASN1Decoder<EncodingAlgorithm> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncodingAlgorithm
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncodingAlgorithm (el: _Element): EncodingAlgorithm {
    if (!_cached_decoder_for_EncodingAlgorithm) { _cached_decoder_for_EncodingAlgorithm = $._decodeEnumerated; }
    return _cached_decoder_for_EncodingAlgorithm(el);
}

let _cached_encoder_for_EncodingAlgorithm: $.ASN1Encoder<EncodingAlgorithm> | null = null;

/**
 * @summary Encodes a(n) EncodingAlgorithm into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncodingAlgorithm, encoded as an ASN.1 Element.
 */
export
function _encode_EncodingAlgorithm (value: EncodingAlgorithm, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncodingAlgorithm) { _cached_encoder_for_EncodingAlgorithm = $._encodeEnumerated; }
    return _cached_encoder_for_EncodingAlgorithm(value, elGetter);
}


/* eslint-enable */
