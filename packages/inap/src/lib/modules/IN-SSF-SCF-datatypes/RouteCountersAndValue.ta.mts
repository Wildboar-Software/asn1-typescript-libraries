/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Route, _decode_Route, _encode_Route } from "../IN-SSF-SCF-datatypes/Route.ta.mjs";
// export { Route, _decode_Route, _encode_Route } from "../IN-SSF-SCF-datatypes/Route.ta.mjs";
import { CounterID, _decode_CounterID, _encode_CounterID } from "../IN-SSF-SCF-datatypes/CounterID.ta.mjs";
// export { CounterID, _decode_CounterID, _encode_CounterID } from "../IN-SSF-SCF-datatypes/CounterID.ta.mjs";
import { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";
// export { Integer4, _decode_Integer4, _encode_Integer4 } from "../IN-common-datatypes/Integer4.ta.mjs";


/**
 * @summary RouteCountersAndValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteCountersAndValue ::= SEQUENCE {
 *   route         [0]  Route,
 *   counterID     [1]  CounterID,
 *   counterValue  [2]  Integer4,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class RouteCountersAndValue {
    /**
     * @summary `route`.
     * @public
     * @readonly
     */
    readonly route: Route;
    /**
     * @summary `counterID`.
     * @public
     * @readonly
     */
    readonly counterID: CounterID;
    /**
     * @summary `counterValue`.
     * @public
     * @readonly
     */
    readonly counterValue: Integer4;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        route: Route,
        counterID: CounterID,
        counterValue: Integer4,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.route = route;
        this.counterID = counterID;
        this.counterValue = counterValue;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a RouteCountersAndValue
     * @description
     * 
     * This takes an `object` and converts it to a `RouteCountersAndValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteCountersAndValue`.
     * @returns {RouteCountersAndValue}
     */
    public static _from_object (_o: { [_K in keyof (RouteCountersAndValue)]: (RouteCountersAndValue)[_K] }): RouteCountersAndValue {
        return new RouteCountersAndValue(_o.route, _o.counterID, _o.counterValue, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of RouteCountersAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteCountersAndValue: $.ComponentSpec[] = [
    new $.ComponentSpec("route", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("counterID", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("counterValue", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RouteCountersAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteCountersAndValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteCountersAndValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteCountersAndValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteCountersAndValue: $.ASN1Decoder<RouteCountersAndValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteCountersAndValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteCountersAndValue (el: _Element): RouteCountersAndValue {
    if (!_cached_decoder_for_RouteCountersAndValue) { _cached_decoder_for_RouteCountersAndValue = function (el: _Element): RouteCountersAndValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("RouteCountersAndValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "route";
    sequence[1].name = "counterID";
    sequence[2].name = "counterValue";
    const route: Route = $._decode_implicit<Route>(() => _decode_Route)(sequence[0]);
    const counterID: CounterID = $._decode_implicit<CounterID>(() => _decode_CounterID)(sequence[1]);
    const counterValue: Integer4 = $._decode_implicit<Integer4>(() => _decode_Integer4)(sequence[2]);
    return new RouteCountersAndValue(
        route,
        counterID,
        counterValue,
        sequence.slice(3),
    );
}; }
    return _cached_decoder_for_RouteCountersAndValue(el);
}

let _cached_encoder_for_RouteCountersAndValue: $.ASN1Encoder<RouteCountersAndValue> | null = null;

/**
 * @summary Encodes a(n) RouteCountersAndValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteCountersAndValue, encoded as an ASN.1 Element.
 */
export
function _encode_RouteCountersAndValue (value: RouteCountersAndValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteCountersAndValue) { _cached_encoder_for_RouteCountersAndValue = function (value: RouteCountersAndValue, elGetter: $.ASN1Encoder<RouteCountersAndValue>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Route, $.BER)(value.route, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_CounterID, $.BER)(value.counterID, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_Integer4, $.BER)(value.counterValue, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_RouteCountersAndValue(value, elGetter);
}


/* eslint-enable */
