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
import { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";
// export { ForwardingData, _decode_ForwardingData, _encode_ForwardingData } from "../MAP-CH-DataTypes/ForwardingData.ta.mjs";
import { GmscCamelSubscriptionInfo, _decode_GmscCamelSubscriptionInfo, _encode_GmscCamelSubscriptionInfo } from "../MAP-CH-DataTypes/GmscCamelSubscriptionInfo.ta.mjs";
// export { GmscCamelSubscriptionInfo, _decode_GmscCamelSubscriptionInfo, _encode_GmscCamelSubscriptionInfo } from "../MAP-CH-DataTypes/GmscCamelSubscriptionInfo.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary CamelRoutingInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CamelRoutingInfo ::= SEQUENCE {
 *     forwardingData    ForwardingData    OPTIONAL,
 *     gmscCamelSubscriptionInfo    [0] GmscCamelSubscriptionInfo,
 *     extensionContainer    [1] ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class CamelRoutingInfo {
    constructor (
        /**
         * @summary `forwardingData`.
         * @public
         * @readonly
         */
        readonly forwardingData: OPTIONAL<ForwardingData>,
        /**
         * @summary `gmscCamelSubscriptionInfo`.
         * @public
         * @readonly
         */
        readonly gmscCamelSubscriptionInfo: GmscCamelSubscriptionInfo,
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
     * @summary Restructures an object into a CamelRoutingInfo
     * @description
     * 
     * This takes an `object` and converts it to a `CamelRoutingInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `CamelRoutingInfo`.
     * @returns {CamelRoutingInfo}
     */
    public static _from_object (_o: { [_K in keyof (CamelRoutingInfo)]: (CamelRoutingInfo)[_K] }): CamelRoutingInfo {
        return new CamelRoutingInfo(_o.forwardingData, _o.gmscCamelSubscriptionInfo, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of CamelRoutingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_CamelRoutingInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("forwardingData", true, $.hasTag(_TagClass.universal, 16), undefined, undefined),
    new $.ComponentSpec("gmscCamelSubscriptionInfo", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of CamelRoutingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_CamelRoutingInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of CamelRoutingInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_CamelRoutingInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_CamelRoutingInfo: $.ASN1Decoder<CamelRoutingInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CamelRoutingInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CamelRoutingInfo (el: _Element): CamelRoutingInfo {
    if (!_cached_decoder_for_CamelRoutingInfo) { _cached_decoder_for_CamelRoutingInfo = function (el: _Element): CamelRoutingInfo {
    let forwardingData: OPTIONAL<ForwardingData>;
    let gmscCamelSubscriptionInfo!: GmscCamelSubscriptionInfo;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "forwardingData": (_el: _Element): void => { forwardingData = _decode_ForwardingData(_el); },
        "gmscCamelSubscriptionInfo": (_el: _Element): void => { gmscCamelSubscriptionInfo = $._decode_implicit<GmscCamelSubscriptionInfo>(() => _decode_GmscCamelSubscriptionInfo)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_CamelRoutingInfo,
        _extension_additions_list_spec_for_CamelRoutingInfo,
        _root_component_type_list_2_spec_for_CamelRoutingInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new CamelRoutingInfo(
        forwardingData,
        gmscCamelSubscriptionInfo,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_CamelRoutingInfo(el);
}

let _cached_encoder_for_CamelRoutingInfo: $.ASN1Encoder<CamelRoutingInfo> | null = null;

/**
 * @summary Encodes a(n) CamelRoutingInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CamelRoutingInfo, encoded as an ASN.1 Element.
 */
export
function _encode_CamelRoutingInfo (value: CamelRoutingInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_CamelRoutingInfo) { _cached_encoder_for_CamelRoutingInfo = function (value: CamelRoutingInfo, elGetter: $.ASN1Encoder<CamelRoutingInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.forwardingData === undefined) ? undefined : _encode_ForwardingData(value.forwardingData, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_GmscCamelSubscriptionInfo, $.BER)(value.gmscCamelSubscriptionInfo, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_CamelRoutingInfo(value, elGetter);
}


/* eslint-enable */
