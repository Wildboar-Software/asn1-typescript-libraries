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
import { SMS_report_sMS_Contents_initiator, _enum_for_SMS_report_sMS_Contents_initiator, SMS_report_sMS_Contents_initiator_target /* IMPORTED_LONG_ENUMERATION_ITEM */, target /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_initiator_server /* IMPORTED_LONG_ENUMERATION_ITEM */, server /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_initiator_undefined_party /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_initiator, _encode_SMS_report_sMS_Contents_initiator } from "../HI2Operations/SMS-report-sMS-Contents-initiator.ta.mjs";
// export { SMS_report_sMS_Contents_initiator, _enum_for_SMS_report_sMS_Contents_initiator, SMS_report_sMS_Contents_initiator_target /* IMPORTED_LONG_ENUMERATION_ITEM */, target /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_initiator_server /* IMPORTED_LONG_ENUMERATION_ITEM */, server /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_initiator_undefined_party /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_initiator, _encode_SMS_report_sMS_Contents_initiator } from "../HI2Operations/SMS-report-sMS-Contents-initiator.ta.mjs";
import { SMS_report_sMS_Contents_transfer_status, _enum_for_SMS_report_sMS_Contents_transfer_status, SMS_report_sMS_Contents_transfer_status_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_not_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, not_succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_transfer_status, _encode_SMS_report_sMS_Contents_transfer_status } from "../HI2Operations/SMS-report-sMS-Contents-transfer-status.ta.mjs";
// export { SMS_report_sMS_Contents_transfer_status, _enum_for_SMS_report_sMS_Contents_transfer_status, SMS_report_sMS_Contents_transfer_status_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_not_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, not_succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_transfer_status, _encode_SMS_report_sMS_Contents_transfer_status } from "../HI2Operations/SMS-report-sMS-Contents-transfer-status.ta.mjs";
import { SMS_report_sMS_Contents_other_message, _enum_for_SMS_report_sMS_Contents_other_message, SMS_report_sMS_Contents_other_message_yes /* IMPORTED_LONG_ENUMERATION_ITEM */, yes /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_no /* IMPORTED_LONG_ENUMERATION_ITEM */, no /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_other_message, _encode_SMS_report_sMS_Contents_other_message } from "../HI2Operations/SMS-report-sMS-Contents-other-message.ta.mjs";
// export { SMS_report_sMS_Contents_other_message, _enum_for_SMS_report_sMS_Contents_other_message, SMS_report_sMS_Contents_other_message_yes /* IMPORTED_LONG_ENUMERATION_ITEM */, yes /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_no /* IMPORTED_LONG_ENUMERATION_ITEM */, no /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_other_message, _encode_SMS_report_sMS_Contents_other_message } from "../HI2Operations/SMS-report-sMS-Contents-other-message.ta.mjs";
import { SMS_report_sMS_Contents_enhancedContent, _decode_SMS_report_sMS_Contents_enhancedContent, _encode_SMS_report_sMS_Contents_enhancedContent } from "../HI2Operations/SMS-report-sMS-Contents-enhancedContent.ta.mjs";
// export { SMS_report_sMS_Contents_enhancedContent, _decode_SMS_report_sMS_Contents_enhancedContent, _encode_SMS_report_sMS_Contents_enhancedContent } from "../HI2Operations/SMS-report-sMS-Contents-enhancedContent.ta.mjs";


/**
 * @summary SMS_report_sMS_Contents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents ::= SEQUENCE { -- REMOVED_FROM_UNNESTING -- }
 * ```
 * 
 * @class
 */
