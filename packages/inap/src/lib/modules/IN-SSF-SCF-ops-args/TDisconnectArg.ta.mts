/* eslint-disable */
import {
    OPTIONAL,
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
import { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
// export { FacilityGroup, _decode_FacilityGroup, _encode_FacilityGroup } from "../IN-SSF-SCF-datatypes/FacilityGroup.ta.mjs";
import { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
// export { FacilityGroupMember, _decode_FacilityGroupMember, _encode_FacilityGroupMember } from "../IN-SSF-SCF-datatypes/FacilityGroupMember.ta.mjs";
import { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-SSF-SCF-datatypes/Cause.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";


/**
 * @summary TDisconnectArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TDisconnectArg ::= SEQUENCE {
 *   dpSpecificCommonParameters  [0]  DpSpecificCommonParameters,
 *   calledPartyBusinessGroupID  [1]  CalledPartyBusinessGroupID OPTIONAL,
 *   calledPartySubaddress       [2]  CalledPartySubaddress OPTIONAL,
 *   calledFacilityGroup         [3]  FacilityGroup OPTIONAL,
 *   calledFacilityGroupMember   [4]  FacilityGroupMember OPTIONAL,
 *   releaseCause                [5]  Cause OPTIONAL,
 *   extensions                  [6]  Extensions OPTIONAL,
 *   connectTime                 [7]  Integer4 OPTIONAL,
 *   componentType               [8]  ComponentType OPTIONAL,
 *   component                   [9]  Component OPTIONAL,
 *   componentCorrelationID      [10]  ComponentCorrelationID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class TDisconnectArg {
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
     * @summary `calledFacilityGroup`.
     * @public
     * @readonly
     */
    readonly calledFacilityGroup: OPTIONAL<FacilityGroup>;
    /**
     * @summary `calledFacilityGroupMember`.
     * @public
     * @readonly
     */
    readonly calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    /**
     * @summary `releaseCause`.
     * @public
     * @readonly
     */
    readonly releaseCause: OPTIONAL<Cause>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `connectTime`.
     * @public
     * @readonly
     */
    readonly connectTime: OPTIONAL<Integer4>;
    /**
     * @summary `componentType`.
     * @public
     * @readonly
     */
    readonly componentType: OPTIONAL<ComponentType>;
    /**
     * @summary `component`.
     * @public
     * @readonly
     */
    readonly component: OPTIONAL<Component>;
    /**
     * @summary `componentCorrelationID`.
     * @public
     * @readonly
     */
    readonly componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        dpSpecificCommonParameters: DpSpecificCommonParameters,
        calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>,
        calledPartySubaddress: OPTIONAL<CalledPartySubaddress>,
        calledFacilityGroup: OPTIONAL<FacilityGroup>,
        calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>,
        releaseCause: OPTIONAL<Cause>,
        extensions: OPTIONAL<Extensions>,
        connectTime: OPTIONAL<Integer4>,
        componentType: OPTIONAL<ComponentType>,
        component: OPTIONAL<Component>,
        componentCorrelationID: OPTIONAL<ComponentCorrelationID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.dpSpecificCommonParameters = dpSpecificCommonParameters;
        this.calledPartyBusinessGroupID = calledPartyBusinessGroupID;
        this.calledPartySubaddress = calledPartySubaddress;
        this.calledFacilityGroup = calledFacilityGroup;
        this.calledFacilityGroupMember = calledFacilityGroupMember;
        this.releaseCause = releaseCause;
        this.extensions = extensions;
        this.connectTime = connectTime;
        this.componentType = componentType;
        this.component = component;
        this.componentCorrelationID = componentCorrelationID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a TDisconnectArg
     * @description
     * 
     * This takes an `object` and converts it to a `TDisconnectArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TDisconnectArg`.
     * @returns {TDisconnectArg}
     */
    public static _from_object (_o: { [_K in keyof (TDisconnectArg)]: (TDisconnectArg)[_K] }): TDisconnectArg {
        return new TDisconnectArg(_o.dpSpecificCommonParameters, _o.calledPartyBusinessGroupID, _o.calledPartySubaddress, _o.calledFacilityGroup, _o.calledFacilityGroupMember, _o.releaseCause, _o.extensions, _o.connectTime, _o.componentType, _o.component, _o.componentCorrelationID, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of TDisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TDisconnectArg: $.ComponentSpec[] = [
    new $.ComponentSpec("dpSpecificCommonParameters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("calledPartyBusinessGroupID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("calledPartySubaddress", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("calledFacilityGroup", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("calledFacilityGroupMember", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("connectTime", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 8)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 9)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 10))
];

/**
 * @summary The Trailing Root Component Types of TDisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TDisconnectArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TDisconnectArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TDisconnectArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TDisconnectArg: $.ASN1Decoder<TDisconnectArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TDisconnectArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TDisconnectArg (el: _Element): TDisconnectArg {
    if (!_cached_decoder_for_TDisconnectArg) { _cached_decoder_for_TDisconnectArg = function (el: _Element): TDisconnectArg {
    let dpSpecificCommonParameters!: DpSpecificCommonParameters;
    let calledPartyBusinessGroupID: OPTIONAL<CalledPartyBusinessGroupID>;
    let calledPartySubaddress: OPTIONAL<CalledPartySubaddress>;
    let calledFacilityGroup: OPTIONAL<FacilityGroup>;
    let calledFacilityGroupMember: OPTIONAL<FacilityGroupMember>;
    let releaseCause: OPTIONAL<Cause>;
    let extensions: OPTIONAL<Extensions>;
    let connectTime: OPTIONAL<Integer4>;
    let componentType: OPTIONAL<ComponentType>;
    let component: OPTIONAL<Component>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "dpSpecificCommonParameters": (_el: _Element): void => { dpSpecificCommonParameters = $._decode_implicit<DpSpecificCommonParameters>(() => _decode_DpSpecificCommonParameters)(_el); },
        "calledPartyBusinessGroupID": (_el: _Element): void => { calledPartyBusinessGroupID = $._decode_implicit<CalledPartyBusinessGroupID>(() => _decode_CalledPartyBusinessGroupID)(_el); },
        "calledPartySubaddress": (_el: _Element): void => { calledPartySubaddress = $._decode_implicit<CalledPartySubaddress>(() => _decode_CalledPartySubaddress)(_el); },
        "calledFacilityGroup": (_el: _Element): void => { calledFacilityGroup = $._decode_explicit<FacilityGroup>(() => _decode_FacilityGroup)(_el); },
        "calledFacilityGroupMember": (_el: _Element): void => { calledFacilityGroupMember = $._decode_implicit<FacilityGroupMember>(() => _decode_FacilityGroupMember)(_el); },
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "connectTime": (_el: _Element): void => { connectTime = $._decode_implicit<Integer4>(() => _decode_Integer4)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TDisconnectArg,
        _extension_additions_list_spec_for_TDisconnectArg,
        _root_component_type_list_2_spec_for_TDisconnectArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new TDisconnectArg(
        dpSpecificCommonParameters,
        calledPartyBusinessGroupID,
        calledPartySubaddress,
        calledFacilityGroup,
        calledFacilityGroupMember,
        releaseCause,
        extensions,
        connectTime,
        componentType,
        component,
        componentCorrelationID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_TDisconnectArg(el);
}

let _cached_encoder_for_TDisconnectArg: $.ASN1Encoder<TDisconnectArg> | null = null;

/**
 * @summary Encodes a(n) TDisconnectArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TDisconnectArg, encoded as an ASN.1 Element.
 */
export
function _encode_TDisconnectArg (value: TDisconnectArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TDisconnectArg) { _cached_encoder_for_TDisconnectArg = function (value: TDisconnectArg, elGetter: $.ASN1Encoder<TDisconnectArg>): _Element {
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
    if (value.calledFacilityGroup !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_FacilityGroup, $.BER)(value.calledFacilityGroup, $.BER);
    }
    if (value.calledFacilityGroupMember !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_FacilityGroupMember, $.BER)(value.calledFacilityGroupMember, $.BER);
    }
    if (value.releaseCause !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Cause, $.BER)(value.releaseCause, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.connectTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_Integer4, $.BER)(value.connectTime, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 8, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 9, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 10, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_TDisconnectArg(value, elGetter);
}


/* eslint-enable */
