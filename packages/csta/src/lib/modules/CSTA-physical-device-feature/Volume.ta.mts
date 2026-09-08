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
import { VolAbs, _decode_VolAbs, _encode_VolAbs } from "../CSTA-physical-device-feature/VolAbs.ta.mjs";
// export { VolAbs, _decode_VolAbs, _encode_VolAbs } from "../CSTA-physical-device-feature/VolAbs.ta.mjs";
import { VolInc, _enum_for_VolInc, VolInc_increment /* IMPORTED_LONG_ENUMERATION_ITEM */, increment /* IMPORTED_SHORT_ENUMERATION_ITEM */, VolInc_decrement /* IMPORTED_LONG_ENUMERATION_ITEM */, decrement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VolInc, _encode_VolInc } from "../CSTA-physical-device-feature/VolInc.ta.mjs";
// export { VolInc, _enum_for_VolInc, VolInc_increment /* IMPORTED_LONG_ENUMERATION_ITEM */, increment /* IMPORTED_SHORT_ENUMERATION_ITEM */, VolInc_decrement /* IMPORTED_LONG_ENUMERATION_ITEM */, decrement /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_VolInc, _encode_VolInc } from "../CSTA-physical-device-feature/VolInc.ta.mjs";


/**
 * @summary Volume
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Volume  ::=  CHOICE
 * {     volAbs                     VolAbs,
 *     volInc                     VolInc }
 * ```
 */
export
type Volume =
    { volAbs: VolAbs } /* CHOICE_ALT_ROOT */
    | { volInc: VolInc } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_Volume: $.ASN1Decoder<Volume> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Volume
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Volume (el: _Element): Volume {
    if (!_cached_decoder_for_Volume) { _cached_decoder_for_Volume = $._decode_inextensible_choice<Volume>({
    "UNIVERSAL 2": [ "volAbs", _decode_VolAbs ],
    "UNIVERSAL 10": [ "volInc", _decode_VolInc ]
}); }
    return _cached_decoder_for_Volume(el);
}

let _cached_encoder_for_Volume: $.ASN1Encoder<Volume> | null = null;

/**
 * @summary Encodes a(n) Volume into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Volume, encoded as an ASN.1 Element.
 */
export
function _encode_Volume (value: Volume, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Volume) { _cached_encoder_for_Volume = $._encode_choice<Volume>({
    "volAbs": _encode_VolAbs,
    "volInc": _encode_VolInc,
}, $.BER); }
    return _cached_encoder_for_Volume(value, elGetter);
}


/* eslint-enable */
