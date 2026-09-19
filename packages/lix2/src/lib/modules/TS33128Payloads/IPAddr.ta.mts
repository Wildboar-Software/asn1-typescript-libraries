/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
// export { IPv4Address, _decode_IPv4Address, _encode_IPv4Address } from "../TS33128Payloads/IPv4Address.ta.mjs";
import { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";
// export { IPv6Address, _decode_IPv6Address, _encode_IPv6Address } from "../TS33128Payloads/IPv6Address.ta.mjs";


/**
 * @summary IPAddr
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPAddr ::= SEQUENCE
 * {
 *     iPv4Addr                    [1] IPv4Address OPTIONAL,
 *     iPv6Addr                    [2] IPv6Address OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class IPAddr {
    constructor (
        /**
         * @summary `iPv4Addr`.
         * @public
         * @readonly
         */
        readonly iPv4Addr: OPTIONAL<IPv4Address>,
        /**
         * @summary `iPv6Addr`.
         * @public
         * @readonly
         */
        readonly iPv6Addr: OPTIONAL<IPv6Address>
    ) {}

    /**
     * @summary Restructures an object into a IPAddr
     * @description
     * 
     * This takes an `object` and converts it to a `IPAddr`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPAddr`.
     * @returns {IPAddr}
     */
    public static _from_object (_o: { [_K in keyof (IPAddr)]: (IPAddr)[_K] }): IPAddr {
        return new IPAddr(_o.iPv4Addr, _o.iPv6Addr);
    }


}

/**
 * @summary The Leading Root Component Types of IPAddr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPAddr: $.ComponentSpec[] = [
    new $.ComponentSpec("iPv4Addr", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("iPv6Addr", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of IPAddr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPAddr: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPAddr
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPAddr: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPAddr: $.ASN1Decoder<IPAddr> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPAddr
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPAddr (el: _Element): IPAddr {
    if (!_cached_decoder_for_IPAddr) { _cached_decoder_for_IPAddr = function (el: _Element): IPAddr {
    let iPv4Addr: OPTIONAL<IPv4Address>;
    let iPv6Addr: OPTIONAL<IPv6Address>;
    const callbacks: $.DecodingMap = {
        "iPv4Addr": (_el: _Element): void => { iPv4Addr = $._decode_implicit<IPv4Address>(() => _decode_IPv4Address)(_el); },
        "iPv6Addr": (_el: _Element): void => { iPv6Addr = $._decode_implicit<IPv6Address>(() => _decode_IPv6Address)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPAddr,
        _extension_additions_list_spec_for_IPAddr,
        _root_component_type_list_2_spec_for_IPAddr,
        undefined,
    );
    return new IPAddr(
        iPv4Addr,
        iPv6Addr
    );
}; }
    return _cached_decoder_for_IPAddr(el);
}

let _cached_encoder_for_IPAddr: $.ASN1Encoder<IPAddr> | null = null;

/**
 * @summary Encodes a(n) IPAddr into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPAddr, encoded as an ASN.1 Element.
 */
export
function _encode_IPAddr (value: IPAddr, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPAddr) { _cached_encoder_for_IPAddr = function (value: IPAddr, elGetter: $.ASN1Encoder<IPAddr>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.iPv4Addr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_IPv4Address, $.BER)(value.iPv4Addr, $.BER)),
            /* IF_ABSENT  */ ((value.iPv6Addr === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_IPv6Address, $.BER)(value.iPv6Addr, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPAddr(value, elGetter);
}


/* eslint-enable */
