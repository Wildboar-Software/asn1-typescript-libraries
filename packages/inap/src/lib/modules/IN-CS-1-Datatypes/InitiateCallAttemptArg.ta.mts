/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS-1-Datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS-1-Datatypes/DestinationRoutingAddress.ta.mjs";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS-1-Datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS-1-Datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS-1-Datatypes/ServiceInteractionIndicators.ta.mjs";
// export { ServiceInteractionIndicators, _decode_ServiceInteractionIndicators, _encode_ServiceInteractionIndicators } from "../IN-CS-1-Datatypes/ServiceInteractionIndicators.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS-1-Datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS-1-Datatypes/CallingPartyNumber.ta.mjs";


/**
 * @summary InitiateCallAttemptArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InitiateCallAttemptArg ::= SEQUENCE {
 *   destinationRoutingAddress     [0]  DestinationRoutingAddress,
 *   alertingPattern               [1]  AlertingPattern OPTIONAL,
 *   iSDNAccessRelatedInformation  [2]  ISDNAccessRelatedInformation OPTIONAL,
 *   travellingClassMark           [3]  TravellingClassMark OPTIONAL,
 *   extensions
 *     [4]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            [5]  ExtensionField,
 *   serviceInteractionIndicators  [29]  ServiceInteractionIndicators OPTIONAL,
 *   callingPartyNumber            [30]  CallingPartyNumber OPTIONAL,
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
    readonly extensions: ExtensionField[];
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
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destinationRoutingAddress: DestinationRoutingAddress,
        alertingPattern: OPTIONAL<AlertingPattern>,
        iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>,
        travellingClassMark: OPTIONAL<TravellingClassMark>,
        extensions: ExtensionField[],
        serviceInteractionIndicators?: OPTIONAL<ServiceInteractionIndicators>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.alertingPattern = alertingPattern;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.serviceInteractionIndicators = serviceInteractionIndicators;
        this.callingPartyNumber = callingPartyNumber;
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
        return new InitiateCallAttemptArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.iSDNAccessRelatedInformation, _o.travellingClassMark, _o.extensions, _o.serviceInteractionIndicators, _o.callingPartyNumber, _o._unrecognizedExtensionsList);
    }


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
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("serviceInteractionIndicators", true, $.hasTag(_TagClass.context, 29)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 30))
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
    let extensions!: ExtensionField[];
    let serviceInteractionIndicators: OPTIONAL<ServiceInteractionIndicators>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => $._decode_implicit<ExtensionField>(() => _decode_ExtensionField)))(_el); },
        "serviceInteractionIndicators": (_el: _Element): void => { serviceInteractionIndicators = $._decode_implicit<ServiceInteractionIndicators>(() => _decode_ServiceInteractionIndicators)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); }
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
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
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
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => $._encode_implicit(_TagClass.context, 5, () => _encode_ExtensionField, $.BER), $.BER), $.BER)(value.extensions, $.BER);
    if (value.serviceInteractionIndicators !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 29, () => _encode_ServiceInteractionIndicators, $.BER)(value.serviceInteractionIndicators, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 30, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
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
