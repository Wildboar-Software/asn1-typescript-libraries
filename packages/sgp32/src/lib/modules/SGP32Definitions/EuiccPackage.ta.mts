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
import { Psmo, _decode_Psmo, _encode_Psmo } from "../SGP32Definitions/Psmo.ta.mjs";
// export { Psmo, _decode_Psmo, _encode_Psmo } from "../SGP32Definitions/Psmo.ta.mjs";
import { Eco, _decode_Eco, _encode_Eco } from "../SGP32Definitions/Eco.ta.mjs";
// export { Eco, _decode_Eco, _encode_Eco } from "../SGP32Definitions/Eco.ta.mjs";


/**
 * @summary EuiccPackage
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccPackage  ::=  CHOICE {
 *     psmoList SEQUENCE OF Psmo, -- #SupportedForPsmoV1.0.0#
 *     ecoList  SEQUENCE OF Eco -- #SupportedForEcoV1.0.0#
 * }
 * ```
 */
export
type EuiccPackage =
    { psmoList: Psmo[] } /* CHOICE_ALT_ROOT */
    | { ecoList: Eco[] } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_EuiccPackage: $.ASN1Decoder<EuiccPackage> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EuiccPackage
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EuiccPackage (el: _Element): EuiccPackage {
    if (!_cached_decoder_for_EuiccPackage) { _cached_decoder_for_EuiccPackage = $._decode_inextensible_choice<EuiccPackage>({
    "CONTEXT 0": [ "psmoList", $._decodeSequenceOf<Psmo>(() => _decode_Psmo) ],
    "CONTEXT 1": [ "ecoList", $._decodeSequenceOf<Eco>(() => _decode_Eco) ]
}); }
    return _cached_decoder_for_EuiccPackage(el);
}

let _cached_encoder_for_EuiccPackage: $.ASN1Encoder<EuiccPackage> | null = null;

/**
 * @summary Encodes a(n) EuiccPackage into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EuiccPackage, encoded as an ASN.1 Element.
 */
export
function _encode_EuiccPackage (value: EuiccPackage, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EuiccPackage) { _cached_encoder_for_EuiccPackage = $._encode_choice<EuiccPackage>({
    "psmoList": $._encodeSequenceOf<Psmo>(() => _encode_Psmo, $.BER),
    "ecoList": $._encodeSequenceOf<Eco>(() => _encode_Eco, $.BER),
}, $.BER); }
    return _cached_encoder_for_EuiccPackage(value, elGetter);
}


/* eslint-enable */
