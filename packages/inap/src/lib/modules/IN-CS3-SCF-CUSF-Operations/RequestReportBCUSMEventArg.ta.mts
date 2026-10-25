/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BCUSMEvent, _decode_BCUSMEvent, _encode_BCUSMEvent } from "../IN-CS3-SCF-CUSF-Datatypes/BCUSMEvent.ta.mjs";
// export { BCUSMEvent, _decode_BCUSMEvent, _encode_BCUSMEvent } from "../IN-CS3-SCF-CUSF-Datatypes/BCUSMEvent.ta.mjs";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS3-SSF-SCF-datatypes/ComponentType.ta.mjs";
import { type ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS3-SSF-SCF-datatypes/ComponentCorrelationID.ta.mjs";
import { type Duration, _decode_Duration, _encode_Duration } from "../IN-CS3-SSF-SCF-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS3-SSF-SCF-datatypes/Duration.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-CS3-common-datatypes/Extensions.ta.mjs";
import { type CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-CS3-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
// export { CUApplicationInd, _decode_CUApplicationInd, _encode_CUApplicationInd } from "../IN-CS3-SCF-CUSF-Datatypes/CUApplicationInd.ta.mjs";
import { type LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS3-SSF-SCF-datatypes/LegID.ta.mjs";


/**
 * @summary RequestReportBCUSMEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportBCUSMEventArg ::= SEQUENCE {
 *   bCUSMEvents
 *     [0]  SEQUENCE OF BCUSMEvent,
 *   componentTypes
 *     [1]  SEQUENCE SIZE (1..3) OF ComponentType DEFAULT {any},
 *   componentCorrelationID  [2]  ComponentCorrelationID OPTIONAL,
 *   monitorDuration         [3]  Duration OPTIONAL,
 *   extensions              [4]  Extensions OPTIONAL,
 *   cUDPCriteria            [5]  CUApplicationInd OPTIONAL,
 *   legID                   [6]  LegID OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestReportBCUSMEventArg {
    /**
     * @summary `bCUSMEvents`.
     * @public
     * @readonly
     */
    readonly bCUSMEvents: BCUSMEvent[];
    /**
     * @summary `componentTypes`.
     * @public
     * @readonly
     */
    readonly componentTypes: OPTIONAL<ComponentType[]>;
    /**
     * @summary `componentCorrelationID`.
     * @public
     * @readonly
     */
    readonly componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    /**
     * @summary `monitorDuration`.
     * @public
     * @readonly
     */
    readonly monitorDuration: OPTIONAL<Duration>;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `cUDPCriteria`.
     * @public
     * @readonly
     */
    readonly cUDPCriteria: OPTIONAL<CUApplicationInd>;
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
        bCUSMEvents: BCUSMEvent[],
        componentTypes?: OPTIONAL<ComponentType[]>,
        componentCorrelationID?: OPTIONAL<ComponentCorrelationID>,
        monitorDuration?: OPTIONAL<Duration>,
        extensions?: OPTIONAL<Extensions>,
        cUDPCriteria?: OPTIONAL<CUApplicationInd>,
        legID?: OPTIONAL<LegID>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.bCUSMEvents = bCUSMEvents;
        this.componentTypes = componentTypes;
        this.componentCorrelationID = componentCorrelationID;
        this.monitorDuration = monitorDuration;
        this.extensions = extensions;
        this.cUDPCriteria = cUDPCriteria;
        this.legID = legID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestReportBCUSMEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportBCUSMEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportBCUSMEventArg`.
     * @returns {RequestReportBCUSMEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportBCUSMEventArg)]: (RequestReportBCUSMEventArg)[_K] }): RequestReportBCUSMEventArg {
        return new RequestReportBCUSMEventArg(_o.bCUSMEvents, _o.componentTypes, _o.componentCorrelationID, _o.monitorDuration, _o.extensions, _o.cUDPCriteria, _o.legID, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary Getter that returns the default value for `componentTypes`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_componentTypes () { return [ any_ ]; }
}

/**
 * @summary The Leading Root Component Types of RequestReportBCUSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportBCUSMEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("bCUSMEvents", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("componentTypes", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitorDuration", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("cUDPCriteria", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of RequestReportBCUSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportBCUSMEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportBCUSMEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportBCUSMEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportBCUSMEventArg: $.ASN1Decoder<RequestReportBCUSMEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportBCUSMEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportBCUSMEventArg (el: _Element): RequestReportBCUSMEventArg {
    if (!_cached_decoder_for_RequestReportBCUSMEventArg) { _cached_decoder_for_RequestReportBCUSMEventArg = function (el: _Element): RequestReportBCUSMEventArg {
    let bCUSMEvents!: BCUSMEvent[];
    let componentTypes: OPTIONAL<ComponentType[]> = RequestReportBCUSMEventArg._default_value_for_componentTypes;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let monitorDuration: OPTIONAL<Duration>;
    let extensions: OPTIONAL<Extensions>;
    let cUDPCriteria: OPTIONAL<CUApplicationInd>;
    let legID: OPTIONAL<LegID>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "bCUSMEvents": (_el: _Element): void => { bCUSMEvents = $._decode_implicit<BCUSMEvent[]>(() => $._decodeSequenceOf<BCUSMEvent>(() => _decode_BCUSMEvent))(_el); },
        "componentTypes": (_el: _Element): void => { componentTypes = $._decode_implicit<ComponentType[]>(() => $._decodeSequenceOf<ComponentType>(() => _decode_ComponentType))(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "monitorDuration": (_el: _Element): void => { monitorDuration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "cUDPCriteria": (_el: _Element): void => { cUDPCriteria = $._decode_explicit<CUApplicationInd>(() => _decode_CUApplicationInd)(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportBCUSMEventArg,
        _extension_additions_list_spec_for_RequestReportBCUSMEventArg,
        _root_component_type_list_2_spec_for_RequestReportBCUSMEventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestReportBCUSMEventArg(
        bCUSMEvents,
        componentTypes,
        componentCorrelationID,
        monitorDuration,
        extensions,
        cUDPCriteria,
        legID,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestReportBCUSMEventArg(el);
}

let _cached_encoder_for_RequestReportBCUSMEventArg: $.ASN1Encoder<RequestReportBCUSMEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportBCUSMEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportBCUSMEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportBCUSMEventArg (value: RequestReportBCUSMEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportBCUSMEventArg) { _cached_encoder_for_RequestReportBCUSMEventArg = function (value: RequestReportBCUSMEventArg, elGetter: $.ASN1Encoder<RequestReportBCUSMEventArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(7 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<BCUSMEvent>(() => _encode_BCUSMEvent, $.BER), $.BER)(value.bCUSMEvents, $.BER);
    if (value.componentTypes !== undefined && !$.deepEq(value.componentTypes, RequestReportBCUSMEventArg._default_value_for_componentTypes)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 1, () => $._encodeSequenceOf<ComponentType>(() => _encode_ComponentType, $.BER), $.BER)(value.componentTypes, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    if (value.monitorDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Duration, $.BER)(value.monitorDuration, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.cUDPCriteria !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 5, () => _encode_CUApplicationInd, $.BER)(value.cUDPCriteria, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 6, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestReportBCUSMEventArg(value, elGetter);
}


/* eslint-enable */
