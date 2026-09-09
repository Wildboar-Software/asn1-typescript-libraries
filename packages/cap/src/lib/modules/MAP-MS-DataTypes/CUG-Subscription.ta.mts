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
import { CUG_Index, _decode_CUG_Index, _encode_CUG_Index } from "../MAP-MS-DataTypes/CUG-Index.ta.mjs";
// export { CUG_Index, _decode_CUG_Index, _encode_CUG_Index } from "../MAP-MS-DataTypes/CUG-Index.ta.mjs";
import { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
// export { CUG_Interlock, _decode_CUG_Interlock, _encode_CUG_Interlock } from "../MAP-MS-DataTypes/CUG-Interlock.ta.mjs";
import { IntraCUG_Options, _enum_for_IntraCUG_Options, IntraCUG_Options_noCUG_Restrictions /* IMPORTED_LONG_ENUMERATION_ITEM */, noCUG_Restrictions /* IMPORTED_SHORT_ENUMERATION_ITEM */, IntraCUG_Options_cugIC_CallBarred /* IMPORTED_LONG_ENUMERATION_ITEM */, cugIC_CallBarred /* IMPORTED_SHORT_ENUMERATION_ITEM */, IntraCUG_Options_cugOG_CallBarred /* IMPORTED_LONG_ENUMERATION_ITEM */, cugOG_CallBarred /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IntraCUG_Options, _encode_IntraCUG_Options } from "../MAP-MS-DataTypes/IntraCUG-Options.ta.mjs";
// export { IntraCUG_Options, _enum_for_IntraCUG_Options, IntraCUG_Options_noCUG_Restrictions /* IMPORTED_LONG_ENUMERATION_ITEM */, noCUG_Restrictions /* IMPORTED_SHORT_ENUMERATION_ITEM */, IntraCUG_Options_cugIC_CallBarred /* IMPORTED_LONG_ENUMERATION_ITEM */, cugIC_CallBarred /* IMPORTED_SHORT_ENUMERATION_ITEM */, IntraCUG_Options_cugOG_CallBarred /* IMPORTED_LONG_ENUMERATION_ITEM */, cugOG_CallBarred /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_IntraCUG_Options, _encode_IntraCUG_Options } from "../MAP-MS-DataTypes/IntraCUG-Options.ta.mjs";
import { Ext_BasicServiceGroupList, _decode_Ext_BasicServiceGroupList, _encode_Ext_BasicServiceGroupList } from "../MAP-MS-DataTypes/Ext-BasicServiceGroupList.ta.mjs";
// export { Ext_BasicServiceGroupList, _decode_Ext_BasicServiceGroupList, _encode_Ext_BasicServiceGroupList } from "../MAP-MS-DataTypes/Ext-BasicServiceGroupList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CUG_Subscription
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CUG-Subscription ::= SEQUENCE {
 *     cug-Index    CUG-Index,
 *     cug-Interlock    CUG-Interlock,
 *     intraCUG-Options    IntraCUG-Options,
 *     basicServiceGroupList    Ext-BasicServiceGroupList    OPTIONAL,
 *     extensionContainer    [0] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CUG_Subscription {
    constructor (
        /**
         * @summary `cug_Index`.
         * @public
         * @readonly
         */
        readonly cug_Index: CUG_Index,
        /**
         * @summary `cug_Interlock`.
         * @public
         * @readonly
         */
        readonly cug_Interlock: CUG_Interlock,
        /**
         * @summary `intraCUG_Options`.
         * @public
         * @readonly
         */
        readonly intraCUG_Options: IntraCUG_Options,
        /**
         * @summary `basicServiceGroupList`.
         * @public
         * @readonly
         */
        readonly basicServiceGroupList: OPTIONAL<Ext_BasicServiceGroupList>,
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
     * @summary Restructures an object into a CUG_Subscription
     * @description
     * 
     * This takes an `object` and converts it to a `CUG_Subscription`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CUG_Subscription`.
     * @returns {CUG_Subscription}
     */
    public static _from_object (_o: { [_K in keyof (CUG_Subscription)]: (CUG_Subscription)[_K] }): CUG_Subscription {
        return new CUG_Subscription(_o.cug_Index, _o.cug_Interlock, _o.intraCUG_Options, _o.basicServiceGroupList, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `intraCUG_Options`
         * @public
         * @static
         */

    public static _enum_for_intraCUG_Options = _enum_for_IntraCUG_Options;
}

/**
 * @summary The Leading Root Component Types of CUG_Subscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CUG_Subscription: $.ComponentSpec[] = [
    new $.ComponentSpec("cug-Index", false, $.hasTag(_TagClass.universal, 2), undefined, undefined),
    new $.ComponentSpec("cug-Interlock", false, $.hasTag(_TagClass.universal, 4), undefined, undefined),
    new $.ComponentSpec("intraCUG-Options", false, $.hasTag(_TagClass.universal, 10), undefined, undefined),
    new $.ComponentSpec("basicServiceGroupList", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CUG_Subscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CUG_Subscription: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CUG_Subscription
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CUG_Subscription: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CUG_Subscription: $.ASN1Decoder<CUG_Subscription> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CUG_Subscription
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CUG_Subscription (el: _Element): CUG_Subscription {
    if (!_cached_decoder_for_CUG_Subscription) { _cached_decoder_for_CUG_Subscription = function (el: _Element): CUG_Subscription {
    let cug_Index!: CUG_Index;
    let cug_Interlock!: CUG_Interlock;
    let intraCUG_Options!: IntraCUG_Options;
    let basicServiceGroupList: OPTIONAL<Ext_BasicServiceGroupList>;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "cug-Index": (_el: _Element): void => { cug_Index = _decode_CUG_Index(_el); },
        "cug-Interlock": (_el: _Element): void => { cug_Interlock = _decode_CUG_Interlock(_el); },
        "intraCUG-Options": (_el: _Element): void => { intraCUG_Options = _decode_IntraCUG_Options(_el); },
        "basicServiceGroupList": (_el: _Element): void => { basicServiceGroupList = _decode_Ext_BasicServiceGroupList(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CUG_Subscription,
        _extension_additions_list_spec_for_CUG_Subscription,
        _root_component_type_list_2_spec_for_CUG_Subscription,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CUG_Subscription(
        cug_Index,
        cug_Interlock,
        intraCUG_Options,
        basicServiceGroupList,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CUG_Subscription(el);
}

let _cached_encoder_for_CUG_Subscription: $.ASN1Encoder<CUG_Subscription> | null = null;

/**
 * @summary Encodes a(n) CUG_Subscription into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CUG_Subscription, encoded as an ASN.1 Element.
 */
export
function _encode_CUG_Subscription (value: CUG_Subscription, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CUG_Subscription) { _cached_encoder_for_CUG_Subscription = function (value: CUG_Subscription, elGetter: $.ASN1Encoder<CUG_Subscription>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_CUG_Index(value.cug_Index, $.BER),
            /* REQUIRED   */ _encode_CUG_Interlock(value.cug_Interlock, $.BER),
            /* REQUIRED   */ _encode_IntraCUG_Options(value.intraCUG_Options, $.BER),
            /* IF_ABSENT  */ ((value.basicServiceGroupList === undefined) ? undefined : _encode_Ext_BasicServiceGroupList(value.basicServiceGroupList, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CUG_Subscription(value, elGetter);
}


/* eslint-enable */
