/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { AocFinalArg_finalCharge, _decode_AocFinalArg_finalCharge, _encode_AocFinalArg_finalCharge } from "../SS-AOC-Operations-asn1-97/AocFinalArg-finalCharge.ta.mjs";
import { ChargingAssociation, _decode_ChargingAssociation, _encode_ChargingAssociation } from "../SS-AOC-Operations-asn1-97/ChargingAssociation.ta.mjs";
import { AocFinalArg_finalArgExtension, _decode_AocFinalArg_finalArgExtension, _encode_AocFinalArg_finalArgExtension } from "../SS-AOC-Operations-asn1-97/AocFinalArg-finalArgExtension.ta.mjs";

/**
 * @summary AocFinalArg
 * @description
 *
 * Argument of `aocFinal`: the total recorded charge, optionally tied back to
 * the call by a charging association (ECMA-212 §6.3.1, §4.2.6).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocFinalArg ::= SEQUENCE {
 *     finalCharge CHOICE {
 *         chargeNotAvailable [0] IMPLICIT NULL,
 *         freeOfCharge [1] IMPLICIT NULL,
 *         specificCurrency SEQUENCE {
 *             recordedCurrency [1] IMPLICIT RecordedCurrency,
 *             finalBillingId [2] IMPLICIT FinalBillingId OPTIONAL
 *         }
 *     },
 *     chargingAssociation ChargingAssociation OPTIONAL,
 *     finalArgExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocFinalArg {
    /**
     * @summary `finalCharge`.
     * @description
     *
     * Total recorded for the call, free of charge, or total not available
     * (ECMA-211 §C.1.1).
     * @public
     * @readonly
     */
    readonly finalCharge: AocFinalArg_finalCharge;
    /**
     * @summary `chargingAssociation`.
     * @description
     *
     * Optional tie between this total and the call (ECMA-212 §4.2.6). Copied
     * from `aocComplete` or `aocDivChargeReq` when that element was present
     * (§6.6.2.3.1, §6.6.2.4.1).
     * @public
     * @readonly
     */
    readonly chargingAssociation: OPTIONAL<ChargingAssociation>;
    /**
     * @summary `finalArgExtension`.
     * @description
     *
     * Optional manufacturer-specific extension on `aocFinal`. ECMA-212 §6.3.1
     * defines `AOCExtSet` as `{...}` and names no member. It does not say when
     * to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly finalArgExtension: OPTIONAL<AocFinalArg_finalArgExtension>;

    constructor (
        finalCharge: AocFinalArg_finalCharge,
        chargingAssociation?: OPTIONAL<ChargingAssociation>,
        finalArgExtension?: OPTIONAL<AocFinalArg_finalArgExtension>
    ) {
        this.finalCharge = finalCharge;
        this.chargingAssociation = chargingAssociation;
        this.finalArgExtension = finalArgExtension;
    }

    /**
     * @summary Restructures an object into a AocFinalArg
     * @description
     * 
     * This takes an `object` and converts it to a `AocFinalArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocFinalArg`.
     * @returns {AocFinalArg}
     */
    public static _from_object (_o: { [_K in keyof (AocFinalArg)]: (AocFinalArg)[_K] }): AocFinalArg {
        return new AocFinalArg(_o.finalCharge, _o.chargingAssociation, _o.finalArgExtension);
    }

}

/**
 * @summary The Leading Root Component Types of AocFinalArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocFinalArg: $.ComponentSpec[] = [
    new $.ComponentSpec("finalCharge", false, $.hasAnyTag),
    new $.ComponentSpec("chargingAssociation", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.universal, 2))),
    new $.ComponentSpec("finalArgExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of AocFinalArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocFinalArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocFinalArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocFinalArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocFinalArg: $.ASN1Decoder<AocFinalArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocFinalArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocFinalArg (el: _Element): AocFinalArg {
    if (!_cached_decoder_for_AocFinalArg) { _cached_decoder_for_AocFinalArg = function (el: _Element): AocFinalArg {
    let finalCharge!: AocFinalArg_finalCharge;
    let chargingAssociation: OPTIONAL<ChargingAssociation>;
    let finalArgExtension: OPTIONAL<AocFinalArg_finalArgExtension>;
    const callbacks: $.DecodingMap = {
        "finalCharge": (_el: _Element): void => { finalCharge = _decode_AocFinalArg_finalCharge(_el); },
        "chargingAssociation": (_el: _Element): void => { chargingAssociation = _decode_ChargingAssociation(_el); },
        "finalArgExtension": (_el: _Element): void => { finalArgExtension = _decode_AocFinalArg_finalArgExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocFinalArg,
        _extension_additions_list_spec_for_AocFinalArg,
        _root_component_type_list_2_spec_for_AocFinalArg,
        undefined,
    );
    return new AocFinalArg(
        finalCharge,
        chargingAssociation,
        finalArgExtension
    );
}; }
    return _cached_decoder_for_AocFinalArg(el);
}

let _cached_encoder_for_AocFinalArg: $.ASN1Encoder<AocFinalArg> | null = null;

/**
 * @summary Encodes a(n) AocFinalArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocFinalArg, encoded as an ASN.1 Element.
 */
export
function _encode_AocFinalArg (value: AocFinalArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocFinalArg) { _cached_encoder_for_AocFinalArg = function (value: AocFinalArg, _elGetter: $.ASN1Encoder<AocFinalArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_AocFinalArg_finalCharge(value.finalCharge, $.BER));
    if (value.chargingAssociation !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ChargingAssociation(value.chargingAssociation, $.BER));
    }
    if (value.finalArgExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AocFinalArg_finalArgExtension(value.finalArgExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocFinalArg(value, elGetter);
}

/* eslint-enable */
