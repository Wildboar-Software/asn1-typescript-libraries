/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { BMPStringNormal, _decode_BMPStringNormal, _encode_BMPStringNormal } from "../SS-SD-Operations-asn1-97/BMPStringNormal.ta.mjs";
import { SDExtension, _decode_SDExtension, _encode_SDExtension } from "../SS-SD-Operations-asn1-97/SDExtension.ta.mjs";

/**
 * @summary KeypadArg
 * @description
 *
 * Argument of `keypad`: the Client User's keypad information, and an optional
 * manufacturer extension (ECMA-311 §6.5.1.1.2).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * KeypadArg ::= SEQUENCE {
 *     keypadString [0] IMPLICIT BMPStringNormal,
 *     extension SDExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class KeypadArg {
    /**
     * @summary `keypadString`.
     * @description
     *
     * The Client User's keypad information, coded as a normal-size BMP string
     * (ECMA-311 §6.5.1.1.2). The extended display size is not available here.
     * @public
     * @readonly
     */
    readonly keypadString: BMPStringNormal;
    /**
     * @summary `extension`.
     * @description
     *
     * Optional manufacturer-specific extension on `keypad`. ECMA-311 §6.3.1
     * defines `SDExtSet` as `{...}` and names no member. It does not say when
     * to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<SDExtension>;

    constructor (
        keypadString: BMPStringNormal,
        extension?: OPTIONAL<SDExtension>
    ) {
        this.keypadString = keypadString;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a KeypadArg
     * @description
     * 
     * This takes an `object` and converts it to a `KeypadArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `KeypadArg`.
     * @returns {KeypadArg}
     */
    public static _from_object (_o: { [_K in keyof (KeypadArg)]: (KeypadArg)[_K] }): KeypadArg {
        return new KeypadArg(_o.keypadString, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of KeypadArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_KeypadArg: $.ComponentSpec[] = [
    new $.ComponentSpec("keypadString", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)))
];

/**
 * @summary The Trailing Root Component Types of KeypadArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_KeypadArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of KeypadArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_KeypadArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_KeypadArg: $.ASN1Decoder<KeypadArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) KeypadArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_KeypadArg (el: _Element): KeypadArg {
    if (!_cached_decoder_for_KeypadArg) { _cached_decoder_for_KeypadArg = function (el: _Element): KeypadArg {
    let keypadString!: BMPStringNormal;
    let extension: OPTIONAL<SDExtension>;
    const callbacks: $.DecodingMap = {
        "keypadString": (_el: _Element): void => { keypadString = $._decode_implicit<BMPStringNormal>(() => _decode_BMPStringNormal)(_el); },
        "extension": (_el: _Element): void => { extension = _decode_SDExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_KeypadArg,
        _extension_additions_list_spec_for_KeypadArg,
        _root_component_type_list_2_spec_for_KeypadArg,
        undefined,
    );
    return new KeypadArg(
        keypadString,
        extension
    );
}; }
    return _cached_decoder_for_KeypadArg(el);
}

let _cached_encoder_for_KeypadArg: $.ASN1Encoder<KeypadArg> | null = null;

/**
 * @summary Encodes a(n) KeypadArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The KeypadArg, encoded as an ASN.1 Element.
 */
export
function _encode_KeypadArg (value: KeypadArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_KeypadArg) { _cached_encoder_for_KeypadArg = function (value: KeypadArg, _elGetter: $.ASN1Encoder<KeypadArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_BMPStringNormal, $.BER)(value.keypadString, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SDExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_KeypadArg(value, elGetter);
}

/* eslint-enable */
