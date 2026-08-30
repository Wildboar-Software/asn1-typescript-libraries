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
import { GlobalCellId, _decode_GlobalCellId, _encode_GlobalCellId } from "../MAP-CommonDataTypes/GlobalCellId.ta.mjs";
import { RNCId, _decode_RNCId, _encode_RNCId } from "../MAP-MS-DataTypes/RNCId.ta.mjs";
import { AccessNetworkSignalInfo, _decode_AccessNetworkSignalInfo, _encode_AccessNetworkSignalInfo } from "../MAP-CommonDataTypes/AccessNetworkSignalInfo.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { IntegrityProtectionInformation, _decode_IntegrityProtectionInformation, _encode_IntegrityProtectionInformation } from "../MAP-MS-DataTypes/IntegrityProtectionInformation.ta.mjs";
import { EncryptionInformation, _decode_EncryptionInformation, _encode_EncryptionInformation } from "../MAP-MS-DataTypes/EncryptionInformation.ta.mjs";
import { RadioResourceInformation, _decode_RadioResourceInformation, _encode_RadioResourceInformation } from "../MAP-MS-DataTypes/RadioResourceInformation.ta.mjs";
import { AllowedGSM_Algorithms, _decode_AllowedGSM_Algorithms, _encode_AllowedGSM_Algorithms } from "../MAP-MS-DataTypes/AllowedGSM-Algorithms.ta.mjs";
import { AllowedUMTS_Algorithms, _decode_AllowedUMTS_Algorithms, _encode_AllowedUMTS_Algorithms } from "../MAP-MS-DataTypes/AllowedUMTS-Algorithms.ta.mjs";
import { RadioResourceList, _decode_RadioResourceList, _encode_RadioResourceList } from "../MAP-MS-DataTypes/RadioResourceList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { RAB_Id, _decode_RAB_Id, _encode_RAB_Id } from "../MAP-MS-DataTypes/RAB-Id.ta.mjs";
import { BSSMAP_ServiceHandover, _decode_BSSMAP_ServiceHandover, _encode_BSSMAP_ServiceHandover } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandover.ta.mjs";
import { RANAP_ServiceHandover, _decode_RANAP_ServiceHandover, _encode_RANAP_ServiceHandover } from "../MAP-MS-DataTypes/RANAP-ServiceHandover.ta.mjs";
import { BSSMAP_ServiceHandoverList, _decode_BSSMAP_ServiceHandoverList, _encode_BSSMAP_ServiceHandoverList } from "../MAP-MS-DataTypes/BSSMAP-ServiceHandoverList.ta.mjs";
import { ASCI_CallReference, _decode_ASCI_CallReference, _encode_ASCI_CallReference } from "../MAP-CommonDataTypes/ASCI-CallReference.ta.mjs";
import { GERAN_Classmark, _decode_GERAN_Classmark, _encode_GERAN_Classmark } from "../MAP-MS-DataTypes/GERAN-Classmark.ta.mjs";
import { Codec, _decode_Codec, _encode_Codec } from "../MAP-MS-DataTypes/Codec.ta.mjs";
import { SupportedCodecsList, _decode_SupportedCodecsList, _encode_SupportedCodecsList } from "../MAP-MS-DataTypes/SupportedCodecsList.ta.mjs";
import { UESBI_Iu, _decode_UESBI_Iu, _encode_UESBI_Iu } from "../MAP-MS-DataTypes/UESBI-Iu.ta.mjs";
import { IMEI, _decode_IMEI, _encode_IMEI } from "../MAP-CommonDataTypes/IMEI.ta.mjs";
import { TracePropagationList, _decode_TracePropagationList, _encode_TracePropagationList } from "../MAP-OM-DataTypes/TracePropagationList.ta.mjs";
import { AoIPCodecsList, _decode_AoIPCodecsList, _encode_AoIPCodecsList } from "../MAP-MS-DataTypes/AoIPCodecsList.ta.mjs";
import { ZoneCodeList, _decode_ZoneCodeList, _encode_ZoneCodeList } from "../MAP-MS-DataTypes/ZoneCodeList.ta.mjs";
import { LCLS_GlobalCallReference, _decode_LCLS_GlobalCallReference, _encode_LCLS_GlobalCallReference } from "../MAP-MS-DataTypes/LCLS-GlobalCallReference.ta.mjs";
import { LCLS_Negotiation, LCLS_Negotiation_permission_indicator_not_allowed_bit /* IMPORTED_LONG_NAMED_BIT */, permission_indicator_not_allowed_bit /* IMPORTED_SHORT_NAMED_BIT */, LCLS_Negotiation_permission_indicator_spare_bit /* IMPORTED_LONG_NAMED_BIT */, permission_indicator_spare_bit /* IMPORTED_SHORT_NAMED_BIT */, _decode_LCLS_Negotiation, _encode_LCLS_Negotiation } from "../MAP-MS-DataTypes/LCLS-Negotiation.ta.mjs";
import { LCLS_ConfigurationPreference, LCLS_ConfigurationPreference_forward_data_sending_indicator /* IMPORTED_LONG_NAMED_BIT */, forward_data_sending_indicator /* IMPORTED_SHORT_NAMED_BIT */, LCLS_ConfigurationPreference_backward_data_sending_indicator /* IMPORTED_LONG_NAMED_BIT */, backward_data_sending_indicator /* IMPORTED_SHORT_NAMED_BIT */, LCLS_ConfigurationPreference_forward_data_reception_indicator /* IMPORTED_LONG_NAMED_BIT */, forward_data_reception_indicator /* IMPORTED_SHORT_NAMED_BIT */, LCLS_ConfigurationPreference_backward_data_reception_indicator /* IMPORTED_LONG_NAMED_BIT */, backward_data_reception_indicator /* IMPORTED_SHORT_NAMED_BIT */, _decode_LCLS_ConfigurationPreference, _encode_LCLS_ConfigurationPreference } from "../MAP-MS-DataTypes/LCLS-ConfigurationPreference.ta.mjs";
import { CSG_SubscriptionDataList, _decode_CSG_SubscriptionDataList, _encode_CSG_SubscriptionDataList } from "../MAP-MS-DataTypes/CSG-SubscriptionDataList.ta.mjs";


