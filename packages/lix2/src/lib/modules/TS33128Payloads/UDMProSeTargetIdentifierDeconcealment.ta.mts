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
import { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
// export { SUPI, _decode_SUPI, _encode_SUPI } from "../TS33128Payloads/SUPI.ta.mjs";
import { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";
// export { SUCI, _decode_SUCI, _encode_SUCI } from "../TS33128Payloads/SUCI.ta.mjs";


/**
 * @summary UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * UDMProSeTargetIdentifierDeconcealment ::= SEQUENCE
 * {
 *     sUPI                        [1] SUPI,
 *     sUCI                        [2] SUCI
 * }
 * ```
 * 
 * @class
 */
export
class UDMProSeTargetIdentifierDeconcealment {
    constructor (
        /**
         * @summary `sUPI`.
         * @public
         * @readonly
         */
        readonly sUPI: SUPI,
        /**
         * @summary `sUCI`.
         * @public
         * @readonly
         */
        readonly sUCI: SUCI
    ) {}

    /**
     * @summary Restructures an object into a UDMProSeTargetIdentifierDeconcealment
     * @description
     * 
     * This takes an `object` and converts it to a `UDMProSeTargetIdentifierDeconcealment`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `UDMProSeTargetIdentifierDeconcealment`.
     * @returns {UDMProSeTargetIdentifierDeconcealment}
     */
    public static _from_object (_o: { [_K in keyof (UDMProSeTargetIdentifierDeconcealment)]: (UDMProSeTargetIdentifierDeconcealment)[_K] }): UDMProSeTargetIdentifierDeconcealment {
        return new UDMProSeTargetIdentifierDeconcealment(_o.sUPI, _o.sUCI);
    }


}

/**
 * @summary The Leading Root Component Types of UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_UDMProSeTargetIdentifierDeconcealment: $.ComponentSpec[] = [
    new $.ComponentSpec("sUPI", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("sUCI", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_UDMProSeTargetIdentifierDeconcealment: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of UDMProSeTargetIdentifierDeconcealment
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_UDMProSeTargetIdentifierDeconcealment: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_UDMProSeTargetIdentifierDeconcealment: $.ASN1Decoder<UDMProSeTargetIdentifierDeconcealment> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) UDMProSeTargetIdentifierDeconcealment
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_UDMProSeTargetIdentifierDeconcealment (el: _Element): UDMProSeTargetIdentifierDeconcealment {
    if (!_cached_decoder_for_UDMProSeTargetIdentifierDeconcealment) { _cached_decoder_for_UDMProSeTargetIdentifierDeconcealment = function (el: _Element): UDMProSeTargetIdentifierDeconcealment {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("UDMProSeTargetIdentifierDeconcealment contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "sUPI";
    sequence[1].name = "sUCI";
    let sUPI!: SUPI;
    let sUCI!: SUCI;
    sUPI = $._decode_explicit<SUPI>(() => _decode_SUPI)(sequence[0]);
    sUCI = $._decode_implicit<SUCI>(() => _decode_SUCI)(sequence[1]);
    return new UDMProSeTargetIdentifierDeconcealment(
        sUPI,
        sUCI,

    );
}; }
    return _cached_decoder_for_UDMProSeTargetIdentifierDeconcealment(el);
}

let _cached_encoder_for_UDMProSeTargetIdentifierDeconcealment: $.ASN1Encoder<UDMProSeTargetIdentifierDeconcealment> | null = null;

/**
 * @summary Encodes a(n) UDMProSeTargetIdentifierDeconcealment into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The UDMProSeTargetIdentifierDeconcealment, encoded as an ASN.1 Element.
 */
export
function _encode_UDMProSeTargetIdentifierDeconcealment (value: UDMProSeTargetIdentifierDeconcealment, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_UDMProSeTargetIdentifierDeconcealment) { _cached_encoder_for_UDMProSeTargetIdentifierDeconcealment = function (value: UDMProSeTargetIdentifierDeconcealment, elGetter: $.ASN1Encoder<UDMProSeTargetIdentifierDeconcealment>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_SUPI, $.BER)(value.sUPI, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_SUCI, $.BER)(value.sUCI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_UDMProSeTargetIdentifierDeconcealment(value, elGetter);
}


/* eslint-enable */
