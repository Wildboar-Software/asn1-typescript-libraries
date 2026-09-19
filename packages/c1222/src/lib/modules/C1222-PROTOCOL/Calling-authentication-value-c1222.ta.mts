/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Key_id_element, _decode_Key_id_element, _encode_Key_id_element } from "../C1222-PROTOCOL/Key-id-element.ta.mjs";
// export { Key_id_element, _decode_Key_id_element, _encode_Key_id_element } from "../C1222-PROTOCOL/Key-id-element.ta.mjs";
import { Iv_element, _decode_Iv_element, _encode_Iv_element } from "../C1222-PROTOCOL/Iv-element.ta.mjs";
// export { Iv_element, _decode_Iv_element, _encode_Iv_element } from "../C1222-PROTOCOL/Iv-element.ta.mjs";


/**
 * @summary Calling_authentication_value_c1222
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Calling-authentication-value-c1222 ::= [1] IMPLICIT SEQUENCE {
 *     key-id-element [0] IMPLICIT Key-id-element OPTIONAL,
 *     iv-element     [1] IMPLICIT Iv-element OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Calling_authentication_value_c1222 {
    constructor (
        /**
         * @summary `key_id_element`.
         * @public
         * @readonly
         */
        readonly key_id_element: OPTIONAL<Key_id_element>,
        /**
         * @summary `iv_element`.
         * @public
         * @readonly
         */
        readonly iv_element: OPTIONAL<Iv_element>
    ) {}

    /**
     * @summary Restructures an object into a Calling_authentication_value_c1222
     * @description
     * 
     * This takes an `object` and converts it to a `Calling_authentication_value_c1222`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Calling_authentication_value_c1222`.
     * @returns {Calling_authentication_value_c1222}
     */
    public static _from_object (_o: { [_K in keyof (Calling_authentication_value_c1222)]: (Calling_authentication_value_c1222)[_K] }): Calling_authentication_value_c1222 {
        return new Calling_authentication_value_c1222(_o.key_id_element, _o.iv_element);
    }


}

/**
 * @summary The Leading Root Component Types of Calling_authentication_value_c1222
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Calling_authentication_value_c1222: $.ComponentSpec[] = [
    new $.ComponentSpec("key-id-element", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iv-element", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of Calling_authentication_value_c1222
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Calling_authentication_value_c1222: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Calling_authentication_value_c1222
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Calling_authentication_value_c1222: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Calling_authentication_value_c1222: $.ASN1Decoder<Calling_authentication_value_c1222> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Calling_authentication_value_c1222
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Calling_authentication_value_c1222 (el: _Element): Calling_authentication_value_c1222 {
    if (!_cached_decoder_for_Calling_authentication_value_c1222) { _cached_decoder_for_Calling_authentication_value_c1222 = $._decode_implicit<Calling_authentication_value_c1222>(() => function (el: _Element): Calling_authentication_value_c1222 {
    let key_id_element: OPTIONAL<Key_id_element>;
    let iv_element: OPTIONAL<Iv_element>;
    const callbacks: $.DecodingMap = {
        "key-id-element": (_el: _Element): void => { key_id_element = $._decode_implicit<Key_id_element>(() => _decode_Key_id_element)(_el); },
        "iv-element": (_el: _Element): void => { iv_element = $._decode_implicit<Iv_element>(() => _decode_Iv_element)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Calling_authentication_value_c1222,
        _extension_additions_list_spec_for_Calling_authentication_value_c1222,
        _root_component_type_list_2_spec_for_Calling_authentication_value_c1222,
        undefined,
    );
    return new Calling_authentication_value_c1222(
        key_id_element,
        iv_element
    );
}); }
    return _cached_decoder_for_Calling_authentication_value_c1222(el);
}

let _cached_encoder_for_Calling_authentication_value_c1222: $.ASN1Encoder<Calling_authentication_value_c1222> | null = null;

/**
 * @summary Encodes a(n) Calling_authentication_value_c1222 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Calling_authentication_value_c1222, encoded as an ASN.1 Element.
 */
export
function _encode_Calling_authentication_value_c1222 (value: Calling_authentication_value_c1222, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Calling_authentication_value_c1222) { _cached_encoder_for_Calling_authentication_value_c1222 = $._encode_implicit(_TagClass.context, 1, () => function (value: Calling_authentication_value_c1222, elGetter: $.ASN1Encoder<Calling_authentication_value_c1222>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.key_id_element === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Key_id_element, $.BER)(value.key_id_element, $.BER)),
            /* IF_ABSENT  */ ((value.iv_element === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_Iv_element, $.BER)(value.iv_element, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_Calling_authentication_value_c1222(value, elGetter);
}


/* eslint-enable */
