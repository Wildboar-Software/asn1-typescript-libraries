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
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { TalkerPriority, _enum_for_TalkerPriority, TalkerPriority_normal /* IMPORTED_LONG_ENUMERATION_ITEM */, normal /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_privileged /* IMPORTED_LONG_ENUMERATION_ITEM */, privileged /* IMPORTED_SHORT_ENUMERATION_ITEM */, TalkerPriority_emergency /* IMPORTED_LONG_ENUMERATION_ITEM */, emergency /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_TalkerPriority, _encode_TalkerPriority } from "../MAP-GR-DataTypes/TalkerPriority.ta.mjs";
import { AdditionalInfo, _decode_AdditionalInfo, _encode_AdditionalInfo } from "../MAP-MS-DataTypes/AdditionalInfo.ta.mjs";
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";


/**
 * @summary ProcessGroupCallSignallingArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessGroupCallSignallingArg ::= SEQUENCE {
 *     uplinkRequest    [0] NULL    OPTIONAL,
 *     uplinkReleaseIndication    [1] NULL    OPTIONAL,
 *     releaseGroupCall    [2] NULL    OPTIONAL,
 *     extensionContainer    ExtensionContainer    OPTIONAL,
 *     ...,
 *     talkerPriority    [3] TalkerPriority    OPTIONAL,
 *     additionalInfo    [4] AdditionalInfo    OPTIONAL,
 *     emergencyModeResetCommandFlag    [5] NULL    OPTIONAL,
 *     an-APDU    [6] AccessNetworkSignalInfo    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ProcessGroupCallSignallingArg {
    constructor (
        /**
         * @summary `uplinkRequest`.
         * @public
         * @readonly
         */
        readonly uplinkRequest: OPTIONAL<NULL>,
        /**
         * @summary `uplinkReleaseIndication`.
         * @public
         * @readonly
         */
        readonly uplinkReleaseIndication: OPTIONAL<NULL>,
        /**
         * @summary `releaseGroupCall`.
         * @public
         * @readonly
         */
        readonly releaseGroupCall: OPTIONAL<NULL>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
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
     * @summary Restructures an object into a ProcessGroupCallSignallingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ProcessGroupCallSignallingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProcessGroupCallSignallingArg`.
     * @returns {ProcessGroupCallSignallingArg}
     */
    public static _from_object (_o: { [_K in keyof (ProcessGroupCallSignallingArg)]: (ProcessGroupCallSignallingArg)[_K] }): ProcessGroupCallSignallingArg {
        return new ProcessGroupCallSignallingArg(_o.uplinkRequest, _o.uplinkReleaseIndication, _o.releaseGroupCall, _o.extensionContainer, _o.talkerPriority, _o.additionalInfo, _o.emergencyModeResetCommandFlag, _o.an_APDU, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `talkerPriority`
         * @public
         * @static
         */

    public static _enum_for_talkerPriority = _enum_for_TalkerPriority;
}

/**
 * @summary The Leading Root Component Types of ProcessGroupCallSignallingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProcessGroupCallSignallingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("uplinkRequest", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("uplinkReleaseIndication", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("releaseGroupCall", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.universal, 16))
];

/**
 * @summary The Trailing Root Component Types of ProcessGroupCallSignallingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProcessGroupCallSignallingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProcessGroupCallSignallingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProcessGroupCallSignallingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("talkerPriority", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("additionalInfo", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("emergencyModeResetCommandFlag", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("an-APDU", true, $.hasTag(_TagClass.context, 6))
];

let _cached_decoder_for_ProcessGroupCallSignallingArg: $.ASN1Decoder<ProcessGroupCallSignallingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessGroupCallSignallingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProcessGroupCallSignallingArg (el: _Element): ProcessGroupCallSignallingArg {
    if (!_cached_decoder_for_ProcessGroupCallSignallingArg) { _cached_decoder_for_ProcessGroupCallSignallingArg = function (el: _Element): ProcessGroupCallSignallingArg {
    let uplinkRequest: OPTIONAL<NULL> = undefined;
    let uplinkReleaseIndication: OPTIONAL<NULL> = undefined;
    let releaseGroupCall: OPTIONAL<NULL> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let talkerPriority: OPTIONAL<TalkerPriority> = undefined;
    let additionalInfo: OPTIONAL<AdditionalInfo> = undefined;
    let emergencyModeResetCommandFlag: OPTIONAL<NULL> = undefined;
    let an_APDU: OPTIONAL<AccessNetworkSignalInfo> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "uplinkRequest": (_el: _Element): void => { uplinkRequest = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uplinkReleaseIndication": (_el: _Element): void => { uplinkReleaseIndication = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "releaseGroupCall": (_el: _Element): void => { releaseGroupCall = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = _decode_ExtensionContainer(_el); },
        "talkerPriority": (_el: _Element): void => { talkerPriority = $._decode_implicit<TalkerPriority>(() => _decode_TalkerPriority)(_el); },
        "additionalInfo": (_el: _Element): void => { additionalInfo = $._decode_implicit<AdditionalInfo>(() => _decode_AdditionalInfo)(_el); },
        "emergencyModeResetCommandFlag": (_el: _Element): void => { emergencyModeResetCommandFlag = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "an-APDU": (_el: _Element): void => { an_APDU = $._decode_implicit<AccessNetworkSignalInfo>(() => _decode_AccessNetworkSignalInfo)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProcessGroupCallSignallingArg,
        _extension_additions_list_spec_for_ProcessGroupCallSignallingArg,
        _root_component_type_list_2_spec_for_ProcessGroupCallSignallingArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProcessGroupCallSignallingArg(
        uplinkRequest,
        uplinkReleaseIndication,
        releaseGroupCall,
        extensionContainer,
        talkerPriority,
        additionalInfo,
        emergencyModeResetCommandFlag,
        an_APDU,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ProcessGroupCallSignallingArg(el);
}

let _cached_encoder_for_ProcessGroupCallSignallingArg: $.ASN1Encoder<ProcessGroupCallSignallingArg> | null = null;

/**
 * @summary Encodes a(n) ProcessGroupCallSignallingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessGroupCallSignallingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ProcessGroupCallSignallingArg (value: ProcessGroupCallSignallingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProcessGroupCallSignallingArg) { _cached_encoder_for_ProcessGroupCallSignallingArg = function (value: ProcessGroupCallSignallingArg, elGetter: $.ASN1Encoder<ProcessGroupCallSignallingArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.uplinkRequest === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeNull, $.BER)(value.uplinkRequest, $.BER)),
            /* IF_ABSENT  */ ((value.uplinkReleaseIndication === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeNull, $.BER)(value.uplinkReleaseIndication, $.BER)),
            /* IF_ABSENT  */ ((value.releaseGroupCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.releaseGroupCall, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : _encode_ExtensionContainer(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.talkerPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TalkerPriority, $.BER)(value.talkerPriority, $.BER)),
            /* IF_ABSENT  */ ((value.additionalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AdditionalInfo, $.BER)(value.additionalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.emergencyModeResetCommandFlag === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeNull, $.BER)(value.emergencyModeResetCommandFlag, $.BER)),
            /* IF_ABSENT  */ ((value.an_APDU === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_AccessNetworkSignalInfo, $.BER)(value.an_APDU, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ProcessGroupCallSignallingArg(value, elGetter);
}


/* eslint-enable */
