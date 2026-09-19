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
 * @summary DataRetentionAction
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DataRetentionAction  ::=  INTEGER {
 *     ra-store    (0),
 *     ra-delete   (1),
 *     ra-fetch    (2),
 *     ra-result   (3)
 * }
 * ```
 */
export
type DataRetentionAction = INTEGER;

/**
 * @summary DataRetentionAction_ra_store
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_store: DataRetentionAction = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_store
 * @constant
 * @type {number}
 */
export
const ra_store: DataRetentionAction = DataRetentionAction_ra_store; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_delete
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_delete: DataRetentionAction = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_delete
 * @constant
 * @type {number}
 */
export
const ra_delete: DataRetentionAction = DataRetentionAction_ra_delete; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_fetch
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_fetch: DataRetentionAction = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_fetch
 * @constant
 * @type {number}
 */
export
const ra_fetch: DataRetentionAction = DataRetentionAction_ra_fetch; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_result
 * @constant
 * @type {number}
 */
export
const DataRetentionAction_ra_result: DataRetentionAction = 3; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary DataRetentionAction_ra_result
 * @constant
 * @type {number}
 */
export
const ra_result: DataRetentionAction = DataRetentionAction_ra_result; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_DataRetentionAction: $.ASN1Decoder<DataRetentionAction> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DataRetentionAction
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DataRetentionAction (el: _Element): DataRetentionAction {
    if (!_cached_decoder_for_DataRetentionAction) { _cached_decoder_for_DataRetentionAction = $._decodeInteger; }
    return _cached_decoder_for_DataRetentionAction(el);
}

let _cached_encoder_for_DataRetentionAction: $.ASN1Encoder<DataRetentionAction> | null = null;

/**
 * @summary Encodes a(n) DataRetentionAction into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DataRetentionAction, encoded as an ASN.1 Element.
 */
export
function _encode_DataRetentionAction (value: DataRetentionAction, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DataRetentionAction) { _cached_encoder_for_DataRetentionAction = $._encodeInteger; }
    return _cached_encoder_for_DataRetentionAction(value, elGetter);
}


/* eslint-enable */
