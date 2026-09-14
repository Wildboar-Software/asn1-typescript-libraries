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
import { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
// export { KEY_AGREEMENT } from "../ANSI-X9-42/KEY-AGREEMENT.oca.mjs";
import { NamedSchemes } from "../ANSI-X9-42/NamedSchemes.osa.mjs";
// export { NamedSchemes } from "../ANSI-X9-42/NamedSchemes.osa.mjs";


/**
 * @summary SchemeOID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemeOID  ::=  KEY-AGREEMENT.&id({NamedSchemes})
 * ```
 */
export
type SchemeOID = OBJECT_IDENTIFIER; // ObjectClassFieldType

let _cached_decoder_for_SchemeOID: $.ASN1Decoder<SchemeOID> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemeOID
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemeOID (el: _Element): SchemeOID {
    if (!_cached_decoder_for_SchemeOID) { _cached_decoder_for_SchemeOID = $._decodeObjectIdentifier; }
    return _cached_decoder_for_SchemeOID(el);
}

let _cached_encoder_for_SchemeOID: $.ASN1Encoder<SchemeOID> | null = null;

/**
 * @summary Encodes a(n) SchemeOID into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemeOID, encoded as an ASN.1 Element.
 */
export
function _encode_SchemeOID (value: SchemeOID, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemeOID) { _cached_encoder_for_SchemeOID = $._encodeObjectIdentifier; }
    return _cached_encoder_for_SchemeOID(value, elGetter);
}


/* eslint-enable */
