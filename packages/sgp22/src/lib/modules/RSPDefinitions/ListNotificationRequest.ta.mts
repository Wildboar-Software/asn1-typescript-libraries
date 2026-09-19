/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationEvent, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";
// export { NotificationEvent, NotificationEvent_notificationInstall /* IMPORTED_LONG_NAMED_BIT */, notificationInstall /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationEnable /* IMPORTED_LONG_NAMED_BIT */, notificationEnable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDisable /* IMPORTED_LONG_NAMED_BIT */, notificationDisable /* IMPORTED_SHORT_NAMED_BIT */, NotificationEvent_notificationDelete /* IMPORTED_LONG_NAMED_BIT */, notificationDelete /* IMPORTED_SHORT_NAMED_BIT */, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";


/**
 * @summary ListNotificationRequest
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ListNotificationRequest ::= [40] SEQUENCE { -- Tag 'BF28'
 *     profileManagementOperation [1] NotificationEvent OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class ListNotificationRequest {
    constructor (
        /**
         * @summary `profileManagementOperation`.
         * @public
         * @readonly
         */
        readonly profileManagementOperation: OPTIONAL<NotificationEvent>
    ) {}

    /**
     * @summary Restructures an object into a ListNotificationRequest
     * @description
     * 
     * This takes an `object` and converts it to a `ListNotificationRequest`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ListNotificationRequest`.
     * @returns {ListNotificationRequest}
     */
    public static _from_object (_o: { [_K in keyof (ListNotificationRequest)]: (ListNotificationRequest)[_K] }): ListNotificationRequest {
        return new ListNotificationRequest(_o.profileManagementOperation);
    }


}

/**
 * @summary The Leading Root Component Types of ListNotificationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ListNotificationRequest: $.ComponentSpec[] = [
    new $.ComponentSpec("profileManagementOperation", true, $.hasTag(_TagClass.context, 1))
];

/**
 * @summary The Trailing Root Component Types of ListNotificationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ListNotificationRequest: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ListNotificationRequest
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ListNotificationRequest: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ListNotificationRequest: $.ASN1Decoder<ListNotificationRequest> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ListNotificationRequest
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ListNotificationRequest (el: _Element): ListNotificationRequest {
    if (!_cached_decoder_for_ListNotificationRequest) { _cached_decoder_for_ListNotificationRequest = $._decode_implicit<ListNotificationRequest>(() => function (el: _Element): ListNotificationRequest {
    let profileManagementOperation: OPTIONAL<NotificationEvent>;
    const callbacks: $.DecodingMap = {
        "profileManagementOperation": (_el: _Element): void => { profileManagementOperation = $._decode_implicit<NotificationEvent>(() => _decode_NotificationEvent)(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ListNotificationRequest,
        _extension_additions_list_spec_for_ListNotificationRequest,
        _root_component_type_list_2_spec_for_ListNotificationRequest,
        undefined,
    );
    return new ListNotificationRequest(
        profileManagementOperation
    );
}); }
    return _cached_decoder_for_ListNotificationRequest(el);
}

let _cached_encoder_for_ListNotificationRequest: $.ASN1Encoder<ListNotificationRequest> | null = null;

/**
 * @summary Encodes a(n) ListNotificationRequest into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ListNotificationRequest, encoded as an ASN.1 Element.
 */
export
function _encode_ListNotificationRequest (value: ListNotificationRequest, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ListNotificationRequest) { _cached_encoder_for_ListNotificationRequest = $._encode_implicit(_TagClass.context, 40, () => function (value: ListNotificationRequest, elGetter: $.ASN1Encoder<ListNotificationRequest>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.profileManagementOperation === undefined) ? undefined : $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationEvent, $.BER)(value.profileManagementOperation, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ListNotificationRequest(value, elGetter);
}


/* eslint-enable */
