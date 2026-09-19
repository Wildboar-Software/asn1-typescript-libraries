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
 * @summary IPTruncatedPacket
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IPTruncatedPacket ::= SEQUENCE
 * {
 *     truncatedPacket     [0] OCTET STRING,
 *     originalLength      [1] INTEGER OPTIONAL,
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class IPTruncatedPacket {
    constructor (
        /**
         * @summary `truncatedPacket`.
         * @public
         * @readonly
         */
        readonly truncatedPacket: OCTET_STRING,
        /**
         * @summary `originalLength`.
         * @public
         * @readonly
         */
        readonly originalLength: OPTIONAL<INTEGER>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a IPTruncatedPacket
     * @description
     * 
     * This takes an `object` and converts it to a `IPTruncatedPacket`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IPTruncatedPacket`.
     * @returns {IPTruncatedPacket}
     */
    public static _from_object (_o: { [_K in keyof (IPTruncatedPacket)]: (IPTruncatedPacket)[_K] }): IPTruncatedPacket {
        return new IPTruncatedPacket(_o.truncatedPacket, _o.originalLength, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of IPTruncatedPacket
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IPTruncatedPacket: $.ComponentSpec[] = [
    new $.ComponentSpec("truncatedPacket", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("originalLength", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IPTruncatedPacket
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IPTruncatedPacket: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IPTruncatedPacket
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IPTruncatedPacket: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IPTruncatedPacket: $.ASN1Decoder<IPTruncatedPacket> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IPTruncatedPacket
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IPTruncatedPacket (el: _Element): IPTruncatedPacket {
    if (!_cached_decoder_for_IPTruncatedPacket) { _cached_decoder_for_IPTruncatedPacket = function (el: _Element): IPTruncatedPacket {
    let truncatedPacket!: OCTET_STRING;
    let originalLength: OPTIONAL<INTEGER>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "truncatedPacket": (_el: _Element): void => { truncatedPacket = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "originalLength": (_el: _Element): void => { originalLength = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IPTruncatedPacket,
        _extension_additions_list_spec_for_IPTruncatedPacket,
        _root_component_type_list_2_spec_for_IPTruncatedPacket,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new IPTruncatedPacket(
        truncatedPacket,
        originalLength,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_IPTruncatedPacket(el);
}

let _cached_encoder_for_IPTruncatedPacket: $.ASN1Encoder<IPTruncatedPacket> | null = null;

/**
 * @summary Encodes a(n) IPTruncatedPacket into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IPTruncatedPacket, encoded as an ASN.1 Element.
 */
export
function _encode_IPTruncatedPacket (value: IPTruncatedPacket, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IPTruncatedPacket) { _cached_encoder_for_IPTruncatedPacket = function (value: IPTruncatedPacket, elGetter: $.ASN1Encoder<IPTruncatedPacket>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.truncatedPacket, $.BER),
            /* IF_ABSENT  */ ((value.originalLength === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.originalLength, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IPTruncatedPacket(value, elGetter);
}


/* eslint-enable */
