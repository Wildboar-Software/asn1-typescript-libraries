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
import { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
// export { LAIFixedLength, _decode_LAIFixedLength, _encode_LAIFixedLength } from "../MAP-CommonDataTypes/LAIFixedLength.ta.mjs";
import { LAC, _decode_LAC, _encode_LAC } from "../MAP-MS-DataTypes/LAC.ta.mjs";
// export { LAC, _decode_LAC, _encode_LAC } from "../MAP-MS-DataTypes/LAC.ta.mjs";


/**
 * @summary LocationArea
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LocationArea  ::=  CHOICE {
 *     laiFixedLength    [0] LAIFixedLength,
 *     lac    [1] LAC}
 * ```
 */
export
type LocationArea =
    { laiFixedLength: LAIFixedLength } /* CHOICE_ALT_ROOT */
    | { lac: LAC } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_LocationArea: $.ASN1Decoder<LocationArea> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) LocationArea
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_LocationArea (el: _Element): LocationArea {
    if (!_cached_decoder_for_LocationArea) { _cached_decoder_for_LocationArea = $._decode_inextensible_choice<LocationArea>({
    "CONTEXT 0": [ "laiFixedLength", $._decode_implicit<LAIFixedLength>(() => _decode_LAIFixedLength) ],
    "CONTEXT 1": [ "lac", $._decode_implicit<LAC>(() => _decode_LAC) ]
}); }
    return _cached_decoder_for_LocationArea(el);
}

let _cached_encoder_for_LocationArea: $.ASN1Encoder<LocationArea> | null = null;

/**
 * @summary Encodes a(n) LocationArea into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The LocationArea, encoded as an ASN.1 Element.
 */
export
function _encode_LocationArea (value: LocationArea, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_LocationArea) { _cached_encoder_for_LocationArea = $._encode_choice<LocationArea>({
    "laiFixedLength": $._encode_implicit(_TagClass.context, 0, () => _encode_LAIFixedLength, $.BER),
    "lac": $._encode_implicit(_TagClass.context, 1, () => _encode_LAC, $.BER),
}, $.BER); }
    return _cached_encoder_for_LocationArea(value, elGetter);
}


/* eslint-enable */
