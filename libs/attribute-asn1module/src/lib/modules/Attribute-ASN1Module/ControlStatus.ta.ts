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
import * as $ from "asn1-ts/dist/node/functional";
import { ControlStatus_Item, ControlStatus_Item_subjectToTest /* IMPORTED_LONG_NAMED_INTEGER */, subjectToTest /* IMPORTED_SHORT_NAMED_INTEGER */, ControlStatus_Item_partOfServicesLocked /* IMPORTED_LONG_NAMED_INTEGER */, partOfServicesLocked /* IMPORTED_SHORT_NAMED_INTEGER */, ControlStatus_Item_reservedForTest /* IMPORTED_LONG_NAMED_INTEGER */, reservedForTest /* IMPORTED_SHORT_NAMED_INTEGER */, ControlStatus_Item_suspended /* IMPORTED_LONG_NAMED_INTEGER */, suspended /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ControlStatus_Item, _encode_ControlStatus_Item } from "../Attribute-ASN1Module/ControlStatus-Item.ta";
export { ControlStatus_Item, ControlStatus_Item_subjectToTest /* IMPORTED_LONG_NAMED_INTEGER */, subjectToTest /* IMPORTED_SHORT_NAMED_INTEGER */, ControlStatus_Item_partOfServicesLocked /* IMPORTED_LONG_NAMED_INTEGER */, partOfServicesLocked /* IMPORTED_SHORT_NAMED_INTEGER */, ControlStatus_Item_reservedForTest /* IMPORTED_LONG_NAMED_INTEGER */, reservedForTest /* IMPORTED_SHORT_NAMED_INTEGER */, ControlStatus_Item_suspended /* IMPORTED_LONG_NAMED_INTEGER */, suspended /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ControlStatus_Item, _encode_ControlStatus_Item } from "../Attribute-ASN1Module/ControlStatus-Item.ta";


/* START_OF_SYMBOL_DEFINITION ControlStatus */
/**
 * @summary ControlStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlStatus  ::= 
 *   SET OF
 *     INTEGER {subjectToTest(0), partOfServicesLocked(1), reservedForTest(2),
 *              suspended(3)}
 * ```
 */
export
type ControlStatus = ControlStatus_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ControlStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatus */
let _cached_decoder_for_ControlStatus: $.ASN1Decoder<ControlStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ControlStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ControlStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ControlStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ControlStatus} The decoded data structure.
 */
export
function _decode_ControlStatus (el: _Element) {
    if (!_cached_decoder_for_ControlStatus) { _cached_decoder_for_ControlStatus = $._decodeSetOf<ControlStatus_Item>(() => _decode_ControlStatus_Item); }
    return _cached_decoder_for_ControlStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ControlStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatus */
let _cached_encoder_for_ControlStatus: $.ASN1Encoder<ControlStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ControlStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ControlStatus */
/**
 * @summary Encodes a(n) ControlStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ControlStatus (value: ControlStatus, elGetter: $.ASN1Encoder<ControlStatus>) {
    if (!_cached_encoder_for_ControlStatus) { _cached_encoder_for_ControlStatus = $._encodeSetOf<ControlStatus_Item>(() => _encode_ControlStatus_Item, $.BER); }
    return _cached_encoder_for_ControlStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ControlStatus */

/* eslint-enable */
