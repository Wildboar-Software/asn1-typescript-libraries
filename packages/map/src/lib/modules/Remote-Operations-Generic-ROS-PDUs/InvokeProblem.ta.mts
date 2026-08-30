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
 * @summary InvokeProblem
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeProblem  ::=  INTEGER {
 *   duplicateInvocation(0), unrecognizedOperation(1), mistypedArgument(2),
 *   resourceLimitation(3), releaseInProgress(4), unrecognizedLinkedId(5),
 *   linkedResponseUnexpected(6), unexpectedLinkedOperation(7)}
 * ```
 */
export
type InvokeProblem = INTEGER;

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_duplicateInvocation: InvokeProblem = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_duplicateInvocation
 * @constant
 * @type {number}
 */
export
const duplicateInvocation: InvokeProblem = InvokeProblem_duplicateInvocation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unrecognizedOperation: InvokeProblem = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedOperation
 * @constant
 * @type {number}
 */
export
const unrecognizedOperation: InvokeProblem = InvokeProblem_unrecognizedOperation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export
const InvokeProblem_mistypedArgument: InvokeProblem = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_mistypedArgument
 * @constant
 * @type {number}
 */
export
const mistypedArgument: InvokeProblem = InvokeProblem_mistypedArgument; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_resourceLimitation: InvokeProblem = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_resourceLimitation
 * @constant
 * @type {number}
 */
export
const resourceLimitation: InvokeProblem = InvokeProblem_resourceLimitation; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export
const InvokeProblem_releaseInProgress: InvokeProblem = 4; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_releaseInProgress
 * @constant
 * @type {number}
 */
export
const releaseInProgress: InvokeProblem = InvokeProblem_releaseInProgress; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unrecognizedLinkedId: InvokeProblem = 5; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unrecognizedLinkedId
 * @constant
 * @type {number}
 */
export
const unrecognizedLinkedId: InvokeProblem = InvokeProblem_unrecognizedLinkedId; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export
const InvokeProblem_linkedResponseUnexpected: InvokeProblem = 6; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_linkedResponseUnexpected
 * @constant
 * @type {number}
 */
export
const linkedResponseUnexpected: InvokeProblem = InvokeProblem_linkedResponseUnexpected; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export
const InvokeProblem_unexpectedLinkedOperation: InvokeProblem = 7; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary InvokeProblem_unexpectedLinkedOperation
 * @constant
 * @type {number}
 */
export
const unexpectedLinkedOperation: InvokeProblem = InvokeProblem_unexpectedLinkedOperation; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_InvokeProblem: $.ASN1Decoder<InvokeProblem> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InvokeProblem
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InvokeProblem (el: _Element): InvokeProblem {
    if (!_cached_decoder_for_InvokeProblem) { _cached_decoder_for_InvokeProblem = $._decodeInteger; }
    return _cached_decoder_for_InvokeProblem(el);
}

let _cached_encoder_for_InvokeProblem: $.ASN1Encoder<InvokeProblem> | null = null;

/**
 * @summary Encodes a(n) InvokeProblem into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InvokeProblem, encoded as an ASN.1 Element.
 */
export
function _encode_InvokeProblem (value: InvokeProblem, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InvokeProblem) { _cached_encoder_for_InvokeProblem = $._encodeInteger; }
    return _cached_encoder_for_InvokeProblem(value, elGetter);
}


/* eslint-enable */
