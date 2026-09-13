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
import { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";
// export { DfrEntryName, _decode_DfrEntryName, _encode_DfrEntryName } from "../DFRAbstractService/DfrEntryName.ta.mjs";


/**
 * @summary SearchDomain_Item_scope
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchDomain-Item-scope ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SearchDomain_Item_scope {
    constructor (
        /**
         * @summary `root`.
         * @public
         * @readonly
         */
        readonly root: DfrEntryName,
        /**
         * @summary `descent_depth`.
         * @public
         * @readonly
         */
        readonly descent_depth: OPTIONAL<INTEGER>,
        /**
         * @summary `dereferencing_depth`.
         * @public
         * @readonly
         */
        readonly dereferencing_depth: OPTIONAL<INTEGER>
    ) {}

    /**
     * @summary Restructures an object into a SearchDomain_Item_scope
     * @description
     * 
     * This takes an `object` and converts it to a `SearchDomain_Item_scope`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchDomain_Item_scope`.
     * @returns {SearchDomain_Item_scope}
     */
    public static _from_object (_o: { [_K in keyof (SearchDomain_Item_scope)]: (SearchDomain_Item_scope)[_K] }): SearchDomain_Item_scope {
        return new SearchDomain_Item_scope(_o.root, _o.descent_depth, _o.dereferencing_depth);
    }

    /**
     * @summary Getter that returns the default value for `dereferencing_depth`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_dereferencing_depth () { return 0; }
}

/**
 * @summary The Leading Root Component Types of SearchDomain_Item_scope
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchDomain_Item_scope: $.ComponentSpec[] = [
    new $.ComponentSpec("root", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("descent-depth", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("dereferencing-depth", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of SearchDomain_Item_scope
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchDomain_Item_scope: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchDomain_Item_scope
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchDomain_Item_scope: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchDomain_Item_scope: $.ASN1Decoder<SearchDomain_Item_scope> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchDomain_Item_scope
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchDomain_Item_scope (el: _Element): SearchDomain_Item_scope {
    if (!_cached_decoder_for_SearchDomain_Item_scope) { _cached_decoder_for_SearchDomain_Item_scope = function (el: _Element): SearchDomain_Item_scope {
    let root!: DfrEntryName;
    let descent_depth: OPTIONAL<INTEGER>;
    let dereferencing_depth: OPTIONAL<INTEGER> = SearchDomain_Item_scope._default_value_for_dereferencing_depth;
    const callbacks: $.DecodingMap = {
        "root": (_el: _Element): void => { root = $._decode_explicit<DfrEntryName>(() => _decode_DfrEntryName)(_el); },
        "descent-depth": (_el: _Element): void => { descent_depth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "dereferencing-depth": (_el: _Element): void => { dereferencing_depth = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchDomain_Item_scope,
        _extension_additions_list_spec_for_SearchDomain_Item_scope,
        _root_component_type_list_2_spec_for_SearchDomain_Item_scope,
        undefined,
    );
    return new SearchDomain_Item_scope(
        root,
        descent_depth,
        dereferencing_depth
    );
}; }
    return _cached_decoder_for_SearchDomain_Item_scope(el);
}

let _cached_encoder_for_SearchDomain_Item_scope: $.ASN1Encoder<SearchDomain_Item_scope> | null = null;

/**
 * @summary Encodes a(n) SearchDomain_Item_scope into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchDomain_Item_scope, encoded as an ASN.1 Element.
 */
export
function _encode_SearchDomain_Item_scope (value: SearchDomain_Item_scope, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchDomain_Item_scope) { _cached_encoder_for_SearchDomain_Item_scope = function (value: SearchDomain_Item_scope, elGetter: $.ASN1Encoder<SearchDomain_Item_scope>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 0, () => _encode_DfrEntryName, $.BER)(value.root, $.BER),
            /* IF_ABSENT  */ ((value.descent_depth === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => $._encodeInteger, $.BER)(value.descent_depth, $.BER)),
            /* IF_DEFAULT */ (value.dereferencing_depth === undefined || $.deepEq(value.dereferencing_depth, SearchDomain_Item_scope._default_value_for_dereferencing_depth) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeInteger, $.BER)(value.dereferencing_depth, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SearchDomain_Item_scope(value, elGetter);
}


/* eslint-enable */
