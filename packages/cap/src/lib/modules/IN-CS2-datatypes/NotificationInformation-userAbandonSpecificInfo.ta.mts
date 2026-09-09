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



/**
 * @summary NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-userAbandonSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_userAbandonSpecificInfo {
    constructor (
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotificationInformation_userAbandonSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_userAbandonSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_userAbandonSpecificInfo`.
     * @returns {NotificationInformation_userAbandonSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_userAbandonSpecificInfo)]: (NotificationInformation_userAbandonSpecificInfo)[_K] }): NotificationInformation_userAbandonSpecificInfo {
        return new NotificationInformation_userAbandonSpecificInfo(_o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_userAbandonSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_userAbandonSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_userAbandonSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_userAbandonSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_userAbandonSpecificInfo: $.ASN1Decoder<NotificationInformation_userAbandonSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_userAbandonSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_userAbandonSpecificInfo (el: _Element): NotificationInformation_userAbandonSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_userAbandonSpecificInfo) { _cached_decoder_for_NotificationInformation_userAbandonSpecificInfo = function (el: _Element): NotificationInformation_userAbandonSpecificInfo {
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationInformation_userAbandonSpecificInfo,
        _extension_additions_list_spec_for_NotificationInformation_userAbandonSpecificInfo,
        _root_component_type_list_2_spec_for_NotificationInformation_userAbandonSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationInformation_userAbandonSpecificInfo(
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationInformation_userAbandonSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_userAbandonSpecificInfo: $.ASN1Encoder<NotificationInformation_userAbandonSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_userAbandonSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_userAbandonSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_userAbandonSpecificInfo (value: NotificationInformation_userAbandonSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_userAbandonSpecificInfo) { _cached_encoder_for_NotificationInformation_userAbandonSpecificInfo = function (value: NotificationInformation_userAbandonSpecificInfo, elGetter: $.ASN1Encoder<NotificationInformation_userAbandonSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_userAbandonSpecificInfo(value, elGetter);
}


/* eslint-enable */
