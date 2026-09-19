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
import { PrimitiveDataType, PrimitiveDataType_octetString /* IMPORTED_LONG_NAMED_INTEGER */, octetString /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_numeric /* IMPORTED_LONG_NAMED_INTEGER */, numeric /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_date /* IMPORTED_LONG_NAMED_INTEGER */, date /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_external /* IMPORTED_LONG_NAMED_INTEGER */, external /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_trueOrFalse /* IMPORTED_LONG_NAMED_INTEGER */, trueOrFalse /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_oid /* IMPORTED_LONG_NAMED_INTEGER */, oid /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_intUnit /* IMPORTED_LONG_NAMED_INTEGER */, intUnit /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_empty /* IMPORTED_LONG_NAMED_INTEGER */, empty /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_noneOfTheAbove /* IMPORTED_LONG_NAMED_INTEGER */, noneOfTheAbove /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";
// export { PrimitiveDataType, PrimitiveDataType_octetString /* IMPORTED_LONG_NAMED_INTEGER */, octetString /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_numeric /* IMPORTED_LONG_NAMED_INTEGER */, numeric /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_date /* IMPORTED_LONG_NAMED_INTEGER */, date /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_external /* IMPORTED_LONG_NAMED_INTEGER */, external /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_string /* IMPORTED_LONG_NAMED_INTEGER */, string_ /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_trueOrFalse /* IMPORTED_LONG_NAMED_INTEGER */, trueOrFalse /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_oid /* IMPORTED_LONG_NAMED_INTEGER */, oid /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_intUnit /* IMPORTED_LONG_NAMED_INTEGER */, intUnit /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_empty /* IMPORTED_LONG_NAMED_INTEGER */, empty /* IMPORTED_SHORT_NAMED_INTEGER */, PrimitiveDataType_noneOfTheAbove /* IMPORTED_LONG_NAMED_INTEGER */, noneOfTheAbove /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_PrimitiveDataType, _encode_PrimitiveDataType } from "../RecordSyntax-explain/PrimitiveDataType.ta.mjs";


/**
 * @summary TagSetInfo_elements_Item
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TagSetInfo-elements-Item ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class TagSetInfo_elements_Item {
    constructor (
        /**
         * @summary `elementname`.
         * @public
         * @readonly
         */
        readonly elementname: InternationalString,
        /**
         * @summary `nicknames`.
         * @public
         * @readonly
         */
        readonly nicknames: OPTIONAL<InternationalString[]>,
        /**
         * @summary `elementTag`.
         * @public
         * @readonly
         */
        readonly elementTag: StringOrNumeric,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `dataType`.
         * @public
         * @readonly
         */
        readonly dataType: OPTIONAL<PrimitiveDataType>,
        /**
         * @summary `otherTagInfo`.
         * @public
         * @readonly
         */
        readonly otherTagInfo: OPTIONAL<OtherInformation>
    ) {}

    /**
     * @summary Restructures an object into a TagSetInfo_elements_Item
     * @description
     * 
     * This takes an `object` and converts it to a `TagSetInfo_elements_Item`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TagSetInfo_elements_Item`.
     * @returns {TagSetInfo_elements_Item}
     */
    public static _from_object (_o: { [_K in keyof (TagSetInfo_elements_Item)]: (TagSetInfo_elements_Item)[_K] }): TagSetInfo_elements_Item {
        return new TagSetInfo_elements_Item(_o.elementname, _o.nicknames, _o.elementTag, _o.description, _o.dataType, _o.otherTagInfo);
    }


}

/**
 * @summary The Leading Root Component Types of TagSetInfo_elements_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_TagSetInfo_elements_Item: $.ComponentSpec[] = [
    /* FIXME: elementname COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("nicknames", true, $.hasTag(_TagClass.context, 2)),
    /* FIXME: elementTag COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("dataType", true, $.hasTag(_TagClass.context, 5)),
    /* FIXME: otherTagInfo COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of TagSetInfo_elements_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_TagSetInfo_elements_Item: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of TagSetInfo_elements_Item
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_TagSetInfo_elements_Item: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_TagSetInfo_elements_Item: $.ASN1Decoder<TagSetInfo_elements_Item> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) TagSetInfo_elements_Item
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_TagSetInfo_elements_Item (el: _Element): TagSetInfo_elements_Item {
    if (!_cached_decoder_for_TagSetInfo_elements_Item) { _cached_decoder_for_TagSetInfo_elements_Item = function (el: _Element): TagSetInfo_elements_Item {
    let elementname!: InternationalString;
    let nicknames: OPTIONAL<InternationalString[]>;
    let elementTag!: StringOrNumeric;
    let description: OPTIONAL<HumanString>;
    let dataType: OPTIONAL<PrimitiveDataType>;
    let otherTagInfo: OPTIONAL<OtherInformation>;
    const callbacks: $.DecodingMap = {
        "elementname": (_el: _Element): void => { elementname = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "nicknames": (_el: _Element): void => { nicknames = $._decode_implicit<InternationalString[]>(() => $._decodeSequenceOf<InternationalString>(() => _decode_InternationalString))(_el); },
        "elementTag": (_el: _Element): void => { elementTag = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "dataType": (_el: _Element): void => { dataType = $._decode_explicit<PrimitiveDataType>(() => _decode_PrimitiveDataType)(_el); },
        "otherTagInfo": (_el: _Element): void => { otherTagInfo = _decode_OtherInformation(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_TagSetInfo_elements_Item,
        _extension_additions_list_spec_for_TagSetInfo_elements_Item,
        _root_component_type_list_2_spec_for_TagSetInfo_elements_Item,
        undefined,
    );
    return new TagSetInfo_elements_Item(
        elementname,
        nicknames,
        elementTag,
        description,
        dataType,
        otherTagInfo
    );
}; }
    return _cached_decoder_for_TagSetInfo_elements_Item(el);
}

let _cached_encoder_for_TagSetInfo_elements_Item: $.ASN1Encoder<TagSetInfo_elements_Item> | null = null;

/**
 * @summary Encodes a(n) TagSetInfo_elements_Item into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TagSetInfo_elements_Item, encoded as an ASN.1 Element.
 */
export
function _encode_TagSetInfo_elements_Item (value: TagSetInfo_elements_Item, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_TagSetInfo_elements_Item) { _cached_encoder_for_TagSetInfo_elements_Item = function (value: TagSetInfo_elements_Item, elGetter: $.ASN1Encoder<TagSetInfo_elements_Item>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_InternationalString, $.BER)(value.elementname, $.BER),
            /* IF_ABSENT  */ ((value.nicknames === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => $._encodeSequenceOf<InternationalString>(() => _encode_InternationalString, $.BER), $.BER)(value.nicknames, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 3, () => _encode_StringOrNumeric, $.BER)(value.elementTag, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.dataType === undefined) ? undefined : $._encode_explicit(_TagClass.context, 5, () => _encode_PrimitiveDataType, $.BER)(value.dataType, $.BER)),
            /* IF_ABSENT  */ ((value.otherTagInfo === undefined) ? undefined : _encode_OtherInformation(value.otherTagInfo, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_TagSetInfo_elements_Item(value, elGetter);
}


/* eslint-enable */
