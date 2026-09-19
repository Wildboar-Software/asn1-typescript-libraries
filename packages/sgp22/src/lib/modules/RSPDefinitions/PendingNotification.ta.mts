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
import { ProfileInstallationResult, _decode_ProfileInstallationResult, _encode_ProfileInstallationResult } from "../RSPDefinitions/ProfileInstallationResult.ta.mjs";
// export { ProfileInstallationResult, _decode_ProfileInstallationResult, _encode_ProfileInstallationResult } from "../RSPDefinitions/ProfileInstallationResult.ta.mjs";
import { OtherSignedNotification, _decode_OtherSignedNotification, _encode_OtherSignedNotification } from "../RSPDefinitions/OtherSignedNotification.ta.mjs";
// export { OtherSignedNotification, _decode_OtherSignedNotification, _encode_OtherSignedNotification } from "../RSPDefinitions/OtherSignedNotification.ta.mjs";


/**
 * @summary PendingNotification
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PendingNotification  ::=  CHOICE {
 *     profileInstallationResult [55] ProfileInstallationResult, -- tag 'BF37'
 *     otherSignedNotification OtherSignedNotification
 * }
 * ```
 */
export
type PendingNotification =
    { profileInstallationResult: ProfileInstallationResult } /* CHOICE_ALT_ROOT */
    | { otherSignedNotification: OtherSignedNotification } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_PendingNotification: $.ASN1Decoder<PendingNotification> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PendingNotification
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PendingNotification (el: _Element): PendingNotification {
    if (!_cached_decoder_for_PendingNotification) { _cached_decoder_for_PendingNotification = $._decode_inextensible_choice<PendingNotification>({
    "CONTEXT 55": [ "profileInstallationResult", $._decode_implicit<ProfileInstallationResult>(() => _decode_ProfileInstallationResult) ],
    "UNIVERSAL 16": [ "otherSignedNotification", _decode_OtherSignedNotification ]
}); }
    return _cached_decoder_for_PendingNotification(el);
}

let _cached_encoder_for_PendingNotification: $.ASN1Encoder<PendingNotification> | null = null;

/**
 * @summary Encodes a(n) PendingNotification into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PendingNotification, encoded as an ASN.1 Element.
 */
export
function _encode_PendingNotification (value: PendingNotification, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PendingNotification) { _cached_encoder_for_PendingNotification = $._encode_choice<PendingNotification>({
    "profileInstallationResult": $._encode_implicit(_TagClass.context, 55, () => _encode_ProfileInstallationResult, $.BER),
    "otherSignedNotification": _encode_OtherSignedNotification,
}, $.BER); }
    return _cached_encoder_for_PendingNotification(value, elGetter);
}


/* eslint-enable */
