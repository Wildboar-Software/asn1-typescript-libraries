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
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
// export { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
import { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
// export { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
import { PassiveLegTreatment, _decode_PassiveLegTreatment, _encode_PassiveLegTreatment } from "../AIN-Parameters/PassiveLegTreatment.ta.mjs";
// export { PassiveLegTreatment, _decode_PassiveLegTreatment, _encode_PassiveLegTreatment } from "../AIN-Parameters/PassiveLegTreatment.ta.mjs";
import { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
// export { GenericAddressList, _decode_GenericAddressList, _encode_GenericAddressList } from "../AIN-Parameters/GenericAddressList.ta.mjs";
import { CallingPartyBGID, _decode_CallingPartyBGID, _encode_CallingPartyBGID } from "../AIN-Parameters/CallingPartyBGID.ta.mjs";
// export { CallingPartyBGID, _decode_CallingPartyBGID, _encode_CallingPartyBGID } from "../AIN-Parameters/CallingPartyBGID.ta.mjs";
import { ForwardCallIndicator, _decode_ForwardCallIndicator, _encode_ForwardCallIndicator } from "../AIN-Parameters/ForwardCallIndicator.ta.mjs";
// export { ForwardCallIndicator, _decode_ForwardCallIndicator, _encode_ForwardCallIndicator } from "../AIN-Parameters/ForwardCallIndicator.ta.mjs";
import { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
// export { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
import { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
// export { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
import { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
// export { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
import { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
// export { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
import { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
// export { UserID, _decode_UserID, _encode_UserID } from "../AIN-Parameters/UserID.ta.mjs";
import { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
// export { BearerCapability, _decode_BearerCapability, _encode_BearerCapability } from "../AIN-Parameters/BearerCapability.ta.mjs";
import { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
// export { VerticalServiceCode, _decode_VerticalServiceCode, _encode_VerticalServiceCode } from "../AIN-Parameters/VerticalServiceCode.ta.mjs";
import { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
// export { AccessCode, _decode_AccessCode, _encode_AccessCode } from "../AIN-Parameters/AccessCode.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
import { NotificationDuration, _decode_NotificationDuration, _encode_NotificationDuration } from "../AIN-Parameters/NotificationDuration.ta.mjs";
// export { NotificationDuration, _decode_NotificationDuration, _encode_NotificationDuration } from "../AIN-Parameters/NotificationDuration.ta.mjs";
import { WakeUpDuration, _decode_WakeUpDuration, _encode_WakeUpDuration } from "../AIN-Parameters/WakeUpDuration.ta.mjs";
// export { WakeUpDuration, _decode_WakeUpDuration, _encode_WakeUpDuration } from "../AIN-Parameters/WakeUpDuration.ta.mjs";
import { OSIIndicator, _decode_OSIIndicator, _encode_OSIIndicator } from "../AIN-Parameters/OSIIndicator.ta.mjs";
// export { OSIIndicator, _decode_OSIIndicator, _encode_OSIIndicator } from "../AIN-Parameters/OSIIndicator.ta.mjs";
import { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
// export { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
import { OverflowBillingIndicator, _decode_OverflowBillingIndicator, _encode_OverflowBillingIndicator } from "../AIN-Parameters/OverflowBillingIndicator.ta.mjs";
// export { OverflowBillingIndicator, _decode_OverflowBillingIndicator, _encode_OverflowBillingIndicator } from "../AIN-Parameters/OverflowBillingIndicator.ta.mjs";
import { AMAAlternateBillingNumber, _decode_AMAAlternateBillingNumber, _encode_AMAAlternateBillingNumber } from "../AIN-Parameters/AMAAlternateBillingNumber.ta.mjs";
// export { AMAAlternateBillingNumber, _decode_AMAAlternateBillingNumber, _encode_AMAAlternateBillingNumber } from "../AIN-Parameters/AMAAlternateBillingNumber.ta.mjs";
import { AMABusinessCustomerID, _decode_AMABusinessCustomerID, _encode_AMABusinessCustomerID } from "../AIN-Parameters/AMABusinessCustomerID.ta.mjs";
// export { AMABusinessCustomerID, _decode_AMABusinessCustomerID, _encode_AMABusinessCustomerID } from "../AIN-Parameters/AMABusinessCustomerID.ta.mjs";
import { AMALineNumber, _decode_AMALineNumber, _encode_AMALineNumber } from "../AIN-Parameters/AMALineNumber.ta.mjs";
// export { AMALineNumber, _decode_AMALineNumber, _encode_AMALineNumber } from "../AIN-Parameters/AMALineNumber.ta.mjs";
import { AMAslpID, _decode_AMAslpID, _encode_AMAslpID } from "../AIN-Parameters/AMAslpID.ta.mjs";
// export { AMAslpID, _decode_AMAslpID, _encode_AMAslpID } from "../AIN-Parameters/AMAslpID.ta.mjs";
import { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
// export { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
// export { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";


/**
 * @summary CreateCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreateCallArg ::= SEQUENCE{
 *             calledPartyID                  CalledPartyID,
 *             callingPartyID                 CallingPartyID,
 *             chargeNumber                   ChargeNumber OPTIONAL,
 *             chargePartyStationType         ChargePartyStationType OPTIONAL,
 *             carrier                        Carrier OPTIONAL,
 *             alternateCarrier               AlternateCarrier OPTIONAL,
 *             secondAlternateCarrier         SecondAlternateCarrier OPTIONAL,
 *             passiveLegTreatment            PassiveLegTreatment OPTIONAL,
 *             genericAddressList             GenericAddressList OPTIONAL,
 *             callingPartyBGID               CallingPartyBGID OPTIONAL,
 *             forwardCallIndicator           ForwardCallIndicator OPTIONAL,
 *             serviceProviderID              ServiceProviderID OPTIONAL,
 *             serviceContext                 ServiceContext OPTIONAL,
 *             carrierUsage                   CarrierUsage OPTIONAL,
 *             controllingLegTreatment        ControllingLegTreatment OPTIONAL,
 *             userID                         UserID OPTIONAL,
 *             bearerCapability               BearerCapability OPTIONAL,
 *             verticalServiceCode            VerticalServiceCode OPTIONAL,
 *             accessCode                     AccessCode OPTIONAL,
 *             displayText                    DisplayText OPTIONAL,
 *             notificationDuration           NotificationDuration OPTIONAL,
 *             wakeUpDuration                 WakeUpDuration OPTIONAL,
 *             oSIIndicator                   OSIIndicator OPTIONAL,
 *             primaryBillingIndicator        PrimaryBillingIndicator OPTIONAL,
 *             overflowBillingIndicator       OverflowBillingIndicator OPTIONAL,
 *             aMAAlternateBillingNumber      AMAAlternateBillingNumber OPTIONAL,
 *             aMABusinessCustomerID          AMABusinessCustomerID OPTIONAL,
 *             aMALineNumberList              SEQUENCE SIZE(1..2) OF AMALineNumber OPTIONAL,
 *             aMAslpID                       [10] IMPLICIT AMAslpID OPTIONAL,
 *             aMAserviceProviderID           AMAServiceProviderID OPTIONAL,
 *             amp1                           Amp1 OPTIONAL,
 *             amp2                           Amp2 OPTIONAL,
 *             extensionParameter             [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             prefix                         Prefix OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class CreateCallArg {
    constructor (
        /**
         * @summary `calledPartyID`.
         * @public
         * @readonly
         */
        readonly calledPartyID: CalledPartyID,
        /**
         * @summary `callingPartyID`.
         * @public
         * @readonly
         */
        readonly callingPartyID: CallingPartyID,
        /**
         * @summary `chargeNumber`.
         * @public
         * @readonly
         */
        readonly chargeNumber: OPTIONAL<ChargeNumber>,
        /**
         * @summary `chargePartyStationType`.
         * @public
         * @readonly
         */
        readonly chargePartyStationType: OPTIONAL<ChargePartyStationType>,
        /**
         * @summary `carrier`.
         * @public
         * @readonly
         */
        readonly carrier: OPTIONAL<Carrier>,
        /**
         * @summary `alternateCarrier`.
         * @public
         * @readonly
         */
        readonly alternateCarrier: OPTIONAL<AlternateCarrier>,
        /**
         * @summary `secondAlternateCarrier`.
         * @public
         * @readonly
         */
        readonly secondAlternateCarrier: OPTIONAL<SecondAlternateCarrier>,
        /**
         * @summary `passiveLegTreatment`.
         * @public
         * @readonly
         */
        readonly passiveLegTreatment: OPTIONAL<PassiveLegTreatment>,
        /**
         * @summary `genericAddressList`.
         * @public
         * @readonly
         */
        readonly genericAddressList: OPTIONAL<GenericAddressList>,
        /**
         * @summary `callingPartyBGID`.
         * @public
         * @readonly
         */
        readonly callingPartyBGID: OPTIONAL<CallingPartyBGID>,
        /**
         * @summary `forwardCallIndicator`.
         * @public
         * @readonly
         */
        readonly forwardCallIndicator: OPTIONAL<ForwardCallIndicator>,
        /**
         * @summary `serviceProviderID`.
         * @public
         * @readonly
         */
        readonly serviceProviderID: OPTIONAL<ServiceProviderID>,
        /**
         * @summary `serviceContext`.
         * @public
         * @readonly
         */
        readonly serviceContext: OPTIONAL<ServiceContext>,
        /**
         * @summary `carrierUsage`.
         * @public
         * @readonly
         */
        readonly carrierUsage: OPTIONAL<CarrierUsage>,
        /**
         * @summary `controllingLegTreatment`.
         * @public
         * @readonly
         */
        readonly controllingLegTreatment: OPTIONAL<ControllingLegTreatment>,
        /**
         * @summary `userID`.
         * @public
         * @readonly
         */
        readonly userID: OPTIONAL<UserID>,
        /**
         * @summary `bearerCapability`.
         * @public
         * @readonly
         */
        readonly bearerCapability: OPTIONAL<BearerCapability>,
        /**
         * @summary `verticalServiceCode`.
         * @public
         * @readonly
         */
        readonly verticalServiceCode: OPTIONAL<VerticalServiceCode>,
        /**
         * @summary `accessCode`.
         * @public
         * @readonly
         */
        readonly accessCode: OPTIONAL<AccessCode>,
        /**
         * @summary `displayText`.
         * @public
         * @readonly
         */
        readonly displayText: OPTIONAL<DisplayText>,
        /**
         * @summary `notificationDuration`.
         * @public
         * @readonly
         */
        readonly notificationDuration: OPTIONAL<NotificationDuration>,
        /**
         * @summary `wakeUpDuration`.
         * @public
         * @readonly
         */
        readonly wakeUpDuration: OPTIONAL<WakeUpDuration>,
        /**
         * @summary `oSIIndicator`.
         * @public
         * @readonly
         */
        readonly oSIIndicator: OPTIONAL<OSIIndicator>,
        /**
         * @summary `primaryBillingIndicator`.
         * @public
         * @readonly
         */
        readonly primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>,
        /**
         * @summary `overflowBillingIndicator`.
         * @public
         * @readonly
         */
        readonly overflowBillingIndicator: OPTIONAL<OverflowBillingIndicator>,
        /**
         * @summary `aMAAlternateBillingNumber`.
         * @public
         * @readonly
         */
        readonly aMAAlternateBillingNumber: OPTIONAL<AMAAlternateBillingNumber>,
        /**
         * @summary `aMABusinessCustomerID`.
         * @public
         * @readonly
         */
        readonly aMABusinessCustomerID: OPTIONAL<AMABusinessCustomerID>,
        /**
         * @summary `aMALineNumberList`.
         * @public
         * @readonly
         */
        readonly aMALineNumberList: OPTIONAL<AMALineNumber[]>,
        /**
         * @summary `aMAslpID`.
         * @public
         * @readonly
         */
        readonly aMAslpID: OPTIONAL<AMAslpID>,
        /**
         * @summary `aMAserviceProviderID`.
         * @public
         * @readonly
         */
        readonly aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>,
        /**
         * @summary `amp1`.
         * @public
         * @readonly
         */
        readonly amp1: OPTIONAL<Amp1>,
        /**
         * @summary `amp2`.
         * @public
         * @readonly
         */
        readonly amp2: OPTIONAL<Amp2>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `prefix`.
         * @public
         * @readonly
         */
        readonly prefix: OPTIONAL<Prefix>
    ) {}

    /**
     * @summary Restructures an object into a CreateCallArg
     * @description
     * 
     * This takes an `object` and converts it to a `CreateCallArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreateCallArg`.
     * @returns {CreateCallArg}
     */
    public static _from_object (_o: { [_K in keyof (CreateCallArg)]: (CreateCallArg)[_K] }): CreateCallArg {
        return new CreateCallArg(_o.calledPartyID, _o.callingPartyID, _o.chargeNumber, _o.chargePartyStationType, _o.carrier, _o.alternateCarrier, _o.secondAlternateCarrier, _o.passiveLegTreatment, _o.genericAddressList, _o.callingPartyBGID, _o.forwardCallIndicator, _o.serviceProviderID, _o.serviceContext, _o.carrierUsage, _o.controllingLegTreatment, _o.userID, _o.bearerCapability, _o.verticalServiceCode, _o.accessCode, _o.displayText, _o.notificationDuration, _o.wakeUpDuration, _o.oSIIndicator, _o.primaryBillingIndicator, _o.overflowBillingIndicator, _o.aMAAlternateBillingNumber, _o.aMABusinessCustomerID, _o.aMALineNumberList, _o.aMAslpID, _o.aMAserviceProviderID, _o.amp1, _o.amp2, _o.extensionParameter, _o.prefix);
    }


}

/**
 * @summary The Leading Root Component Types of CreateCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreateCallArg: $.ComponentSpec[] = [
    new $.ComponentSpec("calledPartyID", false, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("callingPartyID", false, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("alternateCarrier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("secondAlternateCarrier", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("passiveLegTreatment", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("genericAddressList", true, $.hasTag(_TagClass.context, 107)),
    new $.ComponentSpec("callingPartyBGID", true, $.hasTag(_TagClass.context, 17)),
    new $.ComponentSpec("forwardCallIndicator", true, $.hasTag(_TagClass.context, 113)),
    new $.ComponentSpec("serviceProviderID", true, $.or($.hasTag(_TagClass.context, 87), $.hasTag(_TagClass.context, 106))),
    new $.ComponentSpec("serviceContext", true, $.hasTag(_TagClass.context, 83)),
    new $.ComponentSpec("carrierUsage", true, $.hasTag(_TagClass.context, 79)),
    new $.ComponentSpec("controllingLegTreatment", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("userID", true, $.hasTag(_TagClass.context, 53)),
    new $.ComponentSpec("bearerCapability", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("verticalServiceCode", true, $.hasTag(_TagClass.context, 54)),
    new $.ComponentSpec("accessCode", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("displayText", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("notificationDuration", true, $.hasTag(_TagClass.context, 128)),
    new $.ComponentSpec("wakeUpDuration", true, $.hasTag(_TagClass.context, 131)),
    new $.ComponentSpec("oSIIndicator", true, $.hasTag(_TagClass.context, 129)),
    new $.ComponentSpec("primaryBillingIndicator", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("overflowBillingIndicator", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("aMAAlternateBillingNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aMABusinessCustomerID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("aMALineNumberList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("aMAslpID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aMAserviceProviderID", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("prefix", true, $.hasTag(_TagClass.context, 148))
];

/**
 * @summary The Trailing Root Component Types of CreateCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreateCallArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreateCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreateCallArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreateCallArg: $.ASN1Decoder<CreateCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreateCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreateCallArg (el: _Element): CreateCallArg {
    if (!_cached_decoder_for_CreateCallArg) { _cached_decoder_for_CreateCallArg = function (el: _Element): CreateCallArg {
    let calledPartyID!: CalledPartyID;
    let callingPartyID!: CallingPartyID;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let carrier: OPTIONAL<Carrier>;
    let alternateCarrier: OPTIONAL<AlternateCarrier>;
    let secondAlternateCarrier: OPTIONAL<SecondAlternateCarrier>;
    let passiveLegTreatment: OPTIONAL<PassiveLegTreatment>;
    let genericAddressList: OPTIONAL<GenericAddressList>;
    let callingPartyBGID: OPTIONAL<CallingPartyBGID>;
    let forwardCallIndicator: OPTIONAL<ForwardCallIndicator>;
    let serviceProviderID: OPTIONAL<ServiceProviderID>;
    let serviceContext: OPTIONAL<ServiceContext>;
    let carrierUsage: OPTIONAL<CarrierUsage>;
    let controllingLegTreatment: OPTIONAL<ControllingLegTreatment>;
    let userID: OPTIONAL<UserID>;
    let bearerCapability: OPTIONAL<BearerCapability>;
    let verticalServiceCode: OPTIONAL<VerticalServiceCode>;
    let accessCode: OPTIONAL<AccessCode>;
    let displayText: OPTIONAL<DisplayText>;
    let notificationDuration: OPTIONAL<NotificationDuration>;
    let wakeUpDuration: OPTIONAL<WakeUpDuration>;
    let oSIIndicator: OPTIONAL<OSIIndicator>;
    let primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>;
    let overflowBillingIndicator: OPTIONAL<OverflowBillingIndicator>;
    let aMAAlternateBillingNumber: OPTIONAL<AMAAlternateBillingNumber>;
    let aMABusinessCustomerID: OPTIONAL<AMABusinessCustomerID>;
    let aMALineNumberList: OPTIONAL<AMALineNumber[]>;
    let aMAslpID: OPTIONAL<AMAslpID>;
    let aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let prefix: OPTIONAL<Prefix>;
    const callbacks: $.DecodingMap = {
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "alternateCarrier": (_el: _Element): void => { alternateCarrier = _decode_AlternateCarrier(_el); },
        "secondAlternateCarrier": (_el: _Element): void => { secondAlternateCarrier = _decode_SecondAlternateCarrier(_el); },
        "passiveLegTreatment": (_el: _Element): void => { passiveLegTreatment = _decode_PassiveLegTreatment(_el); },
        "genericAddressList": (_el: _Element): void => { genericAddressList = _decode_GenericAddressList(_el); },
        "callingPartyBGID": (_el: _Element): void => { callingPartyBGID = _decode_CallingPartyBGID(_el); },
        "forwardCallIndicator": (_el: _Element): void => { forwardCallIndicator = _decode_ForwardCallIndicator(_el); },
        "serviceProviderID": (_el: _Element): void => { serviceProviderID = _decode_ServiceProviderID(_el); },
        "serviceContext": (_el: _Element): void => { serviceContext = _decode_ServiceContext(_el); },
        "carrierUsage": (_el: _Element): void => { carrierUsage = _decode_CarrierUsage(_el); },
        "controllingLegTreatment": (_el: _Element): void => { controllingLegTreatment = _decode_ControllingLegTreatment(_el); },
        "userID": (_el: _Element): void => { userID = _decode_UserID(_el); },
        "bearerCapability": (_el: _Element): void => { bearerCapability = _decode_BearerCapability(_el); },
        "verticalServiceCode": (_el: _Element): void => { verticalServiceCode = _decode_VerticalServiceCode(_el); },
        "accessCode": (_el: _Element): void => { accessCode = _decode_AccessCode(_el); },
        "displayText": (_el: _Element): void => { displayText = _decode_DisplayText(_el); },
        "notificationDuration": (_el: _Element): void => { notificationDuration = _decode_NotificationDuration(_el); },
        "wakeUpDuration": (_el: _Element): void => { wakeUpDuration = _decode_WakeUpDuration(_el); },
        "oSIIndicator": (_el: _Element): void => { oSIIndicator = _decode_OSIIndicator(_el); },
        "primaryBillingIndicator": (_el: _Element): void => { primaryBillingIndicator = _decode_PrimaryBillingIndicator(_el); },
        "overflowBillingIndicator": (_el: _Element): void => { overflowBillingIndicator = _decode_OverflowBillingIndicator(_el); },
        "aMAAlternateBillingNumber": (_el: _Element): void => { aMAAlternateBillingNumber = _decode_AMAAlternateBillingNumber(_el); },
        "aMABusinessCustomerID": (_el: _Element): void => { aMABusinessCustomerID = _decode_AMABusinessCustomerID(_el); },
        "aMALineNumberList": (_el: _Element): void => { aMALineNumberList = $._decodeSequenceOf<AMALineNumber>(() => _decode_AMALineNumber)(_el); },
        "aMAslpID": (_el: _Element): void => { aMAslpID = $._decode_implicit<AMAslpID>(() => _decode_AMAslpID)(_el); },
        "aMAserviceProviderID": (_el: _Element): void => { aMAserviceProviderID = _decode_AMAServiceProviderID(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "prefix": (_el: _Element): void => { prefix = _decode_Prefix(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CreateCallArg,
        _extension_additions_list_spec_for_CreateCallArg,
        _root_component_type_list_2_spec_for_CreateCallArg,
        undefined,
    );
    return new CreateCallArg(
        calledPartyID,
        callingPartyID,
        chargeNumber,
        chargePartyStationType,
        carrier,
        alternateCarrier,
        secondAlternateCarrier,
        passiveLegTreatment,
        genericAddressList,
        callingPartyBGID,
        forwardCallIndicator,
        serviceProviderID,
        serviceContext,
        carrierUsage,
        controllingLegTreatment,
        userID,
        bearerCapability,
        verticalServiceCode,
        accessCode,
        displayText,
        notificationDuration,
        wakeUpDuration,
        oSIIndicator,
        primaryBillingIndicator,
        overflowBillingIndicator,
        aMAAlternateBillingNumber,
        aMABusinessCustomerID,
        aMALineNumberList,
        aMAslpID,
        aMAserviceProviderID,
        amp1,
        amp2,
        extensionParameter,
        prefix
    );
}; }
    return _cached_decoder_for_CreateCallArg(el);
}

let _cached_encoder_for_CreateCallArg: $.ASN1Encoder<CreateCallArg> | null = null;

/**
 * @summary Encodes a(n) CreateCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreateCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_CreateCallArg (value: CreateCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreateCallArg) { _cached_encoder_for_CreateCallArg = function (value: CreateCallArg, elGetter: $.ASN1Encoder<CreateCallArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CalledPartyID(value.calledPartyID, $.BER),
            /* REQUIRED   */ _encode_CallingPartyID(value.callingPartyID, $.BER),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.alternateCarrier === undefined) ? undefined : _encode_AlternateCarrier(value.alternateCarrier, $.BER)),
            /* IF_ABSENT  */ ((value.secondAlternateCarrier === undefined) ? undefined : _encode_SecondAlternateCarrier(value.secondAlternateCarrier, $.BER)),
            /* IF_ABSENT  */ ((value.passiveLegTreatment === undefined) ? undefined : _encode_PassiveLegTreatment(value.passiveLegTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.genericAddressList === undefined) ? undefined : _encode_GenericAddressList(value.genericAddressList, $.BER)),
            /* IF_ABSENT  */ ((value.callingPartyBGID === undefined) ? undefined : _encode_CallingPartyBGID(value.callingPartyBGID, $.BER)),
            /* IF_ABSENT  */ ((value.forwardCallIndicator === undefined) ? undefined : _encode_ForwardCallIndicator(value.forwardCallIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.serviceProviderID === undefined) ? undefined : _encode_ServiceProviderID(value.serviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.serviceContext === undefined) ? undefined : _encode_ServiceContext(value.serviceContext, $.BER)),
            /* IF_ABSENT  */ ((value.carrierUsage === undefined) ? undefined : _encode_CarrierUsage(value.carrierUsage, $.BER)),
            /* IF_ABSENT  */ ((value.controllingLegTreatment === undefined) ? undefined : _encode_ControllingLegTreatment(value.controllingLegTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.userID === undefined) ? undefined : _encode_UserID(value.userID, $.BER)),
            /* IF_ABSENT  */ ((value.bearerCapability === undefined) ? undefined : _encode_BearerCapability(value.bearerCapability, $.BER)),
            /* IF_ABSENT  */ ((value.verticalServiceCode === undefined) ? undefined : _encode_VerticalServiceCode(value.verticalServiceCode, $.BER)),
            /* IF_ABSENT  */ ((value.accessCode === undefined) ? undefined : _encode_AccessCode(value.accessCode, $.BER)),
            /* IF_ABSENT  */ ((value.displayText === undefined) ? undefined : _encode_DisplayText(value.displayText, $.BER)),
            /* IF_ABSENT  */ ((value.notificationDuration === undefined) ? undefined : _encode_NotificationDuration(value.notificationDuration, $.BER)),
            /* IF_ABSENT  */ ((value.wakeUpDuration === undefined) ? undefined : _encode_WakeUpDuration(value.wakeUpDuration, $.BER)),
            /* IF_ABSENT  */ ((value.oSIIndicator === undefined) ? undefined : _encode_OSIIndicator(value.oSIIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.primaryBillingIndicator === undefined) ? undefined : _encode_PrimaryBillingIndicator(value.primaryBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.overflowBillingIndicator === undefined) ? undefined : _encode_OverflowBillingIndicator(value.overflowBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.aMAAlternateBillingNumber === undefined) ? undefined : _encode_AMAAlternateBillingNumber(value.aMAAlternateBillingNumber, $.BER)),
            /* IF_ABSENT  */ ((value.aMABusinessCustomerID === undefined) ? undefined : _encode_AMABusinessCustomerID(value.aMABusinessCustomerID, $.BER)),
            /* IF_ABSENT  */ ((value.aMALineNumberList === undefined) ? undefined : $._encodeSequenceOf<AMALineNumber>(() => _encode_AMALineNumber, $.BER)(value.aMALineNumberList, $.BER)),
            /* IF_ABSENT  */ ((value.aMAslpID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AMAslpID, $.BER)(value.aMAslpID, $.BER)),
            /* IF_ABSENT  */ ((value.aMAserviceProviderID === undefined) ? undefined : _encode_AMAServiceProviderID(value.aMAserviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.prefix === undefined) ? undefined : _encode_Prefix(value.prefix, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CreateCallArg(value, elGetter);
}


/* eslint-enable */
