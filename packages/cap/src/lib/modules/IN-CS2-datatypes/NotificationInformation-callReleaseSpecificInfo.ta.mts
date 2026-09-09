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
import { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
// export { Cause, _decode_Cause, _encode_Cause } from "../IN-CS2-datatypes/Cause.ta.mjs";
import { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-CS2-datatypes/DateAndTime.ta.mjs";
// export { DateAndTime, _decode_DateAndTime, _encode_DateAndTime } from "../IN-CS2-datatypes/DateAndTime.ta.mjs";


/**
 * @summary NotificationInformation_callReleaseSpecificInfo
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationInformation-callReleaseSpecificInfo ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class NotificationInformation_callReleaseSpecificInfo {
    constructor (
        /**
         * @summary `releaseCause`.
         * @public
         * @readonly
         */
        readonly releaseCause: OPTIONAL<Cause>,
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
     * @summary Restructures an object into a NotificationInformation_callReleaseSpecificInfo
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationInformation_callReleaseSpecificInfo`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationInformation_callReleaseSpecificInfo`.
     * @returns {NotificationInformation_callReleaseSpecificInfo}
     */
    public static _from_object (_o: { [_K in keyof (NotificationInformation_callReleaseSpecificInfo)]: (NotificationInformation_callReleaseSpecificInfo)[_K] }): NotificationInformation_callReleaseSpecificInfo {
        return new NotificationInformation_callReleaseSpecificInfo(_o.releaseCause, _o.timeStamp, _o._unrecognizedExtensionsList);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationInformation_callReleaseSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationInformation_callReleaseSpecificInfo: $.ComponentSpec[] = [
    new $.ComponentSpec("releaseCause", true, $.hasTag(_TagClass.context, 0), undefined, undefined),
    new $.ComponentSpec("timeStamp", true, $.hasTag(_TagClass.context, 1), undefined, undefined)
];

/**
 * @summary The Trailing Root Component Types of NotificationInformation_callReleaseSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationInformation_callReleaseSpecificInfo: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationInformation_callReleaseSpecificInfo
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationInformation_callReleaseSpecificInfo: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationInformation_callReleaseSpecificInfo: $.ASN1Decoder<NotificationInformation_callReleaseSpecificInfo> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationInformation_callReleaseSpecificInfo
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationInformation_callReleaseSpecificInfo (el: _Element): NotificationInformation_callReleaseSpecificInfo {
    if (!_cached_decoder_for_NotificationInformation_callReleaseSpecificInfo) { _cached_decoder_for_NotificationInformation_callReleaseSpecificInfo = function (el: _Element): NotificationInformation_callReleaseSpecificInfo {
    let releaseCause: OPTIONAL<Cause>;
    let timeStamp: OPTIONAL<DateAndTime>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "releaseCause": (_el: _Element): void => { releaseCause = $._decode_implicit<Cause>(() => _decode_Cause)(_el); },
        "timeStamp": (_el: _Element): void => { timeStamp = $._decode_implicit<DateAndTime>(() => _decode_DateAndTime)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationInformation_callReleaseSpecificInfo,
        _extension_additions_list_spec_for_NotificationInformation_callReleaseSpecificInfo,
        _root_component_type_list_2_spec_for_NotificationInformation_callReleaseSpecificInfo,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new NotificationInformation_callReleaseSpecificInfo(
        releaseCause,
        timeStamp,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_NotificationInformation_callReleaseSpecificInfo(el);
}

let _cached_encoder_for_NotificationInformation_callReleaseSpecificInfo: $.ASN1Encoder<NotificationInformation_callReleaseSpecificInfo> | null = null;

/**
 * @summary Encodes a(n) NotificationInformation_callReleaseSpecificInfo into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationInformation_callReleaseSpecificInfo, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationInformation_callReleaseSpecificInfo (value: NotificationInformation_callReleaseSpecificInfo, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationInformation_callReleaseSpecificInfo) { _cached_encoder_for_NotificationInformation_callReleaseSpecificInfo = function (value: NotificationInformation_callReleaseSpecificInfo, elGetter: $.ASN1Encoder<NotificationInformation_callReleaseSpecificInfo>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.releaseCause === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_Cause, $.BER)(value.releaseCause, $.BER)),
            /* IF_ABSENT  */ ((value.timeStamp === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_DateAndTime, $.BER)(value.timeStamp, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationInformation_callReleaseSpecificInfo(value, elGetter);
}


/* eslint-enable */
