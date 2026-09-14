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
import { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
// export { GeneralName, _decode_GeneralName, _encode_GeneralName } from "../CertificateExtensions/GeneralName.ta.mjs";
import { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";
// export { CertificateSerialNumber, _decode_CertificateSerialNumber, _encode_CertificateSerialNumber } from "../AuthenticationFramework/CertificateSerialNumber.ta.mjs";


/**
 * @summary CertId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CertId ::= SEQUENCE {
 *     issuer       GeneralName,
 *     serialNumber CertificateSerialNumber
 * }
 * ```
 * 
 * @class
 */
export
class CertId {
    constructor (
        /**
         * @summary `issuer`.
         * @public
         * @readonly
         */
        readonly issuer: GeneralName,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: CertificateSerialNumber
    ) {}

    /**
     * @summary Restructures an object into a CertId
     * @description
     * 
     * This takes an `object` and converts it to a `CertId`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CertId`.
     * @returns {CertId}
     */
    public static _from_object (_o: { [_K in keyof (CertId)]: (CertId)[_K] }): CertId {
        return new CertId(_o.issuer, _o.serialNumber);
    }


}

/**
 * @summary The Leading Root Component Types of CertId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CertId: $.ComponentSpec[] = [
    new $.ComponentSpec("issuer", false, $.hasAnyTag),
    new $.ComponentSpec("serialNumber", false, $.hasTag(_TagClass.universal, 2))
];

/**
 * @summary The Trailing Root Component Types of CertId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CertId: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CertId
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CertId: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CertId: $.ASN1Decoder<CertId> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CertId
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CertId (el: _Element): CertId {
    if (!_cached_decoder_for_CertId) { _cached_decoder_for_CertId = function (el: _Element): CertId {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CertId contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "issuer";
    sequence[1].name = "serialNumber";
    let issuer!: GeneralName;
    let serialNumber!: CertificateSerialNumber;
    issuer = _decode_GeneralName(sequence[0]);
    serialNumber = _decode_CertificateSerialNumber(sequence[1]);
    return new CertId(
        issuer,
        serialNumber,

    );
}; }
    return _cached_decoder_for_CertId(el);
}

let _cached_encoder_for_CertId: $.ASN1Encoder<CertId> | null = null;

/**
 * @summary Encodes a(n) CertId into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CertId, encoded as an ASN.1 Element.
 */
export
function _encode_CertId (value: CertId, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CertId) { _cached_encoder_for_CertId = function (value: CertId, elGetter: $.ASN1Encoder<CertId>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_GeneralName(value.issuer, $.BER),
            /* REQUIRED   */ _encode_CertificateSerialNumber(value.serialNumber, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CertId(value, elGetter);
}


/* eslint-enable */
