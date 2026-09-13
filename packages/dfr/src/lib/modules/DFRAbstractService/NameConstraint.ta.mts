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
 * @summary NameConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraint  ::=  ENUMERATED {
 *     no-name-constraint (0),
 *     local-unambiguity  (1),
 *     global-unambiguity (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_NameConstraint {
    no_name_constraint = 0,
    local_unambiguity = 1,
    global_unambiguity = 2,
}

/**
 * @summary NameConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraint  ::=  ENUMERATED {
 *     no-name-constraint (0),
 *     local-unambiguity  (1),
 *     global-unambiguity (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type NameConstraint = _enum_for_NameConstraint;

/**
 * @summary NameConstraint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameConstraint  ::=  ENUMERATED {
 *     no-name-constraint (0),
 *     local-unambiguity  (1),
 *     global-unambiguity (2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const NameConstraint = _enum_for_NameConstraint;

/**
 * @summary NameConstraint_no_name_constraint
 * @constant
 * @type {number}
 */
export
const NameConstraint_no_name_constraint: NameConstraint = NameConstraint.no_name_constraint; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary no_name_constraint
 * @constant
 * @type {number}
 */
export
const no_name_constraint: NameConstraint = NameConstraint.no_name_constraint; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameConstraint_local_unambiguity
 * @constant
 * @type {number}
 */
export
const NameConstraint_local_unambiguity: NameConstraint = NameConstraint.local_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary local_unambiguity
 * @constant
 * @type {number}
 */
export
const local_unambiguity: NameConstraint = NameConstraint.local_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary NameConstraint_global_unambiguity
 * @constant
 * @type {number}
 */
export
const NameConstraint_global_unambiguity: NameConstraint = NameConstraint.global_unambiguity; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary global_unambiguity
 * @constant
 * @type {number}
 */
export
const global_unambiguity: NameConstraint = NameConstraint.global_unambiguity; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_NameConstraint: $.ASN1Decoder<NameConstraint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameConstraint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameConstraint (el: _Element): NameConstraint {
    if (!_cached_decoder_for_NameConstraint) { _cached_decoder_for_NameConstraint = $._decodeEnumerated; }
    return _cached_decoder_for_NameConstraint(el);
}

let _cached_encoder_for_NameConstraint: $.ASN1Encoder<NameConstraint> | null = null;

/**
 * @summary Encodes a(n) NameConstraint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameConstraint, encoded as an ASN.1 Element.
 */
export
function _encode_NameConstraint (value: NameConstraint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameConstraint) { _cached_encoder_for_NameConstraint = $._encodeEnumerated; }
    return _cached_encoder_for_NameConstraint(value, elGetter);
}


/* eslint-enable */
