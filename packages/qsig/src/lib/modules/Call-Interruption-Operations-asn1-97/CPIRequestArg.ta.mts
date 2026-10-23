/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CPICapabilityLevel, _decode_CPICapabilityLevel, _encode_CPICapabilityLevel, _enum_for_CPICapabilityLevel } from "../Call-Interruption-Operations-asn1-97/CPICapabilityLevel.ta.mjs";
import { CPIRequestArg_argumentExtension, _decode_CPIRequestArg_argumentExtension, _encode_CPIRequestArg_argumentExtension } from "../Call-Interruption-Operations-asn1-97/CPIRequestArg-argumentExtension.ta.mjs";

/**
 * @summary CPIRequestArg
 * @description
 *
 * SS-CPI invocation argument (ECMA-264 §6.8.1.1.1). The CPICL is compared
 * with the CPIPL of established calls on a congested link; interruption
 * requires CPICL strictly greater than CPIPL (§6.8.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-264/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CPIRequestArg ::= SEQUENCE {
 *     cpiCapabilityLevel CPICapabilityLevel,
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
class CPIRequestArg {
    /**
     * @summary `cpiCapabilityLevel`.
     * @description
     *
     * CPICL of the calling user (ECMA-264 §6.8.1.1.1). Copied unchanged into
     * the SETUP sent after a successful interruption (§6.8.3.1).
     * @public
     * @readonly
     */
    readonly cpiCapabilityLevel: CPICapabilityLevel;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension. ECMA-264 §6.3.1 defines the CHOICE
     * and leaves CPIPExtSet empty.
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CPIRequestArg_argumentExtension>;

    constructor (
        cpiCapabilityLevel: CPICapabilityLevel,
        argumentExtension?: OPTIONAL<CPIRequestArg_argumentExtension>
    ) {
        this.cpiCapabilityLevel = cpiCapabilityLevel;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CPIRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CPIRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CPIRequestArg`.
     * @returns {CPIRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CPIRequestArg)]: (CPIRequestArg)[_K] }): CPIRequestArg {
        return new CPIRequestArg(_o.cpiCapabilityLevel, _o.argumentExtension);
    }

        /**
         * @summary The enum used as the type of the component `cpiCapabilityLevel`
         * @public
         * @static
         */

    public static _enum_for_cpiCapabilityLevel = _enum_for_CPICapabilityLevel;
}

/**
 * @summary The Leading Root Component Types of CPIRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CPIRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("cpiCapabilityLevel", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of CPIRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CPIRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CPIRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CPIRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CPIRequestArg: $.ASN1Decoder<CPIRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CPIRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CPIRequestArg (el: _Element): CPIRequestArg {
    if (!_cached_decoder_for_CPIRequestArg) { _cached_decoder_for_CPIRequestArg = function (el: _Element): CPIRequestArg {
    let cpiCapabilityLevel!: CPICapabilityLevel;
    let argumentExtension: OPTIONAL<CPIRequestArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "cpiCapabilityLevel": (_el: _Element): void => { cpiCapabilityLevel = _decode_CPICapabilityLevel(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CPIRequestArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CPIRequestArg,
        _extension_additions_list_spec_for_CPIRequestArg,
        _root_component_type_list_2_spec_for_CPIRequestArg,
        undefined,
    );
    return new CPIRequestArg(
        cpiCapabilityLevel,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CPIRequestArg(el);
}

let _cached_encoder_for_CPIRequestArg: $.ASN1Encoder<CPIRequestArg> | null = null;

/**
 * @summary Encodes a(n) CPIRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CPIRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CPIRequestArg (value: CPIRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CPIRequestArg) { _cached_encoder_for_CPIRequestArg = function (value: CPIRequestArg, _elGetter: $.ASN1Encoder<CPIRequestArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CPICapabilityLevel(value.cpiCapabilityLevel, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CPIRequestArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CPIRequestArg(value, elGetter);
}

/* eslint-enable */
