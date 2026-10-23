/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { DisplayString, _decode_DisplayString, _encode_DisplayString } from "../SS-SD-Operations-asn1-97/DisplayString.ta.mjs";
import { SDExtension, _decode_SDExtension, _encode_SDExtension } from "../SS-SD-Operations-asn1-97/SDExtension.ta.mjs";

/**
 * @summary DisplayArg
 * @description
 *
 * Argument of `display`: the text to present, and an optional manufacturer
 * extension (ECMA-311 §6.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-311/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DisplayArg ::= SEQUENCE {
 *     displayString DisplayString,
 *     extension SDExtension OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class DisplayArg {
    /**
     * @summary `displayString`.
     * @description
     *
     * Display information from the Server User, coded as a BMP string (ECMA-311
     * §6.5.2.1.2). The Client User PINX presents it in an appropriate format
     * (§6.5.1.1.2).
     * @public
     * @readonly
     */
    readonly displayString: DisplayString;
    /**
     * @summary `extension`.
     * @description
     *
     * Optional manufacturer-specific extension on `display`. ECMA-311 §6.3.1
     * defines `SDExtSet` as `{...}` and names no member. It does not say when
     * to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly extension: OPTIONAL<SDExtension>;

    constructor (
        displayString: DisplayString,
        extension: OPTIONAL<SDExtension>
    ) {
        this.displayString = displayString;
        this.extension = extension;
    }

    /**
     * @summary Restructures an object into a DisplayArg
     * @description
     * 
     * This takes an `object` and converts it to a `DisplayArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DisplayArg`.
     * @returns {DisplayArg}
     */
    public static _from_object (_o: { [_K in keyof (DisplayArg)]: (DisplayArg)[_K] }): DisplayArg {
        return new DisplayArg(_o.displayString, _o.extension);
    }

}

/**
 * @summary The Leading Root Component Types of DisplayArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DisplayArg: $.ComponentSpec[] = [
    new $.ComponentSpec("displayString", false, $.hasAnyTag),
    new $.ComponentSpec("extension", true, $.or($.hasTag(_TagClass.context, 2), $.hasTag(_TagClass.context, 3)))
];

/**
 * @summary The Trailing Root Component Types of DisplayArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DisplayArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DisplayArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DisplayArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DisplayArg: $.ASN1Decoder<DisplayArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DisplayArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DisplayArg (el: _Element): DisplayArg {
    if (!_cached_decoder_for_DisplayArg) { _cached_decoder_for_DisplayArg = function (el: _Element): DisplayArg {
    let displayString!: DisplayString;
    let extension: OPTIONAL<SDExtension>;
    const callbacks: $.DecodingMap = {
        "displayString": (_el: _Element): void => { displayString = _decode_DisplayString(_el); },
        "extension": (_el: _Element): void => { extension = _decode_SDExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DisplayArg,
        _extension_additions_list_spec_for_DisplayArg,
        _root_component_type_list_2_spec_for_DisplayArg,
        undefined,
    );
    return new DisplayArg(
        displayString,
        extension
    );
}; }
    return _cached_decoder_for_DisplayArg(el);
}

let _cached_encoder_for_DisplayArg: $.ASN1Encoder<DisplayArg> | null = null;

/**
 * @summary Encodes a(n) DisplayArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DisplayArg, encoded as an ASN.1 Element.
 */
export
function _encode_DisplayArg (value: DisplayArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DisplayArg) { _cached_encoder_for_DisplayArg = function (value: DisplayArg, _elGetter: $.ASN1Encoder<DisplayArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_DisplayString(value.displayString, $.BER));
    if (value.extension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_SDExtension(value.extension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_DisplayArg(value, elGetter);
}

/* eslint-enable */
