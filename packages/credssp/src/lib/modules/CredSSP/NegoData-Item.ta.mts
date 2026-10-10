/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OCTET_STRING
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NegoData_Item
 * @description
 *
 * One element of {@link NegoData}. The specification writes this
 * inner sequence inline and does not name it.
 *
 * [MS-CSSP, section 2.2.1.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/9664994d-0784-4659-b85b-83b8d54c2336).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NegoData-Item ::= SEQUENCE {
 *     negoToken    [0] OCTET STRING
 * }
 * ```
 * 
 * @class
 */
export
class NegoData_Item {
    constructor (
        /**
         * One SPNEGO token
         * ([MS-SPNG](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-spng/a2b0e591-fb91-4b9d-a8d5-af82af7e5398)
         * section 2), or a Kerberos
         * ([MS-KILE](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-kile/dcd5eecb-e85b-4f62-887f-2999fed3b1ad)
         * section 2) or NTLM
         * ([MS-NLMP](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-nlmp/b1242a27-d60e-4c5c-94b6-8626a7a2910f)
         * section 2) message that SPNEGO selected. The token is
         * opaque to CredSSP. Windows CredSSP clients do not send
         * raw Kerberos messages.
         *
         * [MS-CSSP, section 2.2.1.1](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-cssp/9664994d-0784-4659-b85b-83b8d54c2336).
         * @public
         * @readonly
         */
        readonly negoToken: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a NegoData_Item
     * @description
     * 
     * This takes an `object` and converts it to a `NegoData_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NegoData_Item`.
     * @returns {NegoData_Item}
     */
    public static _from_object (_o: { [_K in keyof (NegoData_Item)]: (NegoData_Item)[_K] }): NegoData_Item {
        return new NegoData_Item(_o.negoToken);
    }


}

/**
 * @summary The Leading Root Component Types of NegoData_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NegoData_Item: $.ComponentSpec[] = [
    new $.ComponentSpec("negoToken", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of NegoData_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NegoData_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NegoData_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NegoData_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NegoData_Item: $.ASN1Decoder<NegoData_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NegoData_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NegoData_Item (el: _Element): NegoData_Item {
    if (!_cached_decoder_for_NegoData_Item) { _cached_decoder_for_NegoData_Item = function (el: _Element): NegoData_Item {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("NegoData-Item contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "negoToken";
    const negoToken: OCTET_STRING = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    return new NegoData_Item(
        negoToken,

    );
}; }
    return _cached_decoder_for_NegoData_Item(el);
}

let _cached_encoder_for_NegoData_Item: $.ASN1Encoder<NegoData_Item> | null = null;

/**
 * @summary Encodes a(n) NegoData_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NegoData_Item, encoded as an ASN.1 Element.
 */
export
function _encode_NegoData_Item (value: NegoData_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NegoData_Item) { _cached_encoder_for_NegoData_Item = function (value: NegoData_Item): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.negoToken, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NegoData_Item(value, elGetter);
}


/* eslint-enable */
