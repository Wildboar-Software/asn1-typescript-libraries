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
 * @summary EASServerAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EASServerAddress ::= SEQUENCE
 * {
 *     iPAddress        [1]  IPAddress,
 *     port             [2]  PortNumber
 * }
 * ```
 * 
 * @class
 */
export
class EASServerAddress {
    constructor (
        /**
         * @summary `iPAddress`.
         * @public
         * @readonly
         */
        readonly iPAddress: IPAddress,
        /**
         * @summary `port`.
         * @public
         * @readonly
         */
        readonly port: PortNumber
    ) {}

    /**
     * @summary Restructures an object into a EASServerAddress
     * @description
     * 
     * This takes an `object` and converts it to a `EASServerAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EASServerAddress`.
     * @returns {EASServerAddress}
     */
    public static _from_object (_o: { [_K in keyof (EASServerAddress)]: (EASServerAddress)[_K] }): EASServerAddress {
        return new EASServerAddress(_o.iPAddress, _o.port);
    }


}

/**
 * @summary The Leading Root Component Types of EASServerAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EASServerAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("iPAddress", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("port", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of EASServerAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EASServerAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EASServerAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EASServerAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EASServerAddress: $.ASN1Decoder<EASServerAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EASServerAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EASServerAddress (el: _Element): EASServerAddress {
    if (!_cached_decoder_for_EASServerAddress) { _cached_decoder_for_EASServerAddress = function (el: _Element): EASServerAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EASServerAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iPAddress";
    sequence[1].name = "port";
    let iPAddress!: IPAddress;
    let port!: PortNumber;
    iPAddress = $._decode_explicit<IPAddress>(() => _decode_IPAddress)(sequence[0]);
    port = $._decode_implicit<PortNumber>(() => _decode_PortNumber)(sequence[1]);
    return new EASServerAddress(
        iPAddress,
        port,

    );
}; }
    return _cached_decoder_for_EASServerAddress(el);
}

let _cached_encoder_for_EASServerAddress: $.ASN1Encoder<EASServerAddress> | null = null;

/**
 * @summary Encodes a(n) EASServerAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EASServerAddress, encoded as an ASN.1 Element.
 */
export
function _encode_EASServerAddress (value: EASServerAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EASServerAddress) { _cached_encoder_for_EASServerAddress = function (value: EASServerAddress, elGetter: $.ASN1Encoder<EASServerAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_IPAddress, $.BER)(value.iPAddress, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_PortNumber, $.BER)(value.port, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EASServerAddress(value, elGetter);
}


/* eslint-enable */
