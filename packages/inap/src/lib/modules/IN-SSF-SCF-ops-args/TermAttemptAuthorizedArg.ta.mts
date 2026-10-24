/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
import { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CalledPartyBusinessGroupID.ta.mjs";
// export { CalledPartyBusinessGroupID, _decode_CalledPartyBusinessGroupID, _encode_CalledPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CalledPartyBusinessGroupID.ta.mjs";
import { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-SSF-SCF-datatypes/CalledPartySubaddress.ta.mjs";
// export { CalledPartySubaddress, _decode_CalledPartySubaddress, _encode_CalledPartySubaddress } from "../IN-SSF-SCF-datatypes/CalledPartySubaddress.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
// export { RedirectingPartyID, _decode_RedirectingPartyID, _encode_RedirectingPartyID } from "../IN-SSF-SCF-datatypes/RedirectingPartyID.ta.mjs";
import { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
// export { RedirectionInformation, _decode_RedirectionInformation, _encode_RedirectionInformation } from "../IN-SSF-SCF-datatypes/RedirectionInformation.ta.mjs";
import { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-SSF-SCF-datatypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-SSF-SCF-datatypes/RouteList.ta.mjs";
import { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
// export { TravellingClassMark, _decode_TravellingClassMark, _encode_TravellingClassMark } from "../IN-SSF-SCF-datatypes/TravellingClassMark.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";


/**
 * @summary TermAttemptAuthorizedArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermAttemptAuthorizedArg ::= SEQUENCE {
 *   dpSpecificCommonParameters   [0]  DpSpecificCommonParameters,
 *   calledPartyBusinessGroupID   [1]  CalledPartyBusinessGroupID OPTIONAL,
 *   calledPartySubaddress        [2]  CalledPartySubaddress OPTIONAL,
 *   callingPartyBusinessGroupID  [3]  CallingPartyBusinessGroupID OPTIONAL,
 *   originalCalledPartyID        [4]  OriginalCalledPartyID OPTIONAL,
 *   redirectingPartyID           [5]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation       [6]  RedirectionInformation OPTIONAL,
 *   routeList                    [7]  RouteList OPTIONAL,
 *   travellingClassMark          [8]  TravellingClassMark OPTIONAL,
 *   extensions                   [9]  Extensions OPTIONAL,
 *   callingPartySubaddress       [10]  CallingPartySubaddress OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TermAttemptAuthorizedArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `calledPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    /**
     * @summary `calledPartySubaddress`.
     * @public
     * @readonly
     */
    readonly calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `redirectingPartyID`.
     * @public
     * @readonly
     */
    readonly redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    /**
     * @summary `redirectionInformation`.
     * @public
     * @readonly
     */
    readonly redirectionInformation: OPTIONAL<RedirectionInformation>;
    /**
     * @summary `routeList`.
     * @public
     * @readonly
     */
    readonly routeList: OPTIONAL<RouteList>;
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
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        calledPartyBusinessGroupID?: OPTIONAL<CalledPartyBusinessGroupID>,
        calledPartySubaddress?: OPTIONAL<CalledPartySubaddress>,
        callingPartyBusinessGroupID?: OPTIONAL<CallingPartyBusinessGroupID>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        routeList?: OPTIONAL<RouteList>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        callingPartySubaddress?: OPTIONAL<CallingPartySubaddress>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.calledPartyBusinessGroupID = calledPartyBusinessGroupID;
        this.calledPartySubaddress = calledPartySubaddress;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.originalCalledPartyID = originalCalledPartyID;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.routeList = routeList;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.callingPartySubaddress = callingPartySubaddress;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TermAttemptAuthorizedArg
     * @description
     * 
     * This takes an `object` and converts it to a `TermAttemptAuthorizedArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermAttemptAuthorizedArg`.
     * @returns {TermAttemptAuthorizedArg}
     */
    public static _from_object (_o: { [_K in keyof (TermAttemptAuthorizedArg)]: (TermAttemptAuthorizedArg)[_K] }): TermAttemptAuthorizedArg {
        return new TermAttemptAuthorizedArg(_o.dpSpecificCommonParameters, _o.calledPartyBusinessGroupID, _o.calledPartySubaddress, _o.callingPartyBusinessGroupID, _o.originalCalledPartyID, _o.redirectingPartyID, _o.redirectionInformation, _o.routeList, _o.travellingClassMark, _o.extensions, _o.callingPartySubaddress, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of TermAttemptAuthorizedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermAttemptAuthorizedArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of TermAttemptAuthorizedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermAttemptAuthorizedArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermAttemptAuthorizedArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermAttemptAuthorizedArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermAttemptAuthorizedArg: $.ASN1Decoder<TermAttemptAuthorizedArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermAttemptAuthorizedArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermAttemptAuthorizedArg (el: _Element): TermAttemptAuthorizedArg {
    if (!_cached_decoder_for_TermAttemptAuthorizedArg) { _cached_decoder_for_TermAttemptAuthorizedArg = function (el: _Element): TermAttemptAuthorizedArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let routeList: OPTIONAL<RouteList>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "calledPartyBusinessGroupID": (_el: _Element): void => { calledPartyBusinessGroupID = $._decode_implicit<CalledPartyBusinessGroupID>(() => _decode_CalledPartyBusinessGroupID)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermAttemptAuthorizedArg,
        _extension_additions_list_spec_for_TermAttemptAuthorizedArg,
        _root_component_type_list_2_spec_for_TermAttemptAuthorizedArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TermAttemptAuthorizedArg(
        dpSpecificCommonParameters,
        calledPartyBusinessGroupID,
        calledPartySubaddress,
        callingPartyBusinessGroupID,
        originalCalledPartyID,
        redirectingPartyID,
        redirectionInformation,
        routeList,
        travellingClassMark,
        extensions,
        callingPartySubaddress,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TermAttemptAuthorizedArg(el);
}

let _cached_encoder_for_TermAttemptAuthorizedArg: $.ASN1Encoder<TermAttemptAuthorizedArg> | null = null;

/**
 * @summary Encodes a(n) TermAttemptAuthorizedArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermAttemptAuthorizedArg, encoded as an ASN.1 Element.
 */
export
function _encode_TermAttemptAuthorizedArg (value: TermAttemptAuthorizedArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermAttemptAuthorizedArg) { _cached_encoder_for_TermAttemptAuthorizedArg = function (value: TermAttemptAuthorizedArg, elGetter: $.ASN1Encoder<TermAttemptAuthorizedArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(11 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.calledPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyBusinessGroupID, $.BER)(value.calledPartyBusinessGroupID, $.BER);
    }
    if (value.calledPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CalledPartySubaddress, $.BER)(value.calledPartySubaddress, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.routeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TermAttemptAuthorizedArg(value, elGetter);
}


/* eslint-enable */
