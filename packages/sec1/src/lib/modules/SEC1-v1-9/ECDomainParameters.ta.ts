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
import * as $ from "asn1-ts/dist/node/functional";
import { SpecifiedECDomain, _decode_SpecifiedECDomain, _encode_SpecifiedECDomain } from "../SEC1-v1-9/SpecifiedECDomain.ta";
export { SpecifiedECDomain, _decode_SpecifiedECDomain, _encode_SpecifiedECDomain } from "../SEC1-v1-9/SpecifiedECDomain.ta";
import { ECDOMAIN } from "../SEC1-v1-9/ECDOMAIN.oca";
export { ECDOMAIN } from "../SEC1-v1-9/ECDOMAIN.oca";


/* START_OF_SYMBOL_DEFINITION ECDomainParameters */
/**
 * @summary ECDomainParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ECDomainParameters{ECDOMAIN:IOSet}  ::=  CHOICE {
 *     specified   SpecifiedECDomain,
 *     named       ECDOMAIN.&id({IOSet}),
 *     implicitCA  NULL
 * }
 * ```
 */
export
type ECDomainParameters =
    { specified: SpecifiedECDomain } /* CHOICE_ALT_ROOT */
    | { named: OBJECT_IDENTIFIER } /* CHOICE_ALT_ROOT */
    | { implicitCA: NULL } /* CHOICE_ALT_ROOT */;
/* END_OF_SYMBOL_DEFINITION ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDomainParameters */
let _cached_decoder_for_ECDomainParameters: $.ASN1Decoder<ECDomainParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _decode_ECDomainParameters */
/**
 * @summary Decodes an ASN.1 element into a(n) ECDomainParameters
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {ECDomainParameters} The decoded data structure.
 */
export
function _decode_ECDomainParameters (el: _Element) {
    if (!_cached_decoder_for_ECDomainParameters) { _cached_decoder_for_ECDomainParameters = $._decode_inextensible_choice<ECDomainParameters>({
    "UNIVERSAL 16": [ "specified", _decode_SpecifiedECDomain ],
    "UNIVERSAL 6": [ "named", $._decodeObjectIdentifier ],
    "UNIVERSAL 5": [ "implicitCA", $._decodeNull ]
}); }
    return _cached_decoder_for_ECDomainParameters(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDomainParameters */
let _cached_encoder_for_ECDomainParameters: $.ASN1Encoder<ECDomainParameters> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_ECDomainParameters */

/* START_OF_SYMBOL_DEFINITION _encode_ECDomainParameters */
/**
 * @summary Encodes a(n) ECDomainParameters into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ECDomainParameters, encoded as an ASN.1 Element.
 */
export
function _encode_ECDomainParameters (value: ECDomainParameters, elGetter: $.ASN1Encoder<ECDomainParameters>) {
    if (!_cached_encoder_for_ECDomainParameters) { _cached_encoder_for_ECDomainParameters = $._encode_choice<ECDomainParameters>({
    "specified": _encode_SpecifiedECDomain,
    "named": $._encodeObjectIdentifier,
    "implicitCA": $._encodeNull,
}, $.BER); }
    return _cached_encoder_for_ECDomainParameters(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_ECDomainParameters */

/* eslint-enable */
