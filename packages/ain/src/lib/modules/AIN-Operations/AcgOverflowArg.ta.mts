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
import { ControlCauseIndicator, _decode_ControlCauseIndicator, _encode_ControlCauseIndicator } from "../AIN-Parameters/ControlCauseIndicator.ta.mjs";
// export { ControlCauseIndicator, _decode_ControlCauseIndicator, _encode_ControlCauseIndicator } from "../AIN-Parameters/ControlCauseIndicator.ta.mjs";
import { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
// export { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
import { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
// export { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary AcgOverflowArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcgOverflowArg ::= SEQUENCE{
 *             controlCauseIndicator          ControlCauseIndicator,
 *             translationType                TranslationType,
 *             globalTitleAddress             GlobalTitleAddress,
 *             extensionParameter            [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class AcgOverflowArg {
    constructor (
        /**
         * @summary `controlCauseIndicator`.
         * @public
         * @readonly
         */
        readonly controlCauseIndicator: ControlCauseIndicator,
        /**
         * @summary `translationType`.
         * @public
         * @readonly
         */
        readonly translationType: TranslationType,
        /**
         * @summary `globalTitleAddress`.
         * @public
         * @readonly
         */
        readonly globalTitleAddress: GlobalTitleAddress,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a AcgOverflowArg
     * @description
     * 
     * This takes an `object` and converts it to a `AcgOverflowArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AcgOverflowArg`.
     * @returns {AcgOverflowArg}
     */
    public static _from_object (_o: { [_K in keyof (AcgOverflowArg)]: (AcgOverflowArg)[_K] }): AcgOverflowArg {
        return new AcgOverflowArg(_o.controlCauseIndicator, _o.translationType, _o.globalTitleAddress, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of AcgOverflowArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AcgOverflowArg: $.ComponentSpec[] = [
    new $.ComponentSpec("controlCauseIndicator", false, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("translationType", false, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("globalTitleAddress", false, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of AcgOverflowArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AcgOverflowArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AcgOverflowArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AcgOverflowArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AcgOverflowArg: $.ASN1Decoder<AcgOverflowArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcgOverflowArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcgOverflowArg (el: _Element): AcgOverflowArg {
    if (!_cached_decoder_for_AcgOverflowArg) { _cached_decoder_for_AcgOverflowArg = function (el: _Element): AcgOverflowArg {
    let controlCauseIndicator!: ControlCauseIndicator;
    let translationType!: TranslationType;
    let globalTitleAddress!: GlobalTitleAddress;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "controlCauseIndicator": (_el: _Element): void => { controlCauseIndicator = _decode_ControlCauseIndicator(_el); },
        "translationType": (_el: _Element): void => { translationType = _decode_TranslationType(_el); },
        "globalTitleAddress": (_el: _Element): void => { globalTitleAddress = _decode_GlobalTitleAddress(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AcgOverflowArg,
        _extension_additions_list_spec_for_AcgOverflowArg,
        _root_component_type_list_2_spec_for_AcgOverflowArg,
        undefined,
    );
    return new AcgOverflowArg(
        controlCauseIndicator,
        translationType,
        globalTitleAddress,
        extensionParameter
    );
}; }
    return _cached_decoder_for_AcgOverflowArg(el);
}

let _cached_encoder_for_AcgOverflowArg: $.ASN1Encoder<AcgOverflowArg> | null = null;

/**
 * @summary Encodes a(n) AcgOverflowArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcgOverflowArg, encoded as an ASN.1 Element.
 */
export
function _encode_AcgOverflowArg (value: AcgOverflowArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcgOverflowArg) { _cached_encoder_for_AcgOverflowArg = function (value: AcgOverflowArg, elGetter: $.ASN1Encoder<AcgOverflowArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ControlCauseIndicator(value.controlCauseIndicator, $.BER),
            /* REQUIRED   */ _encode_TranslationType(value.translationType, $.BER),
            /* REQUIRED   */ _encode_GlobalTitleAddress(value.globalTitleAddress, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AcgOverflowArg(value, elGetter);
}


/* eslint-enable */
