/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { NumberingPlan, _decode_NumberingPlan, _encode_NumberingPlan } from "../IN-CS3-SSF-SCF-datatypes/NumberingPlan.ta.mjs";
// export { NumberingPlan, _decode_NumberingPlan, _encode_NumberingPlan } from "../IN-CS3-SSF-SCF-datatypes/NumberingPlan.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS3-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/ForwardGVNS.ta.mjs";
import { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS3-SSF-SCF-datatypes/BackwardGVNS.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";


/**
 * @summary CollectInformationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectInformationArg ::= SEQUENCE {
 *   alertingPattern                  [0]  AlertingPattern OPTIONAL,
 *   numberingPlan                    [1]  NumberingPlan OPTIONAL,
 *   originalCalledPartyID            [2]  OriginalCalledPartyID OPTIONAL,
 *   travellingClassMark              [3]  TravellingClassMark OPTIONAL,
 *   extensions                       [4]  Extensions OPTIONAL,
 *   callingPartyNumber               [5]  CallingPartyNumber OPTIONAL,
 *   dialledDigits                    [6]  CalledPartyNumber OPTIONAL,
 *   serviceInteractionIndicators
 *     [7]  ServiceInteractionIndicators OPTIONAL,
 *   iNServiceCompatibilityResponse   [8]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [9]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [10]  BackwardGVNS OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [11]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   callSegmentID                    [12]  CallSegmentID OPTIONAL,
 *   legToBeCreated                   [13]  LegID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class CollectInformationArg {
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `numberingPlan`.
     * @public
     * @readonly
     */
    readonly numberingPlan: OPTIONAL<NumberingPlan>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `travellingClassMark`.
     * @public
     * @readonly
     */
    readonly travellingClassMark: OPTIONAL<TravellingClassMark>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `dialledDigits`.
     * @public
     * @readonly
     */
    readonly dialledDigits: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `serviceInteractionIndicators`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    /**
     * @summary `iNServiceCompatibilityResponse`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    /**
     * @summary `forwardGVNS`.
     * @public
     * @readonly
     */
    readonly forwardGVNS: OPTIONAL<ForwardGVNS>;
    /**
     * @summary `backwardGVNS`.
     * @public
     * @readonly
     */
    readonly backwardGVNS: OPTIONAL<BackwardGVNS>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `callSegmentID`.
     * @public
     * @readonly
     */
    readonly callSegmentID: OPTIONAL<CallSegmentID>;
    /**
     * @summary `legToBeCreated`.
     * @public
     * @readonly
     */
    readonly legToBeCreated: OPTIONAL<LegID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        alertingPattern?: OPTIONAL<AlertingPattern>,
        numberingPlan?: OPTIONAL<NumberingPlan>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        dialledDigits?: OPTIONAL<CalledPartyNumber>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        callSegmentID?: OPTIONAL<CallSegmentID>,
        legToBeCreated?: OPTIONAL<LegID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.alertingPattern = alertingPattern;
        this.numberingPlan = numberingPlan;
        this.originalCalledPartyID = originalCalledPartyID;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.callingPartyNumber = callingPartyNumber;
        this.dialledDigits = dialledDigits;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.callSegmentID = callSegmentID;
        this.legToBeCreated = legToBeCreated;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new CollectInformationArg(_o.alertingPattern, _o.numberingPlan, _o.originalCalledPartyID, _o.travellingClassMark, _o.extensions, _o.callingPartyNumber, _o.dialledDigits, _o.serviceInteractionIndicators, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.serviceInteractionIndicatorsTwo, _o.callSegmentID, _o.legToBeCreated, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("numberingPlan", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("dialledDigits", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callSegmentID", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 13))
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
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let numberingPlan: OPTIONAL<NumberingPlan>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let dialledDigits: OPTIONAL<CalledPartyNumber>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let callSegmentID: OPTIONAL<CallSegmentID>;
    let legToBeCreated: OPTIONAL<LegID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "numberingPlan": (_el: _Element): void => { numberingPlan = $._decode_implicit<NumberingPlan>(() => _decode_NumberingPlan)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "dialledDigits": (_el: _Element): void => { dialledDigits = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "callSegmentID": (_el: _Element): void => { callSegmentID = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "legToBeCreated": (_el: _Element): void => { legToBeCreated = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectInformationArg,
        _extension_additions_list_spec_for_CollectInformationArg,
        _root_component_type_list_2_spec_for_CollectInformationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CollectInformationArg(
        alertingPattern,
        numberingPlan,
        originalCalledPartyID,
        travellingClassMark,
        extensions,
        callingPartyNumber,
        dialledDigits,
        serviceInteractionIndicators,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        serviceInteractionIndicatorsTwo,
        callSegmentID,
        legToBeCreated,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(14 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.numberingPlan !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_NumberingPlan, $.BER)(value.numberingPlan, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.dialledDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_CalledPartyNumber, $.BER)(value.dialledDigits, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.forwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_ForwardGVNS, $.BER)(value.forwardGVNS, $.BER);
    }
    if (value.backwardGVNS !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_BackwardGVNS, $.BER)(value.backwardGVNS, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.callSegmentID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_CallSegmentID, $.BER)(value.callSegmentID, $.BER);
    }
    if (value.legToBeCreated !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 13, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CollectInformationArg(value, elGetter);
}


/* eslint-enable */
