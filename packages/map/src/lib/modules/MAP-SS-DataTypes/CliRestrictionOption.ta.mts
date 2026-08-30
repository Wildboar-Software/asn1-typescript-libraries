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
 * @summary CliRestrictionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CliRestrictionOption {
    permanent = 0,
    temporaryDefaultRestricted = 1,
    temporaryDefaultAllowed = 2,
}

/**
 * @summary CliRestrictionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
type CliRestrictionOption = _enum_for_CliRestrictionOption;

/**
 * @summary CliRestrictionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CliRestrictionOption  ::=  ENUMERATED {
 *     permanent  (0),
 *     temporaryDefaultRestricted  (1),
 *     temporaryDefaultAllowed  (2)}
 * ```
 * 
 * @enum {number}
 */
export
const CliRestrictionOption = _enum_for_CliRestrictionOption;

/**
 * @summary CliRestrictionOption_permanent
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_permanent: CliRestrictionOption = CliRestrictionOption.permanent; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary permanent
 * @constant
 * @type {number}
 */
export
const permanent: CliRestrictionOption = CliRestrictionOption.permanent; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CliRestrictionOption_temporaryDefaultRestricted
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_temporaryDefaultRestricted: CliRestrictionOption = CliRestrictionOption.temporaryDefaultRestricted; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryDefaultRestricted
 * @constant
 * @type {number}
 */
export
const temporaryDefaultRestricted: CliRestrictionOption = CliRestrictionOption.temporaryDefaultRestricted; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CliRestrictionOption_temporaryDefaultAllowed
 * @constant
 * @type {number}
 */
export
const CliRestrictionOption_temporaryDefaultAllowed: CliRestrictionOption = CliRestrictionOption.temporaryDefaultAllowed; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary temporaryDefaultAllowed
 * @constant
 * @type {number}
 */
export
const temporaryDefaultAllowed: CliRestrictionOption = CliRestrictionOption.temporaryDefaultAllowed; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CliRestrictionOption: $.ASN1Decoder<CliRestrictionOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CliRestrictionOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CliRestrictionOption (el: _Element): CliRestrictionOption {
    if (!_cached_decoder_for_CliRestrictionOption) { _cached_decoder_for_CliRestrictionOption = $._decodeEnumerated; }
    return _cached_decoder_for_CliRestrictionOption(el);
}

let _cached_encoder_for_CliRestrictionOption: $.ASN1Encoder<CliRestrictionOption> | null = null;

/**
 * @summary Encodes a(n) CliRestrictionOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CliRestrictionOption, encoded as an ASN.1 Element.
 */
export
function _encode_CliRestrictionOption (value: CliRestrictionOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CliRestrictionOption) { _cached_encoder_for_CliRestrictionOption = $._encodeEnumerated; }
    return _cached_encoder_for_CliRestrictionOption(value, elGetter);
}


/* eslint-enable */
