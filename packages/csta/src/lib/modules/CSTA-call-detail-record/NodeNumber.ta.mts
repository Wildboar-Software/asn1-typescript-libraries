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
 * @summary NodeNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NodeNumber ::= SEQUENCE
 * {     area0                 [ 0] IMPLICIT     INTEGER             OPTIONAL,
 *     area1                 [ 1] IMPLICIT     INTEGER             OPTIONAL,
 *     area2                 [ 2] IMPLICIT     INTEGER             OPTIONAL }
 * ```
 * 
 * @class
 */
export
class NodeNumber {
    constructor (
        /**
         * @summary `area0`.
         * @public
         * @readonly
         */
        readonly area0: OPTIONAL<INTEGER>,
        /**
         * @summary `area1`.
         * @public
         * @readonly
         */
        readonly area1: OPTIONAL<INTEGER>,
        /**
         * @summary `area2`.
         * @public
         * @readonly
         */
        readonly area2: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a NodeNumber
     * @description
     * 
     * This takes an `object` and converts it to a `NodeNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NodeNumber`.
     * @returns {NodeNumber}
     */
    public static _from_object (_o: { [_K in keyof (NodeNumber)]: (NodeNumber)[_K] }): NodeNumber {
        return new NodeNumber(_o.area0, _o.area1, _o.area2);
    }


}

/**
 * @summary The Leading Root Component Types of NodeNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NodeNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("area0", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("area1", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("area2", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of NodeNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NodeNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NodeNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NodeNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NodeNumber: $.ASN1Decoder<NodeNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NodeNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NodeNumber (el: _Element): NodeNumber {
    if (!_cached_decoder_for_NodeNumber) { _cached_decoder_for_NodeNumber = function (el: _Element): NodeNumber {
    let area0: OPTIONAL<INTEGER>;
    let area1: OPTIONAL<INTEGER>;
    let area2: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "area0": (_el: _Element): void => { area0 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "area1": (_el: _Element): void => { area1 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "area2": (_el: _Element): void => { area2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NodeNumber,
        _extension_additions_list_spec_for_NodeNumber,
        _root_component_type_list_2_spec_for_NodeNumber,
        undefined,
    );
    return new NodeNumber(
        area0,
        area1,
        area2
    );
}; }
    return _cached_decoder_for_NodeNumber(el);
}

let _cached_encoder_for_NodeNumber: $.ASN1Encoder<NodeNumber> | null = null;

/**
 * @summary Encodes a(n) NodeNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NodeNumber, encoded as an ASN.1 Element.
 */
export
function _encode_NodeNumber (value: NodeNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NodeNumber) { _cached_encoder_for_NodeNumber = function (value: NodeNumber, elGetter: $.ASN1Encoder<NodeNumber>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.area0 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.area0, $.BER)),
            /* IF_ABSENT  */ ((value.area1 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.area1, $.BER)),
            /* IF_ABSENT  */ ((value.area2 === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.area2, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NodeNumber(value, elGetter);
}


/* eslint-enable */
