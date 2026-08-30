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
import { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
// export { APN, _decode_APN, _encode_APN } from "../MAP-MS-DataTypes/APN.ta.mjs";
import { PDN_GW_Identity, _decode_PDN_GW_Identity, _encode_PDN_GW_Identity } from "../MAP-MS-DataTypes/PDN-GW-Identity.ta.mjs";
// export { PDN_GW_Identity, _decode_PDN_GW_Identity, _encode_PDN_GW_Identity } from "../MAP-MS-DataTypes/PDN-GW-Identity.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
// export { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary SpecificAPNInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SpecificAPNInfo ::= SEQUENCE {
 *     apn    [0] APN,
 *     pdn-gw-Identity    [1] PDN-GW-Identity,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ... }
 * ```
 * 
 * @class
 */
export
class SpecificAPNInfo {
    constructor (
        /**
         * @summary `apn`.
         * @public
         * @readonly
         */
        readonly apn: APN,
        /**
         * @summary `pdn_gw_Identity`.
         * @public
         * @readonly
         */
        readonly pdn_gw_Identity: PDN_GW_Identity,
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
     * @summary Restructures an object into a SpecificAPNInfo
     * @description
     * 
     * This takes an `object` and converts it to a `SpecificAPNInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SpecificAPNInfo`.
     * @returns {SpecificAPNInfo}
     */
    public static _from_object (_o: { [_K in keyof (SpecificAPNInfo)]: (SpecificAPNInfo)[_K] }): SpecificAPNInfo {
        return new SpecificAPNInfo(_o.apn, _o.pdn_gw_Identity, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of SpecificAPNInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SpecificAPNInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("apn", false, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("pdn-gw-Identity", false, $.hasTag(_TagClass.context, 1), undefined, undefined),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of SpecificAPNInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SpecificAPNInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SpecificAPNInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SpecificAPNInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_SpecificAPNInfo: $.ASN1Decoder<SpecificAPNInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SpecificAPNInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SpecificAPNInfo (el: _Element): SpecificAPNInfo {
    if (!_cached_decoder_for_SpecificAPNInfo) { _cached_decoder_for_SpecificAPNInfo = function (el: _Element): SpecificAPNInfo {
    let apn!: APN;
    let pdn_gw_Identity!: PDN_GW_Identity;
    let extensionContainer: OPTIONAL<ExtensionContainer>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "apn": (_el: _Element): void => { apn = $._decode_implicit<APN>(() => _decode_APN)(_el); },
        "pdn-gw-Identity": (_el: _Element): void => { pdn_gw_Identity = $._decode_implicit<PDN_GW_Identity>(() => _decode_PDN_GW_Identity)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SpecificAPNInfo,
        _extension_additions_list_spec_for_SpecificAPNInfo,
        _root_component_type_list_2_spec_for_SpecificAPNInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SpecificAPNInfo(
        apn,
        pdn_gw_Identity,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SpecificAPNInfo(el);
}

let _cached_encoder_for_SpecificAPNInfo: $.ASN1Encoder<SpecificAPNInfo> | null = null;

/**
 * @summary Encodes a(n) SpecificAPNInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SpecificAPNInfo, encoded as an ASN.1 Element.
 */
export
function _encode_SpecificAPNInfo (value: SpecificAPNInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SpecificAPNInfo) { _cached_encoder_for_SpecificAPNInfo = function (value: SpecificAPNInfo, elGetter: $.ASN1Encoder<SpecificAPNInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_APN, $.BER)(value.apn, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_PDN_GW_Identity, $.BER)(value.pdn_gw_Identity, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SpecificAPNInfo(value, elGetter);
}


/* eslint-enable */
