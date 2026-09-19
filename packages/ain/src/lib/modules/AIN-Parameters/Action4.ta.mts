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
import { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
// export { ActivationStateCode, _enum_for_ActivationStateCode, ActivationStateCode_off /* IMPORTED_LONG_ENUMERATION_ITEM */, off /* IMPORTED_SHORT_ENUMERATION_ITEM */, ActivationStateCode_on /* IMPORTED_LONG_ENUMERATION_ITEM */, on /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ActivationStateCode, _encode_ActivationStateCode } from "../AIN-Parameters/ActivationStateCode.ta.mjs";
import { ForwardingDn, _decode_ForwardingDn, _encode_ForwardingDn } from "../AIN-Parameters/ForwardingDn.ta.mjs";
// export { ForwardingDn, _decode_ForwardingDn, _encode_ForwardingDn } from "../AIN-Parameters/ForwardingDn.ta.mjs";


/**
 * @summary Action4
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Action4 ::=  CHOICE{
 *         activationStateCode [2] IMPLICIT ActivationStateCode,--See Section 6.4.1 for encoding
 *         forwardingDn ForwardingDn
 *     }
 * ```
 */
export
type Action4 =
    { activationStateCode: ActivationStateCode } /* CHOICE_ALT_ROOT */
    | { forwardingDn: ForwardingDn } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Action4: $.ASN1Decoder<Action4> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Action4
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Action4 (el: _Element): Action4 {
    if (!_cached_decoder_for_Action4) { _cached_decoder_for_Action4 = $._decode_inextensible_choice<Action4>({
    "CONTEXT 2": [ "activationStateCode", $._decode_implicit<ActivationStateCode>(() => _decode_ActivationStateCode) ],
    "CONTEXT 1": [ "forwardingDn", _decode_ForwardingDn ],
    "CONTEXT 4": [ "forwardingDn", _decode_ForwardingDn ],
    "CONTEXT 3": [ "forwardingDn", _decode_ForwardingDn ]
}); }
    return _cached_decoder_for_Action4(el);
}

let _cached_encoder_for_Action4: $.ASN1Encoder<Action4> | null = null;

/**
 * @summary Encodes a(n) Action4 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Action4, encoded as an ASN.1 Element.
 */
export
function _encode_Action4 (value: Action4, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Action4) { _cached_encoder_for_Action4 = $._encode_choice<Action4>({
    "activationStateCode": $._encode_implicit(_TagClass.context, 2, () => _encode_ActivationStateCode, $.BER),
    "forwardingDn": _encode_ForwardingDn,
}, $.BER); }
    return _cached_encoder_for_Action4(value, elGetter);
}


/* eslint-enable */