/**
 * @summary PrepareHO_Arg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrepareHO-Arg ::= [3] SEQUENCE {
 *     targetCellId    [0] GlobalCellId    OPTIONAL,
 *     ho-NumberNotRequired    NULL    OPTIONAL, 
 *     targetRNCId    [1] RNCId    OPTIONAL,
 *     an-APDU    [2] AccessNetworkSignalInfo    OPTIONAL,
 *     multipleBearerRequested    [3] NULL    OPTIONAL,
 *     imsi    [4] IMSI    OPTIONAL,
 *     integrityProtectionInfo    [5] IntegrityProtectionInformation    OPTIONAL,
 *     encryptionInfo    [6] EncryptionInformation    OPTIONAL,
 *     radioResourceInformation    [7] RadioResourceInformation    OPTIONAL,
 *     allowedGSM-Algorithms    [9]    AllowedGSM-Algorithms    OPTIONAL,
 *     allowedUMTS-Algorithms    [10]    AllowedUMTS-Algorithms    OPTIONAL,
 *     radioResourceList    [11] RadioResourceList    OPTIONAL,
 *     extensionContainer    [8] ExtensionContainer    OPTIONAL,
 *     ... ,
 *     rab-Id    [12] RAB-Id    OPTIONAL,
 *     bssmap-ServiceHandover    [13]    BSSMAP-ServiceHandover    OPTIONAL,
 *     ranap-ServiceHandover    [14]    RANAP-ServiceHandover    OPTIONAL, 
 *     bssmap-ServiceHandoverList    [15]    BSSMAP-ServiceHandoverList    OPTIONAL,
 *     asciCallReference    [20]    ASCI-CallReference    OPTIONAL,
 *     geran-classmark    [16] GERAN-Classmark    OPTIONAL,
 *     iuCurrentlyUsedCodec    [17] Codec    OPTIONAL,
 *     iuSupportedCodecsList    [18] SupportedCodecsList    OPTIONAL,
 *     rab-ConfigurationIndicator    [19] NULL    OPTIONAL,
 *     uesbi-Iu    [21]    UESBI-Iu    OPTIONAL,
 *     imeisv    [22]    IMEI    OPTIONAL,
 *     alternativeChannelType    [23]    RadioResourceInformation    OPTIONAL,
 *     tracePropagationList    [25]    TracePropagationList    OPTIONAL,
 *     aoipSupportedCodecsListAnchor    [26] AoIPCodecsList    OPTIONAL,
 *     regionalSubscriptionData    [27] ZoneCodeList    OPTIONAL,
 *     lclsGlobalCallReference    [28]    LCLS-GlobalCallReference    OPTIONAL,
 *     lcls-Negotiation    [29]    LCLS-Negotiation    OPTIONAL,
 *     lcls-Configuration-Preference    [30]    LCLS-ConfigurationPreference    OPTIONAL,
 *     csg-SubscriptionDataList    [31] CSG-SubscriptionDataList    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class PrepareHO_Arg {
    constructor (
        /**
         * @summary `targetCellId`.
         * @public
         * @readonly
         */
        readonly targetCellId: OPTIONAL<GlobalCellId>,
        /**
         * @summary `ho_NumberNotRequired`.
         * @public
         * @readonly
         */
        readonly ho_NumberNotRequired: OPTIONAL<NULL>,
        /**
         * @summary `targetRNCId`.
         * @public
         * @readonly
         */
        readonly targetRNCId: OPTIONAL<RNCId>,
        /**
         * @summary `an_APDU`.
         * @public
         * @readonly
         */
        readonly an_APDU: OPTIONAL<AccessNetworkSignalInfo>,
        /**
         * @summary `multipleBearerRequested`.
         * @public
         * @readonly
         */
        readonly multipleBearerRequested: OPTIONAL<NULL>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
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
         * @summary `radioResourceInformation`.
         * @public
         * @readonly
         */
        readonly radioResourceInformation: OPTIONAL<RadioResourceInformation>,
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
         * @summary `radioResourceList`.
         * @public
         * @readonly
         */
        readonly radioResourceList: OPTIONAL<RadioResourceList>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `rab_Id`.
         * @public
         * @readonly
         */
        readonly rab_Id: OPTIONAL<RAB_Id>,
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
         * @summary `asciCallReference`.
         * @public
         * @readonly
         */
        readonly asciCallReference: OPTIONAL<ASCI_CallReference>,
        /**
         * @summary `geran_classmark`.
         * @public
         * @readonly
         */
        readonly geran_classmark: OPTIONAL<GERAN_Classmark>,
        /**
         * @summary `iuCurrentlyUsedCodec`.
         * @public
         * @readonly
         */
        readonly iuCurrentlyUsedCodec: OPTIONAL<Codec>,
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
         * @summary `regionalSubscriptionData`.
         * @public
         * @readonly
         */
        readonly regionalSubscriptionData: OPTIONAL<ZoneCodeList>,
        /**
         * @summary `lclsGlobalCallReference`.
         * @public
         * @readonly
         */
        readonly lclsGlobalCallReference: OPTIONAL<LCLS_GlobalCallReference>,
        /**
         * @summary `lcls_Negotiation`.
         * @public
         * @readonly
         */
        readonly lcls_Negotiation: OPTIONAL<LCLS_Negotiation>,
        /**
         * @summary `lcls_Configuration_Preference`.
         * @public
         * @readonly
         */
        readonly lcls_Configuration_Preference: OPTIONAL<LCLS_ConfigurationPreference>,
        /**
         * @summary `csg_SubscriptionDataList`.
         * @public
         * @readonly
         */
        readonly csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a PrepareHO_Arg
     * @description
     * 
     * This takes an `object` and converts it to a `PrepareHO_Arg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrepareHO_Arg`.
     * @returns {PrepareHO_Arg}
     */
    public static _from_object (_o: { [_K in keyof (PrepareHO_Arg)]: (PrepareHO_Arg)[_K] }): PrepareHO_Arg {
        return new PrepareHO_Arg(_o.targetCellId, _o.ho_NumberNotRequired, _o.targetRNCId, _o.an_APDU, _o.multipleBearerRequested, _o.imsi, _o.integrityProtectionInfo, _o.encryptionInfo, _o.radioResourceInformation, _o.allowedGSM_Algorithms, _o.allowedUMTS_Algorithms, _o.radioResourceList, _o.extensionContainer, _o.rab_Id, _o.bssmap_ServiceHandover, _o.ranap_ServiceHandover, _o.bssmap_ServiceHandoverList, _o.asciCallReference, _o.geran_classmark, _o.iuCurrentlyUsedCodec, _o.iuSupportedCodecsList, _o.rab_ConfigurationIndicator, _o.uesbi_Iu, _o.imeisv, _o.alternativeChannelType, _o.tracePropagationList, _o.aoipSupportedCodecsListAnchor, _o.regionalSubscriptionData, _o.lclsGlobalCallReference, _o.lcls_Negotiation, _o.lcls_Configuration_Preference, _o.csg_SubscriptionDataList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of PrepareHO_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrepareHO_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("targetCellId", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("ho-NumberNotRequired", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("targetRNCId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("an-APDU", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("multipleBearerRequested", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("integrityProtectionInfo", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("encryptionInfo", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("radioResourceInformation", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("allowedGSM-Algorithms", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("allowedUMTS-Algorithms", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("radioResourceList", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of PrepareHO_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrepareHO_Arg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrepareHO_Arg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrepareHO_Arg: $.ComponentSpec[] = [
    new $.ComponentSpec("rab-Id", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("bssmap-ServiceHandover", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("ranap-ServiceHandover", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("bssmap-ServiceHandoverList", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("asciCallReference", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("geran-classmark", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("iuCurrentlyUsedCodec", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("iuSupportedCodecsList", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("rab-ConfigurationIndicator", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("uesbi-Iu", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("imeisv", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("alternativeChannelType", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("tracePropagationList", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("aoipSupportedCodecsListAnchor", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("regionalSubscriptionData", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("lclsGlobalCallReference", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("lcls-Negotiation", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("lcls-Configuration-Preference", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("csg-SubscriptionDataList", true, $.hasTag(_TagClass.context, 31))
];

let _cached_decoder_for_PrepareHO_Arg: $.ASN1Decoder<PrepareHO_Arg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrepareHO_Arg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrepareHO_Arg (el: _Element): PrepareHO_Arg {
    if (!_cached_decoder_for_PrepareHO_Arg) { _cached_decoder_for_PrepareHO_Arg = $._decode_implicit<PrepareHO_Arg>(() => function (el: _Element): PrepareHO_Arg {
    let targetCellId: OPTIONAL<GlobalCellId> = undefined;
    let ho_NumberNotRequired: OPTIONAL<NULL> = undefined;
    let targetRNCId: OPTIONAL<RNCId> = undefined;
    let an_APDU: OPTIONAL<AccessNetworkSignalInfo> = undefined;
    let multipleBearerRequested: OPTIONAL<NULL> = undefined;
    let imsi: OPTIONAL<IMSI> = undefined;
    let integrityProtectionInfo: OPTIONAL<IntegrityProtectionInformation> = undefined;
    let encryptionInfo: OPTIONAL<EncryptionInformation> = undefined;
    let radioResourceInformation: OPTIONAL<RadioResourceInformation> = undefined;
    let allowedGSM_Algorithms: OPTIONAL<AllowedGSM_Algorithms> = undefined;
    let allowedUMTS_Algorithms: OPTIONAL<AllowedUMTS_Algorithms> = undefined;
    let radioResourceList: OPTIONAL<RadioResourceList> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let rab_Id: OPTIONAL<RAB_Id> = undefined;
    let bssmap_ServiceHandover: OPTIONAL<BSSMAP_ServiceHandover> = undefined;
    let ranap_ServiceHandover: OPTIONAL<RANAP_ServiceHandover> = undefined;
    let bssmap_ServiceHandoverList: OPTIONAL<BSSMAP_ServiceHandoverList> = undefined;
    let asciCallReference: OPTIONAL<ASCI_CallReference> = undefined;
    let geran_classmark: OPTIONAL<GERAN_Classmark> = undefined;
    let iuCurrentlyUsedCodec: OPTIONAL<Codec> = undefined;
    let iuSupportedCodecsList: OPTIONAL<SupportedCodecsList> = undefined;
    let rab_ConfigurationIndicator: OPTIONAL<NULL> = undefined;
    let uesbi_Iu: OPTIONAL<UESBI_Iu> = undefined;
    let imeisv: OPTIONAL<IMEI> = undefined;
    let alternativeChannelType: OPTIONAL<RadioResourceInformation> = undefined;
    let tracePropagationList: OPTIONAL<TracePropagationList> = undefined;
    let aoipSupportedCodecsListAnchor: OPTIONAL<AoIPCodecsList> = undefined;
    let regionalSubscriptionData: OPTIONAL<ZoneCodeList> = undefined;
    let lclsGlobalCallReference: OPTIONAL<LCLS_GlobalCallReference> = undefined;
    let lcls_Negotiation: OPTIONAL<LCLS_Negotiation> = undefined;
    let lcls_Configuration_Preference: OPTIONAL<LCLS_ConfigurationPreference> = undefined;
    let csg_SubscriptionDataList: OPTIONAL<CSG_SubscriptionDataList> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "targetCellId": (_el: _Element): void => { targetCellId = $._decode_implicit<GlobalCellId>(() => _decode_GlobalCellId)(_el); },
        "ho-NumberNotRequired": (_el: _Element): void => { ho_NumberNotRequired = $._decodeNull(_el); },
        "targetRNCId": (_el: _Element): void => { targetRNCId = $._decode_implicit<RNCId>(() => _decode_RNCId)(_el); },
        "an-APDU": (_el: _Element): void => { an_APDU = $._decode_implicit<AccessNetworkSignalInfo>(() => _decode_AccessNetworkSignalInfo)(_el); },
        "multipleBearerRequested": (_el: _Element): void => { multipleBearerRequested = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "integrityProtectionInfo": (_el: _Element): void => { integrityProtectionInfo = $._decode_implicit<IntegrityProtectionInformation>(() => _decode_IntegrityProtectionInformation)(_el); },
        "encryptionInfo": (_el: _Element): void => { encryptionInfo = $._decode_implicit<EncryptionInformation>(() => _decode_EncryptionInformation)(_el); },
        "radioResourceInformation": (_el: _Element): void => { radioResourceInformation = $._decode_implicit<RadioResourceInformation>(() => _decode_RadioResourceInformation)(_el); },
        "allowedGSM-Algorithms": (_el: _Element): void => { allowedGSM_Algorithms = $._decode_implicit<AllowedGSM_Algorithms>(() => _decode_AllowedGSM_Algorithms)(_el); },
        "allowedUMTS-Algorithms": (_el: _Element): void => { allowedUMTS_Algorithms = $._decode_implicit<AllowedUMTS_Algorithms>(() => _decode_AllowedUMTS_Algorithms)(_el); },
        "radioResourceList": (_el: _Element): void => { radioResourceList = $._decode_implicit<RadioResourceList>(() => _decode_RadioResourceList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "rab-Id": (_el: _Element): void => { rab_Id = $._decode_implicit<RAB_Id>(() => _decode_RAB_Id)(_el); },
        "bssmap-ServiceHandover": (_el: _Element): void => { bssmap_ServiceHandover = $._decode_implicit<BSSMAP_ServiceHandover>(() => _decode_BSSMAP_ServiceHandover)(_el); },
        "ranap-ServiceHandover": (_el: _Element): void => { ranap_ServiceHandover = $._decode_implicit<RANAP_ServiceHandover>(() => _decode_RANAP_ServiceHandover)(_el); },
        "bssmap-ServiceHandoverList": (_el: _Element): void => { bssmap_ServiceHandoverList = $._decode_implicit<BSSMAP_ServiceHandoverList>(() => _decode_BSSMAP_ServiceHandoverList)(_el); },
        "asciCallReference": (_el: _Element): void => { asciCallReference = $._decode_implicit<ASCI_CallReference>(() => _decode_ASCI_CallReference)(_el); },
        "geran-classmark": (_el: _Element): void => { geran_classmark = $._decode_implicit<GERAN_Classmark>(() => _decode_GERAN_Classmark)(_el); },
        "iuCurrentlyUsedCodec": (_el: _Element): void => { iuCurrentlyUsedCodec = $._decode_implicit<Codec>(() => _decode_Codec)(_el); },
        "iuSupportedCodecsList": (_el: _Element): void => { iuSupportedCodecsList = $._decode_implicit<SupportedCodecsList>(() => _decode_SupportedCodecsList)(_el); },
        "rab-ConfigurationIndicator": (_el: _Element): void => { rab_ConfigurationIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "uesbi-Iu": (_el: _Element): void => { uesbi_Iu = $._decode_implicit<UESBI_Iu>(() => _decode_UESBI_Iu)(_el); },
        "imeisv": (_el: _Element): void => { imeisv = $._decode_implicit<IMEI>(() => _decode_IMEI)(_el); },
        "alternativeChannelType": (_el: _Element): void => { alternativeChannelType = $._decode_implicit<RadioResourceInformation>(() => _decode_RadioResourceInformation)(_el); },
        "tracePropagationList": (_el: _Element): void => { tracePropagationList = $._decode_implicit<TracePropagationList>(() => _decode_TracePropagationList)(_el); },
        "aoipSupportedCodecsListAnchor": (_el: _Element): void => { aoipSupportedCodecsListAnchor = $._decode_implicit<AoIPCodecsList>(() => _decode_AoIPCodecsList)(_el); },
        "regionalSubscriptionData": (_el: _Element): void => { regionalSubscriptionData = $._decode_implicit<ZoneCodeList>(() => _decode_ZoneCodeList)(_el); },
        "lclsGlobalCallReference": (_el: _Element): void => { lclsGlobalCallReference = $._decode_implicit<LCLS_GlobalCallReference>(() => _decode_LCLS_GlobalCallReference)(_el); },
        "lcls-Negotiation": (_el: _Element): void => { lcls_Negotiation = $._decode_implicit<LCLS_Negotiation>(() => _decode_LCLS_Negotiation)(_el); },
        "lcls-Configuration-Preference": (_el: _Element): void => { lcls_Configuration_Preference = $._decode_implicit<LCLS_ConfigurationPreference>(() => _decode_LCLS_ConfigurationPreference)(_el); },
        "csg-SubscriptionDataList": (_el: _Element): void => { csg_SubscriptionDataList = $._decode_implicit<CSG_SubscriptionDataList>(() => _decode_CSG_SubscriptionDataList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PrepareHO_Arg,
        _extension_additions_list_spec_for_PrepareHO_Arg,
        _root_component_type_list_2_spec_for_PrepareHO_Arg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new PrepareHO_Arg(
        targetCellId,
        ho_NumberNotRequired,
        targetRNCId,
        an_APDU,
        multipleBearerRequested,
        imsi,
        integrityProtectionInfo,
        encryptionInfo,
        radioResourceInformation,
        allowedGSM_Algorithms,
        allowedUMTS_Algorithms,
        radioResourceList,
        extensionContainer,
        rab_Id,
        bssmap_ServiceHandover,
        ranap_ServiceHandover,
        bssmap_ServiceHandoverList,
        asciCallReference,
        geran_classmark,
        iuCurrentlyUsedCodec,
        iuSupportedCodecsList,
        rab_ConfigurationIndicator,
        uesbi_Iu,
        imeisv,
        alternativeChannelType,
        tracePropagationList,
        aoipSupportedCodecsListAnchor,
        regionalSubscriptionData,
        lclsGlobalCallReference,
        lcls_Negotiation,
        lcls_Configuration_Preference,
        csg_SubscriptionDataList,
        _unrecognizedExtensionsList
    );
}); }
    return _cached_decoder_for_PrepareHO_Arg(el);
}

let _cached_encoder_for_PrepareHO_Arg: $.ASN1Encoder<PrepareHO_Arg> | null = null;

/**
 * @summary Encodes a(n) PrepareHO_Arg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrepareHO_Arg, encoded as an ASN.1 Element.
 */
export
function _encode_PrepareHO_Arg (value: PrepareHO_Arg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrepareHO_Arg) { _cached_encoder_for_PrepareHO_Arg = $._encode_implicit(_TagClass.context, 3, () => function (value: PrepareHO_Arg, elGetter: $.ASN1Encoder<PrepareHO_Arg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.targetCellId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_GlobalCellId, $.BER)(value.targetCellId, $.BER)),
            /* IF_ABSENT  */ ((value.ho_NumberNotRequired === undefined) ? undefined : $._encodeNull(value.ho_NumberNotRequired, $.BER)),
            /* IF_ABSENT  */ ((value.targetRNCId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_RNCId, $.BER)(value.targetRNCId, $.BER)),
            /* IF_ABSENT  */ ((value.an_APDU === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_AccessNetworkSignalInfo, $.BER)(value.an_APDU, $.BER)),
            /* IF_ABSENT  */ ((value.multipleBearerRequested === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.multipleBearerRequested, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.integrityProtectionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_IntegrityProtectionInformation, $.BER)(value.integrityProtectionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.encryptionInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => _encode_EncryptionInformation, $.BER)(value.encryptionInfo, $.BER)),
            /* IF_ABSENT  */ ((value.radioResourceInformation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_RadioResourceInformation, $.BER)(value.radioResourceInformation, $.BER)),
            /* IF_ABSENT  */ ((value.allowedGSM_Algorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_AllowedGSM_Algorithms, $.BER)(value.allowedGSM_Algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.allowedUMTS_Algorithms === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AllowedUMTS_Algorithms, $.BER)(value.allowedUMTS_Algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.radioResourceList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_RadioResourceList, $.BER)(value.radioResourceList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.rab_Id === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_RAB_Id, $.BER)(value.rab_Id, $.BER)),
            /* IF_ABSENT  */ ((value.bssmap_ServiceHandover === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_BSSMAP_ServiceHandover, $.BER)(value.bssmap_ServiceHandover, $.BER)),
            /* IF_ABSENT  */ ((value.ranap_ServiceHandover === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_RANAP_ServiceHandover, $.BER)(value.ranap_ServiceHandover, $.BER)),
            /* IF_ABSENT  */ ((value.bssmap_ServiceHandoverList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => _encode_BSSMAP_ServiceHandoverList, $.BER)(value.bssmap_ServiceHandoverList, $.BER)),
            /* IF_ABSENT  */ ((value.asciCallReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_ASCI_CallReference, $.BER)(value.asciCallReference, $.BER)),
            /* IF_ABSENT  */ ((value.geran_classmark === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_GERAN_Classmark, $.BER)(value.geran_classmark, $.BER)),
            /* IF_ABSENT  */ ((value.iuCurrentlyUsedCodec === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_Codec, $.BER)(value.iuCurrentlyUsedCodec, $.BER)),
            /* IF_ABSENT  */ ((value.iuSupportedCodecsList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SupportedCodecsList, $.BER)(value.iuSupportedCodecsList, $.BER)),
            /* IF_ABSENT  */ ((value.rab_ConfigurationIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.rab_ConfigurationIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.uesbi_Iu === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => _encode_UESBI_Iu, $.BER)(value.uesbi_Iu, $.BER)),
            /* IF_ABSENT  */ ((value.imeisv === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => _encode_IMEI, $.BER)(value.imeisv, $.BER)),
            /* IF_ABSENT  */ ((value.alternativeChannelType === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => _encode_RadioResourceInformation, $.BER)(value.alternativeChannelType, $.BER)),
            /* IF_ABSENT  */ ((value.tracePropagationList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 25, () => _encode_TracePropagationList, $.BER)(value.tracePropagationList, $.BER)),
            /* IF_ABSENT  */ ((value.aoipSupportedCodecsListAnchor === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_AoIPCodecsList, $.BER)(value.aoipSupportedCodecsListAnchor, $.BER)),
            /* IF_ABSENT  */ ((value.regionalSubscriptionData === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_ZoneCodeList, $.BER)(value.regionalSubscriptionData, $.BER)),
            /* IF_ABSENT  */ ((value.lclsGlobalCallReference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => _encode_LCLS_GlobalCallReference, $.BER)(value.lclsGlobalCallReference, $.BER)),
            /* IF_ABSENT  */ ((value.lcls_Negotiation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_LCLS_Negotiation, $.BER)(value.lcls_Negotiation, $.BER)),
            /* IF_ABSENT  */ ((value.lcls_Configuration_Preference === undefined) ? undefined : $._encode_implicit(_TagClass.context, 30, () => _encode_LCLS_ConfigurationPreference, $.BER)(value.lcls_Configuration_Preference, $.BER)),
            /* IF_ABSENT  */ ((value.csg_SubscriptionDataList === undefined) ? undefined : $._encode_implicit(_TagClass.context, 31, () => _encode_CSG_SubscriptionDataList, $.BER)(value.csg_SubscriptionDataList, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_PrepareHO_Arg(value, elGetter);
}


/* eslint-enable */
