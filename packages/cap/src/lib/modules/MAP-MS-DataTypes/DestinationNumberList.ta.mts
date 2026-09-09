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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary DestinationNumberList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DestinationNumberList   ::=  SEQUENCE SIZE    (1..maxNumOfCamelDestinationNumbers) OF
 *     ISDN-AddressString
 * ```
 */
export
type DestinationNumberList = ISDN_AddressString[]; // SequenceOfType

let _cached_decoder_for_DestinationNumberList: $.ASN1Decoder<DestinationNumberList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DestinationNumberList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DestinationNumberList (el: _Element): DestinationNumberList {
    if (!_cached_decoder_for_DestinationNumberList) { _cached_decoder_for_DestinationNumberList = $._decodeSequenceOf<ISDN_AddressString>(() => _decode_ISDN_AddressString); }
    return _cached_decoder_for_DestinationNumberList(el);
}

let _cached_encoder_for_DestinationNumberList: $.ASN1Encoder<DestinationNumberList> | null = null;

/**
 * @summary Encodes a(n) DestinationNumberList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DestinationNumberList, encoded as an ASN.1 Element.
 */
export
function _encode_DestinationNumberList (value: DestinationNumberList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DestinationNumberList) { _cached_encoder_for_DestinationNumberList = $._encodeSequenceOf<ISDN_AddressString>(() => _encode_ISDN_AddressString, $.BER); }
    return _cached_encoder_for_DestinationNumberList(value, elGetter);
}


/* eslint-enable */
