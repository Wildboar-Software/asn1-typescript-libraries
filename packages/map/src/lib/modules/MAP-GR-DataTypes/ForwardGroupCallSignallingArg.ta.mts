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
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { StateAttributes, _decode_StateAttributes, _encode_StateAttributes } from "../MAP-GR-DataTypes/StateAttributes.ta.mjs";
import { TalkerPriority, _enum_for_TalkerPriority, TalkerPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_privileged /* IMPORTED_LONG_ENUMERATION_ITEM */, privileged /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TalkerPriority, _encode_TalkerPriority } from "../MAP-GR-DataTypes/TalkerPriority.ta.mjs";
import { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
import { SignalInfo, _decode_SignalInfo, _encode_SignalInfo } from "../MAP-CommonDataTypes/SignalInfo.ta.mjs";
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";


/**
 * @summary ForwardGroupCallSignallingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardGroupCallSignallingArg ::= SEQUENCE {
 *     imsi    IMSI    OPTIONAL,
 *     uplinkRequestAck    [0] NULL    OPTIONAL,
 *     uplinkReleaseIndication    [1] NULL    OPTIONAL,
 *     uplinkRejectCommand    [2] NULL    OPTIONAL,
 *     uplinkSeizedCommand    [3] NULL    OPTIONAL,
 *     uplinkReleaseCommand    [4] NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ..., 
 *     stateAttributes    [5] StateAttributes    OPTIONAL,
 *     talkerPriority    [6] TalkerPriority    OPTIONAL,
 *     additionalInfo    [7] AdditionalInfo    OPTIONAL,
 *     emergencyModeResetCommandFlag    [8] NULL    OPTIONAL,
 *     sm-RP-UI    [9] SignalInfo    OPTIONAL,
 *     an-APDU    [10] AccessNetworkSignalInfo    OPTIONAL
 *  }
 * ```
 * 
 * @class
 */
export
class ForwardGroupCallSignallingArg {
    constructor (
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `uplinkRequestAck`.
         * @public
         * @readonly
         */
        readonly uplinkRequestAck: OPTIONAL<NULL>,
        /**
         * @summary `uplinkReleaseIndication`.
         * @public
         * @readonly
         */
        readonly uplinkReleaseIndication: OPTIONAL<NULL>,
        /**
         * @summary `uplinkRejectCommand`.
         * @public
         * @readonly
         */
        readonly uplinkRejectCommand: OPTIONAL<NULL>,
        /**
         * @summary `uplinkSeizedCommand`.
         * @public
         * @readonly
         */
        readonly uplinkSeizedCommand: OPTIONAL<NULL>,
        /**
         * @summary `uplinkReleaseCommand`.
         * @public
         * @readonly
         */
        readonly uplinkReleaseCommand: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `stateAttributes`.
         * @public
         * @readonly
         */
        readonly stateAttributes: OPTIONAL<StateAttributes>,
        /**
         * @summary `talkerPriority`.
         * @public
         * @readonly
         */
        readonly talkerPriority: OPTIONAL<TalkerPriority>,
        /**
         * @summary `additionalInfo`.
         * @public
         * @readonly
         */
        readonly additionalInfo: OPTIONAL<AdditionalInfo>,
        /**
         * @summary `emergencyModeResetCommandFlag`.
         * @public
         * @readonly
         */
        readonly emergencyModeResetCommandFlag: OPTIONAL<NULL>,
        /**
         * @summary `sm_RP_UI`.
         * @public
         * @readonly
         */
        readonly sm_RP_UI: OPTIONAL<SignalInfo>,
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: OPTIONAL<AccessNetworkSignalInfo>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ForwardGroupCallSignallingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardGroupCallSignallingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardGroupCallSignallingArg`.
     * @returns {ForwardGroupCallSignallingArg}
     */
    public static _from_object (_o: { [_K in keyof (ForwardGroupCallSignallingArg)]: (ForwardGroupCallSignallingArg)[_K] }): ForwardGroupCallSignallingArg {
        return new ForwardGroupCallSignallingArg(_o.imsi, _o.uplinkRequestAck, _o.uplinkReleaseIndication, _o.uplinkRejectCommand, _o.uplinkSeizedCommand, _o.uplinkReleaseCommand, _o.extensionContainer, _o.stateAttributes, _o.talkerPriority, _o.additionalInfo, _o.emergencyModeResetCommandFlag, _o.sm_RP_UI, _o.an_APDU, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `talkerPriority`
         * @public
         * @static
         */

    public static _enum_for_talkerPriority = _enum_for_TalkerPriority;
}

/**
 * @summary The Leading Root Component Types of ForwardGroupCallSignallingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardGroupCallSignallingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("uplinkRequestAck", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uplinkReleaseIndication", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uplinkRejectCommand", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("uplinkSeizedCommand", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uplinkReleaseCommand", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ForwardGroupCallSignallingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardGroupCallSignallingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardGroupCallSignallingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardGroupCallSignallingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("stateAttributes", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("talkerPriority", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("emergencyModeResetCommandFlag", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("sm-RP-UI", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("an-APDU", true, $.hasTag(_TagClass.context, 10))
];

let _cached_decoder_for_ForwardGroupCallSignallingArg: $.ASN1Decoder<ForwardGroupCallSignallingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardGroupCallSignallingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardGroupCallSignallingArg (el: _Element): ForwardGroupCallSignallingArg {
    if (!_cached_decoder_for_ForwardGroupCallSignallingArg) { _cached_decoder_for_ForwardGroupCallSignallingArg = function (el: _Element): ForwardGroupCallSignallingArg {
    let imsi: OPTIONAL<IMSI> = undefined;
    let uplinkRequestAck: OPTIONAL<NULL> = undefined;
    let uplinkReleaseIndication: OPTIONAL<NULL> = undefined;
    let uplinkRejectCommand: OPTIONAL<NULL> = undefined;
    let uplinkSeizedCommand: OPTIONAL<NULL> = undefined;
    let uplinkReleaseCommand: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let stateAttributes: OPTIONAL<StateAttributes> = undefined;
    let talkerPriority: OPTIONAL<TalkerPriority> = undefined;
    let additionalInfo: OPTIONAL<AdditionalInfo> = undefined;
    let emergencyModeResetCommandFlag: OPTIONAL<NULL> = undefined;
    let sm_RP_UI: OPTIONAL<SignalInfo> = undefined;
    let an_APDU: OPTIONAL<AccessNetworkSignalInfo> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "imsi": (_el: _Element): void => { imsi = _decode_IMSI(_el); },
        "uplinkRequestAck": (_el: _Element): void => { uplinkRequestAck = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkReleaseIndication": (_el: _Element): void => { uplinkReleaseIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkRejectCommand": (_el: _Element): void => { uplinkRejectCommand = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkSeizedCommand": (_el: _Element): void => { uplinkSeizedCommand = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkReleaseCommand": (_el: _Element): void => { uplinkReleaseCommand = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "stateAttributes": (_el: _Element): void => { stateAttributes = $._decode_implicit<StateAttributes>(() => _decode_StateAttributes)(_el); },
        "talkerPriority": (_el: _Element): void => { talkerPriority = $._decode_implicit<TalkerPriority>(() => _decode_TalkerPriority)(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<AdditionalInfo>(() => _decode_AdditionalInfo)(_el); },
        "emergencyModeResetCommandFlag": (_el: _Element): void => { emergencyModeResetCommandFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "sm-RP-UI": (_el: _Element): void => { sm_RP_UI = $._decode_implicit<SignalInfo>(() => _decode_SignalInfo)(_el); },
        "an-APDU": (_el: _Element): void => { an_APDU = $._decode_implicit<AccessNetworkSignalInfo>(() => _decode_AccessNetworkSignalInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardGroupCallSignallingArg,
        _extension_additions_list_spec_for_ForwardGroupCallSignallingArg,
        _root_component_type_list_2_spec_for_ForwardGroupCallSignallingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ForwardGroupCallSignallingArg(
        imsi,
        uplinkRequestAck,
        uplinkReleaseIndication,
        uplinkRejectCommand,
        uplinkSeizedCommand,
        uplinkReleaseCommand,
        extensionContainer,
        stateAttributes,
        talkerPriority,
        additionalInfo,
        emergencyModeResetCommandFlag,
        sm_RP_UI,
        an_APDU,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ForwardGroupCallSignallingArg(el);
}

let _cached_encoder_for_ForwardGroupCallSignallingArg: $.ASN1Encoder<ForwardGroupCallSignallingArg> | null = null;

/**
 * @summary Encodes a(n) ForwardGroupCallSignallingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardGroupCallSignallingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardGroupCallSignallingArg (value: ForwardGroupCallSignallingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardGroupCallSignallingArg) { _cached_encoder_for_ForwardGroupCallSignallingArg = function (value: ForwardGroupCallSignallingArg, elGetter: $.ASN1Encoder<ForwardGroupCallSignallingArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : _encode_IMSI(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkRequestAck === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.uplinkRequestAck, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkReleaseIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.uplinkReleaseIndication, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkRejectCommand === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.uplinkRejectCommand, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkSeizedCommand === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.uplinkSeizedCommand, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkReleaseCommand === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.uplinkReleaseCommand, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.stateAttributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_StateAttributes, $.BER)(value.stateAttributes, $.BER)),
            /* IF_ABSENT  */ ((value.talkerPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_TalkerPriority, $.BER)(value.talkerPriority, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AdditionalInfo, $.BER)(value.additionalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.emergencyModeResetCommandFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => $._encodeNull, $.BER)(value.emergencyModeResetCommandFlag, $.BER)),
            /* IF_ABSENT  */ ((value.sm_RP_UI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_SignalInfo, $.BER)(value.sm_RP_UI, $.BER)),
            /* IF_ABSENT  */ ((value.an_APDU === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AccessNetworkSignalInfo, $.BER)(value.an_APDU, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardGroupCallSignallingArg(value, elGetter);
}


/* eslint-enable */
