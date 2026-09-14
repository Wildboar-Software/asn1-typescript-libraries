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
import { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
// export { GeneralNames, _decode_GeneralNames, _encode_GeneralNames } from "../CertificateExtensions/GeneralNames.ta.mjs";
import { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";
// export { RelativeDistinguishedName, _decode_RelativeDistinguishedName, _encode_RelativeDistinguishedName } from "../InformationFramework/RelativeDistinguishedName.ta.mjs";


/**
 * @summary DistributionPointName
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DistributionPointName  ::=  CHOICE {
 *   fullName                 [0]  GeneralNames,
 *   nameRelativeToCRLIssuer  [1]  RelativeDistinguishedName,
 *   ... }
 * ```
 */
export
type DistributionPointName =
    { fullName: GeneralNames } /* CHOICE_ALT_ROOT */
    | { nameRelativeToCRLIssuer: RelativeDistinguishedName } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_DistributionPointName: $.ASN1Decoder<DistributionPointName> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DistributionPointName
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DistributionPointName (el: _Element): DistributionPointName {
    if (!_cached_decoder_for_DistributionPointName) { _cached_decoder_for_DistributionPointName = $._decode_extensible_choice<DistributionPointName>({
    "CONTEXT 0": [ "fullName", $._decode_implicit<GeneralNames>(() => _decode_GeneralNames) ],
    "CONTEXT 1": [ "nameRelativeToCRLIssuer", $._decode_implicit<RelativeDistinguishedName>(() => _decode_RelativeDistinguishedName) ]
}); }
    return _cached_decoder_for_DistributionPointName(el);
}

let _cached_encoder_for_DistributionPointName: $.ASN1Encoder<DistributionPointName> | null = null;

/**
 * @summary Encodes a(n) DistributionPointName into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DistributionPointName, encoded as an ASN.1 Element.
 */
export
function _encode_DistributionPointName (value: DistributionPointName, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DistributionPointName) { _cached_encoder_for_DistributionPointName = $._encode_choice<DistributionPointName>({
    "fullName": $._encode_implicit(_TagClass.context, 0, () => _encode_GeneralNames, $.BER),
    "nameRelativeToCRLIssuer": $._encode_implicit(_TagClass.context, 1, () => _encode_RelativeDistinguishedName, $.BER),
}, $.BER); }
    return _cached_encoder_for_DistributionPointName(value, elGetter);
}


/* eslint-enable */
