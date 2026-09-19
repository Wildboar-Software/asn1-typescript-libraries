/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
// export { CallingPartyID, _decode_CallingPartyID, _encode_CallingPartyID } from "../AIN-Parameters/CallingPartyID.ta.mjs";
import { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
// export { Tcm, _decode_Tcm, _encode_Tcm } from "../AIN-Parameters/Tcm.ta.mjs";
import { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
// export { ControllingLegTreatment, _decode_ControllingLegTreatment, _encode_ControllingLegTreatment } from "../AIN-Parameters/ControllingLegTreatment.ta.mjs";
import { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
// export { DisplayText, _decode_DisplayText, _encode_DisplayText } from "../AIN-Parameters/DisplayText.ta.mjs";
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
import { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";
// export { GenericName, _decode_GenericName, _encode_GenericName } from "../AIN-Parameters/GenericName.ta.mjs";


/**
 * @summary AuthorizeTerminationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizeTerminationArg ::= SEQUENCE{
 *             callingPartyID                  CallingPartyID OPTIONAL,
 *             tcm                             Tcm OPTIONAL,
 *             controllingLegTreatment         ControllingLegTreatment OPTIONAL,
 *             displayText                     DisplayText OPTIONAL,
 *             primaryBillingIndicator         PrimaryBillingIndicator OPTIONAL,
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
 *             extensionParameter              [84] IMPLICIT ExtensionParameter OPTIONAL,
 *             aMAserviceProviderID            AMAServiceProviderID OPTIONAL,
 *             genericName                     GenericName OPTIONAL
 *         }
 * ```
 * 
 * @class
 */
export
class AuthorizeTerminationArg {
    constructor (
        /**
         * @summary `callingPartyID`.
         * @public
         * @readonly
         */
        readonly callingPartyID: OPTIONAL<CallingPartyID>,
        /**
         * @summary `tcm`.
         * @public
         * @readonly
         */
        readonly tcm: OPTIONAL<Tcm>,
        /**
         * @summary `controllingLegTreatment`.
         * @public
         * @readonly
         */
        readonly controllingLegTreatment: OPTIONAL<ControllingLegTreatment>,
        /**
         * @summary `displayText`.
         * @public
         * @readonly
         */
        readonly displayText: OPTIONAL<DisplayText>,
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
         * @summary `genericName`.
         * @public
         * @readonly
         */
        readonly genericName: OPTIONAL<GenericName>
    ) {}

    /**
     * @summary Restructures an object into a AuthorizeTerminationArg
     * @description
     * 
     * This takes an `object` and converts it to a `AuthorizeTerminationArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuthorizeTerminationArg`.
     * @returns {AuthorizeTerminationArg}
     */
    public static _from_object (_o: { [_K in keyof (AuthorizeTerminationArg)]: (AuthorizeTerminationArg)[_K] }): AuthorizeTerminationArg {
        return new AuthorizeTerminationArg(_o.callingPartyID, _o.tcm, _o.controllingLegTreatment, _o.displayText, _o.primaryBillingIndicator, _o.aMAAlternateBillingNumber, _o.aMABusinessCustomerID, _o.aMALineNumberList, _o.aMAslpID, _o.aMADigitsDialedWCList, _o.amp1, _o.amp2, _o.serviceProviderID, _o.serviceContext, _o.aMABillingFeature, _o.aMASequenceNumber, _o.extensionParameter, _o.aMAserviceProviderID, _o.genericName);
    }


}

/**
 * @summary The Leading Root Component Types of AuthorizeTerminationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuthorizeTerminationArg: $.ComponentSpec[] = [
    new $.ComponentSpec("callingPartyID", true, $.hasTag(_TagClass.context, 18)),
    new $.ComponentSpec("tcm", true, $.hasTag(_TagClass.context, 51)),
    new $.ComponentSpec("controllingLegTreatment", true, $.hasTag(_TagClass.context, 24)),
    new $.ComponentSpec("displayText", true, $.hasTag(_TagClass.context, 26)),
    new $.ComponentSpec("primaryBillingIndicator", true, $.hasTag(_TagClass.context, 40)),
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
    new $.ComponentSpec("extensionParameter", true, $.hasTag(_TagClass.context, 84)),
    new $.ComponentSpec("aMAserviceProviderID", true, $.hasTag(_TagClass.context, 101)),
    new $.ComponentSpec("genericName", true, $.hasTag(_TagClass.context, 33))
];

/**
 * @summary The Trailing Root Component Types of AuthorizeTerminationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuthorizeTerminationArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuthorizeTerminationArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuthorizeTerminationArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuthorizeTerminationArg: $.ASN1Decoder<AuthorizeTerminationArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuthorizeTerminationArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuthorizeTerminationArg (el: _Element): AuthorizeTerminationArg {
    if (!_cached_decoder_for_AuthorizeTerminationArg) { _cached_decoder_for_AuthorizeTerminationArg = function (el: _Element): AuthorizeTerminationArg {
    let callingPartyID: OPTIONAL<CallingPartyID>;
    let tcm: OPTIONAL<Tcm>;
    let controllingLegTreatment: OPTIONAL<ControllingLegTreatment>;
    let displayText: OPTIONAL<DisplayText>;
    let primaryBillingIndicator: OPTIONAL<PrimaryBillingIndicator>;
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
    let extensionParameter: OPTIONAL<ExtensionParameter>;
    let aMAserviceProviderID: OPTIONAL<AMAServiceProviderID>;
    let genericName: OPTIONAL<GenericName>;
    const callbacks: $.DecodingMap = {
        "callingPartyID": (_el: _Element): void => { callingPartyID = _decode_CallingPartyID(_el); },
        "tcm": (_el: _Element): void => { tcm = _decode_Tcm(_el); },
        "controllingLegTreatment": (_el: _Element): void => { controllingLegTreatment = _decode_ControllingLegTreatment(_el); },
        "displayText": (_el: _Element): void => { displayText = _decode_DisplayText(_el); },
        "primaryBillingIndicator": (_el: _Element): void => { primaryBillingIndicator = _decode_PrimaryBillingIndicator(_el); },
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
        "extensionParameter": (_el: _Element): void => { extensionParameter = $._decode_implicit<ExtensionParameter>(() => _decode_ExtensionParameter)(_el); },
        "aMAserviceProviderID": (_el: _Element): void => { aMAserviceProviderID = _decode_AMAServiceProviderID(_el); },
        "genericName": (_el: _Element): void => { genericName = _decode_GenericName(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthorizeTerminationArg,
        _extension_additions_list_spec_for_AuthorizeTerminationArg,
        _root_component_type_list_2_spec_for_AuthorizeTerminationArg,
        undefined,
    );
    return new AuthorizeTerminationArg(
        callingPartyID,
        tcm,
        controllingLegTreatment,
        displayText,
        primaryBillingIndicator,
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
        extensionParameter,
        aMAserviceProviderID,
        genericName
    );
}; }
    return _cached_decoder_for_AuthorizeTerminationArg(el);
}

let _cached_encoder_for_AuthorizeTerminationArg: $.ASN1Encoder<AuthorizeTerminationArg> | null = null;

/**
 * @summary Encodes a(n) AuthorizeTerminationArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuthorizeTerminationArg, encoded as an ASN.1 Element.
 */
export
function _encode_AuthorizeTerminationArg (value: AuthorizeTerminationArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuthorizeTerminationArg) { _cached_encoder_for_AuthorizeTerminationArg = function (value: AuthorizeTerminationArg, elGetter: $.ASN1Encoder<AuthorizeTerminationArg>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.callingPartyID === undefined) ? undefined : _encode_CallingPartyID(value.callingPartyID, $.BER)),
            /* IF_ABSENT  */ ((value.tcm === undefined) ? undefined : _encode_Tcm(value.tcm, $.BER)),
            /* IF_ABSENT  */ ((value.controllingLegTreatment === undefined) ? undefined : _encode_ControllingLegTreatment(value.controllingLegTreatment, $.BER)),
            /* IF_ABSENT  */ ((value.displayText === undefined) ? undefined : _encode_DisplayText(value.displayText, $.BER)),
            /* IF_ABSENT  */ ((value.primaryBillingIndicator === undefined) ? undefined : _encode_PrimaryBillingIndicator(value.primaryBillingIndicator, $.BER)),
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
            /* IF_ABSENT  */ ((value.extensionParameter === undefined) ? undefined : $._encode_implicit(_TagClass.context, 84, () => _encode_ExtensionParameter, $.BER)(value.extensionParameter, $.BER)),
            /* IF_ABSENT  */ ((value.aMAserviceProviderID === undefined) ? undefined : _encode_AMAServiceProviderID(value.aMAserviceProviderID, $.BER)),
            /* IF_ABSENT  */ ((value.genericName === undefined) ? undefined : _encode_GenericName(value.genericName, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuthorizeTerminationArg(value, elGetter);
}


/* eslint-enable */
