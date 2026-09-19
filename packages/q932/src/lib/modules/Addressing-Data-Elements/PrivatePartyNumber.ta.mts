/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PrivateTypeOfNumber, _decode_PrivateTypeOfNumber, _encode_PrivateTypeOfNumber, _enum_for_PrivateTypeOfNumber } from "../Addressing-Data-Elements/PrivateTypeOfNumber.ta.mjs";
// export { PrivateTypeOfNumber, _enum_for_PrivateTypeOfNumber, PrivateTypeOfNumber_unknown /* IMPORTED_LONG_ENUMERATION_ITEM */, unknown /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivateTypeOfNumber_level2RegionalNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, level2RegionalNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivateTypeOfNumber_level1RegionalNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, level1RegionalNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivateTypeOfNumber_pTNSpecificNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, pTNSpecificNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivateTypeOfNumber_localNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, localNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, PrivateTypeOfNumber_abbreviatedNumber /* IMPORTED_LONG_ENUMERATION_ITEM */, abbreviatedNumber /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_PrivateTypeOfNumber, _encode_PrivateTypeOfNumber } from "../Addressing-Data-Elements/PrivateTypeOfNumber.ta.mjs";
import { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../Addressing-Data-Elements/NumberDigits.ta.mjs";
// export { NumberDigits, _decode_NumberDigits, _encode_NumberDigits } from "../Addressing-Data-Elements/NumberDigits.ta.mjs";


/**
 * @summary PrivatePartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PrivatePartyNumber ::= SEQUENCE {
 *   privateTypeOfNumber  PrivateTypeOfNumber,
 *   privateNumberDigits  NumberDigits
 * }
 * ```
 * 
 * @class
 */
export
class PrivatePartyNumber {
    constructor (
        /**
         * @summary `privateTypeOfNumber`.
         * @public
         * @readonly
         */
        readonly privateTypeOfNumber: PrivateTypeOfNumber,
        /**
         * @summary `privateNumberDigits`.
         * @public
         * @readonly
         */
        readonly privateNumberDigits: NumberDigits
    ) {}

    /**
     * @summary Restructures an object into a PrivatePartyNumber
     * @description
     * 
     * This takes an `object` and converts it to a `PrivatePartyNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PrivatePartyNumber`.
     * @returns {PrivatePartyNumber}
     */
    public static _from_object (_o: { [_K in keyof (PrivatePartyNumber)]: (PrivatePartyNumber)[_K] }): PrivatePartyNumber {
        return new PrivatePartyNumber(_o.privateTypeOfNumber, _o.privateNumberDigits);
    }

        /**
         * @summary The enum used as the type of the component `privateTypeOfNumber`
         * @public
         * @static
         */

    public static _enum_for_privateTypeOfNumber = _enum_for_PrivateTypeOfNumber;
}

/**
 * @summary The Leading Root Component Types of PrivatePartyNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PrivatePartyNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("privateTypeOfNumber", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("privateNumberDigits", false, $.hasTag(_TagClass.universal, 18))
];

/**
 * @summary The Trailing Root Component Types of PrivatePartyNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PrivatePartyNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PrivatePartyNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PrivatePartyNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PrivatePartyNumber: $.ASN1Decoder<PrivatePartyNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PrivatePartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PrivatePartyNumber (el: _Element): PrivatePartyNumber {
    if (!_cached_decoder_for_PrivatePartyNumber) { _cached_decoder_for_PrivatePartyNumber = function (el: _Element): PrivatePartyNumber {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PrivatePartyNumber contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "privateTypeOfNumber";
    sequence[1].name = "privateNumberDigits";
    let privateTypeOfNumber!: PrivateTypeOfNumber;
    let privateNumberDigits!: NumberDigits;
    privateTypeOfNumber = _decode_PrivateTypeOfNumber(sequence[0]);
    privateNumberDigits = _decode_NumberDigits(sequence[1]);
    return new PrivatePartyNumber(
        privateTypeOfNumber,
        privateNumberDigits,

    );
}; }
    return _cached_decoder_for_PrivatePartyNumber(el);
}

let _cached_encoder_for_PrivatePartyNumber: $.ASN1Encoder<PrivatePartyNumber> | null = null;

/**
 * @summary Encodes a(n) PrivatePartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PrivatePartyNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PrivatePartyNumber (value: PrivatePartyNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PrivatePartyNumber) { _cached_encoder_for_PrivatePartyNumber = function (value: PrivatePartyNumber, elGetter: $.ASN1Encoder<PrivatePartyNumber>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PrivateTypeOfNumber(value.privateTypeOfNumber, $.BER),
            /* REQUIRED   */ _encode_NumberDigits(value.privateNumberDigits, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_PrivatePartyNumber(value, elGetter);
}


/* eslint-enable */
