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
import { TripletList, _decode_TripletList, _encode_TripletList } from "../MAP-MS-DataTypes/TripletList.ta.mjs";
import { QuintupletList, _decode_QuintupletList, _encode_QuintupletList } from "../MAP-MS-DataTypes/QuintupletList.ta.mjs";


/**
 * @summary AuthenticationSetList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthenticationSetList  ::=  CHOICE {
 *     tripletList    [0] TripletList,
 *     quintupletList    [1] QuintupletList }
 * ```
 */
export
type AuthenticationSetList =
    { tripletList: TripletList } /* CHOICE_ALT_ROOT */
    | { quintupletList: QuintupletList } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AuthenticationSetList: $.ASN1Decoder<AuthenticationSetList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthenticationSetList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthenticationSetList (el: _Element): AuthenticationSetList {
    if (!_cached_decoder_for_AuthenticationSetList) { _cached_decoder_for_AuthenticationSetList = $._decode_inextensible_choice<AuthenticationSetList>({
    "CONTEXT 0": [ "tripletList", $._decode_implicit<TripletList>(() => _decode_TripletList) ],
    "CONTEXT 1": [ "quintupletList", $._decode_implicit<QuintupletList>(() => _decode_QuintupletList) ]
}); }
    return _cached_decoder_for_AuthenticationSetList(el);
}

let _cached_encoder_for_AuthenticationSetList: $.ASN1Encoder<AuthenticationSetList> | null = null;

/**
 * @summary Encodes a(n) AuthenticationSetList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthenticationSetList, encoded as an ASN.1 Element.
 */
export
function _encode_AuthenticationSetList (value: AuthenticationSetList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthenticationSetList) { _cached_encoder_for_AuthenticationSetList = $._encode_choice<AuthenticationSetList>({
    "tripletList": $._encode_implicit(_TagClass.context, 0, () => _encode_TripletList, $.BER),
    "quintupletList": $._encode_implicit(_TagClass.context, 1, () => _encode_QuintupletList, $.BER),
}, $.BER); }
    return _cached_encoder_for_AuthenticationSetList(value, elGetter);
}


/* eslint-enable */
