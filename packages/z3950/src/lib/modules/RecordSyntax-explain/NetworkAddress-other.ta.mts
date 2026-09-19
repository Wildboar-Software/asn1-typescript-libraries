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
 * @summary NetworkAddress_other
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NetworkAddress-other ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NetworkAddress_other {
    constructor (
        /**
         * @summary `type_`.
         * @public
         * @readonly
         */
        readonly type_: InternationalString,
        /**
         * @summary `address`.
         * @public
         * @readonly
         */
        readonly address: InternationalString
    ) {}

    /**
     * @summary Restructures an object into a NetworkAddress_other
     * @description
     * 
     * This takes an `object` and converts it to a `NetworkAddress_other`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NetworkAddress_other`.
     * @returns {NetworkAddress_other}
     */
    public static _from_object (_o: { [_K in keyof (NetworkAddress_other)]: (NetworkAddress_other)[_K] }): NetworkAddress_other {
        return new NetworkAddress_other(_o.type_, _o.address);
    }


}

/**
 * @summary The Leading Root Component Types of NetworkAddress_other
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NetworkAddress_other: $.ComponentSpec[] = [
    /* FIXME: type COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: address COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of NetworkAddress_other
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NetworkAddress_other: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NetworkAddress_other
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NetworkAddress_other: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NetworkAddress_other: $.ASN1Decoder<NetworkAddress_other> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NetworkAddress_other
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NetworkAddress_other (el: _Element): NetworkAddress_other {
    if (!_cached_decoder_for_NetworkAddress_other) { _cached_decoder_for_NetworkAddress_other = function (el: _Element): NetworkAddress_other {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NetworkAddress-other contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "type";
    sequence[1].name = "address";
    let type_!: InternationalString;
    let address!: InternationalString;
    type_ = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[0]);
    address = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(sequence[1]);
    return new NetworkAddress_other(
        type_,
        address,

    );
}; }
    return _cached_decoder_for_NetworkAddress_other(el);
}

let _cached_encoder_for_NetworkAddress_other: $.ASN1Encoder<NetworkAddress_other> | null = null;

/**
 * @summary Encodes a(n) NetworkAddress_other into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NetworkAddress_other, encoded as an ASN.1 Element.
 */
export
function _encode_NetworkAddress_other (value: NetworkAddress_other, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NetworkAddress_other) { _cached_encoder_for_NetworkAddress_other = function (value: NetworkAddress_other, elGetter: $.ASN1Encoder<NetworkAddress_other>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.type_, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.address, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NetworkAddress_other(value, elGetter);
}


/* eslint-enable */
