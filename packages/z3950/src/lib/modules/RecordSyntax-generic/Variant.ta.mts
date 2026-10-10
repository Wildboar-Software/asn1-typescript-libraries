/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Variant_triples_Item, _decode_Variant_triples_Item, _encode_Variant_triples_Item } from "../RecordSyntax-generic/Variant-triples-Item.ta.mjs";


/**
 * @summary Variant
 * @description
 * 
 * A variant specification: triples of class, type, and value, qualified by a
 * variant set (ANSI/NISO Z39.50-2003, RET.2.3, Appendix VAR, ASN1.6).
 * 
 * The same value is a variantRequest (the form the client asks for), an
 * appliedVariant (the form the server used), or one supportedVariant (a form
 * the server says it can supply).
 * 
 * Triples that omit a set id use the set on this value. If that is omitted too,
 * the default applies. On a returned record that default is tagSet-M
 * `defaultVariantSetId` (RET.3.4.1.2.4). Variant-1 is `{Z39-50-variantSet 1}`
 * (`1.2.840.10003.12.1`).
 * 
 * Variant-1 classes (RET.3.3.1). Each may appear on a request, an applied
 * variant, or a supported variant unless noted. Appendix VAR lists every type
 * and its datatype.
 * 
 * Class 1 type 1 is a transient variant id (octets) for this Z-association. The
 * client may send that id later instead of repeating the other triples, and may
 * add triples that override parameters (RET.3.3.2).
 * 
 * Class 2 is the body-part type. Type 1 is an IANA type and subtype, such as
 * `text/xml`. Type 2 is a Z39.50 type, with an optional subtype. Type 3 is
 * bilateral. Type 4 is an object identifier, for example MARC21
 * `1.2.840.10003.5.10` or PDF `1.2.840.10003.5.109.1`.
 * 
 * Class 3 is formatting: line length, lines per page, font, margins, and the
 * other presentation parameters in Appendix VAR. SUTRS recommends 72 characters
 * per line unless a variant request sets another maximum (REC.2).
 * 
 * Class 4 is language and character set. Language is an ANSI/NISO Z39.53-1994
 * string. Type 2 is a registration number from the ISO international register
 * of character sets.
 * 
 * Class 5 is a fragment. On a request, type 1 is 1 start, 2 next, 3 previous, 4
 * current, or 5 last. RET.3.3.1.5's example `(5,1,3)` is previous, which fixes
 * that order. Types 3 and 4, or 3 and 5, with optional type 6, request a start
 * and end, or a start and length, and a step. Together with a token they
 * qualify the fragment type 1 selected. On an applied variant, type 2 reports
 * where the fragment sits. RET.3.3.1.5 lists the states in this order: start
 * (from the beginning, but not the whole element), middle, end, endForNow (at
 * the current end, though the element may still grow), and whole. The appendix
 * table prints those names as one integer and does not repeat the numbers. Type
 * 7 is a server token for the fragment.
 * 
 * Class 6 is metadata the client wants, and is legal only on a request. Type 1
 * (cost) and type 2 (size) take a unit, or null. Type 3 asks for
 * variant-specific hits; type 4 asks for hits that are not variant-specific.
 * Type 5 asks for the variant list, which comes back on the GRS-1 element, not
 * inside the applied variant. Type 6 asks whether this variant is supported;
 * the server answers with class 7 type 5, true or false, and may supply a
 * variant id. Type 7 is a document descriptor, type 8 is surrogate information,
 * type 998 is all metadata, and type 999 is other metadata identified by an
 * object identifier. Those carry null, except type 999. Pair a metadata request
 * with class 9 type 1 when no element data should be returned.
 * 
 * Class 7 is metadata the server returns, on an applied or supported variant:
 * cost, size, integrity, separability, whether the variant is supported, and a
 * text description.
 * 
 * Class 8 is highlighting, instead of or in addition to hit vectors. A request
 * may give prefix and postfix strings to insert around hits, or type 3 (null)
 * to let the server choose the strings. An applied variant names the strings it
 * inserted (RET.3.3.1.8).
 * 
 * Class 9 type 1 (request only, null) means return no data. Type 2 (request
 * only) asks for the element in a stated unit. Type 3 is a version string. Type
 * 4 (null) asks for a prose description when a media type and a size are not
 * enough for the user. Type 5 (null) means the content is a pointer, such as a
 * URL, rather than the data itself: requested, actually returned, or merely
 * available.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Variant ::= SEQUENCE {
 *     globalVariantSetId  [1] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *     -- Applies to the triples below, when variantSetId omitted.
 *     -- If globalVariantSetId omitted, default applies.
 *     -- Default may be provided by the tagSet-M element defaultVariantSetId.
 *     triples             [2] IMPLICIT SEQUENCE OF SEQUENCE {
 *         variantSetId        [0] IMPLICIT OBJECT IDENTIFIER OPTIONAL,
 *         -- If omitted, globalVariantSetId (above) applies,
 *         -- unless that too is omitted, in which case, default used.
 *         class               [1] IMPLICIT INTEGER,
 *         type                [2] IMPLICIT INTEGER,
 *         value               [3] CHOICE {
 *             integer             INTEGER,
 *             string              InternationalString,
 *             octets              OCTET STRING,
 *             oid                 OBJECT IDENTIFIER,
 *             bool                BOOLEAN,
 *             null                NULL,
 *             -- Following need context tags:
 *             unit                [1] IMPLICIT Unit,
 *             valueAndUnit        [2] IMPLICIT IntUnit
 *         }
 *     }
 * }
 * ```
 * 
 * @class
 */
export
class Variant {
    /**
     * @summary `globalVariantSetId`.
     * @description
     * 
     * Variant set for triples that omit their own set id. If this is omitted
     * too, the default applies (ASN1.6). On a returned record the default is
     * tagSet-M `defaultVariantSetId` (RET.3.4.1.2.4).
     * @public
     * @readonly
     */
    readonly globalVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>;
    /**
     * @summary `triples`.
     * @description
     * 
     * The variant specifiers. Each is one class, one type defined in that
     * class, and one value defined for that type (Appendix VAR, RET.2.3).
     * @public
     * @readonly
     */
    readonly triples: Variant_triples_Item[];

    constructor (
        globalVariantSetId: OPTIONAL<OBJECT_IDENTIFIER>,
        triples: Variant_triples_Item[]
    ) {
        this.globalVariantSetId = globalVariantSetId;
        this.triples = triples;
    }

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
    const _components: _Element[] = new Array(2);
    let _components_i = 0;
    if (value.globalVariantSetId !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.globalVariantSetId, $.BER);
    }
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<Variant_triples_Item>(() => _encode_Variant_triples_Item, $.BER), $.BER)(value.triples, $.BER);
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_Variant(value, elGetter);
}


/* eslint-enable */
