/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_NotificationSentResponse_deleteNotificationStatus, _encode_NotificationSentResponse_deleteNotificationStatus, NotificationSentResponse_deleteNotificationStatus } from "../RSPDefinitions/NotificationSentResponse-deleteNotificationStatus.ta.mjs";
// export { NotificationSentResponse_deleteNotificationStatus, NotificationSentResponse_deleteNotificationStatus_ok /* IMPORTED_LONG_NAMED_INTEGER */, ok /* IMPORTED_SHORT_NAMED_INTEGER */, NotificationSentResponse_deleteNotificationStatus_nothingToDelete /* IMPORTED_LONG_NAMED_INTEGER */, nothingToDelete /* IMPORTED_SHORT_NAMED_INTEGER */, NotificationSentResponse_deleteNotificationStatus_undefinedError /* IMPORTED_LONG_NAMED_INTEGER */, undefinedError /* IMPORTED_SHORT_NAMED_INTEGER */, _decode_NotificationSentResponse_deleteNotificationStatus, _encode_NotificationSentResponse_deleteNotificationStatus } from "../RSPDefinitions/NotificationSentResponse-deleteNotificationStatus.ta.mjs";


/**
 * @summary NotificationSentResponse
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationSentResponse ::= [48] SEQUENCE { -- Tag 'BF30'
 *     deleteNotificationStatus INTEGER {ok(0), nothingToDelete(1), undefinedError(127)}
 * }
 * ```
 * 
 * @class
 */
export
class NotificationSentResponse {
    constructor (
        /**
         * @summary `deleteNotificationStatus`.
         * @public
         * @readonly
         */
        readonly deleteNotificationStatus: NotificationSentResponse_deleteNotificationStatus
    ) {}

    /**
     * @summary Restructures an object into a NotificationSentResponse
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationSentResponse`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationSentResponse`.
     * @returns {NotificationSentResponse}
     */
    public static _from_object (_o: { [_K in keyof (NotificationSentResponse)]: (NotificationSentResponse)[_K] }): NotificationSentResponse {
        return new NotificationSentResponse(_o.deleteNotificationStatus);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationSentResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationSentResponse: $.ComponentSpec[] = [
    new $.ComponentSpec("deleteNotificationStatus", false, $.hasTag(_TagClass.context, 0))
];

/**
 * @summary The Trailing Root Component Types of NotificationSentResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationSentResponse: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationSentResponse
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationSentResponse: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationSentResponse: $.ASN1Decoder<NotificationSentResponse> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationSentResponse
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationSentResponse (el: _Element): NotificationSentResponse {
    if (!_cached_decoder_for_NotificationSentResponse) { _cached_decoder_for_NotificationSentResponse = $._decode_implicit<NotificationSentResponse>(() => function (el: _Element): NotificationSentResponse {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 1) {
        throw new _ConstructionError("NotificationSentResponse contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "deleteNotificationStatus";
    let deleteNotificationStatus!: NotificationSentResponse_deleteNotificationStatus;
    deleteNotificationStatus = _decode_NotificationSentResponse_deleteNotificationStatus(sequence[0]);
    return new NotificationSentResponse(
        deleteNotificationStatus,

    );
}); }
    return _cached_decoder_for_NotificationSentResponse(el);
}

let _cached_encoder_for_NotificationSentResponse: $.ASN1Encoder<NotificationSentResponse> | null = null;

/**
 * @summary Encodes a(n) NotificationSentResponse into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationSentResponse, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationSentResponse (value: NotificationSentResponse, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationSentResponse) { _cached_encoder_for_NotificationSentResponse = $._encode_implicit(_TagClass.context, 48, () => function (value: NotificationSentResponse, elGetter: $.ASN1Encoder<NotificationSentResponse>): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ _encode_NotificationSentResponse_deleteNotificationStatus(value.deleteNotificationStatus, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_NotificationSentResponse(value, elGetter);
}


/* eslint-enable */
