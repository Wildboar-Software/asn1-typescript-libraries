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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { RelocationNumberList, _decode_RelocationNumberList, _encode_RelocationNumberList } from "../MAP-MS-DataTypes/RelocationNumberList.ta.mjs";
// export { RelocationNumberList, _decode_RelocationNumberList, _encode_RelocationNumberList } from "../MAP-MS-DataTypes/RelocationNumberList.ta.mjs";
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
// export { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
import { MulticallBearerInfo, _decode_MulticallBearerInfo, _encode_MulticallBearerInfo } from "../MAP-MS-DataTypes/MulticallBearerInfo.ta.mjs";
// export { MulticallBearerInfo, _decode_MulticallBearerInfo, _encode_MulticallBearerInfo } from "../MAP-MS-DataTypes/MulticallBearerInfo.ta.mjs";
import { SelectedUMTS_Algorithms, _decode_SelectedUMTS_Algorithms, _encode_SelectedUMTS_Algorithms } from "../MAP-MS-DataTypes/SelectedUMTS-Algorithms.ta.mjs";
// export { SelectedUMTS_Algorithms, _decode_SelectedUMTS_Algorithms, _encode_SelectedUMTS_Algorithms } from "../MAP-MS-DataTypes/SelectedUMTS-Algorithms.ta.mjs";
import { ChosenRadioResourceInformation, _decode_ChosenRadioResourceInformation, _encode_ChosenRadioResourceInformation } from "../MAP-MS-DataTypes/ChosenRadioResourceInformation.ta.mjs";
// export { ChosenRadioResourceInformation, _decode_ChosenRadioResourceInformation, _encode_ChosenRadioResourceInformation } from "../MAP-MS-DataTypes/ChosenRadioResourceInformation.ta.mjs";
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
 * @summary PrepareHO_Res
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareHO-Res ::= [3] SEQUENCE {
 *     handoverNumber    [0] ISDN-AddressString    OPTIONAL,
 *     relocationNumberList    [1]    RelocationNumberList    OPTIONAL,
 *     an-APDU    [2]    AccessNetworkSignalInfo    OPTIONAL,
 *     multicallBearerInfo    [3]    MulticallBearerInfo    OPTIONAL,
 *     multipleBearerNotSupported    NULL    OPTIONAL,
 *     selectedUMTS-Algorithms    [5]    SelectedUMTS-Algorithms    OPTIONAL,
 *     chosenRadioResourceInformation    [6] ChosenRadioResourceInformation    OPTIONAL,
 *     extensionContainer    [4]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     iuSelectedCodec    [7] Codec    OPTIONAL,
 *     iuAvailableCodecsList    [8] CodecList    OPTIONAL,
 *     aoipSelectedCodecTarget    [9] AoIPCodec    OPTIONAL,
 *     aoipAvailableCodecsListMap    [10] AoIPCodecsList    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class PrepareHO_Res {
    constructor (
        /**
         * @summary `handoverNumber`.
         * @public
         * @readonly
         */
        readonly handoverNumber: OPTIONAL<ISDN_AddressString>,
        /**
         * @summary `relocationNumberList`.
         * @public
         * @readonly
         */
        readonly relocationNumberList: OPTIONAL<RelocationNumberList>,
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: OPTIONAL<AccessNetworkSignalInfo>,
        /**
         * @summary `multicallBearerInfo`.
         * @public
         * @readonly
         */
        readonly multicallBearerInfo: OPTIONAL<MulticallBearerInfo>,
        /**
         * @summary `multipleBearerNotSupported`.
         * @public
         * @readonly
         */
        readonly multipleBearerNotSupported: OPTIONAL<NULL>,
        /**
         * @summary `selectedUMTS_Algorithms`.
         * @public
         * @readonly
         */
        readonly selectedUMTS_Algorithms: OPTIONAL<SelectedUMTS_Algorithms>,
        /**
         * @summary `chosenRadioResourceInformation`.
         * @public
         * @readonly
         */
        readonly chosenRadioResourceInformation: OPTIONAL<ChosenRadioResourceInformation>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `iuSelectedCodec`.
         * @public
         * @readonly
         */
        readonly iuSelectedCodec: OPTIONAL<Codec>,
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
     * @summary Restructures an object into a PrepareHO_Res
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareHO_Res`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareHO_Res`.
     * @returns {PrepareHO_Res}
     */
    public static _from_object (_o: { [_K in keyof (PrepareHO_Res)]: (PrepareHO_Res)[_K] }): PrepareHO_Res {
        return new PrepareHO_Res(_o.handoverNumber, _o.relocationNumberList, _o.an_APDU, _o.multicallBearerInfo, _o.multipleBearerNotSupported, _o.selectedUMTS_Algorithms, _o.chosenRadioResourceInformation, _o.extensionContainer, _o.iuSelectedCodec, _o.iuAvailableCodecsList, _o.aoipSelectedCodecTarget, _o.aoipAvailableCodecsListMap, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareHO_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareHO_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("handoverNumber", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("relocationNumberList", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("an-APDU", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("multicallBearerInfo", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("multipleBearerNotSupported", true, $.hasTag(_TagClass.universal, 5), undefined, undefined),
    new $.ComponentSpec("selectedUMTS-Algorithms", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("chosenRadioResourceInformation", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 4), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of PrepareHO_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareHO_Res: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareHO_Res
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareHO_Res: $.ComponentSpec[] = [
    new $.ComponentSpec("iuSelectedCodec", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("iuAvailableCodecsList", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("aoipSelectedCodecTarget", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("aoipAvailableCodecsListMap", true, $.hasTag(_TagClass.context, 10), undefined, undefined)
];

let _cached_decoder_for_PrepareHO_Res: $.ASN1Decoder<PrepareHO_Res> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareHO_Res
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareHO_Res (el: _Element): PrepareHO_Res {
    if (!_cached_decoder_for_PrepareHO_Res) { _cached_decoder_for_PrepareHO_Res = $._decode_implicit<PrepareHO_Res>(() => function (el: _Element): PrepareHO_Res {
    let handoverNumber: OPTIONAL<ISDN_AddressString>;
    let relocationNumberList: OPTIONAL<RelocationNumberList>;
    let an_APDU: OPTIONAL<AccessNetworkSignalInfo>;
    let multicallBearerInfo: OPTIONAL<MulticallBearerInfo>;
    let multipleBearerNotSupported: OPTIONAL<NULL>;
    let selectedUMTS_Algorithms: OPTIONAL<SelectedUMTS_Algorithms>;
    let chosenRadioResourceInformation: OPTIONAL<ChosenRadioResourceInformation>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let iuSelectedCodec: OPTIONAL<Codec>;
    let iuAvailableCodecsList: OPTIONAL<CodecList>;
    let aoipSelectedCodecTarget: OPTIONAL<AoIPCodec>;
    let aoipAvailableCodecsListMap: OPTIONAL<AoIPCodecsList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "handoverNumber": (_el: _Element): void => { handoverNumber = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "relocationNumberList": (_el: _Element): void => { relocationNumberList = $._decode_implicit<RelocationNumberList>(() => _decode_RelocationNumberList)(_el); },
        "an-APDU": (_el: _Element): void => { an_APDU = $._decode_implicit<AccessNetworkSignalInfo>(() => _decode_AccessNetworkSignalInfo)(_el); },
        "multicallBearerInfo": (_el: _Element): void => { multicallBearerInfo = $._decode_implicit<MulticallBearerInfo>(() => _decode_MulticallBearerInfo)(_el); },
        "multipleBearerNotSupported": (_el: _Element): void => { multipleBearerNotSupported = $._decodeNull(_el); },
        "selectedUMTS-Algorithms": (_el: _Element): void => { selectedUMTS_Algorithms = $._decode_implicit<SelectedUMTS_Algorithms>(() => _decode_SelectedUMTS_Algorithms)(_el); },
        "chosenRadioResourceInformation": (_el: _Element): void => { chosenRadioResourceInformation = $._decode_implicit<ChosenRadioResourceInformation>(() => _decode_ChosenRadioResourceInformation)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "iuSelectedCodec": (_el: _Element): void => { iuSelectedCodec = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "iuAvailableCodecsList": (_el: _Element): void => { iuAvailableCodecsList = $._decode_implicit<CodecList>(() => _decode_CodecList)(_el); },
        "aoipSelectedCodecTarget": (_el: _Element): void => { aoipSelectedCodecTarget = $._decode_implicit<AoIPCodec>(() => _decode_AoIPCodec)(_el); },
        "aoipAvailableCodecsListMap": (_el: _Element): void => { aoipAvailableCodecsListMap = $._decode_implicit<AoIPCodecsList>(() => _decode_AoIPCodecsList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareHO_Res,
        _extension_additions_list_spec_for_PrepareHO_Res,
        _root_component_type_list_2_spec_for_PrepareHO_Res,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrepareHO_Res(
        handoverNumber,
        relocationNumberList,
        an_APDU,
        multicallBearerInfo,
        multipleBearerNotSupported,
        selectedUMTS_Algorithms,
        chosenRadioResourceInformation,
        extensionContainer,
        iuSelectedCodec,
        iuAvailableCodecsList,
        aoipSelectedCodecTarget,
        aoipAvailableCodecsListMap,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_PrepareHO_Res(el);
}

let _cached_encoder_for_PrepareHO_Res: $.ASN1Encoder<PrepareHO_Res> | null = null;

/**
 * @summary Encodes a(n) PrepareHO_Res into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareHO_Res, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareHO_Res (value: PrepareHO_Res, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareHO_Res) { _cached_encoder_for_PrepareHO_Res = $._encode_implicit(_TagClass.context, 3, () => function (value: PrepareHO_Res, elGetter: $.ASN1Encoder<PrepareHO_Res>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.handoverNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.handoverNumber, $.BER)),
            /* IF_ABSENT  */ ((value.relocationNumberList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RelocationNumberList, $.BER)(value.relocationNumberList, $.BER)),
            /* IF_ABSENT  */ ((value.an_APDU === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AccessNetworkSignalInfo, $.BER)(value.an_APDU, $.BER)),
            /* IF_ABSENT  */ ((value.multicallBearerInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_MulticallBearerInfo, $.BER)(value.multicallBearerInfo, $.BER)),
            /* IF_ABSENT  */ ((value.multipleBearerNotSupported === undefined) ? undefined : $._encodeNull(value.multipleBearerNotSupported, $.BER)),
            /* IF_ABSENT  */ ((value.selectedUMTS_Algorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SelectedUMTS_Algorithms, $.BER)(value.selectedUMTS_Algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.chosenRadioResourceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_ChosenRadioResourceInformation, $.BER)(value.chosenRadioResourceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.iuSelectedCodec === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_Codec, $.BER)(value.iuSelectedCodec, $.BER)),
            /* IF_ABSENT  */ ((value.iuAvailableCodecsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_CodecList, $.BER)(value.iuAvailableCodecsList, $.BER)),
            /* IF_ABSENT  */ ((value.aoipSelectedCodecTarget === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AoIPCodec, $.BER)(value.aoipSelectedCodecTarget, $.BER)),
            /* IF_ABSENT  */ ((value.aoipAvailableCodecsListMap === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AoIPCodecsList, $.BER)(value.aoipAvailableCodecsListMap, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PrepareHO_Res(value, elGetter);
}


/* eslint-enable */
