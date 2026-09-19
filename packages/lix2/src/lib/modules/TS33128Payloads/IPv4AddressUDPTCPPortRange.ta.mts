/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { PortRange, _decode_PortRange, _encode_PortRange } from "../TS33128Payloads/PortRange.ta.mjs";
// export { PortRange, _decode_PortRange, _encode_PortRange } from "../TS33128Payloads/PortRange.ta.mjs";


/**
 * @summary IPv4AddressUDPTCPPortRange
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPv4AddressUDPTCPPortRange ::= SEQUENCE
 * {
 *     iPv4Address         [1] IPv4Address,
 *     uDPPortRange        [2] PortRange,
 *     tCPPortRange        [2] PortRange
 * }
 * ```
 * 
 * @class
 */
export
class IPv4AddressUDPTCPPortRange {
    constructor (
        /**
         * @summary `iPv4Address`.
         * @public
         * @readonly
         */
        readonly iPv4Address: IPv4Address,
        /**
         * @summary `uDPPortRange`.
         * @public
         * @readonly
         */
        readonly uDPPortRange: PortRange,
        /**
         * @summary `tCPPortRange`.
         * @public
         * @readonly
         */
        readonly tCPPortRange: PortRange
    ) {}

    /**
     * @summary Restructures an object into a IPv4AddressUDPTCPPortRange
     * @description
     * 
     * This takes an `object` and converts it to a `IPv4AddressUDPTCPPortRange`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPv4AddressUDPTCPPortRange`.
     * @returns {IPv4AddressUDPTCPPortRange}
     */
    public static _from_object (_o: { [_K in keyof (IPv4AddressUDPTCPPortRange)]: (IPv4AddressUDPTCPPortRange)[_K] }): IPv4AddressUDPTCPPortRange {
        return new IPv4AddressUDPTCPPortRange(_o.iPv4Address, _o.uDPPortRange, _o.tCPPortRange);
    }


}

/**
 * @summary The Leading Root Component Types of IPv4AddressUDPTCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPv4AddressUDPTCPPortRange: $.ComponentSpec[] = [
    new $.ComponentSpec("iPv4Address", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uDPPortRange", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("tCPPortRange", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IPv4AddressUDPTCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPv4AddressUDPTCPPortRange: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPv4AddressUDPTCPPortRange
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPv4AddressUDPTCPPortRange: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPv4AddressUDPTCPPortRange: $.ASN1Decoder<IPv4AddressUDPTCPPortRange> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPv4AddressUDPTCPPortRange
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPv4AddressUDPTCPPortRange (el: _Element): IPv4AddressUDPTCPPortRange {
    if (!_cached_decoder_for_IPv4AddressUDPTCPPortRange) { _cached_decoder_for_IPv4AddressUDPTCPPortRange = function (el: _Element): IPv4AddressUDPTCPPortRange {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 3) {
        throw new _ConstructionError("IPv4AddressUDPTCPPortRange contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPv4Address";
    sequence[1].name = "uDPPortRange";
    sequence[2].name = "tCPPortRange";
    let iPv4Address!: IPv4Address;
    let uDPPortRange!: PortRange;
    let tCPPortRange!: PortRange;
    iPv4Address = $._decode_implicit<IPv4Address>(() => _decode_IPv4Address)(sequence[0]);
    uDPPortRange = $._decode_implicit<PortRange>(() => _decode_PortRange)(sequence[1]);
    tCPPortRange = $._decode_implicit<PortRange>(() => _decode_PortRange)(sequence[2]);
    return new IPv4AddressUDPTCPPortRange(
        iPv4Address,
        uDPPortRange,
        tCPPortRange,

    );
}; }
    return _cached_decoder_for_IPv4AddressUDPTCPPortRange(el);
}

let _cached_encoder_for_IPv4AddressUDPTCPPortRange: $.ASN1Encoder<IPv4AddressUDPTCPPortRange> | null = null;

/**
 * @summary Encodes a(n) IPv4AddressUDPTCPPortRange into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPv4AddressUDPTCPPortRange, encoded as an ASN.1 Element.
 */
export
function _encode_IPv4AddressUDPTCPPortRange (value: IPv4AddressUDPTCPPortRange, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPv4AddressUDPTCPPortRange) { _cached_encoder_for_IPv4AddressUDPTCPPortRange = function (value: IPv4AddressUDPTCPPortRange, elGetter: $.ASN1Encoder<IPv4AddressUDPTCPPortRange>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER)(value.iPv4Address, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortRange, $.BER)(value.uDPPortRange, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortRange, $.BER)(value.tCPPortRange, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPv4AddressUDPTCPPortRange(value, elGetter);
}


/* eslint-enable */
