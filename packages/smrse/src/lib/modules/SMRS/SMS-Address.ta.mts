/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_Address_address_type, _decode_SMS_Address_address_type, _encode_SMS_Address_address_type } from "../SMRS/SMS-Address-address-type.ta.mjs";
import { SMS_Address_numbering_plan, _decode_SMS_Address_numbering_plan, _encode_SMS_Address_numbering_plan } from "../SMRS/SMS-Address-numbering-plan.ta.mjs";
import { SMS_Address_address_value, _decode_SMS_Address_address_value, _encode_SMS_Address_address_value } from "../SMRS/SMS-Address-address-value.ta.mjs";


/**
 * @summary SMS_Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-Address ::= SEQUENCE {
 *     address-type INTEGER {
 *         unknown-type (0),
 *         internat-number (1),
 *         national-number (2),
 *         net-spec-number (3),
 *         short-number (4)
 *     },
 * 
 *     numbering-plan INTEGER {
 *         unknown-numbering (0),
 *         iSDN-numbering (1),
 *         data-network-numbering (3),
 *         telex-numbering (4),
 *         national-numbering (8),
 *         private-numbering (9)
 *     },
 * 
 *     address-value CHOICE {
 *         octet-format SemiOctetString
 *     }
 * }
 * ```
 *
 * Address of an SC, an MS, or (where the module adds it) a VMSC on the
 * SC–MSC relay.
 *
 * Clauses 2.2 and 3.2 tag the sequence `[APPLICATION 0]`. This module
 * does not. The only defined `address-value` alternative is
 * `octet-format`; other formats are for further study. Clause 2.2 also
 * names `alphanumeric-number` (5), `abbreviated-number` (6), and
 * `ERMES-numbering` (10), which are absent here.
 *
 * An alert MS address, and clause 2.2's optional `rp-msidsn` on
 * `RPError`, must be an international ISDN address. Use
 * `internat-number` with `iSDN-numbering` (E.164; clause 1.2
 * reference [5]). SMS-MAP accepts a service-centre address only in
 * international E.164, and an MS ISDN number in national or
 * international E.164 (clause 4.2.4).
 *
 * @class
 */
export
class SMS_Address {
    constructor (
        /**
         * @summary `address_type`.
         * @description
         *
         * Nature of the address. Named values are on
         * `SMS_Address_address_type`. Clause 3.2 spells value 1
         * `international-number` and value 3 `network-specific-number`;
         * this module shortens both.
         *
         * @public
         * @readonly
         */
        readonly address_type: SMS_Address_address_type,
        /**
         * @summary `numbering_plan`.
         * @description
         *
         * Numbering plan of `address_value`. Named values are on
         * `SMS_Address_numbering_plan`. `iSDN-numbering` is E.164.
         *
         * @public
         * @readonly
         */
        readonly numbering_plan: SMS_Address_numbering_plan,
        /**
         * @summary `address_value`.
         * @description
         *
         * The address digits. Only `octet-format` (`SemiOctetString`)
         * is defined; other formats are for further study
         * (clauses 2.2 and 3.2).
         *
         * @public
         * @readonly
         */
        readonly address_value: SMS_Address_address_value
    ) {}

    /**
     * @summary Restructures an object into a SMS_Address
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_Address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_Address`.
     * @returns {SMS_Address}
     */
    public static _from_object (_o: { [_K in keyof (SMS_Address)]: (SMS_Address)[_K] }): SMS_Address {
        return new SMS_Address(_o.address_type, _o.numbering_plan, _o.address_value);
    }


}

/**
 * @summary The Leading Root Component Types of SMS_Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_Address: $.ComponentSpec[] = [
    new $.ComponentSpec("address-type", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("numbering-plan", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("address-value", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of SMS_Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_Address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_Address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SMS_Address: $.ASN1Decoder<SMS_Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_Address (el: _Element): SMS_Address {
    if (!_cached_decoder_for_SMS_Address) { _cached_decoder_for_SMS_Address = function (el: _Element): SMS_Address {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("SMS-Address contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "address-type";
    sequence[1].name = "numbering-plan";
    sequence[2].name = "address-value";
    const address_type = _decode_SMS_Address_address_type(sequence[0]);
    const numbering_plan = _decode_SMS_Address_numbering_plan(sequence[1]);
    const address_value = _decode_SMS_Address_address_value(sequence[2]);
    return new SMS_Address(
        address_type,
        numbering_plan,
        address_value,

    );
}; }
    return _cached_decoder_for_SMS_Address(el);
}

let _cached_encoder_for_SMS_Address: $.ASN1Encoder<SMS_Address> | null = null;

/**
 * @summary Encodes a(n) SMS_Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_Address, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_Address (value: SMS_Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_Address) { _cached_encoder_for_SMS_Address = function (value: SMS_Address, elGetter: $.ASN1Encoder<SMS_Address>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_SMS_Address_address_type(value.address_type, $.BER),
            /* REQUIRED   */ _encode_SMS_Address_numbering_plan(value.numbering_plan, $.BER),
            /* REQUIRED   */ _encode_SMS_Address_address_value(value.address_value, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_Address(value, elGetter);
}


/* eslint-enable */
