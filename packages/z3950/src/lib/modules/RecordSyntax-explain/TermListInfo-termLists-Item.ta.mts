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
import { TermListInfo_termLists_Item_searchCost, TermListInfo_termLists_Item_searchCost_optimized /* IMPORTED_LONG_NAMED_INTEGER */, optimized /* IMPORTED_SHORT_NAMED_INTEGER */, TermListInfo_termLists_Item_searchCost_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, TermListInfo_termLists_Item_searchCost_expensive /* IMPORTED_LONG_NAMED_INTEGER */, expensive /* IMPORTED_SHORT_NAMED_INTEGER */, TermListInfo_termLists_Item_searchCost_filter /* IMPORTED_LONG_NAMED_INTEGER */, filter /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TermListInfo_termLists_Item_searchCost, _encode_TermListInfo_termLists_Item_searchCost } from "../RecordSyntax-explain/TermListInfo-termLists-Item-searchCost.ta.mjs";
// export { TermListInfo_termLists_Item_searchCost, TermListInfo_termLists_Item_searchCost_optimized /* IMPORTED_LONG_NAMED_INTEGER */, optimized /* IMPORTED_SHORT_NAMED_INTEGER */, TermListInfo_termLists_Item_searchCost_normal /* IMPORTED_LONG_NAMED_INTEGER */, normal /* IMPORTED_SHORT_NAMED_INTEGER */, TermListInfo_termLists_Item_searchCost_expensive /* IMPORTED_LONG_NAMED_INTEGER */, expensive /* IMPORTED_SHORT_NAMED_INTEGER */, TermListInfo_termLists_Item_searchCost_filter /* IMPORTED_LONG_NAMED_INTEGER */, filter /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_TermListInfo_termLists_Item_searchCost, _encode_TermListInfo_termLists_Item_searchCost } from "../RecordSyntax-explain/TermListInfo-termLists-Item-searchCost.ta.mjs";


/**
 * @summary TermListInfo_termLists_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TermListInfo-termLists-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TermListInfo_termLists_Item {
    constructor (
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `title`.
         * @public
         * @readonly
         */
        readonly title: OPTIONAL<HumanString>,
        /**
         * @summary `searchCost`.
         * @public
         * @readonly
         */
        readonly searchCost: OPTIONAL<TermListInfo_termLists_Item_searchCost>,
        /**
         * @summary `scanable`.
         * @public
         * @readonly
         */
        readonly scanable: BOOLEAN,
        /**
         * @summary `broader`.
         * @public
         * @readonly
         */
        readonly broader: OPTIONAL<InternationalString[]>,
        /**
         * @summary `narrower`.
         * @public
         * @readonly
         */
        readonly narrower: OPTIONAL<InternationalString[]>
    ) {}

    /**
     * @summary Restructures an object into a TermListInfo_termLists_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TermListInfo_termLists_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TermListInfo_termLists_Item`.
     * @returns {TermListInfo_termLists_Item}
     */
    public static _from_object (_o: { [_K in keyof (TermListInfo_termLists_Item)]: (TermListInfo_termLists_Item)[_K] }): TermListInfo_termLists_Item {
        return new TermListInfo_termLists_Item(_o.name, _o.title, _o.searchCost, _o.scanable, _o.broader, _o.narrower);
    }


}

/**
 * @summary The Leading Root Component Types of TermListInfo_termLists_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TermListInfo_termLists_Item: $.ComponentSpec[] = [
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("title", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("searchCost", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("scanable", false, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("broader", true, $.hasTag(_TagClass.context, 5)),
    new $.ComponentSpec("narrower", true, $.hasTag(_TagClass.context, 6))
];

/**
 * @summary The Trailing Root Component Types of TermListInfo_termLists_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TermListInfo_termLists_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TermListInfo_termLists_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TermListInfo_termLists_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TermListInfo_termLists_Item: $.ASN1Decoder<TermListInfo_termLists_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TermListInfo_termLists_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TermListInfo_termLists_Item (el: _Element): TermListInfo_termLists_Item {
    if (!_cached_decoder_for_TermListInfo_termLists_Item) { _cached_decoder_for_TermListInfo_termLists_Item = function (el: _Element): TermListInfo_termLists_Item {
    let name!: InternationalString;
    let title: OPTIONAL<HumanString>;
    let searchCost: OPTIONAL<TermListInfo_termLists_Item_searchCost>;
    let scanable!: BOOLEAN;
    let broader: OPTIONAL<InternationalString[]>;
    let narrower: OPTIONAL<InternationalString[]>;
    const callbacks: $.DecodingMap = {
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "title": (_el: _Element): void => { title = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "searchCost": (_el: _Element): void => { searchCost = $._decode_implicit<TermListInfo_termLists_Item_searchCost>(() => _decode_TermListInfo_termLists_Item_searchCost)(_el); },
        "scanable": (_el: _Element): void => { scanable = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); },
        "broader": (_el: _Element): void => { broader = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "narrower": (_el: _Element): void => { narrower = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TermListInfo_termLists_Item,
        _extension_additions_list_spec_for_TermListInfo_termLists_Item,
        _root_component_type_list_2_spec_for_TermListInfo_termLists_Item,
        undefined,
    );
    return new TermListInfo_termLists_Item(
        name,
        title,
        searchCost,
        scanable,
        broader,
        narrower
    );
}; }
    return _cached_decoder_for_TermListInfo_termLists_Item(el);
}

let _cached_encoder_for_TermListInfo_termLists_Item: $.ASN1Encoder<TermListInfo_termLists_Item> | null = null;

/**
 * @summary Encodes a(n) TermListInfo_termLists_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TermListInfo_termLists_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TermListInfo_termLists_Item (value: TermListInfo_termLists_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TermListInfo_termLists_Item) { _cached_encoder_for_TermListInfo_termLists_Item = function (value: TermListInfo_termLists_Item, elGetter: $.ASN1Encoder<TermListInfo_termLists_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.title === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_HumanString, $.BER)(value.title, $.BER)),
            /* IF_ABSENT  */ ((value.searchCost === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_TermListInfo_termLists_Item_searchCost, $.BER)(value.searchCost, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 4, () => $._encodeBoolean, $.BER)(value.scanable, $.BER),
            /* IF_ABSENT  */ ((value.broader === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.broader, $.BER)),
            /* IF_ABSENT  */ ((value.narrower === undefined) ? undefined : $._encode_implicit(_TagClass.context, 6, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.narrower, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TermListInfo_termLists_Item(value, elGetter);
}


/* eslint-enable */
