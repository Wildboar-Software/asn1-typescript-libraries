/* eslint-disable */
import {
    BOOLEAN,
    OCTET_STRING,
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SMS_report_sMS_Contents_sms_initiator, _decode_SMS_report_sMS_Contents_sms_initiator, _encode_SMS_report_sMS_Contents_sms_initiator, _enum_for_SMS_report_sMS_Contents_sms_initiator } from "../UmtsHI2Operations/SMS-report-sMS-Contents-sms-initiator.ta.mjs";
// export { SMS_report_sMS_Contents_sms_initiator, _enum_for_SMS_report_sMS_Contents_sms_initiator, SMS_report_sMS_Contents_sms_initiator_target /* IMPORTED_LONG_ENUMERATION_ITEM */, target /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_sms_initiator_server /* IMPORTED_LONG_ENUMERATION_ITEM */, server /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_sms_initiator_undefined_party /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_sms_initiator, _encode_SMS_report_sMS_Contents_sms_initiator } from "../UmtsHI2Operations/SMS-report-sMS-Contents-sms-initiator.ta.mjs";
import { SMS_report_sMS_Contents_transfer_status, _decode_SMS_report_sMS_Contents_transfer_status, _encode_SMS_report_sMS_Contents_transfer_status, _enum_for_SMS_report_sMS_Contents_transfer_status } from "../UmtsHI2Operations/SMS-report-sMS-Contents-transfer-status.ta.mjs";
// export { SMS_report_sMS_Contents_transfer_status, _enum_for_SMS_report_sMS_Contents_transfer_status, SMS_report_sMS_Contents_transfer_status_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_not_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, not_succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_transfer_status, _encode_SMS_report_sMS_Contents_transfer_status } from "../UmtsHI2Operations/SMS-report-sMS-Contents-transfer-status.ta.mjs";
import { SMS_report_sMS_Contents_other_message, _decode_SMS_report_sMS_Contents_other_message, _encode_SMS_report_sMS_Contents_other_message, _enum_for_SMS_report_sMS_Contents_other_message } from "../UmtsHI2Operations/SMS-report-sMS-Contents-other-message.ta.mjs";
// export { SMS_report_sMS_Contents_other_message, _enum_for_SMS_report_sMS_Contents_other_message, SMS_report_sMS_Contents_other_message_yes /* IMPORTED_LONG_ENUMERATION_ITEM */, yes /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_no /* IMPORTED_LONG_ENUMERATION_ITEM */, no /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_other_message, _encode_SMS_report_sMS_Contents_other_message } from "../UmtsHI2Operations/SMS-report-sMS-Contents-other-message.ta.mjs";


