/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { type ChargingAssociation, _decode_ChargingAssociation, _encode_ChargingAssociation } from "../SS-AOC-Operations-asn1-97/ChargingAssociation.ta.mjs";
import { type AocCompleteArg_completeArgExtension, _decode_AocCompleteArg_completeArgExtension, _encode_AocCompleteArg_completeArgExtension } from "../SS-AOC-Operations-asn1-97/AocCompleteArg-completeArgExtension.ta.mjs";

/**
 * @summary AocCompleteArg
 * @description
 *
 * Argument of `aocComplete`. Tells the Outgoing Gateway that user A is
 * transferring and is about to leave the call (ECMA-212 §6.9.3.1.1, ECMA-211
 * §9.2.1.11).
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-212/
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-211/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocCompleteArg ::= SEQUENCE {
 *     chargedUser PartyNumber,
 *     chargingAssociation ChargingAssociation OPTIONAL,
 *     completeArgExtension CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocCompleteArg {
    /**
     * @summary `chargedUser`.
     * @description
     *
     * PISN number of user A (ECMA-211 table 10 note 1). It becomes the Called
     * party number of the call-independent connection that later carries
     * `aocFinal` (ECMA-212 §6.6.2.3.1, §6.9.3.1.1).
     * @public
     * @readonly
     */
    readonly chargedUser: PartyNumber;
    /**
     * @summary `chargingAssociation`.
     * @description
     *
     * Include it when charging-association information is available (ECMA-212
     * §6.9.3.1.1). The same value is copied into the later `aocFinal`.
     * @public
     * @readonly
     */
    readonly chargingAssociation: OPTIONAL<ChargingAssociation>;
    /**
     * @summary `completeArgExtension`.
     * @description
     *
     * Optional manufacturer-specific extension on `aocComplete invoke`.
     * ECMA-212 §6.3.1 defines `AOCExtSet` as `{...}` and names no member. It
     * does not say when to send one extension rather than several.
     * @public
     * @readonly
     */
    readonly completeArgExtension: OPTIONAL<AocCompleteArg_completeArgExtension>;

    constructor (
        chargedUser: PartyNumber,
        chargingAssociation?: OPTIONAL<ChargingAssociation>,
        completeArgExtension?: OPTIONAL<AocCompleteArg_completeArgExtension>
    ) {
        this.chargedUser = chargedUser;
        this.chargingAssociation = chargingAssociation;
        this.completeArgExtension = completeArgExtension;
    }

    /**
     * @summary Restructures an object into a AocCompleteArg
     * @description
     * 
     * This takes an `object` and converts it to a `AocCompleteArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocCompleteArg`.
     * @returns {AocCompleteArg}
     */
    public static _from_object (_o: { [_K in keyof (AocCompleteArg)]: (AocCompleteArg)[_K] }): AocCompleteArg {
        return new AocCompleteArg(_o.chargedUser, _o.chargingAssociation, _o.completeArgExtension);
    }

}

/**
 * @summary The Leading Root Component Types of AocCompleteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocCompleteArg: $.ComponentSpec[] = [
    new $.ComponentSpec("chargedUser", false, $.hasAnyTag),
    new $.ComponentSpec("chargingAssociation", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.universal, 2))),
    new $.ComponentSpec("completeArgExtension", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of AocCompleteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocCompleteArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocCompleteArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocCompleteArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocCompleteArg: $.ASN1Decoder<AocCompleteArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocCompleteArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocCompleteArg (el: _Element): AocCompleteArg {
    if (!_cached_decoder_for_AocCompleteArg) { _cached_decoder_for_AocCompleteArg = function (el: _Element): AocCompleteArg {
    let chargedUser!: PartyNumber;
    let chargingAssociation: OPTIONAL<ChargingAssociation>;
    let completeArgExtension: OPTIONAL<AocCompleteArg_completeArgExtension>;
    const callbacks: $.DecodingMap = {
        "chargedUser": (_el: _Element): void => { chargedUser = _decode_PartyNumber(_el); },
        "chargingAssociation": (_el: _Element): void => { chargingAssociation = _decode_ChargingAssociation(_el); },
        "completeArgExtension": (_el: _Element): void => { completeArgExtension = _decode_AocCompleteArg_completeArgExtension(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocCompleteArg,
        _extension_additions_list_spec_for_AocCompleteArg,
        _root_component_type_list_2_spec_for_AocCompleteArg,
        undefined,
    );
    return new AocCompleteArg(
        chargedUser,
        chargingAssociation,
        completeArgExtension
    );
}; }
    return _cached_decoder_for_AocCompleteArg(el);
}

let _cached_encoder_for_AocCompleteArg: $.ASN1Encoder<AocCompleteArg> | null = null;

/**
 * @summary Encodes a(n) AocCompleteArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocCompleteArg, encoded as an ASN.1 Element.
 */
export
function _encode_AocCompleteArg (value: AocCompleteArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocCompleteArg) { _cached_encoder_for_AocCompleteArg = function (value: AocCompleteArg, _elGetter: $.ASN1Encoder<AocCompleteArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.chargedUser, $.BER));
    if (value.chargingAssociation !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ChargingAssociation(value.chargingAssociation, $.BER));
    }
    if (value.completeArgExtension !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AocCompleteArg_completeArgExtension(value.completeArgExtension, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocCompleteArg(value, elGetter);
}

/* eslint-enable */
