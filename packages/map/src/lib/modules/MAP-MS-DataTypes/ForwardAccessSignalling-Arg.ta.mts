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
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
// export { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
import { IntegrityProtectionInformation, _decode_IntegrityProtectionInformation, _encode_IntegrityProtectionInformation } from "../MAP-MS-DataTypes/IntegrityProtectionInformation.ta.mjs";
// export { IntegrityProtectionInformation, _decode_IntegrityProtectionInformation, _encode_IntegrityProtectionInformation } from "../MAP-MS-DataTypes/IntegrityProtectionInformation.ta.mjs";
import { EncryptionInformation, _decode_EncryptionInformation, _encode_EncryptionInformation } from "../MAP-MS-DataTypes/EncryptionInformation.ta.mjs";
// export { EncryptionInformation, _decode_EncryptionInformation, _encode_EncryptionInformation } from "../MAP-MS-DataTypes/EncryptionInformation.ta.mjs";
import { KeyStatus, _enum_for_KeyStatus, KeyStatus_old /* IMPORTED_LONG_ENUMERATION_ITEM */, old /* IMPORTED_SHORT_ENUMERATION_ITEM */, KeyStatus_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_KeyStatus, _encode_KeyStatus } from "../MAP-MS-DataTypes/KeyStatus.ta.mjs";
// export { KeyStatus, _enum_for_KeyStatus, KeyStatus_old /* IMPORTED_LONG_ENUMERATION_ITEM */, old /* IMPORTED_SHORT_ENUMERATION_ITEM */, KeyStatus_new /* IMPORTED_LONG_ENUMERATION_ITEM */, new_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_KeyStatus, _encode_KeyStatus } from "../MAP-MS-DataTypes/KeyStatus.ta.mjs";
import { AllowedGSM_Algorithms, _decode_AllowedGSM_Algorithms, _encode_AllowedGSM_Algorithms } from "../MAP-MS-DataTypes/AllowedGSM-Algorithms.ta.mjs";
// export { AllowedGSM_Algorithms, _decode_AllowedGSM_Algorithms, _encode_AllowedGSM_Algorithms } from "../MAP-MS-DataTypes/AllowedGSM-Algorithms.ta.mjs";
import { AllowedUMTS_Algorithms, _decode_AllowedUMTS_Algorithms, _encode_AllowedUMTS_Algorithms } from "../MAP-MS-DataTypes/AllowedUMTS-Algorithms.ta.mjs";
// export { AllowedUMTS_Algorithms, _decode_AllowedUMTS_Algorithms, _encode_AllowedUMTS_Algorithms } from "../MAP-MS-DataTypes/AllowedUMTS-Algorithms.ta.mjs";
import { RadioResourceInformation, _decode_RadioResourceInformation, _encode_RadioResourceInformation } from "../MAP-MS-DataTypes/RadioResourceInformation.ta.mjs";
// export { RadioResourceInformation, _decode_RadioResourceInformation, _encode_RadioResourceInformation } from "../MAP-MS-DataTypes/RadioResourceInformation.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { RadioResourceList, _decode_RadioResourceList, _encode_RadioResourceList } from "../MAP-MS-DataTypes/RadioResourceList.ta.mjs";
// export { RadioResourceList, _decode_RadioResourceList, _encode_RadioResourceList } from "../MAP-MS-DataTypes/RadioResourceList.ta.mjs";
import { BSSMAP_ServiceHandover, _decode_BSSMAP_ServiceHandover, _encode_BSSMAP_ServiceHandover } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandover.ta.mjs";
// export { BSSMAP_ServiceHandover, _decode_BSSMAP_ServiceHandover, _encode_BSSMAP_ServiceHandover } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandover.ta.mjs";
import { RANAP_ServiceHandover, _decode_RANAP_ServiceHandover, _encode_RANAP_ServiceHandover } from "../MAP-MS-DataTypes/RANAP-ServiceHandover.ta.mjs";
// export { RANAP_ServiceHandover, _decode_RANAP_ServiceHandover, _encode_RANAP_ServiceHandover } from "../MAP-MS-DataTypes/RANAP-ServiceHandover.ta.mjs";
import { BSSMAP_ServiceHandoverList, _decode_BSSMAP_ServiceHandoverList, _encode_BSSMAP_ServiceHandoverList } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandoverList.ta.mjs";
// export { BSSMAP_ServiceHandoverList, _decode_BSSMAP_ServiceHandoverList, _encode_BSSMAP_ServiceHandoverList } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandoverList.ta.mjs";
import { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
// export { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
import { SupportedCodecsList, _decode_SupportedCodecsList, _encode_SupportedCodecsList } from "../MAP-MS-DataTypes/SupportedCodecsList.ta.mjs";
// export { SupportedCodecsList, _decode_SupportedCodecsList, _encode_SupportedCodecsList } from "../MAP-MS-DataTypes/SupportedCodecsList.ta.mjs";
import { TracePropagationList, _decode_TracePropagationList, _encode_TracePropagationList } from "../MAP-OM-DataTypes/TracePropagationList.ta.mjs";
// export { TracePropagationList, _decode_TracePropagationList, _encode_TracePropagationList } from "../MAP-OM-DataTypes/TracePropagationList.ta.mjs";
import { AoIPCodecsList, _decode_AoIPCodecsList, _encode_AoIPCodecsList } from "../MAP-MS-DataTypes/AoIPCodecsList.ta.mjs";
// export { AoIPCodecsList, _decode_AoIPCodecsList, _encode_AoIPCodecsList } from "../MAP-MS-DataTypes/AoIPCodecsList.ta.mjs";
import { AoIPCodec, _decode_AoIPCodec, _encode_AoIPCodec } from "../MAP-MS-DataTypes/AoIPCodec.ta.mjs";
// export { AoIPCodec, _decode_AoIPCodec, _encode_AoIPCodec } from "../MAP-MS-DataTypes/AoIPCodec.ta.mjs";
import { UESBI_Iu, _decode_UESBI_Iu, _encode_UESBI_Iu } from "../MAP-MS-DataTypes/UESBI-Iu.ta.mjs";
// export { UESBI_Iu, _decode_UESBI_Iu, _encode_UESBI_Iu } from "../MAP-MS-DataTypes/UESBI-Iu.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
// export { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";


/**
 * @summary ForwardAccessSignalling_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardAccessSignalling-Arg ::= [3] SEQUENCE {
 *     an-APDU    AccessNetworkSignalInfo,
 *     integrityProtectionInfo    [0] IntegrityProtectionInformation    OPTIONAL,
 *     encryptionInfo    [1] EncryptionInformation    OPTIONAL,
 *     keyStatus    [2]    KeyStatus    OPTIONAL,
 *     allowedGSM-Algorithms    [4]    AllowedGSM-Algorithms    OPTIONAL,
 *     allowedUMTS-Algorithms    [5]    AllowedUMTS-Algorithms    OPTIONAL,
 *     radioResourceInformation    [6] RadioResourceInformation    OPTIONAL,
 *     extensionContainer    [3]    ExtensionContainer    OPTIONAL,
 *     ...,
 *     radioResourceList    [7]    RadioResourceList    OPTIONAL,
 *     bssmap-ServiceHandover    [9]    BSSMAP-ServiceHandover    OPTIONAL,
 *     ranap-ServiceHandover    [8]    RANAP-ServiceHandover    OPTIONAL,
 *     bssmap-ServiceHandoverList    [10]    BSSMAP-ServiceHandoverList    OPTIONAL,
 *     currentlyUsedCodec    [11] Codec    OPTIONAL,
 *     iuSupportedCodecsList    [12] SupportedCodecsList    OPTIONAL,
 *     rab-ConfigurationIndicator    [13] NULL    OPTIONAL,
 *     iuSelectedCodec    [14]    Codec    OPTIONAL,
 *     alternativeChannelType    [15]    RadioResourceInformation    OPTIONAL,
 *     tracePropagationList    [17]    TracePropagationList    OPTIONAL,
 *     aoipSupportedCodecsListAnchor    [18] AoIPCodecsList    OPTIONAL,
 *     aoipSelectedCodecTarget    [19] AoIPCodec    OPTIONAL,
 *     uesbi-Iu    [20]    UESBI-Iu    OPTIONAL,
 *     imeisv    [21]    IMEI    OPTIONAL }
 * ```
 * 
 * @class
 */
export
class ForwardAccessSignalling_Arg {
    constructor (
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: AccessNetworkSignalInfo,
        /**
         * @summary `integrityProtectionInfo`.
         * @public
         * @readonly
         */
        readonly integrityProtectionInfo: OPTIONAL<IntegrityProtectionInformation>,
        /**
         * @summary `encryptionInfo`.
         * @public
         * @readonly
         */
        readonly encryptionInfo: OPTIONAL<EncryptionInformation>,
        /**
         * @summary `keyStatus`.
         * @public
         * @readonly
         */
        readonly keyStatus: OPTIONAL<KeyStatus>,
        /**
         * @summary `allowedGSM_Algorithms`.
         * @public
         * @readonly
         */
        readonly allowedGSM_Algorithms: OPTIONAL<AllowedGSM_Algorithms>,
        /**
         * @summary `allowedUMTS_Algorithms`.
         * @public
         * @readonly
         */
        readonly allowedUMTS_Algorithms: OPTIONAL<AllowedUMTS_Algorithms>,
        /**
         * @summary `radioResourceInformation`.
         * @public
         * @readonly
         */
        readonly radioResourceInformation: OPTIONAL<RadioResourceInformation>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `radioResourceList`.
         * @public
         * @readonly
         */
        readonly radioResourceList: OPTIONAL<RadioResourceList>,
        /**
         * @summary `bssmap_ServiceHandover`.
         * @public
         * @readonly
         */
        readonly bssmap_ServiceHandover: OPTIONAL<BSSMAP_ServiceHandover>,
        /**
         * @summary `ranap_ServiceHandover`.
         * @public
         * @readonly
         */
        readonly ranap_ServiceHandover: OPTIONAL<RANAP_ServiceHandover>,
        /**
         * @summary `bssmap_ServiceHandoverList`.
         * @public
         * @readonly
         */
        readonly bssmap_ServiceHandoverList: OPTIONAL<BSSMAP_ServiceHandoverList>,
        /**
         * @summary `currentlyUsedCodec`.
         * @public
         * @readonly
         */
        readonly currentlyUsedCodec: OPTIONAL<Codec>,
        /**
         * @summary `iuSupportedCodecsList`.
         * @public
         * @readonly
         */
        readonly iuSupportedCodecsList: OPTIONAL<SupportedCodecsList>,
        /**
         * @summary `rab_ConfigurationIndicator`.
         * @public
         * @readonly
         */
        readonly rab_ConfigurationIndicator: OPTIONAL<NULL>,
        /**
         * @summary `iuSelectedCodec`.
         * @public
         * @readonly
         */
        readonly iuSelectedCodec: OPTIONAL<Codec>,
        /**
         * @summary `alternativeChannelType`.
         * @public
         * @readonly
         */
        readonly alternativeChannelType: OPTIONAL<RadioResourceInformation>,
        /**
         * @summary `tracePropagationList`.
         * @public
         * @readonly
         */
        readonly tracePropagationList: OPTIONAL<TracePropagationList>,
        /**
         * @summary `aoipSupportedCodecsListAnchor`.
         * @public
         * @readonly
         */
        readonly aoipSupportedCodecsListAnchor: OPTIONAL<AoIPCodecsList>,
        /**
         * @summary `aoipSelectedCodecTarget`.
         * @public
         * @readonly
         */
        readonly aoipSelectedCodecTarget: OPTIONAL<AoIPCodec>,
        /**
         * @summary `uesbi_Iu`.
         * @public
         * @readonly
         */
        readonly uesbi_Iu: OPTIONAL<UESBI_Iu>,
        /**
         * @summary `imeisv`.
         * @public
         * @readonly
         */
        readonly imeisv: OPTIONAL<IMEI>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ForwardAccessSignalling_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardAccessSignalling_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardAccessSignalling_Arg`.
     * @returns {ForwardAccessSignalling_Arg}
     */
    public static _from_object (_o: { [_K in keyof (ForwardAccessSignalling_Arg)]: (ForwardAccessSignalling_Arg)[_K] }): ForwardAccessSignalling_Arg {
        return new ForwardAccessSignalling_Arg(_o.an_APDU, _o.integrityProtectionInfo, _o.encryptionInfo, _o.keyStatus, _o.allowedGSM_Algorithms, _o.allowedUMTS_Algorithms, _o.radioResourceInformation, _o.extensionContainer, _o.radioResourceList, _o.bssmap_ServiceHandover, _o.ranap_ServiceHandover, _o.bssmap_ServiceHandoverList, _o.currentlyUsedCodec, _o.iuSupportedCodecsList, _o.rab_ConfigurationIndicator, _o.iuSelectedCodec, _o.alternativeChannelType, _o.tracePropagationList, _o.aoipSupportedCodecsListAnchor, _o.aoipSelectedCodecTarget, _o.uesbi_Iu, _o.imeisv, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `keyStatus`
         * @public
         * @static
         */

    public static _enum_for_keyStatus = _enum_for_KeyStatus;
}

/**
 * @summary The Leading Root Component Types of ForwardAccessSignalling_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardAccessSignalling_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("an-APDU", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("integrityProtectionInfo", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("encryptionInfo", true, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("keyStatus", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("allowedGSM-Algorithms", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("allowedUMTS-Algorithms", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("radioResourceInformation", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 3), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ForwardAccessSignalling_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardAccessSignalling_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardAccessSignalling_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardAccessSignalling_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("radioResourceList", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("bssmap-ServiceHandover", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("ranap-ServiceHandover", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("bssmap-ServiceHandoverList", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("currentlyUsedCodec", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("iuSupportedCodecsList", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("rab-ConfigurationIndicator", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("iuSelectedCodec", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("alternativeChannelType", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("tracePropagationList", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("aoipSupportedCodecsListAnchor", true, $.hasTag(_TagClass.context, 18), undefined, undefined),
    new $.ComponentSpec("aoipSelectedCodecTarget", true, $.hasTag(_TagClass.context, 19), undefined, undefined),
    new $.ComponentSpec("uesbi-Iu", true, $.hasTag(_TagClass.context, 20), undefined, undefined),
    new $.ComponentSpec("imeisv", true, $.hasTag(_TagClass.context, 21), undefined, undefined)
];

let _cached_decoder_for_ForwardAccessSignalling_Arg: $.ASN1Decoder<ForwardAccessSignalling_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardAccessSignalling_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardAccessSignalling_Arg (el: _Element): ForwardAccessSignalling_Arg {
    if (!_cached_decoder_for_ForwardAccessSignalling_Arg) { _cached_decoder_for_ForwardAccessSignalling_Arg = $._decode_implicit<ForwardAccessSignalling_Arg>(() => function (el: _Element): ForwardAccessSignalling_Arg {
    let an_APDU!: AccessNetworkSignalInfo;
    let integrityProtectionInfo: OPTIONAL<IntegrityProtectionInformation>;
    let encryptionInfo: OPTIONAL<EncryptionInformation>;
    let keyStatus: OPTIONAL<KeyStatus>;
    let allowedGSM_Algorithms: OPTIONAL<AllowedGSM_Algorithms>;
    let allowedUMTS_Algorithms: OPTIONAL<AllowedUMTS_Algorithms>;
    let radioResourceInformation: OPTIONAL<RadioResourceInformation>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let radioResourceList: OPTIONAL<RadioResourceList>;
    let bssmap_ServiceHandover: OPTIONAL<BSSMAP_ServiceHandover>;
    let ranap_ServiceHandover: OPTIONAL<RANAP_ServiceHandover>;
    let bssmap_ServiceHandoverList: OPTIONAL<BSSMAP_ServiceHandoverList>;
    let currentlyUsedCodec: OPTIONAL<Codec>;
    let iuSupportedCodecsList: OPTIONAL<SupportedCodecsList>;
    let rab_ConfigurationIndicator: OPTIONAL<NULL>;
    let iuSelectedCodec: OPTIONAL<Codec>;
    let alternativeChannelType: OPTIONAL<RadioResourceInformation>;
    let tracePropagationList: OPTIONAL<TracePropagationList>;
    let aoipSupportedCodecsListAnchor: OPTIONAL<AoIPCodecsList>;
    let aoipSelectedCodecTarget: OPTIONAL<AoIPCodec>;
    let uesbi_Iu: OPTIONAL<UESBI_Iu>;
    let imeisv: OPTIONAL<IMEI>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "an-APDU": (_el: _Element): void => { an_APDU = _decode_AccessNetworkSignalInfo(_el); },
        "integrityProtectionInfo": (_el: _Element): void => { integrityProtectionInfo = $._decode_implicit<IntegrityProtectionInformation>(() => _decode_IntegrityProtectionInformation)(_el); },
        "encryptionInfo": (_el: _Element): void => { encryptionInfo = $._decode_implicit<EncryptionInformation>(() => _decode_EncryptionInformation)(_el); },
        "keyStatus": (_el: _Element): void => { keyStatus = $._decode_implicit<KeyStatus>(() => _decode_KeyStatus)(_el); },
        "allowedGSM-Algorithms": (_el: _Element): void => { allowedGSM_Algorithms = $._decode_implicit<AllowedGSM_Algorithms>(() => _decode_AllowedGSM_Algorithms)(_el); },
        "allowedUMTS-Algorithms": (_el: _Element): void => { allowedUMTS_Algorithms = $._decode_implicit<AllowedUMTS_Algorithms>(() => _decode_AllowedUMTS_Algorithms)(_el); },
        "radioResourceInformation": (_el: _Element): void => { radioResourceInformation = $._decode_implicit<RadioResourceInformation>(() => _decode_RadioResourceInformation)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "radioResourceList": (_el: _Element): void => { radioResourceList = $._decode_implicit<RadioResourceList>(() => _decode_RadioResourceList)(_el); },
        "bssmap-ServiceHandover": (_el: _Element): void => { bssmap_ServiceHandover = $._decode_implicit<BSSMAP_ServiceHandover>(() => _decode_BSSMAP_ServiceHandover)(_el); },
        "ranap-ServiceHandover": (_el: _Element): void => { ranap_ServiceHandover = $._decode_implicit<RANAP_ServiceHandover>(() => _decode_RANAP_ServiceHandover)(_el); },
        "bssmap-ServiceHandoverList": (_el: _Element): void => { bssmap_ServiceHandoverList = $._decode_implicit<BSSMAP_ServiceHandoverList>(() => _decode_BSSMAP_ServiceHandoverList)(_el); },
        "currentlyUsedCodec": (_el: _Element): void => { currentlyUsedCodec = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "iuSupportedCodecsList": (_el: _Element): void => { iuSupportedCodecsList = $._decode_implicit<SupportedCodecsList>(() => _decode_SupportedCodecsList)(_el); },
        "rab-ConfigurationIndicator": (_el: _Element): void => { rab_ConfigurationIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "iuSelectedCodec": (_el: _Element): void => { iuSelectedCodec = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "alternativeChannelType": (_el: _Element): void => { alternativeChannelType = $._decode_implicit<RadioResourceInformation>(() => _decode_RadioResourceInformation)(_el); },
        "tracePropagationList": (_el: _Element): void => { tracePropagationList = $._decode_implicit<TracePropagationList>(() => _decode_TracePropagationList)(_el); },
        "aoipSupportedCodecsListAnchor": (_el: _Element): void => { aoipSupportedCodecsListAnchor = $._decode_implicit<AoIPCodecsList>(() => _decode_AoIPCodecsList)(_el); },
        "aoipSelectedCodecTarget": (_el: _Element): void => { aoipSelectedCodecTarget = $._decode_implicit<AoIPCodec>(() => _decode_AoIPCodec)(_el); },
        "uesbi-Iu": (_el: _Element): void => { uesbi_Iu = $._decode_implicit<UESBI_Iu>(() => _decode_UESBI_Iu)(_el); },
        "imeisv": (_el: _Element): void => { imeisv = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardAccessSignalling_Arg,
        _extension_additions_list_spec_for_ForwardAccessSignalling_Arg,
        _root_component_type_list_2_spec_for_ForwardAccessSignalling_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ForwardAccessSignalling_Arg(
        an_APDU,
        integrityProtectionInfo,
        encryptionInfo,
        keyStatus,
        allowedGSM_Algorithms,
        allowedUMTS_Algorithms,
        radioResourceInformation,
        extensionContainer,
        radioResourceList,
        bssmap_ServiceHandover,
        ranap_ServiceHandover,
        bssmap_ServiceHandoverList,
        currentlyUsedCodec,
        iuSupportedCodecsList,
        rab_ConfigurationIndicator,
        iuSelectedCodec,
        alternativeChannelType,
        tracePropagationList,
        aoipSupportedCodecsListAnchor,
        aoipSelectedCodecTarget,
        uesbi_Iu,
        imeisv,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_ForwardAccessSignalling_Arg(el);
}

let _cached_encoder_for_ForwardAccessSignalling_Arg: $.ASN1Encoder<ForwardAccessSignalling_Arg> | null = null;

/**
 * @summary Encodes a(n) ForwardAccessSignalling_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardAccessSignalling_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardAccessSignalling_Arg (value: ForwardAccessSignalling_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardAccessSignalling_Arg) { _cached_encoder_for_ForwardAccessSignalling_Arg = $._encode_implicit(_TagClass.context, 3, () => function (value: ForwardAccessSignalling_Arg, elGetter: $.ASN1Encoder<ForwardAccessSignalling_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_AccessNetworkSignalInfo(value.an_APDU, $.BER),
            /* IF_ABSENT  */ ((value.integrityProtectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_IntegrityProtectionInformation, $.BER)(value.integrityProtectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.encryptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_EncryptionInformation, $.BER)(value.encryptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.keyStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_KeyStatus, $.BER)(value.keyStatus, $.BER)),
            /* IF_ABSENT  */ ((value.allowedGSM_Algorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_AllowedGSM_Algorithms, $.BER)(value.allowedGSM_Algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.allowedUMTS_Algorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AllowedUMTS_Algorithms, $.BER)(value.allowedUMTS_Algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.radioResourceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_RadioResourceInformation, $.BER)(value.radioResourceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.radioResourceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RadioResourceList, $.BER)(value.radioResourceList, $.BER)),
            /* IF_ABSENT  */ ((value.bssmap_ServiceHandover === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_BSSMAP_ServiceHandover, $.BER)(value.bssmap_ServiceHandover, $.BER)),
            /* IF_ABSENT  */ ((value.ranap_ServiceHandover === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_RANAP_ServiceHandover, $.BER)(value.ranap_ServiceHandover, $.BER)),
            /* IF_ABSENT  */ ((value.bssmap_ServiceHandoverList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_BSSMAP_ServiceHandoverList, $.BER)(value.bssmap_ServiceHandoverList, $.BER)),
            /* IF_ABSENT  */ ((value.currentlyUsedCodec === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_Codec, $.BER)(value.currentlyUsedCodec, $.BER)),
            /* IF_ABSENT  */ ((value.iuSupportedCodecsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SupportedCodecsList, $.BER)(value.iuSupportedCodecsList, $.BER)),
            /* IF_ABSENT  */ ((value.rab_ConfigurationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => $._encodeNull, $.BER)(value.rab_ConfigurationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.iuSelectedCodec === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_Codec, $.BER)(value.iuSelectedCodec, $.BER)),
            /* IF_ABSENT  */ ((value.alternativeChannelType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_RadioResourceInformation, $.BER)(value.alternativeChannelType, $.BER)),
            /* IF_ABSENT  */ ((value.tracePropagationList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_TracePropagationList, $.BER)(value.tracePropagationList, $.BER)),
            /* IF_ABSENT  */ ((value.aoipSupportedCodecsListAnchor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_AoIPCodecsList, $.BER)(value.aoipSupportedCodecsListAnchor, $.BER)),
            /* IF_ABSENT  */ ((value.aoipSelectedCodecTarget === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => _encode_AoIPCodec, $.BER)(value.aoipSelectedCodecTarget, $.BER)),
            /* IF_ABSENT  */ ((value.uesbi_Iu === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_UESBI_Iu, $.BER)(value.uesbi_Iu, $.BER)),
            /* IF_ABSENT  */ ((value.imeisv === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_IMEI, $.BER)(value.imeisv, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ForwardAccessSignalling_Arg(value, elGetter);
}


/* eslint-enable */
