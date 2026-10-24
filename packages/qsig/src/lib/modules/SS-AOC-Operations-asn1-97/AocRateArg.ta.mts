/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AocRateArg_aocRate, _decode_AocRateArg_aocRate, _encode_AocRateArg_aocRate } from "../SS-AOC-Operations-asn1-97/AocRateArg-aocRate.ta.mjs";
import { AocRateArg_rateArgExtension, _decode_AocRateArg_rateArgExtension, _encode_AocRateArg_rateArgExtension } from "../SS-AOC-Operations-asn1-97/AocRateArg-rateArgExtension.ta.mjs";

/**
 * @summary AocRateArg
 * @description
 *
 * Argument of `aocRate`. Either the rate is unavailable, or a list of per-item
 * charging rates is given (ECMA-212 §6.3.1, ECMA-211 Annex A).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocRateArg ::= SEQUENCE {
 *     aocRate CHOICE {
 *         chargeNotAvailable NULL,
 *         aocSCurrencyInfoList AOCSCurrencyInfoList
 *     },
 *     rateArgExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocRateArg {
    /**
     * @summary `aocRate`.
     * @description
     *
     * Either no rate is available, or the list of charged items and their
     * rates.
     * @public
     * @readonly
     */
    readonly aocRate: AocRateArg_aocRate;
    /**
     * @summary `rateArgExtension`.
     * @description
     *
     * Optional manufacturer-specific extension on `aocRate`. ECMA-212 §6.3.1
     * defines `AOCExtSet` as `{...}` and names no member. It does not say when
     * to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly rateArgExtension: OPTIONAL<AocRateArg_rateArgExtension>;

    constructor (
        aocRate: AocRateArg_aocRate,
        rateArgExtension?: OPTIONAL<AocRateArg_rateArgExtension>
    ) {
        this.aocRate = aocRate;
        this.rateArgExtension = rateArgExtension;
    }

    /**
     * @summary Restructures an object into a AocRateArg
     * @description
     * 
     * This takes an `object` and converts it to a `AocRateArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocRateArg`.
     * @returns {AocRateArg}
     */
    public static _from_object (_o: { [_K in keyof (AocRateArg)]: (AocRateArg)[_K] }): AocRateArg {
        return new AocRateArg(_o.aocRate, _o.rateArgExtension);
    }

}

/**
 * @summary The Leading Root Component Types of AocRateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocRateArg: $.ComponentSpec[] = [
    new $.ComponentSpec("aocRate", false, $.hasAnyTag),
    new $.ComponentSpec("rateArgExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of AocRateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocRateArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocRateArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocRateArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocRateArg: $.ASN1Decoder<AocRateArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocRateArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocRateArg (el: _Element): AocRateArg {
    if (!_cached_decoder_for_AocRateArg) { _cached_decoder_for_AocRateArg = function (el: _Element): AocRateArg {
    let aocRate!: AocRateArg_aocRate;
    let rateArgExtension: OPTIONAL<AocRateArg_rateArgExtension>;
    const callbacks: $.DecodingMap = {
        "aocRate": (_el: _Element): void => { aocRate = _decode_AocRateArg_aocRate(_el); },
        "rateArgExtension": (_el: _Element): void => { rateArgExtension = _decode_AocRateArg_rateArgExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocRateArg,
        _extension_additions_list_spec_for_AocRateArg,
        _root_component_type_list_2_spec_for_AocRateArg,
        undefined,
    );
    return new AocRateArg(
        aocRate,
        rateArgExtension
    );
}; }
    return _cached_decoder_for_AocRateArg(el);
}

let _cached_encoder_for_AocRateArg: $.ASN1Encoder<AocRateArg> | null = null;

/**
 * @summary Encodes a(n) AocRateArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocRateArg, encoded as an ASN.1 Element.
 */
export
function _encode_AocRateArg (value: AocRateArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocRateArg) { _cached_encoder_for_AocRateArg = function (value: AocRateArg, _elGetter: $.ASN1Encoder<AocRateArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AocRateArg_aocRate(value.aocRate, $.BER));
    if (value.rateArgExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AocRateArg_rateArgExtension(value.rateArgExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocRateArg(value, elGetter);
}

/* eslint-enable */
