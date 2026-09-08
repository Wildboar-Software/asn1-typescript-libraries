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
import { ConnectionList_Item, _decode_ConnectionList_Item, _encode_ConnectionList_Item } from "../CSTA-connection-states/ConnectionList-Item.ta.mjs";
// export { ConnectionList_Item, _decode_ConnectionList_Item, _encode_ConnectionList_Item } from "../CSTA-connection-states/ConnectionList-Item.ta.mjs";


/**
 * @summary ConnectionList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectionList  ::=  SEQUENCE OF SEQUENCE
 * {    newConnection         [0] ConnectionID         OPTIONAL,
 *     oldConnection         [1] ConnectionID         OPTIONAL,
 *     endpoint         [2] CHOICE
 *         {    deviceID         DeviceID,
 *             notKnown         NULL,
 *             restricted        [1] NULL }         OPTIONAL,
 *     associatedNID         [3] CHOICE
 *         {    deviceID         DeviceID,
 *             notKnown         NULL }             OPTIONAL,
 *     resultingConnectionInfo     ConnectionInformation         OPTIONAL }
 * ```
 */
export
type ConnectionList = ConnectionList_Item[]; // SequenceOfType

let _cached_decoder_for_ConnectionList: $.ASN1Decoder<ConnectionList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectionList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectionList (el: _Element): ConnectionList {
    if (!_cached_decoder_for_ConnectionList) { _cached_decoder_for_ConnectionList = $._decodeSequenceOf<ConnectionList_Item>(() => _decode_ConnectionList_Item); }
    return _cached_decoder_for_ConnectionList(el);
}

let _cached_encoder_for_ConnectionList: $.ASN1Encoder<ConnectionList> | null = null;

/**
 * @summary Encodes a(n) ConnectionList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectionList, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectionList (value: ConnectionList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectionList) { _cached_encoder_for_ConnectionList = $._encodeSequenceOf<ConnectionList_Item>(() => _encode_ConnectionList_Item, $.BER); }
    return _cached_encoder_for_ConnectionList(value, elGetter);
}


/* eslint-enable */
