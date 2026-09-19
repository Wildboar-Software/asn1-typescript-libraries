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
import { ASDU, _decode_ASDU, _encode_ASDU } from "../IEC61850/ASDU.ta.mjs";
// export { ASDU, _decode_ASDU, _encode_ASDU } from "../IEC61850/ASDU.ta.mjs";


/**
 * @summary SavPdu
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SavPdu ::= SEQUENCE {
 *     noASDU    [0] IMPLICIT INTEGER(0..65535),
 *     seqASDU    [2] IMPLICIT SEQUENCE OF ASDU
 * }
 * ```
 * 
 * @class
 */
export
class SavPdu {
    constructor (
        /**
         * @summary `noASDU`.
         * @public
         * @readonly
         */
        readonly noASDU: INTEGER,
        /**
         * @summary `seqASDU`.
         * @public
         * @readonly
         */
        readonly seqASDU: ASDU[]
    ) {}

    /**
     * @summary Restructures an object into a SavPdu
     * @description
     * 
     * This takes an `object` and converts it to a `SavPdu`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SavPdu`.
     * @returns {SavPdu}
     */
    public static _from_object (_o: { [_K in keyof (SavPdu)]: (SavPdu)[_K] }): SavPdu {
        return new SavPdu(_o.noASDU, _o.seqASDU);
    }


}

/**
 * @summary The Leading Root Component Types of SavPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SavPdu: $.ComponentSpec[] = [
    new $.ComponentSpec("noASDU", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("seqASDU", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SavPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SavPdu: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SavPdu
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SavPdu: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SavPdu: $.ASN1Decoder<SavPdu> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SavPdu
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SavPdu (el: _Element): SavPdu {
    if (!_cached_decoder_for_SavPdu) { _cached_decoder_for_SavPdu = function (el: _Element): SavPdu {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("SavPdu contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "noASDU";
    sequence[1].name = "seqASDU";
    let noASDU!: INTEGER;
    let seqASDU!: ASDU[];
    noASDU = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    seqASDU = $._decode_implicit<ASDU[]>(() => $._decodeSequenceOf<ASDU>(() => _decode_ASDU))(sequence[1]);
    return new SavPdu(
        noASDU,
        seqASDU,

    );
}; }
    return _cached_decoder_for_SavPdu(el);
}

let _cached_encoder_for_SavPdu: $.ASN1Encoder<SavPdu> | null = null;

/**
 * @summary Encodes a(n) SavPdu into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SavPdu, encoded as an ASN.1 Element.
 */
export
function _encode_SavPdu (value: SavPdu, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SavPdu) { _cached_encoder_for_SavPdu = function (value: SavPdu, elGetter: $.ASN1Encoder<SavPdu>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.noASDU, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<ASDU>(() => _encode_ASDU, $.BER), $.BER)(value.seqASDU, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SavPdu(value, elGetter);
}


/* eslint-enable */
