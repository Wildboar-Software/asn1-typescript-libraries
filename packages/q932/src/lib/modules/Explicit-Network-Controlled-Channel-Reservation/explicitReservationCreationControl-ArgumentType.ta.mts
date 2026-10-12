/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_explicitReservationCreationControl_ArgumentType_controlOption, _encode_explicitReservationCreationControl_ArgumentType_controlOption, _enum_for_explicitReservationCreationControl_ArgumentType_controlOption, explicitReservationCreationControl_ArgumentType_controlOption } from "../Explicit-Network-Controlled-Channel-Reservation/explicitReservationCreationControl-ArgumentType-controlOption.ta.mjs";
// export { explicitReservationCreationControl_ArgumentType_controlOption, _enum_for_explicitReservationCreationControl_ArgumentType_controlOption, explicitReservationCreationControl_ArgumentType_controlOption_noReservationRequired /* IMPORTED_LONG_ENUMERATION_ITEM */, noReservationRequired /* IMPORTED_SHORT_ENUMERATION_ITEM */, explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithReservationIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, reservationRequiredWithReservationIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, explicitReservationCreationControl_ArgumentType_controlOption_reservationRequiredWithoutReservationIndicator /* IMPORTED_LONG_ENUMERATION_ITEM */, reservationRequiredWithoutReservationIndicator /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_explicitReservationCreationControl_ArgumentType_controlOption, _encode_explicitReservationCreationControl_ArgumentType_controlOption } from "../Explicit-Network-Controlled-Channel-Reservation/explicitReservationCreationControl-ArgumentType-controlOption.ta.mjs";


/**
 * @summary explicitReservationCreationControl_ArgumentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * explicitReservationCreationControl-ArgumentType ::= SEQUENCE {
 *   controlOption
 *     ENUMERATED {
 *       noReservationRequired(0),
 *       reservationRequiredWithReservationIndicator(1),
 *       reservationRequiredWithoutReservationIndicator(2)
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class explicitReservationCreationControl_ArgumentType {
    /**
     * @summary `controlOption`.
     * @public
     * @readonly
     */
    readonly controlOption: explicitReservationCreationControl_ArgumentType_controlOption;

    constructor (
        controlOption: explicitReservationCreationControl_ArgumentType_controlOption
    ) {
        this.controlOption = controlOption;
    }

    /**
     * @summary Restructures an object into a explicitReservationCreationControl_ArgumentType
     * @description
     * 
     * This takes an `object` and converts it to a `explicitReservationCreationControl_ArgumentType`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `explicitReservationCreationControl_ArgumentType`.
     * @returns {explicitReservationCreationControl_ArgumentType}
     */
    public static _from_object (_o: { [_K in keyof (explicitReservationCreationControl_ArgumentType)]: (explicitReservationCreationControl_ArgumentType)[_K] }): explicitReservationCreationControl_ArgumentType {
        return new explicitReservationCreationControl_ArgumentType(_o.controlOption);
    }

        /**
         * @summary The enum used as the type of the component `controlOption`
         * @public
         * @static
         */

    public static _enum_for_controlOption = _enum_for_explicitReservationCreationControl_ArgumentType_controlOption;
}

/**
 * @summary The Leading Root Component Types of explicitReservationCreationControl_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_explicitReservationCreationControl_ArgumentType: $.ComponentSpec[] = [
    new $.ComponentSpec("controlOption", false, $.hasTag(_TagClass.universal, 10))
];

/**
 * @summary The Trailing Root Component Types of explicitReservationCreationControl_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_explicitReservationCreationControl_ArgumentType: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of explicitReservationCreationControl_ArgumentType
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_explicitReservationCreationControl_ArgumentType: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_explicitReservationCreationControl_ArgumentType: $.ASN1Decoder<explicitReservationCreationControl_ArgumentType> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) explicitReservationCreationControl_ArgumentType
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_explicitReservationCreationControl_ArgumentType (el: _Element): explicitReservationCreationControl_ArgumentType {
    if (!_cached_decoder_for_explicitReservationCreationControl_ArgumentType) { _cached_decoder_for_explicitReservationCreationControl_ArgumentType = function (el: _Element): explicitReservationCreationControl_ArgumentType {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("explicitReservationCreationControl-ArgumentType contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "controlOption";
    let controlOption!: explicitReservationCreationControl_ArgumentType_controlOption;
    controlOption = _decode_explicitReservationCreationControl_ArgumentType_controlOption(sequence[0]);
    return new explicitReservationCreationControl_ArgumentType(
        controlOption,

    );
}; }
    return _cached_decoder_for_explicitReservationCreationControl_ArgumentType(el);
}

let _cached_encoder_for_explicitReservationCreationControl_ArgumentType: $.ASN1Encoder<explicitReservationCreationControl_ArgumentType> | null = null;

/**
 * @summary Encodes a(n) explicitReservationCreationControl_ArgumentType into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The explicitReservationCreationControl_ArgumentType, encoded as an ASN.1 Element.
 */
export
function _encode_explicitReservationCreationControl_ArgumentType (value: explicitReservationCreationControl_ArgumentType, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_explicitReservationCreationControl_ArgumentType) { _cached_encoder_for_explicitReservationCreationControl_ArgumentType = function (value: explicitReservationCreationControl_ArgumentType, elGetter: $.ASN1Encoder<explicitReservationCreationControl_ArgumentType>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_explicitReservationCreationControl_ArgumentType_controlOption(value.controlOption, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_explicitReservationCreationControl_ArgumentType(value, elGetter);
}


/* eslint-enable */
