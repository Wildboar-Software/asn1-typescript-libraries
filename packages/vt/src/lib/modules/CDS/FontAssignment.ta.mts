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
import { FontAssignment_value, _decode_FontAssignment_value, _encode_FontAssignment_value } from "../CDS/FontAssignment-value.ta.mjs";
// export { FontAssignment_value, _decode_FontAssignment_value, _encode_FontAssignment_value } from "../CDS/FontAssignment-value.ta.mjs";


/**
 * @summary FontAssignment
 * @description
 *
 * One font-assignment list entry for a repertoire slot. `type` has
 * a modal effect until the next `type`. Default type is
 * `{vt-b-font-adhoc}` (PrintableString name). Font lists are per
 * repertoire slot; default `"device-dependent"` when
 * `font-capability` = 1. ISO/IEC 9040:1997 §18.3; ISO/IEC
 * 9041-1:1997 §12.3.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FontAssignment ::= SEQUENCE {
 *     type [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     value CHOICE {
 *         vtadhoc [1] IMPLICIT PrintableString,
 *         isonnnn [2] ANY
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class FontAssignment {
    constructor (
        /**
         * @summary `type_`.
         * @description
         * Font-assignment-type. Modal until the next `type` in the
         * same list. Absent or `{vt-b-font-adhoc}` selects
         * PrintableString. ISO/IEC 9040:1997 §18.3; ISO/IEC
         * 9041-1:1997 §12.3.2.
         * @public
         * @readonly
         */
        readonly type_: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `value`.
         * @description
         * Font-assignment-value. ISO/IEC 9040:1997 §18.3.
         * @public
         * @readonly
         */
        readonly value: FontAssignment_value
    ) {}

    /**
     * @summary Restructures an object into a FontAssignment
     * @description
     * 
     * This takes an `object` and converts it to a `FontAssignment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `FontAssignment`.
     * @returns {FontAssignment}
     */
    public static _from_object (_o: { [_K in keyof (FontAssignment)]: (FontAssignment)[_K] }): FontAssignment {
        return new FontAssignment(_o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of FontAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_FontAssignment: $.ComponentSpec[] = [
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of FontAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_FontAssignment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of FontAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_FontAssignment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_FontAssignment: $.ASN1Decoder<FontAssignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) FontAssignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_FontAssignment (el: _Element): FontAssignment {
    if (!_cached_decoder_for_FontAssignment) { _cached_decoder_for_FontAssignment = function (el: _Element): FontAssignment {
    let type_: OPTIONAL<OBJECT_IDENTIFIER>;
    let value!: FontAssignment_value;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "value": (_el: _Element): void => { value = _decode_FontAssignment_value(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_FontAssignment,
        _extension_additions_list_spec_for_FontAssignment,
        _root_component_type_list_2_spec_for_FontAssignment,
        undefined,
    );
    return new FontAssignment(
        type_,
        value
    );
}; }
    return _cached_decoder_for_FontAssignment(el);
}

let _cached_encoder_for_FontAssignment: $.ASN1Encoder<FontAssignment> | null = null;

/**
 * @summary Encodes a(n) FontAssignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The FontAssignment, encoded as an ASN.1 Element.
 */
export
function _encode_FontAssignment (value: FontAssignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_FontAssignment) { _cached_encoder_for_FontAssignment = function (value: FontAssignment): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.type_, $.BER)),
            /* REQUIRED   */ _encode_FontAssignment_value(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_FontAssignment(value, elGetter);
}


/* eslint-enable */
