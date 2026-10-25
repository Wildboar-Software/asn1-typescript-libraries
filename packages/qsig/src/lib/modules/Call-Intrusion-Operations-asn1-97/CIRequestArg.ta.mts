/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CICapabilityLevel, _decode_CICapabilityLevel, _encode_CICapabilityLevel, _enum_for_CICapabilityLevel } from "../Call-Intrusion-Operations-asn1-97/CICapabilityLevel.ta.mjs";
import { type CIRequestArg_argumentExtension, _decode_CIRequestArg_argumentExtension, _encode_CIRequestArg_argumentExtension } from "../Call-Intrusion-Operations-asn1-97/CIRequestArg-argumentExtension.ta.mjs";

/**
 * @summary CIRequestArg
 * @description
 *
 * Argument of `callIntrusionRequest` (ECMA-203 §6.3.1). It carries
 * the calling user's CICL (§6.6.1.1). An extension may be added;
 * §6.6 does not say when.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-203/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CIRequestArg ::= SEQUENCE {
 *     ciCapabilityLevel CICapabilityLevel,
 *     argumentExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{CIExtSet}},
 *         sequenceOfExtn [2] IMPLICIT SEQUENCE OF Extension {{CIExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class CIRequestArg {
    /**
     * @summary `ciCapabilityLevel`.
     * @description
     *
     * CICL of the calling user. The Terminating PINX compares it with
     * the CIPL of the called user and of the unwanted user (ECMA-203
     * §6.6.1.1, §6.6.2.1.1).
     * @public
     * @readonly
     */
    readonly ciCapabilityLevel: CICapabilityLevel;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Optional manufacturer-specific data from `CIExtSet`. ECMA-203
     * §6.6.1.1 requires only the CICL and does not say when this is
     * present. `CIExtSet` is empty in the standard (§6.3.1).
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<CIRequestArg_argumentExtension>;

    constructor (
        ciCapabilityLevel: CICapabilityLevel,
        argumentExtension?: OPTIONAL<CIRequestArg_argumentExtension>
    ) {
        this.ciCapabilityLevel = ciCapabilityLevel;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a CIRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `CIRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CIRequestArg`.
     * @returns {CIRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (CIRequestArg)]: (CIRequestArg)[_K] }): CIRequestArg {
        return new CIRequestArg(_o.ciCapabilityLevel, _o.argumentExtension);
    }

        /**
         * @summary The enum used as the type of the component `ciCapabilityLevel`
         * @public
         * @static
         */

    public static _enum_for_ciCapabilityLevel: typeof _enum_for_CICapabilityLevel = _enum_for_CICapabilityLevel;
}

/**
 * @summary The Leading Root Component Types of CIRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CIRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("ciCapabilityLevel", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of CIRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CIRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CIRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CIRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CIRequestArg: $.ASN1Decoder<CIRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CIRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CIRequestArg (el: _Element): CIRequestArg {
    if (!_cached_decoder_for_CIRequestArg) { _cached_decoder_for_CIRequestArg = function (el: _Element): CIRequestArg {
    let ciCapabilityLevel!: CICapabilityLevel;
    let argumentExtension: OPTIONAL<CIRequestArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "ciCapabilityLevel": (_el: _Element): void => { ciCapabilityLevel = _decode_CICapabilityLevel(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_CIRequestArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CIRequestArg,
        _extension_additions_list_spec_for_CIRequestArg,
        _root_component_type_list_2_spec_for_CIRequestArg,
        undefined,
    );
    return new CIRequestArg(
        ciCapabilityLevel,
        argumentExtension
    );
}; }
    return _cached_decoder_for_CIRequestArg(el);
}

let _cached_encoder_for_CIRequestArg: $.ASN1Encoder<CIRequestArg> | null = null;

/**
 * @summary Encodes a(n) CIRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CIRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_CIRequestArg (value: CIRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CIRequestArg) { _cached_encoder_for_CIRequestArg = function (value: CIRequestArg, _elGetter: $.ASN1Encoder<CIRequestArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_CICapabilityLevel(value.ciCapabilityLevel, $.BER));
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_CIRequestArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_CIRequestArg(value, elGetter);
}

/* eslint-enable */
