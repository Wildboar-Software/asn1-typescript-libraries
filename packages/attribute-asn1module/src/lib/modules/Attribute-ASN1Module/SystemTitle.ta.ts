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
import { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.js";
export { DistinguishedName, _decode_DistinguishedName, _encode_DistinguishedName } from "@wildboar/cmip/src/lib/modules/CMIP-1/DistinguishedName.ta.js";


/* START_OF_SYMBOL_DEFINITION SystemTitle */
/**
 * @summary SystemTitle
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * SystemTitle  ::=  CHOICE {
 *   distinguishedName  DistinguishedName,
 *   oid                OBJECT IDENTIFIER,
 *   nothing            NULL
 * }
 * ```
 */
export
type SystemTitle =
    { distinguishedName: DistinguishedName } /* CHOICE_ALT_ROOT */
    | { oid: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { nothing: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION SystemTitle */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTitle */
let _cached_decoder_for_SystemTitle: $.ASN1Decoder<SystemTitle> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_SystemTitle */

/* START_OF_SYMBOL_DEFINITION _decode_SystemTitle */
/**
 * @summary Decodes an ASN.1 element into a(n) SystemTitle
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {SystemTitle} The decoded data structure.
 */
export
function _decode_SystemTitle (el: _Element) {
    if (!_cached_decoder_for_SystemTitle) { _cached_decoder_for_SystemTitle = $._decode_inextensible_choice<SystemTitle>({
    "UNIVERSAL 16": [ "distinguishedName", _decode_DistinguishedName ],
    "UNIVERSAL 6": [ "oid", $._decodeObjectIdentifier ],
    "UNIVERSAL 5": [ "nothing", $._decodeNull ]
}); }
    return _cached_decoder_for_SystemTitle(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_SystemTitle */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTitle */
let _cached_encoder_for_SystemTitle: $.ASN1Encoder<SystemTitle> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_SystemTitle */

/* START_OF_SYMBOL_DEFINITION _encode_SystemTitle */
/**
 * @summary Encodes a(n) SystemTitle into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SystemTitle, encoded as an ASN.1 Element.
 */
export
function _encode_SystemTitle (value: SystemTitle, elGetter: $.ASN1Encoder<SystemTitle>) {
    if (!_cached_encoder_for_SystemTitle) { _cached_encoder_for_SystemTitle = $._encode_choice<SystemTitle>({
    "distinguishedName": _encode_DistinguishedName,
    "oid": $._encodeObjectIdentifier,
    "nothing": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_SystemTitle(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_SystemTitle */

/* eslint-enable */
