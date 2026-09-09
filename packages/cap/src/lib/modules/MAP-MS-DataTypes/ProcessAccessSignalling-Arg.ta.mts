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
import * as $ from "asn1-ts/dist/functional.mjs";
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
// export { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
import { SelectedUMTS_Algorithms, _decode_SelectedUMTS_Algorithms, _encode_SelectedUMTS_Algorithms } from "../MAP-MS-DataTypes/SelectedUMTS-Algorithms.ta.mjs";
// export { SelectedUMTS_Algorithms, _decode_SelectedUMTS_Algorithms, _encode_SelectedUMTS_Algorithms } from "../MAP-MS-DataTypes/SelectedUMTS-Algorithms.ta.mjs";
import { SelectedGSM_Algorithm, _decode_SelectedGSM_Algorithm, _encode_SelectedGSM_Algorithm } from "../MAP-MS-DataTypes/SelectedGSM-Algorithm.ta.mjs";
// export { SelectedGSM_Algorithm, _decode_SelectedGSM_Algorithm, _encode_SelectedGSM_Algorithm } from "../MAP-MS-DataTypes/SelectedGSM-Algorithm.ta.mjs";
import { ChosenRadioResourceInformation, _decode_ChosenRadioResourceInformation, _encode_ChosenRadioResourceInformation } from "../MAP-MS-DataTypes/ChosenRadioResourceInformation.ta.mjs";
// export { ChosenRadioResourceInformation, _decode_ChosenRadioResourceInformation, _encode_ChosenRadioResourceInformation } from "../MAP-MS-DataTypes/ChosenRadioResourceInformation.ta.mjs";
import { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
// export { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
// export { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
import { CodecList, _decode_CodecList, _encode_CodecList } from "../MAP-MS-DataTypes/CodecList.ta.mjs";
// export { CodecList, _decode_CodecList, _encode_CodecList } from "../MAP-MS-DataTypes/CodecList.ta.mjs";
import { AoIPCodec, _decode_AoIPCodec, _encode_AoIPCodec } from "../MAP-MS-DataTypes/AoIPCodec.ta.mjs";
// export { AoIPCodec, _decode_AoIPCodec, _encode_AoIPCodec } from "../MAP-MS-DataTypes/AoIPCodec.ta.mjs";
import { AoIPCodecsList, _decode_AoIPCodecsList, _encode_AoIPCodecsList } from "../MAP-MS-DataTypes/AoIPCodecsList.ta.mjs";
// export { AoIPCodecsList, _decode_AoIPCodecsList, _encode_AoIPCodecsList } from "../MAP-MS-DataTypes/AoIPCodecsList.ta.mjs";


/**
 * @summary ProcessAccessSignalling_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ProcessAccessSignalling-Arg ::= [3] SEQUENCE {
 *     an-APDU    AccessNetworkSignalInfo,
 *     selectedUMTS-Algorithms    [1]    SelectedUMTS-Algorithms    OPTIONAL,
 *     selectedGSM-Algorithm    [2]    SelectedGSM-Algorithm    OPTIONAL,
 *     chosenRadioResourceInformation    [3] ChosenRadioResourceInformation OPTIONAL,
 *     selectedRab-Id    [4] RAB-Id    OPTIONAL,
 *     extensionContainer    [0]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     iUSelectedCodec    [5] Codec    OPTIONAL,
 *     iuAvailableCodecsList    [6] CodecList    OPTIONAL,
 *     aoipSelectedCodecTarget    [7] AoIPCodec    OPTIONAL,
 *     aoipAvailableCodecsListMap    [8] AoIPCodecsList    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ProcessAccessSignalling_Arg {
    constructor (
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: AccessNetworkSignalInfo,
        /**
         * @summary `selectedUMTS_Algorithms`.
         * @public
         * @readonly
         */
        readonly selectedUMTS_Algorithms: OPTIONAL<SelectedUMTS_Algorithms>,
        /**
         * @summary `selectedGSM_Algorithm`.
         * @public
         * @readonly
         */
        readonly selectedGSM_Algorithm: OPTIONAL<SelectedGSM_Algorithm>,
        /**
         * @summary `chosenRadioResourceInformation`.
         * @public
         * @readonly
         */
        readonly chosenRadioResourceInformation: OPTIONAL<ChosenRadioResourceInformation>,
        /**
         * @summary `selectedRab_Id`.
         * @public
         * @readonly
         */
        readonly selectedRab_Id: OPTIONAL<RAB_Id>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `iUSelectedCodec`.
         * @public
         * @readonly
         */
        readonly iUSelectedCodec: OPTIONAL<Codec>,
        /**
         * @summary `iuAvailableCodecsList`.
         * @public
         * @readonly
         */
        readonly iuAvailableCodecsList: OPTIONAL<CodecList>,
        /**
         * @summary `aoipSelectedCodecTarget`.
         * @public
         * @readonly
         */
        readonly aoipSelectedCodecTarget: OPTIONAL<AoIPCodec>,
        /**
         * @summary `aoipAvailableCodecsListMap`.
         * @public
         * @readonly
         */
        readonly aoipAvailableCodecsListMap: OPTIONAL<AoIPCodecsList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ProcessAccessSignalling_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `ProcessAccessSignalling_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ProcessAccessSignalling_Arg`.
     * @returns {ProcessAccessSignalling_Arg}
     */
    public static _from_object (_o: { [_K in keyof (ProcessAccessSignalling_Arg)]: (ProcessAccessSignalling_Arg)[_K] }): ProcessAccessSignalling_Arg {
        return new ProcessAccessSignalling_Arg(_o.an_APDU, _o.selectedUMTS_Algorithms, _o.selectedGSM_Algorithm, _o.chosenRadioResourceInformation, _o.selectedRab_Id, _o.extensionContainer, _o.iUSelectedCodec, _o.iuAvailableCodecsList, _o.aoipSelectedCodecTarget, _o.aoipAvailableCodecsListMap, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ProcessAccessSignalling_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ProcessAccessSignalling_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("an-APDU", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("selectedUMTS-Algorithms", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("selectedGSM-Algorithm", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("chosenRadioResourceInformation", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("selectedRab-Id", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ProcessAccessSignalling_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ProcessAccessSignalling_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ProcessAccessSignalling_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ProcessAccessSignalling_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("iUSelectedCodec", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("iuAvailableCodecsList", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("aoipSelectedCodecTarget", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("aoipAvailableCodecsListMap", true, $.hasTag(_TagClass.context, 8), undefined, undefined)
];

let _cached_decoder_for_ProcessAccessSignalling_Arg: $.ASN1Decoder<ProcessAccessSignalling_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ProcessAccessSignalling_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ProcessAccessSignalling_Arg (el: _Element): ProcessAccessSignalling_Arg {
    if (!_cached_decoder_for_ProcessAccessSignalling_Arg) { _cached_decoder_for_ProcessAccessSignalling_Arg = $._decode_implicit<ProcessAccessSignalling_Arg>(() => function (el: _Element): ProcessAccessSignalling_Arg {
    let an_APDU!: AccessNetworkSignalInfo;
    let selectedUMTS_Algorithms: OPTIONAL<SelectedUMTS_Algorithms>;
    let selectedGSM_Algorithm: OPTIONAL<SelectedGSM_Algorithm>;
    let chosenRadioResourceInformation: OPTIONAL<ChosenRadioResourceInformation>;
    let selectedRab_Id: OPTIONAL<RAB_Id>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let iUSelectedCodec: OPTIONAL<Codec>;
    let iuAvailableCodecsList: OPTIONAL<CodecList>;
    let aoipSelectedCodecTarget: OPTIONAL<AoIPCodec>;
    let aoipAvailableCodecsListMap: OPTIONAL<AoIPCodecsList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "an-APDU": (_el: _Element): void => { an_APDU = _decode_AccessNetworkSignalInfo(_el); },
        "selectedUMTS-Algorithms": (_el: _Element): void => { selectedUMTS_Algorithms = $._decode_implicit<SelectedUMTS_Algorithms>(() => _decode_SelectedUMTS_Algorithms)(_el); },
        "selectedGSM-Algorithm": (_el: _Element): void => { selectedGSM_Algorithm = $._decode_implicit<SelectedGSM_Algorithm>(() => _decode_SelectedGSM_Algorithm)(_el); },
        "chosenRadioResourceInformation": (_el: _Element): void => { chosenRadioResourceInformation = $._decode_implicit<ChosenRadioResourceInformation>(() => _decode_ChosenRadioResourceInformation)(_el); },
        "selectedRab-Id": (_el: _Element): void => { selectedRab_Id = $._decode_implicit<RAB_Id>(() => _decode_RAB_Id)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "iUSelectedCodec": (_el: _Element): void => { iUSelectedCodec = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "iuAvailableCodecsList": (_el: _Element): void => { iuAvailableCodecsList = $._decode_implicit<CodecList>(() => _decode_CodecList)(_el); },
        "aoipSelectedCodecTarget": (_el: _Element): void => { aoipSelectedCodecTarget = $._decode_implicit<AoIPCodec>(() => _decode_AoIPCodec)(_el); },
        "aoipAvailableCodecsListMap": (_el: _Element): void => { aoipAvailableCodecsListMap = $._decode_implicit<AoIPCodecsList>(() => _decode_AoIPCodecsList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ProcessAccessSignalling_Arg,
        _extension_additions_list_spec_for_ProcessAccessSignalling_Arg,
        _root_component_type_list_2_spec_for_ProcessAccessSignalling_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ProcessAccessSignalling_Arg(
        an_APDU,
        selectedUMTS_Algorithms,
        selectedGSM_Algorithm,
        chosenRadioResourceInformation,
        selectedRab_Id,
        extensionContainer,
        iUSelectedCodec,
        iuAvailableCodecsList,
        aoipSelectedCodecTarget,
        aoipAvailableCodecsListMap,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_ProcessAccessSignalling_Arg(el);
}

let _cached_encoder_for_ProcessAccessSignalling_Arg: $.ASN1Encoder<ProcessAccessSignalling_Arg> | null = null;

/**
 * @summary Encodes a(n) ProcessAccessSignalling_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ProcessAccessSignalling_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_ProcessAccessSignalling_Arg (value: ProcessAccessSignalling_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ProcessAccessSignalling_Arg) { _cached_encoder_for_ProcessAccessSignalling_Arg = $._encode_implicit(_TagClass.context, 3, () => function (value: ProcessAccessSignalling_Arg, elGetter: $.ASN1Encoder<ProcessAccessSignalling_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessNetworkSignalInfo(value.an_APDU, $.BER),
            /* IF_ABSENT  */ ((value.selectedUMTS_Algorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_SelectedUMTS_Algorithms, $.BER)(value.selectedUMTS_Algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.selectedGSM_Algorithm === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SelectedGSM_Algorithm, $.BER)(value.selectedGSM_Algorithm, $.BER)),
            /* IF_ABSENT  */ ((value.chosenRadioResourceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ChosenRadioResourceInformation, $.BER)(value.chosenRadioResourceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.selectedRab_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_RAB_Id, $.BER)(value.selectedRab_Id, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.iUSelectedCodec === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_Codec, $.BER)(value.iUSelectedCodec, $.BER)),
            /* IF_ABSENT  */ ((value.iuAvailableCodecsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_CodecList, $.BER)(value.iuAvailableCodecsList, $.BER)),
            /* IF_ABSENT  */ ((value.aoipSelectedCodecTarget === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_AoIPCodec, $.BER)(value.aoipSelectedCodecTarget, $.BER)),
            /* IF_ABSENT  */ ((value.aoipAvailableCodecsListMap === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_AoIPCodecsList, $.BER)(value.aoipAvailableCodecsListMap, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ProcessAccessSignalling_Arg(value, elGetter);
}


/* eslint-enable */
