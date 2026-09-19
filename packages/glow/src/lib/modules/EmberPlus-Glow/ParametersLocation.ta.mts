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
import { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";
// export { Integer32, _decode_Integer32, _encode_Integer32 } from "../EmberPlus-Glow/Integer32.ta.mjs";


/**
 * @summary ParametersLocation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ParametersLocation  ::= 
 *     CHOICE {
 *         basePath RELATIVE-OID, -- absolute path to node containing parameters for targets, sources and connections
 *         inline   Integer32     -- subidentifier to node containing parameters for targets, sources and connections
 *     }
 * ```
 */
export
type ParametersLocation =
    { basePath: RELATIVE_OID } /* CHOICE_ALT_ROOT */
    | { inline: Integer32 } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_ParametersLocation: $.ASN1Decoder<ParametersLocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ParametersLocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ParametersLocation (el: _Element): ParametersLocation {
    if (!_cached_decoder_for_ParametersLocation) { _cached_decoder_for_ParametersLocation = $._decode_inextensible_choice<ParametersLocation>({
    "UNIVERSAL 13": [ "basePath", $._decodeRelativeOID ],
    "UNIVERSAL 2": [ "inline", _decode_Integer32 ]
}); }
    return _cached_decoder_for_ParametersLocation(el);
}

let _cached_encoder_for_ParametersLocation: $.ASN1Encoder<ParametersLocation> | null = null;

/**
 * @summary Encodes a(n) ParametersLocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ParametersLocation, encoded as an ASN.1 Element.
 */
export
function _encode_ParametersLocation (value: ParametersLocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ParametersLocation) { _cached_encoder_for_ParametersLocation = $._encode_choice<ParametersLocation>({
    "basePath": $._encodeRelativeOID,
    "inline": _encode_Integer32,
}, $.BER); }
    return _cached_encoder_for_ParametersLocation(value, elGetter);
}


/* eslint-enable */
