/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS2-datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS2-datatypes/AlertingPattern.ta.mjs";
import { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
// export { CallingPartyNumber, _decode_CallingPartyNumber, _encode_CallingPartyNumber } from "../IN-CS2-datatypes/CallingPartyNumber.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-CS2-datatypes/CalledPartyNumber.ta.mjs";
import { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS2-datatypes/DisplayInformation.ta.mjs";
// export { DisplayInformation, _decode_DisplayInformation, _encode_DisplayInformation } from "../IN-CS2-datatypes/DisplayInformation.ta.mjs";
import { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS2-datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS2-datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS2-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS2-datatypes/OriginalCalledPartyID.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS2-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS2-datatypes/TravellingClassMark.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
import { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS2-datatypes/INServiceCompatibilityResponse.ta.mjs";
// export { INServiceCompatibilityResponse, _decode_INServiceCompatibilityResponse, _encode_INServiceCompatibilityResponse } from "../IN-CS2-datatypes/INServiceCompatibilityResponse.ta.mjs";
import { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS2-datatypes/ForwardGVNS.ta.mjs";
// export { ForwardGVNS, _decode_ForwardGVNS, _encode_ForwardGVNS } from "../IN-CS2-datatypes/ForwardGVNS.ta.mjs";
import { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS2-datatypes/BackwardGVNS.ta.mjs";
// export { BackwardGVNS, _decode_BackwardGVNS, _encode_BackwardGVNS } from "../IN-CS2-datatypes/BackwardGVNS.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";


/**
 * @summary AuthorizeTerminationArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuthorizeTerminationArg ::= SEQUENCE {
 *   alertingPattern                  [0]  AlertingPattern OPTIONAL,
 *   callingPartyNumber               [1]  CallingPartyNumber OPTIONAL,
 *   destinationNumberRoutingAddress  [2]  CalledPartyNumber OPTIONAL,
 *   displayInformation               [3]  DisplayInformation OPTIONAL,
 *   iSDNAccessRelatedInformation     [4]  ISDNAccessRelatedInformation OPTIONAL,
 *   originalCalledPartyID            [5]  OriginalCalledPartyID OPTIONAL,
 *   travellingClassMark              [6]  TravellingClassMark OPTIONAL,
 *   extensions
 *     [7]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   iNServiceCompatibilityResponse   [8]  INServiceCompatibilityResponse OPTIONAL,
 *   forwardGVNS                      [9]  ForwardGVNS OPTIONAL,
 *   backwardGVNS                     [10]  BackwardGVNS OPTIONAL,
 *   legID                            [11]  LegID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class AuthorizeTerminationArg {
    /**
     * @summary `alertingPattern`.
     * @public
     * @readonly
     */
    readonly alertingPattern: OPTIONAL<AlertingPattern>;
    /**
     * @summary `callingPartyNumber`.
     * @public
     * @readonly
     */
    readonly callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    /**
     * @summary `destinationNumberRoutingAddress`.
     * @public
     * @readonly
     */
    readonly destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `displayInformation`.
     * @public
     * @readonly
     */
    readonly displayInformation: OPTIONAL<DisplayInformation>;
    /**
     * @summary `iSDNAccessRelatedInformation`.
     * @public
     * @readonly
     */
    readonly iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
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
    readonly extensions: OPTIONAL<ExtensionField[]>;
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
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        alertingPattern?: OPTIONAL<AlertingPattern>,
        callingPartyNumber?: OPTIONAL<CallingPartyNumber>,
        destinationNumberRoutingAddress?: OPTIONAL<CalledPartyNumber>,
        displayInformation?: OPTIONAL<DisplayInformation>,
        iSDNAccessRelatedInformation?: OPTIONAL<ISDNAccessRelatedInformation>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<ExtensionField[]>,
        iNServiceCompatibilityResponse?: OPTIONAL<INServiceCompatibilityResponse>,
        forwardGVNS?: OPTIONAL<ForwardGVNS>,
        backwardGVNS?: OPTIONAL<BackwardGVNS>,
        legID?: OPTIONAL<LegID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.alertingPattern = alertingPattern;
        this.callingPartyNumber = callingPartyNumber;
        this.destinationNumberRoutingAddress = destinationNumberRoutingAddress;
        this.displayInformation = displayInformation;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.originalCalledPartyID = originalCalledPartyID;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.iNServiceCompatibilityResponse = iNServiceCompatibilityResponse;
        this.forwardGVNS = forwardGVNS;
        this.backwardGVNS = backwardGVNS;
        this.legID = legID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new AuthorizeTerminationArg(_o.alertingPattern, _o.callingPartyNumber, _o.destinationNumberRoutingAddress, _o.displayInformation, _o.iSDNAccessRelatedInformation, _o.originalCalledPartyID, _o.travellingClassMark, _o.extensions, _o.iNServiceCompatibilityResponse, _o.forwardGVNS, _o.backwardGVNS, _o.legID, _o._unrecognizedExtensionsList);
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
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingPartyNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("destinationNumberRoutingAddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("displayInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("iNServiceCompatibilityResponse", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("forwardGVNS", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("backwardGVNS", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 11))
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
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let callingPartyNumber: OPTIONAL<CallingPartyNumber>;
    let destinationNumberRoutingAddress: OPTIONAL<CalledPartyNumber>;
    let displayInformation: OPTIONAL<DisplayInformation>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<ExtensionField[]>;
    let iNServiceCompatibilityResponse: OPTIONAL<INServiceCompatibilityResponse>;
    let forwardGVNS: OPTIONAL<ForwardGVNS>;
    let backwardGVNS: OPTIONAL<BackwardGVNS>;
    let legID: OPTIONAL<LegID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "callingPartyNumber": (_el: _Element): void => { callingPartyNumber = $._decode_implicit<CallingPartyNumber>(() => _decode_CallingPartyNumber)(_el); },
        "destinationNumberRoutingAddress": (_el: _Element): void => { destinationNumberRoutingAddress = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "displayInformation": (_el: _Element): void => { displayInformation = $._decode_implicit<DisplayInformation>(() => _decode_DisplayInformation)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "iNServiceCompatibilityResponse": (_el: _Element): void => { iNServiceCompatibilityResponse = $._decode_explicit<INServiceCompatibilityResponse>(() => _decode_INServiceCompatibilityResponse)(_el); },
        "forwardGVNS": (_el: _Element): void => { forwardGVNS = $._decode_implicit<ForwardGVNS>(() => _decode_ForwardGVNS)(_el); },
        "backwardGVNS": (_el: _Element): void => { backwardGVNS = $._decode_implicit<BackwardGVNS>(() => _decode_BackwardGVNS)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AuthorizeTerminationArg,
        _extension_additions_list_spec_for_AuthorizeTerminationArg,
        _root_component_type_list_2_spec_for_AuthorizeTerminationArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new AuthorizeTerminationArg(
        alertingPattern,
        callingPartyNumber,
        destinationNumberRoutingAddress,
        displayInformation,
        iSDNAccessRelatedInformation,
        originalCalledPartyID,
        travellingClassMark,
        extensions,
        iNServiceCompatibilityResponse,
        forwardGVNS,
        backwardGVNS,
        legID,
        _unrecognizedExtensionsList
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(12 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.callingPartyNumber !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallingPartyNumber, $.BER)(value.callingPartyNumber, $.BER);
    }
    if (value.destinationNumberRoutingAddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartyNumber, $.BER)(value.destinationNumberRoutingAddress, $.BER);
    }
    if (value.displayInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_DisplayInformation, $.BER)(value.displayInformation, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
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
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 11, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AuthorizeTerminationArg(value, elGetter);
}


/* eslint-enable */
