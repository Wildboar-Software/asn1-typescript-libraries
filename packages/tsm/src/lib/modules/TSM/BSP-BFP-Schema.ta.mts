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
import { BioAPI_BSP_SCHEMA, _decode_BioAPI_BSP_SCHEMA, _encode_BioAPI_BSP_SCHEMA } from "../BIP/BioAPI-BSP-SCHEMA.ta.mjs";
// export { BioAPI_BSP_SCHEMA, _decode_BioAPI_BSP_SCHEMA, _encode_BioAPI_BSP_SCHEMA } from "../BIP/BioAPI-BSP-SCHEMA.ta.mjs";
import { BioAPI_BFP_SCHEMA, _decode_BioAPI_BFP_SCHEMA, _encode_BioAPI_BFP_SCHEMA } from "../BIP/BioAPI-BFP-SCHEMA.ta.mjs";
// export { BioAPI_BFP_SCHEMA, _decode_BioAPI_BFP_SCHEMA, _encode_BioAPI_BFP_SCHEMA } from "../BIP/BioAPI-BFP-SCHEMA.ta.mjs";


/**
 * @summary BSP_BFP_Schema
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BSP-BFP-Schema  ::=  CHOICE {
 * bSPSchema       BioAPI-BSP-SCHEMA,
 * bFPSchema       BioAPI-BFP-SCHEMA
 * }
 * ```
 */
export
type BSP_BFP_Schema =
    { bSPSchema: BioAPI_BSP_SCHEMA } /* CHOICE_ALT_ROOT */
    | { bFPSchema: BioAPI_BFP_SCHEMA } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_BSP_BFP_Schema: $.ASN1Decoder<BSP_BFP_Schema> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BSP_BFP_Schema
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BSP_BFP_Schema (el: _Element): BSP_BFP_Schema {
    if (!_cached_decoder_for_BSP_BFP_Schema) { _cached_decoder_for_BSP_BFP_Schema = $._decode_inextensible_choice<BSP_BFP_Schema>({
    "CONTEXT 0": [ "bSPSchema", _decode_BioAPI_BSP_SCHEMA ],
    "CONTEXT 1": [ "bFPSchema", _decode_BioAPI_BFP_SCHEMA ]
}); }
    return _cached_decoder_for_BSP_BFP_Schema(el);
}

let _cached_encoder_for_BSP_BFP_Schema: $.ASN1Encoder<BSP_BFP_Schema> | null = null;

/**
 * @summary Encodes a(n) BSP_BFP_Schema into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BSP_BFP_Schema, encoded as an ASN.1 Element.
 */
export
function _encode_BSP_BFP_Schema (value: BSP_BFP_Schema, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BSP_BFP_Schema) { _cached_encoder_for_BSP_BFP_Schema = $._encode_choice<BSP_BFP_Schema>({
    "bSPSchema": _encode_BioAPI_BSP_SCHEMA,
    "bFPSchema": _encode_BioAPI_BFP_SCHEMA,
}, $.BER); }
    return _cached_encoder_for_BSP_BFP_Schema(value, elGetter);
}


/* eslint-enable */
