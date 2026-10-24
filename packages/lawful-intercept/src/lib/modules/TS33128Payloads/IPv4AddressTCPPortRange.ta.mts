/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { PortRange, _decode_PortRange, _encode_PortRange } from "../TS33128Payloads/PortRange.ta.mjs";
// export { PortRange, _decode_PortRange, _encode_PortRange } from "../TS33128Payloads/PortRange.ta.mjs";


/**
 * @summary IPv4AddressTCPPortRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4AddressTCPPortRange ::= SEQUENCE
 * {
 *     iPv4Address         [1] IPv4Address,
 *     tCPPortRange        [2] PortRange
 * }
 * ```
 * 
 * @class
 */
export
class IPv4AddressTCPPortRange {
    /**
     * @summary `iPv4Address`.
     * @public
     * @readonly
     */
    readonly iPv4Address: IPv4Address;
    /**
     * @summary `tCPPortRange`.
     * @public
     * @readonly
     */
    readonly tCPPortRange: PortRange;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        iPv4Address: IPv4Address,
        tCPPortRange: PortRange,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.iPv4Address = iPv4Address;
        this.tCPPortRange = tCPPortRange;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

    /**
     * @summary Restructures an object into a IPv4AddressTCPPortRange
     * @description
     * 
     * This takes an `object` and converts it to a `IPv4AddressTCPPortRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPv4AddressTCPPortRange`.
     * @returns {IPv4AddressTCPPortRange}
     */
    public static _from_object (_o: { [_K in keyof (IPv4AddressTCPPortRange)]: (IPv4AddressTCPPortRange)[_K] }): IPv4AddressTCPPortRange {
        return new IPv4AddressTCPPortRange(_o.iPv4Address, _o.tCPPortRange, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPv4AddressTCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPv4AddressTCPPortRange: $.ComponentSpec[] = [
    new $.ComponentSpec("iPv4Address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tCPPortRange", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IPv4AddressTCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPv4AddressTCPPortRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPv4AddressTCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPv4AddressTCPPortRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPv4AddressTCPPortRange: $.ASN1Decoder<IPv4AddressTCPPortRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv4AddressTCPPortRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv4AddressTCPPortRange (el: _Element): IPv4AddressTCPPortRange {
    if (!_cached_decoder_for_IPv4AddressTCPPortRange) { _cached_decoder_for_IPv4AddressTCPPortRange = function (el: _Element): IPv4AddressTCPPortRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IPv4AddressTCPPortRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPv4Address";
    sequence[1].name = "tCPPortRange";
    let iPv4Address!: IPv4Address;
    let tCPPortRange!: PortRange;
    iPv4Address = $._decode_implicit<IPv4Address>(() => _decode_IPv4Address)(sequence[0]);
    tCPPortRange = $._decode_implicit<PortRange>(() => _decode_PortRange)(sequence[1]);
    return new IPv4AddressTCPPortRange(
        iPv4Address,
        tCPPortRange,
        sequence.slice(2),
    );
}; }
    return _cached_decoder_for_IPv4AddressTCPPortRange(el);
}

let _cached_encoder_for_IPv4AddressTCPPortRange: $.ASN1Encoder<IPv4AddressTCPPortRange> | null = null;

/**
 * @summary Encodes a(n) IPv4AddressTCPPortRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv4AddressTCPPortRange, encoded as an ASN.1 Element.
 */
export
function _encode_IPv4AddressTCPPortRange (value: IPv4AddressTCPPortRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv4AddressTCPPortRange) { _cached_encoder_for_IPv4AddressTCPPortRange = function (value: IPv4AddressTCPPortRange, elGetter: $.ASN1Encoder<IPv4AddressTCPPortRange>): _Element {
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(2 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER)(value.iPv4Address, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortRange, $.BER)(value.tCPPortRange, $.BER);
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPv4AddressTCPPortRange(value, elGetter);
}


/* eslint-enable */
