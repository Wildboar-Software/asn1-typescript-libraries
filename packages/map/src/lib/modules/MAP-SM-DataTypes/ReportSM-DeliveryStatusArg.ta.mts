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
// export { ISDN_AddressString, _decode_ISDN_AddressString, _encode_ISDN_AddressString } from "../MAP-CommonDataTypes/ISDN-AddressString.ta.mjs";
import { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
// export { AddressString, _decode_AddressString, _encode_AddressString } from "../MAP-CommonDataTypes/AddressString.ta.mjs";
import { SM_DeliveryOutcome, _enum_for_SM_DeliveryOutcome, SM_DeliveryOutcome_memoryCapacityExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryCapacityExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_absentSubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, absentSubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_successfulTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, successfulTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_DeliveryOutcome, _encode_SM_DeliveryOutcome } from "../MAP-SM-DataTypes/SM-DeliveryOutcome.ta.mjs";
// export { SM_DeliveryOutcome, _enum_for_SM_DeliveryOutcome, SM_DeliveryOutcome_memoryCapacityExceeded /* IMPORTED_LONG_ENUMERATION_ITEM */, memoryCapacityExceeded /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_absentSubscriber /* IMPORTED_LONG_ENUMERATION_ITEM */, absentSubscriber /* IMPORTED_SHORT_ENUMERATION_ITEM */, SM_DeliveryOutcome_successfulTransfer /* IMPORTED_LONG_ENUMERATION_ITEM */, successfulTransfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SM_DeliveryOutcome, _encode_SM_DeliveryOutcome } from "../MAP-SM-DataTypes/SM-DeliveryOutcome.ta.mjs";
import { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
// export { AbsentSubscriberDiagnosticSM, _decode_AbsentSubscriberDiagnosticSM, _encode_AbsentSubscriberDiagnosticSM } from "../MAP-ER-DataTypes/AbsentSubscriberDiagnosticSM.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
// export { IMSI, _decode_IMSI, _encode_IMSI } from "../MAP-CommonDataTypes/IMSI.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../MAP-SM-DataTypes/CorrelationID.ta.mjs";
import { SMServingNodeAddressList, _decode_SMServingNodeAddressList, _encode_SMServingNodeAddressList } from "../MAP-SM-DataTypes/SMServingNodeAddressList.ta.mjs";
// export { SMServingNodeAddressList, _decode_SMServingNodeAddressList, _encode_SMServingNodeAddressList } from "../MAP-SM-DataTypes/SMServingNodeAddressList.ta.mjs";


/**
 * @summary ReportSM_DeliveryStatusArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReportSM-DeliveryStatusArg ::= SEQUENCE {
 *     msisdn    ISDN-AddressString,
 *     serviceCentreAddress    AddressString,
 *     sm-DeliveryOutcome    SM-DeliveryOutcome,
 *     absentSubscriberDiagnosticSM    [0] AbsentSubscriberDiagnosticSM
 *         OPTIONAL,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ...,
 *     gprsSupportIndicator    [2]    NULL    OPTIONAL,
 *     -- gprsSupportIndicator is set only if the SMS-GMSC supports 
 *     -- handling of two delivery outcomes
 *     deliveryOutcomeIndicator    [3]    NULL    OPTIONAL,
 *     -- DeliveryOutcomeIndicator is set when the SM-DeliveryOutcome
 *     -- is for GPRS
 *     additionalSM-DeliveryOutcome    [4]    SM-DeliveryOutcome    OPTIONAL,
 *     -- If received, additionalSM-DeliveryOutcome is for GPRS
 *     -- If DeliveryOutcomeIndicator is set, then AdditionalSM-DeliveryOutcome shall be absent
 *     additionalAbsentSubscriberDiagnosticSM    [5]    AbsentSubscriberDiagnosticSM OPTIONAL,
 *     -- If received additionalAbsentSubscriberDiagnosticSM is for GPRS
 *     -- If DeliveryOutcomeIndicator is set, then AdditionalAbsentSubscriberDiagnosticSM 
 *     -- shall be absent
 *     ip-sm-gw-Indicator    [6]    NULL    OPTIONAL,
 *     -- the ip-sm-gw indicator indicates by its presence that sm-deliveryOutcome
 *     -- is for delivery via IMS
 *     -- If present, deliveryOutcomeIndicator shall be absent.
 *     ip-sm-gw-sm-deliveryOutcome    [7]    SM-DeliveryOutcome    OPTIONAL, 
 *     -- If received ip-sm-gw-sm-deliveryOutcome is for delivery via IMS
 *     -- If ip-sm-gw-Indicator is set, then ip-sm-gw-sm-deliveryOutcome shall be absent
 *     ip-sm-gw-absentSubscriberDiagnosticSM    [8]    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     -- If received ip-sm-gw-sm-absentSubscriberDiagnosticSM is for delivery via IMS
 *     -- If ip-sm-gw-Indicator is set, then ip-sm-gw-sm-absentSubscriberDiagnosticSM 
 *     -- shall be absent
 *     imsi    [9] IMSI    OPTIONAL,
 *     singleAttemptDelivery    [10] NULL    OPTIONAL,
 *     correlationID    [11]    CorrelationID    OPTIONAL,
 *     smsf-3gpp-deliveryOutcomeIndicator    [12]    NULL    OPTIONAL,
 *     -- smsf-3gpp-deliveryOutcome is set when the SM-DeliveryOutcome
 *     -- is for 3GPP-SMSF
 *     smsf-3gpp-deliveryOutcome    [13]    SM-DeliveryOutcome    OPTIONAL,
 *     -- If smsf-3gpp-deliveryOutcomeIndicator is set, then smsf-3gpp-deliveryOutcome
 *     -- shall be absent
 *     smsf-3gpp-absentSubscriberDiagSM    [14]    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     -- If smsf-3gpp-deliveryOutcomeIndicator is set, then
 *     -- smsf-3gpp-absentSubscriberDiagSM shall be absent
 *     smsf-non-3gpp-deliveryOutcomeIndicator    [15]    NULL    OPTIONAL,
 *     -- smsf-non-3gpp-deliveryOutcomeIndicator is set when the SM-DeliveryOutcome
 *     -- is for non-3GPP-SMSF
 *     smsf-non-3gpp-deliveryOutcome    [16]    SM-DeliveryOutcome    OPTIONAL,
 *     -- If smsf-non-3gpp-deliveryOutcomeIndicator is set, then smsf-non-3gpp-deliveryOutcome
 *     -- shall be absent
 *     smsf-non-3gpp-absentSubscriberDiagSM    [17]    AbsentSubscriberDiagnosticSM    OPTIONAL,
 *     -- If smsf-non-3gpp-deliveryOutcomeIndicator is set, then
 *     -- smsf-non-3gpp-absentSubscriberDiagSM shall be absent
 *     failedSMServingNodes    [18]    SMServingNodeAddressList    OPTIONAL
 * 
 * }
 * ```
 * 
 * @class
 */
export
class ReportSM_DeliveryStatusArg {
    constructor (
        /**
         * @summary `msisdn`.
         * @public
         * @readonly
         */
        readonly msisdn: ISDN_AddressString,
        /**
         * @summary `serviceCentreAddress`.
         * @public
         * @readonly
         */
        readonly serviceCentreAddress: AddressString,
        /**
         * @summary `sm_DeliveryOutcome`.
         * @public
         * @readonly
         */
        readonly sm_DeliveryOutcome: SM_DeliveryOutcome,
        /**
         * @summary `absentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `gprsSupportIndicator`.
         * @public
         * @readonly
         */
        readonly gprsSupportIndicator: OPTIONAL<NULL>,
        /**
         * @summary `deliveryOutcomeIndicator`.
         * @public
         * @readonly
         */
        readonly deliveryOutcomeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `additionalSM_DeliveryOutcome`.
         * @public
         * @readonly
         */
        readonly additionalSM_DeliveryOutcome: OPTIONAL<SM_DeliveryOutcome>,
        /**
         * @summary `additionalAbsentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly additionalAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `ip_sm_gw_Indicator`.
         * @public
         * @readonly
         */
        readonly ip_sm_gw_Indicator: OPTIONAL<NULL>,
        /**
         * @summary `ip_sm_gw_sm_deliveryOutcome`.
         * @public
         * @readonly
         */
        readonly ip_sm_gw_sm_deliveryOutcome: OPTIONAL<SM_DeliveryOutcome>,
        /**
         * @summary `ip_sm_gw_absentSubscriberDiagnosticSM`.
         * @public
         * @readonly
         */
        readonly ip_sm_gw_absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `imsi`.
         * @public
         * @readonly
         */
        readonly imsi: OPTIONAL<IMSI>,
        /**
         * @summary `singleAttemptDelivery`.
         * @public
         * @readonly
         */
        readonly singleAttemptDelivery: OPTIONAL<NULL>,
        /**
         * @summary `correlationID`.
         * @public
         * @readonly
         */
        readonly correlationID: OPTIONAL<CorrelationID>,
        /**
         * @summary `smsf_3gpp_deliveryOutcomeIndicator`.
         * @public
         * @readonly
         */
        readonly smsf_3gpp_deliveryOutcomeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `smsf_3gpp_deliveryOutcome`.
         * @public
         * @readonly
         */
        readonly smsf_3gpp_deliveryOutcome: OPTIONAL<SM_DeliveryOutcome>,
        /**
         * @summary `smsf_3gpp_absentSubscriberDiagSM`.
         * @public
         * @readonly
         */
        readonly smsf_3gpp_absentSubscriberDiagSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `smsf_non_3gpp_deliveryOutcomeIndicator`.
         * @public
         * @readonly
         */
        readonly smsf_non_3gpp_deliveryOutcomeIndicator: OPTIONAL<NULL>,
        /**
         * @summary `smsf_non_3gpp_deliveryOutcome`.
         * @public
         * @readonly
         */
        readonly smsf_non_3gpp_deliveryOutcome: OPTIONAL<SM_DeliveryOutcome>,
        /**
         * @summary `smsf_non_3gpp_absentSubscriberDiagSM`.
         * @public
         * @readonly
         */
        readonly smsf_non_3gpp_absentSubscriberDiagSM: OPTIONAL<AbsentSubscriberDiagnosticSM>,
        /**
         * @summary `failedSMServingNodes`.
         * @public
         * @readonly
         */
        readonly failedSMServingNodes: OPTIONAL<SMServingNodeAddressList>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a ReportSM_DeliveryStatusArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReportSM_DeliveryStatusArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReportSM_DeliveryStatusArg`.
     * @returns {ReportSM_DeliveryStatusArg}
     */
    public static _from_object (_o: { [_K in keyof (ReportSM_DeliveryStatusArg)]: (ReportSM_DeliveryStatusArg)[_K] }): ReportSM_DeliveryStatusArg {
        return new ReportSM_DeliveryStatusArg(_o.msisdn, _o.serviceCentreAddress, _o.sm_DeliveryOutcome, _o.absentSubscriberDiagnosticSM, _o.extensionContainer, _o.gprsSupportIndicator, _o.deliveryOutcomeIndicator, _o.additionalSM_DeliveryOutcome, _o.additionalAbsentSubscriberDiagnosticSM, _o.ip_sm_gw_Indicator, _o.ip_sm_gw_sm_deliveryOutcome, _o.ip_sm_gw_absentSubscriberDiagnosticSM, _o.imsi, _o.singleAttemptDelivery, _o.correlationID, _o.smsf_3gpp_deliveryOutcomeIndicator, _o.smsf_3gpp_deliveryOutcome, _o.smsf_3gpp_absentSubscriberDiagSM, _o.smsf_non_3gpp_deliveryOutcomeIndicator, _o.smsf_non_3gpp_deliveryOutcome, _o.smsf_non_3gpp_absentSubscriberDiagSM, _o.failedSMServingNodes, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sm_DeliveryOutcome`
         * @public
         * @static
         */

    public static _enum_for_sm_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;        /**
         * @summary The enum used as the type of the component `additionalSM_DeliveryOutcome`
         * @public
         * @static
         */

    public static _enum_for_additionalSM_DeliveryOutcome = _enum_for_SM_DeliveryOutcome;        /**
         * @summary The enum used as the type of the component `ip_sm_gw_sm_deliveryOutcome`
         * @public
         * @static
         */

    public static _enum_for_ip_sm_gw_sm_deliveryOutcome = _enum_for_SM_DeliveryOutcome;        /**
         * @summary The enum used as the type of the component `smsf_3gpp_deliveryOutcome`
         * @public
         * @static
         */

    public static _enum_for_smsf_3gpp_deliveryOutcome = _enum_for_SM_DeliveryOutcome;        /**
         * @summary The enum used as the type of the component `smsf_non_3gpp_deliveryOutcome`
         * @public
         * @static
         */

    public static _enum_for_smsf_non_3gpp_deliveryOutcome = _enum_for_SM_DeliveryOutcome;
}

/**
 * @summary The Leading Root Component Types of ReportSM_DeliveryStatusArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReportSM_DeliveryStatusArg: $.ComponentSpec[] = [
    new $.ComponentSpec("msisdn", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("serviceCentreAddress", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("sm-DeliveryOutcome", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("absentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of ReportSM_DeliveryStatusArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReportSM_DeliveryStatusArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReportSM_DeliveryStatusArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReportSM_DeliveryStatusArg: $.ComponentSpec[] = [
    new $.ComponentSpec("gprsSupportIndicator", true, $.hasTag(_TagClass.context, 2), undefined, undefined),
    new $.ComponentSpec("deliveryOutcomeIndicator", true, $.hasTag(_TagClass.context, 3), undefined, undefined),
    new $.ComponentSpec("additionalSM-DeliveryOutcome", true, $.hasTag(_TagClass.context, 4), undefined, undefined),
    new $.ComponentSpec("additionalAbsentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 5), undefined, undefined),
    new $.ComponentSpec("ip-sm-gw-Indicator", true, $.hasTag(_TagClass.context, 6), undefined, undefined),
    new $.ComponentSpec("ip-sm-gw-sm-deliveryOutcome", true, $.hasTag(_TagClass.context, 7), undefined, undefined),
    new $.ComponentSpec("ip-sm-gw-absentSubscriberDiagnosticSM", true, $.hasTag(_TagClass.context, 8), undefined, undefined),
    new $.ComponentSpec("imsi", true, $.hasTag(_TagClass.context, 9), undefined, undefined),
    new $.ComponentSpec("singleAttemptDelivery", true, $.hasTag(_TagClass.context, 10), undefined, undefined),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 11), undefined, undefined),
    new $.ComponentSpec("smsf-3gpp-deliveryOutcomeIndicator", true, $.hasTag(_TagClass.context, 12), undefined, undefined),
    new $.ComponentSpec("smsf-3gpp-deliveryOutcome", true, $.hasTag(_TagClass.context, 13), undefined, undefined),
    new $.ComponentSpec("smsf-3gpp-absentSubscriberDiagSM", true, $.hasTag(_TagClass.context, 14), undefined, undefined),
    new $.ComponentSpec("smsf-non-3gpp-deliveryOutcomeIndicator", true, $.hasTag(_TagClass.context, 15), undefined, undefined),
    new $.ComponentSpec("smsf-non-3gpp-deliveryOutcome", true, $.hasTag(_TagClass.context, 16), undefined, undefined),
    new $.ComponentSpec("smsf-non-3gpp-absentSubscriberDiagSM", true, $.hasTag(_TagClass.context, 17), undefined, undefined),
    new $.ComponentSpec("failedSMServingNodes", true, $.hasTag(_TagClass.context, 18), undefined, undefined)
];

let _cached_decoder_for_ReportSM_DeliveryStatusArg: $.ASN1Decoder<ReportSM_DeliveryStatusArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReportSM_DeliveryStatusArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReportSM_DeliveryStatusArg (el: _Element): ReportSM_DeliveryStatusArg {
    if (!_cached_decoder_for_ReportSM_DeliveryStatusArg) { _cached_decoder_for_ReportSM_DeliveryStatusArg = function (el: _Element): ReportSM_DeliveryStatusArg {
    let msisdn!: ISDN_AddressString;
    let serviceCentreAddress!: AddressString;
    let sm_DeliveryOutcome!: SM_DeliveryOutcome;
    let absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let gprsSupportIndicator: OPTIONAL<NULL>;
    let deliveryOutcomeIndicator: OPTIONAL<NULL>;
    let additionalSM_DeliveryOutcome: OPTIONAL<SM_DeliveryOutcome>;
    let additionalAbsentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let ip_sm_gw_Indicator: OPTIONAL<NULL>;
    let ip_sm_gw_sm_deliveryOutcome: OPTIONAL<SM_DeliveryOutcome>;
    let ip_sm_gw_absentSubscriberDiagnosticSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let imsi: OPTIONAL<IMSI>;
    let singleAttemptDelivery: OPTIONAL<NULL>;
    let correlationID: OPTIONAL<CorrelationID>;
    let smsf_3gpp_deliveryOutcomeIndicator: OPTIONAL<NULL>;
    let smsf_3gpp_deliveryOutcome: OPTIONAL<SM_DeliveryOutcome>;
    let smsf_3gpp_absentSubscriberDiagSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let smsf_non_3gpp_deliveryOutcomeIndicator: OPTIONAL<NULL>;
    let smsf_non_3gpp_deliveryOutcome: OPTIONAL<SM_DeliveryOutcome>;
    let smsf_non_3gpp_absentSubscriberDiagSM: OPTIONAL<AbsentSubscriberDiagnosticSM>;
    let failedSMServingNodes: OPTIONAL<SMServingNodeAddressList>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "msisdn": (_el: _Element): void => { msisdn = _decode_ISDN_AddressString(_el); },
        "serviceCentreAddress": (_el: _Element): void => { serviceCentreAddress = _decode_AddressString(_el); },
        "sm-DeliveryOutcome": (_el: _Element): void => { sm_DeliveryOutcome = _decode_SM_DeliveryOutcome(_el); },
        "absentSubscriberDiagnosticSM": (_el: _Element): void => { absentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "gprsSupportIndicator": (_el: _Element): void => { gprsSupportIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "deliveryOutcomeIndicator": (_el: _Element): void => { deliveryOutcomeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "additionalSM-DeliveryOutcome": (_el: _Element): void => { additionalSM_DeliveryOutcome = $._decode_implicit<SM_DeliveryOutcome>(() => _decode_SM_DeliveryOutcome)(_el); },
        "additionalAbsentSubscriberDiagnosticSM": (_el: _Element): void => { additionalAbsentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "ip-sm-gw-Indicator": (_el: _Element): void => { ip_sm_gw_Indicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "ip-sm-gw-sm-deliveryOutcome": (_el: _Element): void => { ip_sm_gw_sm_deliveryOutcome = $._decode_implicit<SM_DeliveryOutcome>(() => _decode_SM_DeliveryOutcome)(_el); },
        "ip-sm-gw-absentSubscriberDiagnosticSM": (_el: _Element): void => { ip_sm_gw_absentSubscriberDiagnosticSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "imsi": (_el: _Element): void => { imsi = $._decode_implicit<IMSI>(() => _decode_IMSI)(_el); },
        "singleAttemptDelivery": (_el: _Element): void => { singleAttemptDelivery = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "smsf-3gpp-deliveryOutcomeIndicator": (_el: _Element): void => { smsf_3gpp_deliveryOutcomeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "smsf-3gpp-deliveryOutcome": (_el: _Element): void => { smsf_3gpp_deliveryOutcome = $._decode_implicit<SM_DeliveryOutcome>(() => _decode_SM_DeliveryOutcome)(_el); },
        "smsf-3gpp-absentSubscriberDiagSM": (_el: _Element): void => { smsf_3gpp_absentSubscriberDiagSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "smsf-non-3gpp-deliveryOutcomeIndicator": (_el: _Element): void => { smsf_non_3gpp_deliveryOutcomeIndicator = $._decode_implicit<NULL>(() => $._decodeNull)(_el); },
        "smsf-non-3gpp-deliveryOutcome": (_el: _Element): void => { smsf_non_3gpp_deliveryOutcome = $._decode_implicit<SM_DeliveryOutcome>(() => _decode_SM_DeliveryOutcome)(_el); },
        "smsf-non-3gpp-absentSubscriberDiagSM": (_el: _Element): void => { smsf_non_3gpp_absentSubscriberDiagSM = $._decode_implicit<AbsentSubscriberDiagnosticSM>(() => _decode_AbsentSubscriberDiagnosticSM)(_el); },
        "failedSMServingNodes": (_el: _Element): void => { failedSMServingNodes = $._decode_implicit<SMServingNodeAddressList>(() => _decode_SMServingNodeAddressList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReportSM_DeliveryStatusArg,
        _extension_additions_list_spec_for_ReportSM_DeliveryStatusArg,
        _root_component_type_list_2_spec_for_ReportSM_DeliveryStatusArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ReportSM_DeliveryStatusArg(
        msisdn,
        serviceCentreAddress,
        sm_DeliveryOutcome,
        absentSubscriberDiagnosticSM,
        extensionContainer,
        gprsSupportIndicator,
        deliveryOutcomeIndicator,
        additionalSM_DeliveryOutcome,
        additionalAbsentSubscriberDiagnosticSM,
        ip_sm_gw_Indicator,
        ip_sm_gw_sm_deliveryOutcome,
        ip_sm_gw_absentSubscriberDiagnosticSM,
        imsi,
        singleAttemptDelivery,
        correlationID,
        smsf_3gpp_deliveryOutcomeIndicator,
        smsf_3gpp_deliveryOutcome,
        smsf_3gpp_absentSubscriberDiagSM,
        smsf_non_3gpp_deliveryOutcomeIndicator,
        smsf_non_3gpp_deliveryOutcome,
        smsf_non_3gpp_absentSubscriberDiagSM,
        failedSMServingNodes,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ReportSM_DeliveryStatusArg(el);
}

let _cached_encoder_for_ReportSM_DeliveryStatusArg: $.ASN1Encoder<ReportSM_DeliveryStatusArg> | null = null;

/**
 * @summary Encodes a(n) ReportSM_DeliveryStatusArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReportSM_DeliveryStatusArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReportSM_DeliveryStatusArg (value: ReportSM_DeliveryStatusArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReportSM_DeliveryStatusArg) { _cached_encoder_for_ReportSM_DeliveryStatusArg = function (value: ReportSM_DeliveryStatusArg, elGetter: $.ASN1Encoder<ReportSM_DeliveryStatusArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ISDN_AddressString(value.msisdn, $.BER),
            /* REQUIRED   */ _encode_AddressString(value.serviceCentreAddress, $.BER),
            /* REQUIRED   */ _encode_SM_DeliveryOutcome(value.sm_DeliveryOutcome, $.BER),
            /* IF_ABSENT  */ ((value.absentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.absentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.gprsSupportIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeNull, $.BER)(value.gprsSupportIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.deliveryOutcomeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeNull, $.BER)(value.deliveryOutcomeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.additionalSM_DeliveryOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_SM_DeliveryOutcome, $.BER)(value.additionalSM_DeliveryOutcome, $.BER)),
            /* IF_ABSENT  */ ((value.additionalAbsentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.additionalAbsentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.ip_sm_gw_Indicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeNull, $.BER)(value.ip_sm_gw_Indicator, $.BER)),
            /* IF_ABSENT  */ ((value.ip_sm_gw_sm_deliveryOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 7, () => _encode_SM_DeliveryOutcome, $.BER)(value.ip_sm_gw_sm_deliveryOutcome, $.BER)),
            /* IF_ABSENT  */ ((value.ip_sm_gw_absentSubscriberDiagnosticSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 8, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.ip_sm_gw_absentSubscriberDiagnosticSM, $.BER)),
            /* IF_ABSENT  */ ((value.imsi === undefined) ? undefined : $._encode_implicit(_TagClass.context, 9, () => _encode_IMSI, $.BER)(value.imsi, $.BER)),
            /* IF_ABSENT  */ ((value.singleAttemptDelivery === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => $._encodeNull, $.BER)(value.singleAttemptDelivery, $.BER)),
            /* IF_ABSENT  */ ((value.correlationID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 11, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_3gpp_deliveryOutcomeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 12, () => $._encodeNull, $.BER)(value.smsf_3gpp_deliveryOutcomeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_3gpp_deliveryOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 13, () => _encode_SM_DeliveryOutcome, $.BER)(value.smsf_3gpp_deliveryOutcome, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_3gpp_absentSubscriberDiagSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 14, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.smsf_3gpp_absentSubscriberDiagSM, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_non_3gpp_deliveryOutcomeIndicator === undefined) ? undefined : $._encode_implicit(_TagClass.context, 15, () => $._encodeNull, $.BER)(value.smsf_non_3gpp_deliveryOutcomeIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_non_3gpp_deliveryOutcome === undefined) ? undefined : $._encode_implicit(_TagClass.context, 16, () => _encode_SM_DeliveryOutcome, $.BER)(value.smsf_non_3gpp_deliveryOutcome, $.BER)),
            /* IF_ABSENT  */ ((value.smsf_non_3gpp_absentSubscriberDiagSM === undefined) ? undefined : $._encode_implicit(_TagClass.context, 17, () => _encode_AbsentSubscriberDiagnosticSM, $.BER)(value.smsf_non_3gpp_absentSubscriberDiagSM, $.BER)),
            /* IF_ABSENT  */ ((value.failedSMServingNodes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 18, () => _encode_SMServingNodeAddressList, $.BER)(value.failedSMServingNodes, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ReportSM_DeliveryStatusArg(value, elGetter);
}


/* eslint-enable */
