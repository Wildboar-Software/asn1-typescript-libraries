/* eslint-disable */
import {
    ASN1SizeError,
    type UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { strmax } from "../PlatformCertificateProfileV2/strmax.va.mjs";
import { AddressType, _decode_AddressType, _encode_AddressType } from "../PlatformCertificateProfileV2/AddressType.ta.mjs";


/**
 * @summary ComponentAddress
 * @description
 *
 * One address of a component. Also the value of `networkMACTrait`.
 *
 * TCG Platform Certificate Profile, Version 2.1, §4.2.5 and §4.2.8.
 *
 * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentAddress ::= SEQUENCE {
 *     addressType         AddressType,
 *     addressValue        UTF8String (SIZE (1..strmax))
 * }
 * ```
 * 
 * @class
 */
export
class ComponentAddress {
    /**
     * @summary `addressType`.
     * @description
     *
     * Ethernet, WLAN, or Bluetooth MAC address.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly addressType: AddressType;
    /**
     * @summary `addressValue`.
     * @description
     *
     * Address text, length 1..`strmax`. A MAC address is the big-endian
     * hexadecimal text with no delimiter, using uppercase letters.
     *
     * TCG Platform Certificate Profile, Version 2.1, §4.2.5.
     *
     * @see https://trustedcomputinggroup.org/wp-content/uploads/TCG_Platform_Certificate_Profile_2.1_Pub_v2.pdf
     *
     * @public
     * @readonly
     */
    readonly addressValue: UTF8String;

    constructor (
        addressType: AddressType,
        addressValue: UTF8String
    ) {
        this.addressType = addressType;
        this.addressValue = addressValue;
        if (addressValue.length < 1 || addressValue.length > strmax) {
            throw new ASN1SizeError("ComponentAddress.addressValue violates SIZE (1..strmax)");
        }
    }

    /**
     * @summary Restructures an object into a ComponentAddress
     * @description
     * 
     * This takes an `object` and converts it to a `ComponentAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ComponentAddress`.
     * @returns {ComponentAddress}
     */
    public static _from_object (_o: { [_K in keyof (ComponentAddress)]: (ComponentAddress)[_K] }): ComponentAddress {
        return new ComponentAddress(_o.addressType, _o.addressValue);
    }


}

/**
 * @summary The Leading Root Component Types of ComponentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ComponentAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("addressType", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("addressValue", false, $.hasTag(_TagClass.universal, 12))
];

/**
 * @summary The Trailing Root Component Types of ComponentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ComponentAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ComponentAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ComponentAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ComponentAddress: $.ASN1Decoder<ComponentAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ComponentAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ComponentAddress (el: _Element): ComponentAddress {
    if (!_cached_decoder_for_ComponentAddress) { _cached_decoder_for_ComponentAddress = function (el: _Element): ComponentAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("ComponentAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "addressType";
    sequence[1].name = "addressValue";
    let addressType!: AddressType;
    let addressValue!: UTF8String;
    addressType = _decode_AddressType(sequence[0]);
    addressValue = $._decodeUTF8String(sequence[1]);
    return new ComponentAddress(
        addressType,
        addressValue,

    );
}; }
    return _cached_decoder_for_ComponentAddress(el);
}

let _cached_encoder_for_ComponentAddress: $.ASN1Encoder<ComponentAddress> | null = null;

/**
 * @summary Encodes a(n) ComponentAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ComponentAddress, encoded as an ASN.1 Element.
 */
export
function _encode_ComponentAddress (value: ComponentAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ComponentAddress) { _cached_encoder_for_ComponentAddress = function (value: ComponentAddress): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_AddressType(value.addressType, $.BER),
        /* REQUIRED   */ $._encodeUTF8String(value.addressValue, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_ComponentAddress(value, elGetter);
}


/* eslint-enable */
