/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ComponentType, _decode_ComponentType, _encode_ComponentType, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */ } from "../IN-CS2-datatypes/ComponentType.ta.mjs";
// export { ComponentType, _enum_for_ComponentType, ComponentType_any /* IMPORTED_LONG_ENUMERATION_ITEM */, any_ /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_invoke /* IMPORTED_LONG_ENUMERATION_ITEM */, invoke /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rResult /* IMPORTED_LONG_ENUMERATION_ITEM */, rResult /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rError /* IMPORTED_LONG_ENUMERATION_ITEM */, rError /* IMPORTED_SHORT_ENUMERATION_ITEM */, ComponentType_rReject /* IMPORTED_LONG_ENUMERATION_ITEM */, rReject /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ComponentType, _encode_ComponentType } from "../IN-CS2-datatypes/ComponentType.ta.mjs";
import { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
// export { LegID, _decode_LegID, _encode_LegID } from "../IN-CS2-datatypes/LegID.ta.mjs";
import { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS2-datatypes/ComponentCorrelationID.ta.mjs";
// export { ComponentCorrelationID, _decode_ComponentCorrelationID, _encode_ComponentCorrelationID } from "../IN-CS2-datatypes/ComponentCorrelationID.ta.mjs";
import { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary RequestReportFacilityEventArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestReportFacilityEventArg ::= SEQUENCE {
 *   componentTypes
 *     [0]  SEQUENCE SIZE (1..3) OF ComponentType DEFAULT {any},
 *   legID                   [1]  LegID OPTIONAL,
 *   componentCorrelationID  [2]  ComponentCorrelationID OPTIONAL,
 *   monitorDuration         [3]  Duration,
 *   extensions
 *     [4]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestReportFacilityEventArg {
    /**
     * @summary `componentTypes`.
     * @public
     * @readonly
     */
    readonly componentTypes: OPTIONAL<ComponentType[]>;
    /**
     * @summary `legID`.
     * @public
     * @readonly
     */
    readonly legID: OPTIONAL<LegID>;
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
    readonly monitorDuration: Duration;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        componentTypes: OPTIONAL<ComponentType[]>,
        legID: OPTIONAL<LegID>,
        componentCorrelationID: OPTIONAL<ComponentCorrelationID>,
        monitorDuration: Duration,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.componentTypes = componentTypes;
        this.legID = legID;
        this.componentCorrelationID = componentCorrelationID;
        this.monitorDuration = monitorDuration;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestReportFacilityEventArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestReportFacilityEventArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestReportFacilityEventArg`.
     * @returns {RequestReportFacilityEventArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestReportFacilityEventArg)]: (RequestReportFacilityEventArg)[_K] }): RequestReportFacilityEventArg {
        return new RequestReportFacilityEventArg(_o.componentTypes, _o.legID, _o.componentCorrelationID, _o.monitorDuration, _o.extensions, _o._unrecognizedExtensionsList);
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
 * @summary The Leading Root Component Types of RequestReportFacilityEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestReportFacilityEventArg: $.ComponentSpec[] = [
    new $.ComponentSpec("componentTypes", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("legID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("componentCorrelationID", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitorDuration", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of RequestReportFacilityEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestReportFacilityEventArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestReportFacilityEventArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestReportFacilityEventArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestReportFacilityEventArg: $.ASN1Decoder<RequestReportFacilityEventArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestReportFacilityEventArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestReportFacilityEventArg (el: _Element): RequestReportFacilityEventArg {
    if (!_cached_decoder_for_RequestReportFacilityEventArg) { _cached_decoder_for_RequestReportFacilityEventArg = function (el: _Element): RequestReportFacilityEventArg {
    let componentTypes: OPTIONAL<ComponentType[]> = RequestReportFacilityEventArg._default_value_for_componentTypes;
    let legID: OPTIONAL<LegID>;
    let componentCorrelationID: OPTIONAL<ComponentCorrelationID>;
    let monitorDuration!: Duration;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "componentTypes": (_el: _Element): void => { componentTypes = $._decode_implicit<ComponentType[]>(() => $._decodeSequenceOf<ComponentType>(() => _decode_ComponentType))(_el); },
        "legID": (_el: _Element): void => { legID = $._decode_explicit<LegID>(() => _decode_LegID)(_el); },
        "componentCorrelationID": (_el: _Element): void => { componentCorrelationID = $._decode_implicit<ComponentCorrelationID>(() => _decode_ComponentCorrelationID)(_el); },
        "monitorDuration": (_el: _Element): void => { monitorDuration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestReportFacilityEventArg,
        _extension_additions_list_spec_for_RequestReportFacilityEventArg,
        _root_component_type_list_2_spec_for_RequestReportFacilityEventArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestReportFacilityEventArg(
        componentTypes,
        legID,
        componentCorrelationID,
        monitorDuration,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestReportFacilityEventArg(el);
}

let _cached_encoder_for_RequestReportFacilityEventArg: $.ASN1Encoder<RequestReportFacilityEventArg> | null = null;

/**
 * @summary Encodes a(n) RequestReportFacilityEventArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestReportFacilityEventArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestReportFacilityEventArg (value: RequestReportFacilityEventArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestReportFacilityEventArg) { _cached_encoder_for_RequestReportFacilityEventArg = function (value: RequestReportFacilityEventArg, elGetter: $.ASN1Encoder<RequestReportFacilityEventArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.componentTypes !== undefined && !$.deepEq(value.componentTypes, RequestReportFacilityEventArg._default_value_for_componentTypes)) {
        _components[_components_i++] = /* IF_DEFAULT */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSequenceOf<ComponentType>(() => _encode_ComponentType, $.BER), $.BER)(value.componentTypes, $.BER);
    }
    if (value.legID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_LegID, $.BER)(value.legID, $.BER);
    }
    if (value.componentCorrelationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_ComponentCorrelationID, $.BER)(value.componentCorrelationID, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_Duration, $.BER)(value.monitorDuration, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestReportFacilityEventArg(value, elGetter);
}


/* eslint-enable */
