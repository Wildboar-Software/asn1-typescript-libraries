/* eslint-disable */
import {
    type OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

import {
    type ReceiptTimeField,
    _decode_ReceiptTimeField,
    _encode_ReceiptTimeField,
} from "@wildboar/x400/IPMSInformationObjects";
import { type Acp127NotificationType, _decode_Acp127NotificationType, _encode_Acp127NotificationType } from "../MMSPerRecipientSpecifierExtensions/Acp127NotificationType.ta.mjs";
import { type AddressListIndicator, _decode_AddressListIndicator, _encode_AddressListIndicator } from "../MMSOtherNotificationTypeExtensions/AddressListIndicator.ta.mjs";
import { type Acp127Recipient, _decode_Acp127Recipient, _encode_Acp127Recipient } from "../MMSOtherNotificationTypeExtensions/Acp127Recipient.ta.mjs";
import { type Acp127SuppInfo, _decode_Acp127SuppInfo, _encode_Acp127SuppInfo } from "../MMSOtherNotificationTypeExtensions/Acp127SuppInfo.ta.mjs";


/**
 * @summary Acp127NotificationResponse
 * @description
 * 
 * Result of an attempt to transfer a message into an ACP 127 domain. Generated
 * only by ACP 127 gateways, as an other-notification-type extension. STANAG
 * 4406 (Ed. 2), Annex A, A3.1 and B.119.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * Acp127NotificationResponse ::= SET {
 *   acp127-notification-type  [0]  Acp127NotificationType,
 *   receipt-time              [1]  ReceiptTimeField,
 *   addressListIndicator      [2]  AddressListIndicator OPTIONAL,
 *   acp127-recipient          [3]  Acp127Recipient OPTIONAL,
 *   acp127-supp-info          [4]  Acp127SuppInfo OPTIONAL}
 * ```
 * 
 * @class
 */
export
class Acp127NotificationResponse {
    /**
     * @summary `acp127_notification_type`.
     * @description
     *
     * Whether the transfer was positive, negative, or a transfer without
     * responsibility. STANAG 4406 (Ed. 2), Annex A, A3.1 and B.119.
     * @public
     * @readonly
     */
    readonly acp127_notification_type: Acp127NotificationType;
    /**
     * @summary `receipt_time`.
     * @description
     *
     * When the gateway took the action being reported. Receipt time as in ITU-T
     * X.420 clause 8.3.1. STANAG 4406 (Ed. 2), Annex A, A3.1 and B.119.
     * @public
     * @readonly
     */
    readonly receipt_time: ReceiptTimeField;
    /**
     * @summary `addressListIndicator`.
     * @description
     *
     * Address lists of the message. Optional. STANAG 4406 (Ed. 2), Annex A,
     * A3.1 and B.119.
     * @public
     * @readonly
     */
    readonly addressListIndicator: OPTIONAL<AddressListIndicator>;
    /**
     * @summary `acp127_recipient`.
     * @description
     *
     * ACP 127 recipient address. Optional. STANAG 4406 (Ed. 2), Annex A, A3.1
     * and B.119.
     * @public
     * @readonly
     */
    readonly acp127_recipient: OPTIONAL<Acp127Recipient>;
    /**
     * @summary `acp127_supp_info`.
     * @description
     *
     * Supplementary information. Optional. Edition 2 does not prescribe the
     * text. STANAG 4406 (Ed. 2), Annex A, A3.1 and B.119.
     * @public
     * @readonly
     */
    readonly acp127_supp_info: OPTIONAL<Acp127SuppInfo>;

    constructor (
        acp127_notification_type: Acp127NotificationType,
        receipt_time: ReceiptTimeField,
        addressListIndicator?: OPTIONAL<AddressListIndicator>,
        acp127_recipient?: OPTIONAL<Acp127Recipient>,
        acp127_supp_info?: OPTIONAL<Acp127SuppInfo>
    ) {
        this.acp127_notification_type = acp127_notification_type;
        this.receipt_time = receipt_time;
        this.addressListIndicator = addressListIndicator;
        this.acp127_recipient = acp127_recipient;
        this.acp127_supp_info = acp127_supp_info;
    }

    /**
     * @summary Restructures an object into a Acp127NotificationResponse
     * @description
     * 
     * This takes an `object` and converts it to a `Acp127NotificationResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Acp127NotificationResponse`.
     * @returns {Acp127NotificationResponse}
     */
    public static _from_object (_o: { [_K in keyof (Acp127NotificationResponse)]: (Acp127NotificationResponse)[_K] }): Acp127NotificationResponse {
        return new Acp127NotificationResponse(_o.acp127_notification_type, _o.receipt_time, _o.addressListIndicator, _o.acp127_recipient, _o.acp127_supp_info);
    }


}

/**
 * @summary The Leading Root Component Types of Acp127NotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_Acp127NotificationResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("acp127-notification-type", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("receipt-time", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("addressListIndicator", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("acp127-recipient", true, $.hasTag(_TagClass.context, 3)),
    new $.ComponentSpec("acp127-supp-info", true, $.hasTag(_TagClass.context, 4))
];

/**
 * @summary The Trailing Root Component Types of Acp127NotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_Acp127NotificationResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of Acp127NotificationResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_Acp127NotificationResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_Acp127NotificationResponse: $.ASN1Decoder<Acp127NotificationResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Acp127NotificationResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_Acp127NotificationResponse (el: _Element): Acp127NotificationResponse {
    if (!_cached_decoder_for_Acp127NotificationResponse) { _cached_decoder_for_Acp127NotificationResponse = function (el: _Element): Acp127NotificationResponse {
    /* START_OF_SET_COMPONENT_DECLARATIONS */
    let acp127_notification_type!: Acp127NotificationType;
    let receipt_time!: ReceiptTimeField;
    let addressListIndicator: OPTIONAL<AddressListIndicator>;
    let acp127_recipient: OPTIONAL<Acp127Recipient>;
    let acp127_supp_info: OPTIONAL<Acp127SuppInfo>;
    /* END_OF_SET_COMPONENT_DECLARATIONS */
    /* START_OF_CALLBACKS_MAP */
    const callbacks: $.DecodingMap = {
        "acp127-notification-type": (_el: _Element): void => { acp127_notification_type = $._decode_implicit<Acp127NotificationType>(() => _decode_Acp127NotificationType)(_el); },
        "receipt-time": (_el: _Element): void => { receipt_time = $._decode_implicit<ReceiptTimeField>(() => _decode_ReceiptTimeField)(_el); },
        "addressListIndicator": (_el: _Element): void => { addressListIndicator = $._decode_implicit<AddressListIndicator>(() => _decode_AddressListIndicator)(_el); },
        "acp127-recipient": (_el: _Element): void => { acp127_recipient = $._decode_implicit<Acp127Recipient>(() => _decode_Acp127Recipient)(_el); },
        "acp127-supp-info": (_el: _Element): void => { acp127_supp_info = $._decode_implicit<Acp127SuppInfo>(() => _decode_Acp127SuppInfo)(_el); }
    };
    /* END_OF_CALLBACKS_MAP */
    $._parse_set(el, callbacks,
        _root_component_type_list_1_spec_for_Acp127NotificationResponse,
        _extension_additions_list_spec_for_Acp127NotificationResponse,
        _root_component_type_list_2_spec_for_Acp127NotificationResponse,
        undefined,
    );
    return new Acp127NotificationResponse( /* SET_CONSTRUCTOR_CALL */
        acp127_notification_type,
        receipt_time,
        addressListIndicator,
        acp127_recipient,
        acp127_supp_info
    );
}; }
    return _cached_decoder_for_Acp127NotificationResponse(el);
}

