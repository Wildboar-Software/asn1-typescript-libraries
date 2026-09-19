/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary BasicConstraints
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * BasicConstraints ::= SEQUENCE {
 *      cA                      BOOLEAN DEFAULT FALSE,
 *      pathLenConstraint       INTEGER (0..MAX) OPTIONAL }
 * ```
 * 
 * @class
 */
export
class BasicConstraints {
    constructor (
        /**
         * @summary `cA`.
         * @public
         * @readonly
         */
        readonly cA: OPTIONAL<BOOLEAN>,
        /**
         * @summary `pathLenConstraint`.
         * @public
         * @readonly
         */
        readonly pathLenConstraint: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a BasicConstraints
     * @description
     * 
     * This takes an `object` and converts it to a `BasicConstraints`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `BasicConstraints`.
     * @returns {BasicConstraints}
     */
    public static _from_object (_o: { [_K in keyof (BasicConstraints)]: (BasicConstraints)[_K] }): BasicConstraints {
        return new BasicConstraints(_o.cA, _o.pathLenConstraint);
    }

    /**
     * @summary Getter that returns the default value for `cA`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_cA () { return false; }
}

/**
 * @summary The Leading Root Component Types of BasicConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_BasicConstraints: $.ComponentSpec[] = [
    new $.ComponentSpec("cA", true, $.hasTag(_TagClass.universal, 1)),
    new $.ComponentSpec("pathLenConstraint", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of BasicConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_BasicConstraints: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of BasicConstraints
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_BasicConstraints: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_BasicConstraints: $.ASN1Decoder<BasicConstraints> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) BasicConstraints
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_BasicConstraints (el: _Element): BasicConstraints {
    if (!_cached_decoder_for_BasicConstraints) { _cached_decoder_for_BasicConstraints = function (el: _Element): BasicConstraints {
    let cA: OPTIONAL<BOOLEAN> = BasicConstraints._default_value_for_cA;
    let pathLenConstraint: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "cA": (_el: _Element): void => { cA = $._decodeBoolean(_el); },
        "pathLenConstraint": (_el: _Element): void => { pathLenConstraint = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_BasicConstraints,
        _extension_additions_list_spec_for_BasicConstraints,
        _root_component_type_list_2_spec_for_BasicConstraints,
        undefined,
    );
    return new BasicConstraints(
        cA,
        pathLenConstraint
    );
}; }
    return _cached_decoder_for_BasicConstraints(el);
}

let _cached_encoder_for_BasicConstraints: $.ASN1Encoder<BasicConstraints> | null = null;

/**
 * @summary Encodes a(n) BasicConstraints into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The BasicConstraints, encoded as an ASN.1 Element.
 */
export
function _encode_BasicConstraints (value: BasicConstraints, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_BasicConstraints) { _cached_encoder_for_BasicConstraints = function (value: BasicConstraints, elGetter: $.ASN1Encoder<BasicConstraints>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_DEFAULT */ (value.cA === undefined || $.deepEq(value.cA, BasicConstraints._default_value_for_cA) ? undefined : $._encodeBoolean(value.cA, $.BER)),
            /* IF_ABSENT  */ ((value.pathLenConstraint === undefined) ? undefined : $._encodeInteger(value.pathLenConstraint, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_BasicConstraints(value, elGetter);
}


/* eslint-enable */
