/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-SSF-SCF-datatypes/RouteList.ta.mjs";
// export { RouteList, _decode_RouteList, _encode_RouteList } from "../IN-SSF-SCF-datatypes/RouteList.ta.mjs";
import { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
// export { CorrelationID, _decode_CorrelationID, _encode_CorrelationID } from "../IN-SSF-SCF-datatypes/CorrelationID.ta.mjs";
import { MonitoringCriteria, _decode_MonitoringCriteria, _encode_MonitoringCriteria } from "../IN-SSF-SCF-datatypes/MonitoringCriteria.ta.mjs";
// export { MonitoringCriteria, _decode_MonitoringCriteria, _encode_MonitoringCriteria } from "../IN-SSF-SCF-datatypes/MonitoringCriteria.ta.mjs";
import { MonitoringTimeOut, _decode_MonitoringTimeOut, _encode_MonitoringTimeOut } from "../IN-SSF-SCF-datatypes/MonitoringTimeOut.ta.mjs";
// export { MonitoringTimeOut, _decode_MonitoringTimeOut, _encode_MonitoringTimeOut } from "../IN-SSF-SCF-datatypes/MonitoringTimeOut.ta.mjs";
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-SSF-SCF-datatypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-SSF-SCF-datatypes/DateAndTime.ta.mjs";
import { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";


/**
 * @summary MonitorRouteRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MonitorRouteRequestArg ::= SEQUENCE {
 *   routeList           [0]  RouteList,
 *   correlationID       [1]  CorrelationID,
 *   monitoringCriteria  [2]  MonitoringCriteria,
 *   monitoringTimeout   [3]  MonitoringTimeOut,
 *   startTime           [4]  DateAndTime OPTIONAL,
 *   ...,
 *   ...,
 *   extensions          [5]  Extensions OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MonitorRouteRequestArg {
    /**
     * @summary `routeList`.
     * @public
     * @readonly
     */
    readonly routeList: RouteList;
    /**
     * @summary `correlationID`.
     * @public
     * @readonly
     */
    readonly correlationID: CorrelationID;
    /**
     * @summary `monitoringCriteria`.
     * @public
     * @readonly
     */
    readonly monitoringCriteria: MonitoringCriteria;
    /**
     * @summary `monitoringTimeout`.
     * @public
     * @readonly
     */
    readonly monitoringTimeout: MonitoringTimeOut;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<DateAndTime>;
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
        routeList: RouteList,
        correlationID: CorrelationID,
        monitoringCriteria: MonitoringCriteria,
        monitoringTimeout: MonitoringTimeOut,
        startTime?: OPTIONAL<DateAndTime>,
        _unrecognizedExtensionsList: _Element[] = [],
        extensions?: OPTIONAL<Extensions>
    ) {
        this.routeList = routeList;
        this.correlationID = correlationID;
        this.monitoringCriteria = monitoringCriteria;
        this.monitoringTimeout = monitoringTimeout;
        this.startTime = startTime;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
        this.extensions = extensions;
    }

    /**
     * @summary Restructures an object into a MonitorRouteRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `MonitorRouteRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MonitorRouteRequestArg`.
     * @returns {MonitorRouteRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (MonitorRouteRequestArg)]: (MonitorRouteRequestArg)[_K] }): MonitorRouteRequestArg {
        return new MonitorRouteRequestArg(_o.routeList, _o.correlationID, _o.monitoringCriteria, _o.monitoringTimeout, _o.startTime, _o._unrecognizedExtensionsList, _o.extensions);
    }


}

/**
 * @summary The Leading Root Component Types of MonitorRouteRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MonitorRouteRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("routeList", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("correlationID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("monitoringCriteria", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("monitoringTimeout", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of MonitorRouteRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MonitorRouteRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Extension Addition Component Types of MonitorRouteRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MonitorRouteRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MonitorRouteRequestArg: $.ASN1Decoder<MonitorRouteRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MonitorRouteRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MonitorRouteRequestArg (el: _Element): MonitorRouteRequestArg {
    if (!_cached_decoder_for_MonitorRouteRequestArg) { _cached_decoder_for_MonitorRouteRequestArg = function (el: _Element): MonitorRouteRequestArg {
    let routeList!: RouteList;
    let correlationID!: CorrelationID;
    let monitoringCriteria!: MonitoringCriteria;
    let monitoringTimeout!: MonitoringTimeOut;
    let startTime: OPTIONAL<DateAndTime>;
    const _unrecognizedExtensionsList: _Element[] = [];
    let extensions: OPTIONAL<Extensions>;
    const callbacks: $.DecodingMap = {
        "routeList": (_el: _Element): void => { routeList = $._decode_implicit<RouteList>(() => _decode_RouteList)(_el); },
        "correlationID": (_el: _Element): void => { correlationID = $._decode_implicit<CorrelationID>(() => _decode_CorrelationID)(_el); },
        "monitoringCriteria": (_el: _Element): void => { monitoringCriteria = $._decode_explicit<MonitoringCriteria>(() => _decode_MonitoringCriteria)(_el); },
        "monitoringTimeout": (_el: _Element): void => { monitoringTimeout = $._decode_explicit<MonitoringTimeOut>(() => _decode_MonitoringTimeOut)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<DateAndTime>(() => _decode_DateAndTime)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MonitorRouteRequestArg,
        _extension_additions_list_spec_for_MonitorRouteRequestArg,
        _root_component_type_list_2_spec_for_MonitorRouteRequestArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new MonitorRouteRequestArg(
        routeList,
        correlationID,
        monitoringCriteria,
        monitoringTimeout,
        startTime,
        _unrecognizedExtensionsList,
        extensions
    );
}; }
    return _cached_decoder_for_MonitorRouteRequestArg(el);
}

let _cached_encoder_for_MonitorRouteRequestArg: $.ASN1Encoder<MonitorRouteRequestArg> | null = null;

/**
 * @summary Encodes a(n) MonitorRouteRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MonitorRouteRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_MonitorRouteRequestArg (value: MonitorRouteRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MonitorRouteRequestArg) { _cached_encoder_for_MonitorRouteRequestArg = function (value: MonitorRouteRequestArg, elGetter: $.ASN1Encoder<MonitorRouteRequestArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_RouteList, $.BER)(value.routeList, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CorrelationID, $.BER)(value.correlationID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_MonitoringCriteria, $.BER)(value.monitoringCriteria, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_MonitoringTimeOut, $.BER)(value.monitoringTimeout, $.BER);
    if (value.startTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_DateAndTime, $.BER)(value.startTime, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MonitorRouteRequestArg(value, elGetter);
}


/* eslint-enable */
