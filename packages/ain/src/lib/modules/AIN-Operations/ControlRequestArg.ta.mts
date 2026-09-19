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
import { CongestionLevel, _decode_CongestionLevel, _encode_CongestionLevel } from "../AIN-Parameters/CongestionLevel.ta.mjs";
// export { CongestionLevel, _decode_CongestionLevel, _encode_CongestionLevel } from "../AIN-Parameters/CongestionLevel.ta.mjs";
import { GapInterval, _decode_GapInterval, _encode_GapInterval } from "../AIN-Parameters/GapInterval.ta.mjs";
// export { GapInterval, _decode_GapInterval, _encode_GapInterval } from "../AIN-Parameters/GapInterval.ta.mjs";
import { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
// export { TranslationType, _decode_TranslationType, _encode_TranslationType } from "../AIN-Parameters/TranslationType.ta.mjs";
import { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
// export { GlobalTitleAddress, _decode_GlobalTitleAddress, _encode_GlobalTitleAddress } from "../AIN-Parameters/GlobalTitleAddress.ta.mjs";
import { SignalingPointCode, _decode_SignalingPointCode, _encode_SignalingPointCode } from "../AIN-Parameters/SignalingPointCode.ta.mjs";
// export { SignalingPointCode, _decode_SignalingPointCode, _encode_SignalingPointCode } from "../AIN-Parameters/SignalingPointCode.ta.mjs";
import { SubsystemNumber, _decode_SubsystemNumber, _encode_SubsystemNumber } from "../AIN-Parameters/SubsystemNumber.ta.mjs";
// export { SubsystemNumber, _decode_SubsystemNumber, _encode_SubsystemNumber } from "../AIN-Parameters/SubsystemNumber.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary ControlRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ControlRequestArg ::= SEQUENCE{
 *             congestionLevel                CongestionLevel OPTIONAL,
 *             gapInterval                    GapInterval OPTIONAL,
 *             translationType                TranslationType OPTIONAL,
 *             globalTitleAddress             GlobalTitleAddress OPTIONAL,
 *             ssignalingPointCode            SignalingPointCode OPTIONAL,
 *             subsystemNumber                SubsystemNumber OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class ControlRequestArg {
    constructor (
        /**
         * @summary `congestionLevel`.
         * @public
         * @readonly
         */
        readonly congestionLevel: OPTIONAL<CongestionLevel>,
        /**
         * @summary `gapInterval`.
         * @public
         * @readonly
         */
        readonly gapInterval: OPTIONAL<GapInterval>,
        /**
         * @summary `translationType`.
         * @public
         * @readonly
         */
        readonly translationType: OPTIONAL<TranslationType>,
        /**
         * @summary `globalTitleAddress`.
         * @public
         * @readonly
         */
        readonly globalTitleAddress: OPTIONAL<GlobalTitleAddress>,
        /**
         * @summary `ssignalingPointCode`.
         * @public
         * @readonly
         */
        readonly ssignalingPointCode: OPTIONAL<SignalingPointCode>,
        /**
         * @summary `subsystemNumber`.
         * @public
         * @readonly
         */
        readonly subsystemNumber: OPTIONAL<SubsystemNumber>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a ControlRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `ControlRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ControlRequestArg`.
     * @returns {ControlRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (ControlRequestArg)]: (ControlRequestArg)[_K] }): ControlRequestArg {
        return new ControlRequestArg(_o.congestionLevel, _o.gapInterval, _o.translationType, _o.globalTitleAddress, _o.ssignalingPointCode, _o.subsystemNumber, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of ControlRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ControlRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("congestionLevel", true, $.hasTag(_TagClass.context, 117)),
    new $.ComponentSpec("gapInterval", true, $.or($.hasTag(_TagClass.context, 63), $.hasTag(_TagClass.context, 64))),
    new $.ComponentSpec("translationType", true, $.hasTag(_TagClass.context, 70)),
    new $.ComponentSpec("globalTitleAddress", true, $.hasTag(_TagClass.context, 69)),
    new $.ComponentSpec("ssignalingPointCode", true, $.hasTag(_TagClass.context, 142)),
    new $.ComponentSpec("subsystemNumber", true, $.hasTag(_TagClass.context, 130)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of ControlRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ControlRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ControlRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ControlRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ControlRequestArg: $.ASN1Decoder<ControlRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ControlRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ControlRequestArg (el: _Element): ControlRequestArg {
    if (!_cached_decoder_for_ControlRequestArg) { _cached_decoder_for_ControlRequestArg = function (el: _Element): ControlRequestArg {
    let congestionLevel: OPTIONAL<CongestionLevel>;
    let gapInterval: OPTIONAL<GapInterval>;
    let translationType: OPTIONAL<TranslationType>;
    let globalTitleAddress: OPTIONAL<GlobalTitleAddress>;
    let ssignalingPointCode: OPTIONAL<SignalingPointCode>;
    let subsystemNumber: OPTIONAL<SubsystemNumber>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "congestionLevel": (_el: _Element): void => { congestionLevel = _decode_CongestionLevel(_el); },
        "gapInterval": (_el: _Element): void => { gapInterval = _decode_GapInterval(_el); },
        "translationType": (_el: _Element): void => { translationType = _decode_TranslationType(_el); },
        "globalTitleAddress": (_el: _Element): void => { globalTitleAddress = _decode_GlobalTitleAddress(_el); },
        "ssignalingPointCode": (_el: _Element): void => { ssignalingPointCode = _decode_SignalingPointCode(_el); },
        "subsystemNumber": (_el: _Element): void => { subsystemNumber = _decode_SubsystemNumber(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ControlRequestArg,
        _extension_additions_list_spec_for_ControlRequestArg,
        _root_component_type_list_2_spec_for_ControlRequestArg,
        undefined,
    );
    return new ControlRequestArg(
        congestionLevel,
        gapInterval,
        translationType,
        globalTitleAddress,
        ssignalingPointCode,
        subsystemNumber,
        extensionParameter
    );
}; }
    return _cached_decoder_for_ControlRequestArg(el);
}

let _cached_encoder_for_ControlRequestArg: $.ASN1Encoder<ControlRequestArg> | null = null;

/**
 * @summary Encodes a(n) ControlRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ControlRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_ControlRequestArg (value: ControlRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ControlRequestArg) { _cached_encoder_for_ControlRequestArg = function (value: ControlRequestArg, elGetter: $.ASN1Encoder<ControlRequestArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.congestionLevel === undefined) ? undefined : _encode_CongestionLevel(value.congestionLevel, $.BER)),
            /* IF_ABSENT  */ ((value.gapInterval === undefined) ? undefined : _encode_GapInterval(value.gapInterval, $.BER)),
            /* IF_ABSENT  */ ((value.translationType === undefined) ? undefined : _encode_TranslationType(value.translationType, $.BER)),
            /* IF_ABSENT  */ ((value.globalTitleAddress === undefined) ? undefined : _encode_GlobalTitleAddress(value.globalTitleAddress, $.BER)),
            /* IF_ABSENT  */ ((value.ssignalingPointCode === undefined) ? undefined : _encode_SignalingPointCode(value.ssignalingPointCode, $.BER)),
            /* IF_ABSENT  */ ((value.subsystemNumber === undefined) ? undefined : _encode_SubsystemNumber(value.subsystemNumber, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ControlRequestArg(value, elGetter);
}


/* eslint-enable */
