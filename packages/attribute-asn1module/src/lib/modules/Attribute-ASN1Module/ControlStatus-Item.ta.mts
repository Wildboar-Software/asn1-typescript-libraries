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



/* START_OF_SYMBOL_DEFINITION ControlStatus_Item */
/**
 * @summary ControlStatus_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlStatus-Item ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type ControlStatus_Item = INTEGER;
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_subjectToTest */
/**
 * @summary ControlStatus_Item_subjectToTest
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_subjectToTest: ControlStatus_Item = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_subjectToTest */

/* START_OF_SYMBOL_DEFINITION subjectToTest */
/**
 * @summary ControlStatus_Item_subjectToTest
 * @constant
 * @type {number}
 */
export
const subjectToTest: ControlStatus_Item = ControlStatus_Item_subjectToTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION subjectToTest */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_partOfServicesLocked */
/**
 * @summary ControlStatus_Item_partOfServicesLocked
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_partOfServicesLocked: ControlStatus_Item = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_partOfServicesLocked */

/* START_OF_SYMBOL_DEFINITION partOfServicesLocked */
/**
 * @summary ControlStatus_Item_partOfServicesLocked
 * @constant
 * @type {number}
 */
export
const partOfServicesLocked: ControlStatus_Item = ControlStatus_Item_partOfServicesLocked; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION partOfServicesLocked */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_reservedForTest */
/**
 * @summary ControlStatus_Item_reservedForTest
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_reservedForTest: ControlStatus_Item = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_reservedForTest */

/* START_OF_SYMBOL_DEFINITION reservedForTest */
/**
 * @summary ControlStatus_Item_reservedForTest
 * @constant
 * @type {number}
 */
export
const reservedForTest: ControlStatus_Item = ControlStatus_Item_reservedForTest; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION reservedForTest */

/* START_OF_SYMBOL_DEFINITION ControlStatus_Item_suspended */
/**
 * @summary ControlStatus_Item_suspended
 * @constant
 * @type {number}
 */
export
const ControlStatus_Item_suspended: ControlStatus_Item = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION ControlStatus_Item_suspended */

/* START_OF_SYMBOL_DEFINITION suspended */
/**
 * @summary ControlStatus_Item_suspended
 * @constant
 * @type {number}
 */
export
const suspended: ControlStatus_Item = ControlStatus_Item_suspended; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION suspended */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatus_Item */
let _cached_decoder_for_ControlStatus_Item: $.ASN1Decoder<ControlStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION _decode_ControlStatus_Item */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlStatus_Item
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlStatus_Item} The decoded data structure.
 */
export
function _decode_ControlStatus_Item (el: _Element) {
    if (!_cached_decoder_for_ControlStatus_Item) { _cached_decoder_for_ControlStatus_Item = $._decodeInteger; }
    return _cached_decoder_for_ControlStatus_Item(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatus_Item */
let _cached_encoder_for_ControlStatus_Item: $.ASN1Encoder<ControlStatus_Item> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatus_Item */

/* START_OF_SYMBOL_DEFINITION _encode_ControlStatus_Item */
/**
 * @summary Encodes a(n) ControlStatus_Item into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlStatus_Item, encoded as an ASN.1 Element.
 */
export
function _encode_ControlStatus_Item (value: ControlStatus_Item, elGetter: $.ASN1Encoder<ControlStatus_Item>) {
    if (!_cached_encoder_for_ControlStatus_Item) { _cached_encoder_for_ControlStatus_Item = $._encodeInteger; }
    return _cached_encoder_for_ControlStatus_Item(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlStatus_Item */

/* eslint-enable */
