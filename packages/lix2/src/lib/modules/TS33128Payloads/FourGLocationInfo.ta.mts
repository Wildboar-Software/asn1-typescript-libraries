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
import { EPSLocationInformation, _decode_EPSLocationInformation, _encode_EPSLocationInformation } from "../TS33128Payloads/EPSLocationInformation.ta.mjs";
// export { EPSLocationInformation, _decode_EPSLocationInformation, _encode_EPSLocationInformation } from "../TS33128Payloads/EPSLocationInformation.ta.mjs";
import { EPSUserLocationInformation, _decode_EPSUserLocationInformation, _encode_EPSUserLocationInformation } from "../TS33128Payloads/EPSUserLocationInformation.ta.mjs";
// export { EPSUserLocationInformation, _decode_EPSUserLocationInformation, _encode_EPSUserLocationInformation } from "../TS33128Payloads/EPSUserLocationInformation.ta.mjs";


/**
 * @summary FourGLocationInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FourGLocationInfo  ::=  CHOICE
 * {
 *     ePSLocationInformation     [1] EPSLocationInformation,
 *     ePSUserLocationInformation [2] EPSUserLocationInformation
 * }
 * ```
 */
export
type FourGLocationInfo =
    { ePSLocationInformation: EPSLocationInformation } /* CHOICE_ALT_ROOT */
    | { ePSUserLocationInformation: EPSUserLocationInformation } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_FourGLocationInfo: $.ASN1Decoder<FourGLocationInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FourGLocationInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FourGLocationInfo (el: _Element): FourGLocationInfo {
    if (!_cached_decoder_for_FourGLocationInfo) { _cached_decoder_for_FourGLocationInfo = $._decode_inextensible_choice<FourGLocationInfo>({
    "CONTEXT 1": [ "ePSLocationInformation", $._decode_implicit<EPSLocationInformation>(() => _decode_EPSLocationInformation) ],
    "CONTEXT 2": [ "ePSUserLocationInformation", $._decode_implicit<EPSUserLocationInformation>(() => _decode_EPSUserLocationInformation) ]
}); }
    return _cached_decoder_for_FourGLocationInfo(el);
}

let _cached_encoder_for_FourGLocationInfo: $.ASN1Encoder<FourGLocationInfo> | null = null;

/**
 * @summary Encodes a(n) FourGLocationInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FourGLocationInfo, encoded as an ASN.1 Element.
 */
export
function _encode_FourGLocationInfo (value: FourGLocationInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FourGLocationInfo) { _cached_encoder_for_FourGLocationInfo = $._encode_choice<FourGLocationInfo>({
    "ePSLocationInformation": $._encode_implicit(_TagClass.context, 1, () => _encode_EPSLocationInformation, $.BER),
    "ePSUserLocationInformation": $._encode_implicit(_TagClass.context, 2, () => _encode_EPSUserLocationInformation, $.BER),
}, $.BER); }
    return _cached_encoder_for_FourGLocationInfo(value, elGetter);
}


/* eslint-enable */
