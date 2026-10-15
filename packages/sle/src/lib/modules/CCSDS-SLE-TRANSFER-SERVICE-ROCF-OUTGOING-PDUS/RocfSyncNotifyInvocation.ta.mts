/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { Notification, _decode_Notification, _encode_Notification } from "../CCSDS-SLE-TRANSFER-SERVICE-ROCF-STRUCTURES/Notification.ta.mjs";


/**
 * @summary RocfSyncNotifyInvocation
 * @description
 * 
 * Provider notification of an event that changes or interrupts the OCFs being
 * delivered. Unconfirmed, provider-only, and valid only in state 3 (active).
 * The notification is ordered with ROCF-TRANSFER-DATA so that it falls between
 * the OCFs acquired before the event and those acquired after it. Offline
 * delivery carries only the end-of-data notification. The provider state stays
 * unchanged.
 *
 * CCSDS 911.5-B-4, sections 3.7 and 3.1.9.3.11.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RocfSyncNotifyInvocation ::= SEQUENCE
 * {  invokerCredentials         Credentials
 * ,  notification               Notification
 * }
 * ```
 * 
 * @class
 */
export
class RocfSyncNotifyInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     * 
     * Credentials the user uses to authenticate this provider invocation. When
     * the agreed authentication level does not cover the invocation, the value
     * is unused. The octet layout is the bilaterally agreed algorithm, which
     * this specification leaves unspecified. CCSDS 911.5-B-4, sections 3.1.5
     * and 3.7.2.2.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `notification`.
     * @description
     * 
     * The event and, where section 3.7.2.4 requires one, its value. Loss of
     * frame synchronization and a production-status change carry a value. Data
     * discarded due to excessive backlog and end of data carry none.
     *
     * CCSDS 911.5-B-4, sections 3.7.2.3 and 3.7.2.4.
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
     * @summary Restructures an object into a RocfSyncNotifyInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RocfSyncNotifyInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RocfSyncNotifyInvocation`.
     * @returns {RocfSyncNotifyInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RocfSyncNotifyInvocation)]: (RocfSyncNotifyInvocation)[_K] }): RocfSyncNotifyInvocation {
        return new RocfSyncNotifyInvocation(_o.invokerCredentials, _o.notification);
    }


}

/**
 * @summary The Leading Root Component Types of RocfSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RocfSyncNotifyInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("notification", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RocfSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RocfSyncNotifyInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RocfSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RocfSyncNotifyInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RocfSyncNotifyInvocation: $.ASN1Decoder<RocfSyncNotifyInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RocfSyncNotifyInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RocfSyncNotifyInvocation (el: _Element): RocfSyncNotifyInvocation {
    if (!_cached_decoder_for_RocfSyncNotifyInvocation) { _cached_decoder_for_RocfSyncNotifyInvocation = function (el: _Element): RocfSyncNotifyInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RocfSyncNotifyInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "notification";
    let invokerCredentials!: Credentials;
    let notification!: Notification;
    invokerCredentials = _decode_Credentials(sequence[0]);
    notification = _decode_Notification(sequence[1]);
    return new RocfSyncNotifyInvocation(
        invokerCredentials,
        notification,

    );
}; }
    return _cached_decoder_for_RocfSyncNotifyInvocation(el);
}

let _cached_encoder_for_RocfSyncNotifyInvocation: $.ASN1Encoder<RocfSyncNotifyInvocation> | null = null;

/**
 * @summary Encodes a(n) RocfSyncNotifyInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RocfSyncNotifyInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RocfSyncNotifyInvocation (value: RocfSyncNotifyInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RocfSyncNotifyInvocation) { _cached_encoder_for_RocfSyncNotifyInvocation = function (value: RocfSyncNotifyInvocation, _elGetter: $.ASN1Encoder<RocfSyncNotifyInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Notification(value.notification, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RocfSyncNotifyInvocation(value, elGetter);
}


/* eslint-enable */
