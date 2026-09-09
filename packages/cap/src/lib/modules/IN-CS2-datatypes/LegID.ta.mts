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
import { LegType, _decode_LegType, _encode_LegType } from "../IN-CS2-datatypes/LegType.ta.mjs";
// export { LegType, _decode_LegType, _encode_LegType } from "../IN-CS2-datatypes/LegType.ta.mjs";


/**
 * @summary LegID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LegID  ::=  CHOICE {sendingSideID    [0]  LegType,
 *                   receivingSideID  [1]  LegType
 * }
 * ```
 */
export
type LegID =
    { sendingSideID: LegType } /* CHOICE_ALT_ROOT */
    | { receivingSideID: LegType } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LegID: $.ASN1Decoder<LegID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LegID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LegID (el: _Element): LegID {
    if (!_cached_decoder_for_LegID) { _cached_decoder_for_LegID = $._decode_inextensible_choice<LegID>({
    "CONTEXT 0": [ "sendingSideID", $._decode_implicit<LegType>(() => _decode_LegType) ],
    "CONTEXT 1": [ "receivingSideID", $._decode_implicit<LegType>(() => _decode_LegType) ]
}); }
    return _cached_decoder_for_LegID(el);
}

let _cached_encoder_for_LegID: $.ASN1Encoder<LegID> | null = null;

/**
 * @summary Encodes a(n) LegID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LegID, encoded as an ASN.1 Element.
 */
export
function _encode_LegID (value: LegID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LegID) { _cached_encoder_for_LegID = $._encode_choice<LegID>({
    "sendingSideID": $._encode_implicit(_TagClass.context, 0, () => _encode_LegType, $.BER),
    "receivingSideID": $._encode_implicit(_TagClass.context, 1, () => _encode_LegType, $.BER),
}, $.BER); }
    return _cached_encoder_for_LegID(value, elGetter);
}


/* eslint-enable */
