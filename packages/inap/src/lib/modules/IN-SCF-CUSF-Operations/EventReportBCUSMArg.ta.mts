/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { EventTypeBCUSM, _decode_EventTypeBCUSM, _encode_EventTypeBCUSM, _enum_for_EventTypeBCUSM } from "../IN-SCF-CUSF-Datatypes/EventTypeBCUSM.ta.mjs";
// export { EventTypeBCUSM, _enum_for_EventTypeBCUSM, EventTypeBCUSM_componentReceived /* IMPORTED_LONG_ENUMERATION_ITEM */, componentReceived /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCUSM_associationReleaseRequested /* IMPORTED_LONG_ENUMERATION_ITEM */, associationReleaseRequested /* IMPORTED_SHORT_ENUMERATION_ITEM */, EventTypeBCUSM_activationReceivedAndAuthorized /* IMPORTED_LONG_ENUMERATION_ITEM */, activationReceivedAndAuthorized /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_EventTypeBCUSM, _encode_EventTypeBCUSM } from "../IN-SCF-CUSF-Datatypes/EventTypeBCUSM.ta.mjs";
import { EventSpecificInformationBCUSM, _decode_EventSpecificInformationBCUSM, _encode_EventSpecificInformationBCUSM } from "../IN-SCF-CUSF-Datatypes/EventSpecificInformationBCUSM.ta.mjs";
// export { EventSpecificInformationBCUSM, _decode_EventSpecificInformationBCUSM, _encode_EventSpecificInformationBCUSM } from "../IN-SCF-CUSF-Datatypes/EventSpecificInformationBCUSM.ta.mjs";
import { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
// export { MiscCallInfo, _decode_MiscCallInfo, _encode_MiscCallInfo } from "../IN-SSF-SCF-datatypes/MiscCallInfo.ta.mjs";
import { CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
// export { CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-SSF-SCF-datatypes/LegID.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, _enum_for_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
import { Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";
// export { Component, _decode_Component, _encode_Component } from "../IN-SSF-SCF-datatypes/Component.ta.mjs";


/**
 * @summary EventReportBCUSMArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportBCUSMArg ::= SEQUENCE {
 *   eventTypeBCUSM                 [0]  EventTypeBCUSM OPTIONAL,
 *   eventSpecificInformationBCUSM
 *     [1]  EventSpecificInformationBCUSM OPTIONAL,
 *   miscCallInfo
 *     [2]  MiscCallInfo DEFAULT {messageType request},
 *   cUApplicationInd               [3]  CUApplicationInd OPTIONAL,
 *   legID                          [4]  LegID OPTIONAL,
 *   extensions                     [5]  Extensions OPTIONAL,
 *   componentType                  [6]  ComponentType OPTIONAL,
 *   componentCorrelationID         [7]  ComponentCorrelationID OPTIONAL,
 *   component                      [8]  Component OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class EventReportBCUSMArg {
    /**
     * @summary `eventTypeBCUSM`.
     * @public
     * @readonly
     */
    readonly eventTypeBCUSM: OPTIONAL<EventTypeBCUSM>;
    /**
     * @summary `eventSpecificInformationBCUSM`.
     * @public
     * @readonly
     */
    readonly eventSpecificInformationBCUSM: OPTIONAL<EventSpecificInformationBCUSM>;
    /**
     * @summary `miscCallInfo`.
     * @public
     * @readonly
     */
    readonly miscCallInfo: OPTIONAL<MiscCallInfo>;
    /**
     * @summary `cUApplicationInd`.
     * @public
     * @readonly
     */
    readonly cUApplicationInd: OPTIONAL<CUApplicationInd>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `componentType`.
     * @public
     * @readonly
     */
    readonly componentType: OPTIONAL<ComponentType>;
    /**
     * @summary `componentCorrelationID`.
     * @public
     * @readonly
     */
    readonly componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    /**
     * @summary `component`.
     * @public
     * @readonly
     */
    readonly component: OPTIONAL<Component>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        eventTypeBCUSM?: OPTIONAL<EventTypeBCUSM>,
        eventSpecificInformationBCUSM?: OPTIONAL<EventSpecificInformationBCUSM>,
        miscCallInfo?: OPTIONAL<MiscCallInfo>,
        cUApplicationInd?: OPTIONAL<CUApplicationInd>,
        legID?: OPTIONAL<LegID>,
        extensions?: OPTIONAL<Extensions>,
        componentType?: OPTIONAL<ComponentType>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        component?: OPTIONAL<Component>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.eventTypeBCUSM = eventTypeBCUSM;
        this.eventSpecificInformationBCUSM = eventSpecificInformationBCUSM;
        this.miscCallInfo = miscCallInfo;
        this.cUApplicationInd = cUApplicationInd;
        this.legID = legID;
        this.extensions = extensions;
        this.componentType = componentType;
        this.componentCorrelationID = componentCorrelationID;
        this.component = component;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EventReportBCUSMArg
     * @description
     * 
     * This takes an `object` and converts it to a `EventReportBCUSMArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventReportBCUSMArg`.
     * @returns {EventReportBCUSMArg}
     */
    public static _from_object (_o: { [_K in keyof (EventReportBCUSMArg)]: (EventReportBCUSMArg)[_K] }): EventReportBCUSMArg {
        return new EventReportBCUSMArg(_o.eventTypeBCUSM, _o.eventSpecificInformationBCUSM, _o.miscCallInfo, _o.cUApplicationInd, _o.legID, _o.extensions, _o.componentType, _o.componentCorrelationID, _o.component, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `miscCallInfo`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_miscCallInfo () { return new MiscCallInfo(MiscCallInfo._enum_for_messageType.request, undefined); }        /**
         * @summary The enum used as the type of the component `eventTypeBCUSM`
         * @public
         * @static
         */

    public static _enum_for_eventTypeBCUSM = _enum_for_EventTypeBCUSM;        /**
         * @summary The enum used as the type of the component `componentType`
         * @public
         * @static
         */

    public static _enum_for_componentType = _enum_for_ComponentType;
}

/**
 * @summary The Leading Root Component Types of EventReportBCUSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventReportBCUSMArg: $.ComponentSpec[] = [
    new $.ComponentSpec("eventTypeBCUSM", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("eventSpecificInformationBCUSM", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("miscCallInfo", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cUApplicationInd", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("componentType", true, $.hasTag(_TagClass.context, 6)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 7)),
    new $.ComponentSpec("component", true, $.hasTag(_TagClass.context, 8))
];

/**
 * @summary The Trailing Root Component Types of EventReportBCUSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventReportBCUSMArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventReportBCUSMArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventReportBCUSMArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventReportBCUSMArg: $.ASN1Decoder<EventReportBCUSMArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportBCUSMArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportBCUSMArg (el: _Element): EventReportBCUSMArg {
    if (!_cached_decoder_for_EventReportBCUSMArg) { _cached_decoder_for_EventReportBCUSMArg = function (el: _Element): EventReportBCUSMArg {
    let eventTypeBCUSM: OPTIONAL<EventTypeBCUSM>;
    let eventSpecificInformationBCUSM: OPTIONAL<EventSpecificInformationBCUSM>;
    let miscCallInfo: OPTIONAL<MiscCallInfo> = EventReportBCUSMArg._default_value_for_miscCallInfo;
    let cUApplicationInd: OPTIONAL<CUApplicationInd>;
    let legID: OPTIONAL<LegID>;
    let extensions: OPTIONAL<Extensions>;
    let componentType: OPTIONAL<ComponentType>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let component: OPTIONAL<Component>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "eventTypeBCUSM": (_el: _Element): void => { eventTypeBCUSM = $._decode_implicit<EventTypeBCUSM>(() => _decode_EventTypeBCUSM)(_el); },
        "eventSpecificInformationBCUSM": (_el: _Element): void => { eventSpecificInformationBCUSM = $._decode_explicit<EventSpecificInformationBCUSM>(() => _decode_EventSpecificInformationBCUSM)(_el); },
        "miscCallInfo": (_el: _Element): void => { miscCallInfo = $._decode_implicit<MiscCallInfo>(() => _decode_MiscCallInfo)(_el); },
        "cUApplicationInd": (_el: _Element): void => { cUApplicationInd = $._decode_explicit<CUApplicationInd>(() => _decode_CUApplicationInd)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "componentType": (_el: _Element): void => { componentType = $._decode_implicit<ComponentType>(() => _decode_ComponentType)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "component": (_el: _Element): void => { component = $._decode_explicit<Component>(() => _decode_Component)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportBCUSMArg,
        _extension_additions_list_spec_for_EventReportBCUSMArg,
        _root_component_type_list_2_spec_for_EventReportBCUSMArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventReportBCUSMArg(
        eventTypeBCUSM,
        eventSpecificInformationBCUSM,
        miscCallInfo,
        cUApplicationInd,
        legID,
        extensions,
        componentType,
        componentCorrelationID,
        component,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventReportBCUSMArg(el);
}

let _cached_encoder_for_EventReportBCUSMArg: $.ASN1Encoder<EventReportBCUSMArg> | null = null;

/**
 * @summary Encodes a(n) EventReportBCUSMArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportBCUSMArg, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportBCUSMArg (value: EventReportBCUSMArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportBCUSMArg) { _cached_encoder_for_EventReportBCUSMArg = function (value: EventReportBCUSMArg, elGetter: $.ASN1Encoder<EventReportBCUSMArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(9 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.eventTypeBCUSM !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_EventTypeBCUSM, $.BER)(value.eventTypeBCUSM, $.BER);
    }
    if (value.eventSpecificInformationBCUSM !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_EventSpecificInformationBCUSM, $.BER)(value.eventSpecificInformationBCUSM, $.BER);
    }
    if (value.miscCallInfo !== undefined && !$.deepEq(value.miscCallInfo, EventReportBCUSMArg._default_value_for_miscCallInfo)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 2, () => _encode_MiscCallInfo, $.BER)(value.miscCallInfo, $.BER);
    }
    if (value.cUApplicationInd !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 3, () => _encode_CUApplicationInd, $.BER)(value.cUApplicationInd, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 4, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.componentType !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 6, () => _encode_ComponentType, $.BER)(value.componentType, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 7, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (value.component !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 8, () => _encode_Component, $.BER)(value.component, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EventReportBCUSMArg(value, elGetter);
}


/* eslint-enable */
