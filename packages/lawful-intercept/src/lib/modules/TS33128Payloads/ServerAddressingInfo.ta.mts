/* eslint-disable */
import {
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
import { FQDNList, _decode_FQDNList, _encode_FQDNList } from "../TS33128Payloads/FQDNList.ta.mjs";
// export { FQDNList, _decode_FQDNList, _encode_FQDNList } from "../TS33128Payloads/FQDNList.ta.mjs";


/**
 * @summary ServerAddressingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ServerAddressingInfo ::= SEQUENCE
 * {
 *     iPv4Address [1] IPv4Address OPTIONAL,
 *     iPv6Address [2] IPv6Address OPTIONAL,
 *     fQDNList    [3] FQDNList OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ServerAddressingInfo {
    /**
     * @summary `iPv4Address`.
     * @public
     * @readonly
     */
    readonly iPv4Address: OPTIONAL<IPv4Address>;
    /**
     * @summary `iPv6Address`.
     * @public
     * @readonly
     */
    readonly iPv6Address: OPTIONAL<IPv6Address>;
    /**
     * @summary `fQDNList`.
     * @public
     * @readonly
     */
    readonly fQDNList: OPTIONAL<FQDNList>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPv4Address?: OPTIONAL<IPv4Address>,
        iPv6Address?: OPTIONAL<IPv6Address>,
        fQDNList?: OPTIONAL<FQDNList>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPv4Address = iPv4Address;
        this.iPv6Address = iPv6Address;
        this.fQDNList = fQDNList;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a ServerAddressingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `ServerAddressingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ServerAddressingInfo`.
     * @returns {ServerAddressingInfo}
     */
    public static _from_object (_o: { [_K in keyof (ServerAddressingInfo)]: (ServerAddressingInfo)[_K] }): ServerAddressingInfo {
        return new ServerAddressingInfo(_o.iPv4Address, _o.iPv6Address, _o.fQDNList, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of ServerAddressingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ServerAddressingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iPv4Address", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPv6Address", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("fQDNList", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of ServerAddressingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ServerAddressingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ServerAddressingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ServerAddressingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ServerAddressingInfo: $.ASN1Decoder<ServerAddressingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ServerAddressingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ServerAddressingInfo (el: _Element): ServerAddressingInfo {
    if (!_cached_decoder_for_ServerAddressingInfo) { _cached_decoder_for_ServerAddressingInfo = function (el: _Element): ServerAddressingInfo {
    let iPv4Address: OPTIONAL<IPv4Address>;
    let iPv6Address: OPTIONAL<IPv6Address>;
    let fQDNList: OPTIONAL<FQDNList>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "iPv4Address": (_el: _Element): void => { iPv4Address = $._decode_implicit<IPv4Address>(() => _decode_IPv4Address)(_el); },
        "iPv6Address": (_el: _Element): void => { iPv6Address = $._decode_implicit<IPv6Address>(() => _decode_IPv6Address)(_el); },
        "fQDNList": (_el: _Element): void => { fQDNList = $._decode_implicit<FQDNList>(() => _decode_FQDNList)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ServerAddressingInfo,
        _extension_additions_list_spec_for_ServerAddressingInfo,
        _root_component_type_list_2_spec_for_ServerAddressingInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new ServerAddressingInfo(
        iPv4Address,
        iPv6Address,
        fQDNList,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_ServerAddressingInfo(el);
}

let _cached_encoder_for_ServerAddressingInfo: $.ASN1Encoder<ServerAddressingInfo> | null = null;

/**
 * @summary Encodes a(n) ServerAddressingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ServerAddressingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_ServerAddressingInfo (value: ServerAddressingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ServerAddressingInfo) { _cached_encoder_for_ServerAddressingInfo = function (value: ServerAddressingInfo, elGetter: $.ASN1Encoder<ServerAddressingInfo>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(3 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    if (value.iPv4Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER)(value.iPv4Address, $.BER);
    }
    if (value.iPv6Address !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_IPv6Address, $.BER)(value.iPv6Address, $.BER);
    }
    if (value.fQDNList !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_FQDNList, $.BER)(value.fQDNList, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_ServerAddressingInfo(value, elGetter);
}


/* eslint-enable */
