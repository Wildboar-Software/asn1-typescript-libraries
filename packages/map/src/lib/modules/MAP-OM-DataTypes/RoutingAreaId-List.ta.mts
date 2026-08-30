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
import { RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";
// export { RAIdentity, _decode_RAIdentity, _encode_RAIdentity } from "../MAP-CommonDataTypes/RAIdentity.ta.mjs";


/**
 * @summary RoutingAreaId_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RoutingAreaId-List  ::=  SEQUENCE SIZE (1..8) OF
 *     RAIdentity
 * ```
 */
export
type RoutingAreaId_List = RAIdentity[]; // SequenceOfType

let _cached_decoder_for_RoutingAreaId_List: $.ASN1Decoder<RoutingAreaId_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RoutingAreaId_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RoutingAreaId_List (el: _Element): RoutingAreaId_List {
    if (!_cached_decoder_for_RoutingAreaId_List) { _cached_decoder_for_RoutingAreaId_List = $._decodeSequenceOf<RAIdentity>(() => _decode_RAIdentity); }
    return _cached_decoder_for_RoutingAreaId_List(el);
}

let _cached_encoder_for_RoutingAreaId_List: $.ASN1Encoder<RoutingAreaId_List> | null = null;

/**
 * @summary Encodes a(n) RoutingAreaId_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RoutingAreaId_List, encoded as an ASN.1 Element.
 */
export
function _encode_RoutingAreaId_List (value: RoutingAreaId_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RoutingAreaId_List) { _cached_encoder_for_RoutingAreaId_List = $._encodeSequenceOf<RAIdentity>(() => _encode_RAIdentity, $.BER); }
    return _cached_encoder_for_RoutingAreaId_List(value, elGetter);
}


/* eslint-enable */
