/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargingOption, _decode_ChargingOption, _encode_ChargingOption, _enum_for_ChargingOption } from "../SS-AOC-Operations-asn1-97/ChargingOption.ta.mjs";
import { AocCompleteRes_completeResExtension, _decode_AocCompleteRes_completeResExtension, _encode_AocCompleteRes_completeResExtension } from "../SS-AOC-Operations-asn1-97/AocCompleteRes-completeResExtension.ta.mjs";

/**
 * @summary AocCompleteRes
 * @description
 *
 * Result of `aocComplete`: the accounting function's decision on whether user A
 * is charged for the call before the transfer, after it, or both (ECMA-212
 * §6.6.2.3.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocCompleteRes ::= SEQUENCE {
 *     chargingOption ChargingOption,
 *     completeResExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocCompleteRes {
    /**
     * @summary `chargingOption`.
     * @description
     *
     * `aocFreeOfCharge` if user A is charged neither before nor after transfer,
     * `aocContinueCharging` if charged both, or `aocStopCharging` if charged
     * only before transfer (ECMA-212 §6.6.2.3.1).
     * @public
     * @readonly
     */
    readonly chargingOption: ChargingOption;
    /**
     * @summary `completeResExtension`.
     * @description
     *
     * Optional manufacturer-specific extension on `aocComplete result`.
     * ECMA-212 §6.3.1 defines `AOCExtSet` as `{...}` and names no member. It
     * does not say when to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly completeResExtension: OPTIONAL<AocCompleteRes_completeResExtension>;

    constructor (
        chargingOption: ChargingOption,
        completeResExtension: OPTIONAL<AocCompleteRes_completeResExtension>
    ) {
        this.chargingOption = chargingOption;
        this.completeResExtension = completeResExtension;
    }

    /**
     * @summary Restructures an object into a AocCompleteRes
     * @description
     * 
     * This takes an `object` and converts it to a `AocCompleteRes`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocCompleteRes`.
     * @returns {AocCompleteRes}
     */
    public static _from_object (_o: { [_K in keyof (AocCompleteRes)]: (AocCompleteRes)[_K] }): AocCompleteRes {
        return new AocCompleteRes(_o.chargingOption, _o.completeResExtension);
    }

        /**
         * @summary The enum used as the type of the component `chargingOption`
         * @public
         * @static
         */

    public static _enum_for_chargingOption = _enum_for_ChargingOption;
}

/**
 * @summary The Leading Root Component Types of AocCompleteRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocCompleteRes: $.ComponentSpec[] = [
    new $.ComponentSpec("chargingOption", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("completeResExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of AocCompleteRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocCompleteRes: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocCompleteRes
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocCompleteRes: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocCompleteRes: $.ASN1Decoder<AocCompleteRes> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocCompleteRes
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocCompleteRes (el: _Element): AocCompleteRes {
    if (!_cached_decoder_for_AocCompleteRes) { _cached_decoder_for_AocCompleteRes = function (el: _Element): AocCompleteRes {
    let chargingOption!: ChargingOption;
    let completeResExtension: OPTIONAL<AocCompleteRes_completeResExtension>;
    const callbacks: $.DecodingMap = {
        "chargingOption": (_el: _Element): void => { chargingOption = _decode_ChargingOption(_el); },
        "completeResExtension": (_el: _Element): void => { completeResExtension = _decode_AocCompleteRes_completeResExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocCompleteRes,
        _extension_additions_list_spec_for_AocCompleteRes,
        _root_component_type_list_2_spec_for_AocCompleteRes,
        undefined,
    );
    return new AocCompleteRes(
        chargingOption,
        completeResExtension
    );
}; }
    return _cached_decoder_for_AocCompleteRes(el);
}

let _cached_encoder_for_AocCompleteRes: $.ASN1Encoder<AocCompleteRes> | null = null;

/**
 * @summary Encodes a(n) AocCompleteRes into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocCompleteRes, encoded as an ASN.1 Element.
 */
export
function _encode_AocCompleteRes (value: AocCompleteRes, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocCompleteRes) { _cached_encoder_for_AocCompleteRes = function (value: AocCompleteRes, _elGetter: $.ASN1Encoder<AocCompleteRes>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_ChargingOption(value.chargingOption, $.BER));
    if (value.completeResExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AocCompleteRes_completeResExtension(value.completeResExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocCompleteRes(value, elGetter);
}

/* eslint-enable */
