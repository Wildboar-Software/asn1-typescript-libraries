/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import {
    PublicTypeOfNumber,
    _decode_PublicTypeOfNumber,
    _encode_PublicTypeOfNumber,
    _enum_for_PublicTypeOfNumber
} from "../Addressing-Data-Elements/PublicTypeOfNumber.ta.mjs";
import {
    NumberDigits,
    _decode_NumberDigits,
    _encode_NumberDigits
} from "../Addressing-Data-Elements/NumberDigits.ta.mjs";

/**
 * @summary PublicPartyNumber
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PublicPartyNumber ::= SEQUENCE {
 *   publicTypeOfNumber  PublicTypeOfNumber,
 *   publicNumberDigits  NumberDigits
 * }
 * ```
 * 
 * @class
 */
export
class PublicPartyNumber {
    /**
     * @summary `publicTypeOfNumber`.
     * @public
     * @readonly
     */
    readonly publicTypeOfNumber: PublicTypeOfNumber;
    /**
     * @summary `publicNumberDigits`.
     * @public
     * @readonly
     */
    readonly publicNumberDigits: NumberDigits;

    constructor (
        publicTypeOfNumber: PublicTypeOfNumber,
        publicNumberDigits: NumberDigits
    ) {
        this.publicTypeOfNumber = publicTypeOfNumber;
        this.publicNumberDigits = publicNumberDigits;
    }

    /**
     * @summary Restructures an object into a PublicPartyNumber
     * @description
     * 
     * This takes an `object` and converts it to a `PublicPartyNumber`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PublicPartyNumber`.
     * @returns {PublicPartyNumber}
     */
    public static _from_object (_o: { [_K in keyof (PublicPartyNumber)]: (PublicPartyNumber)[_K] }): PublicPartyNumber {
        return new PublicPartyNumber(_o.publicTypeOfNumber, _o.publicNumberDigits);
    }

        /**
         * @summary The enum used as the type of the component `publicTypeOfNumber`
         * @public
         * @static
         */

    public static _enum_for_publicTypeOfNumber = _enum_for_PublicTypeOfNumber;
}

/**
 * @summary The Leading Root Component Types of PublicPartyNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PublicPartyNumber: $.ComponentSpec[] = [
    new $.ComponentSpec("publicTypeOfNumber", false, $.hasTag(_TagClass.universal, 10)),
    new $.ComponentSpec("publicNumberDigits", false, $.hasTag(_TagClass.universal, 18))
];

/**
 * @summary The Trailing Root Component Types of PublicPartyNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PublicPartyNumber: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PublicPartyNumber
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PublicPartyNumber: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PublicPartyNumber: $.ASN1Decoder<PublicPartyNumber> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PublicPartyNumber
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PublicPartyNumber (el: _Element): PublicPartyNumber {
    if (!_cached_decoder_for_PublicPartyNumber) { _cached_decoder_for_PublicPartyNumber = function (el: _Element): PublicPartyNumber {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("PublicPartyNumber contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "publicTypeOfNumber";
    sequence[1].name = "publicNumberDigits";
    const publicTypeOfNumber: PublicTypeOfNumber = _decode_PublicTypeOfNumber(sequence[0]);
    const publicNumberDigits: NumberDigits = _decode_NumberDigits(sequence[1]);
    return new PublicPartyNumber(
        publicTypeOfNumber,
        publicNumberDigits,

    );
}; }
    return _cached_decoder_for_PublicPartyNumber(el);
}

let _cached_encoder_for_PublicPartyNumber: $.ASN1Encoder<PublicPartyNumber> | null = null;

/**
 * @summary Encodes a(n) PublicPartyNumber into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PublicPartyNumber, encoded as an ASN.1 Element.
 */
export
function _encode_PublicPartyNumber (value: PublicPartyNumber, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PublicPartyNumber) { _cached_encoder_for_PublicPartyNumber = function (value: PublicPartyNumber): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_PublicTypeOfNumber(value.publicTypeOfNumber, $.BER),
        /* REQUIRED   */ _encode_NumberDigits(value.publicNumberDigits, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_PublicPartyNumber(value, elGetter);
}

/* eslint-enable */
