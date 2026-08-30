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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";


/**
 * @summary SubscriberIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SubscriberIdentity  ::=  CHOICE {
 *     imsi    [0] IMSI,
 *     msisdn    [1] ISDN-AddressString
 *     }
 * ```
 */
export
type SubscriberIdentity =
    { imsi: IMSI } /* CHOICE_ALT_ROOT */
    | { msisdn: ISDN_AddressString } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SubscriberIdentity: $.ASN1Decoder<SubscriberIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SubscriberIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SubscriberIdentity (el: _Element): SubscriberIdentity {
    if (!_cached_decoder_for_SubscriberIdentity) { _cached_decoder_for_SubscriberIdentity = $._decode_inextensible_choice<SubscriberIdentity>({
    "CONTEXT 0": [ "imsi", $._decode_implicit<IMSI>(() => _decode_IMSI) ],
    "CONTEXT 1": [ "msisdn", $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString) ]
}); }
    return _cached_decoder_for_SubscriberIdentity(el);
}

let _cached_encoder_for_SubscriberIdentity: $.ASN1Encoder<SubscriberIdentity> | null = null;

/**
 * @summary Encodes a(n) SubscriberIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SubscriberIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_SubscriberIdentity (value: SubscriberIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SubscriberIdentity) { _cached_encoder_for_SubscriberIdentity = $._encode_choice<SubscriberIdentity>({
    "imsi": $._encode_implicit(_TagClass.context, 0, () => _encode_IMSI, $.BER),
    "msisdn": $._encode_implicit(_TagClass.context, 1, () => _encode_ISDN_AddressString, $.BER),
}, $.BER); }
    return _cached_encoder_for_SubscriberIdentity(value, elGetter);
}


/* eslint-enable */
