/* eslint-disable */
import {
    type INTEGER,
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { CurrencyID, _decode_CurrencyID, _encode_CurrencyID } from "../IN-CS2-datatypes/CurrencyID.ta.mjs";
// export { CurrencyID, _decode_CurrencyID, _encode_CurrencyID } from "../IN-CS2-datatypes/CurrencyID.ta.mjs";


/**
 * @summary CurrencyValue
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CurrencyValue ::= SEQUENCE {
 *   currency  CurrencyID,
 *   amount    INTEGER
 * }
 * ```
 * 
 * @class
 */
export
class CurrencyValue {
    /**
     * @summary `currency`.
     * @public
     * @readonly
     */
    readonly currency: CurrencyID;
    /**
     * @summary `amount`.
     * @public
     * @readonly
     */
    readonly amount: INTEGER;

    constructor (
        currency: CurrencyID,
        amount: INTEGER
    ) {
        this.currency = currency;
        this.amount = amount;
    }

    /**
     * @summary Restructures an object into a CurrencyValue
     * @description
     * 
     * This takes an `object` and converts it to a `CurrencyValue`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CurrencyValue`.
     * @returns {CurrencyValue}
     */
    public static _from_object (_o: { [_K in keyof (CurrencyValue)]: (CurrencyValue)[_K] }): CurrencyValue {
        return new CurrencyValue(_o.currency, _o.amount);
    }


}

/**
 * @summary The Leading Root Component Types of CurrencyValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CurrencyValue: $.ComponentSpec[] = [
    new $.ComponentSpec("currency", false, $.hasTag(_TagClass.universal, 19)),
    new $.ComponentSpec("amount", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CurrencyValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CurrencyValue: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CurrencyValue
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CurrencyValue: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CurrencyValue: $.ASN1Decoder<CurrencyValue> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CurrencyValue
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CurrencyValue (el: _Element): CurrencyValue {
    if (!_cached_decoder_for_CurrencyValue) { _cached_decoder_for_CurrencyValue = function (el: _Element): CurrencyValue {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CurrencyValue contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "currency";
    sequence[1].name = "amount";
    const currency: CurrencyID = _decode_CurrencyID(sequence[0]);
    const amount: INTEGER = $._decodeInteger(sequence[1]);
    return new CurrencyValue(
        currency,
        amount,

    );
}; }
    return _cached_decoder_for_CurrencyValue(el);
}

let _cached_encoder_for_CurrencyValue: $.ASN1Encoder<CurrencyValue> | null = null;

/**
 * @summary Encodes a(n) CurrencyValue into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CurrencyValue, encoded as an ASN.1 Element.
 */
export
function _encode_CurrencyValue (value: CurrencyValue, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CurrencyValue) { _cached_encoder_for_CurrencyValue = function (value: CurrencyValue, elGetter: $.ASN1Encoder<CurrencyValue>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_CurrencyID(value.currency, $.BER),
        /* REQUIRED   */ $._encodeInteger(value.amount, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CurrencyValue(value, elGetter);
}


/* eslint-enable */
