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
 * @summary ContextFlags
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ContextFlags  ::=  BIT STRING {
 *         delegFlag       (0),
 *         mutualFlag      (1),
 *         replayFlag      (2),
 *         sequenceFlag    (3),
 *         anonFlag        (4),
 *         confFlag        (5),
 *         integFlag       (6)
 * }
 * ```
 */
export
type ContextFlags = BIT_STRING;

/**
 * @summary ContextFlags_delegFlag
 * @constant
 */
export
const ContextFlags_delegFlag: number = 0; /* LONG_NAMED_BIT */

/**
 * @summary delegFlag
 * @constant
 */
export
const delegFlag: number = ContextFlags_delegFlag; /* SHORT_NAMED_BIT */

/**
 * @summary ContextFlags_mutualFlag
 * @constant
 */
export
const ContextFlags_mutualFlag: number = 1; /* LONG_NAMED_BIT */

/**
 * @summary mutualFlag
 * @constant
 */
export
const mutualFlag: number = ContextFlags_mutualFlag; /* SHORT_NAMED_BIT */

/**
 * @summary ContextFlags_replayFlag
 * @constant
 */
export
const ContextFlags_replayFlag: number = 2; /* LONG_NAMED_BIT */

/**
 * @summary replayFlag
 * @constant
 */
export
const replayFlag: number = ContextFlags_replayFlag; /* SHORT_NAMED_BIT */

/**
 * @summary ContextFlags_sequenceFlag
 * @constant
 */
export
const ContextFlags_sequenceFlag: number = 3; /* LONG_NAMED_BIT */

/**
 * @summary sequenceFlag
 * @constant
 */
export
const sequenceFlag: number = ContextFlags_sequenceFlag; /* SHORT_NAMED_BIT */

/**
 * @summary ContextFlags_anonFlag
 * @constant
 */
export
const ContextFlags_anonFlag: number = 4; /* LONG_NAMED_BIT */

/**
 * @summary anonFlag
 * @constant
 */
export
const anonFlag: number = ContextFlags_anonFlag; /* SHORT_NAMED_BIT */

/**
 * @summary ContextFlags_confFlag
 * @constant
 */
export
const ContextFlags_confFlag: number = 5; /* LONG_NAMED_BIT */

/**
 * @summary confFlag
 * @constant
 */
export
const confFlag: number = ContextFlags_confFlag; /* SHORT_NAMED_BIT */

/**
 * @summary ContextFlags_integFlag
 * @constant
 */
export
const ContextFlags_integFlag: number = 6; /* LONG_NAMED_BIT */

/**
 * @summary integFlag
 * @constant
 */
export
const integFlag: number = ContextFlags_integFlag; /* SHORT_NAMED_BIT */

let _cached_decoder_for_ContextFlags: $.ASN1Decoder<ContextFlags> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ContextFlags
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ContextFlags (el: _Element): ContextFlags {
    if (!_cached_decoder_for_ContextFlags) { _cached_decoder_for_ContextFlags = $._decodeBitString; }
    return _cached_decoder_for_ContextFlags(el);
}

let _cached_encoder_for_ContextFlags: $.ASN1Encoder<ContextFlags> | null = null;

/**
 * @summary Encodes a(n) ContextFlags into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ContextFlags, encoded as an ASN.1 Element.
 */
export
function _encode_ContextFlags (value: ContextFlags, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ContextFlags) { _cached_encoder_for_ContextFlags = $._encodeBitString; }
    return _cached_encoder_for_ContextFlags(value, elGetter);
}


/* eslint-enable */
