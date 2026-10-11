/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { InternationalString, _decode_InternationalString, _encode_InternationalString } from "../Z39-50-APDU-2001/InternationalString.ta.mjs";


/**
 * @summary CreditCardInfo
 * @description
 * 
 * Credit-card information the client may supply with the payment method.
 * The standard does not define the format of these three values beyond the
 * names name on card, expiration date, and card number.
 * 
 * ANSI/NISO Z39.50-2003 EXT.1.4.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CreditCardInfo ::= SEQUENCE {
 *     nameOnCard      [1] IMPLICIT InternationalString,
 *     expirationDate  [2] IMPLICIT InternationalString,
 *     cardNumber      [3] IMPLICIT InternationalString
 * }
 * ```
 * 
 * @class
 */
export
class CreditCardInfo {
    /**
     * @summary `nameOnCard`.
     * @description
     * 
     * Name on the card. The standard does not define the format.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly nameOnCard: InternationalString;
    /**
     * @summary `expirationDate`.
     * @description
     * 
     * Expiration date of the card. The standard does not define the format.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly expirationDate: InternationalString;
    /**
     * @summary `cardNumber`.
     * @description
     * 
     * Card number. The standard does not define the format.
     * 
     * ANSI/NISO Z39.50-2003 EXT.1.4.
     * 
     * @public
     * @readonly
     */
    readonly cardNumber: InternationalString;

    constructor (
        nameOnCard: InternationalString,
        expirationDate: InternationalString,
        cardNumber: InternationalString
    ) {
        this.nameOnCard = nameOnCard;
        this.expirationDate = expirationDate;
        this.cardNumber = cardNumber;
    }

    /**
     * @summary Restructures an object into a CreditCardInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CreditCardInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CreditCardInfo`.
     * @returns {CreditCardInfo}
     */
    public static _from_object (_o: { [_K in keyof (CreditCardInfo)]: (CreditCardInfo)[_K] }): CreditCardInfo {
        return new CreditCardInfo(_o.nameOnCard, _o.expirationDate, _o.cardNumber);
    }


}

/**
 * @summary The Leading Root Component Types of CreditCardInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CreditCardInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("nameOnCard", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("expirationDate", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("cardNumber", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of CreditCardInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CreditCardInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CreditCardInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CreditCardInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CreditCardInfo: $.ASN1Decoder<CreditCardInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CreditCardInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CreditCardInfo (el: _Element): CreditCardInfo {
    if (!_cached_decoder_for_CreditCardInfo) { _cached_decoder_for_CreditCardInfo = function (el: _Element): CreditCardInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("CreditCardInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "nameOnCard";
    sequence[1].name = "expirationDate";
    sequence[2].name = "cardNumber";
    const nameOnCard: InternationalString = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[0]);
    const expirationDate: InternationalString = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[1]);
    const cardNumber: InternationalString = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[2]);
    return new CreditCardInfo(
        nameOnCard,
        expirationDate,
        cardNumber,

    );
}; }
    return _cached_decoder_for_CreditCardInfo(el);
}

let _cached_encoder_for_CreditCardInfo: $.ASN1Encoder<CreditCardInfo> | null = null;

/**
 * @summary Encodes a(n) CreditCardInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CreditCardInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CreditCardInfo (value: CreditCardInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CreditCardInfo) { _cached_encoder_for_CreditCardInfo = function (value: CreditCardInfo, elGetter: $.ASN1Encoder<CreditCardInfo>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.nameOnCard, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.expirationDate, $.BER),
        /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => _encode_InternationalString, $.BER)(value.cardNumber, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_CreditCardInfo(value, elGetter);
}


/* eslint-enable */
