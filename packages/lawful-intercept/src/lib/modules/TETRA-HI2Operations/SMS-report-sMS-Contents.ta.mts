/* eslint-disable */
import {
    type OCTET_STRING,
    type OPTIONAL,
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type SMS_report_sMS_Contents_initiator, _decode_SMS_report_sMS_Contents_initiator, _encode_SMS_report_sMS_Contents_initiator, _enum_for_SMS_report_sMS_Contents_initiator } from "../TETRA-HI2Operations/SMS-report-sMS-Contents-initiator.ta.mjs";
// export { SMS_report_sMS_Contents_initiator, _enum_for_SMS_report_sMS_Contents_initiator, SMS_report_sMS_Contents_initiator_target /* IMPORTED_LONG_ENUMERATION_ITEM */, target /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_initiator_server /* IMPORTED_LONG_ENUMERATION_ITEM */, server /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_initiator_undefined_party /* IMPORTED_LONG_ENUMERATION_ITEM */, undefined_party /* IMPORTED_SHORT_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_initiator, _encode_SMS_report_sMS_Contents_initiator } from "../TETRA-HI2Operations/SMS-report-sMS-Contents-initiator.ta.mjs";
import { type SMS_report_sMS_Contents_transfer_status, _decode_SMS_report_sMS_Contents_transfer_status, _encode_SMS_report_sMS_Contents_transfer_status, _enum_for_SMS_report_sMS_Contents_transfer_status } from "../TETRA-HI2Operations/SMS-report-sMS-Contents-transfer-status.ta.mjs";
// export { SMS_report_sMS_Contents_transfer_status, _enum_for_SMS_report_sMS_Contents_transfer_status, SMS_report_sMS_Contents_transfer_status_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_not_succeed_transfer /* IMPORTED_LONG_ENUMERATION_ITEM */, not_succeed_transfer /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_transfer_status_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_transfer_status, _encode_SMS_report_sMS_Contents_transfer_status } from "../TETRA-HI2Operations/SMS-report-sMS-Contents-transfer-status.ta.mjs";
import { type SMS_report_sMS_Contents_other_message, _decode_SMS_report_sMS_Contents_other_message, _encode_SMS_report_sMS_Contents_other_message, _enum_for_SMS_report_sMS_Contents_other_message } from "../TETRA-HI2Operations/SMS-report-sMS-Contents-other-message.ta.mjs";
// export { SMS_report_sMS_Contents_other_message, _enum_for_SMS_report_sMS_Contents_other_message, SMS_report_sMS_Contents_other_message_yes /* IMPORTED_LONG_ENUMERATION_ITEM */, yes /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_no /* IMPORTED_LONG_ENUMERATION_ITEM */, no /* IMPORTED_SHORT_ENUMERATION_ITEM */, SMS_report_sMS_Contents_other_message_undefined /* IMPORTED_LONG_ENUMERATION_ITEM */, _decode_SMS_report_sMS_Contents_other_message, _encode_SMS_report_sMS_Contents_other_message } from "../TETRA-HI2Operations/SMS-report-sMS-Contents-other-message.ta.mjs";


/**
 * @summary SMS_report_sMS_Contents
 * @description
 * 
 * Contents of one SMS report: the sending party, an optional transfer result,
 * an optional indication that further SMS will follow, and optional SMS
 * content. An extension marker follows the content.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SMS-report-sMS-Contents ::= SEQUENCE {
 *     initiator         [1] ENUMERATED
 *     {
 *         -- party which sent the SMS
 *         target(0),
 *         server(1),
 *         undefined-party(2),
 *         ...
 *     }
 *     ,
 *     transfer-status     [2] ENUMERATED
 *     {
 *         succeed-transfer(0),
 *         --the transfer of the SMS message succeeds
 *         not-succeed-transfer(1),
 *         undefined(2),
 *         ...
 *     }
 *     type OPTIONAL,
 *     other-message         [3] ENUMERATED
 *     {
 *         -- In case of terminating call, indicates if the server will send other SMS.
 *         yes(0),
 *         no(1),
 *         undefined(2),
 *         ...
 *     }
 *     type OPTIONAL,
 *     content                     [4] OCTET STRING (SIZE (1..270)) OPTIONAL,
 *     -- Encoded in the format defined for the SMS mobile.
 *     ...
 * }
 * ```
 * 
 * @class
 */
