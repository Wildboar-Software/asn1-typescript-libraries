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
 * @summary RecordTag
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RecordTag ::= SEQUENCE {
 *                    qualifier    [0] StringOrNumeric OPTIONAL,
 *                                        -- E.g. tag set for GRS-1
 *                    tagValue     [1] StringOrNumeric}
 * ```
 * 
 * @class
 */
export
class RecordTag {
    constructor (
        /**
         * @summary `qualifier`.
         * @public
         * @readonly
         */
        readonly qualifier: OPTIONAL<StringOrNumeric>,
        /**
         * @summary `tagValue`.
         * @public
         * @readonly
         */
        readonly tagValue: StringOrNumeric
    ) {}

    /**
     * @summary Restructures an object into a RecordTag
     * @description
     * 
     * This takes an `object` and converts it to a `RecordTag`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RecordTag`.
     * @returns {RecordTag}
     */
    public static _from_object (_o: { [_K in keyof (RecordTag)]: (RecordTag)[_K] }): RecordTag {
        return new RecordTag(_o.qualifier, _o.tagValue);
    }


}

/**
 * @summary The Leading Root Component Types of RecordTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RecordTag: $.ComponentSpec[] = [
    /* FIXME: qualifier COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: tagValue COULD_NOT_RESOLVE_TYPE_DEF */
];

/**
 * @summary The Trailing Root Component Types of RecordTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RecordTag: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RecordTag
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RecordTag: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RecordTag: $.ASN1Decoder<RecordTag> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RecordTag
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RecordTag (el: _Element): RecordTag {
    if (!_cached_decoder_for_RecordTag) { _cached_decoder_for_RecordTag = function (el: _Element): RecordTag {
    let qualifier: OPTIONAL<StringOrNumeric>;
    let tagValue!: StringOrNumeric;
    const callbacks: $.DecodingMap = {
        "qualifier": (_el: _Element): void => { qualifier = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); },
        "tagValue": (_el: _Element): void => { tagValue = $._decode_explicit<StringOrNumeric>(() => _decode_StringOrNumeric)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_RecordTag,
        _extension_additions_list_spec_for_RecordTag,
        _root_component_type_list_2_spec_for_RecordTag,
        undefined,
    );
    return new RecordTag(
        qualifier,
        tagValue
    );
}; }
    return _cached_decoder_for_RecordTag(el);
}

let _cached_encoder_for_RecordTag: $.ASN1Encoder<RecordTag> | null = null;

/**
 * @summary Encodes a(n) RecordTag into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RecordTag, encoded as an ASN.1 Element.
 */
export
function _encode_RecordTag (value: RecordTag, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RecordTag) { _cached_encoder_for_RecordTag = function (value: RecordTag, elGetter: $.ASN1Encoder<RecordTag>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.qualifier === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => _encode_StringOrNumeric, $.BER)(value.qualifier, $.BER)),
            /* REQUIRED   */ $._encode_explicit(_TagClass.context, 1, () => _encode_StringOrNumeric, $.BER)(value.tagValue, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_RecordTag(value, elGetter);
}


/* eslint-enable */
