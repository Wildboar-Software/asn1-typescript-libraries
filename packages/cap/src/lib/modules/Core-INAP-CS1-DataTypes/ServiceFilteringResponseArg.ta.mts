/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CountersValue, _decode_CountersValue, _encode_CountersValue } from "../Core-INAP-CS1-DataTypes/CountersValue.ta.mjs";
// export { CountersValue, _decode_CountersValue, _encode_CountersValue } from "../Core-INAP-CS1-DataTypes/CountersValue.ta.mjs";
import { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../Core-INAP-CS1-DataTypes/FilteringCriteria.ta.mjs";
// export { FilteringCriteria, _decode_FilteringCriteria, _encode_FilteringCriteria } from "../Core-INAP-CS1-DataTypes/FilteringCriteria.ta.mjs";
import { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";
// export { ExtensionField, _decode_ExtensionField, _encode_ExtensionField } from "../Core-INAP-CS1-DataTypes/ExtensionField.ta.mjs";


/**
 * @summary ServiceFilteringResponseArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServiceFilteringResponseArg ::= SEQUENCE {
 *      countersValue     [0] CountersValue,
 *      filteringCriteria     [1] FilteringCriteria     ,
 *      extensions     [2] SEQUENCE SIZE(1..numOfExtensions) OF ExtensionField     OPTIONAL
 * --  ...
 *      }
 * ```
 * 
 * @class
 */
export
class ServiceFilteringResponseArg {
    constructor (
        /**
         * @summary `countersValue`.
         * @public
         * @readonly
         */
        readonly countersValue: CountersValue,
        /**
         * @summary `filteringCriteria`.
         * @public
         * @readonly
         */
        readonly filteringCriteria: FilteringCriteria,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionField[]>
    ) {}

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
        return new ServiceFilteringResponseArg(_o.countersValue, _o.filteringCriteria, _o.extensions);
    }


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
    new $.ComponentSpec("extensions", true, $.hasTag(_TagClass.context, 2))
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
    let extensions: OPTIONAL<ExtensionField[]>;
    const callbacks: $.DecodingMap = {
        "countersValue": (_el: _Element): void => { countersValue = $._decode_implicit<CountersValue>(() => _decode_CountersValue)(_el); },
        "filteringCriteria": (_el: _Element): void => { filteringCriteria = $._decode_explicit<FilteringCriteria>(() => _decode_FilteringCriteria)(_el); },
        "extensions": (_el: _Element): void => { extensions = $._decode_implicit<ExtensionField[]>(() => $._decodeSequenceOf<ExtensionField>(() => _decode_ExtensionField))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServiceFilteringResponseArg,
        _extension_additions_list_spec_for_ServiceFilteringResponseArg,
        _root_component_type_list_2_spec_for_ServiceFilteringResponseArg,
        undefined,
    );
    return new ServiceFilteringResponseArg(
        countersValue,
        filteringCriteria,
        extensions
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
    if (!_cached_encoder_for_ServiceFilteringResponseArg) { _cached_encoder_for_ServiceFilteringResponseArg = function (value: ServiceFilteringResponseArg): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_CountersValue, $.BER)(value.countersValue, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_FilteringCriteria, $.BER)(value.filteringCriteria, $.BER),
            /* IF_ABSENT  */ ((value.extensions === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ExtensionField>(() => _encode_ExtensionField, $.BER), $.BER)(value.extensions, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ServiceFilteringResponseArg(value, elGetter);
}


/* eslint-enable */
