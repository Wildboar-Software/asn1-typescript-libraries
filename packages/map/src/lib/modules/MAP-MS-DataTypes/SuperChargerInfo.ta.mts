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
import { AgeIndicator, _decode_AgeIndicator, _encode_AgeIndicator } from "../MAP-MS-DataTypes/AgeIndicator.ta.mjs";


/**
 * @summary SuperChargerInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SuperChargerInfo  ::=  CHOICE {
 *     sendSubscriberData    [0] NULL,
 *     subscriberDataStored    [1] AgeIndicator }
 * ```
 */
export
type SuperChargerInfo =
    { sendSubscriberData: NULL } /* CHOICE_ALT_ROOT */
    | { subscriberDataStored: AgeIndicator } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SuperChargerInfo: $.ASN1Decoder<SuperChargerInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SuperChargerInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SuperChargerInfo (el: _Element): SuperChargerInfo {
    if (!_cached_decoder_for_SuperChargerInfo) { _cached_decoder_for_SuperChargerInfo = $._decode_inextensible_choice<SuperChargerInfo>({
    "CONTEXT 0": [ "sendSubscriberData", $._decode_implicit<NULL>(() => $._decodeNull) ],
    "CONTEXT 1": [ "subscriberDataStored", $._decode_implicit<AgeIndicator>(() => _decode_AgeIndicator) ]
}); }
    return _cached_decoder_for_SuperChargerInfo(el);
}

let _cached_encoder_for_SuperChargerInfo: $.ASN1Encoder<SuperChargerInfo> | null = null;

/**
 * @summary Encodes a(n) SuperChargerInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SuperChargerInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SuperChargerInfo (value: SuperChargerInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SuperChargerInfo) { _cached_encoder_for_SuperChargerInfo = $._encode_choice<SuperChargerInfo>({
    "sendSubscriberData": $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER),
    "subscriberDataStored": $._encode_implicit(_TagClass.context, 1, () => _encode_AgeIndicator, $.BER),
}, $.BER); }
    return _cached_encoder_for_SuperChargerInfo(value, elGetter);
}


/* eslint-enable */
