/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS-1-Datatypes/DestinationRoutingAddress.ta.mjs";
// export { DestinationRoutingAddress, _decode_DestinationRoutingAddress, _encode_DestinationRoutingAddress } from "../IN-CS-1-Datatypes/DestinationRoutingAddress.ta.mjs";
import { type AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
// export { AlertingPattern, _decode_AlertingPattern, _encode_AlertingPattern } from "../IN-CS-1-Datatypes/AlertingPattern.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS-1-Datatypes/CorrelationID.ta.mjs";
import { type ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS-1-Datatypes/ISDNAccessRelatedInformation.ta.mjs";
// export { ISDNAccessRelatedInformation, _decode_ISDNAccessRelatedInformation, _encode_ISDNAccessRelatedInformation } from "../IN-CS-1-Datatypes/ISDNAccessRelatedInformation.ta.mjs";
import { type OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-CS-1-Datatypes/OriginalCalledPartyID.ta.mjs";
import { type RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS-1-Datatypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS-1-Datatypes/RouteList.ta.mjs";
import { type ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS-1-Datatypes/ScfID.ta.mjs";
// export { ScfID, _decode_ScfID, _encode_ScfID } from "../IN-CS-1-Datatypes/ScfID.ta.mjs";
import { type TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-CS-1-Datatypes/TravellingClassMark.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { type Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";


/**
 * @summary SelectRouteArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SelectRouteArg ::= SEQUENCE {
 *   destinationRoutingAddress     [0]  DestinationRoutingAddress,
 *   alertingPattern               [1]  AlertingPattern OPTIONAL,
 *   correlationID                 [2]  CorrelationID OPTIONAL,
 *   iSDNAccessRelatedInformation  [3]  ISDNAccessRelatedInformation OPTIONAL,
 *   originalCalledPartyID         [4]  OriginalCalledPartyID OPTIONAL,
 *   routeList                     [5]  RouteList OPTIONAL,
 *   scfID                         [6]  ScfID OPTIONAL,
 *   travellingClassMark           [7]  TravellingClassMark OPTIONAL,
 *   extensions
 *     [8]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   carrier                       [9]  Carrier OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class SelectRouteArg {
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
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
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
     * @summary `routeList`.
     * @public
     * @readonly
     */
    readonly routeList: OPTIONAL<RouteList>;
    /**
     * @summary `scfID`.
     * @public
     * @readonly
     */
    readonly scfID: OPTIONAL<ScfID>;
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
     * @summary `carrier`.
     * @public
     * @readonly
     */
    readonly carrier: OPTIONAL<Carrier>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        destinationRoutingAddress: DestinationRoutingAddress,
        alertingPattern: OPTIONAL<AlertingPattern>,
        correlationID: OPTIONAL<CorrelationID>,
        iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>,
        originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>,
        routeList: OPTIONAL<RouteList>,
        scfID: OPTIONAL<ScfID>,
        travellingClassMark: OPTIONAL<TravellingClassMark>,
        extensions: ExtensionField[],
        carrier?: OPTIONAL<Carrier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.destinationRoutingAddress = destinationRoutingAddress;
        this.alertingPattern = alertingPattern;
        this.correlationID = correlationID;
        this.iSDNAccessRelatedInformation = iSDNAccessRelatedInformation;
        this.originalCalledPartyID = originalCalledPartyID;
        this.routeList = routeList;
        this.scfID = scfID;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.carrier = carrier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a SelectRouteArg
     * @description
     * 
     * This takes an `object` and converts it to a `SelectRouteArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SelectRouteArg`.
     * @returns {SelectRouteArg}
     */
    public static _from_object (_o: { [_K in keyof (SelectRouteArg)]: (SelectRouteArg)[_K] }): SelectRouteArg {
        return new SelectRouteArg(_o.destinationRoutingAddress, _o.alertingPattern, _o.correlationID, _o.iSDNAccessRelatedInformation, _o.originalCalledPartyID, _o.routeList, _o.scfID, _o.travellingClassMark, _o.extensions, _o.carrier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SelectRouteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SelectRouteArg: $.ComponentSpec[] = [
    new $.ComponentSpec("destinationRoutingAddress", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("alertingPattern", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iSDNAccessRelatedInformation", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("scfID", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of SelectRouteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SelectRouteArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SelectRouteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SelectRouteArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SelectRouteArg: $.ASN1Decoder<SelectRouteArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SelectRouteArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SelectRouteArg (el: _Element): SelectRouteArg {
    if (!_cached_decoder_for_SelectRouteArg) { _cached_decoder_for_SelectRouteArg = function (el: _Element): SelectRouteArg {
    let destinationRoutingAddress!: DestinationRoutingAddress;
    let alertingPattern: OPTIONAL<AlertingPattern>;
    let correlationID: OPTIONAL<CorrelationID>;
    let iSDNAccessRelatedInformation: OPTIONAL<ISDNAccessRelatedInformation>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let routeList: OPTIONAL<RouteList>;
    let scfID: OPTIONAL<ScfID>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions!: ExtensionField[];
    let carrier: OPTIONAL<Carrier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "destinationRoutingAddress": (_el: _Element): void => { destinationRoutingAddress = $._decode_implicit<DestinationRoutingAddress>(() => _decode_DestinationRoutingAddress)(_el); },
        "alertingPattern": (_el: _Element): void => { alertingPattern = $._decode_implicit<AlertingPattern>(() => _decode_AlertingPattern)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "iSDNAccessRelatedInformation": (_el: _Element): void => { iSDNAccessRelatedInformation = $._decode_implicit<ISDNAccessRelatedInformation>(() => _decode_ISDNAccessRelatedInformation)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "scfID": (_el: _Element): void => { scfID = $._decode_implicit<ScfID>(() => _decode_ScfID)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SelectRouteArg,
        _extension_additions_list_spec_for_SelectRouteArg,
        _root_component_type_list_2_spec_for_SelectRouteArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SelectRouteArg(
        destinationRoutingAddress,
        alertingPattern,
        correlationID,
        iSDNAccessRelatedInformation,
        originalCalledPartyID,
        routeList,
        scfID,
        travellingClassMark,
        extensions,
        carrier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SelectRouteArg(el);
}

let _cached_encoder_for_SelectRouteArg: $.ASN1Encoder<SelectRouteArg> | null = null;

/**
 * @summary Encodes a(n) SelectRouteArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SelectRouteArg, encoded as an ASN.1 Element.
 */
export
function _encode_SelectRouteArg (value: SelectRouteArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SelectRouteArg) { _cached_encoder_for_SelectRouteArg = function (value: SelectRouteArg, elGetter: $.ASN1Encoder<SelectRouteArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DestinationRoutingAddress, $.BER)(value.destinationRoutingAddress, $.BER);
    if (value.alertingPattern !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_AlertingPattern, $.BER)(value.alertingPattern, $.BER);
    }
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.iSDNAccessRelatedInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ISDNAccessRelatedInformation, $.BER)(value.iSDNAccessRelatedInformation, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.routeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    }
    if (value.scfID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ScfID, $.BER)(value.scfID, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 8, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SelectRouteArg(value, elGetter);
}


/* eslint-enable */
