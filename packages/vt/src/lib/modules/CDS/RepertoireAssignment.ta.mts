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
import { RepertoireAssignment_value, _decode_RepertoireAssignment_value, _encode_RepertoireAssignment_value } from "../CDS/RepertoireAssignment-value.ta.mjs";
// export { RepertoireAssignment_value, _decode_RepertoireAssignment_value, _encode_RepertoireAssignment_value } from "../CDS/RepertoireAssignment-value.ta.mjs";


/**
 * @summary RepertoireAssignment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RepertoireAssignment ::= SEQUENCE {
 *     type    [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     value   CHOICE {
 *         iso2022 [1] IMPLICIT SEQUENCE OF OCTET STRING,
 *         isonnnn [2] ANY
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class RepertoireAssignment {
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
        readonly value: RepertoireAssignment_value
    ) {}

    /**
     * @summary Restructures an object into a RepertoireAssignment
     * @description
     * 
     * This takes an `object` and converts it to a `RepertoireAssignment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RepertoireAssignment`.
     * @returns {RepertoireAssignment}
     */
    public static _from_object (_o: { [_K in keyof (RepertoireAssignment)]: (RepertoireAssignment)[_K] }): RepertoireAssignment {
        return new RepertoireAssignment(_o.type_, _o.value);
    }


}

/**
 * @summary The Leading Root Component Types of RepertoireAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RepertoireAssignment: $.ComponentSpec[] = [
    new $.ComponentSpec("type", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RepertoireAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RepertoireAssignment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RepertoireAssignment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RepertoireAssignment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RepertoireAssignment: $.ASN1Decoder<RepertoireAssignment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RepertoireAssignment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RepertoireAssignment (el: _Element): RepertoireAssignment {
    if (!_cached_decoder_for_RepertoireAssignment) { _cached_decoder_for_RepertoireAssignment = function (el: _Element): RepertoireAssignment {
    let type_: OPTIONAL<OBJECT_IDENTIFIER>;
    let value!: RepertoireAssignment_value;
    const callbacks: $.DecodingMap = {
        "type": (_el: _Element): void => { type_ = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "value": (_el: _Element): void => { value = _decode_RepertoireAssignment_value(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RepertoireAssignment,
        _extension_additions_list_spec_for_RepertoireAssignment,
        _root_component_type_list_2_spec_for_RepertoireAssignment,
        undefined,
    );
    return new RepertoireAssignment(
        type_,
        value
    );
}; }
    return _cached_decoder_for_RepertoireAssignment(el);
}

let _cached_encoder_for_RepertoireAssignment: $.ASN1Encoder<RepertoireAssignment> | null = null;

/**
 * @summary Encodes a(n) RepertoireAssignment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RepertoireAssignment, encoded as an ASN.1 Element.
 */
export
function _encode_RepertoireAssignment (value: RepertoireAssignment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RepertoireAssignment) { _cached_encoder_for_RepertoireAssignment = function (value: RepertoireAssignment): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.type_ === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => $._encodeObjectIdentifier, $.BER)(value.type_, $.BER)),
            /* REQUIRED   */ _encode_RepertoireAssignment_value(value.value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RepertoireAssignment(value, elGetter);
}


/* eslint-enable */
