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
 * @summary StatsAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * StatsAction  ::=  INTEGER {
 *     sa-request  (0),
 *     sa-result   (1)
 * }
 * ```
 */
export
type StatsAction = INTEGER;

/**
 * @summary StatsAction_sa_request
 * @constant
 * @type {number}
 */
export
const StatsAction_sa_request: StatsAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_request
 * @constant
 * @type {number}
 */
export
const sa_request: StatsAction = StatsAction_sa_request; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_result
 * @constant
 * @type {number}
 */
export
const StatsAction_sa_result: StatsAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary StatsAction_sa_result
 * @constant
 * @type {number}
 */
export
const sa_result: StatsAction = StatsAction_sa_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_StatsAction: $.ASN1Decoder<StatsAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) StatsAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_StatsAction (el: _Element): StatsAction {
    if (!_cached_decoder_for_StatsAction) { _cached_decoder_for_StatsAction = $._decodeInteger; }
    return _cached_decoder_for_StatsAction(el);
}

let _cached_encoder_for_StatsAction: $.ASN1Encoder<StatsAction> | null = null;

/**
 * @summary Encodes a(n) StatsAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The StatsAction, encoded as an ASN.1 Element.
 */
export
function _encode_StatsAction (value: StatsAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_StatsAction) { _cached_encoder_for_StatsAction = $._encodeInteger; }
    return _cached_encoder_for_StatsAction(value, elGetter);
}


/* eslint-enable */
