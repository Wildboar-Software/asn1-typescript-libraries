/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { Notification, _decode_Notification, _encode_Notification } from "../CCSDS-SLE-TRANSFER-SERVICE-RAF-STRUCTURES/Notification.ta.mjs";


/**
 * @summary RafSyncNotifyInvocation
 * @description
 * 
 * Unconfirmed provider notification of an event that changes or disrupts the
 * frames being delivered. Valid only in state 3 (active). The provider inserts
 * it in the transfer buffer after the last frame acquired before the event and
 * before the first frame acquired after it, so its order against
 * RAF-TRANSFER-DATA follows Earth Receive Time. In complete online mode the
 * same record is stored in the online frame buffer. Offline delivery carries
 * only the end-of-data notification.
 * 
 * CCSDS 911.1-B-5, sections 3.7, 3.1.9, and 3.1.9.3.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RafSyncNotifyInvocation ::= SEQUENCE
 * {   invokerCredentials                 Credentials
 * ,   notification                       Notification
 * }
 * ```
 * 
 * @class
 */
export
class RafSyncNotifyInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * Information with which the user authenticates this invocation. When the
     * agreed level is `all`, every RAF invocation and return except
     * RAF-PEER-ABORT is authenticated; `bind` authenticates only RAF-BIND;
     * `none` leaves every invocation and return unauthenticated. When
     * this invocation is unauthenticated, the value should be `unused`.
     * CCSDS 911.1-B-5, sections
     * 3.7.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `notification`.
     * @description
     * The event, and the value that event carries. Loss of frame
     * synchronization and a production-status change carry a value. Data
     * discarded because of backlog, and end of data, carry none. CCSDS
     * 911.1-B-5, sections 3.7.2.3 and 3.7.2.4.
     * @public
     * @readonly
     */
    readonly notification: Notification;

    constructor (
        invokerCredentials: Credentials,
        notification: Notification
    ) {
        this.invokerCredentials = invokerCredentials;
        this.notification = notification;
    }

    /**
     * @summary Restructures an object into a RafSyncNotifyInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RafSyncNotifyInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RafSyncNotifyInvocation`.
     * @returns {RafSyncNotifyInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RafSyncNotifyInvocation)]: (RafSyncNotifyInvocation)[_K] }): RafSyncNotifyInvocation {
        return new RafSyncNotifyInvocation(_o.invokerCredentials, _o.notification);
    }


}

/**
 * @summary The Leading Root Component Types of RafSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RafSyncNotifyInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("notification", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RafSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RafSyncNotifyInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RafSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RafSyncNotifyInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RafSyncNotifyInvocation: $.ASN1Decoder<RafSyncNotifyInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RafSyncNotifyInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RafSyncNotifyInvocation (el: _Element): RafSyncNotifyInvocation {
    if (!_cached_decoder_for_RafSyncNotifyInvocation) { _cached_decoder_for_RafSyncNotifyInvocation = function (el: _Element): RafSyncNotifyInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RafSyncNotifyInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "notification";
    let invokerCredentials!: Credentials;
    let notification!: Notification;
    invokerCredentials = _decode_Credentials(sequence[0]);
    notification = _decode_Notification(sequence[1]);
    return new RafSyncNotifyInvocation(
        invokerCredentials,
        notification,

    );
}; }
    return _cached_decoder_for_RafSyncNotifyInvocation(el);
}

let _cached_encoder_for_RafSyncNotifyInvocation: $.ASN1Encoder<RafSyncNotifyInvocation> | null = null;

/**
 * @summary Encodes a(n) RafSyncNotifyInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RafSyncNotifyInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RafSyncNotifyInvocation (value: RafSyncNotifyInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RafSyncNotifyInvocation) { _cached_encoder_for_RafSyncNotifyInvocation = function (value: RafSyncNotifyInvocation, _elGetter: $.ASN1Encoder<RafSyncNotifyInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Notification(value.notification, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RafSyncNotifyInvocation(value, elGetter);
}


/* eslint-enable */
