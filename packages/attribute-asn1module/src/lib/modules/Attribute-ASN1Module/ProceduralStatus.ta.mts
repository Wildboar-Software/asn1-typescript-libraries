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
import { ProceduralStatus_Item, ProceduralStatus_Item_initializationRequired /* IMPORTED_LONG_NAMED_INTEGER */, initializationRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_notInitialized /* IMPORTED_LONG_NAMED_INTEGER */, notInitialized /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_initializing /* IMPORTED_LONG_NAMED_INTEGER */, initializing /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_reporting /* IMPORTED_LONG_NAMED_INTEGER */, reporting /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_terminating /* IMPORTED_LONG_NAMED_INTEGER */, terminating /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProceduralStatus_Item, _encode_ProceduralStatus_Item } from "../Attribute-ASN1Module/ProceduralStatus-Item.ta.mjs";
export { ProceduralStatus_Item, ProceduralStatus_Item_initializationRequired /* IMPORTED_LONG_NAMED_INTEGER */, initializationRequired /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_notInitialized /* IMPORTED_LONG_NAMED_INTEGER */, notInitialized /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_initializing /* IMPORTED_LONG_NAMED_INTEGER */, initializing /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_reporting /* IMPORTED_LONG_NAMED_INTEGER */, reporting /* IMPORTED_SHORT_NAMED_INTEGER */, ProceduralStatus_Item_terminating /* IMPORTED_LONG_NAMED_INTEGER */, terminating /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_ProceduralStatus_Item, _encode_ProceduralStatus_Item } from "../Attribute-ASN1Module/ProceduralStatus-Item.ta.mjs";


/* START_OF_SYMBOL_DEFINITION ProceduralStatus */
/**
 * @summary ProceduralStatus
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProceduralStatus  ::= 
 *   SET OF
 *     INTEGER {initializationRequired(0), notInitialized(1), initializing(2),
 *              reporting(3), terminating(4)}
 * ```
 */
export
type ProceduralStatus = ProceduralStatus_Item[]; // SetOfType
/* END_OF_SYMBOL_DEFINITION ProceduralStatus */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ProceduralStatus */
let _cached_decoder_for_ProceduralStatus: $.ASN1Decoder<ProceduralStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ProceduralStatus */

/* START_OF_SYMBOL_DEFINITION _decode_ProceduralStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) ProceduralStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ProceduralStatus} The decoded data structure.
 */
export
function _decode_ProceduralStatus (el: _Element) {
    if (!_cached_decoder_for_ProceduralStatus) { _cached_decoder_for_ProceduralStatus = $._decodeSetOf<ProceduralStatus_Item>(() => _decode_ProceduralStatus_Item); }
    return _cached_decoder_for_ProceduralStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ProceduralStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ProceduralStatus */
let _cached_encoder_for_ProceduralStatus: $.ASN1Encoder<ProceduralStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ProceduralStatus */

/* START_OF_SYMBOL_DEFINITION _encode_ProceduralStatus */
/**
 * @summary Encodes a(n) ProceduralStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProceduralStatus, encoded as an ASN.1 Element.
 */
export
function _encode_ProceduralStatus (value: ProceduralStatus, elGetter: $.ASN1Encoder<ProceduralStatus>) {
    if (!_cached_encoder_for_ProceduralStatus) { _cached_encoder_for_ProceduralStatus = $._encodeSetOf<ProceduralStatus_Item>(() => _encode_ProceduralStatus_Item, $.BER); }
    return _cached_encoder_for_ProceduralStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ProceduralStatus */

/* eslint-enable */
