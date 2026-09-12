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
import { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";
// export { Unsigned32, _decode_Unsigned32, _encode_Unsigned32 } from "../ISO-9506-MMS-1/Unsigned32.ta.mjs";


/**
 * @summary DeleteNamedType_Error
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DeleteNamedType-Error  ::=  Unsigned32
 * ```
 */
export
type DeleteNamedType_Error = Unsigned32; // DefinedType

let _cached_decoder_for_DeleteNamedType_Error: $.ASN1Decoder<DeleteNamedType_Error> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DeleteNamedType_Error
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DeleteNamedType_Error (el: _Element): DeleteNamedType_Error {
    if (!_cached_decoder_for_DeleteNamedType_Error) { _cached_decoder_for_DeleteNamedType_Error = _decode_Unsigned32; }
    return _cached_decoder_for_DeleteNamedType_Error(el);
}

let _cached_encoder_for_DeleteNamedType_Error: $.ASN1Encoder<DeleteNamedType_Error> | null = null;

/**
 * @summary Encodes a(n) DeleteNamedType_Error into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DeleteNamedType_Error, encoded as an ASN.1 Element.
 */
export
function _encode_DeleteNamedType_Error (value: DeleteNamedType_Error, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DeleteNamedType_Error) { _cached_encoder_for_DeleteNamedType_Error = _encode_Unsigned32; }
    return _cached_encoder_for_DeleteNamedType_Error(value, elGetter);
}


/* eslint-enable */
