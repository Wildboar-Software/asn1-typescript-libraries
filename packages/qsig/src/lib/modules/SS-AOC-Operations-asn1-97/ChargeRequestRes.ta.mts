/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AdviceModeCombination, _decode_AdviceModeCombination, _encode_AdviceModeCombination, _enum_for_AdviceModeCombination } from "../SS-AOC-Operations-asn1-97/AdviceModeCombination.ta.mjs";
import { ChargeRequestRes_chargeReqResExtension, _decode_ChargeRequestRes_chargeReqResExtension, _encode_ChargeRequestRes_chargeReqResExtension } from "../SS-AOC-Operations-asn1-97/ChargeRequestRes-chargeReqResExtension.ta.mjs";

/**
 * @summary ChargeRequestRes
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeRequestRes ::= SEQUENCE {
 *     adviceModeCombination AdviceModeCombination,
 *     chargeReqResExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ChargeRequestRes {
    /**
     * @summary `adviceModeCombination`.
     * @public
     * @readonly
     */
    readonly adviceModeCombination: AdviceModeCombination;
    /**
     * @summary `chargeReqResExtension`.
     * @public
     * @readonly
     */
    readonly chargeReqResExtension: OPTIONAL<ChargeRequestRes_chargeReqResExtension>;

    constructor (
        adviceModeCombination: AdviceModeCombination,
        chargeReqResExtension: OPTIONAL<ChargeRequestRes_chargeReqResExtension>
    ) {
        this.adviceModeCombination = adviceModeCombination;
        this.chargeReqResExtension = chargeReqResExtension;
    }

    /**
     * @summary Restructures an object into a ChargeRequestRes
     * @description
     * 
     * This takes an `object` and converts it to a `ChargeRequestRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargeRequestRes`.
     * @returns {ChargeRequestRes}
     */
    public static _from_object (_o: { [_K in keyof (ChargeRequestRes)]: (ChargeRequestRes)[_K] }): ChargeRequestRes {
        return new ChargeRequestRes(_o.adviceModeCombination, _o.chargeReqResExtension);
    }

        /**
         * @summary The enum used as the type of the component `adviceModeCombination`
         * @public
         * @static
         */

    public static _enum_for_adviceModeCombination = _enum_for_AdviceModeCombination;
}

/**
 * @summary The Leading Root Component Types of ChargeRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargeRequestRes: $.ComponentSpec[] = [
    new $.ComponentSpec("adviceModeCombination", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("chargeReqResExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of ChargeRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargeRequestRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargeRequestRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargeRequestRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargeRequestRes: $.ASN1Decoder<ChargeRequestRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeRequestRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeRequestRes (el: _Element): ChargeRequestRes {
    if (!_cached_decoder_for_ChargeRequestRes) { _cached_decoder_for_ChargeRequestRes = function (el: _Element): ChargeRequestRes {
    let adviceModeCombination!: AdviceModeCombination;
    let chargeReqResExtension: OPTIONAL<ChargeRequestRes_chargeReqResExtension>;
    const callbacks: $.DecodingMap = {
        "adviceModeCombination": (_el: _Element): void => { adviceModeCombination = _decode_AdviceModeCombination(_el); },
        "chargeReqResExtension": (_el: _Element): void => { chargeReqResExtension = _decode_ChargeRequestRes_chargeReqResExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargeRequestRes,
        _extension_additions_list_spec_for_ChargeRequestRes,
        _root_component_type_list_2_spec_for_ChargeRequestRes,
        undefined,
    );
    return new ChargeRequestRes(
        adviceModeCombination,
        chargeReqResExtension
    );
}; }
    return _cached_decoder_for_ChargeRequestRes(el);
}

let _cached_encoder_for_ChargeRequestRes: $.ASN1Encoder<ChargeRequestRes> | null = null;

/**
 * @summary Encodes a(n) ChargeRequestRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeRequestRes, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeRequestRes (value: ChargeRequestRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeRequestRes) { _cached_encoder_for_ChargeRequestRes = function (value: ChargeRequestRes, _elGetter: $.ASN1Encoder<ChargeRequestRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AdviceModeCombination(value.adviceModeCombination, $.BER));
    if (value.chargeReqResExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ChargeRequestRes_chargeReqResExtension(value.chargeReqResExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChargeRequestRes(value, elGetter);
}

/* eslint-enable */
