/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    OPTIONAL,
    INTEGER,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";



/**
 * @summary CollectionFilter
 * @description
 *
 * Collect when horizontal/vertical movement or civic address change meets the
 * filter; any matching filter triggers collection (ECMA-269 §28.1.7.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-269/
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-285/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CollectionFilter ::= SEQUENCE
 * {    horizontalMovement        [0] IMPLICIT INTEGER            OPTIONAL,
 *     verticalMovement        [1] IMPLICIT INTEGER            OPTIONAL,
 *     civicAdressChange        [2] IMPLICIT INTEGER            OPTIONAL }
 * ```
 * 
 * @class
 */
export
class CollectionFilter {
    constructor (
        /**
         * @summary `horizontalMovement`.
         * @description
         *
         * Collect after this many metres of horizontal movement from the last
         * collection (ECMA-269 §28.1.7.1).
         *
         * @public
         * @readonly
         */
        readonly horizontalMovement: OPTIONAL<INTEGER>,
        /**
         * @summary `verticalMovement`.
         * @description
         *
         * Collect after this many metres of vertical movement from the last
         * collection (ECMA-269 §28.1.7.1).
         *
         * @public
         * @readonly
         */
        readonly verticalMovement: OPTIONAL<INTEGER>,
        /**
         * @summary `civicAdressChange`.
         * @description
         *
         * Civic-address change filter (ASN.1 spelling). Spec describes RFC-4776
         * civic type labels; this encoding is INTEGER (ECMA-269 §28.1.7.1,
         * ECMA-285 §26.1.7).
         *
         * @public
         * @readonly
         */
        readonly civicAdressChange: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a CollectionFilter
     * @description
     * 
     * This takes an `object` and converts it to a `CollectionFilter`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CollectionFilter`.
     * @returns {CollectionFilter}
     */
    public static _from_object (_o: { [_K in keyof (CollectionFilter)]: (CollectionFilter)[_K] }): CollectionFilter {
        return new CollectionFilter(_o.horizontalMovement, _o.verticalMovement, _o.civicAdressChange);
    }


}

/**
 * @summary The Leading Root Component Types of CollectionFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CollectionFilter: $.ComponentSpec[] = [
    new $.ComponentSpec("horizontalMovement", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("verticalMovement", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("civicAdressChange", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of CollectionFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CollectionFilter: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CollectionFilter
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CollectionFilter: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CollectionFilter: $.ASN1Decoder<CollectionFilter> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CollectionFilter
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CollectionFilter (el: _Element): CollectionFilter {
    if (!_cached_decoder_for_CollectionFilter) { _cached_decoder_for_CollectionFilter = function (el: _Element): CollectionFilter {
    let horizontalMovement: OPTIONAL<INTEGER>;
    let verticalMovement: OPTIONAL<INTEGER>;
    let civicAdressChange: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "horizontalMovement": (_el: _Element): void => { horizontalMovement = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "verticalMovement": (_el: _Element): void => { verticalMovement = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "civicAdressChange": (_el: _Element): void => { civicAdressChange = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CollectionFilter,
        _extension_additions_list_spec_for_CollectionFilter,
        _root_component_type_list_2_spec_for_CollectionFilter,
        undefined,
    );
    return new CollectionFilter(
        horizontalMovement,
        verticalMovement,
        civicAdressChange
    );
}; }
    return _cached_decoder_for_CollectionFilter(el);
}

let _cached_encoder_for_CollectionFilter: $.ASN1Encoder<CollectionFilter> | null = null;

/**
 * @summary Encodes a(n) CollectionFilter into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CollectionFilter, encoded as an ASN.1 Element.
 */
export
function _encode_CollectionFilter (value: CollectionFilter, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CollectionFilter) { _cached_encoder_for_CollectionFilter = function (value: CollectionFilter, elGetter: $.ASN1Encoder<CollectionFilter>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.horizontalMovement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.horizontalMovement, $.BER)),
            /* IF_ABSENT  */ ((value.verticalMovement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.verticalMovement, $.BER)),
            /* IF_ABSENT  */ ((value.civicAdressChange === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.civicAdressChange, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CollectionFilter(value, elGetter);
}


/* eslint-enable */
