/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type RouteCountersValue, _decode_RouteCountersValue, _encode_RouteCountersValue } from "../IN-SSF-SCF-datatypes/RouteCountersValue.ta.mjs";
// export { RouteCountersValue, _decode_RouteCountersValue, _encode_RouteCountersValue } from "../IN-SSF-SCF-datatypes/RouteCountersValue.ta.mjs";
import { type CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary MonitorRouteReportArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorRouteReportArg ::= SEQUENCE {
 *   routeCounters  [0]  RouteCountersValue,
 *   correlationID  [2]  CorrelationID,
 *   ...,
 *   ...,
 *   extensions     [3]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MonitorRouteReportArg {
    /**
     * @summary `routeCounters`.
     * @public
     * @readonly
     */
    readonly routeCounters: RouteCountersValue;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: CorrelationID;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;

    constructor (
        routeCounters: RouteCountersValue,
        correlationID: CorrelationID,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.routeCounters = routeCounters;
        this.correlationID = correlationID;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a MonitorRouteReportArg
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorRouteReportArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorRouteReportArg`.
     * @returns {MonitorRouteReportArg}
     */
    public static _from_object (_o: { [_K in keyof (MonitorRouteReportArg)]: (MonitorRouteReportArg)[_K] }): MonitorRouteReportArg {
        return new MonitorRouteReportArg(_o.routeCounters, _o.correlationID, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorRouteReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorRouteReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("routeCounters", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MonitorRouteReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorRouteReportArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Extension Addition Component Types of MonitorRouteReportArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorRouteReportArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorRouteReportArg: $.ASN1Decoder<MonitorRouteReportArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorRouteReportArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorRouteReportArg (el: _Element): MonitorRouteReportArg {
    if (!_cached_decoder_for_MonitorRouteReportArg) { _cached_decoder_for_MonitorRouteReportArg = function (el: _Element): MonitorRouteReportArg {
    let routeCounters!: RouteCountersValue;
    let correlationID!: CorrelationID;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "routeCounters": (_el: _Element): void => { routeCounters = $._decode_implicit<RouteCountersValue>(() => _decode_RouteCountersValue)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorRouteReportArg,
        _extension_additions_list_spec_for_MonitorRouteReportArg,
        _root_component_type_list_2_spec_for_MonitorRouteReportArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MonitorRouteReportArg(
        routeCounters,
        correlationID,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_MonitorRouteReportArg(el);
}

let _cached_encoder_for_MonitorRouteReportArg: $.ASN1Encoder<MonitorRouteReportArg> | null = null;

/**
 * @summary Encodes a(n) MonitorRouteReportArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorRouteReportArg, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorRouteReportArg (value: MonitorRouteReportArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorRouteReportArg) { _cached_encoder_for_MonitorRouteReportArg = function (value: MonitorRouteReportArg, elGetter: $.ASN1Encoder<MonitorRouteReportArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RouteCountersValue, $.BER)(value.routeCounters, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MonitorRouteReportArg(value, elGetter);
}


/* eslint-enable */
