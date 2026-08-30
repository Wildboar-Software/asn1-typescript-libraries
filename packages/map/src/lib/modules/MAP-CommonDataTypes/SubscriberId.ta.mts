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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { TMSI, _decode_TMSI, _encode_TMSI } from "../MAP-CommonDataTypes/TMSI.ta.mjs";
// export { TMSI, _decode_TMSI, _encode_TMSI } from "../MAP-CommonDataTypes/TMSI.ta.mjs";


/**
 * @summary SubscriberId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberId  ::=  CHOICE {
 *     imsi    [0] IMSI,
 *     tmsi    [1] TMSI}
 * ```
 */
export
type SubscriberId =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { tmsi: TMSI } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriberId: $.ASN1Decoder<SubscriberId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberId (el: _Element): SubscriberId {
    if (!_cached_decoder_for_SubscriberId) { _cached_decoder_for_SubscriberId = $._decode_inextensible_choice<SubscriberId>({
    "CONTEXT 0": [ "imsi", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 1": [ "tmsi", $._decode_implicit<TMSI>(() => _decode_TMSI) ]
}); }
    return _cached_decoder_for_SubscriberId(el);
}

let _cached_encoder_for_SubscriberId: $.ASN1Encoder<SubscriberId> | null = null;

/**
 * @summary Encodes a(n) SubscriberId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberId, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberId (value: SubscriberId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberId) { _cached_encoder_for_SubscriberId = $._encode_choice<SubscriberId>({
    "imsi": $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER),
    "tmsi": $._encode_implicit(_TagClass.context, 1, () => _encode_TMSI, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberId(value, elGetter);
}


/* eslint-enable */
