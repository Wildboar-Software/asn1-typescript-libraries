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
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary SearchKey
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SearchKey ::= SEQUENCE {
 *   searchKey     [0] IMPLICIT InternationalString,
 *   description   [1] IMPLICIT HumanString OPTIONAL }
 * ```
 * 
 * @class
 */
export
class SearchKey {
    constructor (
        /**
         * @summary `searchKey`.
         * @public
         * @readonly
         */
        readonly searchKey: InternationalString,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>
    ) {}

    /**
     * @summary Restructures an object into a SearchKey
     * @description
     * 
     * This takes an `object` and converts it to a `SearchKey`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SearchKey`.
     * @returns {SearchKey}
     */
    public static _from_object (_o: { [_K in keyof (SearchKey)]: (SearchKey)[_K] }): SearchKey {
        return new SearchKey(_o.searchKey, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of SearchKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SearchKey: $.ComponentSpec[] = [
    /* FIXME: searchKey COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of SearchKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SearchKey: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SearchKey
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SearchKey: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SearchKey: $.ASN1Decoder<SearchKey> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SearchKey
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SearchKey (el: _Element): SearchKey {
    if (!_cached_decoder_for_SearchKey) { _cached_decoder_for_SearchKey = function (el: _Element): SearchKey {
    let searchKey!: InternationalString;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "searchKey": (_el: _Element): void => { searchKey = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SearchKey,
        _extension_additions_list_spec_for_SearchKey,
        _root_component_type_list_2_spec_for_SearchKey,
        undefined,
    );
    return new SearchKey(
        searchKey,
        description
    );
}; }
    return _cached_decoder_for_SearchKey(el);
}

let _cached_encoder_for_SearchKey: $.ASN1Encoder<SearchKey> | null = null;

/**
 * @summary Encodes a(n) SearchKey into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SearchKey, encoded as an ASN.1 Element.
 */
export
function _encode_SearchKey (value: SearchKey, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SearchKey) { _cached_encoder_for_SearchKey = function (value: SearchKey, elGetter: $.ASN1Encoder<SearchKey>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_InternationalString, $.BER)(value.searchKey, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_HumanString, $.BER)(value.description, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SearchKey(value, elGetter);
}


/* eslint-enable */