export
class SMS_report_sMS_Contents {
    /**
     * @summary `initiator`.
     * @description
     *
     * Party which sent the SMS: the target, the server, or an undefined party.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly initiator: SMS_report_sMS_Contents_initiator;
    /**
     * @summary `transfer_status`.
     * @description
     *
     * Whether transfer of the SMS succeeded. Only the successful value has a
     * behaviour sentence. The other two values are names.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly transfer_status: OPTIONAL<SMS_report_sMS_Contents_transfer_status>;
    /**
     * @summary `other_message`.
     * @description
     *
     * For a terminating SMS, whether the server will send other SMS.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly other_message: OPTIONAL<SMS_report_sMS_Contents_other_message>;
    /**
     * @summary `content`.
     * @description
     *
     * SMS content, encoded in the format defined for the SMS mobile. The
     * present document does not restate that format. Clause B.5.3 describes the
     * GPRS SMS field as the SMS content with its header.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause B.5.3, clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly content: OPTIONAL<OCTET_STRING>;
    /**
     * @summary Extensions that are not recognized.
     * @description
     *
     * Extension additions carried after the extension marker that were not
     * mapped to a named component. The present document does not define their
     * content.
     *
     * ETSI TS 101 671 V3.15.1 (2018-06), clause D.10.3.
     * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
     *
     * @public
     * @readonly
     */
    readonly _unrecognizedExtensionsList: _Element[];

    constructor (
        initiator: SMS_report_sMS_Contents_initiator,
        transfer_status?: OPTIONAL<SMS_report_sMS_Contents_transfer_status>,
        other_message?: OPTIONAL<SMS_report_sMS_Contents_other_message>,
        content?: OPTIONAL<OCTET_STRING>,
        _unrecognizedExtensionsList: _Element[] = []
    ) {
        this.initiator = initiator;
        this.transfer_status = transfer_status;
        this.other_message = other_message;
        this.content = content;
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
        return new SMS_report_sMS_Contents(_o.initiator, _o.transfer_status, _o.other_message, _o.content, _o._unrecognizedExtensionsList);
    }

        /**
         * @summary The enum used as the type of the component `initiator`
         * @public
         * @static
         */

    public static _enum_for_initiator: typeof _enum_for_SMS_report_sMS_Contents_initiator = _enum_for_SMS_report_sMS_Contents_initiator;        /**
         * @summary The enum used as the type of the component `transfer_status`
         * @public
         * @static
         */

    public static _enum_for_transfer_status: typeof _enum_for_SMS_report_sMS_Contents_transfer_status = _enum_for_SMS_report_sMS_Contents_transfer_status;        /**
         * @summary The enum used as the type of the component `other_message`
         * @public
         * @static
         */

    public static _enum_for_other_message: typeof _enum_for_SMS_report_sMS_Contents_other_message = _enum_for_SMS_report_sMS_Contents_other_message;
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
    const _unrecognizedExtensionsList: _Element[] = [];
    const callbacks: $.DecodingMap = {
        "initiator": (_el: _Element): void => { initiator = $._decode_implicit<SMS_report_sMS_Contents_initiator>(() => _decode_SMS_report_sMS_Contents_initiator)(_el); },
        "transfer-status": (_el: _Element): void => { transfer_status = $._decode_implicit<SMS_report_sMS_Contents_transfer_status>(() => _decode_SMS_report_sMS_Contents_transfer_status)(_el); },
        "other-message": (_el: _Element): void => { other_message = $._decode_implicit<SMS_report_sMS_Contents_other_message>(() => _decode_SMS_report_sMS_Contents_other_message)(_el); },
        "content": (_el: _Element): void => {
            content = $._decode_implicit<OCTET_STRING>(() => $._decodeOctetString)(_el);
            if (content.length < 1 || content.length > 270) {
                throw new ASN1SizeError("SMS_report_sMS_Contents.content violates SIZE constraint");
            }
        }
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
    const _components: _Element[] = new Array(4 + (_unrecognized ? _unrecognized.length : 0));
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_SMS_report_sMS_Contents_initiator, $.BER)(value.initiator, $.BER);
    if (value.transfer_status !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_SMS_report_sMS_Contents_transfer_status, $.BER)(value.transfer_status, $.BER);
    }
    if (value.other_message !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_SMS_report_sMS_Contents_other_message, $.BER)(value.other_message, $.BER);
    }
    if (value.content !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => $._encodeOctetString, $.BER)(value.content, $.BER);
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
