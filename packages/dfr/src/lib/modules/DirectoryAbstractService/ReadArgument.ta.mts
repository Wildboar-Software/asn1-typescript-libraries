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
import { ReadArgumentData, _decode_ReadArgumentData, _encode_ReadArgumentData } from "../DirectoryAbstractService/ReadArgumentData.ta.mjs";
// export { ReadArgumentData, _decode_ReadArgumentData, _encode_ReadArgumentData } from "../DirectoryAbstractService/ReadArgumentData.ta.mjs";


/**
 * @summary ReadArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReadArgument  ::=  OPTIONALLY-PROTECTED { ReadArgumentData }
 * ```
 */
export
type ReadArgument = OPTIONALLY_PROTECTED<ReadArgumentData>; // DefinedType

let _cached_decoder_for_ReadArgument: $.ASN1Decoder<ReadArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReadArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReadArgument (el: _Element): ReadArgument {
    if (!_cached_decoder_for_ReadArgument) { _cached_decoder_for_ReadArgument = _get_decoder_for_OPTIONALLY_PROTECTED<ReadArgumentData>(_decode_ReadArgumentData); }
    return _cached_decoder_for_ReadArgument(el);
}

let _cached_encoder_for_ReadArgument: $.ASN1Encoder<ReadArgument> | null = null;

/**
 * @summary Encodes a(n) ReadArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReadArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ReadArgument (value: ReadArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReadArgument) { _cached_encoder_for_ReadArgument = _get_encoder_for_OPTIONALLY_PROTECTED<ReadArgumentData>(_encode_ReadArgumentData); }
    return _cached_encoder_for_ReadArgument(value, elGetter);
}


/* eslint-enable */
