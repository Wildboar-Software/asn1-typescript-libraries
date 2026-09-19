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
import { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../RecordSyntax-explain/AttributeType.ta.mjs";
// export { AttributeType, _decode_AttributeType, _encode_AttributeType } from "../RecordSyntax-explain/AttributeType.ta.mjs";
import { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";
// export { HumanString, _decode_HumanString, _encode_HumanString } from "../RecordSyntax-explain/HumanString.ta.mjs";


/**
 * @summary AttributeSetInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AttributeSetInfo ::= SEQUENCE {
 *   commonInfo    [0] IMPLICIT CommonInfo OPTIONAL,
 *      -- Key elements follow:
 *   attributeSet  [1] IMPLICIT AttributeSetId,
 *      -- non-key brief elements follow:
 *   name          [2] IMPLICIT InternationalString,
 *      -- non-brief elements follow:
 *   attributes    [3] IMPLICIT SEQUENCE OF AttributeType OPTIONAL,
 *                         -- mandatory in full record
 *   description   [4] IMPLICIT HumanString OPTIONAL}
 * ```
 * 
 * @class
 */
export
class AttributeSetInfo {
    constructor (
        /**
         * @summary `commonInfo`.
         * @public
         * @readonly
         */
        readonly commonInfo: OPTIONAL<CommonInfo>,
        /**
         * @summary `attributeSet`.
         * @public
         * @readonly
         */
        readonly attributeSet: AttributeSetId,
        /**
         * @summary `name`.
         * @public
         * @readonly
         */
        readonly name: InternationalString,
        /**
         * @summary `attributes`.
         * @public
         * @readonly
         */
        readonly attributes: OPTIONAL<AttributeType[]>,
        /**
         * @summary `description`.
         * @public
         * @readonly
         */
        readonly description: OPTIONAL<HumanString>
    ) {}

    /**
     * @summary Restructures an object into a AttributeSetInfo
     * @description
     * 
     * This takes an `object` and converts it to a `AttributeSetInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `AttributeSetInfo`.
     * @returns {AttributeSetInfo}
     */
    public static _from_object (_o: { [_K in keyof (AttributeSetInfo)]: (AttributeSetInfo)[_K] }): AttributeSetInfo {
        return new AttributeSetInfo(_o.commonInfo, _o.attributeSet, _o.name, _o.attributes, _o.description);
    }


}

/**
 * @summary The Leading Root Component Types of AttributeSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_AttributeSetInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("commonInfo", true, $.hasTag(_TagClass.context, 0)),
    /* FIXME: attributeSet COULD_NOT_RESOLVE_TYPE_DEF */,
    /* FIXME: name COULD_NOT_RESOLVE_TYPE_DEF */,
    new $.ComponentSpec("attributes", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("description", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of AttributeSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_AttributeSetInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of AttributeSetInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_AttributeSetInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_AttributeSetInfo: $.ASN1Decoder<AttributeSetInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) AttributeSetInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_AttributeSetInfo (el: _Element): AttributeSetInfo {
    if (!_cached_decoder_for_AttributeSetInfo) { _cached_decoder_for_AttributeSetInfo = function (el: _Element): AttributeSetInfo {
    let commonInfo: OPTIONAL<CommonInfo>;
    let attributeSet!: AttributeSetId;
    let name!: InternationalString;
    let attributes: OPTIONAL<AttributeType[]>;
    let description: OPTIONAL<HumanString>;
    const callbacks: $.DecodingMap = {
        "commonInfo": (_el: _Element): void => { commonInfo = $._decode_implicit<CommonInfo>(() => _decode_CommonInfo)(_el); },
        "attributeSet": (_el: _Element): void => { attributeSet = $._decode_implicit<AttributeSetId>(() => _decode_AttributeSetId)(_el); },
        "name": (_el: _Element): void => { name = $._decode_implicit<InternationalString>(() => _decode_InternationalString)(_el); },
        "attributes": (_el: _Element): void => { attributes = $._decode_implicit<AttributeType[]>(() => $._decodeSequenceOf<AttributeType>(() => _decode_AttributeType))(_el); },
        "description": (_el: _Element): void => { description = $._decode_implicit<HumanString>(() => _decode_HumanString)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_AttributeSetInfo,
        _extension_additions_list_spec_for_AttributeSetInfo,
        _root_component_type_list_2_spec_for_AttributeSetInfo,
        undefined,
    );
    return new AttributeSetInfo(
        commonInfo,
        attributeSet,
        name,
        attributes,
        description
    );
}; }
    return _cached_decoder_for_AttributeSetInfo(el);
}

let _cached_encoder_for_AttributeSetInfo: $.ASN1Encoder<AttributeSetInfo> | null = null;

/**
 * @summary Encodes a(n) AttributeSetInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The AttributeSetInfo, encoded as an ASN.1 Element.
 */
export
function _encode_AttributeSetInfo (value: AttributeSetInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_AttributeSetInfo) { _cached_encoder_for_AttributeSetInfo = function (value: AttributeSetInfo, elGetter: $.ASN1Encoder<AttributeSetInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.commonInfo === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CommonInfo, $.BER)(value.commonInfo, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_AttributeSetId, $.BER)(value.attributeSet, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 2, () => _encode_InternationalString, $.BER)(value.name, $.BER),
            /* IF_ABSENT  */ ((value.attributes === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => $._encodeSequenceOf<AttributeType>(() => _encode_AttributeType, $.BER), $.BER)(value.attributes, $.BER)),
            /* IF_ABSENT  */ ((value.description === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => _encode_HumanString, $.BER)(value.description, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_AttributeSetInfo(value, elGetter);
}


/* eslint-enable */
