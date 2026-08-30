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
import { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { CUG_CheckInfo, _decode_CUG_CheckInfo, _encode_CUG_CheckInfo } from "../MAP-CH-DataTypes/CUG-CheckInfo.ta.mjs";
import { NumberOfForwarding, _decode_NumberOfForwarding, _encode_NumberOfForwarding } from "../MAP-CH-DataTypes/NumberOfForwarding.ta.mjs";
import { InterrogationType, _enum_for_InterrogationType, InterrogationType_basicCall /* IMPORTED_LONG_ENUMERATION_ITEM */, basicCall /* IMPORTED_SHORT_ENUMERATION_ITEM */, InterrogationType_forwarding /* IMPORTED_LONG_ENUMERATION_ITEM */, forwarding /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_InterrogationType, _encode_InterrogationType } from "../MAP-CH-DataTypes/InterrogationType.ta.mjs";
import { OR_Phase, _decode_OR_Phase, _encode_OR_Phase } from "../MAP-CH-DataTypes/OR-Phase.ta.mjs";
import { CallReferenceNumber, _decode_CallReferenceNumber, _encode_CallReferenceNumber } from "../MAP-CH-DataTypes/CallReferenceNumber.ta.mjs";
import { ForwardingReason, _enum_for_ForwardingReason, ForwardingReason_notReachable /* IMPORTED_LONG_ENUMERATION_ITEM */, notReachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingReason_busy /* IMPORTED_LONG_ENUMERATION_ITEM */, busy /* IMPORTED_SHORT_ENUMERATION_ITEM */, ForwardingReason_noReply /* IMPORTED_LONG_ENUMERATION_ITEM */, noReply /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ForwardingReason, _encode_ForwardingReason } from "../MAP-CH-DataTypes/ForwardingReason.ta.mjs";
import { Ext_BasicServiceCode, _decode_Ext_BasicServiceCode, _encode_Ext_BasicServiceCode } from "../MAP-CommonDataTypes/Ext-BasicServiceCode.ta.mjs";
import { ExternalSignalInfo, _decode_ExternalSignalInfo, _encode_ExternalSignalInfo } from "../MAP-CommonDataTypes/ExternalSignalInfo.ta.mjs";
import { CamelInfo, _decode_CamelInfo, _encode_CamelInfo } from "../MAP-CH-DataTypes/CamelInfo.ta.mjs";
import { SuppressionOfAnnouncement, _decode_SuppressionOfAnnouncement, _encode_SuppressionOfAnnouncement } from "../MAP-CH-DataTypes/SuppressionOfAnnouncement.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../MAP-CommonDataTypes/AlertingPattern.ta.mjs";
import { SupportedCCBS_Phase, _decode_SupportedCCBS_Phase, _encode_SupportedCCBS_Phase } from "../MAP-CH-DataTypes/SupportedCCBS-Phase.ta.mjs";
import { Ext_ExternalSignalInfo, _decode_Ext_ExternalSignalInfo, _encode_Ext_ExternalSignalInfo } from "../MAP-CommonDataTypes/Ext-ExternalSignalInfo.ta.mjs";
import { IST_SupportIndicator, _enum_for_IST_SupportIndicator, IST_SupportIndicator_basicISTSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, basicISTSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, IST_SupportIndicator_istCommandSupported /* IMPORTED_LONG_ENUMERATION_ITEM */, istCommandSupported /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IST_SupportIndicator, _encode_IST_SupportIndicator } from "../MAP-MS-DataTypes/IST-SupportIndicator.ta.mjs";
import { CallDiversionTreatmentIndicator, _decode_CallDiversionTreatmentIndicator, _encode_CallDiversionTreatmentIndicator } from "../MAP-CH-DataTypes/CallDiversionTreatmentIndicator.ta.mjs";
import { SuppressMTSS, SuppressMTSS_suppressCUG /* IMPORTED_LONG_NAMED_BIT */, suppressCUG /* IMPORTED_SHORT_NAMED_BIT */, SuppressMTSS_suppressCCBS /* IMPORTED_LONG_NAMED_BIT */, suppressCCBS /* IMPORTED_SHORT_NAMED_BIT */, _decode_SuppressMTSS, _encode_SuppressMTSS } from "../MAP-CH-DataTypes/SuppressMTSS.ta.mjs";
import { EMLPP_Priority, _decode_EMLPP_Priority, _encode_EMLPP_Priority } from "../MAP-CommonDataTypes/EMLPP-Priority.ta.mjs";


/**
 * @summary SendRoutingInfoArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendRoutingInfoArg ::= SEQUENCE {
 *     msisdn    [0] ISDN-AddressString,
 *     cug-CheckInfo    [1] CUG-CheckInfo    OPTIONAL,
 *     numberOfForwarding    [2] NumberOfForwarding    OPTIONAL,
 *     interrogationType    [3] InterrogationType,
 *     or-Interrogation    [4] NULL    OPTIONAL,
 *     or-Capability    [5] OR-Phase    OPTIONAL,
 *     gmsc-OrGsmSCF-Address    [6] ISDN-AddressString,
 *     callReferenceNumber    [7] CallReferenceNumber    OPTIONAL,
 *     forwardingReason    [8] ForwardingReason    OPTIONAL,
 *     basicServiceGroup    [9] Ext-BasicServiceCode    OPTIONAL,
 *     networkSignalInfo    [10] ExternalSignalInfo    OPTIONAL,
 *     camelInfo    [11] CamelInfo    OPTIONAL,
 *     suppressionOfAnnouncement    [12] SuppressionOfAnnouncement    OPTIONAL,
 *     extensionContainer    [13] ExtensionContainer    OPTIONAL,
 *     ...,
 *     alertingPattern    [14] AlertingPattern    OPTIONAL,
 *     ccbs-Call    [15] NULL    OPTIONAL,
 *     supportedCCBS-Phase    [16]    SupportedCCBS-Phase    OPTIONAL,
 *     additionalSignalInfo    [17] Ext-ExternalSignalInfo    OPTIONAL,
 *     istSupportIndicator    [18] IST-SupportIndicator    OPTIONAL,
 *     pre-pagingSupported    [19]    NULL    OPTIONAL,
 *     callDiversionTreatmentIndicator    [20]    CallDiversionTreatmentIndicator    OPTIONAL,
 *     longFTN-Supported    [21]    NULL    OPTIONAL,
 *     suppress-VT-CSI    [22]    NULL    OPTIONAL,
 *     suppressIncomingCallBarring    [23]    NULL    OPTIONAL,
 *     gsmSCF-InitiatedCall    [24]    NULL    OPTIONAL,
 *     basicServiceGroup2    [25] Ext-BasicServiceCode    OPTIONAL,
 *     networkSignalInfo2    [26] ExternalSignalInfo    OPTIONAL,
 *     suppressMTSS    [27] SuppressMTSS    OPTIONAL,
 *     mtRoamingRetrySupported    [28] NULL    OPTIONAL,
 *     callPriority    [29]    EMLPP-Priority    OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class SendRoutingInfoArg {
    constructor (
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `cug_CheckInfo`.
         * @public
         * @readonly
         */
        readonly cug_CheckInfo: OPTIONAL<CUG_CheckInfo>,
        /**
         * @summary `numberOfForwarding`.
         * @public
         * @readonly
         */
        readonly numberOfForwarding: OPTIONAL<NumberOfForwarding>,
        /**
         * @summary `interrogationType`.
         * @public
         * @readonly
         */
        readonly interrogationType: InterrogationType,
        /**
         * @summary `or_Interrogation`.
         * @public
         * @readonly
         */
        readonly or_Interrogation: OPTIONAL<NULL>,
        /**
         * @summary `or_Capability`.
         * @public
         * @readonly
         */
        readonly or_Capability: OPTIONAL<OR_Phase>,
        /**
         * @summary `gmsc_OrGsmSCF_Address`.
         * @public
         * @readonly
         */
        readonly gmsc_OrGsmSCF_Address: ISDN_AddressString,
        /**
         * @summary `callReferenceNumber`.
         * @public
         * @readonly
         */
        readonly callReferenceNumber: OPTIONAL<CallReferenceNumber>,
        /**
         * @summary `forwardingReason`.
         * @public
         * @readonly
         */
        readonly forwardingReason: OPTIONAL<ForwardingReason>,
        /**
         * @summary `basicServiceGroup`.
         * @public
         * @readonly
         */
        readonly basicServiceGroup: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `networkSignalInfo`.
         * @public
         * @readonly
         */
        readonly networkSignalInfo: OPTIONAL<ExternalSignalInfo>,
        /**
         * @summary `camelInfo`.
         * @public
         * @readonly
         */
        readonly camelInfo: OPTIONAL<CamelInfo>,
        /**
         * @summary `suppressionOfAnnouncement`.
         * @public
         * @readonly
         */
        readonly suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `alertingPattern`.
         * @public
         * @readonly
         */
        readonly alertingPattern: OPTIONAL<AlertingPattern>,
        /**
         * @summary `ccbs_Call`.
         * @public
         * @readonly
         */
        readonly ccbs_Call: OPTIONAL<NULL>,
        /**
         * @summary `supportedCCBS_Phase`.
         * @public
         * @readonly
         */
        readonly supportedCCBS_Phase: OPTIONAL<SupportedCCBS_Phase>,
        /**
         * @summary `additionalSignalInfo`.
         * @public
         * @readonly
         */
        readonly additionalSignalInfo: OPTIONAL<Ext_ExternalSignalInfo>,
        /**
         * @summary `istSupportIndicator`.
         * @public
         * @readonly
         */
        readonly istSupportIndicator: OPTIONAL<IST_SupportIndicator>,
        /**
         * @summary `pre_pagingSupported`.
         * @public
         * @readonly
         */
        readonly pre_pagingSupported: OPTIONAL<NULL>,
        /**
         * @summary `callDiversionTreatmentIndicator`.
         * @public
         * @readonly
         */
        readonly callDiversionTreatmentIndicator: OPTIONAL<CallDiversionTreatmentIndicator>,
        /**
         * @summary `longFTN_Supported`.
         * @public
         * @readonly
         */
        readonly longFTN_Supported: OPTIONAL<NULL>,
        /**
         * @summary `suppress_VT_CSI`.
         * @public
         * @readonly
         */
        readonly suppress_VT_CSI: OPTIONAL<NULL>,
        /**
         * @summary `suppressIncomingCallBarring`.
         * @public
         * @readonly
         */
        readonly suppressIncomingCallBarring: OPTIONAL<NULL>,
        /**
         * @summary `gsmSCF_InitiatedCall`.
         * @public
         * @readonly
         */
        readonly gsmSCF_InitiatedCall: OPTIONAL<NULL>,
        /**
         * @summary `basicServiceGroup2`.
         * @public
         * @readonly
         */
        readonly basicServiceGroup2: OPTIONAL<Ext_BasicServiceCode>,
        /**
         * @summary `networkSignalInfo2`.
         * @public
         * @readonly
         */
        readonly networkSignalInfo2: OPTIONAL<ExternalSignalInfo>,
        /**
         * @summary `suppressMTSS`.
         * @public
         * @readonly
         */
        readonly suppressMTSS: OPTIONAL<SuppressMTSS>,
        /**
         * @summary `mtRoamingRetrySupported`.
         * @public
         * @readonly
         */
        readonly mtRoamingRetrySupported: OPTIONAL<NULL>,
        /**
         * @summary `callPriority`.
         * @public
         * @readonly
         */
        readonly callPriority: OPTIONAL<EMLPP_Priority>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SendRoutingInfoArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendRoutingInfoArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendRoutingInfoArg`.
     * @returns {SendRoutingInfoArg}
     */
    public static _from_object (_o: { [_K in keyof (SendRoutingInfoArg)]: (SendRoutingInfoArg)[_K] }): SendRoutingInfoArg {
        return new SendRoutingInfoArg(_o.msisdn, _o.cug_CheckInfo, _o.numberOfForwarding, _o.interrogationType, _o.or_Interrogation, _o.or_Capability, _o.gmsc_OrGsmSCF_Address, _o.callReferenceNumber, _o.forwardingReason, _o.basicServiceGroup, _o.networkSignalInfo, _o.camelInfo, _o.suppressionOfAnnouncement, _o.extensionContainer, _o.alertingPattern, _o.ccbs_Call, _o.supportedCCBS_Phase, _o.additionalSignalInfo, _o.istSupportIndicator, _o.pre_pagingSupported, _o.callDiversionTreatmentIndicator, _o.longFTN_Supported, _o.suppress_VT_CSI, _o.suppressIncomingCallBarring, _o.gsmSCF_InitiatedCall, _o.basicServiceGroup2, _o.networkSignalInfo2, _o.suppressMTSS, _o.mtRoamingRetrySupported, _o.callPriority, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `interrogationType`
         * @public
         * @static
         */

    public static _enum_for_interrogationType = _enum_for_InterrogationType;        /**
         * @summary The enum used as the type of the component `forwardingReason`
         * @public
         * @static
         */

    public static _enum_for_forwardingReason = _enum_for_ForwardingReason;        /**
         * @summary The enum used as the type of the component `istSupportIndicator`
         * @public
         * @static
         */

    public static _enum_for_istSupportIndicator = _enum_for_IST_SupportIndicator;
}

/**
 * @summary The Leading Root Component Types of SendRoutingInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendRoutingInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("cug-CheckInfo", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("numberOfForwarding", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("interrogationType", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("or-Interrogation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("or-Capability", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("gmsc-OrGsmSCF-Address", false, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("callReferenceNumber", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("forwardingReason", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("basicServiceGroup", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("networkSignalInfo", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("camelInfo", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("suppressionOfAnnouncement", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of SendRoutingInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendRoutingInfoArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendRoutingInfoArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendRoutingInfoArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 14)),
    new $.ComponentSpec("ccbs-Call", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("supportedCCBS-Phase", true, $.hasTag(_TagClass.context, 16)),
    new $.ComponentSpec("additionalSignalInfo", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("istSupportIndicator", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("pre-pagingSupported", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("callDiversionTreatmentIndicator", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("longFTN-Supported", true, $.hasTag(_TagClass.context, 21)),
    new $.ComponentSpec("suppress-VT-CSI", true, $.hasTag(_TagClass.context, 22)),
    new $.ComponentSpec("suppressIncomingCallBarring", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("gsmSCF-InitiatedCall", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("basicServiceGroup2", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("networkSignalInfo2", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("suppressMTSS", true, $.hasTag(_TagClass.context, 27)),
    new $.ComponentSpec("mtRoamingRetrySupported", true, $.hasTag(_TagClass.context, 28)),
    new $.ComponentSpec("callPriority", true, $.hasTag(_TagClass.context, 29))
];

let _cached_decoder_for_SendRoutingInfoArg: $.ASN1Decoder<SendRoutingInfoArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendRoutingInfoArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendRoutingInfoArg (el: _Element): SendRoutingInfoArg {
    if (!_cached_decoder_for_SendRoutingInfoArg) { _cached_decoder_for_SendRoutingInfoArg = function (el: _Element): SendRoutingInfoArg {
    let msisdn!: ISDN_AddressString;
    let cug_CheckInfo: OPTIONAL<CUG_CheckInfo> = undefined;
    let numberOfForwarding: OPTIONAL<NumberOfForwarding> = undefined;
    let interrogationType!: InterrogationType;
    let or_Interrogation: OPTIONAL<NULL> = undefined;
    let or_Capability: OPTIONAL<OR_Phase> = undefined;
    let gmsc_OrGsmSCF_Address!: ISDN_AddressString;
    let callReferenceNumber: OPTIONAL<CallReferenceNumber> = undefined;
    let forwardingReason: OPTIONAL<ForwardingReason> = undefined;
    let basicServiceGroup: OPTIONAL<Ext_BasicServiceCode> = undefined;
    let networkSignalInfo: OPTIONAL<ExternalSignalInfo> = undefined;
    let camelInfo: OPTIONAL<CamelInfo> = undefined;
    let suppressionOfAnnouncement: OPTIONAL<SuppressionOfAnnouncement> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let alertingPattern: OPTIONAL<AlertingPattern> = undefined;
    let ccbs_Call: OPTIONAL<NULL> = undefined;
    let supportedCCBS_Phase: OPTIONAL<SupportedCCBS_Phase> = undefined;
    let additionalSignalInfo: OPTIONAL<Ext_ExternalSignalInfo> = undefined;
    let istSupportIndicator: OPTIONAL<IST_SupportIndicator> = undefined;
    let pre_pagingSupported: OPTIONAL<NULL> = undefined;
    let callDiversionTreatmentIndicator: OPTIONAL<CallDiversionTreatmentIndicator> = undefined;
    let longFTN_Supported: OPTIONAL<NULL> = undefined;
    let suppress_VT_CSI: OPTIONAL<NULL> = undefined;
    let suppressIncomingCallBarring: OPTIONAL<NULL> = undefined;
    let gsmSCF_InitiatedCall: OPTIONAL<NULL> = undefined;
    let basicServiceGroup2: OPTIONAL<Ext_BasicServiceCode> = undefined;
    let networkSignalInfo2: OPTIONAL<ExternalSignalInfo> = undefined;
    let suppressMTSS: OPTIONAL<SuppressMTSS> = undefined;
    let mtRoamingRetrySupported: OPTIONAL<NULL> = undefined;
    let callPriority: OPTIONAL<EMLPP_Priority> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msisdn": (_el: _Element): void => { msisdn = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "cug-CheckInfo": (_el: _Element): void => { cug_CheckInfo = $._decode_implicit<CUG_CheckInfo>(() => _decode_CUG_CheckInfo)(_el); },
        "numberOfForwarding": (_el: _Element): void => { numberOfForwarding = $._decode_implicit<NumberOfForwarding>(() => _decode_NumberOfForwarding)(_el); },
        "interrogationType": (_el: _Element): void => { interrogationType = $._decode_implicit<InterrogationType>(() => _decode_InterrogationType)(_el); },
        "or-Interrogation": (_el: _Element): void => { or_Interrogation = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "or-Capability": (_el: _Element): void => { or_Capability = $._decode_implicit<OR_Phase>(() => _decode_OR_Phase)(_el); },
        "gmsc-OrGsmSCF-Address": (_el: _Element): void => { gmsc_OrGsmSCF_Address = $._decode_implicit<ISDN_AddressString>(() => _decode_ISDN_AddressString)(_el); },
        "callReferenceNumber": (_el: _Element): void => { callReferenceNumber = $._decode_implicit<CallReferenceNumber>(() => _decode_CallReferenceNumber)(_el); },
        "forwardingReason": (_el: _Element): void => { forwardingReason = $._decode_implicit<ForwardingReason>(() => _decode_ForwardingReason)(_el); },
        "basicServiceGroup": (_el: _Element): void => { basicServiceGroup = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "networkSignalInfo": (_el: _Element): void => { networkSignalInfo = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "camelInfo": (_el: _Element): void => { camelInfo = $._decode_implicit<CamelInfo>(() => _decode_CamelInfo)(_el); },
        "suppressionOfAnnouncement": (_el: _Element): void => { suppressionOfAnnouncement = $._decode_implicit<SuppressionOfAnnouncement>(() => _decode_SuppressionOfAnnouncement)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "ccbs-Call": (_el: _Element): void => { ccbs_Call = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "supportedCCBS-Phase": (_el: _Element): void => { supportedCCBS_Phase = $._decode_implicit<SupportedCCBS_Phase>(() => _decode_SupportedCCBS_Phase)(_el); },
        "additionalSignalInfo": (_el: _Element): void => { additionalSignalInfo = $._decode_implicit<Ext_ExternalSignalInfo>(() => _decode_Ext_ExternalSignalInfo)(_el); },
        "istSupportIndicator": (_el: _Element): void => { istSupportIndicator = $._decode_implicit<IST_SupportIndicator>(() => _decode_IST_SupportIndicator)(_el); },
        "pre-pagingSupported": (_el: _Element): void => { pre_pagingSupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "callDiversionTreatmentIndicator": (_el: _Element): void => { callDiversionTreatmentIndicator = $._decode_implicit<CallDiversionTreatmentIndicator>(() => _decode_CallDiversionTreatmentIndicator)(_el); },
        "longFTN-Supported": (_el: _Element): void => { longFTN_Supported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppress-VT-CSI": (_el: _Element): void => { suppress_VT_CSI = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "suppressIncomingCallBarring": (_el: _Element): void => { suppressIncomingCallBarring = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "gsmSCF-InitiatedCall": (_el: _Element): void => { gsmSCF_InitiatedCall = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "basicServiceGroup2": (_el: _Element): void => { basicServiceGroup2 = $._decode_explicit<Ext_BasicServiceCode>(() => _decode_Ext_BasicServiceCode)(_el); },
        "networkSignalInfo2": (_el: _Element): void => { networkSignalInfo2 = $._decode_implicit<ExternalSignalInfo>(() => _decode_ExternalSignalInfo)(_el); },
        "suppressMTSS": (_el: _Element): void => { suppressMTSS = $._decode_implicit<SuppressMTSS>(() => _decode_SuppressMTSS)(_el); },
        "mtRoamingRetrySupported": (_el: _Element): void => { mtRoamingRetrySupported = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "callPriority": (_el: _Element): void => { callPriority = $._decode_implicit<EMLPP_Priority>(() => _decode_EMLPP_Priority)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendRoutingInfoArg,
        _extension_additions_list_spec_for_SendRoutingInfoArg,
        _root_component_type_list_2_spec_for_SendRoutingInfoArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SendRoutingInfoArg(
        msisdn,
        cug_CheckInfo,
        numberOfForwarding,
        interrogationType,
        or_Interrogation,
        or_Capability,
        gmsc_OrGsmSCF_Address,
        callReferenceNumber,
        forwardingReason,
        basicServiceGroup,
        networkSignalInfo,
        camelInfo,
        suppressionOfAnnouncement,
        extensionContainer,
        alertingPattern,
        ccbs_Call,
        supportedCCBS_Phase,
        additionalSignalInfo,
        istSupportIndicator,
        pre_pagingSupported,
        callDiversionTreatmentIndicator,
        longFTN_Supported,
        suppress_VT_CSI,
        suppressIncomingCallBarring,
        gsmSCF_InitiatedCall,
        basicServiceGroup2,
        networkSignalInfo2,
        suppressMTSS,
        mtRoamingRetrySupported,
        callPriority,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SendRoutingInfoArg(el);
}

let _cached_encoder_for_SendRoutingInfoArg: $.ASN1Encoder<SendRoutingInfoArg> | null = null;

/**
 * @summary Encodes a(n) SendRoutingInfoArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendRoutingInfoArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendRoutingInfoArg (value: SendRoutingInfoArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendRoutingInfoArg) { _cached_encoder_for_SendRoutingInfoArg = function (value: SendRoutingInfoArg, elGetter: $.ASN1Encoder<SendRoutingInfoArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_ISDN_AddressString, $.BER)(value.msisdn, $.BER),
            /* IF_ABSENT  */ ((value.cug_CheckInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_CUG_CheckInfo, $.BER)(value.cug_CheckInfo, $.BER)),
            /* IF_ABSENT  */ ((value.numberOfForwarding === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_NumberOfForwarding, $.BER)(value.numberOfForwarding, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_InterrogationType, $.BER)(value.interrogationType, $.BER),
            /* IF_ABSENT  */ ((value.or_Interrogation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeNull, $.BER)(value.or_Interrogation, $.BER)),
            /* IF_ABSENT  */ ((value.or_Capability === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_OR_Phase, $.BER)(value.or_Capability, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 6, () => _encode_ISDN_AddressString, $.BER)(value.gmsc_OrGsmSCF_Address, $.BER),
            /* IF_ABSENT  */ ((value.callReferenceNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_CallReferenceNumber, $.BER)(value.callReferenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.forwardingReason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_ForwardingReason, $.BER)(value.forwardingReason, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroup === undefined) ? undefined : $._encode_explicit(_TagClass.context, 9, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicServiceGroup, $.BER)),
            /* IF_ABSENT  */ ((value.networkSignalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_ExternalSignalInfo, $.BER)(value.networkSignalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.camelInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_CamelInfo, $.BER)(value.camelInfo, $.BER)),
            /* IF_ABSENT  */ ((value.suppressionOfAnnouncement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => _encode_SuppressionOfAnnouncement, $.BER)(value.suppressionOfAnnouncement, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.alertingPattern === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER)),
            /* IF_ABSENT  */ ((value.ccbs_Call === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.ccbs_Call, $.BER)),
            /* IF_ABSENT  */ ((value.supportedCCBS_Phase === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SupportedCCBS_Phase, $.BER)(value.supportedCCBS_Phase, $.BER)),
            /* IF_ABSENT  */ ((value.additionalSignalInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_Ext_ExternalSignalInfo, $.BER)(value.additionalSignalInfo, $.BER)),
            /* IF_ABSENT  */ ((value.istSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_IST_SupportIndicator, $.BER)(value.istSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.pre_pagingSupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 19, () => $._encodeNull, $.BER)(value.pre_pagingSupported, $.BER)),
            /* IF_ABSENT  */ ((value.callDiversionTreatmentIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 20, () => _encode_CallDiversionTreatmentIndicator, $.BER)(value.callDiversionTreatmentIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.longFTN_Supported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 21, () => $._encodeNull, $.BER)(value.longFTN_Supported, $.BER)),
            /* IF_ABSENT  */ ((value.suppress_VT_CSI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 22, () => $._encodeNull, $.BER)(value.suppress_VT_CSI, $.BER)),
            /* IF_ABSENT  */ ((value.suppressIncomingCallBarring === undefined) ? undefined : $._encode_implicit(_TagClass.context, 23, () => $._encodeNull, $.BER)(value.suppressIncomingCallBarring, $.BER)),
            /* IF_ABSENT  */ ((value.gsmSCF_InitiatedCall === undefined) ? undefined : $._encode_implicit(_TagClass.context, 24, () => $._encodeNull, $.BER)(value.gsmSCF_InitiatedCall, $.BER)),
            /* IF_ABSENT  */ ((value.basicServiceGroup2 === undefined) ? undefined : $._encode_explicit(_TagClass.context, 25, () => _encode_Ext_BasicServiceCode, $.BER)(value.basicServiceGroup2, $.BER)),
            /* IF_ABSENT  */ ((value.networkSignalInfo2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 26, () => _encode_ExternalSignalInfo, $.BER)(value.networkSignalInfo2, $.BER)),
            /* IF_ABSENT  */ ((value.suppressMTSS === undefined) ? undefined : $._encode_implicit(_TagClass.context, 27, () => _encode_SuppressMTSS, $.BER)(value.suppressMTSS, $.BER)),
            /* IF_ABSENT  */ ((value.mtRoamingRetrySupported === undefined) ? undefined : $._encode_implicit(_TagClass.context, 28, () => $._encodeNull, $.BER)(value.mtRoamingRetrySupported, $.BER)),
            /* IF_ABSENT  */ ((value.callPriority === undefined) ? undefined : $._encode_implicit(_TagClass.context, 29, () => _encode_EMLPP_Priority, $.BER)(value.callPriority, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendRoutingInfoArg(value, elGetter);
}


/* eslint-enable */
