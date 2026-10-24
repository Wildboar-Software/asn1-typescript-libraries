/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CPIProtectionLevel, _decode_CPIProtectionLevel, _encode_CPIProtectionLevel, _enum_for_CPIProtectionLevel } from "../Call-Interruption-Operations-asn1-97/CPIProtectionLevel.ta.mjs";
import { type CPIPRequestArg_argumentExtension, _decode_CPIPRequestArg_argumentExtension, _encode_CPIPRequestArg_argumentExtension } from "../Call-Interruption-Operations-asn1-97/CPIPRequestArg-argumentExtension.ta.mjs";

/**
 * @summary CPIPRequestArg
 * @description
 *
 * SS-CPIP invocation argument (ECMA-264 §6.9.1.1, §6.9.3.1). The CPIPL is
 * saved for the duration of the call. A later backward value replaces it
 * only when it is higher.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIPRequestArg ::= SEQUENCE {
 *     cpiProtectionLevel CPIProtectionLevel,
 *     argumentExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{CPIPExtSet}},
 *         sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{CPIPExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CPIPRequestArg {
    /**
     * @summary `cpiProtectionLevel`.
     * @description
     *
     * CPIPL to save for the duration of the call (ECMA-264 §6.9.1.1). A
     * backward CONNECT value is stored only when it is higher than the level
     * already saved (§6.9.3.1).
     * @public
     * @readonly
     */
    readonly cpiProtectionLevel: CPIProtectionLevel;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-264 §6.3.1 defines the CHOICE
     * and leaves CPIPExtSet empty.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CPIPRequestArg_argumentExtension>;

    constructor (
        cpiProtectionLevel: CPIProtectionLevel,
        argumentExtension?: OPTIONAL<CPIPRequestArg_argumentExtension>
    ) {
        this.cpiProtectionLevel = cpiProtectionLevel;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CPIPRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CPIPRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPIPRequestArg`.
     * @returns {CPIPRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CPIPRequestArg)]: (CPIPRequestArg)[_K] }): CPIPRequestArg {
        return new CPIPRequestArg(_o.cpiProtectionLevel, _o.argumentExtension);
    }

        /**
         * @summary The enum used as the type of the component `cpiProtectionLevel`
         * @public
         * @static
         */

    public static _enum_for_cpiProtectionLevel = _enum_for_CPIProtectionLevel;
}

/**
 * @summary The Leading Root Component Types of CPIPRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CPIPRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("cpiProtectionLevel", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of CPIPRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CPIPRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CPIPRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CPIPRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CPIPRequestArg: $.ASN1Decoder<CPIPRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPIPRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPIPRequestArg (el: _Element): CPIPRequestArg {
    if (!_cached_decoder_for_CPIPRequestArg) { _cached_decoder_for_CPIPRequestArg = function (el: _Element): CPIPRequestArg {
    let cpiProtectionLevel!: CPIProtectionLevel;
    let argumentExtension: OPTIONAL<CPIPRequestArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "cpiProtectionLevel": (_el: _Element): void => { cpiProtectionLevel = _decode_CPIProtectionLevel(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CPIPRequestArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CPIPRequestArg,
        _extension_additions_list_spec_for_CPIPRequestArg,
        _root_component_type_list_2_spec_for_CPIPRequestArg,
        undefined,
    );
    return new CPIPRequestArg(
        cpiProtectionLevel,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CPIPRequestArg(el);
}

let _cached_encoder_for_CPIPRequestArg: $.ASN1Encoder<CPIPRequestArg> | null = null;

/**
 * @summary Encodes a(n) CPIPRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPIPRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CPIPRequestArg (value: CPIPRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPIPRequestArg) { _cached_encoder_for_CPIPRequestArg = function (value: CPIPRequestArg, _elGetter: $.ASN1Encoder<CPIPRequestArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CPIProtectionLevel(value.cpiProtectionLevel, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CPIPRequestArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CPIPRequestArg(value, elGetter);
}

/* eslint-enable */
