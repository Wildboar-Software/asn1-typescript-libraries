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
import { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../InformationFramework/AttributeTypeAndValue.ta.mjs";
// export { AttributeTypeAndValue, _decode_AttributeTypeAndValue, _encode_AttributeTypeAndValue } from "../InformationFramework/AttributeTypeAndValue.ta.mjs";


/**
 * @summary EncPwdInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EncPwdInfo ::= SEQUENCE {
 *   algorithms     [0]  SEQUENCE OF AlgorithmIdentifier
 *                         {{SupportedAlgorithms}} OPTIONAL,
 *   pwdQualityRule [1]  SEQUENCE OF AttributeTypeAndValue OPTIONAL,
 *   ... }
 * ```
 * 
 * @class
 */
export
class EncPwdInfo {
    constructor (
        /**
         * @summary `algorithms`.
         * @public
         * @readonly
         */
        readonly algorithms: OPTIONAL<AlgorithmIdentifier[]>,
        /**
         * @summary `pwdQualityRule`.
         * @public
         * @readonly
         */
        readonly pwdQualityRule: OPTIONAL<AttributeTypeAndValue[]>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a EncPwdInfo
     * @description
     * 
     * This takes an `object` and converts it to a `EncPwdInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EncPwdInfo`.
     * @returns {EncPwdInfo}
     */
    public static _from_object (_o: { [_K in keyof (EncPwdInfo)]: (EncPwdInfo)[_K] }): EncPwdInfo {
        return new EncPwdInfo(_o.algorithms, _o.pwdQualityRule, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of EncPwdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EncPwdInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("algorithms", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("pwdQualityRule", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EncPwdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EncPwdInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EncPwdInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EncPwdInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EncPwdInfo: $.ASN1Decoder<EncPwdInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EncPwdInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EncPwdInfo (el: _Element): EncPwdInfo {
    if (!_cached_decoder_for_EncPwdInfo) { _cached_decoder_for_EncPwdInfo = function (el: _Element): EncPwdInfo {
    let algorithms: OPTIONAL<AlgorithmIdentifier[]>;
    let pwdQualityRule: OPTIONAL<AttributeTypeAndValue[]>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "algorithms": (_el: _Element): void => { algorithms = $._decode_explicit<AlgorithmIdentifier[]>(() => $._decodeSequenceOf<AlgorithmIdentifier>(() => _decode_AlgorithmIdentifier))(_el); },
        "pwdQualityRule": (_el: _Element): void => { pwdQualityRule = $._decode_explicit<AttributeTypeAndValue[]>(() => $._decodeSequenceOf<AttributeTypeAndValue>(() => _decode_AttributeTypeAndValue))(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EncPwdInfo,
        _extension_additions_list_spec_for_EncPwdInfo,
        _root_component_type_list_2_spec_for_EncPwdInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EncPwdInfo(
        algorithms,
        pwdQualityRule,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EncPwdInfo(el);
}

let _cached_encoder_for_EncPwdInfo: $.ASN1Encoder<EncPwdInfo> | null = null;

/**
 * @summary Encodes a(n) EncPwdInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EncPwdInfo, encoded as an ASN.1 Element.
 */
export
function _encode_EncPwdInfo (value: EncPwdInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EncPwdInfo) { _cached_encoder_for_EncPwdInfo = function (value: EncPwdInfo, elGetter: $.ASN1Encoder<EncPwdInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.algorithms === undefined) ? undefined : $._encode_explicit(_TagClass.context, 0, () => $._encodeSequenceOf<AlgorithmIdentifier>(() => _encode_AlgorithmIdentifier, $.BER), $.BER)(value.algorithms, $.BER)),
            /* IF_ABSENT  */ ((value.pwdQualityRule === undefined) ? undefined : $._encode_explicit(_TagClass.context, 1, () => $._encodeSequenceOf<AttributeTypeAndValue>(() => _encode_AttributeTypeAndValue, $.BER), $.BER)(value.pwdQualityRule, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EncPwdInfo(value, elGetter);
}


/* eslint-enable */
