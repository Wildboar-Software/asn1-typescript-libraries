/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
    INTEGER,
    OCTET_STRING,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress_iP_type, _decode_IPAddress_iP_type, _encode_IPAddress_iP_type, _enum_for_IPAddress_iP_type } from "../IPAccessPDU/IPAddress-iP-type.ta.mjs";
import { IP_value, _decode_IP_value, _encode_IP_value } from "../IPAccessPDU/IP-value.ta.mjs";
import { IPAddress_iP_assignment, _decode_IPAddress_iP_assignment, _encode_IPAddress_iP_assignment, _enum_for_IPAddress_iP_assignment } from "../IPAccessPDU/IPAddress-iP-assignment.ta.mjs";


/**
 * @summary IPAddress
 * @description
 *
 * `IPAddress` from ETSI TS 102 232-1 `LI-PS-PDU` (IMPLICIT TAGS). The
 * `IPAccessPDU` module comments out the IMPORT of this type and still uses it.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddress ::= SEQUENCE
 * {
 *     iP-type [1] ENUMERATED {
 *         iPV4(0),
 *         iPV6(1),
 *         ...
 *     },
 *     iP-value [2] IP-value,
 *     iP-assignment [3] ENUMERATED {
 *         static(1),
 *         dynamic(2),
 *         notKnown(3),
 *         ...
 *     } OPTIONAL,
 *     ...,
 *     iPv6PrefixLength [4] INTEGER (1..128) OPTIONAL,
 *         -- Indicates the length of the prefix delegated by the CSP to the subscriber
 *     iPv4SubnetMask [5] OCTET STRING (SIZE(4)) OPTIONAL
 *         -- For IPv4 addresses, this indicates the subnet mask to be applied to the iP-value field.
 * }
 * ```
 * 
 * @class
 */
export
class IPAddress {
    constructor (
        /**
         * @summary `iP_type`.
         * @public
         * @readonly
         */
        readonly iP_type: IPAddress_iP_type,
        /**
         * @summary `iP_value`.
         * @public
         * @readonly
         */
        readonly iP_value: IP_value,
        /**
         * @summary `iP_assignment`.
         * @public
         * @readonly
         */
        readonly iP_assignment: OPTIONAL<IPAddress_iP_assignment>,
        /**
         * @summary `iPv6PrefixLength`.
         * @public
         * @readonly
         */
        readonly iPv6PrefixLength: OPTIONAL<INTEGER>,
        /**
         * @summary `iPv4SubnetMask`.
         * @public
         * @readonly
         */
        readonly iPv4SubnetMask: OPTIONAL<OCTET_STRING>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IPAddress
     * @description
     * 
     * This takes an `object` and converts it to a `IPAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPAddress`.
     * @returns {IPAddress}
     */
    public static _from_object (_o: { [_K in keyof (IPAddress)]: (IPAddress)[_K] }): IPAddress {
        return new IPAddress(_o.iP_type, _o.iP_value, _o.iP_assignment, _o.iPv6PrefixLength, _o.iPv4SubnetMask, _o._unrecognizedExtensionsList);
    }

    /**
     * @summary The enum used as the type of the component `iP_type`
     * @public
     * @static
     */
    public static _enum_for_iP_type = _enum_for_IPAddress_iP_type;

    /**
     * @summary The enum used as the type of the component `iP_assignment`
     * @public
     * @static
     */
    public static _enum_for_iP_assignment = _enum_for_IPAddress_iP_assignment;
}

/**
 * @summary The Leading Root Component Types of IPAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("iP_type", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iP_value", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iP_assignment", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of IPAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("iPv6PrefixLength", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("iPv4SubnetMask", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_IPAddress: $.ASN1Decoder<IPAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddress (el: _Element): IPAddress {
    if (!_cached_decoder_for_IPAddress) { _cached_decoder_for_IPAddress = function (el: _Element): IPAddress {
    let iP_type!: IPAddress_iP_type;
    let iP_value!: IP_value;
    let iP_assignment: OPTIONAL<IPAddress_iP_assignment>;
    let iPv6PrefixLength: OPTIONAL<INTEGER>;
    let iPv4SubnetMask: OPTIONAL<OCTET_STRING>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iP_type": (_el: _Element): void => { iP_type = $._decode_implicit<IPAddress_iP_type>(() => _decode_IPAddress_iP_type)(_el); },
        "iP_value": (_el: _Element): void => { iP_value = $._decode_explicit<IP_value>(() => _decode_IP_value)(_el); },
        "iP_assignment": (_el: _Element): void => { iP_assignment = $._decode_implicit<IPAddress_iP_assignment>(() => _decode_IPAddress_iP_assignment)(_el); },
        "iPv6PrefixLength": (_el: _Element): void => { iPv6PrefixLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "iPv4SubnetMask": (_el: _Element): void => { iPv4SubnetMask = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPAddress,
        _extension_additions_list_spec_for_IPAddress,
        _root_component_type_list_2_spec_for_IPAddress,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPAddress(
        iP_type,
        iP_value,
        iP_assignment,
        iPv6PrefixLength,
        iPv4SubnetMask,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPAddress(el);
}

let _cached_encoder_for_IPAddress: $.ASN1Encoder<IPAddress> | null = null;

/**
 * @summary Encodes a(n) IPAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddress (value: IPAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddress) { _cached_encoder_for_IPAddress = function (value: IPAddress, elGetter: $.ASN1Encoder<IPAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPAddress_iP_type, $.BER)(value.iP_type, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 2, () => _encode_IP_value, $.BER)(value.iP_value, $.BER),
            /* IF_ABSENT  */ ((value.iP_assignment === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IPAddress_iP_assignment, $.BER)(value.iP_assignment, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.iPv6PrefixLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeInteger, $.BER)(value.iPv6PrefixLength, $.BER)),
            /* IF_ABSENT  */ ((value.iPv4SubnetMask === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeOctetString, $.BER)(value.iPv4SubnetMask, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPAddress(value, elGetter);
}


/* eslint-enable */
