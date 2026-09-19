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
 * @summary IRI_to_CC_Correlation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IRI-to-CC-Correlation ::= SEQUENCE { -- correlates IRI to Content
 *  cc [0] SET OF OCTET STRING,-- correlates IRI to multiple CCs
 *  iri [1] OCTET STRING OPTIONAL
 *  -- correlates IRI to CC with signaling
 * }
 * ```
 * 
 * @class
 */
export
class IRI_to_CC_Correlation {
    constructor (
        /**
         * @summary `cc`.
         * @public
         * @readonly
         */
        readonly cc: OCTET_STRING[],
        /**
         * @summary `iri`.
         * @public
         * @readonly
         */
        readonly iri: OPTIONAL<OCTET_STRING>
    ) {}

    /**
     * @summary Restructures an object into a IRI_to_CC_Correlation
     * @description
     * 
     * This takes an `object` and converts it to a `IRI_to_CC_Correlation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `IRI_to_CC_Correlation`.
     * @returns {IRI_to_CC_Correlation}
     */
    public static _from_object (_o: { [_K in keyof (IRI_to_CC_Correlation)]: (IRI_to_CC_Correlation)[_K] }): IRI_to_CC_Correlation {
        return new IRI_to_CC_Correlation(_o.cc, _o.iri);
    }


}

/**
 * @summary The Leading Root Component Types of IRI_to_CC_Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_IRI_to_CC_Correlation: $.ComponentSpec[] = [
    new $.ComponentSpec("cc", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("iri", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of IRI_to_CC_Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_IRI_to_CC_Correlation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of IRI_to_CC_Correlation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_IRI_to_CC_Correlation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_IRI_to_CC_Correlation: $.ASN1Decoder<IRI_to_CC_Correlation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IRI_to_CC_Correlation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IRI_to_CC_Correlation (el: _Element): IRI_to_CC_Correlation {
    if (!_cached_decoder_for_IRI_to_CC_Correlation) { _cached_decoder_for_IRI_to_CC_Correlation = function (el: _Element): IRI_to_CC_Correlation {
    let cc!: OCTET_STRING[];
    let iri: OPTIONAL<OCTET_STRING>;
    const callbacks: $.DecodingMap = {
        "cc": (_el: _Element): void => { cc = $._decode_implicit<OCTET_STRING[]>(() => $._decodeSetOf<OCTET_STRING>(() => $._decodeOctetString))(_el); },
        "iri": (_el: _Element): void => { iri = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_IRI_to_CC_Correlation,
        _extension_additions_list_spec_for_IRI_to_CC_Correlation,
        _root_component_type_list_2_spec_for_IRI_to_CC_Correlation,
        undefined,
    );
    return new IRI_to_CC_Correlation(
        cc,
        iri
    );
}; }
    return _cached_decoder_for_IRI_to_CC_Correlation(el);
}

let _cached_encoder_for_IRI_to_CC_Correlation: $.ASN1Encoder<IRI_to_CC_Correlation> | null = null;

/**
 * @summary Encodes a(n) IRI_to_CC_Correlation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IRI_to_CC_Correlation, encoded as an ASN.1 Element.
 */
export
function _encode_IRI_to_CC_Correlation (value: IRI_to_CC_Correlation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IRI_to_CC_Correlation) { _cached_encoder_for_IRI_to_CC_Correlation = function (value: IRI_to_CC_Correlation, elGetter: $.ASN1Encoder<IRI_to_CC_Correlation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeSetOf<OCTET_STRING>(() => $._encodeOctetString, $.BER), $.BER)(value.cc, $.BER),
            /* IF_ABSENT  */ ((value.iri === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeOctetString, $.BER)(value.iri, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_IRI_to_CC_Correlation(value, elGetter);
}


/* eslint-enable */
