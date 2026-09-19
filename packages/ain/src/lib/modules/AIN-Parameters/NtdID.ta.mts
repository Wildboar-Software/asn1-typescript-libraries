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
import { NtdIndirectID, _decode_NtdIndirectID, _encode_NtdIndirectID } from "../AIN-Parameters/NtdIndirectID.ta.mjs";
// export { NtdIndirectID, _decode_NtdIndirectID, _encode_NtdIndirectID } from "../AIN-Parameters/NtdIndirectID.ta.mjs";


/**
 * @summary NtdID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NtdID  ::=  CHOICE{
 *         ntdIndirectID [1] NtdIndirectID
 *     }
 * ```
 */
export
type NtdID =
    { ntdIndirectID: NtdIndirectID } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_NtdID: $.ASN1Decoder<NtdID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NtdID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NtdID (el: _Element): NtdID {
    if (!_cached_decoder_for_NtdID) { _cached_decoder_for_NtdID = $._decode_inextensible_choice<NtdID>({
    "CONTEXT 1": [ "ntdIndirectID", $._decode_explicit<NtdIndirectID>(() => _decode_NtdIndirectID) ]
}); }
    return _cached_decoder_for_NtdID(el);
}

let _cached_encoder_for_NtdID: $.ASN1Encoder<NtdID> | null = null;

/**
 * @summary Encodes a(n) NtdID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NtdID, encoded as an ASN.1 Element.
 */
export
function _encode_NtdID (value: NtdID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NtdID) { _cached_encoder_for_NtdID = $._encode_choice<NtdID>({
    "ntdIndirectID": $._encode_explicit(_TagClass.context, 1, () => _encode_NtdIndirectID, $.BER),
}, $.BER); }
    return _cached_encoder_for_NtdID(value, elGetter);
}


/* eslint-enable */
