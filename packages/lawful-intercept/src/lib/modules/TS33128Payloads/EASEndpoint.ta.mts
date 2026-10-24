/* eslint-disable */
import {
    type OPTIONAL,
    type UTF8String,
    type ASN1Element as _Element,
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
 * @summary EASEndpoint
 * @description
 * 
 * Endpoint information (e.g. URI, FQDN, IP address) used to communicate with
 * the EAS.
 *
 * 3GPP TS 33.128, clause 7.14.2.3.
 * https://www.3gpp.org/DynaReport/33128.htm
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASEndpoint ::= SEQUENCE
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
class EASEndpoint {
    /**
     * @summary `fQDN`.
     * @public
     * @readonly
     */
    readonly fQDN: OPTIONAL<FQDN>;
    /**
     * @summary `iPv4Addresses`.
     * @public
     * @readonly
     */
    readonly iPv4Addresses: OPTIONAL<IPv4Addresses>;
    /**
     * @summary `iPv6Addresses`.
     * @public
     * @readonly
     */
    readonly iPv6Addresses: OPTIONAL<IPv6Addresses>;
    /**
     * @summary `uRI`.
     * @public
     * @readonly
     */
    readonly uRI: OPTIONAL<UTF8String>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        fQDN?: OPTIONAL<FQDN>,
        iPv4Addresses?: OPTIONAL<IPv4Addresses>,
        iPv6Addresses?: OPTIONAL<IPv6Addresses>,
        uRI?: OPTIONAL<UTF8String>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.fQDN = fQDN;
        this.iPv4Addresses = iPv4Addresses;
        this.iPv6Addresses = iPv6Addresses;
        this.uRI = uRI;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a EASEndpoint
     * @description
     * 
     * This takes an `object` and converts it to a `EASEndpoint`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASEndpoint`.
     * @returns {EASEndpoint}
     */
    public static _from_object (_o: { [_K in keyof (EASEndpoint)]: (EASEndpoint)[_K] }): EASEndpoint {
        return new EASEndpoint(_o.fQDN, _o.iPv4Addresses, _o.iPv6Addresses, _o.uRI, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EASEndpoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASEndpoint: $.ComponentSpec[] = [
    new $.ComponentSpec("fQDN", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPv4Addresses", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPv6Addresses", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("uRI", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of EASEndpoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASEndpoint: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASEndpoint
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASEndpoint: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASEndpoint: $.ASN1Decoder<EASEndpoint> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASEndpoint
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASEndpoint (el: _Element): EASEndpoint {
    if (!_cached_decoder_for_EASEndpoint) { _cached_decoder_for_EASEndpoint = function (el: _Element): EASEndpoint {
    let fQDN: OPTIONAL<FQDN>;
    let iPv4Addresses: OPTIONAL<IPv4Addresses>;
    let iPv6Addresses: OPTIONAL<IPv6Addresses>;
    let uRI: OPTIONAL<UTF8String>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "fQDN": (_el: _Element): void => { fQDN = $._decode_implicit<FQDN>(() => _decode_FQDN)(_el); },
        "iPv4Addresses": (_el: _Element): void => { iPv4Addresses = $._decode_implicit<IPv4Addresses>(() => _decode_IPv4Addresses)(_el); },
        "iPv6Addresses": (_el: _Element): void => { iPv6Addresses = $._decode_implicit<IPv6Addresses>(() => _decode_IPv6Addresses)(_el); },
        "uRI": (_el: _Element): void => { uRI = $._decode_implicit<UTF8String>(() => $._decodeUTF8String)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EASEndpoint,
        _extension_additions_list_spec_for_EASEndpoint,
        _root_component_type_list_2_spec_for_EASEndpoint,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EASEndpoint(
        fQDN,
        iPv4Addresses,
        iPv6Addresses,
        uRI,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EASEndpoint(el);
}

let _cached_encoder_for_EASEndpoint: $.ASN1Encoder<EASEndpoint> | null = null;

/**
 * @summary Encodes a(n) EASEndpoint into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASEndpoint, encoded as an ASN.1 Element.
 */
export
function _encode_EASEndpoint (value: EASEndpoint, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASEndpoint) { _cached_encoder_for_EASEndpoint = function (value: EASEndpoint, elGetter: $.ASN1Encoder<EASEndpoint>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.fQDN !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_FQDN, $.BER)(value.fQDN, $.BER);
    }
    if (value.iPv4Addresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IPv4Addresses, $.BER)(value.iPv4Addresses, $.BER);
    }
    if (value.iPv6Addresses !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_IPv6Addresses, $.BER)(value.iPv6Addresses, $.BER);
    }
    if (value.uRI !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeUTF8String, $.BER)(value.uRI, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_EASEndpoint(value, elGetter);
}


/* eslint-enable */