/**
 * @summary SMS_report_sMS_Contents
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents ::= SEQUENCE {
 *     sms-initiator        [1] ENUMERATED -- party which sent the  SMS
 *     {
 *         target            (0),
 *         server            (1),
 *         undefined-party    (2),
 *         ...
 *     }
 *     ,
 *     transfer-status        [2] ENUMERATED
 *     {
 *         succeed-transfer    (0), -- the transfer of the SMS message succeeds
 *         not-succeed-transfer(1),
 *         undefined            (2),
 *         ...
 *     }
 *     OPTIONAL,
 *     other-message        [3] ENUMERATED -- in case of terminating call, indicates if
 *     -- the server will send other SMS
 *     {
 *         yes            (0),
 *         no            (1),
 *         undefined    (2),
 *         ...
 *     }
 *     OPTIONAL,
 *     content                [4] OCTET STRING (SIZE (1 .. 270)) OPTIONAL,
 *     -- Encoded in the format defined for the SMS mobile
 *     ...,
 *     sMSContentRemovedIndicator [5] BOOLEAN OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class SMS_report_sMS_Contents {
    /**
     * @summary `sms_initiator`.
     * @public
     * @readonly
     */
    readonly sms_initiator: SMS_report_sMS_Contents_sms_initiator;
    /**
     * @summary `transfer_status`.
     * @public
     * @readonly
     */
    readonly transfer_status: OPTIONAL<SMS_report_sMS_Contents_transfer_status>;
    /**
     * @summary `other_message`.
     * @public
     * @readonly
     */
    readonly other_message: OPTIONAL<SMS_report_sMS_Contents_other_message>;
    /**
     * @summary `content`.
     * @public
     * @readonly
     */
    readonly content: OPTIONAL<OCTET_STRING>;
    /**
     * @summary `sMSContentRemovedIndicator`.
     * @public
     * @readonly
     */
    readonly sMSContentRemovedIndicator: OPTIONAL<BOOLEAN>;
    /**
     * @summary Extensions that are not recognized.
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        sms_initiator: SMS_report_sMS_Contents_sms_initiator,
        transfer_status: OPTIONAL<SMS_report_sMS_Contents_transfer_status>,
        other_message: OPTIONAL<SMS_report_sMS_Contents_other_message>,
        content: OPTIONAL<OCTET_STRING>,
        sMSContentRemovedIndicator: OPTIONAL<BOOLEAN>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.sms_initiator = sms_initiator;
        this.transfer_status = transfer_status;
        this.other_message = other_message;
        this.content = content;
        this.sMSContentRemovedIndicator = sMSContentRemovedIndicator;
        this._unrecognizedExtensionsList = _unrecognizedExtensionsList;
    }

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
        return new SMS_report_sMS_Contents(_o.sms_initiator, _o.transfer_status, _o.other_message, _o.content, _o.sMSContentRemovedIndicator, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `sms_initiator`
         * @public
         * @static
         */

    public static _enum_for_sms_initiator = _enum_for_SMS_report_sMS_Contents_sms_initiator;        /**
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
    new $.ComponentSpec("sms-initiator", false, $.hasTag(_TagClass.context, 1)),
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
    new $.ComponentSpec("sMSContentRemovedIndicator", true, $.hasTag(_TagClass.context, 5))
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
    let sms_initiator!: SMS_report_sMS_Contents_sms_initiator;
    let transfer_status: OPTIONAL<SMS_report_sMS_Contents_transfer_status>;
    let other_message: OPTIONAL<SMS_report_sMS_Contents_other_message>;
    let content: OPTIONAL<OCTET_STRING>;
    let sMSContentRemovedIndicator: OPTIONAL<BOOLEAN>;
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "sms-initiator": (_el: _Element): void => { sms_initiator = $._decode_implicit<SMS_report_sMS_Contents_sms_initiator>(() => _decode_SMS_report_sMS_Contents_sms_initiator)(_el); },
        "transfer-status": (_el: _Element): void => { transfer_status = $._decode_implicit<SMS_report_sMS_Contents_transfer_status>(() => _decode_SMS_report_sMS_Contents_transfer_status)(_el); },
        "other-message": (_el: _Element): void => { other_message = $._decode_implicit<SMS_report_sMS_Contents_other_message>(() => _decode_SMS_report_sMS_Contents_other_message)(_el); },
        "content": (_el: _Element): void => {
            content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (content.length < 1 || content.length > 270) {
                throw new ASN1SizeError("SMS_report_sMS_Contents.content violates SIZE constraint");
            }
        },
        "sMSContentRemovedIndicator": (_el: _Element): void => { sMSContentRemovedIndicator = $._decode_implicit<BOOLEAN>(() => $._decodeBoolean)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_SMS_report_sMS_Contents,
        _extension_additions_list_spec_for_SMS_report_sMS_Contents,
        _root_component_type_list_2_spec_for_SMS_report_sMS_Contents,
        (ext: _Element): void => { _unrecognizedExtensionsList.push(ext); },
    );
    return new SMS_report_sMS_Contents(
        sms_initiator,
        transfer_status,
        other_message,
        content,
        sMSContentRemovedIndicator,
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
    const _unrecognized = value._unrecognizedExtensionsList;
    const _components: _Element[] = new Array(5 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_report_sMS_Contents_sms_initiator, $.BER)(value.sms_initiator, $.BER);
    if (value.transfer_status !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMS_report_sMS_Contents_transfer_status, $.BER)(value.transfer_status, $.BER);
    }
    if (value.other_message !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_report_sMS_Contents_other_message, $.BER)(value.other_message, $.BER);
    }
    if (value.content !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.content, $.BER);
    }
    if (value.sMSContentRemovedIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 5, () => $._encodeBoolean, $.BER)(value.sMSContentRemovedIndicator, $.BER);
    }
    if (_unrecognized) {
        for (let _unrecognized_i = 0; _unrecognized_i < _unrecognized.length; _unrecognized_i++) {
            _components[_components_i++] = _unrecognized[_unrecognized_i];
        }
    }
    _components.length = _components_i;
    return $._encodeSequence(_components, $.BER);
}; }
    return _cached_encoder_for_SMS_report_sMS_Contents(value, elGetter);
}


/* eslint-enable */
