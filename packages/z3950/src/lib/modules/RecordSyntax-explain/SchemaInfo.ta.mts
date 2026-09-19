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
import { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
// export { CommonInfo, _decode_CommonInfo, _encode_CommonInfo } from "../RecordSyntax-explain/CommonInfo.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
import { SchemaInfo_tagTypeMapping_Item, _decode_SchemaInfo_tagTypeMapping_Item, _encode_SchemaInfo_tagTypeMapping_Item } from "../RecordSyntax-explain/SchemaInfo-tagTypeMapping-Item.ta.mjs";
// export { SchemaInfo_tagTypeMapping_Item, _decode_SchemaInfo_tagTypeMapping_Item, _encode_SchemaInfo_tagTypeMapping_Item } from "../RecordSyntax-explain/SchemaInfo-tagTypeMapping-Item.ta.mjs";
import { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";
// export { ElementInfo, _decode_ElementInfo, _encode_ElementInfo } from "../RecordSyntax-explain/ElementInfo.ta.mjs";


/**
 * @summary SchemaInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SchemaInfo ::= SEQUENCE {
 *   commonInfo       [0] IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   schema           [1] IMPLICIT OBJECT IDENTIFIER,
 *      -- Non-key brief elements follow:
 *   name             [2] IMPLICIT InternationalString,
 *      -- Non-brief elements follow:
 *   description      [3] IMPLICIT HumanString OPTIONAL,
 *   tagTypeMapping   [4] IMPLICIT SEQUENCE OF SEQUENCE {
 *                           tagType         [0] IMPLICIT INTEGER,
 *                           tagSet          [1] IMPLICIT OBJECT IDENTIFIER
 *                                                         OPTIONAL,
 *                                                 -- If tagSet is omitted, then
 *                                                 -- this tagType is for a tagSet
 *                                                 -- locally defined within the
 *                                                 -- schema that cannot be
 *                                                 -- referenced by another schema.
 *                           defaultTagType  [2] IMPLICIT NULL OPTIONAL} OPTIONAL,
 *   recordStructure  [5] IMPLICIT SEQUENCE OF ElementInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class SchemaInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `schema`.
         * @public
         * @readonly
         */
        readonly schema: OBJECT_IDENTIFIER,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>,
        /**
         * @summary `tagTypeMapping`.
         * @public
         * @readonly
         */
        readonly tagTypeMapping: OPTIONAL<SchemaInfo_tagTypeMapping_Item[]>,
        /**
         * @summary `recordStructure`.
         * @public
         * @readonly
         */
        readonly recordStructure: OPTIONAL<ElementInfo[]>
    ) {}

    /**
     * @summary Restructures an object into a SchemaInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SchemaInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SchemaInfo`.
     * @returns {SchemaInfo}
     */
    public static _from_object (_o: { [_K in keyof (SchemaInfo)]: (SchemaInfo)[_K] }): SchemaInfo {
        return new SchemaInfo(_o.commonInfo, _o.schema, _o.name, _o.description, _o.tagTypeMapping, _o.recordStructure);
    }


}

/**
 * @summary The Leading Root Component Types of SchemaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SchemaInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("schema", false, $.hasTag(_TagClass.context, 1)),
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("tagTypeMapping", true, $.hasTag(_TagClass.context, 4)),
    new $.ComponentSpec("recordStructure", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of SchemaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SchemaInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SchemaInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SchemaInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SchemaInfo: $.ASN1Decoder<SchemaInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SchemaInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SchemaInfo (el: _Element): SchemaInfo {
    if (!_cached_decoder_for_SchemaInfo) { _cached_decoder_for_SchemaInfo = function (el: _Element): SchemaInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let schema!: OBJECT_IDENTIFIER;
    let name!: InternationalString;
    let description: OPTIONAL<HumanString>;
    let tagTypeMapping: OPTIONAL<SchemaInfo_tagTypeMapping_Item[]>;
    let recordStructure: OPTIONAL<ElementInfo[]>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "schema": (_el: _Element): void => { schema = $._decode_implicit<OBJECT_IDENTIFIER>(() => $._decodeObjectIdentifier)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); },
        "tagTypeMapping": (_el: _Element): void => { tagTypeMapping = $._decode_implicit<SchemaInfo_tagTypeMapping_Item[]>(() => $._decodeSequenceOf<SchemaInfo_tagTypeMapping_Item>(() => _decode_SchemaInfo_tagTypeMapping_Item))(_el); },
        "recordStructure": (_el: _Element): void => { recordStructure = $._decode_implicit<ElementInfo[]>(() => $._decodeSequenceOf<ElementInfo>(() => _decode_ElementInfo))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SchemaInfo,
        _extension_additions_list_spec_for_SchemaInfo,
        _root_component_type_list_2_spec_for_SchemaInfo,
        undefined,
    );
    return new SchemaInfo(
        commonInfo,
        schema,
        name,
        description,
        tagTypeMapping,
        recordStructure
    );
}; }
    return _cached_decoder_for_SchemaInfo(el);
}

let _cached_encoder_for_SchemaInfo: $.ASN1Encoder<SchemaInfo> | null = null;

/**
 * @summary Encodes a(n) SchemaInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SchemaInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SchemaInfo (value: SchemaInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SchemaInfo) { _cached_encoder_for_SchemaInfo = function (value: SchemaInfo, elGetter: $.ASN1Encoder<SchemaInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => $._encodeObjectIdentifier, $.BER)(value.schema, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_HumanString, $.BER)(value.description, $.BER)),
            /* IF_ABSENT  */ ((value.tagTypeMapping === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeSequenceOf<SchemaInfo_tagTypeMapping_Item>(() => _encode_SchemaInfo_tagTypeMapping_Item, $.BER), $.BER)(value.tagTypeMapping, $.BER)),
            /* IF_ABSENT  */ ((value.recordStructure === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => $._encodeSequenceOf<ElementInfo>(() => _encode_ElementInfo, $.BER), $.BER)(value.recordStructure, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SchemaInfo(value, elGetter);
}


/* eslint-enable */
