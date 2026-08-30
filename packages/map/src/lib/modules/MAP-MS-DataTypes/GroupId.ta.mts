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
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { TBCD_STRING, _decode_TBCD_STRING, _encode_TBCD_STRING } from "../MAP-CommonDataTypes/TBCD-STRING.ta.mjs";


/**
 * @summary GroupId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GroupId   ::=  TBCD-STRING (SIZE (3))
 * ```
 */
export
type GroupId = TBCD_STRING; // DefinedType

let _cached_decoder_for_GroupId: $.ASN1Decoder<GroupId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GroupId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GroupId (el: _Element): GroupId {
    if (!_cached_decoder_for_GroupId) { _cached_decoder_for_GroupId = _decode_TBCD_STRING; }
    return _cached_decoder_for_GroupId(el);
}

let _cached_encoder_for_GroupId: $.ASN1Encoder<GroupId> | null = null;

/**
 * @summary Encodes a(n) GroupId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GroupId, encoded as an ASN.1 Element.
 */
export
function _encode_GroupId (value: GroupId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GroupId) { _cached_encoder_for_GroupId = _encode_TBCD_STRING; }
    return _cached_encoder_for_GroupId(value, elGetter);
}


/* eslint-enable */
