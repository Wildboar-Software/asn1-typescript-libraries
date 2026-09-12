/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";
// export { Address, _decode_Address, _encode_Address } from "../MMS-Object-Module-1/Address.ta.mjs";


/**
 * @summary MaybeAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MaybeAddress ::= SEQUENCE {
 *     address Address OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class MaybeAddress {
    constructor (
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: OPTIONAL<Address>
    ) {}

    /**
     * @summary Restructures an object into a MaybeAddress
     * @description
     * 
     * This takes an `object` and converts it to a `MaybeAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MaybeAddress`.
     * @returns {MaybeAddress}
     */
    public static _from_object (_o: { [_K in keyof (MaybeAddress)]: (MaybeAddress)[_K] }): MaybeAddress {
        return new MaybeAddress(_o.address);
    }


}

/**
 * @summary The Leading Root Component Types of MaybeAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MaybeAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("address", true, $.or($.hasTag(_TagClass.context, 0), $.hasTag(_TagClass.context, 1), $.hasTag(_TagClass.context, 2)))
];

/**
 * @summary The Trailing Root Component Types of MaybeAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MaybeAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MaybeAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MaybeAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MaybeAddress: $.ASN1Decoder<MaybeAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MaybeAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MaybeAddress (el: _Element): MaybeAddress {
    if (!_cached_decoder_for_MaybeAddress) { _cached_decoder_for_MaybeAddress = function (el: _Element): MaybeAddress {
    let address: OPTIONAL<Address>;
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = _decode_Address(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MaybeAddress,
        _extension_additions_list_spec_for_MaybeAddress,
        _root_component_type_list_2_spec_for_MaybeAddress,
        undefined,
    );
    return new MaybeAddress(
        address
    );
}; }
    return _cached_decoder_for_MaybeAddress(el);
}

let _cached_encoder_for_MaybeAddress: $.ASN1Encoder<MaybeAddress> | null = null;

/**
 * @summary Encodes a(n) MaybeAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MaybeAddress, encoded as an ASN.1 Element.
 */
export
function _encode_MaybeAddress (value: MaybeAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MaybeAddress) { _cached_encoder_for_MaybeAddress = function (value: MaybeAddress): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.address === undefined) ? undefined : _encode_Address(value.address, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_MaybeAddress(value, elGetter);
}


/* eslint-enable */
