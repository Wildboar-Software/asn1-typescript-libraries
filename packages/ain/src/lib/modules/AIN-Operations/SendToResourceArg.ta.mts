/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ResourceType, _decode_ResourceType, _encode_ResourceType } from "../AIN-Parameters/ResourceType.ta.mjs";
// export { ResourceType, _decode_ResourceType, _encode_ResourceType } from "../AIN-Parameters/ResourceType.ta.mjs";
import { StrParameterBlock, _decode_StrParameterBlock, _encode_StrParameterBlock } from "../AIN-Parameters/StrParameterBlock.ta.mjs";
// export { StrParameterBlock, _decode_StrParameterBlock, _encode_StrParameterBlock } from "../AIN-Parameters/StrParameterBlock.ta.mjs";
import { DisconnectFlag, _decode_DisconnectFlag, _encode_DisconnectFlag } from "../AIN-Parameters/DisconnectFlag.ta.mjs";
// export { DisconnectFlag, _decode_DisconnectFlag, _encode_DisconnectFlag } from "../AIN-Parameters/DisconnectFlag.ta.mjs";
import { AnswerIndicator, _decode_AnswerIndicator, _encode_AnswerIndicator } from "../AIN-Parameters/AnswerIndicator.ta.mjs";
// export { AnswerIndicator, _decode_AnswerIndicator, _encode_AnswerIndicator } from "../AIN-Parameters/AnswerIndicator.ta.mjs";
import { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
// export { PrimaryBillingIndicator, _decode_PrimaryBillingIndicator, _encode_PrimaryBillingIndicator } from "../AIN-Parameters/PrimaryBillingIndicator.ta.mjs";
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
import { DestinationAddress, _decode_DestinationAddress, _encode_DestinationAddress } from "../AIN-Parameters/DestinationAddress.ta.mjs";
// export { DestinationAddress, _decode_DestinationAddress, _encode_DestinationAddress } from "../AIN-Parameters/DestinationAddress.ta.mjs";
import { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
// export { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
import { AMAMeasure, _decode_AMAMeasure, _encode_AMAMeasure } from "../AIN-Parameters/AMAMeasure.ta.mjs";
// export { AMAMeasure, _decode_AMAMeasure, _encode_AMAMeasure } from "../AIN-Parameters/AMAMeasure.ta.mjs";
import { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
// export { ServiceProviderID, _decode_ServiceProviderID, _encode_ServiceProviderID } from "../AIN-Parameters/ServiceProviderID.ta.mjs";
import { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
// export { ServiceContext, _decode_ServiceContext, _encode_ServiceContext } from "../AIN-Parameters/ServiceContext.ta.mjs";
import { AMABillingFeature, _decode_AMABillingFeature, _encode_AMABillingFeature } from "../AIN-Parameters/AMABillingFeature.ta.mjs";
// export { AMABillingFeature, _decode_AMABillingFeature, _encode_AMABillingFeature } from "../AIN-Parameters/AMABillingFeature.ta.mjs";
import { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
// export { AMASequenceNumber, _decode_AMASequenceNumber, _encode_AMASequenceNumber } from "../AIN-Parameters/AMASequenceNumber.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
// export { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
import { ExtendedRinging, _decode_ExtendedRinging, _encode_ExtendedRinging } from "../AIN-Parameters/ExtendedRinging.ta.mjs";
// export { ExtendedRinging, _decode_ExtendedRinging, _encode_ExtendedRinging } from "../AIN-Parameters/ExtendedRinging.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../AIN-Parameters/Carrier.ta.mjs";
import { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
// export { AlternateCarrier, _decode_AlternateCarrier, _encode_AlternateCarrier } from "../AIN-Parameters/AlternateCarrier.ta.mjs";
import { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
// export { SecondAlternateCarrier, _decode_SecondAlternateCarrier, _encode_SecondAlternateCarrier } from "../AIN-Parameters/SecondAlternateCarrier.ta.mjs";
import { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
// export { CarrierUsage, _decode_CarrierUsage, _encode_CarrierUsage } from "../AIN-Parameters/CarrierUsage.ta.mjs";
import { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
// export { ChargeNumber, _decode_ChargeNumber, _encode_ChargeNumber } from "../AIN-Parameters/ChargeNumber.ta.mjs";
import { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
// export { ChargePartyStationType, _decode_ChargePartyStationType, _encode_ChargePartyStationType } from "../AIN-Parameters/ChargePartyStationType.ta.mjs";
import { PartyID, _decode_PartyID, _encode_PartyID } from "../AIN-Parameters/PartyID.ta.mjs";
// export { PartyID, _decode_PartyID, _encode_PartyID } from "../AIN-Parameters/PartyID.ta.mjs";
import { PartyOnHold, _decode_PartyOnHold, _encode_PartyOnHold } from "../AIN-Parameters/PartyOnHold.ta.mjs";
// export { PartyOnHold, _decode_PartyOnHold, _encode_PartyOnHold } from "../AIN-Parameters/PartyOnHold.ta.mjs";
import { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";
// export { CalledPartyID, _decode_CalledPartyID, _encode_CalledPartyID } from "../AIN-Parameters/CalledPartyID.ta.mjs";


/**
 * @summary SendToResourceArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SendToResourceArg ::= SEQUENCE{
 *             resourceType                    ResourceType,
 *             strParameterBlock               StrParameterBlock,
 *             disconnectFlag                  DisconnectFlag OPTIONAL,
 *             answerIndicator                 AnswerIndicator OPTIONAL,
 *             primaryBillingIndicator         PrimaryBillingIndicator OPTIONAL,
 *             aMAAlternateBillingNumber       AMAAlternateBillingNumber OPTIONAL,
 *             aMABusinessCustomerID           AMABusinessCustomerID OPTIONAL,
 *             aMALineNumberList               SEQUENCE SIZE(1..2) OF AMALineNumber OPTIONAL,
 *             aMAslpID                        [10] IMPLICIT AMAslpID OPTIONAL,
 *             aMADigitsDialedWCList           SEQUENCE SIZE(1..5) OF AMADigitsDialedWC OPTIONAL,
 *             amp1                            Amp1 OPTIONAL,
 *             amp2                            Amp2 OPTIONAL,
 *             destinationAddress              DestinationAddress OPTIONAL,
 *             dPConverter                     DPConverter OPTIONAL,
 *             aMAMeasure                      AMAMeasure OPTIONAL,
 *             serviceProviderID               ServiceProviderID OPTIONAL,
 *             serviceContext                  ServiceContext OPTIONAL,
 *             aMABillingFeature               AMABillingFeature OPTIONAL,
 *             aMASequenceNumber               AMASequenceNumber OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             aMAserviceProviderID            AMAServiceProviderID OPTIONAL,
 *             extendedRinging                 ExtendedRinging OPTIONAL,
 *             carrier                         Carrier OPTIONAL,
 *             alternateCarrier                AlternateCarrier OPTIONAL,
 *             secondAlternatecarrier          SecondAlternateCarrier OPTIONAL,
 *             carrierUsage                    CarrierUsage OPTIONAL,
 *             chargeNumber                    ChargeNumber OPTIONAL,
 *             chargePartyStationType          ChargePartyStationType OPTIONAL,
 *             tSTRCTimer                      TSTRCTimer OPTIONAL,
 *             partyID                         PartyID OPTIONAL,
 *             partyOnHold                     PartyOnHold OPTIONAL,
 *             calledPartyID                   CalledPartyID  OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class SendToResourceArg {
    constructor (
        /**
         * @summary `resourceType`.
         * @public
         * @readonly
         */
        readonly resourceType: ResourceType,
        /**
         * @summary `strParameterBlock`.
         * @public
         * @readonly
         */
        readonly strParameterBlock: StrParameterBlock,
        /**
         * @summary `disconnectFlag`.
         * @public
         * @readonly
         */
        readonly disconnectFlag: OPTIONAL<DisconnectFlag>,
        /**
         * @summary `answerIndicator`.
         * @public
         * @readonly
         */
        readonly answerIndicator: OPTIONAL<AnswerIndicator>,
        /**
         * @summary `primaryBillingIndicator`.
         * @public
         * @readonly
         */
        readonly primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>,
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
         * @summary `destinationAddress`.
         * @public
         * @readonly
         */
        readonly destinationAddress: OPTIONAL<DestinationAddress>,
        /**
         * @summary `dPConverter`.
         * @public
         * @readonly
         */
        readonly dPConverter: OPTIONAL<DPConverter>,
        /**
         * @summary `aMAMeasure`.
         * @public
         * @readonly
         */
        readonly aMAMeasure: OPTIONAL<AMAMeasure>,
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
         * @summary `extendedRinging`.
         * @public
         * @readonly
         */
        readonly extendedRinging: OPTIONAL<ExtendedRinging>,
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
         * @summary `carrierUsage`.
         * @public
         * @readonly
         */
        readonly carrierUsage: OPTIONAL<CarrierUsage>,
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
         * @summary `tSTRCTimer`.
         * @public
         * @readonly
         */
        readonly tSTRCTimer: OPTIONAL<TSTRCTimer>,
        /**
         * @summary `partyID`.
         * @public
         * @readonly
         */
        readonly partyID: OPTIONAL<PartyID>,
        /**
         * @summary `partyOnHold`.
         * @public
         * @readonly
         */
        readonly partyOnHold: OPTIONAL<PartyOnHold>,
        /**
         * @summary `calledPartyID`.
         * @public
         * @readonly
         */
        readonly calledPartyID: OPTIONAL<CalledPartyID>
    ) {}

    /**
     * @summary Restructures an object into a SendToResourceArg
     * @description
     * 
     * This takes an `object` and converts it to a `SendToResourceArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SendToResourceArg`.
     * @returns {SendToResourceArg}
     */
    public static _from_object (_o: { [_K in keyof (SendToResourceArg)]: (SendToResourceArg)[_K] }): SendToResourceArg {
        return new SendToResourceArg(_o.resourceType, _o.strParameterBlock, _o.disconnectFlag, _o.answerIndicator, _o.primaryBillingIndicator, _o.aMAAlternateBillingNumber, _o.aMABusinessCustomerID, _o.aMALineNumberList, _o.aMAslpID, _o.aMADigitsDialedWCList, _o.amp1, _o.amp2, _o.destinationAddress, _o.dPConverter, _o.aMAMeasure, _o.serviceProviderID, _o.serviceContext, _o.aMABillingFeature, _o.aMASequenceNumber, _o.extensionParameter, _o.aMAserviceProviderID, _o.extendedRinging, _o.carrier, _o.alternateCarrier, _o.secondAlternatecarrier, _o.carrierUsage, _o.chargeNumber, _o.chargePartyStationType, _o.tSTRCTimer, _o.partyID, _o.partyOnHold, _o.calledPartyID);
    }


}

/**
 * @summary The Leading Root Component Types of SendToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SendToResourceArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceType", false, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("strParameterBlock", false, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("disconnectFlag", true, $.hasTag(_TagClass.context, 25)),
    new $.ComponentSpec("answerIndicator", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("primaryBillingIndicator", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("aMAAlternateBillingNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aMABusinessCustomerID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("aMALineNumberList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("aMAslpID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aMADigitsDialedWCList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("destinationAddress", true, $.hasTag(_TagClass.context, 86)),
    new $.ComponentSpec("dPConverter", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("aMAMeasure", true, $.hasTag(_TagClass.context, 71)),
    new $.ComponentSpec("serviceProviderID", true, $.or($.hasTag(_TagClass.context, 87), $.hasTag(_TagClass.context, 106))),
    new $.ComponentSpec("serviceContext", true, $.hasTag(_TagClass.context, 83)),
    new $.ComponentSpec("aMABillingFeature", true, $.hasTag(_TagClass.context, 88)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("aMAserviceProviderID", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("extendedRinging", true, $.hasTag(_TagClass.context, 146)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 41)),
    new $.ComponentSpec("alternateCarrier", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("secondAlternatecarrier", true, $.hasTag(_TagClass.context, 47)),
    new $.ComponentSpec("carrierUsage", true, $.hasTag(_TagClass.context, 79)),
    new $.ComponentSpec("chargeNumber", true, $.hasTag(_TagClass.context, 19)),
    new $.ComponentSpec("chargePartyStationType", true, $.hasTag(_TagClass.context, 20)),
    /* FIXME: tSTRCTimer COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("partyID", true, $.hasTag(_TagClass.context, 159)),
    new $.ComponentSpec("partyOnHold", true, $.hasTag(_TagClass.context, 146)),
    new $.ComponentSpec("calledPartyID", true, $.hasTag(_TagClass.context, 15))
];

/**
 * @summary The Trailing Root Component Types of SendToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SendToResourceArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SendToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SendToResourceArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SendToResourceArg: $.ASN1Decoder<SendToResourceArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SendToResourceArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SendToResourceArg (el: _Element): SendToResourceArg {
    if (!_cached_decoder_for_SendToResourceArg) { _cached_decoder_for_SendToResourceArg = function (el: _Element): SendToResourceArg {
    let resourceType!: ResourceType;
    let strParameterBlock!: StrParameterBlock;
    let disconnectFlag: OPTIONAL<DisconnectFlag>;
    let answerIndicator: OPTIONAL<AnswerIndicator>;
    let primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>;
    let aMAAlternateBillingNumber: OPTIONAL<AMAAlternateBillingNumber>;
    let aMABusinessCustomerID: OPTIONAL<AMABusinessCustomerID>;
    let aMALineNumberList: OPTIONAL<AMALineNumber[]>;
    let aMAslpID: OPTIONAL<AMAslpID>;
    let aMADigitsDialedWCList: OPTIONAL<AMADigitsDialedWC[]>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let destinationAddress: OPTIONAL<DestinationAddress>;
    let dPConverter: OPTIONAL<DPConverter>;
    let aMAMeasure: OPTIONAL<AMAMeasure>;
    let serviceProviderID: OPTIONAL<ServiceProviderID>;
    let serviceContext: OPTIONAL<ServiceContext>;
    let aMABillingFeature: OPTIONAL<AMABillingFeature>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>;
    let extendedRinging: OPTIONAL<ExtendedRinging>;
    let carrier: OPTIONAL<Carrier>;
    let alternateCarrier: OPTIONAL<AlternateCarrier>;
    let secondAlternatecarrier: OPTIONAL<SecondAlternateCarrier>;
    let carrierUsage: OPTIONAL<CarrierUsage>;
    let chargeNumber: OPTIONAL<ChargeNumber>;
    let chargePartyStationType: OPTIONAL<ChargePartyStationType>;
    let tSTRCTimer: OPTIONAL<TSTRCTimer>;
    let partyID: OPTIONAL<PartyID>;
    let partyOnHold: OPTIONAL<PartyOnHold>;
    let calledPartyID: OPTIONAL<CalledPartyID>;
    const callbacks: $.DecodingMap = {
        "resourceType": (_el: _Element): void => { resourceType = _decode_ResourceType(_el); },
        "strParameterBlock": (_el: _Element): void => { strParameterBlock = _decode_StrParameterBlock(_el); },
        "disconnectFlag": (_el: _Element): void => { disconnectFlag = _decode_DisconnectFlag(_el); },
        "answerIndicator": (_el: _Element): void => { answerIndicator = _decode_AnswerIndicator(_el); },
        "primaryBillingIndicator": (_el: _Element): void => { primaryBillingIndicator = _decode_PrimaryBillingIndicator(_el); },
        "aMAAlternateBillingNumber": (_el: _Element): void => { aMAAlternateBillingNumber = _decode_AMAAlternateBillingNumber(_el); },
        "aMABusinessCustomerID": (_el: _Element): void => { aMABusinessCustomerID = _decode_AMABusinessCustomerID(_el); },
        "aMALineNumberList": (_el: _Element): void => { aMALineNumberList = $._decodeSequenceOf<AMALineNumber>(() => _decode_AMALineNumber)(_el); },
        "aMAslpID": (_el: _Element): void => { aMAslpID = $._decode_implicit<AMAslpID>(() => _decode_AMAslpID)(_el); },
        "aMADigitsDialedWCList": (_el: _Element): void => { aMADigitsDialedWCList = $._decodeSequenceOf<AMADigitsDialedWC>(() => _decode_AMADigitsDialedWC)(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "destinationAddress": (_el: _Element): void => { destinationAddress = _decode_DestinationAddress(_el); },
        "dPConverter": (_el: _Element): void => { dPConverter = _decode_DPConverter(_el); },
        "aMAMeasure": (_el: _Element): void => { aMAMeasure = _decode_AMAMeasure(_el); },
        "serviceProviderID": (_el: _Element): void => { serviceProviderID = _decode_ServiceProviderID(_el); },
        "serviceContext": (_el: _Element): void => { serviceContext = _decode_ServiceContext(_el); },
        "aMABillingFeature": (_el: _Element): void => { aMABillingFeature = _decode_AMABillingFeature(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "aMAserviceProviderID": (_el: _Element): void => { aMAserviceProviderID = _decode_AMAServiceProviderID(_el); },
        "extendedRinging": (_el: _Element): void => { extendedRinging = _decode_ExtendedRinging(_el); },
        "carrier": (_el: _Element): void => { carrier = _decode_Carrier(_el); },
        "alternateCarrier": (_el: _Element): void => { alternateCarrier = _decode_AlternateCarrier(_el); },
        "secondAlternatecarrier": (_el: _Element): void => { secondAlternatecarrier = _decode_SecondAlternateCarrier(_el); },
        "carrierUsage": (_el: _Element): void => { carrierUsage = _decode_CarrierUsage(_el); },
        "chargeNumber": (_el: _Element): void => { chargeNumber = _decode_ChargeNumber(_el); },
        "chargePartyStationType": (_el: _Element): void => { chargePartyStationType = _decode_ChargePartyStationType(_el); },
        "tSTRCTimer": (_el: _Element): void => { tSTRCTimer = _decode_TSTRCTimer(_el); },
        "partyID": (_el: _Element): void => { partyID = _decode_PartyID(_el); },
        "partyOnHold": (_el: _Element): void => { partyOnHold = _decode_PartyOnHold(_el); },
        "calledPartyID": (_el: _Element): void => { calledPartyID = _decode_CalledPartyID(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SendToResourceArg,
        _extension_additions_list_spec_for_SendToResourceArg,
        _root_component_type_list_2_spec_for_SendToResourceArg,
        undefined,
    );
    return new SendToResourceArg(
        resourceType,
        strParameterBlock,
        disconnectFlag,
        answerIndicator,
        primaryBillingIndicator,
        aMAAlternateBillingNumber,
        aMABusinessCustomerID,
        aMALineNumberList,
        aMAslpID,
        aMADigitsDialedWCList,
        amp1,
        amp2,
        destinationAddress,
        dPConverter,
        aMAMeasure,
        serviceProviderID,
        serviceContext,
        aMABillingFeature,
        aMASequenceNumber,
        extensionParameter,
        aMAserviceProviderID,
        extendedRinging,
        carrier,
        alternateCarrier,
        secondAlternatecarrier,
        carrierUsage,
        chargeNumber,
        chargePartyStationType,
        tSTRCTimer,
        partyID,
        partyOnHold,
        calledPartyID
    );
}; }
    return _cached_decoder_for_SendToResourceArg(el);
}

let _cached_encoder_for_SendToResourceArg: $.ASN1Encoder<SendToResourceArg> | null = null;

/**
 * @summary Encodes a(n) SendToResourceArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SendToResourceArg, encoded as an ASN.1 Element.
 */
export
function _encode_SendToResourceArg (value: SendToResourceArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SendToResourceArg) { _cached_encoder_for_SendToResourceArg = function (value: SendToResourceArg, elGetter: $.ASN1Encoder<SendToResourceArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResourceType(value.resourceType, $.BER),
            /* REQUIRED   */ _encode_StrParameterBlock(value.strParameterBlock, $.BER),
            /* IF_ABSENT  */ ((value.disconnectFlag === undefined) ? undefined : _encode_DisconnectFlag(value.disconnectFlag, $.BER)),
            /* IF_ABSENT  */ ((value.answerIndicator === undefined) ? undefined : _encode_AnswerIndicator(value.answerIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.primaryBillingIndicator === undefined) ? undefined : _encode_PrimaryBillingIndicator(value.primaryBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.aMAAlternateBillingNumber === undefined) ? undefined : _encode_AMAAlternateBillingNumber(value.aMAAlternateBillingNumber, $.BER)),
            /* IF_ABSENT  */ ((value.aMABusinessCustomerID === undefined) ? undefined : _encode_AMABusinessCustomerID(value.aMABusinessCustomerID, $.BER)),
            /* IF_ABSENT  */ ((value.aMALineNumberList === undefined) ? undefined : $._encodeSequenceOf<AMALineNumber>(() => _encode_AMALineNumber, $.BER)(value.aMALineNumberList, $.BER)),
            /* IF_ABSENT  */ ((value.aMAslpID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AMAslpID, $.BER)(value.aMAslpID, $.BER)),
            /* IF_ABSENT  */ ((value.aMADigitsDialedWCList === undefined) ? undefined : $._encodeSequenceOf<AMADigitsDialedWC>(() => _encode_AMADigitsDialedWC, $.BER)(value.aMADigitsDialedWCList, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.destinationAddress === undefined) ? undefined : _encode_DestinationAddress(value.destinationAddress, $.BER)),
            /* IF_ABSENT  */ ((value.dPConverter === undefined) ? undefined : _encode_DPConverter(value.dPConverter, $.BER)),
            /* IF_ABSENT  */ ((value.aMAMeasure === undefined) ? undefined : _encode_AMAMeasure(value.aMAMeasure, $.BER)),
            /* IF_ABSENT  */ ((value.serviceProviderID === undefined) ? undefined : _encode_ServiceProviderID(value.serviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.serviceContext === undefined) ? undefined : _encode_ServiceContext(value.serviceContext, $.BER)),
            /* IF_ABSENT  */ ((value.aMABillingFeature === undefined) ? undefined : _encode_AMABillingFeature(value.aMABillingFeature, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.aMAserviceProviderID === undefined) ? undefined : _encode_AMAServiceProviderID(value.aMAserviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.extendedRinging === undefined) ? undefined : _encode_ExtendedRinging(value.extendedRinging, $.BER)),
            /* IF_ABSENT  */ ((value.carrier === undefined) ? undefined : _encode_Carrier(value.carrier, $.BER)),
            /* IF_ABSENT  */ ((value.alternateCarrier === undefined) ? undefined : _encode_AlternateCarrier(value.alternateCarrier, $.BER)),
            /* IF_ABSENT  */ ((value.secondAlternatecarrier === undefined) ? undefined : _encode_SecondAlternateCarrier(value.secondAlternatecarrier, $.BER)),
            /* IF_ABSENT  */ ((value.carrierUsage === undefined) ? undefined : _encode_CarrierUsage(value.carrierUsage, $.BER)),
            /* IF_ABSENT  */ ((value.chargeNumber === undefined) ? undefined : _encode_ChargeNumber(value.chargeNumber, $.BER)),
            /* IF_ABSENT  */ ((value.chargePartyStationType === undefined) ? undefined : _encode_ChargePartyStationType(value.chargePartyStationType, $.BER)),
            /* IF_ABSENT  */ ((value.tSTRCTimer === undefined) ? undefined : _encode_TSTRCTimer(value.tSTRCTimer, $.BER)),
            /* IF_ABSENT  */ ((value.partyID === undefined) ? undefined : _encode_PartyID(value.partyID, $.BER)),
            /* IF_ABSENT  */ ((value.partyOnHold === undefined) ? undefined : _encode_PartyOnHold(value.partyOnHold, $.BER)),
            /* IF_ABSENT  */ ((value.calledPartyID === undefined) ? undefined : _encode_CalledPartyID(value.calledPartyID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SendToResourceArg(value, elGetter);
}


/* eslint-enable */
