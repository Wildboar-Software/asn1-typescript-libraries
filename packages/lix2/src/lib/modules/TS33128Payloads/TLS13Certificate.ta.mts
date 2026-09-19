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
import { TLS13CerificateEntry, _decode_TLS13CerificateEntry, _encode_TLS13CerificateEntry } from "../TS33128Payloads/TLS13CerificateEntry.ta.mjs";
// export { TLS13CerificateEntry, _decode_TLS13CerificateEntry, _encode_TLS13CerificateEntry } from "../TS33128Payloads/TLS13CerificateEntry.ta.mjs";


/**
 * @summary TLS13Certificate
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TLS13Certificate ::= SEQUENCE
 * {
 *     tLSCertificateRequestContext [1] OCTET STRING (SIZE(0..255)),
 *     tLSCertificateList           [2] SEQUENCE OF TLS13CerificateEntry
 * }
 * ```
 * 
 * @class
 */
export
class TLS13Certificate {
    constructor (
        /**
         * @summary `tLSCertificateRequestContext`.
         * @public
         * @readonly
         */
        readonly tLSCertificateRequestContext: OCTET_STRING,
        /**
         * @summary `tLSCertificateList`.
         * @public
         * @readonly
         */
        readonly tLSCertificateList: TLS13CerificateEntry[]
    ) {}

    /**
     * @summary Restructures an object into a TLS13Certificate
     * @description
     * 
     * This takes an `object` and converts it to a `TLS13Certificate`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TLS13Certificate`.
     * @returns {TLS13Certificate}
     */
    public static _from_object (_o: { [_K in keyof (TLS13Certificate)]: (TLS13Certificate)[_K] }): TLS13Certificate {
        return new TLS13Certificate(_o.tLSCertificateRequestContext, _o.tLSCertificateList);
    }


}

/**
 * @summary The Leading Root Component Types of TLS13Certificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TLS13Certificate: $.ComponentSpec[] = [
    new $.ComponentSpec("tLSCertificateRequestContext", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("tLSCertificateList", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of TLS13Certificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TLS13Certificate: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TLS13Certificate
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TLS13Certificate: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TLS13Certificate: $.ASN1Decoder<TLS13Certificate> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TLS13Certificate
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TLS13Certificate (el: _Element): TLS13Certificate {
    if (!_cached_decoder_for_TLS13Certificate) { _cached_decoder_for_TLS13Certificate = function (el: _Element): TLS13Certificate {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("TLS13Certificate contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "tLSCertificateRequestContext";
    sequence[1].name = "tLSCertificateList";
    let tLSCertificateRequestContext!: OCTET_STRING;
    let tLSCertificateList!: TLS13CerificateEntry[];
    tLSCertificateRequestContext = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[0]);
    tLSCertificateList = $._decode_implicit<TLS13CerificateEntry[]>(() => $._decodeSequenceOf<TLS13CerificateEntry>(() => _decode_TLS13CerificateEntry))(sequence[1]);
    return new TLS13Certificate(
        tLSCertificateRequestContext,
        tLSCertificateList,

    );
}; }
    return _cached_decoder_for_TLS13Certificate(el);
}

let _cached_encoder_for_TLS13Certificate: $.ASN1Encoder<TLS13Certificate> | null = null;

/**
 * @summary Encodes a(n) TLS13Certificate into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TLS13Certificate, encoded as an ASN.1 Element.
 */
export
function _encode_TLS13Certificate (value: TLS13Certificate, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TLS13Certificate) { _cached_encoder_for_TLS13Certificate = function (value: TLS13Certificate, elGetter: $.ASN1Encoder<TLS13Certificate>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.tLSCertificateRequestContext, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<TLS13CerificateEntry>(() => _encode_TLS13CerificateEntry, $.BER), $.BER)(value.tLSCertificateList, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TLS13Certificate(value, elGetter);
}


/* eslint-enable */
