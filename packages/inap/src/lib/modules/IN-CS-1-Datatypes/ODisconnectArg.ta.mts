/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS-1-Datatypes/DpSpecificCommonParameters.ta.mjs";
// export { DpSpecificCommonParameters, _decode_DpSpecificCommonParameters, _encode_DpSpecificCommonParameters } from "../IN-CS-1-Datatypes/DpSpecificCommonParameters.ta.mjs";
import { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CallingPartyBusinessGroupID.ta.mjs";
// export { CallingPartyBusinessGroupID, _decode_CallingPartyBusinessGroupID, _encode_CallingPartyBusinessGroupID } from "../IN-CS-1-Datatypes/CallingPartyBusinessGroupID.ta.mjs";
import { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS-1-Datatypes/CallingPartySubaddress.ta.mjs";
// export { CallingPartySubaddress, _decode_CallingPartySubaddress, _encode_CallingPartySubaddress } from "../IN-CS-1-Datatypes/CallingPartySubaddress.ta.mjs";
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS-1-Datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-CS-1-Datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS-1-Datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-CS-1-Datatypes/FacilityGroupMember.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS-1-Datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS-1-Datatypes/Cause.ta.mjs";
import { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS-1-Datatypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-CS-1-Datatypes/RouteList.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS-1-Datatypes/ExtensionField.ta.mjs";
import { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";
// export { Carrier, _decode_Carrier, _encode_Carrier } from "../IN-CS-1-Datatypes/Carrier.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS-1-Datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-CS-1-Datatypes/Integer4.ta.mjs";


/**
 * @summary ODisconnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ODisconnectArg ::= SEQUENCE {
 *   dpSpecificCommonParameters   [0]  DpSpecificCommonParameters,
 *   callingPartyBusinessGroupID  [1]  CallingPartyBusinessGroupID OPTIONAL,
 *   callingPartySubaddress       [2]  CallingPartySubaddress OPTIONAL,
 *   callingFacilityGroup         [3]  FacilityGroup OPTIONAL,
 *   callingFacilityGroupMember   [4]  FacilityGroupMember OPTIONAL,
 *   releaseCause                 [5]  Cause OPTIONAL,
 *   routeList                    [6]  RouteList OPTIONAL,
 *   extensions
 *     [7]  SEQUENCE SIZE (1..numOfExtensions) OF
 *            ExtensionField,
 *   carrier                      [8]  Carrier OPTIONAL,
 *   connectTime                  [9]  Integer4 OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ODisconnectArg {
    /**
     * @summary `dpSpecificCommonParameters`.
     * @public
     * @readonly
     */
    readonly dpSpecificCommonParameters: DpSpecificCommonParameters;
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
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;
    /**
     * @summary `routeList`.
     * @public
     * @readonly
     */
    readonly routeList: OPTIONAL<RouteList>;
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
     * @summary `connectTime`.
     * @public
     * @readonly
     */
    readonly connectTime: OPTIONAL<Integer4>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>,
        callingPartySubaddress: OPTIONAL<CallingPartySubaddress>,
        callingFacilityGroup: OPTIONAL<FacilityGroup>,
        callingFacilityGroupMember: OPTIONAL<FacilityGroupMember>,
        releaseCause: OPTIONAL<Cause>,
        routeList: OPTIONAL<RouteList>,
        extensions: ExtensionField[],
        carrier?: OPTIONAL<Carrier>,
        connectTime?: OPTIONAL<Integer4>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.callingPartyBusinessGroupID = callingPartyBusinessGroupID;
        this.callingPartySubaddress = callingPartySubaddress;
        this.callingFacilityGroup = callingFacilityGroup;
        this.callingFacilityGroupMember = callingFacilityGroupMember;
        this.releaseCause = releaseCause;
        this.routeList = routeList;
        this.extensions = extensions;
        this.carrier = carrier;
        this.connectTime = connectTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ODisconnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `ODisconnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ODisconnectArg`.
     * @returns {ODisconnectArg}
     */
    public static _from_object (_o: { [_K in keyof (ODisconnectArg)]: (ODisconnectArg)[_K] }): ODisconnectArg {
        return new ODisconnectArg(_o.dpSpecificCommonParameters, _o.callingPartyBusinessGroupID, _o.callingPartySubaddress, _o.callingFacilityGroup, _o.callingFacilityGroupMember, _o.releaseCause, _o.routeList, _o.extensions, _o.carrier, _o.connectTime, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ODisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ODisconnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("callingPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("callingPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("callingFacilityGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("callingFacilityGroupMember", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("routeList", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("extensions", false, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("carrier", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 9))
];

/**
 * @summary The Trailing Root Component Types of ODisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ODisconnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ODisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ODisconnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ODisconnectArg: $.ASN1Decoder<ODisconnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ODisconnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ODisconnectArg (el: _Element): ODisconnectArg {
    if (!_cached_decoder_for_ODisconnectArg) { _cached_decoder_for_ODisconnectArg = function (el: _Element): ODisconnectArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let callingPartyBusinessGroupID: OPTIONAL<CallingPartyBusinessGroupID>;
    let callingPartySubaddress: OPTIONAL<CallingPartySubaddress>;
    let callingFacilityGroup: OPTIONAL<FacilityGroup>;
    let callingFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let releaseCause: OPTIONAL<Cause>;
    let routeList: OPTIONAL<RouteList>;
    let extensions!: ExtensionField[];
    let carrier: OPTIONAL<Carrier>;
    let connectTime: OPTIONAL<Integer4>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "callingPartyBusinessGroupID": (_el: _Element): void => { callingPartyBusinessGroupID = $._decode_implicit<CallingPartyBusinessGroupID>(() => _decode_CallingPartyBusinessGroupID)(_el); },
        "callingPartySubaddress": (_el: _Element): void => { callingPartySubaddress = $._decode_implicit<CallingPartySubaddress>(() => _decode_CallingPartySubaddress)(_el); },
        "callingFacilityGroup": (_el: _Element): void => { callingFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "callingFacilityGroupMember": (_el: _Element): void => { callingFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); },
        "carrier": (_el: _Element): void => { carrier = $._decode_implicit<Carrier>(() => _decode_Carrier)(_el); },
        "connectTime": (_el: _Element): void => { connectTime = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ODisconnectArg,
        _extension_additions_list_spec_for_ODisconnectArg,
        _root_component_type_list_2_spec_for_ODisconnectArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ODisconnectArg(
        dpSpecificCommonParameters,
        callingPartyBusinessGroupID,
        callingPartySubaddress,
        callingFacilityGroup,
        callingFacilityGroupMember,
        releaseCause,
        routeList,
        extensions,
        carrier,
        connectTime,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ODisconnectArg(el);
}

let _cached_encoder_for_ODisconnectArg: $.ASN1Encoder<ODisconnectArg> | null = null;

/**
 * @summary Encodes a(n) ODisconnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ODisconnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_ODisconnectArg (value: ODisconnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ODisconnectArg) { _cached_encoder_for_ODisconnectArg = function (value: ODisconnectArg, elGetter: $.ASN1Encoder<ODisconnectArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(10 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_DpSpecificCommonParameters, $.BER)(value.dpSpecificCommonParameters, $.BER);
    if (value.callingPartyBusinessGroupID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CallingPartyBusinessGroupID, $.BER)(value.callingPartyBusinessGroupID, $.BER);
    }
    if (value.callingPartySubaddress !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_CallingPartySubaddress, $.BER)(value.callingPartySubaddress, $.BER);
    }
    if (value.callingFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_FacilityGroup, $.BER)(value.callingFacilityGroup, $.BER);
    }
    if (value.callingFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FacilityGroupMember, $.BER)(value.callingFacilityGroupMember, $.BER);
    }
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (value.routeList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 7, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    if (value.carrier !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_Carrier, $.BER)(value.carrier, $.BER);
    }
    if (value.connectTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 9, () => _encode_Integer4, $.BER)(value.connectTime, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ODisconnectArg(value, elGetter);
}


/* eslint-enable */
