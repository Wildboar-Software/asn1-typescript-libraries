/* eslint-disable */
import {
    type BOOLEAN,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../CHFChargingDataTypes/IPAddress.ta.mjs";


/**
 * @summary PDUAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * PDUAddress ::= SEQUENCE {
 *    pDUIPv4Address             [0] IPAddress OPTIONAL,
 *    pDUIPv6AddresswithPrefix   [1] IPAddress OPTIONAL,
 *    iPV4dynamicAddressFlag     [2] IMPLICIT BOOLEAN OPTIONAL,
 *    iPV6dynamicPrefixFlag      [3] IMPLICIT BOOLEAN OPTIONAL}
 * ```
 * 
 * @class
 */
export
class PDUAddress {
    /**
     * @summary `pDUIPv4Address`.
     * @public
     * @readonly
     */
    readonly pDUIPv4Address: OPTIONAL<IPAddress>;
    /**
     * @summary `pDUIPv6AddresswithPrefix`.
     * @public
     * @readonly
     */
    readonly pDUIPv6AddresswithPrefix: OPTIONAL<IPAddress>;
    /**
     * @summary `iPV4dynamicAddressFlag`.
     * @public
     * @readonly
     */
    readonly iPV4dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    /**
     * @summary `iPV6dynamicPrefixFlag`.
     * @public
     * @readonly
     */
    readonly iPV6dynamicPrefixFlag: OPTIONAL<BOOLEAN>;

    constructor (
        pDUIPv4Address?: OPTIONAL<IPAddress>,
        pDUIPv6AddresswithPrefix?: OPTIONAL<IPAddress>,
        iPV4dynamicAddressFlag?: OPTIONAL<BOOLEAN>,
        iPV6dynamicPrefixFlag?: OPTIONAL<BOOLEAN>
    ) {
        this.pDUIPv4Address = pDUIPv4Address;
        this.pDUIPv6AddresswithPrefix = pDUIPv6AddresswithPrefix;
        this.iPV4dynamicAddressFlag = iPV4dynamicAddressFlag;
        this.iPV6dynamicPrefixFlag = iPV6dynamicPrefixFlag;
    }

    /**
     * @summary Restructures an object into a PDUAddress
     * @description
     * 
     * This takes an `object` and converts it to a `PDUAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PDUAddress`.
     * @returns {PDUAddress}
     */
    public static _from_object (_o: { [_K in keyof (PDUAddress)]: (PDUAddress)[_K] }): PDUAddress {
        return new PDUAddress(_o.pDUIPv4Address, _o.pDUIPv6AddresswithPrefix, _o.iPV4dynamicAddressFlag, _o.iPV6dynamicPrefixFlag);
    }


}

/**
 * @summary The Leading Root Component Types of PDUAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_PDUAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("pDUIPv4Address", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pDUIPv6AddresswithPrefix", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPV4dynamicAddressFlag", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("iPV6dynamicPrefixFlag", true, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of PDUAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_PDUAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of PDUAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_PDUAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_PDUAddress: $.ASN1Decoder<PDUAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) PDUAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_PDUAddress (el: _Element): PDUAddress {
    if (!_cached_decoder_for_PDUAddress) { _cached_decoder_for_PDUAddress = function (el: _Element): PDUAddress {
    let pDUIPv4Address: OPTIONAL<IPAddress>;
    let pDUIPv6AddresswithPrefix: OPTIONAL<IPAddress>;
    let iPV4dynamicAddressFlag: OPTIONAL<BOOLEAN>;
    let iPV6dynamicPrefixFlag: OPTIONAL<BOOLEAN>;
    const callbacks: $.DecodingMap = {
        "pDUIPv4Address": (_el: _Element): void => { pDUIPv4Address = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "pDUIPv6AddresswithPrefix": (_el: _Element): void => { pDUIPv6AddresswithPrefix = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); },
        "iPV4dynamicAddressFlag": (_el: _Element): void => { iPV4dynamicAddressFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "iPV6dynamicPrefixFlag": (_el: _Element): void => { iPV6dynamicPrefixFlag = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_PDUAddress,
        _extension_additions_list_spec_for_PDUAddress,
        _root_component_type_list_2_spec_for_PDUAddress,
        undefined,
    );
    return new PDUAddress(
        pDUIPv4Address,
        pDUIPv6AddresswithPrefix,
        iPV4dynamicAddressFlag,
        iPV6dynamicPrefixFlag
    );
}; }
    return _cached_decoder_for_PDUAddress(el);
}

let _cached_encoder_for_PDUAddress: $.ASN1Encoder<PDUAddress> | null = null;

/**
 * @summary Encodes a(n) PDUAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PDUAddress, encoded as an ASN.1 Element.
 */
export
function _encode_PDUAddress (value: PDUAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_PDUAddress) { _cached_encoder_for_PDUAddress = function (value: PDUAddress, _elGetter: $.ASN1Encoder<PDUAddress>): _Element {
    const _components: _Element[] = [];
    if (value.pDUIPv4Address !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 0, () => _encode_IPAddress, $.BER)(value.pDUIPv4Address, $.BER));
    }
    if (value.pDUIPv6AddresswithPrefix !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.pDUIPv6AddresswithPrefix, $.BER));
    }
    if (value.iPV4dynamicAddressFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => $._encodeBoolean, $.BER)(value.iPV4dynamicAddressFlag, $.BER));
    }
    if (value.iPV6dynamicPrefixFlag !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => $._encodeBoolean, $.BER)(value.iPV6dynamicPrefixFlag, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_PDUAddress(value, elGetter);
}


/* eslint-enable */
