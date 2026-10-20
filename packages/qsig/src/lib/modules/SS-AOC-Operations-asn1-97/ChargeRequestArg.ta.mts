/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AdviceModeCombination, _decode_AdviceModeCombination, _encode_AdviceModeCombination } from "../SS-AOC-Operations-asn1-97/AdviceModeCombination.ta.mjs";
// export { AdviceModeCombination, _enum_for_AdviceModeCombination, AdviceModeCombination_rate /* IMPORTED_LONG_ENUMERATION_ITEM */, rate /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdviceModeCombination_rateInterim /* IMPORTED_LONG_ENUMERATION_ITEM */, rateInterim /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdviceModeCombination_rateFinal /* IMPORTED_LONG_ENUMERATION_ITEM */, rateFinal /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdviceModeCombination_interim /* IMPORTED_LONG_ENUMERATION_ITEM */, interim /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdviceModeCombination_final /* IMPORTED_LONG_ENUMERATION_ITEM */, final /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdviceModeCombination_interimFinal /* IMPORTED_LONG_ENUMERATION_ITEM */, interimFinal /* IMPORTED_SHORT_ENUMERATION_ITEM */, AdviceModeCombination_rateInterimFinal /* IMPORTED_LONG_ENUMERATION_ITEM */, rateInterimFinal /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_AdviceModeCombination, _encode_AdviceModeCombination } from "../SS-AOC-Operations-asn1-97/AdviceModeCombination.ta.mjs";
import { ChargeRequestArg_chargeReqArgExtension, _decode_ChargeRequestArg_chargeReqArgExtension, _encode_ChargeRequestArg_chargeReqArgExtension } from "../SS-AOC-Operations-asn1-97/ChargeRequestArg-chargeReqArgExtension.ta.mjs";
// export { ChargeRequestArg_chargeReqArgExtension, _decode_ChargeRequestArg_chargeReqArgExtension, _encode_ChargeRequestArg_chargeReqArgExtension } from "../SS-AOC-Operations-asn1-97/ChargeRequestArg-chargeReqArgExtension.ta.mjs";


/**
 * @summary ChargeRequestArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeRequestArg ::= SEQUENCE {
 *     adviceModeCombinations SEQUENCE SIZE(0..7) OF AdviceModeCombination,
 *     chargeReqArgExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChargeRequestArg {
    /**
     * @summary `adviceModeCombinations`.
     * @public
     * @readonly
     */
    readonly adviceModeCombinations: AdviceModeCombination[];
    /**
     * @summary `chargeReqArgExtension`.
     * @public
     * @readonly
     */
    readonly chargeReqArgExtension: OPTIONAL<ChargeRequestArg_chargeReqArgExtension>;

    constructor (
        adviceModeCombinations: AdviceModeCombination[],
        chargeReqArgExtension: OPTIONAL<ChargeRequestArg_chargeReqArgExtension>
    ) {
        this.adviceModeCombinations = adviceModeCombinations;
        this.chargeReqArgExtension = chargeReqArgExtension;
    
        if (adviceModeCombinations.length < 0 || adviceModeCombinations.length > 7) {
            throw new ASN1SizeError("ChargeRequestArg.adviceModeCombinations violates SIZE constraint");
        }
    }

    /**
     * @summary Restructures an object into a ChargeRequestArg
     * @description
     * 
     * This takes an `object` and converts it to a `ChargeRequestArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargeRequestArg`.
     * @returns {ChargeRequestArg}
     */
    public static _from_object (_o: { [_K in keyof (ChargeRequestArg)]: (ChargeRequestArg)[_K] }): ChargeRequestArg {
        return new ChargeRequestArg(_o.adviceModeCombinations, _o.chargeReqArgExtension);
    }


}

/**
 * @summary The Leading Root Component Types of ChargeRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargeRequestArg: $.ComponentSpec[] = [
    new $.ComponentSpec("adviceModeCombinations", false, $.hasTag(_TagClass.universal, 16)),
    new $.ComponentSpec("chargeReqArgExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of ChargeRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargeRequestArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargeRequestArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargeRequestArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargeRequestArg: $.ASN1Decoder<ChargeRequestArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeRequestArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeRequestArg (el: _Element): ChargeRequestArg {
    if (!_cached_decoder_for_ChargeRequestArg) { _cached_decoder_for_ChargeRequestArg = function (el: _Element): ChargeRequestArg {
    let adviceModeCombinations!: AdviceModeCombination[];
    let chargeReqArgExtension: OPTIONAL<ChargeRequestArg_chargeReqArgExtension>;
    const callbacks: $.DecodingMap = {
        "adviceModeCombinations": (_el: _Element): void => { adviceModeCombinations = $._decodeSequenceOf<AdviceModeCombination>(() => _decode_AdviceModeCombination)(_el); },
        "chargeReqArgExtension": (_el: _Element): void => { chargeReqArgExtension = _decode_ChargeRequestArg_chargeReqArgExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargeRequestArg,
        _extension_additions_list_spec_for_ChargeRequestArg,
        _root_component_type_list_2_spec_for_ChargeRequestArg,
        undefined,
    );
    return new ChargeRequestArg(
        adviceModeCombinations,
        chargeReqArgExtension
    );
}; }
    return _cached_decoder_for_ChargeRequestArg(el);
}

let _cached_encoder_for_ChargeRequestArg: $.ASN1Encoder<ChargeRequestArg> | null = null;

/**
 * @summary Encodes a(n) ChargeRequestArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeRequestArg, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeRequestArg (value: ChargeRequestArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeRequestArg) { _cached_encoder_for_ChargeRequestArg = function (value: ChargeRequestArg, elGetter: $.ASN1Encoder<ChargeRequestArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeSequenceOf<AdviceModeCombination>(() => _encode_AdviceModeCombination, $.BER)(value.adviceModeCombinations, $.BER));
    if (value.chargeReqArgExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ChargeRequestArg_chargeReqArgExtension(value.chargeReqArgExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChargeRequestArg(value, elGetter);
}


/* eslint-enable */
