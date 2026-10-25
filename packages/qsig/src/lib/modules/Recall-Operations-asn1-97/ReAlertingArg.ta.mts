/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PresentedNumberScreened, _decode_PresentedNumberScreened, _encode_PresentedNumberScreened } from "../Addressing-Data-Elements-asn1-97/PresentedNumberScreened.ta.mjs";
import { type Name, _decode_Name, _encode_Name } from "../Name-Operations-asn1-97/Name.ta.mjs";
import { type ReAlertingArg_argumentExtension, _decode_ReAlertingArg_argumentExtension, _encode_ReAlertingArg_argumentExtension } from "../Recall-Operations-asn1-97/ReAlertingArg-argumentExtension.ta.mjs";

/**
 * @summary ReAlertingArg
 * @description
 *
 * Argument of `recallAlerting` (ECMA-214 §6.3.1, §6.5.1.1).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-214/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ReAlertingArg ::= SEQUENCE {
 *     alertedNumber [1] PresentedNumberScreened OPTIONAL,
 *     alertedName [2] Name OPTIONAL,
 *     argumentExtension CHOICE {
 *         extension [6] IMPLICIT Extension {{REExtSet}},
 *         multipleExtension [7] IMPLICIT SEQUENCE OF Extension {{REExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ReAlertingArg {
    /**
     * @summary `alertedNumber`.
     * @description
     *
     * Number of the user being alerted for the recall. Included only when it is
     * known that presentation restriction does not apply (ECMA-214 §6.5.1.1).
     * The Primary PINX may give it to user B subject to number presentation
     * restriction (§6.5.2.1). If CFU or CFB applies, this is the diverted-to
     * user rather than user A (§6.9.3.1).
     * @public
     * @readonly
     */
    readonly alertedNumber: OPTIONAL<PresentedNumberScreened>;
    /**
     * @summary `alertedName`.
     * @description
     *
     * Name of the user being alerted. Included only when it is known that
     * presentation restriction does not apply (ECMA-214 §6.5.1.1). The Primary
     * PINX may give it to user B subject to name presentation restriction
     * (§6.5.2.1). If CFU or CFB applies, this is the diverted-to user rather
     * than user A (§6.9.3.1).
     * @public
     * @readonly
     */
    readonly alertedName: OPTIONAL<Name>;
    /**
     * @summary `argumentExtension`.
     * @description
     *
     * Manufacturer-specific extension from `REExtSet`. The standardized set is
     * empty (ECMA-214 §6.3.1).
     * @public
     * @readonly
     */
    readonly argumentExtension: OPTIONAL<ReAlertingArg_argumentExtension>;

    constructor (
        alertedNumber?: OPTIONAL<PresentedNumberScreened>,
        alertedName?: OPTIONAL<Name>,
        argumentExtension?: OPTIONAL<ReAlertingArg_argumentExtension>
    ) {
        this.alertedNumber = alertedNumber;
        this.alertedName = alertedName;
        this.argumentExtension = argumentExtension;
    }

    /**
     * @summary Restructures an object into a ReAlertingArg
     * @description
     * 
     * This takes an `object` and converts it to a `ReAlertingArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReAlertingArg`.
     * @returns {ReAlertingArg}
     */
    public static _from_object (_o: { [_K in keyof (ReAlertingArg)]: (ReAlertingArg)[_K] }): ReAlertingArg {
        return new ReAlertingArg(_o.alertedNumber, _o.alertedName, _o.argumentExtension);
    }

}

/**
 * @summary The Leading Root Component Types of ReAlertingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReAlertingArg: $.ComponentSpec[] = [
    new $.ComponentSpec("alertedNumber", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("alertedName", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("argumentExtension", true, $.or($.hasTag(_TagClass.context, 6), $.hasTag(_TagClass.context, 7)))
];

/**
 * @summary The Trailing Root Component Types of ReAlertingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReAlertingArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReAlertingArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReAlertingArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReAlertingArg: $.ASN1Decoder<ReAlertingArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReAlertingArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReAlertingArg (el: _Element): ReAlertingArg {
    if (!_cached_decoder_for_ReAlertingArg) { _cached_decoder_for_ReAlertingArg = function (el: _Element): ReAlertingArg {
    let alertedNumber: OPTIONAL<PresentedNumberScreened>;
    let alertedName: OPTIONAL<Name>;
    let argumentExtension: OPTIONAL<ReAlertingArg_argumentExtension>;
    const callbacks: $.DecodingMap = {
        "alertedNumber": (_el: _Element): void => { alertedNumber = $._decode_explicit<PresentedNumberScreened>(() => _decode_PresentedNumberScreened)(_el); },
        "alertedName": (_el: _Element): void => { alertedName = $._decode_explicit<Name>(() => _decode_Name)(_el); },
        "argumentExtension": (_el: _Element): void => { argumentExtension = _decode_ReAlertingArg_argumentExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReAlertingArg,
        _extension_additions_list_spec_for_ReAlertingArg,
        _root_component_type_list_2_spec_for_ReAlertingArg,
        undefined,
    );
    return new ReAlertingArg(
        alertedNumber,
        alertedName,
        argumentExtension
    );
}; }
    return _cached_decoder_for_ReAlertingArg(el);
}

let _cached_encoder_for_ReAlertingArg: $.ASN1Encoder<ReAlertingArg> | null = null;

/**
 * @summary Encodes a(n) ReAlertingArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReAlertingArg, encoded as an ASN.1 Element.
 */
export
function _encode_ReAlertingArg (value: ReAlertingArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReAlertingArg) { _cached_encoder_for_ReAlertingArg = function (value: ReAlertingArg, _elGetter: $.ASN1Encoder<ReAlertingArg>): _Element {
    const _components: _Element[] = [];
    if (value.alertedNumber !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_PresentedNumberScreened, $.BER)(value.alertedNumber, $.BER));
    }
    if (value.alertedName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_Name, $.BER)(value.alertedName, $.BER));
    }
    if (value.argumentExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ReAlertingArg_argumentExtension(value.argumentExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ReAlertingArg(value, elGetter);
}

/* eslint-enable */
