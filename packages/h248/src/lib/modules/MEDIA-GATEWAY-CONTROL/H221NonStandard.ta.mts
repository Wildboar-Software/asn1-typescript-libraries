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



/**
 * @summary H221NonStandard
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * H221NonStandard ::= SEQUENCE
 *     {
 *         t35CountryCode1                [0] INTEGER(0..255),
 *         t35CountryCode2                [1] INTEGER(0..255),    -- country, as per T.35
 *         t35Extension                [2] INTEGER(0..255),    -- assigned nationally
 *         manufacturerCode            [3] INTEGER(0..65535),    -- assigned nationally
 *         ...
 *     }
 * ```
 * 
 * @class
 */
export
class H221NonStandard {
    constructor (
        /**
         * @summary `t35CountryCode1`.
         * @public
         * @readonly
         */
        readonly t35CountryCode1: INTEGER,
        /**
         * @summary `t35CountryCode2`.
         * @public
         * @readonly
         */
        readonly t35CountryCode2: INTEGER,
        /**
         * @summary `t35Extension`.
         * @public
         * @readonly
         */
        readonly t35Extension: INTEGER,
        /**
         * @summary `manufacturerCode`.
         * @public
         * @readonly
         */
        readonly manufacturerCode: INTEGER,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a H221NonStandard
     * @description
     * 
     * This takes an `object` and converts it to a `H221NonStandard`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `H221NonStandard`.
     * @returns {H221NonStandard}
     */
    public static _from_object (_o: { [_K in keyof (H221NonStandard)]: (H221NonStandard)[_K] }): H221NonStandard {
        return new H221NonStandard(_o.t35CountryCode1, _o.t35CountryCode2, _o.t35Extension, _o.manufacturerCode, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of H221NonStandard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_H221NonStandard: $.ComponentSpec[] = [
    new $.ComponentSpec("t35CountryCode1", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("t35CountryCode2", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("t35Extension", false, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("manufacturerCode", false, $.hasTag(_TagClass.context, 3))
];

/**
 * @summary The Trailing Root Component Types of H221NonStandard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_H221NonStandard: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of H221NonStandard
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_H221NonStandard: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_H221NonStandard: $.ASN1Decoder<H221NonStandard> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) H221NonStandard
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_H221NonStandard (el: _Element): H221NonStandard {
    if (!_cached_decoder_for_H221NonStandard) { _cached_decoder_for_H221NonStandard = function (el: _Element): H221NonStandard {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 4) {
        throw new _ConstructionError("H221NonStandard contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "t35CountryCode1";
    sequence[1].name = "t35CountryCode2";
    sequence[2].name = "t35Extension";
    sequence[3].name = "manufacturerCode";
    let t35CountryCode1!: INTEGER;
    let t35CountryCode2!: INTEGER;
    let t35Extension!: INTEGER;
    let manufacturerCode!: INTEGER;
    t35CountryCode1 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[0]);
    t35CountryCode2 = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[1]);
    t35Extension = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[2]);
    manufacturerCode = $._decode_implicit<INTEGER>(() => $._decodeInteger)(sequence[3]);
    return new H221NonStandard(
        t35CountryCode1,
        t35CountryCode2,
        t35Extension,
        manufacturerCode,
        sequence.slice(4),
    );
}; }
    return _cached_decoder_for_H221NonStandard(el);
}

let _cached_encoder_for_H221NonStandard: $.ASN1Encoder<H221NonStandard> | null = null;

/**
 * @summary Encodes a(n) H221NonStandard into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The H221NonStandard, encoded as an ASN.1 Element.
 */
export
function _encode_H221NonStandard (value: H221NonStandard, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_H221NonStandard) { _cached_encoder_for_H221NonStandard = function (value: H221NonStandard, elGetter: $.ASN1Encoder<H221NonStandard>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.t35CountryCode1, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.t35CountryCode2, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.t35Extension, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 3, () => $._encodeInteger, $.BER)(value.manufacturerCode, $.BER)
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_H221NonStandard(value, elGetter);
}


/* eslint-enable */
