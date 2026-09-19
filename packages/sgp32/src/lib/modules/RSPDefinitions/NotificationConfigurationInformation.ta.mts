/* eslint-disable */
import {
    UTF8String,
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationEvent, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";
// export { NotificationEvent, NotificationEvent_notificationInstall /* IMPORTED_LONG_NAMED_BIT */, notificationInstall /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationEnable /* IMPORTED_LONG_NAMED_BIT */, notificationEnable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDisable /* IMPORTED_LONG_NAMED_BIT */, notificationDisable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDelete /* IMPORTED_LONG_NAMED_BIT */, notificationDelete /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";


/**
 * @summary NotificationConfigurationInformation
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationConfigurationInformation ::= SEQUENCE {
 *     profileManagementOperation NotificationEvent,
 *     notificationAddress UTF8String -- FQDN to forward the notification
 * }
 * ```
 * 
 * @class
 */
export
class NotificationConfigurationInformation {
    constructor (
        /**
         * @summary `profileManagementOperation`.
         * @public
         * @readonly
         */
        readonly profileManagementOperation: NotificationEvent,
        /**
         * @summary `notificationAddress`.
         * @public
         * @readonly
         */
        readonly notificationAddress: UTF8String
    ) {}

    /**
     * @summary Restructures an object into a NotificationConfigurationInformation
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationConfigurationInformation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationConfigurationInformation`.
     * @returns {NotificationConfigurationInformation}
     */
    public static _from_object (_o: { [_K in keyof (NotificationConfigurationInformation)]: (NotificationConfigurationInformation)[_K] }): NotificationConfigurationInformation {
        return new NotificationConfigurationInformation(_o.profileManagementOperation, _o.notificationAddress);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationConfigurationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationConfigurationInformation: $.ComponentSpec[] = [
    new $.ComponentSpec("profileManagementOperation", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("notificationAddress", false, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of NotificationConfigurationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationConfigurationInformation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationConfigurationInformation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationConfigurationInformation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationConfigurationInformation: $.ASN1Decoder<NotificationConfigurationInformation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationConfigurationInformation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationConfigurationInformation (el: _Element): NotificationConfigurationInformation {
    if (!_cached_decoder_for_NotificationConfigurationInformation) { _cached_decoder_for_NotificationConfigurationInformation = function (el: _Element): NotificationConfigurationInformation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("NotificationConfigurationInformation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "profileManagementOperation";
    sequence[1].name = "notificationAddress";
    let profileManagementOperation!: NotificationEvent;
    let notificationAddress!: UTF8String;
    profileManagementOperation = _decode_NotificationEvent(sequence[0]);
    notificationAddress = $._decodeUTF8String(sequence[1]);
    return new NotificationConfigurationInformation(
        profileManagementOperation,
        notificationAddress,

    );
}; }
    return _cached_decoder_for_NotificationConfigurationInformation(el);
}

let _cached_encoder_for_NotificationConfigurationInformation: $.ASN1Encoder<NotificationConfigurationInformation> | null = null;

/**
 * @summary Encodes a(n) NotificationConfigurationInformation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationConfigurationInformation, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationConfigurationInformation (value: NotificationConfigurationInformation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationConfigurationInformation) { _cached_encoder_for_NotificationConfigurationInformation = function (value: NotificationConfigurationInformation, elGetter: $.ASN1Encoder<NotificationConfigurationInformation>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NotificationEvent(value.profileManagementOperation, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.notificationAddress, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}; }
    return _cached_encoder_for_NotificationConfigurationInformation(value, elGetter);
}


/* eslint-enable */
