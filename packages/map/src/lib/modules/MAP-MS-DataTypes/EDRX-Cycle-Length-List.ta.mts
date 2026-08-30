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
import { EDRX_Cycle_Length, _decode_EDRX_Cycle_Length, _encode_EDRX_Cycle_Length } from "../MAP-MS-DataTypes/EDRX-Cycle-Length.ta.mjs";
// export { EDRX_Cycle_Length, _decode_EDRX_Cycle_Length, _encode_EDRX_Cycle_Length } from "../MAP-MS-DataTypes/EDRX-Cycle-Length.ta.mjs";


/**
 * @summary EDRX_Cycle_Length_List
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EDRX-Cycle-Length-List  ::=  SEQUENCE SIZE (1..8) OF
 *     EDRX-Cycle-Length
 * ```
 */
export
type EDRX_Cycle_Length_List = EDRX_Cycle_Length[]; // SequenceOfType

let _cached_decoder_for_EDRX_Cycle_Length_List: $.ASN1Decoder<EDRX_Cycle_Length_List> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EDRX_Cycle_Length_List
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EDRX_Cycle_Length_List (el: _Element): EDRX_Cycle_Length_List {
    if (!_cached_decoder_for_EDRX_Cycle_Length_List) { _cached_decoder_for_EDRX_Cycle_Length_List = $._decodeSequenceOf<EDRX_Cycle_Length>(() => _decode_EDRX_Cycle_Length); }
    return _cached_decoder_for_EDRX_Cycle_Length_List(el);
}

let _cached_encoder_for_EDRX_Cycle_Length_List: $.ASN1Encoder<EDRX_Cycle_Length_List> | null = null;

/**
 * @summary Encodes a(n) EDRX_Cycle_Length_List into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EDRX_Cycle_Length_List, encoded as an ASN.1 Element.
 */
export
function _encode_EDRX_Cycle_Length_List (value: EDRX_Cycle_Length_List, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EDRX_Cycle_Length_List) { _cached_encoder_for_EDRX_Cycle_Length_List = $._encodeSequenceOf<EDRX_Cycle_Length>(() => _encode_EDRX_Cycle_Length, $.BER); }
    return _cached_encoder_for_EDRX_Cycle_Length_List(value, elGetter);
}


/* eslint-enable */
