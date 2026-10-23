/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-SSF-SCF-datatypes/DpSpecificCommonParameters.ta.mjs";
import { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
// export { CalledPartyNumber, _decode_CalledPartyNumber, _encode_CalledPartyNumber } from "../IN-SSF-SCF-datatypes/CalledPartyNumber.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-SSF-SCF-datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-SSF-SCF-datatypes/CallingPartySubaddress.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
import { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
// export { OriginalCalledPartyID, _decode_OriginalCalledPartyID, _encode_OriginalCalledPartyID } from "../IN-SSF-SCF-datatypes/OriginalCalledPartyID.ta.mjs";
import { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
// export { Digits, _decode_Digits, _encode_Digits } from "../IN-SSF-SCF-datatypes/Digits.ta.mjs";
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
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-SSF-SCF-datatypes/Carrier.ta.mjs";


/**
 * @summary RouteSelectFailureArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteSelectFailureArg ::= SEQUENCE {
 *   dpSpecificCommonParameters   [0]  DpSpecificCommonParameters,
 *   dialledDigits                [1]  CalledPartyNumber OPTIONAL,
 *   callingPartyBusinessGroupID  [2]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartySubaddress       [3]  CallingPartySubaddress OPTIONAL,
 *   callingFacilityGroup         [4]  FacilityGroup OPTIONAL,
 *   callingFacilityGroupMember   [5]  FacilityGroupMember OPTIONAL,
 *   failureCause                 [6]  Cause OPTIONAL,
 *   originalCalledPartyID        [7]  OriginalCalledPartyID OPTIONAL,
 *   prefix                       [8]  Digits OPTIONAL,
 *   redirectingPartyID           [9]  RedirectingPartyID OPTIONAL,
 *   redirectionInformation       [10]  RedirectionInformation OPTIONAL,
 *   routeList                    [11]  RouteList OPTIONAL,
 *   travellingClassMark          [12]  TravellingClassMark OPTIONAL,
 *   extensions                   [13]  Extensions OPTIONAL,
 *   carrier                      [14]  Carrier OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RouteSelectFailureArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
    /**
     * @summary `dialledDigits`.
     * @public
     * @readonly
     */
    readonly dialledDigits: OPTIONAL<CalledPartyNumber>;
    /**
     * @summary `callingPartyBusinessGroupID`.
     * @public
     * @readonly
     */
    readonly callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    /**
     * @summary `callingPartySubaddress`.
     * @public
     * @readonly
     */
    readonly callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    /**
     * @summary `callingFacilityGroup`.
     * @public
     * @readonly
     */
    readonly callingFacilityGroup: OPTIONAL<FacilityGroup>;
    /**
     * @summary `callingFacilityGroupMember`.
     * @public
     * @readonly
     */
    readonly callingFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    /**
     * @summary `failureCause`.
     * @public
     * @readonly
     */
    readonly failureCause: OPTIONAL<Cause>;
    /**
     * @summary `originalCalledPartyID`.
     * @public
     * @readonly
     */
    readonly originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    /**
     * @summary `prefix`.
     * @public
     * @readonly
     */
    readonly prefix: OPTIONAL<Digits>;
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
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        dialledDigits?: OPTIONAL<CalledPartyNumber>,
        callingPartyBusinessGroupID?: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartySubaddress?: OPTIONAL<CallingPartySubaddress>,
        callingFacilityGroup?: OPTIONAL<FacilityGroup>,
        callingFacilityGroupMember?: OPTIONAL<FacilityGroupMember>,
        failureCause?: OPTIONAL<Cause>,
        originalCalledPartyID?: OPTIONAL<OriginalCalledPartyID>,
        prefix?: OPTIONAL<Digits>,
        redirectingPartyID?: OPTIONAL<RedirectingPartyID>,
        redirectionInformation?: OPTIONAL<RedirectionInformation>,
        routeList?: OPTIONAL<RouteList>,
        travellingClassMark?: OPTIONAL<TravellingClassMark>,
        extensions?: OPTIONAL<Extensions>,
        carrier?: OPTIONAL<Carrier>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.dialledDigits = dialledDigits;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.callingPartySubaddress = callingPartySubaddress;
        this.callingFacilityGroup = callingFacilityGroup;
        this.callingFacilityGroupMember = callingFacilityGroupMember;
        this.failureCause = failureCause;
        this.originalCalledPartyID = originalCalledPartyID;
        this.prefix = prefix;
        this.redirectingPartyID = redirectingPartyID;
        this.redirectionInformation = redirectionInformation;
        this.routeList = routeList;
        this.travellingClassMark = travellingClassMark;
        this.extensions = extensions;
        this.carrier = carrier;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RouteSelectFailureArg
     * @description
     * 
     * This takes an `object` and converts it to a `RouteSelectFailureArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteSelectFailureArg`.
     * @returns {RouteSelectFailureArg}
     */
    public static _from_object (_o: { [_K in keyof (RouteSelectFailureArg)]: (RouteSelectFailureArg)[_K] }): RouteSelectFailureArg {
        return new RouteSelectFailureArg(_o.dpSpecificCommonParameters, _o.dialledDigits, _o.callingPartyBusinessGroupID, _o.callingPartySubaddress, _o.callingFacilityGroup, _o.callingFacilityGroupMember, _o.failureCause, _o.originalCalledPartyID, _o.prefix, _o.redirectingPartyID, _o.redirectionInformation, _o.routeList, _o.travellingClassMark, _o.extensions, _o.carrier, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RouteSelectFailureArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteSelectFailureArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("dialledDigits", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingFacilityGroup", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("callingFacilityGroupMember", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("failureCause", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("originalCalledPartyID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("prefix", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("redirectingPartyID", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("redirectionInformation", true, $.hasTag(_TagClass.context, 10)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 11)),
    new $.ComponentSpec("travellingClassMark", true, $.hasTag(_TagClass.context, 12)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 13)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 14))
];

/**
 * @summary The Trailing Root Component Types of RouteSelectFailureArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteSelectFailureArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteSelectFailureArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteSelectFailureArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteSelectFailureArg: $.ASN1Decoder<RouteSelectFailureArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteSelectFailureArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteSelectFailureArg (el: _Element): RouteSelectFailureArg {
    if (!_cached_decoder_for_RouteSelectFailureArg) { _cached_decoder_for_RouteSelectFailureArg = function (el: _Element): RouteSelectFailureArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let dialledDigits: OPTIONAL<CalledPartyNumber>;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    let callingFacilityGroup: OPTIONAL<FacilityGroup>;
    let callingFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let failureCause: OPTIONAL<Cause>;
    let originalCalledPartyID: OPTIONAL<OriginalCalledPartyID>;
    let prefix: OPTIONAL<Digits>;
    let redirectingPartyID: OPTIONAL<RedirectingPartyID>;
    let redirectionInformation: OPTIONAL<RedirectionInformation>;
    let routeList: OPTIONAL<RouteList>;
    let travellingClassMark: OPTIONAL<TravellingClassMark>;
    let extensions: OPTIONAL<Extensions>;
    let carrier: OPTIONAL<Carrier>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "dialledDigits": (_el: _Element): void => { dialledDigits = $._decode_implicit<CalledPartyNumber>(() => _decode_CalledPartyNumber)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "callingFacilityGroup": (_el: _Element): void => { callingFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "callingFacilityGroupMember": (_el: _Element): void => { callingFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "failureCause": (_el: _Element): void => { failureCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "originalCalledPartyID": (_el: _Element): void => { originalCalledPartyID = $._decode_implicit<OriginalCalledPartyID>(() => _decode_OriginalCalledPartyID)(_el); },
        "prefix": (_el: _Element): void => { prefix = $._decode_implicit<Digits>(() => _decode_Digits)(_el); },
        "redirectingPartyID": (_el: _Element): void => { redirectingPartyID = $._decode_implicit<RedirectingPartyID>(() => _decode_RedirectingPartyID)(_el); },
        "redirectionInformation": (_el: _Element): void => { redirectionInformation = $._decode_implicit<RedirectionInformation>(() => _decode_RedirectionInformation)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "travellingClassMark": (_el: _Element): void => { travellingClassMark = $._decode_implicit<TravellingClassMark>(() => _decode_TravellingClassMark)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RouteSelectFailureArg,
        _extension_additions_list_spec_for_RouteSelectFailureArg,
        _root_component_type_list_2_spec_for_RouteSelectFailureArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RouteSelectFailureArg(
        dpSpecificCommonParameters,
        dialledDigits,
        callingPartyBusinessGroupID,
        callingPartySubaddress,
        callingFacilityGroup,
        callingFacilityGroupMember,
        failureCause,
        originalCalledPartyID,
        prefix,
        redirectingPartyID,
        redirectionInformation,
        routeList,
        travellingClassMark,
        extensions,
        carrier,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RouteSelectFailureArg(el);
}

let _cached_encoder_for_RouteSelectFailureArg: $.ASN1Encoder<RouteSelectFailureArg> | null = null;

/**
 * @summary Encodes a(n) RouteSelectFailureArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteSelectFailureArg, encoded as an ASN.1 Element.
 */
export
function _encode_RouteSelectFailureArg (value: RouteSelectFailureArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteSelectFailureArg) { _cached_encoder_for_RouteSelectFailureArg = function (value: RouteSelectFailureArg, elGetter: $.ASN1Encoder<RouteSelectFailureArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(15 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.dialledDigits !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CalledPartyNumber, $.BER)(value.dialledDigits, $.BER);
    }
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (value.callingFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_FacilityGroup, $.BER)(value.callingFacilityGroup, $.BER);
    }
    if (value.callingFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_FacilityGroupMember, $.BER)(value.callingFacilityGroupMember, $.BER);
    }
    if (value.failureCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Cause, $.BER)(value.failureCause, $.BER);
    }
    if (value.originalCalledPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_OriginalCalledPartyID, $.BER)(value.originalCalledPartyID, $.BER);
    }
    if (value.prefix !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Digits, $.BER)(value.prefix, $.BER);
    }
    if (value.redirectingPartyID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_RedirectingPartyID, $.BER)(value.redirectingPartyID, $.BER);
    }
    if (value.redirectionInformation !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_RedirectionInformation, $.BER)(value.redirectionInformation, $.BER);
    }
    if (value.routeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 11, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    }
    if (value.travellingClassMark !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 12, () => _encode_TravellingClassMark, $.BER)(value.travellingClassMark, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 13, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 14, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RouteSelectFailureArg(value, elGetter);
}


/* eslint-enable */
