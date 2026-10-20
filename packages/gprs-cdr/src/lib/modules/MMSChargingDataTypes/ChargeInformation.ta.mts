/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ChargedParty, _encode_ChargedParty, _enum_for_ChargedParty, ChargedParty } from "../MMSChargingDataTypes/ChargedParty.ta.mjs";
// export { ChargedParty, _enum_for_ChargedParty, ChargedParty_sender /* IMPORTED_LONG_ENUMERATION_ITEM */, sender /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChargedParty_recipient /* IMPORTED_LONG_ENUMERATION_ITEM */, recipient /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChargedParty_both /* IMPORTED_LONG_ENUMERATION_ITEM */, both /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChargedParty_neither /* IMPORTED_LONG_ENUMERATION_ITEM */, neither /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChargedParty_notspecifiedbyVASP /* IMPORTED_LONG_ENUMERATION_ITEM */, notspecifiedbyVASP /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChargedParty, _encode_ChargedParty } from "../MMSChargingDataTypes/ChargedParty.ta.mjs";
import { _decode_ChargeType, _encode_ChargeType, _enum_for_ChargeType, ChargeType } from "../MMSChargingDataTypes/ChargeType.ta.mjs";
// export { ChargeType, _enum_for_ChargeType, ChargeType_postpaid /* IMPORTED_LONG_ENUMERATION_ITEM */, postpaid /* IMPORTED_SHORT_ENUMERATION_ITEM */, ChargeType_pre_paid /* IMPORTED_LONG_ENUMERATION_ITEM */, pre_paid /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_ChargeType, _encode_ChargeType } from "../MMSChargingDataTypes/ChargeType.ta.mjs";


/**
 * @summary ChargeInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargeInformation ::= SEQUENCE {
 *    chargedparty   [0] IMPLICIT ChargedParty OPTIONAL,
 *    chargetype     [1] IMPLICIT ChargeType OPTIONAL}
 * ```
 * 
 * @class
 */
export
class ChargeInformation {
    /**
     * @summary `chargedparty`.
     * @public
     * @readonly
     */
    readonly chargedparty: OPTIONAL<ChargedParty>;
    /**
     * @summary `chargetype`.
     * @public
     * @readonly
     */
    readonly chargetype: OPTIONAL<ChargeType>;

    constructor (
        chargedparty: OPTIONAL<ChargedParty>,
        chargetype: OPTIONAL<ChargeType>
    ) {
        this.chargedparty = chargedparty;
        this.chargetype = chargetype;
    }

    /**
     * @summary Restructures an object into a ChargeInformation
     * @description
     * 
     * This takes an `object` and converts it to a `ChargeInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargeInformation`.
     * @returns {ChargeInformation}
     */
    public static _from_object (_o: { [_K in keyof (ChargeInformation)]: (ChargeInformation)[_K] }): ChargeInformation {
        return new ChargeInformation(_o.chargedparty, _o.chargetype);
    }

        /**
         * @summary The enum used as the type of the component `chargedparty`
         * @public
         * @static
         */

    public static _enum_for_chargedparty = _enum_for_ChargedParty;        /**
         * @summary The enum used as the type of the component `chargetype`
         * @public
         * @static
         */

    public static _enum_for_chargetype = _enum_for_ChargeType;
}

/**
 * @summary The Leading Root Component Types of ChargeInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargeInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("chargedparty", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("chargetype", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ChargeInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargeInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargeInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargeInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargeInformation: $.ASN1Decoder<ChargeInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargeInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargeInformation (el: _Element): ChargeInformation {
    if (!_cached_decoder_for_ChargeInformation) { _cached_decoder_for_ChargeInformation = function (el: _Element): ChargeInformation {
    let chargedparty: OPTIONAL<ChargedParty>;
    let chargetype: OPTIONAL<ChargeType>;
    const callbacks: $.DecodingMap = {
        "chargedparty": (_el: _Element): void => { chargedparty = $._decode_implicit<ChargedParty>(() => _decode_ChargedParty)(_el); },
        "chargetype": (_el: _Element): void => { chargetype = $._decode_implicit<ChargeType>(() => _decode_ChargeType)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ChargeInformation,
        _extension_additions_list_spec_for_ChargeInformation,
        _root_component_type_list_2_spec_for_ChargeInformation,
        undefined,
    );
    return new ChargeInformation(
        chargedparty,
        chargetype
    );
}; }
    return _cached_decoder_for_ChargeInformation(el);
}

let _cached_encoder_for_ChargeInformation: $.ASN1Encoder<ChargeInformation> | null = null;

/**
 * @summary Encodes a(n) ChargeInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargeInformation, encoded as an ASN.1 Element.
 */
export
function _encode_ChargeInformation (value: ChargeInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargeInformation) { _cached_encoder_for_ChargeInformation = function (value: ChargeInformation, _elGetter: $.ASN1Encoder<ChargeInformation>): _Element {
    const _components: _Element[] = [];
    if (value.chargedparty !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => _encode_ChargedParty, $.BER)(value.chargedparty, $.BER));
    }
    if (value.chargetype !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_ChargeType, $.BER)(value.chargetype, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ChargeInformation(value, elGetter);
}


/* eslint-enable */
