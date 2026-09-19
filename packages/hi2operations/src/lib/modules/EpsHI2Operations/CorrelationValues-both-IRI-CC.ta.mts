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
import { IRI_to_CC_Correlation, _decode_IRI_to_CC_Correlation, _encode_IRI_to_CC_Correlation } from "../EpsHI2Operations/IRI-to-CC-Correlation.ta.mjs";
// export { IRI_to_CC_Correlation, _decode_IRI_to_CC_Correlation, _encode_IRI_to_CC_Correlation } from "../EpsHI2Operations/IRI-to-CC-Correlation.ta.mjs";
import { IRI_to_IRI_Correlation, _decode_IRI_to_IRI_Correlation, _encode_IRI_to_IRI_Correlation } from "../EpsHI2Operations/IRI-to-IRI-Correlation.ta.mjs";
// export { IRI_to_IRI_Correlation, _decode_IRI_to_IRI_Correlation, _encode_IRI_to_IRI_Correlation } from "../EpsHI2Operations/IRI-to-IRI-Correlation.ta.mjs";


/**
 * @summary CorrelationValues_both_IRI_CC
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CorrelationValues-both-IRI-CC ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class CorrelationValues_both_IRI_CC {
    constructor (
        /**
         * @summary `iri_CC`.
         * @public
         * @readonly
         */
        readonly iri_CC: IRI_to_CC_Correlation,
        /**
         * @summary `iri_IRI`.
         * @public
         * @readonly
         */
        readonly iri_IRI: IRI_to_IRI_Correlation
    ) {}

    /**
     * @summary Restructures an object into a CorrelationValues_both_IRI_CC
     * @description
     * 
     * This takes an `object` and converts it to a `CorrelationValues_both_IRI_CC`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CorrelationValues_both_IRI_CC`.
     * @returns {CorrelationValues_both_IRI_CC}
     */
    public static _from_object (_o: { [_K in keyof (CorrelationValues_both_IRI_CC)]: (CorrelationValues_both_IRI_CC)[_K] }): CorrelationValues_both_IRI_CC {
        return new CorrelationValues_both_IRI_CC(_o.iri_CC, _o.iri_IRI);
    }


}

/**
 * @summary The Leading Root Component Types of CorrelationValues_both_IRI_CC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CorrelationValues_both_IRI_CC: $.ComponentSpec[] = [
    new $.ComponentSpec("iri-CC", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iri-IRI", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of CorrelationValues_both_IRI_CC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CorrelationValues_both_IRI_CC: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CorrelationValues_both_IRI_CC
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CorrelationValues_both_IRI_CC: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CorrelationValues_both_IRI_CC: $.ASN1Decoder<CorrelationValues_both_IRI_CC> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CorrelationValues_both_IRI_CC
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CorrelationValues_both_IRI_CC (el: _Element): CorrelationValues_both_IRI_CC {
    if (!_cached_decoder_for_CorrelationValues_both_IRI_CC) { _cached_decoder_for_CorrelationValues_both_IRI_CC = function (el: _Element): CorrelationValues_both_IRI_CC {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("CorrelationValues-both-IRI-CC contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "iri-CC";
    sequence[1].name = "iri-IRI";
    let iri_CC!: IRI_to_CC_Correlation;
    let iri_IRI!: IRI_to_IRI_Correlation;
    iri_CC = $._decode_implicit<IRI_to_CC_Correlation>(() => _decode_IRI_to_CC_Correlation)(sequence[0]);
    iri_IRI = $._decode_implicit<IRI_to_IRI_Correlation>(() => _decode_IRI_to_IRI_Correlation)(sequence[1]);
    return new CorrelationValues_both_IRI_CC(
        iri_CC,
        iri_IRI,

    );
}; }
    return _cached_decoder_for_CorrelationValues_both_IRI_CC(el);
}

let _cached_encoder_for_CorrelationValues_both_IRI_CC: $.ASN1Encoder<CorrelationValues_both_IRI_CC> | null = null;

/**
 * @summary Encodes a(n) CorrelationValues_both_IRI_CC into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CorrelationValues_both_IRI_CC, encoded as an ASN.1 Element.
 */
export
function _encode_CorrelationValues_both_IRI_CC (value: CorrelationValues_both_IRI_CC, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CorrelationValues_both_IRI_CC) { _cached_encoder_for_CorrelationValues_both_IRI_CC = function (value: CorrelationValues_both_IRI_CC, elGetter: $.ASN1Encoder<CorrelationValues_both_IRI_CC>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_IRI_to_CC_Correlation, $.BER)(value.iri_CC, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_IRI_to_IRI_Correlation, $.BER)(value.iri_IRI, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CorrelationValues_both_IRI_CC(value, elGetter);
}


/* eslint-enable */
