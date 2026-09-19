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
 * @summary CauseMisc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseMisc  ::=  ENUMERATED
 * {
 *     controlProcessingOverload(1),
 *     notEnoughUserPlaneProcessingResources(2),
 *     hardwareFailure(3),
 *     oMIntervention(4),
 *     unknownPLMNOrSNPN(5),
 *     unspecified(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
enum _enum_for_CauseMisc {
    controlProcessingOverload = 1,
    notEnoughUserPlaneProcessingResources = 2,
    hardwareFailure = 3,
    oMIntervention = 4,
    unknownPLMNOrSNPN = 5,
    unspecified = 6,
}

/**
 * @summary CauseMisc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseMisc  ::=  ENUMERATED
 * {
 *     controlProcessingOverload(1),
 *     notEnoughUserPlaneProcessingResources(2),
 *     hardwareFailure(3),
 *     oMIntervention(4),
 *     unknownPLMNOrSNPN(5),
 *     unspecified(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
type CauseMisc = _enum_for_CauseMisc;

/**
 * @summary CauseMisc
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CauseMisc  ::=  ENUMERATED
 * {
 *     controlProcessingOverload(1),
 *     notEnoughUserPlaneProcessingResources(2),
 *     hardwareFailure(3),
 *     oMIntervention(4),
 *     unknownPLMNOrSNPN(5),
 *     unspecified(6)
 * }
 * ```
 * 
 * @enum {number}
 */
export
const CauseMisc = _enum_for_CauseMisc;

/**
 * @summary CauseMisc_controlProcessingOverload
 * @constant
 * @type {number}
 */
export
const CauseMisc_controlProcessingOverload: CauseMisc = CauseMisc.controlProcessingOverload; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary controlProcessingOverload
 * @constant
 * @type {number}
 */
export
const controlProcessingOverload: CauseMisc = CauseMisc.controlProcessingOverload; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_notEnoughUserPlaneProcessingResources
 * @constant
 * @type {number}
 */
export
const CauseMisc_notEnoughUserPlaneProcessingResources: CauseMisc = CauseMisc.notEnoughUserPlaneProcessingResources; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary notEnoughUserPlaneProcessingResources
 * @constant
 * @type {number}
 */
export
const notEnoughUserPlaneProcessingResources: CauseMisc = CauseMisc.notEnoughUserPlaneProcessingResources; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_hardwareFailure
 * @constant
 * @type {number}
 */
export
const CauseMisc_hardwareFailure: CauseMisc = CauseMisc.hardwareFailure; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary hardwareFailure
 * @constant
 * @type {number}
 */
export
const hardwareFailure: CauseMisc = CauseMisc.hardwareFailure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_oMIntervention
 * @constant
 * @type {number}
 */
export
const CauseMisc_oMIntervention: CauseMisc = CauseMisc.oMIntervention; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary oMIntervention
 * @constant
 * @type {number}
 */
export
const oMIntervention: CauseMisc = CauseMisc.oMIntervention; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_unknownPLMNOrSNPN
 * @constant
 * @type {number}
 */
export
const CauseMisc_unknownPLMNOrSNPN: CauseMisc = CauseMisc.unknownPLMNOrSNPN; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unknownPLMNOrSNPN
 * @constant
 * @type {number}
 */
export
const unknownPLMNOrSNPN: CauseMisc = CauseMisc.unknownPLMNOrSNPN; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CauseMisc_unspecified
 * @constant
 * @type {number}
 */
export
const CauseMisc_unspecified: CauseMisc = CauseMisc.unspecified; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary unspecified
 * @constant
 * @type {number}
 */
export
const unspecified: CauseMisc = CauseMisc.unspecified; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CauseMisc: $.ASN1Decoder<CauseMisc> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CauseMisc
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CauseMisc (el: _Element): CauseMisc {
    if (!_cached_decoder_for_CauseMisc) { _cached_decoder_for_CauseMisc = $._decodeEnumerated; }
    return _cached_decoder_for_CauseMisc(el);
}

let _cached_encoder_for_CauseMisc: $.ASN1Encoder<CauseMisc> | null = null;

/**
 * @summary Encodes a(n) CauseMisc into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CauseMisc, encoded as an ASN.1 Element.
 */
export
function _encode_CauseMisc (value: CauseMisc, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CauseMisc) { _cached_encoder_for_CauseMisc = $._encodeEnumerated; }
    return _cached_encoder_for_CauseMisc(value, elGetter);
}


/* eslint-enable */
