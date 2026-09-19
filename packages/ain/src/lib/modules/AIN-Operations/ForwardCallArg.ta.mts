/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
import { OutpulseNumber, _decode_OutpulseNumber, _encode_OutpulseNumber } from "../AIN-Parameters/OutpulseNumber.ta.mjs";
// export { OutpulseNumber, _decode_OutpulseNumber, _encode_OutpulseNumber } from "../AIN-Parameters/OutpulseNumber.ta.mjs";
import { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
// export { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
import { PrimaryTrunkGroup, _decode_PrimaryTrunkGroup, _encode_PrimaryTrunkGroup } from "../AIN-Parameters/PrimaryTrunkGroup.ta.mjs";
// export { PrimaryTrunkGroup, _decode_PrimaryTrunkGroup, _encode_PrimaryTrunkGroup } from "../AIN-Parameters/PrimaryTrunkGroup.ta.mjs";
import { AlternateTrunkGroup, _decode_AlternateTrunkGroup, _encode_AlternateTrunkGroup } from "../AIN-Parameters/AlternateTrunkGroup.ta.mjs";
// export { AlternateTrunkGroup, _decode_AlternateTrunkGroup, _encode_AlternateTrunkGroup } from "../AIN-Parameters/AlternateTrunkGroup.ta.mjs";
import { SecondAlternateTrunkGroup, _decode_SecondAlternateTrunkGroup, _encode_SecondAlternateTrunkGroup } from "../AIN-Parameters/SecondAlternateTrunkGroup.ta.mjs";
// export { SecondAlternateTrunkGroup, _decode_SecondAlternateTrunkGroup, _encode_SecondAlternateTrunkGroup } from "../AIN-Parameters/SecondAlternateTrunkGroup.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
// export { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
import { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
// export { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
import { PassiveLegTreatment, _decode_PassiveLegTreatment, _encode_PassiveLegTreatment } from "../AIN-Parameters/PassiveLegTreatment.ta.mjs";
// export { PassiveLegTreatment, _decode_PassiveLegTreatment, _encode_PassiveLegTreatment } from "../AIN-Parameters/PassiveLegTreatment.ta.mjs";
import { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
// export { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
import { AlternateBillingIndicator, _decode_AlternateBillingIndicator, _encode_AlternateBillingIndicator } from "../AIN-Parameters/AlternateBillingIndicator.ta.mjs";
// export { AlternateBillingIndicator, _decode_AlternateBillingIndicator, _encode_AlternateBillingIndicator } from "../AIN-Parameters/AlternateBillingIndicator.ta.mjs";
import { SecondAlternateBillingIndicator, _decode_SecondAlternateBillingIndicator, _encode_SecondAlternateBillingIndicator } from "../AIN-Parameters/SecondAlternateBillingIndicator.ta.mjs";
// export { SecondAlternateBillingIndicator, _decode_SecondAlternateBillingIndicator, _encode_SecondAlternateBillingIndicator } from "../AIN-Parameters/SecondAlternateBillingIndicator.ta.mjs";
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
import { AMADigitsDialedWC, _decode_AMADigitsDialedWC, _encode_AMADigitsDialedWC } from "../AIN-Parameters/AMADigitsDialedWC.ta.mjs";
// export { AMADigitsDialedWC, _decode_AMADigitsDialedWC, _encode_AMADigitsDialedWC } from "../AIN-Parameters/AMADigitsDialedWC.ta.mjs";
import { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
// export { Amp1, _decode_Amp1, _encode_Amp1 } from "../AIN-Parameters/Amp1.ta.mjs";
import { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
// export { Amp2, _decode_Amp2, _encode_Amp2 } from "../AIN-Parameters/Amp2.ta.mjs";
import { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
// export { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
import { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
// export { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
import { AMABillingFeature, _decode_AMABillingFeature, _encode_AMABillingFeature } from "../AIN-Parameters/AMABillingFeature.ta.mjs";
// export { AMABillingFeature, _decode_AMABillingFeature, _encode_AMABillingFeature } from "../AIN-Parameters/AMABillingFeature.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../AIN-Parameters/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../AIN-Parameters/RedirectionInformation.ta.mjs";
import { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
// export { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
// export { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
import { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
// export { Prefix, _decode_Prefix, _encode_Prefix } from "../AIN-Parameters/Prefix.ta.mjs";
import { ApplyRestrictions, _decode_ApplyRestrictions, _encode_ApplyRestrictions } from "../AIN-Parameters/ApplyRestrictions.ta.mjs";
// export { ApplyRestrictions, _decode_ApplyRestrictions, _encode_ApplyRestrictions } from "../AIN-Parameters/ApplyRestrictions.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
import { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";


/**
 * @summary ForwardCallArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ForwardCallArg ::= SEQUENCE{
 *             callingPartyID                  CallingPartyID OPTIONAL,
 *             chargeNumber                    ChargeNumber OPTIONAL,
 *             chargePartyStationType          ChargePartyStationType OPTIONAL,
 *             calledPartyID                   CalledPartyID  OPTIONAL,
 *             outpulseNumber                  OutpulseNumber OPTIONAL,
 *             tcm                             Tcm OPTIONAL,
 *             primaryTrunkGroup               PrimaryTrunkGroup OPTIONAL,
 *             alternateTrunkGroup             AlternateTrunkGroup OPTIONAL,
 *             secondAlternateTrunkGroup       SecondAlternateTrunkGroup OPTIONAL,
 *             carrier                         Carrier OPTIONAL,
 *             alternateCarrier                AlternateCarrier OPTIONAL,
 *             secondAlternatecarrier          SecondAlternateCarrier OPTIONAL,
 *             passiveLegTreatment             PassiveLegTreatment OPTIONAL,
 *             primaryBillingIndicator         PrimaryBillingIndicator OPTIONAL,
 *             alternateBillingIndicator       AlternateBillingIndicator OPTIONAL,
 *             secondAlternateBillingIndicator SecondAlternateBillingIndicator OPTIONAL,
 *             overflowBillingIndicator        OverflowBillingIndicator OPTIONAL,
 *             aMAAlternateBillingNumber       AMAAlternateBillingNumber OPTIONAL,
 *             aMABusinessCustomerID           AMABusinessCustomerID OPTIONAL,
 *             aMALineNumberList               SEQUENCE SIZE(1..2) OF AMALineNumber OPTIONAL,
 *             aMAslpID                        [10] IMPLICIT AMAslpID OPTIONAL,
 *             aMADigitsDialedWCList           SEQUENCE SIZE(1..5) OF AMADigitsDialedWC OPTIONAL,
 *             amp1                            Amp1 OPTIONAL,
 *             amp2                            Amp2 OPTIONAL,
 *             serviceProviderID               ServiceProviderID OPTIONAL,
 *             serviceContext                  ServiceContext OPTIONAL,
 *             aMABillingFeature               AMABillingFeature OPTIONAL,
 *             aMASequenceNumber               AMASequenceNumber OPTIONAL,
 *             redirectingPartyID              RedirectingPartyID OPTIONAL,
 *             redirectionInformation          RedirectionInformation  OPTIONAL,
 *             carrierUsage                    CarrierUsage OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             aMAserviceProviderID            AMAServiceProviderID OPTIONAL,
 *             prefix                          Prefix OPTIONAL,
 *             applyRestrictions               ApplyRestrictions OPTIONAL,
 *             displayText                     DisplayText OPTIONAL,
 *             genericName                     GenericName OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class ForwardCallArg {
    constructor (
        /**
         * @summary `callingPartyID`.
         * @public
         * @readonly
         */
        readonly callingPartyID: OPTIONAL<CallingPartyID>,
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
         * @summary `calledPartyID`.
         * @public
         * @readonly
         */
        readonly calledPartyID: OPTIONAL<CalledPartyID>,
        /**
         * @summary `outpulseNumber`.
         * @public
         * @readonly
         */
        readonly outpulseNumber: OPTIONAL<OutpulseNumber>,
        /**
         * @summary `tcm`.
         * @public
         * @readonly
         */
        readonly tcm: OPTIONAL<Tcm>,
        /**
         * @summary `primaryTrunkGroup`.
         * @public
         * @readonly
         */
        readonly primaryTrunkGroup: OPTIONAL<PrimaryTrunkGroup>,
        /**
         * @summary `alternateTrunkGroup`.
         * @public
         * @readonly
         */
        readonly alternateTrunkGroup: OPTIONAL<AlternateTrunkGroup>,
        /**
         * @summary `secondAlternateTrunkGroup`.
         * @public
         * @readonly
         */
        readonly secondAlternateTrunkGroup: OPTIONAL<SecondAlternateTrunkGroup>,
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
         * @summary `secondAlternatecarrier`.
         * @public
         * @readonly
         */
        readonly secondAlternatecarrier: OPTIONAL<SecondAlternateCarrier>,
        /**
         * @summary `passiveLegTreatment`.
         * @public
         * @readonly
         */
        readonly passiveLegTreatment: OPTIONAL<PassiveLegTreatment>,
        /**
         * @summary `primaryBillingIndicator`.
         * @public
         * @readonly
         */
        readonly primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>,
        /**
         * @summary `alternateBillingIndicator`.
         * @public
         * @readonly
         */
        readonly alternateBillingIndicator: OPTIONAL<AlternateBillingIndicator>,
        /**
         * @summary `secondAlternateBillingIndicator`.
         * @public
         * @readonly
         */
        readonly secondAlternateBillingIndicator: OPTIONAL<SecondAlternateBillingIndicator>,
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
         * @summary `aMADigitsDialedWCList`.
         * @public
         * @readonly
         */
        readonly aMADigitsDialedWCList: OPTIONAL<AMADigitsDialedWC[]>,
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
         * @summary `aMABillingFeature`.
         * @public
         * @readonly
         */
        readonly aMABillingFeature: OPTIONAL<AMABillingFeature>,
        /**
         * @summary `aMASequenceNumber`.
         * @public
         * @readonly
         */
        readonly aMASequenceNumber: OPTIONAL<AMASequenceNumber>,
        /**
         * @summary `redirectingPartyID`.
         * @public
         * @readonly
         */
        readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>,
        /**
         * @summary `redirectionInformation`.
         * @public
         * @readonly
         */
        readonly redirectionInformation: OPTIONAL<RedirectionInformation>,
        /**
         * @summary `carrierUsage`.
         * @public
         * @readonly
         */
        readonly carrierUsage: OPTIONAL<CarrierUsage>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `aMAserviceProviderID`.
         * @public
         * @readonly
         */
        readonly aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>,
        /**
         * @summary `prefix`.
         * @public
         * @readonly
         */
        readonly prefix: OPTIONAL<Prefix>,
        /**
         * @summary `applyRestrictions`.
         * @public
         * @readonly
         */
        readonly applyRestrictions: OPTIONAL<ApplyRestrictions>,
        /**
         * @summary `displayText`.
         * @public
         * @readonly
         */
        readonly displayText: OPTIONAL<DisplayText>,
        /**
         * @summary `genericName`.
         * @public
         * @readonly
         */
        readonly genericName: OPTIONAL<GenericName>
    ) {}

    /**
     * @summary Restructures an object into a ForwardCallArg
     * @description
     * 
     * This takes an `object` and converts it to a `ForwardCallArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ForwardCallArg`.
     * @returns {ForwardCallArg}
     */
    public static _from_object (_o: { [_K in keyof (ForwardCallArg)]: (ForwardCallArg)[_K] }): ForwardCallArg {
        return new ForwardCallArg(_o.callingPartyID, _o.chargeNumber, _o.chargePartyStationType, _o.calledPartyID, _o.outpulseNumber, _o.tcm, _o.primaryTrunkGroup, _o.alternateTrunkGroup, _o.secondAlternateTrunkGroup, _o.carrier, _o.alternateCarrier, _o.secondAlternatecarrier, _o.passiveLegTreatment, _o.primaryBillingIndicator, _o.alternateBillingIndicator, _o.secondAlternateBillingIndicator, _o.overflowBillingIndicator, _o.aMAAlternateBillingNumber, _o.aMABusinessCustomerID, _o.aMALineNumberList, _o.aMAslpID, _o.aMADigitsDialedWCList, _o.amp1, _o.amp2, _o.serviceProviderID, _o.serviceContext, _o.aMABillingFeature, _o.aMASequenceNumber, _o.redirectingPartyID, _o.redirectionInformation, _o.carrierUsage, _o.extensionParameter, _o.aMAserviceProviderID, _o.prefix, _o.applyRestrictions, _o.displayText, _o.genericName);
    }


}

/**
 * @summary The Leading Root Component Types of ForwardCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ForwardCallArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    new $.ComponentSpec("calledPartyID", true, $.hasTag(_TagClass.context, 15)),
    new $.ComponentSpec("outpulseNumber", true, $.hasTag(_TagClass.context, 37)),
    new $.ComponentSpec("tcm", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("primaryTrunkGroup", true, $.hasTag(_TagClass.context, 42)),
    new $.ComponentSpec("alternateTrunkGroup", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("secondAlternateTrunkGroup", true, $.hasTag(_TagClass.context, 48)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("alternateCarrier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("secondAlternatecarrier", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("passiveLegTreatment", true, $.hasTag(_TagClass.context, 39)),
    new $.ComponentSpec("primaryBillingIndicator", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("alternateBillingIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("secondAlternateBillingIndicator", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("overflowBillingIndicator", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("aMAAlternateBillingNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aMABusinessCustomerID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("aMALineNumberList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("aMAslpID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aMADigitsDialedWCList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("serviceProviderID", true, $.or($.hasTag(_TagClass.context, 87), $.hasTag(_TagClass.context, 106))),
    new $.ComponentSpec("serviceContext", true, $.hasTag(_TagClass.context, 83)),
    new $.ComponentSpec("aMABillingFeature", true, $.hasTag(_TagClass.context, 88)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 43)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 44)),
    new $.ComponentSpec("carrierUsage", true, $.hasTag(_TagClass.context, 79)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("aMAserviceProviderID", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("prefix", true, $.hasTag(_TagClass.context, 148)),
    new $.ComponentSpec("applyRestrictions", true, $.hasTag(_TagClass.context, 152)),
    new $.ComponentSpec("displayText", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 33))
];

/**
 * @summary The Trailing Root Component Types of ForwardCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ForwardCallArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ForwardCallArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ForwardCallArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ForwardCallArg: $.ASN1Decoder<ForwardCallArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ForwardCallArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ForwardCallArg (el: _Element): ForwardCallArg {
    if (!_cached_decoder_for_ForwardCallArg) { _cached_decoder_for_ForwardCallArg = function (el: _Element): ForwardCallArg {
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let calledPartyID: OPTIONAL<CalledPartyID>;
    let outpulseNumber: OPTIONAL<OutpulseNumber>;
    let tcm: OPTIONAL<Tcm>;
    let primaryTrunkGroup: OPTIONAL<PrimaryTrunkGroup>;
    let alternateTrunkGroup: OPTIONAL<AlternateTrunkGroup>;
    let secondAlternateTrunkGroup: OPTIONAL<SecondAlternateTrunkGroup>;
    let carrier: OPTIONAL<Carrier>;
    let alternateCarrier: OPTIONAL<AlternateCarrier>;
    let secondAlternatecarrier: OPTIONAL<SecondAlternateCarrier>;
    let passiveLegTreatment: OPTIONAL<PassiveLegTreatment>;
    let primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>;
    let alternateBillingIndicator: OPTIONAL<AlternateBillingIndicator>;
    let secondAlternateBillingIndicator: OPTIONAL<SecondAlternateBillingIndicator>;
    let overflowBillingIndicator: OPTIONAL<OverflowBillingIndicator>;
    let aMAAlternateBillingNumber: OPTIONAL<AMAAlternateBillingNumber>;
    let aMABusinessCustomerID: OPTIONAL<AMABusinessCustomerID>;
    let aMALineNumberList: OPTIONAL<AMALineNumber[]>;
    let aMAslpID: OPTIONAL<AMAslpID>;
    let aMADigitsDialedWCList: OPTIONAL<AMADigitsDialedWC[]>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let serviceProviderID: OPTIONAL<ServiceProviderID>;
    let serviceContext: OPTIONAL<ServiceContext>;
    let aMABillingFeature: OPTIONAL<AMABillingFeature>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let carrierUsage: OPTIONAL<CarrierUsage>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>;
    let prefix: OPTIONAL<Prefix>;
    let applyRestrictions: OPTIONAL<ApplyRestrictions>;
    let displayText: OPTIONAL<DisplayText>;
    let genericName: OPTIONAL<GenericName>;
    const callbacks: $.DecodingMap = {
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); },
        "outpulseNumber": (_el: _Element): void => { outpulseNumber = _decode_OutpulseNumber(_el); },
        "tcm": (_el: _Element): void => { tcm = _decode_Tcm(_el); },
        "primaryTrunkGroup": (_el: _Element): void => { primaryTrunkGroup = _decode_PrimaryTrunkGroup(_el); },
        "alternateTrunkGroup": (_el: _Element): void => { alternateTrunkGroup = _decode_AlternateTrunkGroup(_el); },
        "secondAlternateTrunkGroup": (_el: _Element): void => { secondAlternateTrunkGroup = _decode_SecondAlternateTrunkGroup(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "alternateCarrier": (_el: _Element): void => { alternateCarrier = _decode_AlternateCarrier(_el); },
        "secondAlternatecarrier": (_el: _Element): void => { secondAlternatecarrier = _decode_SecondAlternateCarrier(_el); },
        "passiveLegTreatment": (_el: _Element): void => { passiveLegTreatment = _decode_PassiveLegTreatment(_el); },
        "primaryBillingIndicator": (_el: _Element): void => { primaryBillingIndicator = _decode_PrimaryBillingIndicator(_el); },
        "alternateBillingIndicator": (_el: _Element): void => { alternateBillingIndicator = _decode_AlternateBillingIndicator(_el); },
        "secondAlternateBillingIndicator": (_el: _Element): void => { secondAlternateBillingIndicator = _decode_SecondAlternateBillingIndicator(_el); },
        "overflowBillingIndicator": (_el: _Element): void => { overflowBillingIndicator = _decode_OverflowBillingIndicator(_el); },
        "aMAAlternateBillingNumber": (_el: _Element): void => { aMAAlternateBillingNumber = _decode_AMAAlternateBillingNumber(_el); },
        "aMABusinessCustomerID": (_el: _Element): void => { aMABusinessCustomerID = _decode_AMABusinessCustomerID(_el); },
        "aMALineNumberList": (_el: _Element): void => { aMALineNumberList = $._decodeSequenceOf<AMALineNumber>(() => _decode_AMALineNumber)(_el); },
        "aMAslpID": (_el: _Element): void => { aMAslpID = $._decode_implicit<AMAslpID>(() => _decode_AMAslpID)(_el); },
        "aMADigitsDialedWCList": (_el: _Element): void => { aMADigitsDialedWCList = $._decodeSequenceOf<AMADigitsDialedWC>(() => _decode_AMADigitsDialedWC)(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "serviceProviderID": (_el: _Element): void => { serviceProviderID = _decode_ServiceProviderID(_el); },
        "serviceContext": (_el: _Element): void => { serviceContext = _decode_ServiceContext(_el); },
        "aMABillingFeature": (_el: _Element): void => { aMABillingFeature = _decode_AMABillingFeature(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = _decode_RedirectingPartyID(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = _decode_RedirectionInformation(_el); },
        "carrierUsage": (_el: _Element): void => { carrierUsage = _decode_CarrierUsage(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "aMAserviceProviderID": (_el: _Element): void => { aMAserviceProviderID = _decode_AMAServiceProviderID(_el); },
        "prefix": (_el: _Element): void => { prefix = _decode_Prefix(_el); },
        "applyRestrictions": (_el: _Element): void => { applyRestrictions = _decode_ApplyRestrictions(_el); },
        "displayText": (_el: _Element): void => { displayText = _decode_DisplayText(_el); },
        "genericName": (_el: _Element): void => { genericName = _decode_GenericName(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ForwardCallArg,
        _extension_additions_list_spec_for_ForwardCallArg,
        _root_component_type_list_2_spec_for_ForwardCallArg,
        undefined,
    );
    return new ForwardCallArg(
        callingPartyID,
        chargeNumber,
        chargePartyStationType,
        calledPartyID,
        outpulseNumber,
        tcm,
        primaryTrunkGroup,
        alternateTrunkGroup,
        secondAlternateTrunkGroup,
        carrier,
        alternateCarrier,
        secondAlternatecarrier,
        passiveLegTreatment,
        primaryBillingIndicator,
        alternateBillingIndicator,
        secondAlternateBillingIndicator,
        overflowBillingIndicator,
        aMAAlternateBillingNumber,
        aMABusinessCustomerID,
        aMALineNumberList,
        aMAslpID,
        aMADigitsDialedWCList,
        amp1,
        amp2,
        serviceProviderID,
        serviceContext,
        aMABillingFeature,
        aMASequenceNumber,
        redirectingPartyID,
        redirectionInformation,
        carrierUsage,
        extensionParameter,
        aMAserviceProviderID,
        prefix,
        applyRestrictions,
        displayText,
        genericName
    );
}; }
    return _cached_decoder_for_ForwardCallArg(el);
}

let _cached_encoder_for_ForwardCallArg: $.ASN1Encoder<ForwardCallArg> | null = null;

/**
 * @summary Encodes a(n) ForwardCallArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ForwardCallArg, encoded as an ASN.1 Element.
 */
export
function _encode_ForwardCallArg (value: ForwardCallArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ForwardCallArg) { _cached_encoder_for_ForwardCallArg = function (value: ForwardCallArg, elGetter: $.ASN1Encoder<ForwardCallArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyID === undefined) ? undefined : _encode_CalledPartyID(value.calledPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.outpulseNumber === undefined) ? undefined : _encode_OutpulseNumber(value.outpulseNumber, $.BER)),
            /* IF_ABSENT  */ ((value.tcm === undefined) ? undefined : _encode_Tcm(value.tcm, $.BER)),
            /* IF_ABSENT  */ ((value.primaryTrunkGroup === undefined) ? undefined : _encode_PrimaryTrunkGroup(value.primaryTrunkGroup, $.BER)),
            /* IF_ABSENT  */ ((value.alternateTrunkGroup === undefined) ? undefined : _encode_AlternateTrunkGroup(value.alternateTrunkGroup, $.BER)),
            /* IF_ABSENT  */ ((value.secondAlternateTrunkGroup === undefined) ? undefined : _encode_SecondAlternateTrunkGroup(value.secondAlternateTrunkGroup, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.alternateCarrier === undefined) ? undefined : _encode_AlternateCarrier(value.alternateCarrier, $.BER)),
            /* IF_ABSENT  */ ((value.secondAlternatecarrier === undefined) ? undefined : _encode_SecondAlternateCarrier(value.secondAlternatecarrier, $.BER)),
            /* IF_ABSENT  */ ((value.passiveLegTreatment === undefined) ? undefined : _encode_PassiveLegTreatment(value.passiveLegTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.primaryBillingIndicator === undefined) ? undefined : _encode_PrimaryBillingIndicator(value.primaryBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.alternateBillingIndicator === undefined) ? undefined : _encode_AlternateBillingIndicator(value.alternateBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.secondAlternateBillingIndicator === undefined) ? undefined : _encode_SecondAlternateBillingIndicator(value.secondAlternateBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.overflowBillingIndicator === undefined) ? undefined : _encode_OverflowBillingIndicator(value.overflowBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.aMAAlternateBillingNumber === undefined) ? undefined : _encode_AMAAlternateBillingNumber(value.aMAAlternateBillingNumber, $.BER)),
            /* IF_ABSENT  */ ((value.aMABusinessCustomerID === undefined) ? undefined : _encode_AMABusinessCustomerID(value.aMABusinessCustomerID, $.BER)),
            /* IF_ABSENT  */ ((value.aMALineNumberList === undefined) ? undefined : $._encodeSequenceOf<AMALineNumber>(() => _encode_AMALineNumber, $.BER)(value.aMALineNumberList, $.BER)),
            /* IF_ABSENT  */ ((value.aMAslpID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AMAslpID, $.BER)(value.aMAslpID, $.BER)),
            /* IF_ABSENT  */ ((value.aMADigitsDialedWCList === undefined) ? undefined : $._encodeSequenceOf<AMADigitsDialedWC>(() => _encode_AMADigitsDialedWC, $.BER)(value.aMADigitsDialedWCList, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.serviceProviderID === undefined) ? undefined : _encode_ServiceProviderID(value.serviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.serviceContext === undefined) ? undefined : _encode_ServiceContext(value.serviceContext, $.BER)),
            /* IF_ABSENT  */ ((value.aMABillingFeature === undefined) ? undefined : _encode_AMABillingFeature(value.aMABillingFeature, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.redirectingPartyID === undefined) ? undefined : _encode_RedirectingPartyID(value.redirectingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.redirectionInformation === undefined) ? undefined : _encode_RedirectionInformation(value.redirectionInformation, $.BER)),
            /* IF_ABSENT  */ ((value.carrierUsage === undefined) ? undefined : _encode_CarrierUsage(value.carrierUsage, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.aMAserviceProviderID === undefined) ? undefined : _encode_AMAServiceProviderID(value.aMAserviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.prefix === undefined) ? undefined : _encode_Prefix(value.prefix, $.BER)),
            /* IF_ABSENT  */ ((value.applyRestrictions === undefined) ? undefined : _encode_ApplyRestrictions(value.applyRestrictions, $.BER)),
            /* IF_ABSENT  */ ((value.displayText === undefined) ? undefined : _encode_DisplayText(value.displayText, $.BER)),
            /* IF_ABSENT  */ ((value.genericName === undefined) ? undefined : _encode_GenericName(value.genericName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ForwardCallArg(value, elGetter);
}


/* eslint-enable */
