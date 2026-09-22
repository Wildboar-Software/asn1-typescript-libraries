/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";
// export { PartyNumber, _decode_PartyNumber, _encode_PartyNumber } from "../Addressing-Data-Elements/PartyNumber.ta.mjs";
import { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements/PartySubaddress.ta.mjs";
// export { PartySubaddress, _decode_PartySubaddress, _encode_PartySubaddress } from "../Addressing-Data-Elements/PartySubaddress.ta.mjs";


/**
 * @summary Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Address ::= SEQUENCE {
 *   partyNumber      PartyNumber,
 *   partySubaddress  PartySubaddress OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class Address {
    constructor (
        /**
         * @summary `partyNumber`.
         * @public
         * @readonly
         */
        readonly partyNumber: PartyNumber,
        /**
         * @summary `partySubaddress`.
         * @public
         * @readonly
         */
        readonly partySubaddress: OPTIONAL<PartySubaddress>
    ) {}

    /**
     * @summary Restructures an object into a Address
     * @description
     * 
     * This takes an `object` and converts it to a `Address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Address`.
     * @returns {Address}
     */
    public static _from_object (_o: { [_K in keyof (Address)]: (Address)[_K] }): Address {
        return new Address(_o.partyNumber, _o.partySubaddress);
    }


}

/**
 * @summary The Leading Root Component Types of Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Address: $.ComponentSpec[] = [
    new $.ComponentSpec("partyNumber", false, $.hasAnyTag),
    new $.ComponentSpec("partySubaddress", true, $.or($.hasTag(_TagClass.universal, 16), $.hasTag(_TagClass.universal, 4)))
];

/**
 * @summary The Trailing Root Component Types of Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Address: $.ASN1Decoder<Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Address (el: _Element): Address {
    if (!_cached_decoder_for_Address) { _cached_decoder_for_Address = function (el: _Element): Address {
    let partyNumber!: PartyNumber;
    let partySubaddress: OPTIONAL<PartySubaddress>;
    const callbacks: $.DecodingMap = {
        "partyNumber": (_el: _Element): void => { partyNumber = _decode_PartyNumber(_el); },
        "partySubaddress": (_el: _Element): void => { partySubaddress = _decode_PartySubaddress(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Address,
        _extension_additions_list_spec_for_Address,
        _root_component_type_list_2_spec_for_Address,
        undefined,
    );
    return new Address(
        partyNumber,
        partySubaddress
    );
}; }
    return _cached_decoder_for_Address(el);
}

let _cached_encoder_for_Address: $.ASN1Encoder<Address> | null = null;

/**
 * @summary Encodes a(n) Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Address, encoded as an ASN.1 Element.
 */
export
function _encode_Address (value: Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Address) { _cached_encoder_for_Address = function (value: Address, elGetter: $.ASN1Encoder<Address>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_PartyNumber(value.partyNumber, $.BER),
            /* IF_ABSENT  */ ((value.partySubaddress === undefined) ? undefined : _encode_PartySubaddress(value.partySubaddress, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Address(value, elGetter);
}


/* eslint-enable */
