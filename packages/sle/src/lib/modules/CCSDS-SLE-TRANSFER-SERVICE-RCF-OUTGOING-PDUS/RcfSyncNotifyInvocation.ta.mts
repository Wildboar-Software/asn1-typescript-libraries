/* eslint-disable */
import {
    ASN1ConstructionError as _ConstructionError,
    ASN1Element as _Element
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { Credentials, _decode_Credentials, _encode_Credentials } from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/Credentials.ta.mjs";
import { Notification, _decode_Notification, _encode_Notification } from "../CCSDS-SLE-TRANSFER-SERVICE-RCF-STRUCTURES/Notification.ta.mjs";


/**
 * @summary RcfSyncNotifyInvocation
 * @description
 *
 * The provider notifies the user of an event affecting RCF production.
 * Unconfirmed, legal only in state 3 (active), and invoked only by the
 * provider. Its position among RCF-TRANSFER-DATA invocations follows the
 * chronology of the frames' Earth Receive Times. The provider state stays
 * unchanged. Offline delivery sends end-of-data and omits the other
 * notifications.
 *
 * CCSDS 911.2-B-4, sections 3.7 and 3.1.9.3.11.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RcfSyncNotifyInvocation ::= SEQUENCE
 * {   invokerCredentials                 Credentials
 * ,   notification                       Notification
 * }
 * ```
 * 
 * @class
 */
export
class RcfSyncNotifyInvocation {
    /**
     * @summary `invokerCredentials`.
     * @description
     *
     * Credentials that let the user authenticate this invocation when the
     * agreed level is 'all'. When the level is 'bind' or 'none', the value
     * should be 'unused'.
     *
     * CCSDS 911.2-B-4, sections 3.7.2.2 and 3.1.5.
     * @public
     * @readonly
     */
    readonly invokerCredentials: Credentials;
    /**
     * @summary `notification`.
     * @description
     *
     * The event being reported. A notification value accompanies loss of frame
     * synchronization and a production-status change. Data discarded due to
     * excessive backlog and end of data carry no further value.
     *
     * CCSDS 911.2-B-4, sections 3.7.2.3 and 3.7.2.4.
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
     * @summary Restructures an object into a RcfSyncNotifyInvocation
     * @description
     * 
     * This takes an `object` and converts it to a `RcfSyncNotifyInvocation`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `RcfSyncNotifyInvocation`.
     * @returns {RcfSyncNotifyInvocation}
     */
    public static _from_object (_o: { [_K in keyof (RcfSyncNotifyInvocation)]: (RcfSyncNotifyInvocation)[_K] }): RcfSyncNotifyInvocation {
        return new RcfSyncNotifyInvocation(_o.invokerCredentials, _o.notification);
    }


}

/**
 * @summary The Leading Root Component Types of RcfSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_RcfSyncNotifyInvocation: $.ComponentSpec[] = [
    new $.ComponentSpec("invokerCredentials", false, $.hasAnyTag),
    new $.ComponentSpec("notification", false, $.hasAnyTag)
];

/**
 * @summary The Trailing Root Component Types of RcfSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing
 * root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_RcfSyncNotifyInvocation: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of RcfSyncNotifyInvocation
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension
 * addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_RcfSyncNotifyInvocation: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_RcfSyncNotifyInvocation: $.ASN1Decoder<RcfSyncNotifyInvocation> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) RcfSyncNotifyInvocation
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_RcfSyncNotifyInvocation (el: _Element): RcfSyncNotifyInvocation {
    if (!_cached_decoder_for_RcfSyncNotifyInvocation) { _cached_decoder_for_RcfSyncNotifyInvocation = function (el: _Element): RcfSyncNotifyInvocation {
    const sequence: _Element[] = el.sequence;
    if (sequence.length < 2) {
        throw new _ConstructionError("RcfSyncNotifyInvocation contained only " + sequence.length.toString() + " elements.");
    }
    sequence[0].name = "invokerCredentials";
    sequence[1].name = "notification";
    let invokerCredentials!: Credentials;
    let notification!: Notification;
    invokerCredentials = _decode_Credentials(sequence[0]);
    notification = _decode_Notification(sequence[1]);
    return new RcfSyncNotifyInvocation(
        invokerCredentials,
        notification,

    );
}; }
    return _cached_decoder_for_RcfSyncNotifyInvocation(el);
}

let _cached_encoder_for_RcfSyncNotifyInvocation: $.ASN1Encoder<RcfSyncNotifyInvocation> | null = null;

/**
 * @summary Encodes a(n) RcfSyncNotifyInvocation into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The RcfSyncNotifyInvocation, encoded as an ASN.1 Element.
 */
export
function _encode_RcfSyncNotifyInvocation (value: RcfSyncNotifyInvocation, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_RcfSyncNotifyInvocation) { _cached_encoder_for_RcfSyncNotifyInvocation = function (value: RcfSyncNotifyInvocation, _elGetter: $.ASN1Encoder<RcfSyncNotifyInvocation>): _Element {
    return $._encodeSequence([
        /* REQUIRED   */ _encode_Credentials(value.invokerCredentials, $.BER),
        /* REQUIRED   */ _encode_Notification(value.notification, $.BER)
    ], $.BER);
}; }
    return _cached_encoder_for_RcfSyncNotifyInvocation(value, elGetter);
}


/* eslint-enable */