let _cached_encoder_for_Acp127NotificationResponse: $.ASN1Encoder<Acp127NotificationResponse> | null = null;

/**
 * @summary Encodes a(n) Acp127NotificationResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Acp127NotificationResponse, encoded as an ASN.1 Element.
 */
export
function _encode_Acp127NotificationResponse (value: Acp127NotificationResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_Acp127NotificationResponse) { _cached_encoder_for_Acp127NotificationResponse = function (value: Acp127NotificationResponse): _Element {
    const _components: _Element[] = new Array(5);
    let _components_i = 0;
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => _encode_Acp127NotificationType, $.BER)(value.acp127_notification_type, $.BER);
    _components[_components_i++] = /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_ReceiptTimeField, $.BER)(value.receipt_time, $.BER);
    if (value.addressListIndicator !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 2, () => _encode_AddressListIndicator, $.BER)(value.addressListIndicator, $.BER);
    }
    if (value.acp127_recipient !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 3, () => _encode_Acp127Recipient, $.BER)(value.acp127_recipient, $.BER);
    }
    if (value.acp127_supp_info !== undefined) {
        _components[_components_i++] = /* IF_ABSENT  */ $._encode_implicit(_TagClass.context, 4, () => _encode_Acp127SuppInfo, $.BER)(value.acp127_supp_info, $.BER);
    }
    _components.length = _components_i;
    return $._encodeSet(_components, $.BER);
}; }
    return _cached_encoder_for_Acp127NotificationResponse(value, elGetter);
}


/* eslint-enable */
