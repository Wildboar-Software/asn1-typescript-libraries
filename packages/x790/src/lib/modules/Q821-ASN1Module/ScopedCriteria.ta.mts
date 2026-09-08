/* eslint-disable */
import {
    OPTIONAL,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    ObjectInstance,
    _decode_ObjectInstance,
    _encode_ObjectInstance,
} from "../CMIP-1/ObjectInstance.ta.mjs";

import {
    Scope,
    _decode_Scope,
    _encode_Scope,
} from "../CMIP-1/Scope.ta.mjs";

import {
    CMISFilter,
    _decode_CMISFilter,
    _encode_CMISFilter,
} from "../CMIP-1/CMISFilter.ta.mjs";



/**
 * @summary ScopedCriteria
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ScopedCriteria ::= SEQUENCE {
 *   baseManagedObject  ObjectInstance,
 *   scope              Scope,
 *   criteria           CMISFilter DEFAULT and:{}
 * }
 * ```
 * 
 * @class
 */
export
class ScopedCriteria {
    constructor (
        /**
         * @summary `baseManagedObject`.
         * @public
         * @readonly
         */
        readonly baseManagedObject: ObjectInstance,
        /**
         * @summary `scope`.
         * @public
         * @readonly
         */
        readonly scope: Scope,
        /**
         * @summary `criteria`.
         * @public
         * @readonly
         */
        readonly criteria: OPTIONAL<CMISFilter>
    ) {}

    /**
     * @summary Restructures an object into a ScopedCriteria
     * @description
     * 
     * This takes an `object` and converts it to a `ScopedCriteria`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ScopedCriteria`.
     * @returns {ScopedCriteria}
     */
    public static _from_object (_o: { [_K in keyof (ScopedCriteria)]: (ScopedCriteria)[_K] }): ScopedCriteria {
        return new ScopedCriteria(_o.baseManagedObject, _o.scope, _o.criteria);
    }

    /**
     * @summary Getter that returns the default value for `criteria`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_criteria (): CMISFilter { return { and: [] }; }
}

/**
 * @summary The Leading Root Component Types of ScopedCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ScopedCriteria: $.ComponentSpec[] = [
    new $.ComponentSpec("baseManagedObject", false, $.hasAnyTag),
    new $.ComponentSpec("scope", false, $.hasAnyTag),
    new $.ComponentSpec("criteria", true, $.or($.hasTag(_TagClass.context, 8), $.hasTag(_TagClass.context, 9), $.hasTag(_TagClass.context, 10), $.hasTag(_TagClass.context, 11)))
];

/**
 * @summary The Trailing Root Component Types of ScopedCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ScopedCriteria: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ScopedCriteria
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ScopedCriteria: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ScopedCriteria: $.ASN1Decoder<ScopedCriteria> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ScopedCriteria
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ScopedCriteria (el: _Element): ScopedCriteria {
    if (!_cached_decoder_for_ScopedCriteria) { _cached_decoder_for_ScopedCriteria = function (el: _Element): ScopedCriteria {
    let baseManagedObject!: ObjectInstance;
    let scope!: Scope;
    let criteria: OPTIONAL<CMISFilter> = ScopedCriteria._default_value_for_criteria;
    const callbacks: $.DecodingMap = {
        "baseManagedObject": (_el: _Element): void => { baseManagedObject = _decode_ObjectInstance(_el); },
        "scope": (_el: _Element): void => { scope = _decode_Scope(_el); },
        "criteria": (_el: _Element): void => { criteria = _decode_CMISFilter(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ScopedCriteria,
        _extension_additions_list_spec_for_ScopedCriteria,
        _root_component_type_list_2_spec_for_ScopedCriteria,
        undefined,
    );
    return new ScopedCriteria(
        baseManagedObject,
        scope,
        criteria
    );
}; }
    return _cached_decoder_for_ScopedCriteria(el);
}

let _cached_encoder_for_ScopedCriteria: $.ASN1Encoder<ScopedCriteria> | null = null;

/**
 * @summary Encodes a(n) ScopedCriteria into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ScopedCriteria, encoded as an ASN.1 Element.
 */
export
function _encode_ScopedCriteria (value: ScopedCriteria, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ScopedCriteria) { _cached_encoder_for_ScopedCriteria = function (value: ScopedCriteria, elGetter: $.ASN1Encoder<ScopedCriteria>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ObjectInstance(value.baseManagedObject, $.BER),
            /* REQUIRED   */ _encode_Scope(value.scope, $.BER),
            /* IF_DEFAULT */ (value.criteria === undefined || $.deepEq(value.criteria, ScopedCriteria._default_value_for_criteria) ? undefined : _encode_CMISFilter(value.criteria, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ScopedCriteria(value, elGetter);
}


/* eslint-enable */
