/* eslint-disable */

import * as $ from "@wildboar/asn1/functional";
import {
    ENUMERATED,
    SEQUENCE,
    SET,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1ConstructionError as _ConstructionError
} from "@wildboar/asn1";
import { NumberUnits, _decode_NumberUnits, _encode_NumberUnits } from "../CSTA-charge-info/NumberUnits.ta.mjs";

import {
    ChargingInfo_typeOfChargingInfo,
    _enum_for_ChargingInfo_typeOfChargingInfo,
    subTotal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    total /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ChargingInfo_typeOfChargingInfo,
    _encode_ChargingInfo_typeOfChargingInfo
} from "../CSTA-charge-info/ChargingInfo-typeOfChargingInfo.ta.mjs";



/**
 * @summary ChargingInfo
 * @description
 *
 * Cumulative charging or currency units charged to a device for a call.
 * Intermediate (during the call) or final (when the device leaves). ECMA-269
 * §12.2.7.
 *
 * @see {@link https://ecma-international.org/publications-and-standards/standards/ecma-269/ ECMA-269}
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ChargingInfo ::= SEQUENCE
 * {     numberUnits             NumberUnits,
 *     typeOfChargingInfo         ENUMERATED
 *     {     subTotal         (0),
 *         total             (1) } }
 * ```
 * 
 * @class
 */
export
class ChargingInfo {
    constructor (
        /**
         * @summary `numberUnits`.
         * @description
         *
         * Charging units or currency units. ECMA-269 §12.2.7.
         *
         * @public
         * @readonly
         */
        readonly numberUnits: NumberUnits,
        /**
         * @summary `typeOfChargingInfo`.
         * @description
         *
         * Sub-total (intermediate) or Total (complete). ECMA-269 §12.2.7.
         *
         * @public
         * @readonly
         */
        readonly typeOfChargingInfo: ChargingInfo_typeOfChargingInfo
    ) {}

    /**
     * @summary Restructures an object into a ChargingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ChargingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ChargingInfo`.
     * @returns {ChargingInfo}
     */
    public static _from_object (_o: { [_K in keyof (ChargingInfo)]: (ChargingInfo)[_K] }): ChargingInfo {
        return new ChargingInfo(_o.numberUnits, _o.typeOfChargingInfo);
    }

        /**
         * @summary The enum used as the type of the component `typeOfChargingInfo`
         * @public
         * @static
         */

    public static _enum_for_typeOfChargingInfo = _enum_for_ChargingInfo_typeOfChargingInfo;
}

/**
 * @summary The Leading Root Component Types of ChargingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ChargingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("numberUnits", false, $.hasAnyTag),
    new $.ComponentSpec("typeOfChargingInfo", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of ChargingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ChargingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ChargingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ChargingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ChargingInfo: $.ASN1Decoder<ChargingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ChargingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ChargingInfo (el: _Element): ChargingInfo {
    if (!_cached_decoder_for_ChargingInfo) { _cached_decoder_for_ChargingInfo = function (el: _Element): ChargingInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ChargingInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "numberUnits";
    sequence[1].name = "typeOfChargingInfo";
    let numberUnits!: NumberUnits;
    let typeOfChargingInfo!: ChargingInfo_typeOfChargingInfo;
    numberUnits = _decode_NumberUnits(sequence[0]);
    typeOfChargingInfo = _decode_ChargingInfo_typeOfChargingInfo(sequence[1]);
    return new ChargingInfo(
        numberUnits,
        typeOfChargingInfo,

    );
}; }
    return _cached_decoder_for_ChargingInfo(el);
}

let _cached_encoder_for_ChargingInfo: $.ASN1Encoder<ChargingInfo> | null = null;

/**
 * @summary Encodes a(n) ChargingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ChargingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ChargingInfo (value: ChargingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ChargingInfo) { _cached_encoder_for_ChargingInfo = function (value: ChargingInfo, elGetter: $.ASN1Encoder<ChargingInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NumberUnits(value.numberUnits, $.BER),
            /* REQUIRED   */ _encode_ChargingInfo_typeOfChargingInfo(value.typeOfChargingInfo, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_ChargingInfo(value, elGetter);
}


/* eslint-enable */
