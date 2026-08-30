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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary SendingNode_Number
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendingNode-Number  ::=  CHOICE {
 *     hlr-Number    ISDN-AddressString,
 *     css-Number    [1] ISDN-AddressString}
 * ```
 */
export
type SendingNode_Number =
    { hlr_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */
    | { css_Number: ISDN_AddressString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SendingNode_Number: $.ASN1Decoder<SendingNode_Number> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendingNode_Number
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendingNode_Number (el: _Element): SendingNode_Number {
    if (!_cached_decoder_for_SendingNode_Number) { _cached_decoder_for_SendingNode_Number = $._decode_inextensible_choice<SendingNode_Number>({
    "UNIVERSAL 4": [ "hlr_Number", _decode_ISDN_AddressString ],
    "CONTEXT 1": [ "css_Number", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ]
}); }
    return _cached_decoder_for_SendingNode_Number(el);
}

let _cached_encoder_for_SendingNode_Number: $.ASN1Encoder<SendingNode_Number> | null = null;

/**
 * @summary Encodes a(n) SendingNode_Number into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendingNode_Number, encoded as an ASN.1 Element.
 */
export
function _encode_SendingNode_Number (value: SendingNode_Number, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendingNode_Number) { _cached_encoder_for_SendingNode_Number = $._encode_choice<SendingNode_Number>({
    "hlr_Number": _encode_ISDN_AddressString,
    "css_Number": $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SendingNode_Number(value, elGetter);
}


/* eslint-enable */
