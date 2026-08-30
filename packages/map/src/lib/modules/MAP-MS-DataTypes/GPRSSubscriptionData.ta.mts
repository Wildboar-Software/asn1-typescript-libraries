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
import { GPRSDataList, _decode_GPRSDataList, _encode_GPRSDataList } from "../MAP-MS-DataTypes/GPRSDataList.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";
import { APN_OI_Replacement, _decode_APN_OI_Replacement, _encode_APN_OI_Replacement } from "../MAP-MS-DataTypes/APN-OI-Replacement.ta.mjs";


/**
 * @summary GPRSSubscriptionData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * GPRSSubscriptionData ::= SEQUENCE {
 *     completeDataListIncluded    NULL    OPTIONAL,
 *     -- If segmentation is used, completeDataListIncluded may only be present in the
 *     -- first segment of GPRSSubscriptionData.
 *     gprsDataList    [1]    GPRSDataList,
 *     extensionContainer    [2] ExtensionContainer    OPTIONAL,
 *     ...,
 *     apn-oi-Replacement    [3]    APN-OI-Replacement    OPTIONAL
 *     -- this apn-oi-Replacement refers to the UE level apn-oi-Replacement.
 *  }
 * ```
 * 
 * @class
 */
export
class GPRSSubscriptionData {
    constructor (
        /**
         * @summary `completeDataListIncluded`.
         * @public
         * @readonly
         */
        readonly completeDataListIncluded: OPTIONAL<NULL>,
        /**
         * @summary `gprsDataList`.
         * @public
         * @readonly
         */
        readonly gprsDataList: GPRSDataList,
        /**
         * @summary `extensionContainer`.
         * @public
         * @readonly
         */
        readonly extensionContainer: OPTIONAL<ExtensionContainer>,
        /**
         * @summary `apn_oi_Replacement`.
         * @public
         * @readonly
         */
        readonly apn_oi_Replacement: OPTIONAL<APN_OI_Replacement>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a GPRSSubscriptionData
     * @description
     * 
     * This takes an `object` and converts it to a `GPRSSubscriptionData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `GPRSSubscriptionData`.
     * @returns {GPRSSubscriptionData}
     */
    public static _from_object (_o: { [_K in keyof (GPRSSubscriptionData)]: (GPRSSubscriptionData)[_K] }): GPRSSubscriptionData {
        return new GPRSSubscriptionData(_o.completeDataListIncluded, _o.gprsDataList, _o.extensionContainer, _o.apn_oi_Replacement, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of GPRSSubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_GPRSSubscriptionData: $.ComponentSpec[] = [
    new $.ComponentSpec("completeDataListIncluded", true, $.hasTag(_TagClass.universal, 5)),
    new $.ComponentSpec("gprsDataList", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 2))
];

/**
 * @summary The Trailing Root Component Types of GPRSSubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_GPRSSubscriptionData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of GPRSSubscriptionData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_GPRSSubscriptionData: $.ComponentSpec[] = [
    new $.ComponentSpec("apn-oi-Replacement", true, $.hasTag(_TagClass.context, 3))
];

let _cached_decoder_for_GPRSSubscriptionData: $.ASN1Decoder<GPRSSubscriptionData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) GPRSSubscriptionData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_GPRSSubscriptionData (el: _Element): GPRSSubscriptionData {
    if (!_cached_decoder_for_GPRSSubscriptionData) { _cached_decoder_for_GPRSSubscriptionData = function (el: _Element): GPRSSubscriptionData {
    let completeDataListIncluded: OPTIONAL<NULL> = undefined;
    let gprsDataList!: GPRSDataList;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    let apn_oi_Replacement: OPTIONAL<APN_OI_Replacement> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "completeDataListIncluded": (_el: _Element): void => { completeDataListIncluded = $._decodeNull(_el); },
        "gprsDataList": (_el: _Element): void => { gprsDataList = $._decode_implicit<GPRSDataList>(() => _decode_GPRSDataList)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); },
        "apn-oi-Replacement": (_el: _Element): void => { apn_oi_Replacement = $._decode_implicit<APN_OI_Replacement>(() => _decode_APN_OI_Replacement)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_GPRSSubscriptionData,
        _extension_additions_list_spec_for_GPRSSubscriptionData,
        _root_component_type_list_2_spec_for_GPRSSubscriptionData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new GPRSSubscriptionData(
        completeDataListIncluded,
        gprsDataList,
        extensionContainer,
        apn_oi_Replacement,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_GPRSSubscriptionData(el);
}

let _cached_encoder_for_GPRSSubscriptionData: $.ASN1Encoder<GPRSSubscriptionData> | null = null;

/**
 * @summary Encodes a(n) GPRSSubscriptionData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The GPRSSubscriptionData, encoded as an ASN.1 Element.
 */
export
function _encode_GPRSSubscriptionData (value: GPRSSubscriptionData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_GPRSSubscriptionData) { _cached_encoder_for_GPRSSubscriptionData = function (value: GPRSSubscriptionData, elGetter: $.ASN1Encoder<GPRSSubscriptionData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.completeDataListIncluded === undefined) ? undefined : $._encodeNull(value.completeDataListIncluded, $.BER)),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_GPRSDataList, $.BER)(value.gprsDataList, $.BER),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.apn_oi_Replacement === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_APN_OI_Replacement, $.BER)(value.apn_oi_Replacement, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_GPRSSubscriptionData(value, elGetter);
}


/* eslint-enable */
