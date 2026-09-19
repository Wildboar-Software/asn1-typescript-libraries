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
 * @summary DiagFormat_recordSyntax
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * DiagFormat-recordSyntax ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class DiagFormat_recordSyntax {
    constructor (
        /**
         * @summary `unsupportedSyntax`.
         * @public
         * @readonly
         */
        readonly unsupportedSyntax: OBJECT_IDENTIFIER,
        /**
         * @summary `suggestedAlternatives`.
         * @public
         * @readonly
         */
        readonly suggestedAlternatives: OPTIONAL<OBJECT_IDENTIFIER[]>
    ) {}

    /**
     * @summary Restructures an object into a DiagFormat_recordSyntax
     * @description
     * 
     * This takes an `object` and converts it to a `DiagFormat_recordSyntax`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DiagFormat_recordSyntax`.
     * @returns {DiagFormat_recordSyntax}
     */
    public static _from_object (_o: { [_K in keyof (DiagFormat_recordSyntax)]: (DiagFormat_recordSyntax)[_K] }): DiagFormat_recordSyntax {
        return new DiagFormat_recordSyntax(_o.unsupportedSyntax, _o.suggestedAlternatives);
    }


}

/**
 * @summary The Leading Root Component Types of DiagFormat_recordSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_DiagFormat_recordSyntax: $.ComponentSpec[] = [
    new $.ComponentSpec("unsupportedSyntax", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("suggestedAlternatives", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of DiagFormat_recordSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_DiagFormat_recordSyntax: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of DiagFormat_recordSyntax
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_DiagFormat_recordSyntax: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_DiagFormat_recordSyntax: $.ASN1Decoder<DiagFormat_recordSyntax> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DiagFormat_recordSyntax
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_DiagFormat_recordSyntax (el: _Element): DiagFormat_recordSyntax {
    if (!_cached_decoder_for_DiagFormat_recordSyntax) { _cached_decoder_for_DiagFormat_recordSyntax = function (el: _Element): DiagFormat_recordSyntax {
    let unsupportedSyntax!: OBJECT_IDENTIFIER;
    let suggestedAlternatives: OPTIONAL<OBJECT_IDENTIFIER[]>;
    const callbacks: $.DecodingMap = {
        "unsupportedSyntax": (_el: _Element): void => { unsupportedSyntax = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "suggestedAlternatives": (_el: _Element): void => { suggestedAlternatives = $._decode_implicit<OBJECT_IDENTIFIER[]>(() => $._decodeSequenceOf<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_DiagFormat_recordSyntax,
        _extension_additions_list_spec_for_DiagFormat_recordSyntax,
        _root_component_type_list_2_spec_for_DiagFormat_recordSyntax,
        undefined,
    );
    return new DiagFormat_recordSyntax(
        unsupportedSyntax,
        suggestedAlternatives
    );
}; }
    return _cached_decoder_for_DiagFormat_recordSyntax(el);
}

let _cached_encoder_for_DiagFormat_recordSyntax: $.ASN1Encoder<DiagFormat_recordSyntax> | null = null;

/**
 * @summary Encodes a(n) DiagFormat_recordSyntax into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DiagFormat_recordSyntax, encoded as an ASN.1 Element.
 */
export
function _encode_DiagFormat_recordSyntax (value: DiagFormat_recordSyntax, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_DiagFormat_recordSyntax) { _cached_encoder_for_DiagFormat_recordSyntax = function (value: DiagFormat_recordSyntax, elGetter: $.ASN1Encoder<DiagFormat_recordSyntax>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.unsupportedSyntax, $.BER),
            /* IF_ABSENT  */ ((value.suggestedAlternatives === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<OBJECT_IDENTIFIER>(() => $._encodeObjectIdentifier, $.BER), $.BER)(value.suggestedAlternatives, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_DiagFormat_recordSyntax(value, elGetter);
}


/* eslint-enable */
