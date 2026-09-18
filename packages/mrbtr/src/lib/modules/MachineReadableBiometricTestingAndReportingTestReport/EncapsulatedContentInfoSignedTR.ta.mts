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
import { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
// export { CONTENT_TYPE } from "../CryptographicMessageSyntax-2009/CONTENT-TYPE.oca.mjs";
import { ContentTypeContentInfoSignedTR } from "../MachineReadableBiometricTestingAndReportingTestReport/ContentTypeContentInfoSignedTR.osa.mjs";
// export { ContentTypeContentInfoSignedTR } from "../MachineReadableBiometricTestingAndReportingTestReport/ContentTypeContentInfoSignedTR.osa.mjs";


/**
 * @summary EncapsulatedContentInfoSignedTR
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncapsulatedContentInfoSignedTR ::= SEQUENCE {
 *     eContentTypeContentInfoSignedTR CONTENT-TYPE.&id
 *         ({ContentTypeContentInfoSignedTR }),
 *     eContentContentInfoSignedTR [0] EXPLICIT OCTET STRING
 *         (CONTAINING CONTENT-TYPE.&Type({ContentTypeContentInfoSignedTR}{@contentType}))
 * }
 * ```
 * 
 * @class
 */
export
class EncapsulatedContentInfoSignedTR {
    constructor (
        /**
         * @summary `eContentTypeContentInfoSignedTR`.
         * @public
         * @readonly
         */
        readonly eContentTypeContentInfoSignedTR: OBJECT_IDENTIFIER,
        /**
         * @summary `eContentContentInfoSignedTR`.
         * @public
         * @readonly
         */
        readonly eContentContentInfoSignedTR: OCTET_STRING
    ) {}

    /**
     * @summary Restructures an object into a EncapsulatedContentInfoSignedTR
     * @description
     * 
     * This takes an `object` and converts it to a `EncapsulatedContentInfoSignedTR`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncapsulatedContentInfoSignedTR`.
     * @returns {EncapsulatedContentInfoSignedTR}
     */
    public static _from_object (_o: { [_K in keyof (EncapsulatedContentInfoSignedTR)]: (EncapsulatedContentInfoSignedTR)[_K] }): EncapsulatedContentInfoSignedTR {
        return new EncapsulatedContentInfoSignedTR(_o.eContentTypeContentInfoSignedTR, _o.eContentContentInfoSignedTR);
    }


}

/**
 * @summary The Leading Root Component Types of EncapsulatedContentInfoSignedTR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncapsulatedContentInfoSignedTR: $.ComponentSpec[] = [
    new $.ComponentSpec("eContentTypeContentInfoSignedTR", false, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("eContentContentInfoSignedTR", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of EncapsulatedContentInfoSignedTR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncapsulatedContentInfoSignedTR: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncapsulatedContentInfoSignedTR
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncapsulatedContentInfoSignedTR: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncapsulatedContentInfoSignedTR: $.ASN1Decoder<EncapsulatedContentInfoSignedTR> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncapsulatedContentInfoSignedTR
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncapsulatedContentInfoSignedTR (el: _Element): EncapsulatedContentInfoSignedTR {
    if (!_cached_decoder_for_EncapsulatedContentInfoSignedTR) { _cached_decoder_for_EncapsulatedContentInfoSignedTR = function (el: _Element): EncapsulatedContentInfoSignedTR {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("EncapsulatedContentInfoSignedTR contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "eContentTypeContentInfoSignedTR";
    sequence[1].name = "eContentContentInfoSignedTR";
    let eContentTypeContentInfoSignedTR!: OBJECT_IDENTIFIER;
    let eContentContentInfoSignedTR!: OCTET_STRING;
    eContentTypeContentInfoSignedTR = $._decodeObjectIdentifier(sequence[0]);
    eContentContentInfoSignedTR = $._decode_explicit<OCTET_STRING>(() => $._decodeOctetString)(sequence[1]);
    return new EncapsulatedContentInfoSignedTR(
        eContentTypeContentInfoSignedTR,
        eContentContentInfoSignedTR,

    );
}; }
    return _cached_decoder_for_EncapsulatedContentInfoSignedTR(el);
}

let _cached_encoder_for_EncapsulatedContentInfoSignedTR: $.ASN1Encoder<EncapsulatedContentInfoSignedTR> | null = null;

/**
 * @summary Encodes a(n) EncapsulatedContentInfoSignedTR into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncapsulatedContentInfoSignedTR, encoded as an ASN.1 Element.
 */
export
function _encode_EncapsulatedContentInfoSignedTR (value: EncapsulatedContentInfoSignedTR, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncapsulatedContentInfoSignedTR) { _cached_encoder_for_EncapsulatedContentInfoSignedTR = function (value: EncapsulatedContentInfoSignedTR, elGetter: $.ASN1Encoder<EncapsulatedContentInfoSignedTR>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encodeObjectIdentifier(value.eContentTypeContentInfoSignedTR, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => $._encodeOctetString, $.BER)(value.eContentContentInfoSignedTR, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EncapsulatedContentInfoSignedTR(value, elGetter);
}


/* eslint-enable */
