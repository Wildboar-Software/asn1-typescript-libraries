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
import { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";
// export { Path, _decode_Path, _encode_Path } from "../CryptographicInformationFramework/Path.ta.mjs";


/**
 * @summary PathOrObjects
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PathOrObjects {ObjectType}  ::=  CHOICE {
 *        path        Path,
 *        objects [0] SEQUENCE OF ObjectType,
 *        ... -- For future extensions
 * }
 * ```
 */
export
type PathOrObjects<ObjectType> =
    { path: Path } /* CHOICE_ALT_ROOT */
    | { objects: ObjectType[] } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_PathOrObjects: $.ASN1Decoder<PathOrObjects<ObjectType>> | null = null;

/**
 * @summary Returns a function that will decode an ASN.1 element into a(n) PathOrObjects
 * @function
 * @returns A function that will decode an ASN.1 element.
 */
export
function _get_decoder_for_PathOrObjects<ObjectType>(_decode_ObjectType: $.ASN1Decoder<ObjectType>): $.ASN1Decoder<PathOrObjects<ObjectType>> {
    return $._decode_extensible_choice<PathOrObjects<ObjectType>>({
    "UNIVERSAL 16": [ "path", _decode_Path ],
    "CONTEXT 0": [ "objects", $._decode_implicit<ObjectType[]>(() => $._decodeSequenceOf<ObjectType>(() => _decode_ObjectType)) ]
});
}

let _cached_encoder_for_PathOrObjects: $.ASN1Encoder<PathOrObjects<ObjectType>> | null = null;

/**
 * @summary Returns a function that will encode a(n) PathOrObjects into an ASN.1 Element.
 * @function
 * @returns A function that will encode a(n) PathOrObjects as an ASN.1 element.
 */
export
function _get_encoder_for_PathOrObjects<ObjectType>(_encode_ObjectType: $.ASN1Encoder<ObjectType>): $.ASN1Encoder<PathOrObjects<ObjectType>> {
    return $._encode_choice<PathOrObjects<ObjectType>>({
    "path": _encode_Path,
    "objects": $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ObjectType>(() => _encode_ObjectType, $.BER), $.BER),
}, $.BER);
}

/* eslint-enable */
