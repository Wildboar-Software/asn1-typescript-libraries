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
import { CliRestrictionOption, _enum_for_CliRestrictionOption, CliRestrictionOption_permanent /* IMPORTED_LONG_ENUMERATION_ITEM */, permanent /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CliRestrictionOption, _encode_CliRestrictionOption } from "../MAP-SS-DataTypes/CliRestrictionOption.ta.mjs";
// export { CliRestrictionOption, _enum_for_CliRestrictionOption, CliRestrictionOption_permanent /* IMPORTED_LONG_ENUMERATION_ITEM */, permanent /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultRestricted /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultRestricted /* IMPORTED_SHORT_ENUMERATION_ITEM */, CliRestrictionOption_temporaryDefaultAllowed /* IMPORTED_LONG_ENUMERATION_ITEM */, temporaryDefaultAllowed /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CliRestrictionOption, _encode_CliRestrictionOption } from "../MAP-SS-DataTypes/CliRestrictionOption.ta.mjs";
import { OverrideCategory, _enum_for_OverrideCategory, OverrideCategory_overrideEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, OverrideCategory_overrideDisabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideDisabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OverrideCategory, _encode_OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";
// export { OverrideCategory, _enum_for_OverrideCategory, OverrideCategory_overrideEnabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideEnabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, OverrideCategory_overrideDisabled /* IMPORTED_LONG_ENUMERATION_ITEM */, overrideDisabled /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_OverrideCategory, _encode_OverrideCategory } from "../MAP-SS-DataTypes/OverrideCategory.ta.mjs";


/**
 * @summary SS_SubscriptionOption
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SS-SubscriptionOption  ::=  CHOICE {
 *     cliRestrictionOption    [2] CliRestrictionOption,
 *     overrideCategory    [1] OverrideCategory}
 * ```
 */
export
type SS_SubscriptionOption =
    { cliRestrictionOption: CliRestrictionOption } /* CHOICE_ALT_ROOT */
    | { overrideCategory: OverrideCategory } /* CHOICE_ALT_ROOT */;

let _cached_decoder_for_SS_SubscriptionOption: $.ASN1Decoder<SS_SubscriptionOption> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SS_SubscriptionOption
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SS_SubscriptionOption (el: _Element): SS_SubscriptionOption {
    if (!_cached_decoder_for_SS_SubscriptionOption) { _cached_decoder_for_SS_SubscriptionOption = $._decode_inextensible_choice<SS_SubscriptionOption>({
    "CONTEXT 2": [ "cliRestrictionOption", $._decode_implicit<CliRestrictionOption>(() => _decode_CliRestrictionOption) ],
    "CONTEXT 1": [ "overrideCategory", $._decode_implicit<OverrideCategory>(() => _decode_OverrideCategory) ]
}); }
    return _cached_decoder_for_SS_SubscriptionOption(el);
}

let _cached_encoder_for_SS_SubscriptionOption: $.ASN1Encoder<SS_SubscriptionOption> | null = null;

/**
 * @summary Encodes a(n) SS_SubscriptionOption into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SS_SubscriptionOption, encoded as an ASN.1 Element.
 */
export
function _encode_SS_SubscriptionOption (value: SS_SubscriptionOption, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SS_SubscriptionOption) { _cached_encoder_for_SS_SubscriptionOption = $._encode_choice<SS_SubscriptionOption>({
    "cliRestrictionOption": $._encode_implicit(_TagClass.context, 2, () => _encode_CliRestrictionOption, $.BER),
    "overrideCategory": $._encode_implicit(_TagClass.context, 1, () => _encode_OverrideCategory, $.BER),
}, $.BER); }
    return _cached_encoder_for_SS_SubscriptionOption(value, elGetter);
}


/* eslint-enable */
