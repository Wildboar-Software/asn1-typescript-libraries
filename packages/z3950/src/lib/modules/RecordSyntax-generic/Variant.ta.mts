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
import { Variant_triples_Item, _decode_Variant_triples_Item, _encode_Variant_triples_Item } from "../RecordSyntax-generic/Variant-triples-Item.ta.mjs";
// export { Variant_triples_Item, _decode_Variant_triples_Item, _encode_Variant_triples_Item } from "../RecordSyntax-generic/Variant-triples-Item.ta.mjs";


/**
 * @summary Variant
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variant ::= SEQUENCE{
 *      globalVariantSetId   [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *                                 -- Applies to the triples below, when
 *                                 -- variantSetId omitted. If
 *                                 -- globalVariantSetId omitted, default applies.
 *                                 -- Default may be provided by the tagSet-M
 *                                 -- element defaultVariantSetId.
 *    triples                [2] IMPLICIT SEQUENCE OF SEQUENCE{
 *                                 variantSetId    [0]   IMPLICIT OBJECT IDENTIFIER
 *                                                         OPTIONAL,
 *                                                        -- If omitted,
 *                                                        -- globalVariantSetId
 *                                                        -- (above) applies, unless
 *                                                        -- that too is omitted, in
 *                                                        -- which case, default
 *                                                        -- used.
 *                                 class           [1]    IMPLICIT INTEGER,
 *                                 type            [2]    IMPLICIT INTEGER,
 *                                 value           [3]    CHOICE{
 *                                                           integer INTEGER,
 *                                                           string InternationalString,
 *                                                           octetString OCTET STRING,
 *                                                           oid OBJECT IDENTIFIER,
 *                                                           boolean BOOLEAN,
 *                                                           null NULL,
 *                                        -- Following need context tags:
 *                                           unit                [1] IMPLICIT Unit, 
 *                                           valueAndUnit        [2] IMPLICIT
 *                                                                      IntUnit}}}
 * ```
 * 
 * @class
 */
export
class Variant {
    constructor (
        /**
         * @summary `globalVariantSetId`.
         * @public
         * @readonly
         */
        readonly globalVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>,
        /**
         * @summary `triples`.
         * @public
         * @readonly
         */
        readonly triples: Variant_triples_Item[]
    ) {}

    /**
     * @summary Restructures an object into a Variant
     * @description
     * 
     * This takes an `object` and converts it to a `Variant`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Variant`.
     * @returns {Variant}
     */
    public static _from_object (_o: { [_K in keyof (Variant)]: (Variant)[_K] }): Variant {
        return new Variant(_o.globalVariantSetId, _o.triples);
    }


}

/**
 * @summary The Leading Root Component Types of Variant
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Variant: $.ComponentSpec[] = [
    new $.ComponentSpec("globalVariantSetId", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("triples", false, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of Variant
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Variant: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Variant
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Variant: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Variant: $.ASN1Decoder<Variant> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Variant
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Variant (el: _Element): Variant {
    if (!_cached_decoder_for_Variant) { _cached_decoder_for_Variant = function (el: _Element): Variant {
    let globalVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    let triples!: Variant_triples_Item[];
    const callbacks: $.DecodingMap = {
        "globalVariantSetId": (_el: _Element): void => { globalVariantSetId = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "triples": (_el: _Element): void => { triples = $._decode_implicit<Variant_triples_Item[]>(() => $._decodeSequenceOf<Variant_triples_Item>(() => _decode_Variant_triples_Item))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_Variant,
        _extension_additions_list_spec_for_Variant,
        _root_component_type_list_2_spec_for_Variant,
        undefined,
    );
    return new Variant(
        globalVariantSetId,
        triples
    );
}; }
    return _cached_decoder_for_Variant(el);
}

let _cached_encoder_for_Variant: $.ASN1Encoder<Variant> | null = null;

/**
 * @summary Encodes a(n) Variant into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Variant, encoded as an ASN.1 Element.
 */
export
function _encode_Variant (value: Variant, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Variant) { _cached_encoder_for_Variant = function (value: Variant, elGetter: $.ASN1Encoder<Variant>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.globalVariantSetId === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.globalVariantSetId, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Variant_triples_Item>(() => _encode_Variant_triples_Item, $.BER), $.BER)(value.triples, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_Variant(value, elGetter);
}


/* eslint-enable */
