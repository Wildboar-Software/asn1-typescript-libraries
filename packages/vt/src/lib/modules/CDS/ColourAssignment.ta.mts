/* eslint-disable */
import {
    OPTIONAL,
    OBJECT_IDENTIFIER,
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
import { ColourAssignment_value, _decode_ColourAssignment_value, _encode_ColourAssignment_value } from "../CDS/ColourAssignment-value.ta.mjs";
// export { ColourAssignment_value, _decode_ColourAssignment_value, _encode_ColourAssignment_value } from "../CDS/ColourAssignment-value.ta.mjs";


/**
 * @summary ColourAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ColourAssignment ::= SEQUENCE {
 *     type    [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     value   CHOICE {
 *         iso6429 [1] IMPLICIT PrintableString,
 *         isonnnn [2] ANY
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class ColourAssignment {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `value`.
         * @public
         * @readonly
         */
        readonly value: ColourAssignment_value
    ) {}

    /**
     * @summary Restructures an object into a ColourAssignment
     * @description
     * 
     * This takes an `object` and converts it to a `ColourAssignment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ColourAssignment`.
     * @returns {ColourAssignment}
     */
    public static _from_object (_o: { [_K in keyof (ColourAssignment)]: (ColourAssignment)[_K] }): ColourAssignment {
        return new ColourAssignment(_o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of ColourAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ColourAssignment: $.ComponentSpec[] = [
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of ColourAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ColourAssignment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ColourAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ColourAssignment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ColourAssignment: $.ASN1Decoder<ColourAssignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ColourAssignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ColourAssignment (el: _Element): ColourAssignment {
    if (!_cached_decoder_for_ColourAssignment) { _cached_decoder_for_ColourAssignment = function (el: _Element): ColourAssignment {
    let type_: OPTIONAL<OBJECT_IDENTIFIER>;
    let value!: ColourAssignment_value;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "value": (_el: _Element): void => { value = _decode_ColourAssignment_value(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ColourAssignment,
        _extension_additions_list_spec_for_ColourAssignment,
        _root_component_type_list_2_spec_for_ColourAssignment,
        undefined,
    );
    return new ColourAssignment(
        type_,
        value
    );
}; }
    return _cached_decoder_for_ColourAssignment(el);
}

let _cached_encoder_for_ColourAssignment: $.ASN1Encoder<ColourAssignment> | null = null;

/**
 * @summary Encodes a(n) ColourAssignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ColourAssignment, encoded as an ASN.1 Element.
 */
export
function _encode_ColourAssignment (value: ColourAssignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ColourAssignment) { _cached_encoder_for_ColourAssignment = function (value: ColourAssignment): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.type_, $.BER)),
            /* REQUIRED   */ _encode_ColourAssignment_value(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ColourAssignment(value, elGetter);
}


/* eslint-enable */
