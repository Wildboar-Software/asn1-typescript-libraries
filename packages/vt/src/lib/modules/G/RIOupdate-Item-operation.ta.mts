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
 * @summary RIOupdate_Item_operation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIOupdate-Item-operation ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type RIOupdate_Item_operation = INTEGER;

/**
 * @summary RIOupdate_Item_operation_eraseRIO
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_eraseRIO: RIOupdate_Item_operation = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_eraseRIO
 * @constant
 * @type {number}
 */
export
const eraseRIO: RIOupdate_Item_operation = RIOupdate_Item_operation_eraseRIO; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_deleteRecord
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_deleteRecord: RIOupdate_Item_operation = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_deleteRecord
 * @constant
 * @type {number}
 */
export
const deleteRecord: RIOupdate_Item_operation = RIOupdate_Item_operation_deleteRecord; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_createRecord
 * @constant
 * @type {number}
 */
export
const RIOupdate_Item_operation_createRecord: RIOupdate_Item_operation = 2; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary RIOupdate_Item_operation_createRecord
 * @constant
 * @type {number}
 */
export
const createRecord: RIOupdate_Item_operation = RIOupdate_Item_operation_createRecord; /* SHORT_NAMED_INTEGER_VALUE */

let _cached_decoder_for_RIOupdate_Item_operation: $.ASN1Decoder<RIOupdate_Item_operation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIOupdate_Item_operation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIOupdate_Item_operation (el: _Element): RIOupdate_Item_operation {
    if (!_cached_decoder_for_RIOupdate_Item_operation) { _cached_decoder_for_RIOupdate_Item_operation = $._decodeInteger; }
    return _cached_decoder_for_RIOupdate_Item_operation(el);
}

let _cached_encoder_for_RIOupdate_Item_operation: $.ASN1Encoder<RIOupdate_Item_operation> | null = null;

/**
 * @summary Encodes a(n) RIOupdate_Item_operation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIOupdate_Item_operation, encoded as an ASN.1 Element.
 */
export
function _encode_RIOupdate_Item_operation (value: RIOupdate_Item_operation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIOupdate_Item_operation) { _cached_encoder_for_RIOupdate_Item_operation = $._encodeInteger; }
    return _cached_encoder_for_RIOupdate_Item_operation(value, elGetter);
}


/* eslint-enable */
