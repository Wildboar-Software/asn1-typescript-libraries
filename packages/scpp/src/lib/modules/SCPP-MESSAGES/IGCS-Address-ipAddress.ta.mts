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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";



/**
 * @summary IGCS_Address_ipAddress
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IGCS-Address-ipAddress ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class IGCS_Address_ipAddress {
    constructor (
        /**
         * @summary `ip`.
         * @public
         * @readonly
         */
        readonly ip: OCTET_STRING,
        /**
         * @summary `port`.
         * @public
         * @readonly
         */
        readonly port: INTEGER
    ) {}

    /**
     * @summary Restructures an object into a IGCS_Address_ipAddress
     * @description
     * 
     * This takes an `object` and converts it to a `IGCS_Address_ipAddress`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IGCS_Address_ipAddress`.
     * @returns {IGCS_Address_ipAddress}
     */
    public static _from_object (_o: { [_K in keyof (IGCS_Address_ipAddress)]: (IGCS_Address_ipAddress)[_K] }): IGCS_Address_ipAddress {
        return new IGCS_Address_ipAddress(_o.ip, _o.port);
    }


}

/**
 * @summary The Leading Root Component Types of IGCS_Address_ipAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IGCS_Address_ipAddress: $.ComponentSpec[] = [
    new $.ComponentSpec("ip", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("port", false, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of IGCS_Address_ipAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IGCS_Address_ipAddress: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IGCS_Address_ipAddress
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IGCS_Address_ipAddress: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IGCS_Address_ipAddress: $.ASN1Decoder<IGCS_Address_ipAddress> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IGCS_Address_ipAddress
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IGCS_Address_ipAddress (el: _Element): IGCS_Address_ipAddress {
    if (!_cached_decoder_for_IGCS_Address_ipAddress) { _cached_decoder_for_IGCS_Address_ipAddress = function (el: _Element): IGCS_Address_ipAddress {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("IGCS-Address-ipAddress contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "ip";
    sequence[1].name = "port";
    let ip!: OCTET_STRING;
    let port!: INTEGER;
    ip = $._decodeOctetString(sequence[0]);
    port = $._decodeInteger(sequence[1]);
    return new IGCS_Address_ipAddress(
        ip,
        port,

    );
}; }
    return _cached_decoder_for_IGCS_Address_ipAddress(el);
}

let _cached_encoder_for_IGCS_Address_ipAddress: $.ASN1Encoder<IGCS_Address_ipAddress> | null = null;

/**
 * @summary Encodes a(n) IGCS_Address_ipAddress into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IGCS_Address_ipAddress, encoded as an ASN.1 Element.
 */
export
function _encode_IGCS_Address_ipAddress (value: IGCS_Address_ipAddress, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IGCS_Address_ipAddress) { _cached_encoder_for_IGCS_Address_ipAddress = function (value: IGCS_Address_ipAddress, elGetter: $.ASN1Encoder<IGCS_Address_ipAddress>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeOctetString(value.ip, $.BER),
            /* REQUIRED   */ $._encodeInteger(value.port, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IGCS_Address_ipAddress(value, elGetter);
}


/* eslint-enable */
