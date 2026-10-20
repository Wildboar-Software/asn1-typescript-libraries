/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ChargedItem, _decode_ChargedItem, _encode_ChargedItem, _enum_for_ChargedItem } from "../SS-AOC-Operations-asn1-97/ChargedItem.ta.mjs";
import { AOCSCurrencyInfo_rateType, _decode_AOCSCurrencyInfo_rateType, _encode_AOCSCurrencyInfo_rateType } from "../SS-AOC-Operations-asn1-97/AOCSCurrencyInfo-rateType.ta.mjs";

/**
 * @summary AOCSCurrencyInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AOCSCurrencyInfo ::= SEQUENCE {
 *     chargedItem ChargedItem,
 *     rateType CHOICE {
 *         durationCurrency [1] IMPLICIT DurationCurrency,
 *         flatRateCurrency [2] IMPLICIT FlatRateCurrency,
 *         volumeRateCurrency [3] IMPLICIT VolumeRateCurrency,
 *         specialChargingCode SpecialChargingCode,
 *         freeOfCharge [4] IMPLICIT NULL,
 *         currencyInfoNotAvailable [5] IMPLICIT NULL,
 *         freeOfChargefromBeginning [6] IMPLICIT NULL
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class AOCSCurrencyInfo {
    /**
     * @summary `chargedItem`.
     * @public
     * @readonly
     */
    readonly chargedItem: ChargedItem;
    /**
     * @summary `rateType`.
     * @public
     * @readonly
     */
    readonly rateType: AOCSCurrencyInfo_rateType;

    constructor (
        chargedItem: ChargedItem,
        rateType: AOCSCurrencyInfo_rateType
    ) {
        this.chargedItem = chargedItem;
        this.rateType = rateType;
    }

    /**
     * @summary Restructures an object into a AOCSCurrencyInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AOCSCurrencyInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AOCSCurrencyInfo`.
     * @returns {AOCSCurrencyInfo}
     */
    public static _from_object (_o: { [_K in keyof (AOCSCurrencyInfo)]: (AOCSCurrencyInfo)[_K] }): AOCSCurrencyInfo {
        return new AOCSCurrencyInfo(_o.chargedItem, _o.rateType);
    }

        /**
         * @summary The enum used as the type of the component `chargedItem`
         * @public
         * @static
         */

    public static _enum_for_chargedItem = _enum_for_ChargedItem;
}

/**
 * @summary The Leading Root Component Types of AOCSCurrencyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AOCSCurrencyInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("chargedItem", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("rateType", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of AOCSCurrencyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AOCSCurrencyInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AOCSCurrencyInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AOCSCurrencyInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AOCSCurrencyInfo: $.ASN1Decoder<AOCSCurrencyInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AOCSCurrencyInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AOCSCurrencyInfo (el: _Element): AOCSCurrencyInfo {
    if (!_cached_decoder_for_AOCSCurrencyInfo) { _cached_decoder_for_AOCSCurrencyInfo = function (el: _Element): AOCSCurrencyInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AOCSCurrencyInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "chargedItem";
    sequence[1].name = "rateType";
    const chargedItem: ChargedItem = _decode_ChargedItem(sequence[0]);
    const rateType: AOCSCurrencyInfo_rateType = _decode_AOCSCurrencyInfo_rateType(sequence[1]);
    return new AOCSCurrencyInfo(
        chargedItem,
        rateType,

    );
}; }
    return _cached_decoder_for_AOCSCurrencyInfo(el);
}

let _cached_encoder_for_AOCSCurrencyInfo: $.ASN1Encoder<AOCSCurrencyInfo> | null = null;

/**
 * @summary Encodes a(n) AOCSCurrencyInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AOCSCurrencyInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AOCSCurrencyInfo (value: AOCSCurrencyInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AOCSCurrencyInfo) { _cached_encoder_for_AOCSCurrencyInfo = function (value: AOCSCurrencyInfo, _elGetter: $.ASN1Encoder<AOCSCurrencyInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_ChargedItem(value.chargedItem, $.BER),
        /* REQUIRED   */ _encode_AOCSCurrencyInfo_rateType(value.rateType, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_AOCSCurrencyInfo(value, elGetter);
}

/* eslint-enable */
