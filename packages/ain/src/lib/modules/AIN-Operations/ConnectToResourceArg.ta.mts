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
import { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../AIN-Parameters/LegID.ta.mjs";
import { DisconnectFlag, _decode_DisconnectFlag, _encode_DisconnectFlag } from "../AIN-Parameters/DisconnectFlag.ta.mjs";
// export { DisconnectFlag, _decode_DisconnectFlag, _encode_DisconnectFlag } from "../AIN-Parameters/DisconnectFlag.ta.mjs";
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
import { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
// export { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";


/**
 * @summary ConnectToResourceArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ConnectToResourceArg ::= SEQUENCE{
 *             resourceType                    ResourceType,
 *             strParameterBlock               StrParameterBlock,
 *             legID                           LegID OPTIONAL,
 *             disconnectFlag                  DisconnectFlag OPTIONAL,
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
 *             aMAserviceProviderID            AMAServiceProviderID OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class ConnectToResourceArg {
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
         * @summary `legID`.
         * @public
         * @readonly
         */
        readonly legID: OPTIONAL<LegID>,
        /**
         * @summary `disconnectFlag`.
         * @public
         * @readonly
         */
        readonly disconnectFlag: OPTIONAL<DisconnectFlag>,
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
         * @summary `aMAserviceProviderID`.
         * @public
         * @readonly
         */
        readonly aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>,
        /**
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>
    ) {}

    /**
     * @summary Restructures an object into a ConnectToResourceArg
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectToResourceArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectToResourceArg`.
     * @returns {ConnectToResourceArg}
     */
    public static _from_object (_o: { [_K in keyof (ConnectToResourceArg)]: (ConnectToResourceArg)[_K] }): ConnectToResourceArg {
        return new ConnectToResourceArg(_o.resourceType, _o.strParameterBlock, _o.legID, _o.disconnectFlag, _o.primaryBillingIndicator, _o.aMAAlternateBillingNumber, _o.aMABusinessCustomerID, _o.aMALineNumberList, _o.aMAslpID, _o.aMADigitsDialedWCList, _o.amp1, _o.amp2, _o.destinationAddress, _o.dPConverter, _o.aMAMeasure, _o.serviceProviderID, _o.serviceContext, _o.aMABillingFeature, _o.aMASequenceNumber, _o.aMAserviceProviderID, _o.extensionParameter);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceType", false, $.hasTag(_TagClass.context, 45)),
    new $.ComponentSpec("strParameterBlock", false, $.hasTag(_TagClass.context, 50)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 132)),
    new $.ComponentSpec("disconnectFlag", true, $.hasTag(_TagClass.context, 25)),
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
    new $.ComponentSpec("aMAserviceProviderID", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84))
];

/**
 * @summary The Trailing Root Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectToResourceArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectToResourceArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectToResourceArg: $.ASN1Decoder<ConnectToResourceArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectToResourceArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectToResourceArg (el: _Element): ConnectToResourceArg {
    if (!_cached_decoder_for_ConnectToResourceArg) { _cached_decoder_for_ConnectToResourceArg = function (el: _Element): ConnectToResourceArg {
    let resourceType!: ResourceType;
    let strParameterBlock!: StrParameterBlock;
    let legID: OPTIONAL<LegID>;
    let disconnectFlag: OPTIONAL<DisconnectFlag>;
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
    let aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    const callbacks: $.DecodingMap = {
        "resourceType": (_el: _Element): void => { resourceType = _decode_ResourceType(_el); },
        "strParameterBlock": (_el: _Element): void => { strParameterBlock = _decode_StrParameterBlock(_el); },
        "legID": (_el: _Element): void => { legID = _decode_LegID(_el); },
        "disconnectFlag": (_el: _Element): void => { disconnectFlag = _decode_DisconnectFlag(_el); },
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
        "aMAserviceProviderID": (_el: _Element): void => { aMAserviceProviderID = _decode_AMAServiceProviderID(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectToResourceArg,
        _extension_additions_list_spec_for_ConnectToResourceArg,
        _root_component_type_list_2_spec_for_ConnectToResourceArg,
        undefined,
    );
    return new ConnectToResourceArg(
        resourceType,
        strParameterBlock,
        legID,
        disconnectFlag,
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
        aMAserviceProviderID,
        extensionParameter
    );
}; }
    return _cached_decoder_for_ConnectToResourceArg(el);
}

let _cached_encoder_for_ConnectToResourceArg: $.ASN1Encoder<ConnectToResourceArg> | null = null;

/**
 * @summary Encodes a(n) ConnectToResourceArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectToResourceArg, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectToResourceArg (value: ConnectToResourceArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectToResourceArg) { _cached_encoder_for_ConnectToResourceArg = function (value: ConnectToResourceArg, elGetter: $.ASN1Encoder<ConnectToResourceArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ResourceType(value.resourceType, $.BER),
            /* REQUIRED   */ _encode_StrParameterBlock(value.strParameterBlock, $.BER),
            /* IF_ABSENT  */ ((value.legID === undefined) ? undefined : _encode_LegID(value.legID, $.BER)),
            /* IF_ABSENT  */ ((value.disconnectFlag === undefined) ? undefined : _encode_DisconnectFlag(value.disconnectFlag, $.BER)),
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
            /* IF_ABSENT  */ ((value.aMAserviceProviderID === undefined) ? undefined : _encode_AMAServiceProviderID(value.aMAserviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ConnectToResourceArg(value, elGetter);
}


/* eslint-enable */
