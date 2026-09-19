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
 * @summary TargetIdentifierProvenance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifierProvenance  ::=  ENUMERATED
 * {
 *     lEAProvided(1),
 *     observed(2),
 *     matchedOn(3),
 *     other(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_TargetIdentifierProvenance {
    lEAProvided = 1,
    observed = 2,
    matchedOn = 3,
    other = 4,
}

/**
 * @summary TargetIdentifierProvenance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifierProvenance  ::=  ENUMERATED
 * {
 *     lEAProvided(1),
 *     observed(2),
 *     matchedOn(3),
 *     other(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type TargetIdentifierProvenance = _enum_for_TargetIdentifierProvenance;

/**
 * @summary TargetIdentifierProvenance
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TargetIdentifierProvenance  ::=  ENUMERATED
 * {
 *     lEAProvided(1),
 *     observed(2),
 *     matchedOn(3),
 *     other(4)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const TargetIdentifierProvenance = _enum_for_TargetIdentifierProvenance;

/**
 * @summary TargetIdentifierProvenance_lEAProvided
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_lEAProvided: TargetIdentifierProvenance = TargetIdentifierProvenance.lEAProvided; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary lEAProvided
 * @constant
 * @type {number}
 */
export
const lEAProvided: TargetIdentifierProvenance = TargetIdentifierProvenance.lEAProvided; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_observed
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_observed: TargetIdentifierProvenance = TargetIdentifierProvenance.observed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary observed
 * @constant
 * @type {number}
 */
export
const observed: TargetIdentifierProvenance = TargetIdentifierProvenance.observed; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_matchedOn
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_matchedOn: TargetIdentifierProvenance = TargetIdentifierProvenance.matchedOn; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary matchedOn
 * @constant
 * @type {number}
 */
export
const matchedOn: TargetIdentifierProvenance = TargetIdentifierProvenance.matchedOn; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary TargetIdentifierProvenance_other
 * @constant
 * @type {number}
 */
export
const TargetIdentifierProvenance_other: TargetIdentifierProvenance = TargetIdentifierProvenance.other; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary other
 * @constant
 * @type {number}
 */
export
const other: TargetIdentifierProvenance = TargetIdentifierProvenance.other; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_TargetIdentifierProvenance: $.ASN1Decoder<TargetIdentifierProvenance> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TargetIdentifierProvenance
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TargetIdentifierProvenance (el: _Element): TargetIdentifierProvenance {
    if (!_cached_decoder_for_TargetIdentifierProvenance) { _cached_decoder_for_TargetIdentifierProvenance = $._decodeEnumerated; }
    return _cached_decoder_for_TargetIdentifierProvenance(el);
}

let _cached_encoder_for_TargetIdentifierProvenance: $.ASN1Encoder<TargetIdentifierProvenance> | null = null;

/**
 * @summary Encodes a(n) TargetIdentifierProvenance into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TargetIdentifierProvenance, encoded as an ASN.1 Element.
 */
export
function _encode_TargetIdentifierProvenance (value: TargetIdentifierProvenance, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TargetIdentifierProvenance) { _cached_encoder_for_TargetIdentifierProvenance = $._encodeEnumerated; }
    return _cached_encoder_for_TargetIdentifierProvenance(value, elGetter);
}


/* eslint-enable */
