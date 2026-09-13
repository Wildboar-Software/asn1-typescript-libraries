/* eslint-disable */
import {
    OPTIONAL,
    INTEGER,
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



/**
 * @summary Limits
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Limits ::= SEQUENCE {
 *     time-limit      [0] INTEGER OPTIONAL,
 *     count-limit     [1] INTEGER OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Limits {
    constructor (
        /**
         * @summary `time_limit`.
         * @public
         * @readonly
         */
        readonly time_limit: OPTIONAL<INTEGER>,
        /**
         * @summary `count_limit`.
         * @public
         * @readonly
         */
        readonly count_limit: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a Limits
     * @description
     * 
     * This takes an `object` and converts it to a `Limits`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Limits`.
     * @returns {Limits}
     */
    public static _from_object (_o: { [_K in keyof (Limits)]: (Limits)[_K] }): Limits {
        return new Limits(_o.time_limit, _o.count_limit);
    }


}

/**
 * @summary The Leading Root Component Types of Limits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Limits: $.ComponentSpec[] = [
    new $.ComponentSpec("time-limit", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("count-limit", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Limits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Limits: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Limits
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Limits: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Limits: $.ASN1Decoder<Limits> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Limits
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Limits (el: _Element): Limits {
    if (!_cached_decoder_for_Limits) { _cached_decoder_for_Limits = function (el: _Element): Limits {
    let time_limit: OPTIONAL<INTEGER>;
    let count_limit: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "time-limit": (_el: _Element): void => { time_limit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "count-limit": (_el: _Element): void => { count_limit = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Limits,
        _extension_additions_list_spec_for_Limits,
        _root_component_type_list_2_spec_for_Limits,
        undefined,
    );
    return new Limits(
        time_limit,
        count_limit
    );
}; }
    return _cached_decoder_for_Limits(el);
}

let _cached_encoder_for_Limits: $.ASN1Encoder<Limits> | null = null;

/**
 * @summary Encodes a(n) Limits into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Limits, encoded as an ASN.1 Element.
 */
export
function _encode_Limits (value: Limits, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Limits) { _cached_encoder_for_Limits = function (value: Limits): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.time_limit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.time_limit, $.BER)),
            /* IF_ABSENT  */ ((value.count_limit === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.count_limit, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Limits(value, elGetter);
}


/* eslint-enable */
