/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    INTEGER,
    OCTET_STRING,
    OPTIONAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IP6Address
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IP6Address ::= SEQUENCE
 *     {
 *         address            [0] OCTET STRING (SIZE(16)),
 *         portNumber        [1] INTEGER(0..65535) OPTIONAL
 *     }
 * ```
 * 
 * @class
 */
export
class IP6Address {
    constructor (
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: OCTET_STRING,
        /**
         * @summary `portNumber`.
         * @public
         * @readonly
         */
        readonly portNumber: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a IP6Address
     * @description
     * 
     * This takes an `object` and converts it to a `IP6Address`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IP6Address`.
     * @returns {IP6Address}
     */
    public static _from_object (_o: { [_K in keyof (IP6Address)]: (IP6Address)[_K] }): IP6Address {
        return new IP6Address(_o.address, _o.portNumber);
    }


}

/**
 * @summary The Leading Root Component Types of IP6Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IP6Address: $.ComponentSpec[] = [
    new $.ComponentSpec("address", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("portNumber", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IP6Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IP6Address: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IP6Address
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IP6Address: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IP6Address: $.ASN1Decoder<IP6Address> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IP6Address
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IP6Address (el: _Element): IP6Address {
    if (!_cached_decoder_for_IP6Address) { _cached_decoder_for_IP6Address = function (el: _Element): IP6Address {
    let address!: OCTET_STRING;
    let portNumber: OPTIONAL<INTEGER>;
    const callbacks: $.DecodingMap = {
        "address": (_el: _Element): void => { address = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "portNumber": (_el: _Element): void => { portNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IP6Address,
        _extension_additions_list_spec_for_IP6Address,
        _root_component_type_list_2_spec_for_IP6Address,
        undefined,
    );
    return new IP6Address(
        address,
        portNumber
    );
}; }
    return _cached_decoder_for_IP6Address(el);
}

let _cached_encoder_for_IP6Address: $.ASN1Encoder<IP6Address> | null = null;

/**
 * @summary Encodes a(n) IP6Address into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IP6Address, encoded as an ASN.1 Element.
 */
export
function _encode_IP6Address (value: IP6Address, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IP6Address) { _cached_encoder_for_IP6Address = function (value: IP6Address, elGetter: $.ASN1Encoder<IP6Address>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.address, $.BER),
            /* IF_ABSENT  */ ((value.portNumber === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.portNumber, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IP6Address(value, elGetter);
}


/* eslint-enable */
