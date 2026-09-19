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
import { EXTERNALt_encoding, _decode_EXTERNALt_encoding, _encode_EXTERNALt_encoding } from "../XDLMS-1/EXTERNALt-encoding.ta.mjs";
// export { EXTERNALt_encoding, _decode_EXTERNALt_encoding, _encode_EXTERNALt_encoding } from "../XDLMS-1/EXTERNALt-encoding.ta.mjs";


/**
 * @summary EXTERNALt
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EXTERNALt ::= [UNIVERSAL 8] IMPLICIT SEQUENCE
 *      {
 *       direct-reference  OBJECT IDENTIFIER OPTIONAL,
 *       indirect-reference  INTEGER OPTIONAL,
 *       data-value-descriptor  ObjectDescriptor  OPTIONAL,
 *       encoding  CHOICE
 *                   {single-ASN1-type  [0] IMPLICIT OCTET STRING, --ANY,
 *                    octet-aligned     [1] IMPLICIT OCTET STRING,
 *                    arbitrary         [2] IMPLICIT BIT STRING}
 *      }
 * ```
 * 
 * @class
 */
export
class EXTERNALt {
    constructor (
        /**
         * @summary `direct_reference`.
         * @public
         * @readonly
         */
        readonly direct_reference: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `indirect_reference`.
         * @public
         * @readonly
         */
        readonly indirect_reference: OPTIONAL<INTEGER>,
        /**
         * @summary `data_value_descriptor`.
         * @public
         * @readonly
         */
        readonly data_value_descriptor: OPTIONAL<ObjectDescriptor>,
        /**
         * @summary `encoding`.
         * @public
         * @readonly
         */
        readonly encoding: EXTERNALt_encoding
    ) {}

    /**
     * @summary Restructures an object into a EXTERNALt
     * @description
     * 
     * This takes an `object` and converts it to a `EXTERNALt`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EXTERNALt`.
     * @returns {EXTERNALt}
     */
    public static _from_object (_o: { [_K in keyof (EXTERNALt)]: (EXTERNALt)[_K] }): EXTERNALt {
        return new EXTERNALt(_o.direct_reference, _o.indirect_reference, _o.data_value_descriptor, _o.encoding);
    }


}

/**
 * @summary The Leading Root Component Types of EXTERNALt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EXTERNALt: $.ComponentSpec[] = [
    new $.ComponentSpec("direct-reference", true, $.hasTag(_TagClass.universal, 6)),
    new $.ComponentSpec("indirect-reference", true, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("data-value-descriptor", true, $.hasTag(_TagClass.universal, 7)),
    new $.ComponentSpec("encoding", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of EXTERNALt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EXTERNALt: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EXTERNALt
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EXTERNALt: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EXTERNALt: $.ASN1Decoder<EXTERNALt> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EXTERNALt
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EXTERNALt (el: _Element): EXTERNALt {
    if (!_cached_decoder_for_EXTERNALt) { _cached_decoder_for_EXTERNALt = $._decode_implicit<EXTERNALt>(() => function (el: _Element): EXTERNALt {
    let direct_reference: OPTIONAL<OBJECT_IDENTIFIER>;
    let indirect_reference: OPTIONAL<INTEGER>;
    let data_value_descriptor: OPTIONAL<ObjectDescriptor>;
    let encoding!: EXTERNALt_encoding;
    const callbacks: $.DecodingMap = {
        "direct-reference": (_el: _Element): void => { direct_reference = $._decodeObjectIdentifier(_el); },
        "indirect-reference": (_el: _Element): void => { indirect_reference = $._decodeInteger(_el); },
        "data-value-descriptor": (_el: _Element): void => { data_value_descriptor = $._decodeObjectDescriptor(_el); },
        "encoding": (_el: _Element): void => { encoding = _decode_EXTERNALt_encoding(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EXTERNALt,
        _extension_additions_list_spec_for_EXTERNALt,
        _root_component_type_list_2_spec_for_EXTERNALt,
        undefined,
    );
    return new EXTERNALt(
        direct_reference,
        indirect_reference,
        data_value_descriptor,
        encoding
    );
}); }
    return _cached_decoder_for_EXTERNALt(el);
}

let _cached_encoder_for_EXTERNALt: $.ASN1Encoder<EXTERNALt> | null = null;

/**
 * @summary Encodes a(n) EXTERNALt into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EXTERNALt, encoded as an ASN.1 Element.
 */
export
function _encode_EXTERNALt (value: EXTERNALt, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EXTERNALt) { _cached_encoder_for_EXTERNALt = $._encode_implicit(_TagClass.universal, 8, () => function (value: EXTERNALt, elGetter: $.ASN1Encoder<EXTERNALt>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.direct_reference === undefined) ? undefined : $._encodeObjectIdentifier(value.direct_reference, $.BER)),
            /* IF_ABSENT  */ ((value.indirect_reference === undefined) ? undefined : $._encodeInteger(value.indirect_reference, $.BER)),
            /* IF_ABSENT  */ ((value.data_value_descriptor === undefined) ? undefined : $._encodeObjectDescriptor(value.data_value_descriptor, $.BER)),
            /* REQUIRED   */ _encode_EXTERNALt_encoding(value.encoding, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_EXTERNALt(value, elGetter);
}


/* eslint-enable */
