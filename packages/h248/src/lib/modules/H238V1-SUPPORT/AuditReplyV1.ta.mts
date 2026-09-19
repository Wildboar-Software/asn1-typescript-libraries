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
import { AuditResultV1, _decode_AuditResultV1, _encode_AuditResultV1 } from "../H238V1-SUPPORT/AuditResultV1.ta.mjs";
// export { AuditResultV1, _decode_AuditResultV1, _encode_AuditResultV1 } from "../H238V1-SUPPORT/AuditResultV1.ta.mjs";


/**
 * @summary AuditReplyV1
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AuditReplyV1 ::= SEQUENCE
 *     {
 *         terminationID        [0] TerminationID,
 *         auditResult            [1] AuditResultV1
 *     }
 * ```
 * 
 * @class
 */
export
class AuditReplyV1 {
    constructor (
        /**
         * @summary `terminationID`.
         * @public
         * @readonly
         */
        readonly terminationID: TerminationID,
        /**
         * @summary `auditResult`.
         * @public
         * @readonly
         */
        readonly auditResult: AuditResultV1
    ) {}

    /**
     * @summary Restructures an object into a AuditReplyV1
     * @description
     * 
     * This takes an `object` and converts it to a `AuditReplyV1`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AuditReplyV1`.
     * @returns {AuditReplyV1}
     */
    public static _from_object (_o: { [_K in keyof (AuditReplyV1)]: (AuditReplyV1)[_K] }): AuditReplyV1 {
        return new AuditReplyV1(_o.terminationID, _o.auditResult);
    }


}

/**
 * @summary The Leading Root Component Types of AuditReplyV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AuditReplyV1: $.ComponentSpec[] = [
    /* FIXME: terminationID COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("auditResult", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of AuditReplyV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AuditReplyV1: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AuditReplyV1
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AuditReplyV1: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AuditReplyV1: $.ASN1Decoder<AuditReplyV1> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AuditReplyV1
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AuditReplyV1 (el: _Element): AuditReplyV1 {
    if (!_cached_decoder_for_AuditReplyV1) { _cached_decoder_for_AuditReplyV1 = function (el: _Element): AuditReplyV1 {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("AuditReplyV1 contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "terminationID";
    sequence[1].name = "auditResult";
    let terminationID!: TerminationID;
    let auditResult!: AuditResultV1;
    terminationID = $._decode_implicit<TerminationID>(() => _decode_TerminationID)(sequence[0]);
    auditResult = $._decode_explicit<AuditResultV1>(() => _decode_AuditResultV1)(sequence[1]);
    return new AuditReplyV1(
        terminationID,
        auditResult,

    );
}; }
    return _cached_decoder_for_AuditReplyV1(el);
}

let _cached_encoder_for_AuditReplyV1: $.ASN1Encoder<AuditReplyV1> | null = null;

/**
 * @summary Encodes a(n) AuditReplyV1 into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AuditReplyV1, encoded as an ASN.1 Element.
 */
export
function _encode_AuditReplyV1 (value: AuditReplyV1, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AuditReplyV1) { _cached_encoder_for_AuditReplyV1 = function (value: AuditReplyV1, elGetter: $.ASN1Encoder<AuditReplyV1>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_TerminationID, $.BER)(value.terminationID, $.BER),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_AuditResultV1, $.BER)(value.auditResult, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AuditReplyV1(value, elGetter);
}


/* eslint-enable */
