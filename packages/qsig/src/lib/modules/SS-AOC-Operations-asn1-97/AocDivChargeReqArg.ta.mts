/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements-asn1-97/PartyNumber.ta.mjs";
import { ChargingAssociation, _decode_ChargingAssociation, _encode_ChargingAssociation } from "../SS-AOC-Operations-asn1-97/ChargingAssociation.ta.mjs";
import { DiversionType, _decode_DiversionType, _encode_DiversionType, _enum_for_DiversionType } from "../SS-AOC-Operations-asn1-97/DiversionType.ta.mjs";
import { AocDivChargeReqArg_aocDivChargeReqArgExt, _decode_AocDivChargeReqArg_aocDivChargeReqArgExt, _encode_AocDivChargeReqArg_aocDivChargeReqArgExt } from "../SS-AOC-Operations-asn1-97/AocDivChargeReqArg-aocDivChargeReqArgExt.ta.mjs";

/**
 * @summary AocDivChargeReqArg
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AocDivChargeReqArg ::= SEQUENCE {
 *     divertingUser PartyNumber,
 *     chargingAssociation ChargingAssociation OPTIONAL,
 *     diversionType DiversionType,
 *     aocDivChargeReqArgExt CHOICE {
 *         extension [1] IMPLICIT Extension {{AOCExtSet}},
 *         multipleExtension [2] IMPLICIT SEQUENCE OF Extension {{AOCExtSet}}
 *     } OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class AocDivChargeReqArg {
    /**
     * @summary `divertingUser`.
     * @public
     * @readonly
     */
    readonly divertingUser: PartyNumber;
    /**
     * @summary `chargingAssociation`.
     * @public
     * @readonly
     */
    readonly chargingAssociation: OPTIONAL<ChargingAssociation>;
    /**
     * @summary `diversionType`.
     * @public
     * @readonly
     */
    readonly diversionType: DiversionType;
    /**
     * @summary `aocDivChargeReqArgExt`.
     * @public
     * @readonly
     */
    readonly aocDivChargeReqArgExt: OPTIONAL<AocDivChargeReqArg_aocDivChargeReqArgExt>;

    constructor (
        divertingUser: PartyNumber,
        chargingAssociation: OPTIONAL<ChargingAssociation>,
        diversionType: DiversionType,
        aocDivChargeReqArgExt: OPTIONAL<AocDivChargeReqArg_aocDivChargeReqArgExt>
    ) {
        this.divertingUser = divertingUser;
        this.chargingAssociation = chargingAssociation;
        this.diversionType = diversionType;
        this.aocDivChargeReqArgExt = aocDivChargeReqArgExt;
    }

    /**
     * @summary Restructures an object into a AocDivChargeReqArg
     * @description
     * 
     * This takes an `object` and converts it to a `AocDivChargeReqArg`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AocDivChargeReqArg`.
     * @returns {AocDivChargeReqArg}
     */
    public static _from_object (_o: { [_K in keyof (AocDivChargeReqArg)]: (AocDivChargeReqArg)[_K] }): AocDivChargeReqArg {
        return new AocDivChargeReqArg(_o.divertingUser, _o.chargingAssociation, _o.diversionType, _o.aocDivChargeReqArgExt);
    }

        /**
         * @summary The enum used as the type of the component `diversionType`
         * @public
         * @static
         */

    public static _enum_for_diversionType = _enum_for_DiversionType;
}

/**
 * @summary The Leading Root Component Types of AocDivChargeReqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AocDivChargeReqArg: $.ComponentSpec[] = [
    new $.ComponentSpec("divertingUser", false, $.hasAnyTag),
    new $.ComponentSpec("chargingAssociation", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.universal, 2))),
    new $.ComponentSpec("diversionType", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("aocDivChargeReqArgExt", true, $.or($.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of AocDivChargeReqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AocDivChargeReqArg: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AocDivChargeReqArg
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AocDivChargeReqArg: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AocDivChargeReqArg: $.ASN1Decoder<AocDivChargeReqArg> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AocDivChargeReqArg
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AocDivChargeReqArg (el: _Element): AocDivChargeReqArg {
    if (!_cached_decoder_for_AocDivChargeReqArg) { _cached_decoder_for_AocDivChargeReqArg = function (el: _Element): AocDivChargeReqArg {
    let divertingUser!: PartyNumber;
    let chargingAssociation: OPTIONAL<ChargingAssociation>;
    let diversionType!: DiversionType;
    let aocDivChargeReqArgExt: OPTIONAL<AocDivChargeReqArg_aocDivChargeReqArgExt>;
    const callbacks: $.DecodingMap = {
        "divertingUser": (_el: _Element): void => { divertingUser = _decode_PartyNumber(_el); },
        "chargingAssociation": (_el: _Element): void => { chargingAssociation = _decode_ChargingAssociation(_el); },
        "diversionType": (_el: _Element): void => { diversionType = _decode_DiversionType(_el); },
        "aocDivChargeReqArgExt": (_el: _Element): void => { aocDivChargeReqArgExt = _decode_AocDivChargeReqArg_aocDivChargeReqArgExt(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AocDivChargeReqArg,
        _extension_additions_list_spec_for_AocDivChargeReqArg,
        _root_component_type_list_2_spec_for_AocDivChargeReqArg,
        undefined,
    );
    return new AocDivChargeReqArg(
        divertingUser,
        chargingAssociation,
        diversionType,
        aocDivChargeReqArgExt
    );
}; }
    return _cached_decoder_for_AocDivChargeReqArg(el);
}

let _cached_encoder_for_AocDivChargeReqArg: $.ASN1Encoder<AocDivChargeReqArg> | null = null;

/**
 * @summary Encodes a(n) AocDivChargeReqArg into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AocDivChargeReqArg, encoded as an ASN.1 Element.
 */
export
function _encode_AocDivChargeReqArg (value: AocDivChargeReqArg, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AocDivChargeReqArg) { _cached_encoder_for_AocDivChargeReqArg = function (value: AocDivChargeReqArg, elGetter: $.ASN1Encoder<AocDivChargeReqArg>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ _encode_PartyNumber(value.divertingUser, $.BER));
    if (value.chargingAssociation !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_ChargingAssociation(value.chargingAssociation, $.BER));
    }
    _components.push(/* REQUIRED   */ _encode_DiversionType(value.diversionType, $.BER));
    if (value.aocDivChargeReqArgExt !== undefined) {
        _components.push(/* IF_ABSENT  */ _encode_AocDivChargeReqArg_aocDivChargeReqArgExt(value.aocDivChargeReqArgExt, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_AocDivChargeReqArg(value, elGetter);
}

/* eslint-enable */
