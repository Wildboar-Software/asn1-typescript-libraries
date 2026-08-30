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
import { CCBS_SubscriberStatus, _enum_for_CCBS_SubscriberStatus, CCBS_SubscriberStatus_ccbsNotIdle /* IMPORTED_LONG_ENUMERATION_ITEM */, ccbsNotIdle /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_SubscriberStatus_ccbsIdle /* IMPORTED_LONG_ENUMERATION_ITEM */, ccbsIdle /* IMPORTED_SHORT_ENUMERATION_ITEM */, CCBS_SubscriberStatus_ccbsNotReachable /* IMPORTED_LONG_ENUMERATION_ITEM */, ccbsNotReachable /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_CCBS_SubscriberStatus, _encode_CCBS_SubscriberStatus } from "../MAP-CH-DataTypes/CCBS-SubscriberStatus.ta.mjs";
import { ExtensionContainer, _decode_ExtensionContainer, _encode_ExtensionContainer } from "../MAP-ExtensionDataTypes/ExtensionContainer.ta.mjs";


/**
 * @summary EventReportData
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EventReportData ::= SEQUENCE{
 *     ccbs-SubscriberStatus    [0]    CCBS-SubscriberStatus    OPTIONAL,
 *     extensionContainer    [1]    ExtensionContainer    OPTIONAL,
 *     ...}
 * ```
 * 
 * @class
 */
export
class EventReportData {
    constructor (
        /**
         * @summary `ccbs_SubscriberStatus`.
         * @public
         * @readonly
         */
        readonly ccbs_SubscriberStatus: OPTIONAL<CCBS_SubscriberStatus>,
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
     * @summary Restructures an object into a EventReportData
     * @description
     * 
     * This takes an `object` and converts it to a `EventReportData`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `EventReportData`.
     * @returns {EventReportData}
     */
    public static _from_object (_o: { [_K in keyof (EventReportData)]: (EventReportData)[_K] }): EventReportData {
        return new EventReportData(_o.ccbs_SubscriberStatus, _o.extensionContainer, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `ccbs_SubscriberStatus`
         * @public
         * @static
         */

    public static _enum_for_ccbs_SubscriberStatus = _enum_for_CCBS_SubscriberStatus;
}

/**
 * @summary The Leading Root Component Types of EventReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_EventReportData: $.ComponentSpec[] = [
    new $.ComponentSpec("ccbs-SubscriberStatus", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("extensionContainer", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of EventReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_EventReportData: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of EventReportData
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_EventReportData: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_EventReportData: $.ASN1Decoder<EventReportData> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) EventReportData
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_EventReportData (el: _Element): EventReportData {
    if (!_cached_decoder_for_EventReportData) { _cached_decoder_for_EventReportData = function (el: _Element): EventReportData {
    let ccbs_SubscriberStatus: OPTIONAL<CCBS_SubscriberStatus> = undefined;
    let extensionContainer: OPTIONAL<ExtensionContainer> = undefined;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "ccbs-SubscriberStatus": (_el: _Element): void => { ccbs_SubscriberStatus = $._decode_implicit<CCBS_SubscriberStatus>(() => _decode_CCBS_SubscriberStatus)(_el); },
        "extensionContainer": (_el: _Element): void => { extensionContainer = $._decode_implicit<ExtensionContainer>(() => _decode_ExtensionContainer)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_EventReportData,
        _extension_additions_list_spec_for_EventReportData,
        _root_component_type_list_2_spec_for_EventReportData,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new EventReportData(
        ccbs_SubscriberStatus,
        extensionContainer,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_EventReportData(el);
}

let _cached_encoder_for_EventReportData: $.ASN1Encoder<EventReportData> | null = null;

/**
 * @summary Encodes a(n) EventReportData into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The EventReportData, encoded as an ASN.1 Element.
 */
export
function _encode_EventReportData (value: EventReportData, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_EventReportData) { _cached_encoder_for_EventReportData = function (value: EventReportData, elGetter: $.ASN1Encoder<EventReportData>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.ccbs_SubscriberStatus === undefined) ? undefined : $._encode_implicit(_TagClass.context, 0, () => _encode_CCBS_SubscriberStatus, $.BER)(value.ccbs_SubscriberStatus, $.BER)),
            /* IF_ABSENT  */ ((value.extensionContainer === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_ExtensionContainer, $.BER)(value.extensionContainer, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_EventReportData(value, elGetter);
}


/* eslint-enable */
