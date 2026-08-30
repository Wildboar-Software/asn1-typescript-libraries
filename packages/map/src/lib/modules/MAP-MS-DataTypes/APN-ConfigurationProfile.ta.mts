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
import { ContextId, _decode_ContextId, _encode_ContextId } from "../MAP-MS-DataTypes/ContextId.ta.mjs";
import { EPS_DataList, _decode_EPS_DataList, _encode_EPS_DataList } from "../MAP-MS-DataTypes/EPS-DataList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary APN_ConfigurationProfile
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * APN-ConfigurationProfile ::= SEQUENCE {
 *     defaultContext    ContextId,
 *     completeDataListIncluded    NULL    OPTIONAL,
 *     -- If segmentation is used, completeDataListIncluded may only be present in the
 *     -- first segment of APN-ConfigurationProfile.
 *     epsDataList    [1]    EPS-DataList,
 *     extensionContainer    [2]    ExtensionContainer    OPTIONAL,
 *     ... ,
 *     additionalDefaultContext    [3]    ContextId    OPTIONAL
 *     --    for details see the 3GPP TS 29.272 [144].
 *  }
 * ```
 * 
 * @class
 */
export
class APN_ConfigurationProfile {
    constructor (
        /**
         * @summary `defaultContext`.
         * @public
         * @readonly
         */
        readonly defaultContext: ContextId,
        /**
         * @summary `completeDataListIncluded`.
         * @public
         * @readonly
         */
        readonly completeDataListIncluded: OPTIONAL<NULL>,
        /**
         * @summary `epsDataList`.
         * @public
         * @readonly
         */
        readonly epsDataList: EPS_DataList,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `additionalDefaultContext`.
         * @public
         * @readonly
         */
        readonly additionalDefaultContext: OPTIONAL<ContextId>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a APN_ConfigurationProfile
     * @description
     * 
     * This takes an `object` and converts it to a `APN_ConfigurationProfile`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `APN_ConfigurationProfile`.
     * @returns {APN_ConfigurationProfile}
     */
    public static _from_object (_o: { [_K in keyof (APN_ConfigurationProfile)]: (APN_ConfigurationProfile)[_K] }): APN_ConfigurationProfile {
        return new APN_ConfigurationProfile(_o.defaultContext, _o.completeDataListIncluded, _o.epsDataList, _o.extensionContainer, _o.additionalDefaultContext, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of APN_ConfigurationProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_APN_ConfigurationProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("defaultContext", false, $.hasTag(_TagClass.universal, 2)),
    new $.ComponentSpec("completeDataListIncluded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("epsDataList", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of APN_ConfigurationProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_APN_ConfigurationProfile: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of APN_ConfigurationProfile
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_APN_ConfigurationProfile: $.ComponentSpec[] = [
    new $.ComponentSpec("additionalDefaultContext", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_APN_ConfigurationProfile: $.ASN1Decoder<APN_ConfigurationProfile> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) APN_ConfigurationProfile
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_APN_ConfigurationProfile (el: _Element): APN_ConfigurationProfile {
    if (!_cached_decoder_for_APN_ConfigurationProfile) { _cached_decoder_for_APN_ConfigurationProfile = function (el: _Element): APN_ConfigurationProfile {
    let defaultContext!: ContextId;
    let completeDataListIncluded: OPTIONAL<NULL> = undefined;
    let epsDataList!: EPS_DataList;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let additionalDefaultContext: OPTIONAL<ContextId> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "defaultContext": (_el: _Element): void => { defaultContext = _decode_ContextId(_el); },
        "completeDataListIncluded": (_el: _Element): void => { completeDataListIncluded = $._decodeNull(_el); },
        "epsDataList": (_el: _Element): void => { epsDataList = $._decode_implicit<EPS_DataList>(() => _decode_EPS_DataList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "additionalDefaultContext": (_el: _Element): void => { additionalDefaultContext = $._decode_implicit<ContextId>(() => _decode_ContextId)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_APN_ConfigurationProfile,
        _extension_additions_list_spec_for_APN_ConfigurationProfile,
        _root_component_type_list_2_spec_for_APN_ConfigurationProfile,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new APN_ConfigurationProfile(
        defaultContext,
        completeDataListIncluded,
        epsDataList,
        extensionContainer,
        additionalDefaultContext,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_APN_ConfigurationProfile(el);
}

let _cached_encoder_for_APN_ConfigurationProfile: $.ASN1Encoder<APN_ConfigurationProfile> | null = null;

/**
 * @summary Encodes a(n) APN_ConfigurationProfile into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The APN_ConfigurationProfile, encoded as an ASN.1 Element.
 */
export
function _encode_APN_ConfigurationProfile (value: APN_ConfigurationProfile, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_APN_ConfigurationProfile) { _cached_encoder_for_APN_ConfigurationProfile = function (value: APN_ConfigurationProfile, elGetter: $.ASN1Encoder<APN_ConfigurationProfile>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_ContextId(value.defaultContext, $.BER),
            /* IF_ABSENT  */ ((value.completeDataListIncluded === undefined) ? undefined : $._encodeNull(value.completeDataListIncluded, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_EPS_DataList, $.BER)(value.epsDataList, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.additionalDefaultContext === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_ContextId, $.BER)(value.additionalDefaultContext, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_APN_ConfigurationProfile(value, elGetter);
}


/* eslint-enable */
