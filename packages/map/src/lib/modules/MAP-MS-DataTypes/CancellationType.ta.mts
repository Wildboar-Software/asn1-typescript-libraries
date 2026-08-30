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



export
enum _enum_for_CancellationType {
    updateProcedure = 0,
    subscriptionWithdraw = 1,
    initialAttachProcedure = 2,
}

/**
 * @summary CancellationType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancellationType  ::=  ENUMERATED {
 *     updateProcedure    (0),
 *     subscriptionWithdraw    (1),
 *     ...,
 *     initialAttachProcedure               (2)}
 * ```
 * 
 * @enum {number}
 */
export
type CancellationType = _enum_for_CancellationType | ENUMERATED;

/**
 * @summary CancellationType_updateProcedure
 * @constant
 * @type {number}
 */
export
const CancellationType_updateProcedure: CancellationType = 0; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary updateProcedure
 * @constant
 * @type {number}
 */
export
const updateProcedure: CancellationType = CancellationType_updateProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancellationType_subscriptionWithdraw
 * @constant
 * @type {number}
 */
export
const CancellationType_subscriptionWithdraw: CancellationType = 1; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary subscriptionWithdraw
 * @constant
 * @type {number}
 */
export
const subscriptionWithdraw: CancellationType = CancellationType_subscriptionWithdraw; /* SHORT_NAMED_ENUMERATED_VALUE */

/**
 * @summary CancellationType_initialAttachProcedure
 * @constant
 * @type {number}
 */
export
const CancellationType_initialAttachProcedure: CancellationType = 2; /* LONG_NAMED_ENUMERATED_VALUE */

/**
 * @summary initialAttachProcedure
 * @constant
 * @type {number}
 */
export
const initialAttachProcedure: CancellationType = CancellationType_initialAttachProcedure; /* SHORT_NAMED_ENUMERATED_VALUE */

let _cached_decoder_for_CancellationType: $.ASN1Decoder<CancellationType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancellationType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancellationType (el: _Element): CancellationType {
    if (!_cached_decoder_for_CancellationType) { _cached_decoder_for_CancellationType = $._decodeEnumerated; }
    return _cached_decoder_for_CancellationType(el);
}

let _cached_encoder_for_CancellationType: $.ASN1Encoder<CancellationType> | null = null;

/**
 * @summary Encodes a(n) CancellationType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancellationType, encoded as an ASN.1 Element.
 */
export
function _encode_CancellationType (value: CancellationType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancellationType) { _cached_encoder_for_CancellationType = $._encodeEnumerated; }
    return _cached_encoder_for_CancellationType(value, elGetter);
}


/* eslint-enable */
