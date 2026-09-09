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
import { InvokeID, _decode_InvokeID, _encode_InvokeID } from "../Core-INAP-CS1-DataTypes/InvokeID.ta.mjs";
// export { InvokeID, _decode_InvokeID, _encode_InvokeID } from "../Core-INAP-CS1-DataTypes/InvokeID.ta.mjs";


/**
 * @summary CancelArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CancelArg           ::=  CHOICE {
 *      invokeID          [0] InvokeID,
 *      allRequests          [1] NULL
 *      }
 * ```
 */
export
type CancelArg =
    { invokeID: InvokeID } /* CHOICE_ALT_ROOT */
    | { allRequests: NULL } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_CancelArg: $.ASN1Decoder<CancelArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CancelArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CancelArg (el: _Element): CancelArg {
    if (!_cached_decoder_for_CancelArg) { _cached_decoder_for_CancelArg = $._decode_inextensible_choice<CancelArg>({
    "CONTEXT 0": [ "invokeID", $._decode_implicit<InvokeID>(() => _decode_InvokeID) ],
    "CONTEXT 1": [ "allRequests", $._decode_implicit<NULL>(() => $._decodeNull) ]
}); }
    return _cached_decoder_for_CancelArg(el);
}

let _cached_encoder_for_CancelArg: $.ASN1Encoder<CancelArg> | null = null;

/**
 * @summary Encodes a(n) CancelArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CancelArg, encoded as an ASN.1 Element.
 */
export
function _encode_CancelArg (value: CancelArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CancelArg) { _cached_encoder_for_CancelArg = $._encode_choice<CancelArg>({
    "invokeID": $._encode_implicit(_TagClass.context, 0, () => _encode_InvokeID, $.BER),
    "allRequests": $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER),
}, $.BER); }
    return _cached_encoder_for_CancelArg(value, elGetter);
}


/* eslint-enable */
