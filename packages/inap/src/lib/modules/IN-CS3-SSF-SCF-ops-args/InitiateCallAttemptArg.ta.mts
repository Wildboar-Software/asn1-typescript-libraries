/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS3-SSF-SCF-datatypes/DestinationRoutingAddress.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS3-SSF-SCF-datatypes/AlertingPattern.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS3-SSF-SCF-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS3-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicators.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS3-SSF-SCF-datatypes/CallingPartyNumber.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
import { leg1 } from "../IN-CS3-SSF-SCF-datatypes/leg1.va.mjs";
// export { leg1 } from "../IN-CS3-SSF-SCF-datatypes/leg1.va.mjs";
import { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
// export { CallSegmentID, _decode_CallSegmentID, _encode_CallSegmentID } from "../IN-CS3-SSF-SCF-datatypes/CallSegmentID.ta.mjs";
import { initialCallSegment } from "../IN-CS3-SSF-SCF-datatypes/initialCallSegment.va.mjs";
// export { initialCallSegment } from "../IN-CS3-SSF-SCF-datatypes/initialCallSegment.va.mjs";
import { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS3-SSF-SCF-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
// export { ServiceInteractionIndicatorsTwo, _decode_ServiceInteractionIndicatorsTwo, _encode_ServiceInteractionIndicatorsTwo } from "../IN-CS3-SSF-SCF-datatypes/ServiceInteractionIndicatorsTwo.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS3-SSF-SCF-datatypes/Carrier.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS3-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS3-SSF-SCF-datatypes/ScfID.ta.mjs";
import { CallReference, _decode_CallReference, _encode_CallReference } from "../IN-CS3-SSF-SCF-datatypes/CallReference.ta.mjs";
// export { CallReference, _decode_CallReference, _encode_CallReference } from "../IN-CS3-SSF-SCF-datatypes/CallReference.ta.mjs";
import { CalledDirectoryNumber, _decode_CalledDirectoryNumber, _encode_CalledDirectoryNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledDirectoryNumber.ta.mjs";
// export { CalledDirectoryNumber, _decode_CalledDirectoryNumber, _encode_CalledDirectoryNumber } from "../IN-CS3-SSF-SCF-datatypes/CalledDirectoryNumber.ta.mjs";


/**
 * @summary InitiateCallAttemptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallAttemptArg ::= SEQUENCE {
 *   destinationRoutingAddress        [0]  DestinationRoutingAddress,
 *   alertingPattern                  [1]  AlertingPattern OPTIONAL,
 *   iSDNAccessRelatedInformation
 *     [2]  ISDNAccessRelatedInformation OPTIONAL,
 *   travellingClassMark              [3]  TravellingClassMark OPTIONAL,
 *   extensions                       [4]  Extensions OPTIONAL,
 *   serviceInteractionIndicators
 *     [29]  ServiceInteractionIndicators OPTIONAL,
 *   callingPartyNumber               [30]  CallingPartyNumber OPTIONAL,
 *   legToBeCreated                   [5]  LegID DEFAULT sendingSideID:leg1,
 *   newCallSegment
 *     [6]  CallSegmentID DEFAULT initialCallSegment,
 *   iNServiceCompatibilityResponse   [7]  INServiceCompatibilityResponse OPTIONAL,
 *   serviceInteractionIndicatorsTwo
 *     [8]  ServiceInteractionIndicatorsTwo OPTIONAL,
 *   carrier                          [9]  Carrier OPTIONAL,
 *   correlationID                    [10]  CorrelationID OPTIONAL,
 *   scfID                            [11]  ScfID OPTIONAL,
 *   callReference                    [12]  CallReference OPTIONAL,
 *   calledDirectoryNumber            [13]  CalledDirectoryNumber OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class InitiateCallAttemptArg {
    /**
     * @summary `destinationRoutingAddress`.
     * @public
     * @readonly
     */
    readonly destinationRoutingAddress: DestinationRoutingAddress;
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
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
     * @summary `serviceInteractionIndicators`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `legToBeCreated`.
     * @public
     * @readonly
     */
    readonly legToBeCreated: OPTIONAL<LegID>;
    /**
     * @summary `newCallSegment`.
     * @public
     * @readonly
     */
    readonly newCallSegment: OPTIONAL<CallSegmentID>;
    /**
     * @summary `iNServiceCompatibilityResponse`.
     * @public
     * @readonly
     */
    readonly iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    /**
     * @summary `serviceInteractionIndicatorsTwo`.
     * @public
     * @readonly
     */
    readonly serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    /**
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: OPTIONAL<ScfID>;
    /**
     * @summary `callReference`.
     * @public
     * @readonly
     */
    readonly callReference: OPTIONAL<CallReference>;
    /**
     * @summary `calledDirectoryNumber`.
     * @public
     * @readonly
     */
    readonly calledDirectoryNumber: OPTIONAL<CalledDirectoryNumber>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destinationRoutingAddress: DestinationRoutingAddress,
        alertingPattern?: OPTIONAL<AlertingPattern>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        legToBeCreated?: OPTIONAL<LegID>,
        newCallSegment?: OPTIONAL<CallSegmentID>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        serviceInteractionIndicatorsTwo?: OPTIONAL<ServiceInteractionIndicatorsTwo>,
        carrier?: OPTIONAL<Carrier>,
        correlationID?: OPTIONAL<CorrelationID>,
        scfID?: OPTIONAL<ScfID>,
        callReference?: OPTIONAL<CallReference>,
        calledDirectoryNumber?: OPTIONAL<CalledDirectoryNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.alertingPattern = alertingPattern;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.callingPartyNumber = callingPartyNumber;
        this.legToBeCreated = legToBeCreated;
        this.newCallSegment = newCallSegment;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.serviceInteractionIndicatorsTwo = serviceInteractionIndicatorsTwo;
        this.carrier = carrier;
        this.correlationID = correlationID;
        this.scfID = scfID;
        this.callReference = callReference;
        this.calledDirectoryNumber = calledDirectoryNumber;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a InitiateCallAttemptArg
     * @description
     * 
     * This takes an `object` and converts it to a `InitiateCallAttemptArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `InitiateCallAttemptArg`.
     * @returns {InitiateCallAttemptArg}
     */
    public static _from_object (_o: { [_K in keyof (InitiateCallAttemptArg)]: (InitiateCallAttemptArg)[_K] }): InitiateCallAttemptArg {
        return new InitiateCallAttemptArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.iSDNAccessRelatedInformation, _o.travellingClassMark, _o.extensions, _o.serviceInteractionIndicators, _o.callingPartyNumber, _o.legToBeCreated, _o.newCallSegment, _o.iNServiceCompatibilityResponse, _o.serviceInteractionIndicatorsTwo, _o.carrier, _o.correlationID, _o.scfID, _o.callReference, _o.calledDirectoryNumber, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `legToBeCreated`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_legToBeCreated () { return { sendingSideID: leg1 }; }
    /**
     * @summary Getter that returns the default value for `newCallSegment`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_newCallSegment () { return initialCallSegment; }
}

/**
 * @summary The Leading Root Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 30)),
    new $.ComponentSpec("legToBeCreated", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("newCallSegment", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("serviceInteractionIndicatorsTwo", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("callReference", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("calledDirectoryNumber", true, $.hasTag(_TagClass.context, 13))
];

/**
 * @summary The Trailing Root Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of InitiateCallAttemptArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_InitiateCallAttemptArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_InitiateCallAttemptArg: $.ASN1Decoder<InitiateCallAttemptArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) InitiateCallAttemptArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_InitiateCallAttemptArg (el: _Element): InitiateCallAttemptArg {
    if (!_cached_decoder_for_InitiateCallAttemptArg) { _cached_decoder_for_InitiateCallAttemptArg = function (el: _Element): InitiateCallAttemptArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let legToBeCreated: OPTIONAL<LegID> = InitiateCallAttemptArg._default_value_for_legToBeCreated;
    let newCallSegment: OPTIONAL<CallSegmentID> = InitiateCallAttemptArg._default_value_for_newCallSegment;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let serviceInteractionIndicatorsTwo: OPTIONAL<ServiceInteractionIndicatorsTwo>;
    let carrier: OPTIONAL<Carrier>;
    let correlationID: OPTIONAL<CorrelationID>;
    let scfID: OPTIONAL<ScfID>;
    let callReference: OPTIONAL<CallReference>;
    let calledDirectoryNumber: OPTIONAL<CalledDirectoryNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "legToBeCreated": (_el: _Element): void => { legToBeCreated = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "newCallSegment": (_el: _Element): void => { newCallSegment = $._decode_implicit<CallSegmentID>(() => _decode_CallSegmentID)(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "serviceInteractionIndicatorsTwo": (_el: _Element): void => { serviceInteractionIndicatorsTwo = $._decode_implicit<ServiceInteractionIndicatorsTwo>(() => _decode_ServiceInteractionIndicatorsTwo)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "callReference": (_el: _Element): void => { callReference = $._decode_implicit<CallReference>(() => _decode_CallReference)(_el); },
        "calledDirectoryNumber": (_el: _Element): void => { calledDirectoryNumber = $._decode_implicit<CalledDirectoryNumber>(() => _decode_CalledDirectoryNumber)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_InitiateCallAttemptArg,
        _extension_additions_list_spec_for_InitiateCallAttemptArg,
        _root_component_type_list_2_spec_for_InitiateCallAttemptArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new InitiateCallAttemptArg(
        destinationRoutingAddress,
        alertingPattern,
        iSDNAccessRelatedInformation,
        travellingClassMark,
        extensions,
        serviceInteractionIndicators,
        callingPartyNumber,
        legToBeCreated,
        newCallSegment,
        iNServiceCompatibilityResponse,
        serviceInteractionIndicatorsTwo,
        carrier,
        correlationID,
        scfID,
        callReference,
        calledDirectoryNumber,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_InitiateCallAttemptArg(el);
}

let _cached_encoder_for_InitiateCallAttemptArg: $.ASN1Encoder<InitiateCallAttemptArg> | null = null;

/**
 * @summary Encodes a(n) InitiateCallAttemptArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The InitiateCallAttemptArg, encoded as an ASN.1 Element.
 */
export
function _encode_InitiateCallAttemptArg (value: InitiateCallAttemptArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_InitiateCallAttemptArg) { _cached_encoder_for_InitiateCallAttemptArg = function (value: InitiateCallAttemptArg, elGetter: $.ASN1Encoder<InitiateCallAttemptArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(16 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER);
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.legToBeCreated !== undefined && !$.deepEq(value.legToBeCreated, InitiateCallAttemptArg._default_value_for_legToBeCreated)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_explicit(_TagClass.context, 5, () => _encode_LegID, $.BER)(value.legToBeCreated, $.BER);
    }
    if (value.newCallSegment !== undefined && !$.deepEq(value.newCallSegment, InitiateCallAttemptArg._default_value_for_newCallSegment)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 6, () => _encode_CallSegmentID, $.BER)(value.newCallSegment, $.BER);
    }
    if (value.iNServiceCompatibilityResponse !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 7, () => _encode_INServiceCompatibilityResponse, $.BER)(value.iNServiceCompatibilityResponse, $.BER);
    }
    if (value.serviceInteractionIndicatorsTwo !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ServiceInteractionIndicatorsTwo, $.BER)(value.serviceInteractionIndicatorsTwo, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.callReference !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_CallReference, $.BER)(value.callReference, $.BER);
    }
    if (value.calledDirectoryNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_CalledDirectoryNumber, $.BER)(value.calledDirectoryNumber, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_InitiateCallAttemptArg(value, elGetter);
}


/* eslint-enable */