export
class SMS_report_sMS_Contents {
    constructor (
        /**
         * @summary `initiator`.
         * @public
         * @readonly
         */
        readonly initiator: SMS_report_sMS_Contents_initiator,
        /**
         * @summary `transfer_status`.
         * @public
         * @readonly
         */
        readonly transfer_status: OPTIONAL<SMS_report_sMS_Contents_transfer_status>,
        /**
         * @summary `other_message`.
         * @public
         * @readonly
         */
        readonly other_message: OPTIONAL<SMS_report_sMS_Contents_other_message>,
        /**
         * @summary `content`.
         * @public
         * @readonly
         */
        readonly content: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `enhancedContent`.
         * @public
         * @readonly
         */
        readonly enhancedContent: OPTIONAL<SMS_report_sMS_Contents_enhancedContent>,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a SMS_report_sMS_Contents
     * @description
     * 
     * This takes an `object` and converts it to a `SMS_report_sMS_Contents`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `SMS_report_sMS_Contents`.
     * @returns {SMS_report_sMS_Contents}
     */
    public static _from_object (_o: { [_K in keyof (SMS_report_sMS_Contents)]: (SMS_report_sMS_Contents)[_K] }): SMS_report_sMS_Contents {
        return new SMS_report_sMS_Contents(_o.initiator, _o.transfer_status, _o.other_message, _o.content, _o.enhancedContent, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator = _enum_for_SMS_report_sMS_Contents_initiator;        /**
         * @summary The enum used as the type of the component `transfer_status`
         * @public
         * @static
         */

    public static _enum_for_transfer_status = _enum_for_SMS_report_sMS_Contents_transfer_status;        /**
         * @summary The enum used as the type of the component `other_message`
         * @public
         * @static
         */

    public static _enum_for_other_message = _enum_for_SMS_report_sMS_Contents_other_message;
}

/**
 * @summary The Leading Root Component Types of SMS_report_sMS_Contents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_SMS_report_sMS_Contents: $.ComponentSpec[] = [
    new $.ComponentSpec("initiator", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("transfer-status", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("other-message", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("content", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of SMS_report_sMS_Contents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_SMS_report_sMS_Contents: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of SMS_report_sMS_Contents
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_SMS_report_sMS_Contents: $.ComponentSpec[] = [
    new $.ComponentSpec("enhancedContent", true, $.hasTag(_TagClass.context, 5))
];

let _cached_decoder_for_SMS_report_sMS_Contents: $.ASN1Decoder<SMS_report_sMS_Contents> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) SMS_report_sMS_Contents
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_SMS_report_sMS_Contents (el: _Element): SMS_report_sMS_Contents {
    if (!_cached_decoder_for_SMS_report_sMS_Contents) { _cached_decoder_for_SMS_report_sMS_Contents = function (el: _Element): SMS_report_sMS_Contents {
    let initiator!: SMS_report_sMS_Contents_initiator;
    let transfer_status: OPTIONAL<SMS_report_sMS_Contents_transfer_status>;
    let other_message: OPTIONAL<SMS_report_sMS_Contents_other_message>;
    let content: OPTIONAL<OCTET_STRING>;
    let enhancedContent: OPTIONAL<SMS_report_sMS_Contents_enhancedContent>;
    let _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<SMS_report_sMS_Contents_initiator>(() => _decode_SMS_report_sMS_Contents_initiator)(_el); },
        "transfer-status": (_el: _Element): void => { transfer_status = $._decode_implicit<SMS_report_sMS_Contents_transfer_status>(() => _decode_SMS_report_sMS_Contents_transfer_status)(_el); },
        "other-message": (_el: _Element): void => { other_message = $._decode_implicit<SMS_report_sMS_Contents_other_message>(() => _decode_SMS_report_sMS_Contents_other_message)(_el); },
        "content": (_el: _Element): void => { content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el); },
        "enhancedContent": (_el: _Element): void => { enhancedContent = $._decode_implicit<SMS_report_sMS_Contents_enhancedContent>(() => _decode_SMS_report_sMS_Contents_enhancedContent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMS_report_sMS_Contents,
        _extension_additions_list_spec_for_SMS_report_sMS_Contents,
        _root_component_type_list_2_spec_for_SMS_report_sMS_Contents,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMS_report_sMS_Contents(
        initiator,
        transfer_status,
        other_message,
        content,
        enhancedContent,
        _unrecognizedExtensionsList
    );
}; }
    return _cached_decoder_for_SMS_report_sMS_Contents(el);
}

let _cached_encoder_for_SMS_report_sMS_Contents: $.ASN1Encoder<SMS_report_sMS_Contents> | null = null;

/**
 * @summary Encodes a(n) SMS_report_sMS_Contents into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The SMS_report_sMS_Contents, encoded as an ASN.1 Element.
 */
export
function _encode_SMS_report_sMS_Contents (value: SMS_report_sMS_Contents, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_SMS_report_sMS_Contents) { _cached_encoder_for_SMS_report_sMS_Contents = function (value: SMS_report_sMS_Contents, elGetter: $.ASN1Encoder<SMS_report_sMS_Contents>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_report_sMS_Contents_initiator, $.BER)(value.initiator, $.BER),
            /* IF_ABSENT  */ ((value.transfer_status === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_SMS_report_sMS_Contents_transfer_status, $.BER)(value.transfer_status, $.BER)),
            /* IF_ABSENT  */ ((value.other_message === undefined) ? undefined : $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_report_sMS_Contents_other_message, $.BER)(value.other_message, $.BER)),
            /* IF_ABSENT  */ ((value.content === undefined) ? undefined : $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.content, $.BER))
        ],
        [
            /* IF_ABSENT  */ ((value.enhancedContent === undefined) ? undefined : $._encode_implicit(_TagClass.context, 5, () => _encode_SMS_report_sMS_Contents_enhancedContent, $.BER)(value.enhancedContent, $.BER))
        ],
        (value._unrecognizedExtensionsList ? value._unrecognizedExtensionsList : []),
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_SMS_report_sMS_Contents(value, elGetter);
}


/* eslint-enable */
