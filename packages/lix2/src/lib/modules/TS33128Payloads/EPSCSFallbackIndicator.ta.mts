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
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_EPSCSFallbackIndicator {
    cSFallbackRequired = 1,
    cSFallbackHighPriority = 2,
}

/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type EPSCSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;

/**
 * @summary EPSCSFallbackIndicator
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPSCSFallbackIndicator  ::=  ENUMERATED
 * {
 *     cSFallbackRequired(1),
 *     cSFallbackHighPriority(2)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const EPSCSFallbackIndicator = _enum_for_EPSCSFallbackIndicator;

/**
 * @summary EPSCSFallbackIndicator_cSFallbackRequired
 * @constant
 * @type {number}
 */
export
const EPSCSFallbackIndicator_cSFallbackRequired: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackRequired; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSFallbackRequired
 * @constant
 * @type {number}
 */
export
const cSFallbackRequired: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackRequired; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary EPSCSFallbackIndicator_cSFallbackHighPriority
 * @constant
 * @type {number}
 */
export
const EPSCSFallbackIndicator_cSFallbackHighPriority: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackHighPriority; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary cSFallbackHighPriority
 * @constant
 * @type {number}
 */
export
const cSFallbackHighPriority: EPSCSFallbackIndicator = EPSCSFallbackIndicator.cSFallbackHighPriority; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_EPSCSFallbackIndicator: $.ASN1Decoder<EPSCSFallbackIndicator> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPSCSFallbackIndicator
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPSCSFallbackIndicator (el: _Element): EPSCSFallbackIndicator {
    if (!_cached_decoder_for_EPSCSFallbackIndicator) { _cached_decoder_for_EPSCSFallbackIndicator = $._decodeEnumerated; }
    return _cached_decoder_for_EPSCSFallbackIndicator(el);
}

let _cached_encoder_for_EPSCSFallbackIndicator: $.ASN1Encoder<EPSCSFallbackIndicator> | null = null;

/**
 * @summary Encodes a(n) EPSCSFallbackIndicator into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPSCSFallbackIndicator, encoded as an ASN.1 Element.
 */
export
function _encode_EPSCSFallbackIndicator (value: EPSCSFallbackIndicator, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPSCSFallbackIndicator) { _cached_encoder_for_EPSCSFallbackIndicator = $._encodeEnumerated; }
    return _cached_encoder_for_EPSCSFallbackIndicator(value, elGetter);
}


/* eslint-enable */
