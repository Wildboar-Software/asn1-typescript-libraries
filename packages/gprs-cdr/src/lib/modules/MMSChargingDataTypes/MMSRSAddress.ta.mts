/* eslint-disable */
import {
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../MMSChargingDataTypes/IPAddress.ta.mjs";


/**
 * @summary MMSRSAddress
 * @description
 *
 * IP address or domain name of an MMS Relay/Server. Which Relay/Server
 * depends on the CDR field: originator, recipient, or forwarding. The
 * tables allow either form. `domainName` is the domain name and
 * `iPAddress` is the IP address.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MMSRSAddress ::= SEQUENCE {
 *    domainName   [0] IMPLICIT OCTET STRING OPTIONAL,
 *    iPAddress    [2] IPAddress OPTIONAL}
 * ```
 * 
 * @class
 */
export
class MMSRSAddress {
    /**
     * @summary `domainName`.
     * @description
     *
     * Domain name of the MMS Relay/Server. The CDR tables allow either a
     * domain name or an IP address.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly domainName: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `iPAddress`.
     * @description
     *
     * IP address of the MMS Relay/Server. The CDR tables allow either a domain
     * name or an IP address.
     *
     * 3GPP TS 32.270 V19.0.0 clause 6.1.1.1.
     *
     * @public
     * @readonly
     */
    readonly iPAddress: OPTIONAL<IPAddress>;

    constructor (
        domainName: OPTIONAL<OCTET_STRING>,
        iPAddress: OPTIONAL<IPAddress>
    ) {
        this.domainName = domainName;
        this.iPAddress = iPAddress;
    }

    /**
     * @summary Restructures an object into a MMSRSAddress
     * @description
     * 
     * This takes an `object` and converts it to a `MMSRSAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `MMSRSAddress`.
     * @returns {MMSRSAddress}
     */
    public static _from_object (_o: { [_K in keyof (MMSRSAddress)]: (MMSRSAddress)[_K] }): MMSRSAddress {
        return new MMSRSAddress(_o.domainName, _o.iPAddress);
    }


}

/**
 * @summary The Leading Root Component Types of MMSRSAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_MMSRSAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("domainName", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iPAddress", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of MMSRSAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_MMSRSAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of MMSRSAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_MMSRSAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_MMSRSAddress: $.ASN1Decoder<MMSRSAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MMSRSAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MMSRSAddress (el: _Element): MMSRSAddress {
    if (!_cached_decoder_for_MMSRSAddress) { _cached_decoder_for_MMSRSAddress = function (el: _Element): MMSRSAddress {
    let domainName: OPTIONAL<OCTET_STRING>;
    let iPAddress: OPTIONAL<IPAddress>;
    const callbacks: $.DecodingMap = {
        "domainName": (_el: _Element): void => { domainName = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "iPAddress": (_el: _Element): void => { iPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_MMSRSAddress,
        _extension_additions_list_spec_for_MMSRSAddress,
        _root_component_type_list_2_spec_for_MMSRSAddress,
        undefined,
    );
    return new MMSRSAddress(
        domainName,
        iPAddress
    );
}; }
    return _cached_decoder_for_MMSRSAddress(el);
}

let _cached_encoder_for_MMSRSAddress: $.ASN1Encoder<MMSRSAddress> | null = null;

/**
 * @summary Encodes a(n) MMSRSAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MMSRSAddress, encoded as an ASN.1 Element.
 */
export
function _encode_MMSRSAddress (value: MMSRSAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MMSRSAddress) { _cached_encoder_for_MMSRSAddress = function (value: MMSRSAddress, _elGetter: $.ASN1Encoder<MMSRSAddress>): _Element {
    const _components: _Element[] = [];
    if (value.domainName !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.domainName, $.BER));
    }
    if (value.iPAddress !== undefined) {
        _components.push(/* IF_ABSENT  */ $._encode_explicit(_TagClass.context, 2, () => _encode_IPAddress, $.BER)(value.iPAddress, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_MMSRSAddress(value, elGetter);
}


/* eslint-enable */
