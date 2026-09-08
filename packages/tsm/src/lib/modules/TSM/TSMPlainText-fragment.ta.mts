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
import { ChangeCipherSpec, _enum_for_ChangeCipherSpec, ChangeCipherSpec_change_cipher_spec /* IMPORTED_LONG_ENUMERATION_ITEM */, change_cipher_spec /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChangeCipherSpec, _encode_ChangeCipherSpec } from "../TSM/ChangeCipherSpec.ta.mjs";
// export { ChangeCipherSpec, _enum_for_ChangeCipherSpec, ChangeCipherSpec_change_cipher_spec /* IMPORTED_LONG_ENUMERATION_ITEM */, change_cipher_spec /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChangeCipherSpec, _encode_ChangeCipherSpec } from "../TSM/ChangeCipherSpec.ta.mjs";
import { Alert, _decode_Alert, _encode_Alert } from "../TSM/Alert.ta.mjs";
// export { Alert, _decode_Alert, _encode_Alert } from "../TSM/Alert.ta.mjs";
import { Handshake, _decode_Handshake, _encode_Handshake } from "../TSM/Handshake.ta.mjs";
// export { Handshake, _decode_Handshake, _encode_Handshake } from "../TSM/Handshake.ta.mjs";
import { ApplicationData, _decode_ApplicationData, _encode_ApplicationData } from "../TSM/ApplicationData.ta.mjs";
// export { ApplicationData, _decode_ApplicationData, _encode_ApplicationData } from "../TSM/ApplicationData.ta.mjs";


/**
 * @summary TSMPlainText_fragment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TSMPlainText-fragment ::= CHOICE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export
type TSMPlainText_fragment =
    { change_cipher_spec_opaque: ChangeCipherSpec } /* CHOICE_ALT_ROOT */
    | { alert_opaque: Alert } /* CHOICE_ALT_ROOT */
    | { biometric_handshake_opaque: Handshake } /* CHOICE_ALT_ROOT */
    | { application_data_opaque: ApplicationData } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_TSMPlainText_fragment: $.ASN1Decoder<TSMPlainText_fragment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TSMPlainText_fragment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TSMPlainText_fragment (el: _Element): TSMPlainText_fragment {
    if (!_cached_decoder_for_TSMPlainText_fragment) { _cached_decoder_for_TSMPlainText_fragment = $._decode_inextensible_choice<TSMPlainText_fragment>({
    "CONTEXT 0": [ "change_cipher_spec_opaque", _decode_ChangeCipherSpec ],
    "CONTEXT 1": [ "alert_opaque", _decode_Alert ],
    "CONTEXT 2": [ "biometric_handshake_opaque", _decode_Handshake ],
    "CONTEXT 3": [ "application_data_opaque", _decode_ApplicationData ]
}); }
    return _cached_decoder_for_TSMPlainText_fragment(el);
}

let _cached_encoder_for_TSMPlainText_fragment: $.ASN1Encoder<TSMPlainText_fragment> | null = null;

/**
 * @summary Encodes a(n) TSMPlainText_fragment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSMPlainText_fragment, encoded as an ASN.1 Element.
 */
export
function _encode_TSMPlainText_fragment (value: TSMPlainText_fragment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TSMPlainText_fragment) { _cached_encoder_for_TSMPlainText_fragment = $._encode_choice<TSMPlainText_fragment>({
    "change_cipher_spec_opaque": _encode_ChangeCipherSpec,
    "alert_opaque": _encode_Alert,
    "biometric_handshake_opaque": _encode_Handshake,
    "application_data_opaque": _encode_ApplicationData,
}, $.BER); }
    return _cached_encoder_for_TSMPlainText_fragment(value, elGetter);
}


/* eslint-enable */
