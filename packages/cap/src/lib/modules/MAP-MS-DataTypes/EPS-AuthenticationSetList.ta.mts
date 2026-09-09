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
import { EPC_AV, _decode_EPC_AV, _encode_EPC_AV } from "../MAP-MS-DataTypes/EPC-AV.ta.mjs";
// export { EPC_AV, _decode_EPC_AV, _encode_EPC_AV } from "../MAP-MS-DataTypes/EPC-AV.ta.mjs";


/**
 * @summary EPS_AuthenticationSetList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EPS-AuthenticationSetList  ::=  SEQUENCE SIZE (1..5) OF
 *     EPC-AV
 * ```
 */
export
type EPS_AuthenticationSetList = EPC_AV[]; // SequenceOfType

let _cached_decoder_for_EPS_AuthenticationSetList: $.ASN1Decoder<EPS_AuthenticationSetList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EPS_AuthenticationSetList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EPS_AuthenticationSetList (el: _Element): EPS_AuthenticationSetList {
    if (!_cached_decoder_for_EPS_AuthenticationSetList) { _cached_decoder_for_EPS_AuthenticationSetList = $._decodeSequenceOf<EPC_AV>(() => _decode_EPC_AV); }
    return _cached_decoder_for_EPS_AuthenticationSetList(el);
}

let _cached_encoder_for_EPS_AuthenticationSetList: $.ASN1Encoder<EPS_AuthenticationSetList> | null = null;

/**
 * @summary Encodes a(n) EPS_AuthenticationSetList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EPS_AuthenticationSetList, encoded as an ASN.1 Element.
 */
export
function _encode_EPS_AuthenticationSetList (value: EPS_AuthenticationSetList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EPS_AuthenticationSetList) { _cached_encoder_for_EPS_AuthenticationSetList = $._encodeSequenceOf<EPC_AV>(() => _encode_EPC_AV, $.BER); }
    return _cached_encoder_for_EPS_AuthenticationSetList(value, elGetter);
}


/* eslint-enable */
