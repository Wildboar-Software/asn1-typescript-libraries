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
import { Ocn, _decode_Ocn, _encode_Ocn } from "../AIN-Parameters/Ocn.ta.mjs";
// export { Ocn, _decode_Ocn, _encode_Ocn } from "../AIN-Parameters/Ocn.ta.mjs";


/**
 * @summary AmpSvcProvID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AmpSvcProvID  ::=  CHOICE{
 *         ocn Ocn -- see Section 6.121 for encoding
 *     }
 * ```
 */
export
type AmpSvcProvID =
    { ocn: Ocn } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_AmpSvcProvID: $.ASN1Decoder<AmpSvcProvID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AmpSvcProvID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AmpSvcProvID (el: _Element): AmpSvcProvID {
    if (!_cached_decoder_for_AmpSvcProvID) { _cached_decoder_for_AmpSvcProvID = $._decode_inextensible_choice<AmpSvcProvID>({
    "CONTEXT 87": [ "ocn", _decode_Ocn ]
}); }
    return _cached_decoder_for_AmpSvcProvID(el);
}

let _cached_encoder_for_AmpSvcProvID: $.ASN1Encoder<AmpSvcProvID> | null = null;

/**
 * @summary Encodes a(n) AmpSvcProvID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AmpSvcProvID, encoded as an ASN.1 Element.
 */
export
function _encode_AmpSvcProvID (value: AmpSvcProvID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AmpSvcProvID) { _cached_encoder_for_AmpSvcProvID = $._encode_choice<AmpSvcProvID>({
    "ocn": _encode_Ocn,
}, $.BER); }
    return _cached_encoder_for_AmpSvcProvID(value, elGetter);
}


/* eslint-enable */
