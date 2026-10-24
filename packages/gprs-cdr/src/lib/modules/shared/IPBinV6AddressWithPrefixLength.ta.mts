/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    type INTEGER,
    type OCTET_STRING,
    type OPTIONAL,
    ASN1SizeError,
    ASN1OverflowError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary IPBinV6AddressWithPrefixLength
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPBinV6AddressWithPrefixLength ::= SEQUENCE {
 *    iPBinV6Address           OCTET STRING ( SIZE( 16 ) ),
 *    pDPAddressPrefixLength   INTEGER ( 1 .. 64 ) DEFAULT 64}
 * ```
 * 
 * @class
 */
export
class IPBinV6AddressWithPrefixLength {
    /**
     * @summary `iPBinV6Address`.
     * @public
     * @readonly
     */
    readonly iPBinV6Address: OCTET_STRING;
    /**
     * @summary `pDPAddressPrefixLength`.
     * @public
     * @readonly
     */
    readonly pDPAddressPrefixLength: OPTIONAL<INTEGER>;

    constructor (
        iPBinV6Address: OCTET_STRING,
        pDPAddressPrefixLength?: OPTIONAL<INTEGER>
    ) {
        this.iPBinV6Address = iPBinV6Address;
        this.pDPAddressPrefixLength = pDPAddressPrefixLength;
    
        if ((this.iPBinV6Address.length !== 16)) {
            throw new ASN1SizeError("IPBinV6AddressWithPrefixLength.iPBinV6Address violates SIZE constraint");
        }
        if (this.pDPAddressPrefixLength !== undefined && (this.pDPAddressPrefixLength < 1 || this.pDPAddressPrefixLength > 64)) {
            throw new ASN1OverflowError("IPBinV6AddressWithPrefixLength.pDPAddressPrefixLength violates INTEGER range");
        }
    }

    /**
     * @summary Restructures an object into a IPBinV6AddressWithPrefixLength
     * @description
     * 
     * This takes an `object` and converts it to a `IPBinV6AddressWithPrefixLength`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPBinV6AddressWithPrefixLength`.
     * @returns {IPBinV6AddressWithPrefixLength}
     */
    public static _from_object (_o: { [_K in keyof (IPBinV6AddressWithPrefixLength)]: (IPBinV6AddressWithPrefixLength)[_K] }): IPBinV6AddressWithPrefixLength {
        return new IPBinV6AddressWithPrefixLength(_o.iPBinV6Address, _o.pDPAddressPrefixLength);
    }

    /**
     * @summary Getter that returns the default value for `pDPAddressPrefixLength`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_pDPAddressPrefixLength () { return 64; }
}

/**
 * @summary The Leading Root Component Types of IPBinV6AddressWithPrefixLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPBinV6AddressWithPrefixLength: $.ComponentSpec[] = [
    new $.ComponentSpec("iPBinV6Address", false, $.hasTag(_TagClass.universal, 4)),
    new $.ComponentSpec("pDPAddressPrefixLength", true, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of IPBinV6AddressWithPrefixLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPBinV6AddressWithPrefixLength: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPBinV6AddressWithPrefixLength
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPBinV6AddressWithPrefixLength: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPBinV6AddressWithPrefixLength: $.ASN1Decoder<IPBinV6AddressWithPrefixLength> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPBinV6AddressWithPrefixLength
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPBinV6AddressWithPrefixLength (el: _Element): IPBinV6AddressWithPrefixLength {
    if (!_cached_decoder_for_IPBinV6AddressWithPrefixLength) { _cached_decoder_for_IPBinV6AddressWithPrefixLength = function (el: _Element): IPBinV6AddressWithPrefixLength {
    let iPBinV6Address!: OCTET_STRING;
    let pDPAddressPrefixLength: OPTIONAL<INTEGER> = IPBinV6AddressWithPrefixLength._default_value_for_pDPAddressPrefixLength;
    const callbacks: $.DecodingMap = {
        "iPBinV6Address": (_el: _Element): void => { iPBinV6Address = $._decodeOctetString(_el); },
        "pDPAddressPrefixLength": (_el: _Element): void => { pDPAddressPrefixLength = $._decodeInteger(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPBinV6AddressWithPrefixLength,
        _extension_additions_list_spec_for_IPBinV6AddressWithPrefixLength,
        _root_component_type_list_2_spec_for_IPBinV6AddressWithPrefixLength,
        undefined,
    );
    return new IPBinV6AddressWithPrefixLength(
        iPBinV6Address,
        pDPAddressPrefixLength
    );
}; }
    return _cached_decoder_for_IPBinV6AddressWithPrefixLength(el);
}

let _cached_encoder_for_IPBinV6AddressWithPrefixLength: $.ASN1Encoder<IPBinV6AddressWithPrefixLength> | null = null;

/**
 * @summary Encodes a(n) IPBinV6AddressWithPrefixLength into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPBinV6AddressWithPrefixLength, encoded as an ASN.1 Element.
 */
export
function _encode_IPBinV6AddressWithPrefixLength (value: IPBinV6AddressWithPrefixLength, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPBinV6AddressWithPrefixLength) { _cached_encoder_for_IPBinV6AddressWithPrefixLength = function (value: IPBinV6AddressWithPrefixLength, _elGetter: $.ASN1Encoder<IPBinV6AddressWithPrefixLength>): _Element {
    const _components: _Element[] = [];
    _components.push(/* REQUIRED   */ $._encodeOctetString(value.iPBinV6Address, $.BER));
    if (value.pDPAddressPrefixLength !== undefined && !$.deepEq(value.pDPAddressPrefixLength, IPBinV6AddressWithPrefixLength._default_value_for_pDPAddressPrefixLength)) {
        _components.push(/* IF_DEFAULT */ $._encodeInteger(value.pDPAddressPrefixLength, $.BER));
    }
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_IPBinV6AddressWithPrefixLength(value, elGetter);
}


/* eslint-enable */
