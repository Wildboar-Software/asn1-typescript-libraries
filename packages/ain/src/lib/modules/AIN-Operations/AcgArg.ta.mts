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
import { GapDuration, _decode_GapDuration, _encode_GapDuration } from "../AIN-Parameters/GapDuration.ta.mjs";
// export { GapDuration, _decode_GapDuration, _encode_GapDuration } from "../AIN-Parameters/GapDuration.ta.mjs";
import { GapInterval, _decode_GapInterval, _encode_GapInterval } from "../AIN-Parameters/GapInterval.ta.mjs";
// export { GapInterval, _decode_GapInterval, _encode_GapInterval } from "../AIN-Parameters/GapInterval.ta.mjs";
import { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
// export { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
import { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
// export { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary AcgArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AcgArg ::= SEQUENCE{
 *             controlCauseIndicator          ControlCauseIndicator,
 *             gapDuration                    GapDuration,
 *             gapInterval                    GapInterval,
 *             translationType                TranslationType,
 *             globalTitleAddress             GlobalTitleAddress,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class AcgArg {
    constructor (
        /**
         * @summary `controlCauseIndicator`.
         * @public
         * @readonly
         */
        readonly controlCauseIndicator: ControlCauseIndicator,
        /**
         * @summary `gapDuration`.
         * @public
         * @readonly
         */
        readonly gapDuration: GapDuration,
        /**
         * @summary `gapInterval`.
         * @public
         * @readonly
         */
        readonly gapInterval: GapInterval,
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
     * @summary Restructures an object into a AcgArg
     * @description
     * 
     * This takes an `object` and converts it to a `AcgArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AcgArg`.
     * @returns {AcgArg}
     */
    public static _from_object (_o: { [_K in keyof (AcgArg)]: (AcgArg)[_K] }): AcgArg {
        return new AcgArg(_o.controlCauseIndicator, _o.gapDuration, _o.gapInterval, _o.translationType, _o.globalTitleAddress, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of AcgArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AcgArg: $.ComponentSpec[] = [
    new $.ComponentSpec("controlCauseIndicator", false, $.hasTag(_TagClass.context, 59)),
    new $.ComponentSpec("gapDuration", false, $.hasTag(_TagClass.context, 62)),
    new $.ComponentSpec("gapInterval", false, $.hasAnyTag),
    new $.ComponentSpec("translationType", false, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("globalTitleAddress", false, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of AcgArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AcgArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AcgArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AcgArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AcgArg: $.ASN1Decoder<AcgArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AcgArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AcgArg (el: _Element): AcgArg {
    if (!_cached_decoder_for_AcgArg) { _cached_decoder_for_AcgArg = function (el: _Element): AcgArg {
    let controlCauseIndicator!: ControlCauseIndicator;
    let gapDuration!: GapDuration;
    let gapInterval!: GapInterval;
    let translationType!: TranslationType;
    let globalTitleAddress!: GlobalTitleAddress;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "controlCauseIndicator": (_el: _Element): void => { controlCauseIndicator = _decode_ControlCauseIndicator(_el); },
        "gapDuration": (_el: _Element): void => { gapDuration = _decode_GapDuration(_el); },
        "gapInterval": (_el: _Element): void => { gapInterval = _decode_GapInterval(_el); },
        "translationType": (_el: _Element): void => { translationType = _decode_TranslationType(_el); },
        "globalTitleAddress": (_el: _Element): void => { globalTitleAddress = _decode_GlobalTitleAddress(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AcgArg,
        _extension_additions_list_spec_for_AcgArg,
        _root_component_type_list_2_spec_for_AcgArg,
        undefined,
    );
    return new AcgArg(
        controlCauseIndicator,
        gapDuration,
        gapInterval,
        translationType,
        globalTitleAddress,
        extensionParameter
    );
}; }
    return _cached_decoder_for_AcgArg(el);
}

let _cached_encoder_for_AcgArg: $.ASN1Encoder<AcgArg> | null = null;

/**
 * @summary Encodes a(n) AcgArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AcgArg, encoded as an ASN.1 Element.
 */
export
function _encode_AcgArg (value: AcgArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AcgArg) { _cached_encoder_for_AcgArg = function (value: AcgArg, elGetter: $.ASN1Encoder<AcgArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ControlCauseIndicator(value.controlCauseIndicator, $.BER),
            /* REQUIRED   */ _encode_GapDuration(value.gapDuration, $.BER),
            /* REQUIRED   */ _encode_GapInterval(value.gapInterval, $.BER),
            /* REQUIRED   */ _encode_TranslationType(value.translationType, $.BER),
            /* REQUIRED   */ _encode_GlobalTitleAddress(value.globalTitleAddress, $.BER),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AcgArg(value, elGetter);
}


/* eslint-enable */
