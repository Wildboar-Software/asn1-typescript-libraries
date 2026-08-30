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
} from "asn1-ts";
import * as $ from "asn1-ts/dist/functional.mjs";
import { CUG_SubscriptionList, _decode_CUG_SubscriptionList, _encode_CUG_SubscriptionList } from "../MAP-MS-DataTypes/CUG-SubscriptionList.ta.mjs";
// export { CUG_SubscriptionList, _decode_CUG_SubscriptionList, _encode_CUG_SubscriptionList } from "../MAP-MS-DataTypes/CUG-SubscriptionList.ta.mjs";
import { CUG_FeatureList, _decode_CUG_FeatureList, _encode_CUG_FeatureList } from "../MAP-MS-DataTypes/CUG-FeatureList.ta.mjs";
// export { CUG_FeatureList, _decode_CUG_FeatureList, _encode_CUG_FeatureList } from "../MAP-MS-DataTypes/CUG-FeatureList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CUG_Info
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Info ::= SEQUENCE {
 *     cug-SubscriptionList    CUG-SubscriptionList,
 *     cug-FeatureList    CUG-FeatureList    OPTIONAL,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CUG_Info {
    constructor (
        /**
         * @summary `cug_SubscriptionList`.
         * @public
         * @readonly
         */
        readonly cug_SubscriptionList: CUG_SubscriptionList,
        /**
         * @summary `cug_FeatureList`.
         * @public
         * @readonly
         */
        readonly cug_FeatureList: OPTIONAL<CUG_FeatureList>,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a CUG_Info
     * @description
     * 
     * This takes an `object` and converts it to a `CUG_Info`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CUG_Info`.
     * @returns {CUG_Info}
     */
    public static _from_object (_o: { [_K in keyof (CUG_Info)]: (CUG_Info)[_K] }): CUG_Info {
        return new CUG_Info(_o.cug_SubscriptionList, _o.cug_FeatureList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CUG_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CUG_Info: $.ComponentSpec[] = [
    new $.ComponentSpec("cug-SubscriptionList", false, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("cug-FeatureList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CUG_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CUG_Info: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CUG_Info
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CUG_Info: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CUG_Info: $.ASN1Decoder<CUG_Info> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_Info
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_Info (el: _Element): CUG_Info {
    if (!_cached_decoder_for_CUG_Info) { _cached_decoder_for_CUG_Info = function (el: _Element): CUG_Info {
    let cug_SubscriptionList!: CUG_SubscriptionList;
    let cug_FeatureList: OPTIONAL<CUG_FeatureList>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cug-SubscriptionList": (_el: _Element): void => { cug_SubscriptionList = _decode_CUG_SubscriptionList(_el); },
        "cug-FeatureList": (_el: _Element): void => { cug_FeatureList = _decode_CUG_FeatureList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CUG_Info,
        _extension_additions_list_spec_for_CUG_Info,
        _root_component_type_list_2_spec_for_CUG_Info,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CUG_Info(
        cug_SubscriptionList,
        cug_FeatureList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CUG_Info(el);
}

let _cached_encoder_for_CUG_Info: $.ASN1Encoder<CUG_Info> | null = null;

/**
 * @summary Encodes a(n) CUG_Info into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_Info, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_Info (value: CUG_Info, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_Info) { _cached_encoder_for_CUG_Info = function (value: CUG_Info, elGetter: $.ASN1Encoder<CUG_Info>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CUG_SubscriptionList(value.cug_SubscriptionList, $.BER),
            /* IF_ABSENT  */ ((value.cug_FeatureList === undefined) ? undefined : _encode_CUG_FeatureList(value.cug_FeatureList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CUG_Info(value, elGetter);
}


/* eslint-enable */
