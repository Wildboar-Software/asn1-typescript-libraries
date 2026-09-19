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
import { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
// export { DirectoryString, _decode_DirectoryString, _encode_DirectoryString } from "../SelectedAttributeTypes/DirectoryString.ta.mjs";
import { RIParametersDeprecated, _decode_RIParametersDeprecated, _encode_RIParametersDeprecated } from "../ACP133CommonContent/RIParametersDeprecated.ta.mjs";
// export { RIParametersDeprecated, _decode_RIParametersDeprecated, _encode_RIParametersDeprecated } from "../ACP133CommonContent/RIParametersDeprecated.ta.mjs";


/**
 * @summary RIParameters
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RIParameters  ::=  CHOICE {
 *     ri-parameters             DirectoryString,
 *     ri-parameters-deprecated  RIParametersDeprecated
 * }
 * ```
 */
export
type RIParameters =
    { ri_parameters: DirectoryString } /* CHOICE_ALT_ROOT */
    | { ri_parameters_deprecated: RIParametersDeprecated } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_RIParameters: $.ASN1Decoder<RIParameters> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RIParameters
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RIParameters (el: _Element): RIParameters {
    if (!_cached_decoder_for_RIParameters) { _cached_decoder_for_RIParameters = $._decode_inextensible_choice<RIParameters>({
    "UNIVERSAL 20": [ "ri_parameters", _decode_DirectoryString ],
    "UNIVERSAL 19": [ "ri_parameters", _decode_DirectoryString ],
    "UNIVERSAL 30": [ "ri_parameters", _decode_DirectoryString ],
    "UNIVERSAL 28": [ "ri_parameters", _decode_DirectoryString ],
    "UNIVERSAL 12": [ "ri_parameters", _decode_DirectoryString ],
    "UNIVERSAL 17": [ "ri_parameters_deprecated", _decode_RIParametersDeprecated ]
}); }
    return _cached_decoder_for_RIParameters(el);
}

let _cached_encoder_for_RIParameters: $.ASN1Encoder<RIParameters> | null = null;

/**
 * @summary Encodes a(n) RIParameters into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RIParameters, encoded as an ASN.1 Element.
 */
export
function _encode_RIParameters (value: RIParameters, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RIParameters) { _cached_encoder_for_RIParameters = $._encode_choice<RIParameters>({
    "ri_parameters": _encode_DirectoryString,
    "ri_parameters_deprecated": _encode_RIParametersDeprecated,
}, $.BER); }
    return _cached_encoder_for_RIParameters(value, elGetter);
}


/* eslint-enable */
