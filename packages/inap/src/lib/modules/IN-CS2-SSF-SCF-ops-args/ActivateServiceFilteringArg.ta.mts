/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FilteredCallTreatment, _decode_FilteredCallTreatment, _encode_FilteredCallTreatment } from "../IN-CS2-datatypes/FilteredCallTreatment.ta.mjs";
// export { FilteredCallTreatment, _decode_FilteredCallTreatment, _encode_FilteredCallTreatment } from "../IN-CS2-datatypes/FilteredCallTreatment.ta.mjs";
import { FilteringCharacteristics, _decode_FilteringCharacteristics, _encode_FilteringCharacteristics } from "../IN-CS2-datatypes/FilteringCharacteristics.ta.mjs";
// export { FilteringCharacteristics, _decode_FilteringCharacteristics, _encode_FilteringCharacteristics } from "../IN-CS2-datatypes/FilteringCharacteristics.ta.mjs";
import { FilteringTimeOut, _decode_FilteringTimeOut, _encode_FilteringTimeOut } from "../IN-CS2-datatypes/FilteringTimeOut.ta.mjs";
// export { FilteringTimeOut, _decode_FilteringTimeOut, _encode_FilteringTimeOut } from "../IN-CS2-datatypes/FilteringTimeOut.ta.mjs";
import { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../IN-CS2-datatypes/FilteringCriteria.ta.mjs";
// export { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../IN-CS2-datatypes/FilteringCriteria.ta.mjs";
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-CS2-datatypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-CS2-datatypes/DateAndTime.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../IN-CS2-datatypes/ExtensionField.ta.mjs";


/**
 * @summary ActivateServiceFilteringArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ActivateServiceFilteringArg ::= SEQUENCE {
 *   filteredCallTreatment     [0]  FilteredCallTreatment,
 *   filteringCharacteristics  [1]  FilteringCharacteristics,
 *   filteringTimeOut          [2]  FilteringTimeOut,
 *   filteringCriteria         [3]  FilteringCriteria,
 *   startTime                 [4]  DateAndTime OPTIONAL,
 *   extensions
 *     [5]  SEQUENCE OF
 *            ExtensionField OPTIONAL,
 *   ...
 * }
 * ```
 * 
 * @class
 */
export
class ActivateServiceFilteringArg {
    /**
     * @summary `filteredCallTreatment`.
     * @public
     * @readonly
     */
    readonly filteredCallTreatment: FilteredCallTreatment;
    /**
     * @summary `filteringCharacteristics`.
     * @public
     * @readonly
     */
    readonly filteringCharacteristics: FilteringCharacteristics;
    /**
     * @summary `filteringTimeOut`.
     * @public
     * @readonly
     */
    readonly filteringTimeOut: FilteringTimeOut;
    /**
     * @summary `filteringCriteria`.
     * @public
     * @readonly
     */
    readonly filteringCriteria: FilteringCriteria;
    /**
     * @summary `startTime`.
     * @public
     * @readonly
     */
    readonly startTime: OPTIONAL<DateAndTime>;
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
        filteredCallTreatment: FilteredCallTreatment,
        filteringCharacteristics: FilteringCharacteristics,
        filteringTimeOut: FilteringTimeOut,
        filteringCriteria: FilteringCriteria,
        startTime?: OPTIONAL<DateAndTime>,
        extensions?: OPTIONAL<ExtensionField[]>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.filteredCallTreatment = filteredCallTreatment;
        this.filteringCharacteristics = filteringCharacteristics;
        this.filteringTimeOut = filteringTimeOut;
        this.filteringCriteria = filteringCriteria;
        this.startTime = startTime;
        this.extensions = extensions;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ActivateServiceFilteringArg
     * @description
     * 
     * This takes an `object` and converts it to a `ActivateServiceFilteringArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ActivateServiceFilteringArg`.
     * @returns {ActivateServiceFilteringArg}
     */
    public static _from_object (_o: { [_K in keyof (ActivateServiceFilteringArg)]: (ActivateServiceFilteringArg)[_K] }): ActivateServiceFilteringArg {
        return new ActivateServiceFilteringArg(_o.filteredCallTreatment, _o.filteringCharacteristics, _o.filteringTimeOut, _o.filteringCriteria, _o.startTime, _o.extensions, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ActivateServiceFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ActivateServiceFilteringArg: $.ComponentSpec[] = [
    new $.ComponentSpec("filteredCallTreatment", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("filteringCharacteristics", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("filteringTimeOut", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("filteringCriteria", false, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("startTime", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ActivateServiceFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ActivateServiceFilteringArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ActivateServiceFilteringArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ActivateServiceFilteringArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ActivateServiceFilteringArg: $.ASN1Decoder<ActivateServiceFilteringArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ActivateServiceFilteringArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ActivateServiceFilteringArg (el: _Element): ActivateServiceFilteringArg {
    if (!_cached_decoder_for_ActivateServiceFilteringArg) { _cached_decoder_for_ActivateServiceFilteringArg = function (el: _Element): ActivateServiceFilteringArg {
    let filteredCallTreatment!: FilteredCallTreatment;
    let filteringCharacteristics!: FilteringCharacteristics;
    let filteringTimeOut!: FilteringTimeOut;
    let filteringCriteria!: FilteringCriteria;
    let startTime: OPTIONAL<DateAndTime>;
    let extensions: OPTIONAL<ExtensionField[]>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "filteredCallTreatment": (_el: _Element): void => { filteredCallTreatment = $._decode_implicit<FilteredCallTreatment>(() => _decode_FilteredCallTreatment)(_el); },
        "filteringCharacteristics": (_el: _Element): void => { filteringCharacteristics = $._decode_explicit<FilteringCharacteristics>(() => _decode_FilteringCharacteristics)(_el); },
        "filteringTimeOut": (_el: _Element): void => { filteringTimeOut = $._decode_explicit<FilteringTimeOut>(() => _decode_FilteringTimeOut)(_el); },
        "filteringCriteria": (_el: _Element): void => { filteringCriteria = $._decode_explicit<FilteringCriteria>(() => _decode_FilteringCriteria)(_el); },
        "startTime": (_el: _Element): void => { startTime = $._decode_implicit<DateAndTime>(() => _decode_DateAndTime)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ActivateServiceFilteringArg,
        _extension_additions_list_spec_for_ActivateServiceFilteringArg,
        _root_component_type_list_2_spec_for_ActivateServiceFilteringArg,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ActivateServiceFilteringArg(
        filteredCallTreatment,
        filteringCharacteristics,
        filteringTimeOut,
        filteringCriteria,
        startTime,
        extensions,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ActivateServiceFilteringArg(el);
}

let _cached_encoder_for_ActivateServiceFilteringArg: $.ASN1Encoder<ActivateServiceFilteringArg> | null = null;

/**
 * @summary Encodes a(n) ActivateServiceFilteringArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ActivateServiceFilteringArg, encoded as an ASN.1 Element.
 */
export
function _encode_ActivateServiceFilteringArg (value: ActivateServiceFilteringArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ActivateServiceFilteringArg) { _cached_encoder_for_ActivateServiceFilteringArg = function (value: ActivateServiceFilteringArg, elGetter: $.ASN1Encoder<ActivateServiceFilteringArg>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(6 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_FilteredCallTreatment, $.BER)(value.filteredCallTreatment, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_FilteringCharacteristics, $.BER)(value.filteringCharacteristics, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_FilteringTimeOut, $.BER)(value.filteringTimeOut, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_FilteringCriteria, $.BER)(value.filteringCriteria, $.BER);
    if (value.startTime !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_DateAndTime, $.BER)(value.startTime, $.BER);
    }
    if (value.extensions !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ActivateServiceFilteringArg(value, elGetter);
}


/* eslint-enable */
