/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
// export { ResourceID, _decode_ResourceID, _encode_ResourceID } from "../IN-CS2-datatypes/ResourceID.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-CS2-datatypes/CorrelationID.ta.mjs";
import { type Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
// export { Duration, _decode_Duration, _encode_Duration } from "../IN-CS2-datatypes/Duration.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary RequestEveryStatusChangeReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RequestEveryStatusChangeReportArg ::= SEQUENCE {
 *   resourceID       [0]  ResourceID,
 *   correlationID    [1]  CorrelationID OPTIONAL,
 *   monitorDuration  [2]  Duration OPTIONAL,
 *   extensions
 *     [3]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RequestEveryStatusChangeReportArg {
    /**
     * @summary `resourceID`.
     * @public
     * @readonly
     */
    readonly resourceID: ResourceID;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: OPTIONAL<CorrelationID>;
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
    readonly extensions: OPTIONAL<ExtensionField[]>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        resourceID: ResourceID,
        correlationID?: OPTIONAL<CorrelationID>,
        monitorDuration?: OPTIONAL<Duration>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.resourceID = resourceID;
        this.correlationID = correlationID;
        this.monitorDuration = monitorDuration;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RequestEveryStatusChangeReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `RequestEveryStatusChangeReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RequestEveryStatusChangeReportArg`.
     * @returns {RequestEveryStatusChangeReportArg}
     */
    public static _from_object (_o: { [_K in keyof (RequestEveryStatusChangeReportArg)]: (RequestEveryStatusChangeReportArg)[_K] }): RequestEveryStatusChangeReportArg {
        return new RequestEveryStatusChangeReportArg(_o.resourceID, _o.correlationID, _o.monitorDuration, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RequestEveryStatusChangeReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RequestEveryStatusChangeReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("resourceID", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("monitorDuration", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of RequestEveryStatusChangeReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RequestEveryStatusChangeReportArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RequestEveryStatusChangeReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RequestEveryStatusChangeReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RequestEveryStatusChangeReportArg: $.ASN1Decoder<RequestEveryStatusChangeReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RequestEveryStatusChangeReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RequestEveryStatusChangeReportArg (el: _Element): RequestEveryStatusChangeReportArg {
    if (!_cached_decoder_for_RequestEveryStatusChangeReportArg) { _cached_decoder_for_RequestEveryStatusChangeReportArg = function (el: _Element): RequestEveryStatusChangeReportArg {
    let resourceID!: ResourceID;
    let correlationID: OPTIONAL<CorrelationID>;
    let monitorDuration: OPTIONAL<Duration>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "resourceID": (_el: _Element): void => { resourceID = $._decode_explicit<ResourceID>(() => _decode_ResourceID)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "monitorDuration": (_el: _Element): void => { monitorDuration = $._decode_implicit<Duration>(() => _decode_Duration)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RequestEveryStatusChangeReportArg,
        _extension_additions_list_spec_for_RequestEveryStatusChangeReportArg,
        _root_component_type_list_2_spec_for_RequestEveryStatusChangeReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new RequestEveryStatusChangeReportArg(
        resourceID,
        correlationID,
        monitorDuration,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_RequestEveryStatusChangeReportArg(el);
}

let _cached_encoder_for_RequestEveryStatusChangeReportArg: $.ASN1Encoder<RequestEveryStatusChangeReportArg> | null = null;

/**
 * @summary Encodes a(n) RequestEveryStatusChangeReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RequestEveryStatusChangeReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_RequestEveryStatusChangeReportArg (value: RequestEveryStatusChangeReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RequestEveryStatusChangeReportArg) { _cached_encoder_for_RequestEveryStatusChangeReportArg = function (value: RequestEveryStatusChangeReportArg, elGetter: $.ASN1Encoder<RequestEveryStatusChangeReportArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_ResourceID, $.BER)(value.resourceID, $.BER);
    if (value.correlationID !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    }
    if (value.monitorDuration !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Duration, $.BER)(value.monitorDuration, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RequestEveryStatusChangeReportArg(value, elGetter);
}


/* eslint-enable */
