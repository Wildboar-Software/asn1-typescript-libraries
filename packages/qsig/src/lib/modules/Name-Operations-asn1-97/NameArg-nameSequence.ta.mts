/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { type NameExtension, _decode_NameExtension, _encode_NameExtension } from "../Name-Operations-asn1-97/NameExtension.ta.mjs";

/**
 * @summary NameArg_nameSequence
 * @description
 *
 * Name together with an optional extension, one alternative of `NameArg`
 * (ECMA-164 §6.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-164/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NameArg-nameSequence ::= SEQUENCE {
 *     name Name,
 *     extension NameExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NameArg_nameSequence {
    /**
     * @summary `name`.
     * @description
     *
     * The name, with presentation allowed, restricted, or not available
     * (ECMA-164 §6.1, §7.4.1.1, §8.4.1.1).
     * @public
     * @readonly
     */
    readonly name: Name;
    /**
     * @summary `extension`.
     * @description
     *
     * Manufacturer-specific extension from `NameExtensionSet`. The standardized
     * set is empty (ECMA-164 §6.1).
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<NameExtension>;

    constructor (
        name: Name,
        extension?: OPTIONAL<NameExtension>
    ) {
        this.name = name;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a NameArg_nameSequence
     * @description
     * 
     * This takes an `object` and converts it to a `NameArg_nameSequence`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NameArg_nameSequence`.
     * @returns {NameArg_nameSequence}
     */
    public static _from_object (_o: { [_K in keyof (NameArg_nameSequence)]: (NameArg_nameSequence)[_K] }): NameArg_nameSequence {
        return new NameArg_nameSequence(_o.name, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of NameArg_nameSequence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NameArg_nameSequence: $.ComponentSpec[] = [
    new $.ComponentSpec("name", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 5), $.hasTag(_TagClass.context, 6)))
];

/**
 * @summary The Trailing Root Component Types of NameArg_nameSequence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NameArg_nameSequence: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NameArg_nameSequence
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NameArg_nameSequence: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NameArg_nameSequence: $.ASN1Decoder<NameArg_nameSequence> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NameArg_nameSequence
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NameArg_nameSequence (el: _Element): NameArg_nameSequence {
    if (!_cached_decoder_for_NameArg_nameSequence) { _cached_decoder_for_NameArg_nameSequence = function (el: _Element): NameArg_nameSequence {
    let name!: Name;
    let extension: OPTIONAL<NameExtension>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = _decode_Name(_el); },
        "extension": (_el: _Element): void => { extension = _decode_NameExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NameArg_nameSequence,
        _extension_additions_list_spec_for_NameArg_nameSequence,
        _root_component_type_list_2_spec_for_NameArg_nameSequence,
        undefined,
    );
    return new NameArg_nameSequence(
        name,
        extension
    );
}; }
    return _cached_decoder_for_NameArg_nameSequence(el);
}

let _cached_encoder_for_NameArg_nameSequence: $.ASN1Encoder<NameArg_nameSequence> | null = null;

/**
 * @summary Encodes a(n) NameArg_nameSequence into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NameArg_nameSequence, encoded as an ASN.1 Element.
 */
export
function _encode_NameArg_nameSequence (value: NameArg_nameSequence, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NameArg_nameSequence) { _cached_encoder_for_NameArg_nameSequence = function (value: NameArg_nameSequence, _elGetter: $.ASN1Encoder<NameArg_nameSequence>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_Name(value.name, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_NameExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_NameArg_nameSequence(value, elGetter);
}

/* eslint-enable */
