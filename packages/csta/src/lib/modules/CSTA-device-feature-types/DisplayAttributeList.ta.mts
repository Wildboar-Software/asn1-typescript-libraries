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
 * @summary DisplayAttributeList
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayAttributeList ::= SEQUENCE
 * {     physicalBaseRowNumber         [0] IMPLICIT INTEGER OPTIONAL,
 *     physicalBaseColumnNumber     [1] IMPLICIT INTEGER OPTIONAL,
 *     offset                 [2] IMPLICIT INTEGER OPTIONAL }
 * ```
 * 
 * @class
 */
export
class DisplayAttributeList {
    constructor (
        /**
         * @summary `physicalBaseRowNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseRowNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `physicalBaseColumnNumber`.
         * @public
         * @readonly
         */
        readonly physicalBaseColumnNumber: OPTIONAL<INTEGER>,
        /**
         * @summary `offset`.
         * @public
         * @readonly
         */
        readonly offset: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a DisplayAttributeList
     * @description
     * 
     * This takes an `object` and converts it to a `DisplayAttributeList`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisplayAttributeList`.
     * @returns {DisplayAttributeList}
     */
    public static _from_object (_o: { [_K in keyof (DisplayAttributeList)]: (DisplayAttributeList)[_K] }): DisplayAttributeList {
        return new DisplayAttributeList(_o.physicalBaseRowNumber, _o.physicalBaseColumnNumber, _o.offset);
    }


}

/**
 * @summary The Leading Root Component Types of DisplayAttributeList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisplayAttributeList: $.ComponentSpec[] = [
    new $.ComponentSpec("physicalBaseRowNumber", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("physicalBaseColumnNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("offset", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DisplayAttributeList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisplayAttributeList: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisplayAttributeList
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisplayAttributeList: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisplayAttributeList: $.ASN1Decoder<DisplayAttributeList> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayAttributeList
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayAttributeList (el: _Element): DisplayAttributeList {
    if (!_cached_decoder_for_DisplayAttributeList) { _cached_decoder_for_DisplayAttributeList = function (el: _Element): DisplayAttributeList {
    let physicalBaseRowNumber: OPTIONAL<INTEGER>;
    let physicalBaseColumnNumber: OPTIONAL<INTEGER>;
    let offset: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "physicalBaseRowNumber": (_el: _Element): void => { physicalBaseRowNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "physicalBaseColumnNumber": (_el: _Element): void => { physicalBaseColumnNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "offset": (_el: _Element): void => { offset = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisplayAttributeList,
        _extension_additions_list_spec_for_DisplayAttributeList,
        _root_component_type_list_2_spec_for_DisplayAttributeList,
        undefined,
    );
    return new DisplayAttributeList(
        physicalBaseRowNumber,
        physicalBaseColumnNumber,
        offset
    );
}; }
    return _cached_decoder_for_DisplayAttributeList(el);
}

let _cached_encoder_for_DisplayAttributeList: $.ASN1Encoder<DisplayAttributeList> | null = null;

/**
 * @summary Encodes a(n) DisplayAttributeList into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayAttributeList, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayAttributeList (value: DisplayAttributeList, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayAttributeList) { _cached_encoder_for_DisplayAttributeList = function (value: DisplayAttributeList, elGetter: $.ASN1Encoder<DisplayAttributeList>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.physicalBaseRowNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.physicalBaseRowNumber, $.BER)),
            /* IF_ABSENT  */ ((value.physicalBaseColumnNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.physicalBaseColumnNumber, $.BER)),
            /* IF_ABSENT  */ ((value.offset === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.offset, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DisplayAttributeList(value, elGetter);
}


/* eslint-enable */
