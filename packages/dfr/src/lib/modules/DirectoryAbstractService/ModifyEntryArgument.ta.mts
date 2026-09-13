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
import { ModifyEntryArgumentData, _decode_ModifyEntryArgumentData, _encode_ModifyEntryArgumentData } from "../DirectoryAbstractService/ModifyEntryArgumentData.ta.mjs";
// export { ModifyEntryArgumentData, _decode_ModifyEntryArgumentData, _encode_ModifyEntryArgumentData } from "../DirectoryAbstractService/ModifyEntryArgumentData.ta.mjs";


/**
 * @summary ModifyEntryArgument
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ModifyEntryArgument  ::=  OPTIONALLY-PROTECTED { ModifyEntryArgumentData }
 * ```
 */
export
type ModifyEntryArgument = OPTIONALLY_PROTECTED<ModifyEntryArgumentData>; // DefinedType

let _cached_decoder_for_ModifyEntryArgument: $.ASN1Decoder<ModifyEntryArgument> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ModifyEntryArgument
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ModifyEntryArgument (el: _Element): ModifyEntryArgument {
    if (!_cached_decoder_for_ModifyEntryArgument) { _cached_decoder_for_ModifyEntryArgument = _get_decoder_for_OPTIONALLY_PROTECTED<ModifyEntryArgumentData>(_decode_ModifyEntryArgumentData); }
    return _cached_decoder_for_ModifyEntryArgument(el);
}

let _cached_encoder_for_ModifyEntryArgument: $.ASN1Encoder<ModifyEntryArgument> | null = null;

/**
 * @summary Encodes a(n) ModifyEntryArgument into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ModifyEntryArgument, encoded as an ASN.1 Element.
 */
export
function _encode_ModifyEntryArgument (value: ModifyEntryArgument, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ModifyEntryArgument) { _cached_encoder_for_ModifyEntryArgument = _get_encoder_for_OPTIONALLY_PROTECTED<ModifyEntryArgumentData>(_encode_ModifyEntryArgumentData); }
    return _cached_encoder_for_ModifyEntryArgument(value, elGetter);
}


/* eslint-enable */
