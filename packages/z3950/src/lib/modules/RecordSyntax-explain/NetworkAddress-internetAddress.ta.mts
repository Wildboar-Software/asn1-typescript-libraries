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



/**
 * @summary NetworkAddress_internetAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAddress-internetAddress ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NetworkAddress_internetAddress {
    constructor (
        /**
         * @summary `hostAddress`.
         * @public
         * @readonly
         */
        readonly hostAddress: InternationalString,
        /**
         * @summary `port`.
         * @public
         * @readonly
         */
        readonly port: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a NetworkAddress_internetAddress
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkAddress_internetAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkAddress_internetAddress`.
     * @returns {NetworkAddress_internetAddress}
     */
    public static _from_object (_o: { [_K in keyof (NetworkAddress_internetAddress)]: (NetworkAddress_internetAddress)[_K] }): NetworkAddress_internetAddress {
        return new NetworkAddress_internetAddress(_o.hostAddress, _o.port);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkAddress_internetAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkAddress_internetAddress: $.ComponentSpec[] = [
    /* FIXME: hostAddress COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("port", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NetworkAddress_internetAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkAddress_internetAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkAddress_internetAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkAddress_internetAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkAddress_internetAddress: $.ASN1Decoder<NetworkAddress_internetAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress_internetAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAddress_internetAddress (el: _Element): NetworkAddress_internetAddress {
    if (!_cached_decoder_for_NetworkAddress_internetAddress) { _cached_decoder_for_NetworkAddress_internetAddress = function (el: _Element): NetworkAddress_internetAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NetworkAddress-internetAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "hostAddress";
    sequence[1].name = "port";
    let hostAddress!: InternationalString;
    let port!: INTEGER;
    hostAddress = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[0]);
    port = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    return new NetworkAddress_internetAddress(
        hostAddress,
        port,

    );
}; }
    return _cached_decoder_for_NetworkAddress_internetAddress(el);
}

let _cached_encoder_for_NetworkAddress_internetAddress: $.ASN1Encoder<NetworkAddress_internetAddress> | null = null;

/**
 * @summary Encodes a(n) NetworkAddress_internetAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress_internetAddress, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAddress_internetAddress (value: NetworkAddress_internetAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAddress_internetAddress) { _cached_encoder_for_NetworkAddress_internetAddress = function (value: NetworkAddress_internetAddress, elGetter: $.ASN1Encoder<NetworkAddress_internetAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.hostAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.port, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NetworkAddress_internetAddress(value, elGetter);
}


/* eslint-enable */
