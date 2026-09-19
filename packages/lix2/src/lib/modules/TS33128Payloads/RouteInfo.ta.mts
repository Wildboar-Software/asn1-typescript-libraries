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
import { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
// export { IPAddress, _decode_IPAddress, _encode_IPAddress } from "../TS33128Payloads/IPAddress.ta.mjs";
import { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";
// export { PortNumber, _decode_PortNumber, _encode_PortNumber } from "../TS33128Payloads/PortNumber.ta.mjs";


/**
 * @summary RouteInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RouteInfo ::= SEQUENCE
 * {
 *     iPAddressTunnelEndpoint       [1] IPAddress,
 *     uDPPortNumberTunnelEndpoint   [2] PortNumber
 * }
 * ```
 * 
 * @class
 */
export
class RouteInfo {
    constructor (
        /**
         * @summary `iPAddressTunnelEndpoint`.
         * @public
         * @readonly
         */
        readonly iPAddressTunnelEndpoint: IPAddress,
        /**
         * @summary `uDPPortNumberTunnelEndpoint`.
         * @public
         * @readonly
         */
        readonly uDPPortNumberTunnelEndpoint: PortNumber
    ) {}

    /**
     * @summary Restructures an object into a RouteInfo
     * @description
     * 
     * This takes an `object` and converts it to a `RouteInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RouteInfo`.
     * @returns {RouteInfo}
     */
    public static _from_object (_o: { [_K in keyof (RouteInfo)]: (RouteInfo)[_K] }): RouteInfo {
        return new RouteInfo(_o.iPAddressTunnelEndpoint, _o.uDPPortNumberTunnelEndpoint);
    }


}

/**
 * @summary The Leading Root Component Types of RouteInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RouteInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("iPAddressTunnelEndpoint", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("uDPPortNumberTunnelEndpoint", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of RouteInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RouteInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RouteInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RouteInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RouteInfo: $.ASN1Decoder<RouteInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RouteInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RouteInfo (el: _Element): RouteInfo {
    if (!_cached_decoder_for_RouteInfo) { _cached_decoder_for_RouteInfo = function (el: _Element): RouteInfo {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RouteInfo contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPAddressTunnelEndpoint";
    sequence[1].name = "uDPPortNumberTunnelEndpoint";
    let iPAddressTunnelEndpoint!: IPAddress;
    let uDPPortNumberTunnelEndpoint!: PortNumber;
    iPAddressTunnelEndpoint = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    uDPPortNumberTunnelEndpoint = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(sequence[1]);
    return new RouteInfo(
        iPAddressTunnelEndpoint,
        uDPPortNumberTunnelEndpoint,

    );
}; }
    return _cached_decoder_for_RouteInfo(el);
}

let _cached_encoder_for_RouteInfo: $.ASN1Encoder<RouteInfo> | null = null;

/**
 * @summary Encodes a(n) RouteInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RouteInfo, encoded as an ASN.1 Element.
 */
export
function _encode_RouteInfo (value: RouteInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RouteInfo) { _cached_encoder_for_RouteInfo = function (value: RouteInfo, elGetter: $.ASN1Encoder<RouteInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.iPAddressTunnelEndpoint, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortNumber, $.BER)(value.uDPPortNumberTunnelEndpoint, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RouteInfo(value, elGetter);
}


/* eslint-enable */
