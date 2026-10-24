/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type CountersValue, _decode_CountersValue, _encode_CountersValue } from "../IN-SSF-SCF-datatypes/CountersValue.ta.mjs";
// export { CountersValue, _decode_CountersValue, _encode_CountersValue } from "../IN-SSF-SCF-datatypes/CountersValue.ta.mjs";
import { type FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../IN-SSF-SCF-datatypes/FilteringCriteria.ta.mjs";
// export { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../IN-SSF-SCF-datatypes/FilteringCriteria.ta.mjs";
import { type Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
// export { Extensions, _decode_Extensions, _encode_Extensions } from "../IN-common-datatypes/Extensions.ta.mjs";
import { ResponseCondition, _decode_ResponseCondition, _encode_ResponseCondition, _enum_for_ResponseCondition } from "../IN-SSF-SCF-datatypes/ResponseCondition.ta.mjs";
// export { ResponseCondition, _enum_for_ResponseCondition, ResponseCondition_intermediateResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, intermediateResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, ResponseCondition_lastResponse /* IMPORTED_LONG_ENUMERATION_ITEM */, lastResponse /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ResponseCondition, _encode_ResponseCondition } from "../IN-SSF-SCF-datatypes/ResponseCondition.ta.mjs";


/**
 * @summary ServiceFilteringResponseArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceFilteringResponseArg ::= SEQUENCE {
 *   countersValue      [0]  CountersValue,
 *   filteringCriteria  [1]  FilteringCriteria,
 *   extensions         [2]  Extensions OPTIONAL,
 *   responseCondition  [3]  ResponseCondition OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ServiceFilteringResponseArg {
    /**
     * @summary `countersValue`.
     * @public
     * @readonly
     */
    readonly countersValue: CountersValue;
    /**
     * @summary `filteringCriteria`.
     * @public
     * @readonly
     */
    readonly filteringCriteria: FilteringCriteria;
    /**
     * @summary `extensions`.
     * @public
     * @readonly
     */
    readonly extensions: OPTIONAL<Extensions>;
    /**
     * @summary `responseCondition`.
     * @public
     * @readonly
     */
    readonly responseCondition: OPTIONAL<ResponseCondition>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        countersValue: CountersValue,
        filteringCriteria: FilteringCriteria,
        extensions?: OPTIONAL<Extensions>,
        responseCondition?: OPTIONAL<ResponseCondition>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.countersValue = countersValue;
        this.filteringCriteria = filteringCriteria;
        this.extensions = extensions;
        this.responseCondition = responseCondition;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ServiceFilteringResponseArg
     * @description
     * 
     * This takes an `object` and converts it to a `ServiceFilteringResponseArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServiceFilteringResponseArg`.
     * @returns {ServiceFilteringResponseArg}
     */
    public static _from_object (_o: { [_K in keyof (ServiceFilteringResponseArg)]: (ServiceFilteringResponseArg)[_K] }): ServiceFilteringResponseArg {
        return new ServiceFilteringResponseArg(_o.countersValue, _o.filteringCriteria, _o.extensions, _o.responseCondition, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `responseCondition`
         * @public
         * @static
         */

    public static _enum_for_responseCondition = _enum_for_ResponseCondition;
}

/**
 * @summary The Leading Root Component Types of ServiceFilteringResponseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServiceFilteringResponseArg: $.ComponentSpec[] = [
    new $.ComponentSpec("countersValue", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("filteringCriteria", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("responseCondition", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ServiceFilteringResponseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServiceFilteringResponseArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServiceFilteringResponseArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServiceFilteringResponseArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServiceFilteringResponseArg: $.ASN1Decoder<ServiceFilteringResponseArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServiceFilteringResponseArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServiceFilteringResponseArg (el: _Element): ServiceFilteringResponseArg {
    if (!_cached_decoder_for_ServiceFilteringResponseArg) { _cached_decoder_for_ServiceFilteringResponseArg = function (el: _Element): ServiceFilteringResponseArg {
    let countersValue!: CountersValue;
    let filteringCriteria!: FilteringCriteria;
    let extensions: OPTIONAL<Extensions>;
    let responseCondition: OPTIONAL<ResponseCondition>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "countersValue": (_el: _Element): void => { countersValue = $._decode_implicit<CountersValue>(() => _decode_CountersValue)(_el); },
        "filteringCriteria": (_el: _Element): void => { filteringCriteria = $._decode_explicit<FilteringCriteria>(() => _decode_FilteringCriteria)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<Extensions>(() => _decode_Extensions)(_el); },
        "responseCondition": (_el: _Element): void => { responseCondition = $._decode_implicit<ResponseCondition>(() => _decode_ResponseCondition)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceFilteringResponseArg,
        _extension_additions_list_spec_for_ServiceFilteringResponseArg,
        _root_component_type_list_2_spec_for_ServiceFilteringResponseArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServiceFilteringResponseArg(
        countersValue,
        filteringCriteria,
        extensions,
        responseCondition,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServiceFilteringResponseArg(el);
}

let _cached_encoder_for_ServiceFilteringResponseArg: $.ASN1Encoder<ServiceFilteringResponseArg> | null = null;

/**
 * @summary Encodes a(n) ServiceFilteringResponseArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServiceFilteringResponseArg, encoded as an ASN.1 Element.
 */
export
function _encode_ServiceFilteringResponseArg (value: ServiceFilteringResponseArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServiceFilteringResponseArg) { _cached_encoder_for_ServiceFilteringResponseArg = function (value: ServiceFilteringResponseArg, elGetter: $.ASN1Encoder<ServiceFilteringResponseArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CountersValue, $.BER)(value.countersValue, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_FilteringCriteria, $.BER)(value.filteringCriteria, $.BER);
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_Extensions, $.BER)(value.extensions, $.BER);
    }
    if (value.responseCondition !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_ResponseCondition, $.BER)(value.responseCondition, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServiceFilteringResponseArg(value, elGetter);
}


/* eslint-enable */
