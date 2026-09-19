/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
// export { CollectedDigits, _decode_CollectedDigits, _encode_CollectedDigits } from "../AIN-Parameters/CollectedDigits.ta.mjs";
import { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
// export { DPConverter, _decode_DPConverter, _encode_DPConverter } from "../AIN-Parameters/DPConverter.ta.mjs";
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
import { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
// export { ExtensionParameter, _decode_ExtensionParameter, _encode_ExtensionParameter } from "../AIN-Parameters/ExtensionParameter.ta.mjs";
import { AlternateDialingPlanInd, _decode_AlternateDialingPlanInd, _encode_AlternateDialingPlanInd } from "../AIN-Parameters/AlternateDialingPlanInd.ta.mjs";
// export { AlternateDialingPlanInd, _decode_AlternateDialingPlanInd, _encode_AlternateDialingPlanInd } from "../AIN-Parameters/AlternateDialingPlanInd.ta.mjs";
import { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";
// export { AMAServiceProviderID, _decode_AMAServiceProviderID, _encode_AMAServiceProviderID } from "../AIN-Parameters/AMAServiceProviderID.ta.mjs";


/**
 * @summary CollectInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectInformationArg ::= SEQUENCE{
 *             callingPartyID                  CallingPartyID OPTIONAL,
 *             collectedDigits                 CollectedDigits OPTIONAL,
 *             dPConverter                     DPConverter OPTIONAL,
 *             primaryBillingIndicator         PrimaryBillingIndicator OPTIONAL,
 *             alternateBillingIndicator       AlternateBillingIndicator OPTIONAL,
 *             secondAlternateBillingIndicator SecondAlternateBillingIndicator OPTIONAL,
 *             overflowBillingIndicator        OverflowBillingIndicator OPTIONAL,
 *             aMAAlternateBillingNumber       AMAAlternateBillingNumber OPTIONAL,
 *             aMALineNumberList               SEQUENCE SIZE(1..2) OF AMALineNumber OPTIONAL,
 *             aMAslpID                        [10] IMPLICIT AMAslpID OPTIONAL,
 *             aMADigitsDialedWCList           SEQUENCE SIZE(1..5) OF AMADigitsDialedWC OPTIONAL,
 *             amp1                            Amp1 OPTIONAL,
 *             amp2                            Amp2 OPTIONAL,
 *             serviceProviderID               ServiceProviderID OPTIONAL,
 *             serviceContext                  ServiceContext OPTIONAL,
 *             aMABillingFeature               AMABillingFeature OPTIONAL,
 *             aMASequenceNumber               AMASequenceNumber OPTIONAL,
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             alternateDialingPlanInd         AlternateDialingPlanInd OPTIONAL,
 *             aMAserviceProviderID            AMAServiceProviderID OPTIONAL
 *             }
 * ```
 * 
 * @class
 */
export
class CollectInformationArg {
    constructor (
        /**
         * @summary `callingPartyID`.
         * @public
         * @readonly
         */
        readonly callingPartyID: OPTIONAL<CallingPartyID>,
        /**
         * @summary `collectedDigits`.
         * @public
         * @readonly
         */
        readonly collectedDigits: OPTIONAL<CollectedDigits>,
        /**
         * @summary `dPConverter`.
         * @public
         * @readonly
         */
        readonly dPConverter: OPTIONAL<DPConverter>,
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
         * @summary `extensionParameter`.
         * @public
         * @readonly
         */
        readonly extensionParameter: OPTIONAL<ExtensionParameter>,
        /**
         * @summary `alternateDialingPlanInd`.
         * @public
         * @readonly
         */
        readonly alternateDialingPlanInd: OPTIONAL<AlternateDialingPlanInd>,
        /**
         * @summary `aMAserviceProviderID`.
         * @public
         * @readonly
         */
        readonly aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>
    ) {}

    /**
     * @summary Restructures an object into a CollectInformationArg
     * @description
     * 
     * This takes an `object` and converts it to a `CollectInformationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CollectInformationArg`.
     * @returns {CollectInformationArg}
     */
    public static _from_object (_o: { [_K in keyof (CollectInformationArg)]: (CollectInformationArg)[_K] }): CollectInformationArg {
        return new CollectInformationArg(_o.callingPartyID, _o.collectedDigits, _o.dPConverter, _o.primaryBillingIndicator, _o.alternateBillingIndicator, _o.secondAlternateBillingIndicator, _o.overflowBillingIndicator, _o.aMAAlternateBillingNumber, _o.aMALineNumberList, _o.aMAslpID, _o.aMADigitsDialedWCList, _o.amp1, _o.amp2, _o.serviceProviderID, _o.serviceContext, _o.aMABillingFeature, _o.aMASequenceNumber, _o.extensionParameter, _o.alternateDialingPlanInd, _o.aMAserviceProviderID);
    }


}

/**
 * @summary The Leading Root Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("collectedDigits", true, $.hasTag(_TagClass.context, 23)),
    new $.ComponentSpec("dPConverter", true, $.hasTag(_TagClass.context, 76)),
    new $.ComponentSpec("primaryBillingIndicator", true, $.hasTag(_TagClass.context, 40)),
    new $.ComponentSpec("alternateBillingIndicator", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("secondAlternateBillingIndicator", true, $.hasTag(_TagClass.context, 46)),
    new $.ComponentSpec("overflowBillingIndicator", true, $.hasTag(_TagClass.context, 38)),
    new $.ComponentSpec("aMAAlternateBillingNumber", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("aMALineNumberList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("aMAslpID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("aMADigitsDialedWCList", true, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("amp1", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("amp2", true, $.hasTag(_TagClass.context, 109)),
    new $.ComponentSpec("serviceProviderID", true, $.or($.hasTag(_TagClass.context, 87), $.hasTag(_TagClass.context, 106))),
    new $.ComponentSpec("serviceContext", true, $.hasTag(_TagClass.context, 83)),
    new $.ComponentSpec("aMABillingFeature", true, $.hasTag(_TagClass.context, 88)),
    new $.ComponentSpec("aMASequenceNumber", true, $.hasTag(_TagClass.context, 89)),
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("alternateDialingPlanInd", true, $.hasTag(_TagClass.context, 115)),
    new $.ComponentSpec("aMAserviceProviderID", true, $.hasTag(_TagClass.context, 101))
];

/**
 * @summary The Trailing Root Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CollectInformationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CollectInformationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CollectInformationArg: $.ASN1Decoder<CollectInformationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectInformationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectInformationArg (el: _Element): CollectInformationArg {
    if (!_cached_decoder_for_CollectInformationArg) { _cached_decoder_for_CollectInformationArg = function (el: _Element): CollectInformationArg {
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let collectedDigits: OPTIONAL<CollectedDigits>;
    let dPConverter: OPTIONAL<DPConverter>;
    let primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>;
    let alternateBillingIndicator: OPTIONAL<AlternateBillingIndicator>;
    let secondAlternateBillingIndicator: OPTIONAL<SecondAlternateBillingIndicator>;
    let overflowBillingIndicator: OPTIONAL<OverflowBillingIndicator>;
    let aMAAlternateBillingNumber: OPTIONAL<AMAAlternateBillingNumber>;
    let aMALineNumberList: OPTIONAL<AMALineNumber[]>;
    let aMAslpID: OPTIONAL<AMAslpID>;
    let aMADigitsDialedWCList: OPTIONAL<AMADigitsDialedWC[]>;
    let amp1: OPTIONAL<Amp1>;
    let amp2: OPTIONAL<Amp2>;
    let serviceProviderID: OPTIONAL<ServiceProviderID>;
    let serviceContext: OPTIONAL<ServiceContext>;
    let aMABillingFeature: OPTIONAL<AMABillingFeature>;
    let aMASequenceNumber: OPTIONAL<AMASequenceNumber>;
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let alternateDialingPlanInd: OPTIONAL<AlternateDialingPlanInd>;
    let aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>;
    const callbacks: $.DecodingMap = {
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "collectedDigits": (_el: _Element): void => { collectedDigits = _decode_CollectedDigits(_el); },
        "dPConverter": (_el: _Element): void => { dPConverter = _decode_DPConverter(_el); },
        "primaryBillingIndicator": (_el: _Element): void => { primaryBillingIndicator = _decode_PrimaryBillingIndicator(_el); },
        "alternateBillingIndicator": (_el: _Element): void => { alternateBillingIndicator = _decode_AlternateBillingIndicator(_el); },
        "secondAlternateBillingIndicator": (_el: _Element): void => { secondAlternateBillingIndicator = _decode_SecondAlternateBillingIndicator(_el); },
        "overflowBillingIndicator": (_el: _Element): void => { overflowBillingIndicator = _decode_OverflowBillingIndicator(_el); },
        "aMAAlternateBillingNumber": (_el: _Element): void => { aMAAlternateBillingNumber = _decode_AMAAlternateBillingNumber(_el); },
        "aMALineNumberList": (_el: _Element): void => { aMALineNumberList = $._decodeSequenceOf<AMALineNumber>(() => _decode_AMALineNumber)(_el); },
        "aMAslpID": (_el: _Element): void => { aMAslpID = $._decode_implicit<AMAslpID>(() => _decode_AMAslpID)(_el); },
        "aMADigitsDialedWCList": (_el: _Element): void => { aMADigitsDialedWCList = $._decodeSequenceOf<AMADigitsDialedWC>(() => _decode_AMADigitsDialedWC)(_el); },
        "amp1": (_el: _Element): void => { amp1 = _decode_Amp1(_el); },
        "amp2": (_el: _Element): void => { amp2 = _decode_Amp2(_el); },
        "serviceProviderID": (_el: _Element): void => { serviceProviderID = _decode_ServiceProviderID(_el); },
        "serviceContext": (_el: _Element): void => { serviceContext = _decode_ServiceContext(_el); },
        "aMABillingFeature": (_el: _Element): void => { aMABillingFeature = _decode_AMABillingFeature(_el); },
        "aMASequenceNumber": (_el: _Element): void => { aMASequenceNumber = _decode_AMASequenceNumber(_el); },
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "alternateDialingPlanInd": (_el: _Element): void => { alternateDialingPlanInd = _decode_AlternateDialingPlanInd(_el); },
        "aMAserviceProviderID": (_el: _Element): void => { aMAserviceProviderID = _decode_AMAServiceProviderID(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectInformationArg,
        _extension_additions_list_spec_for_CollectInformationArg,
        _root_component_type_list_2_spec_for_CollectInformationArg,
        undefined,
    );
    return new CollectInformationArg(
        callingPartyID,
        collectedDigits,
        dPConverter,
        primaryBillingIndicator,
        alternateBillingIndicator,
        secondAlternateBillingIndicator,
        overflowBillingIndicator,
        aMAAlternateBillingNumber,
        aMALineNumberList,
        aMAslpID,
        aMADigitsDialedWCList,
        amp1,
        amp2,
        serviceProviderID,
        serviceContext,
        aMABillingFeature,
        aMASequenceNumber,
        extensionParameter,
        alternateDialingPlanInd,
        aMAserviceProviderID
    );
}; }
    return _cached_decoder_for_CollectInformationArg(el);
}

let _cached_encoder_for_CollectInformationArg: $.ASN1Encoder<CollectInformationArg> | null = null;

/**
 * @summary Encodes a(n) CollectInformationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectInformationArg, encoded as an ASN.1 Element.
 */
export
function _encode_CollectInformationArg (value: CollectInformationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectInformationArg) { _cached_encoder_for_CollectInformationArg = function (value: CollectInformationArg, elGetter: $.ASN1Encoder<CollectInformationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.collectedDigits === undefined) ? undefined : _encode_CollectedDigits(value.collectedDigits, $.BER)),
            /* IF_ABSENT  */ ((value.dPConverter === undefined) ? undefined : _encode_DPConverter(value.dPConverter, $.BER)),
            /* IF_ABSENT  */ ((value.primaryBillingIndicator === undefined) ? undefined : _encode_PrimaryBillingIndicator(value.primaryBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.alternateBillingIndicator === undefined) ? undefined : _encode_AlternateBillingIndicator(value.alternateBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.secondAlternateBillingIndicator === undefined) ? undefined : _encode_SecondAlternateBillingIndicator(value.secondAlternateBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.overflowBillingIndicator === undefined) ? undefined : _encode_OverflowBillingIndicator(value.overflowBillingIndicator, $.BER)),
            /* IF_ABSENT  */ ((value.aMAAlternateBillingNumber === undefined) ? undefined : _encode_AMAAlternateBillingNumber(value.aMAAlternateBillingNumber, $.BER)),
            /* IF_ABSENT  */ ((value.aMALineNumberList === undefined) ? undefined : $._encodeSequenceOf<AMALineNumber>(() => _encode_AMALineNumber, $.BER)(value.aMALineNumberList, $.BER)),
            /* IF_ABSENT  */ ((value.aMAslpID === undefined) ? undefined : $._encode_implicit(_TagClass.context, 10, () => _encode_AMAslpID, $.BER)(value.aMAslpID, $.BER)),
            /* IF_ABSENT  */ ((value.aMADigitsDialedWCList === undefined) ? undefined : $._encodeSequenceOf<AMADigitsDialedWC>(() => _encode_AMADigitsDialedWC, $.BER)(value.aMADigitsDialedWCList, $.BER)),
            /* IF_ABSENT  */ ((value.amp1 === undefined) ? undefined : _encode_Amp1(value.amp1, $.BER)),
            /* IF_ABSENT  */ ((value.amp2 === undefined) ? undefined : _encode_Amp2(value.amp2, $.BER)),
            /* IF_ABSENT  */ ((value.serviceProviderID === undefined) ? undefined : _encode_ServiceProviderID(value.serviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.serviceContext === undefined) ? undefined : _encode_ServiceContext(value.serviceContext, $.BER)),
            /* IF_ABSENT  */ ((value.aMABillingFeature === undefined) ? undefined : _encode_AMABillingFeature(value.aMABillingFeature, $.BER)),
            /* IF_ABSENT  */ ((value.aMASequenceNumber === undefined) ? undefined : _encode_AMASequenceNumber(value.aMASequenceNumber, $.BER)),
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.alternateDialingPlanInd === undefined) ? undefined : _encode_AlternateDialingPlanInd(value.alternateDialingPlanInd, $.BER)),
            /* IF_ABSENT  */ ((value.aMAserviceProviderID === undefined) ? undefined : _encode_AMAServiceProviderID(value.aMAserviceProviderID, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CollectInformationArg(value, elGetter);
}


/* eslint-enable */
