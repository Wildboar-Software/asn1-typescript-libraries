/* eslint-disable */
import {
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
// export { FQDN, _decode_FQDN, _encode_FQDN } from "../TS33128Payloads/FQDN.ta.mjs";
import { IPv4Addresses, _decode_IPv4Addresses, _encode_IPv4Addresses } from "../TS33128Payloads/IPv4Addresses.ta.mjs";
// export { IPv4Addresses, _decode_IPv4Addresses, _encode_IPv4Addresses } from "../TS33128Payloads/IPv4Addresses.ta.mjs";
import { IPv6Addresses, _decode_IPv6Addresses, _encode_IPv6Addresses } from "../TS33128Payloads/IPv6Addresses.ta.mjs";
// export { IPv6Addresses, _decode_IPv6Addresses, _encode_IPv6Addresses } from "../TS33128Payloads/IPv6Addresses.ta.mjs";


/**
 * @summary EESEndpoint
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EESEndpoint ::= SEQUENCE
 * {
 *     fQDN             [1] FQDN OPTIONAL,
 *     iPv4Addresses    [2] IPv4Addresses OPTIONAL,
 *     iPv6Addresses    [3] IPv6Addresses OPTIONAL,
 *     uRI              [4] UTF8String OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class EESEndpoint {
    constructor (
        /**
         * @summary `fQDN`.
         * @public
         * @readonly
         */
        readonly fQDN: OPTIONAL<FQDN>,
        /**
         * @summary `iPv4Addresses`.
         * @public
         * @readonly
         */
        readonly iPv4Addresses: OPTIONAL<IPv4Addresses>,
        /**
         * @summary `iPv6Addresses`.
         * @public
         * @readonly
         */
        readonly iPv6Addresses: OPTIONAL<IPv6Addresses>,
        /**
         * @summary `uRI`.
         * @public
         * @readonly
         */
        readonly uRI: OPTIONAL<UTF8String>
    ) {}

    /**
     * @summary Restructures an object into a EESEndpoint
     * @description
     * 
     * This takes an `object` and converts it to a `EESEndpoint`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EESEndpoint`.
     * @returns {EESEndpoint}
     */
    public static _from_object (_o: { [_K in keyof (EESEndpoint)]: (EESEndpoint)[_K] }): EESEndpoint {
        return new EESEndpoint(_o.fQDN, _o.iPv4Addresses, _o.iPv6Addresses, _o.uRI);
    }


}

/**
 * @summary The Leading Root Component Types of EESEndpoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EESEndpoint: $.ComponentSpec[] = [
    new $.ComponentSpec("fQDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPv4Addresses", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPv6Addresses", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uRI", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EESEndpoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EESEndpoint: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EESEndpoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EESEndpoint: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EESEndpoint: $.ASN1Decoder<EESEndpoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EESEndpoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EESEndpoint (el: _Element): EESEndpoint {
    if (!_cached_decoder_for_EESEndpoint) { _cached_decoder_for_EESEndpoint = function (el: _Element): EESEndpoint {
    let fQDN: OPTIONAL<FQDN>;
    let iPv4Addresses: OPTIONAL<IPv4Addresses>;
    let iPv6Addresses: OPTIONAL<IPv6Addresses>;
    let uRI: OPTIONAL<UTF8String>;
    const callbacks: $.DecodingMap = {
        "fQDN": (_el: _Element): void => { fQDN = $._decode_implicit<FQDN>(() => _decode_FQDN)(_el); },
        "iPv4Addresses": (_el: _Element): void => { iPv4Addresses = $._decode_implicit<IPv4Addresses>(() => _decode_IPv4Addresses)(_el); },
        "iPv6Addresses": (_el: _Element): void => { iPv6Addresses = $._decode_implicit<IPv6Addresses>(() => _decode_IPv6Addresses)(_el); },
        "uRI": (_el: _Element): void => { uRI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EESEndpoint,
        _extension_additions_list_spec_for_EESEndpoint,
        _root_component_type_list_2_spec_for_EESEndpoint,
        undefined,
    );
    return new EESEndpoint(
        fQDN,
        iPv4Addresses,
        iPv6Addresses,
        uRI
    );
}; }
    return _cached_decoder_for_EESEndpoint(el);
}

let _cached_encoder_for_EESEndpoint: $.ASN1Encoder<EESEndpoint> | null = null;

/**
 * @summary Encodes a(n) EESEndpoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EESEndpoint, encoded as an ASN.1 Element.
 */
export
function _encode_EESEndpoint (value: EESEndpoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EESEndpoint) { _cached_encoder_for_EESEndpoint = function (value: EESEndpoint, elGetter: $.ASN1Encoder<EESEndpoint>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.fQDN === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_FQDN, $.BER)(value.fQDN, $.BER)),
            /* IF_ABSENT  */ ((value.iPv4Addresses === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IPv4Addresses, $.BER)(value.iPv4Addresses, $.BER)),
            /* IF_ABSENT  */ ((value.iPv6Addresses === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_IPv6Addresses, $.BER)(value.iPv6Addresses, $.BER)),
            /* IF_ABSENT  */ ((value.uRI === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.uRI, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EESEndpoint(value, elGetter);
}


/* eslint-enable */
