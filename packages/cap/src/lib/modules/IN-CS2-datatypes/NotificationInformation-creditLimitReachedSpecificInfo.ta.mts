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
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-CS2-datatypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-CS2-datatypes/DateAndTime.ta.mjs";


/**
 * @summary NotificationInformation_creditLimitReachedSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-creditLimitReachedSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_creditLimitReachedSpecificInfo {
    constructor (
        /**
         * @summary `timeStamp`.
         * @public
         * @readonly
         */
        readonly timeStamp: OPTIONAL<DateAndTime>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a NotificationInformation_creditLimitReachedSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_creditLimitReachedSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_creditLimitReachedSpecificInfo`.
     * @returns {NotificationInformation_creditLimitReachedSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_creditLimitReachedSpecificInfo)]: (NotificationInformation_creditLimitReachedSpecificInfo)[_K] }): NotificationInformation_creditLimitReachedSpecificInfo {
        return new NotificationInformation_creditLimitReachedSpecificInfo(_o.timeStamp, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationInformation_creditLimitReachedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_creditLimitReachedSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 0), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_creditLimitReachedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_creditLimitReachedSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_creditLimitReachedSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_creditLimitReachedSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_creditLimitReachedSpecificInfo: $.ASN1Decoder<NotificationInformation_creditLimitReachedSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_creditLimitReachedSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_creditLimitReachedSpecificInfo (el: _Element): NotificationInformation_creditLimitReachedSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_creditLimitReachedSpecificInfo) { _cached_decoder_for_NotificationInformation_creditLimitReachedSpecificInfo = function (el: _Element): NotificationInformation_creditLimitReachedSpecificInfo {
    let timeStamp: OPTIONAL<DateAndTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<DateAndTime>(() => _decode_DateAndTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationInformation_creditLimitReachedSpecificInfo,
        _extension_additions_list_spec_for_NotificationInformation_creditLimitReachedSpecificInfo,
        _root_component_type_list_2_spec_for_NotificationInformation_creditLimitReachedSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationInformation_creditLimitReachedSpecificInfo(
        timeStamp,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationInformation_creditLimitReachedSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_creditLimitReachedSpecificInfo: $.ASN1Encoder<NotificationInformation_creditLimitReachedSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_creditLimitReachedSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_creditLimitReachedSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_creditLimitReachedSpecificInfo (value: NotificationInformation_creditLimitReachedSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_creditLimitReachedSpecificInfo) { _cached_encoder_for_NotificationInformation_creditLimitReachedSpecificInfo = function (value: NotificationInformation_creditLimitReachedSpecificInfo, elGetter: $.ASN1Encoder<NotificationInformation_creditLimitReachedSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.timeStamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_DateAndTime, $.BER)(value.timeStamp, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_creditLimitReachedSpecificInfo(value, elGetter);
}


/* eslint-enable */
