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
 * @summary VersionConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_VersionConstraint {
    no_version_constraint = 0,
    version_unambiguity = 1,
}

/**
 * @summary VersionConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type VersionConstraint = _enum_for_VersionConstraint;

/**
 * @summary VersionConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * VersionConstraint  ::=  ENUMERATED {
 *     no-version-constraint (0),
 *     version-unambiguity   (1)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const VersionConstraint = _enum_for_VersionConstraint;

/**
 * @summary VersionConstraint_no_version_constraint
 * @constant
 * @type {number}
 */
export
const VersionConstraint_no_version_constraint: VersionConstraint = VersionConstraint.no_version_constraint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_version_constraint
 * @constant
 * @type {number}
 */
export
const no_version_constraint: VersionConstraint = VersionConstraint.no_version_constraint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary VersionConstraint_version_unambiguity
 * @constant
 * @type {number}
 */
export
const VersionConstraint_version_unambiguity: VersionConstraint = VersionConstraint.version_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary version_unambiguity
 * @constant
 * @type {number}
 */
export
const version_unambiguity: VersionConstraint = VersionConstraint.version_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_VersionConstraint: $.ASN1Decoder<VersionConstraint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) VersionConstraint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_VersionConstraint (el: _Element): VersionConstraint {
    if (!_cached_decoder_for_VersionConstraint) { _cached_decoder_for_VersionConstraint = $._decodeEnumerated; }
    return _cached_decoder_for_VersionConstraint(el);
}

let _cached_encoder_for_VersionConstraint: $.ASN1Encoder<VersionConstraint> | null = null;

/**
 * @summary Encodes a(n) VersionConstraint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The VersionConstraint, encoded as an ASN.1 Element.
 */
export
function _encode_VersionConstraint (value: VersionConstraint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_VersionConstraint) { _cached_encoder_for_VersionConstraint = $._encodeEnumerated; }
    return _cached_encoder_for_VersionConstraint(value, elGetter);
}


/* eslint-enable */
