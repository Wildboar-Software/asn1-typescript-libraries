/* eslint-disable */
import {
    INTEGER,
    OPTIONAL,
    UTF8String,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { NotificationEvent, _decode_NotificationEvent, _encode_NotificationEvent } from "../RSPDefinitions/NotificationEvent.ta.mjs";
import { Iccid, _decode_Iccid, _encode_Iccid } from "../RSPDefinitions/Iccid.ta.mjs";


/**
 * @summary NotificationMetadata
 * @description
 * 
 * Unsigned description of one pending notification: a sequence number assigned
 * by the eUICC, exactly one event bit, the recipient FQDN, and the ICCID when
 * the notification is tied to a Profile. The LPA uses the sequence number to
 * retrieve and then delete the notification. SGP.22 v3.1 §5.7.9 and §5.7.10.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationMetadata ::= [47] SEQUENCE { -- Tag 'BF2F'
 *     seqNumber [0] INTEGER,
 *     profileManagementOperation [1] NotificationEvent, / *Only one bit SHALL be set to 1* /
 *     notificationAddress UTF8String, -- FQDN to forward the notification
 *     iccid Iccid OPTIONAL
 * }
 * ```
 * 
 * @class
 */
export
class NotificationMetadata {
    constructor (
        /**
         * @summary `seqNumber`.
         * @description
         * 
         * eUICC-assigned sequence number. The LPA passes it to
         * RetrieveNotificationsList and, after a successful send, to
         * RemoveNotificationFromList. SGP.22 v3.1 §5.7.9.
         * 
         * @public
         * @readonly
         */
        readonly seqNumber: INTEGER,
        /**
         * @summary `profileManagementOperation`.
         * @description
         * 
         * Exactly one bit set: install, enable, disable, or delete. SGP.22 v3.1
         * §5.7.9. The ASN.1 comment in this module states that restriction.
         * 
         * @public
         * @readonly
         */
        readonly profileManagementOperation: NotificationEvent,
        /**
         * @summary `notificationAddress`.
         * @description
         * 
         * FQDN the signed notification is sent to. Copied from the matching
         * metadata entry. SGP.22 v3.1 §5.5.3.
         * 
         * @public
         * @readonly
         */
        readonly notificationAddress: UTF8String,
        /**
         * @summary `iccid`.
         * @description
         * 
         * Profile the notification is about. Omitted when the notification is
         * not tied to one Profile. SGP.22 v3.1 §5.7.9.
         * 
         * @public
         * @readonly
         */
        readonly iccid: OPTIONAL<Iccid>
    ) {}

    /**
     * @summary Restructures an object into a NotificationMetadata
     * @description
     * 
     * This takes an `object` and converts it to a `NotificationMetadata`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `NotificationMetadata`.
     * @returns {NotificationMetadata}
     */
    public static _from_object (_o: { [_K in keyof (NotificationMetadata)]: (NotificationMetadata)[_K] }): NotificationMetadata {
        return new NotificationMetadata(_o.seqNumber, _o.profileManagementOperation, _o.notificationAddress, _o.iccid);
    }


}

/**
 * @summary The Leading Root Component Types of NotificationMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_NotificationMetadata: $.ComponentSpec[] = [
    new $.ComponentSpec("seqNumber", false, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("profileManagementOperation", false, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("notificationAddress", false, $.hasTag(_TagClass.universal, 12)),
    new $.ComponentSpec("iccid", true, $.hasTag(_TagClass.application, 26))
];

/**
 * @summary The Trailing Root Component Types of NotificationMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_NotificationMetadata: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of NotificationMetadata
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_NotificationMetadata: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_NotificationMetadata: $.ASN1Decoder<NotificationMetadata> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) NotificationMetadata
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_NotificationMetadata (el: _Element): NotificationMetadata {
    if (!_cached_decoder_for_NotificationMetadata) { _cached_decoder_for_NotificationMetadata = $._decode_implicit<NotificationMetadata>(() => function (el: _Element): NotificationMetadata {
    let seqNumber!: INTEGER;
    let profileManagementOperation!: NotificationEvent;
    let notificationAddress!: UTF8String;
    let iccid: OPTIONAL<Iccid>;
    const callbacks: $.DecodingMap = {
        "seqNumber": (_el: _Element): void => { seqNumber = $._decode_implicit<INTEGER>(() => $._decodeInteger)(_el); },
        "profileManagementOperation": (_el: _Element): void => { profileManagementOperation = $._decode_implicit<NotificationEvent>(() => _decode_NotificationEvent)(_el); },
        "notificationAddress": (_el: _Element): void => { notificationAddress = $._decodeUTF8String(_el); },
        "iccid": (_el: _Element): void => { iccid = _decode_Iccid(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_NotificationMetadata,
        _extension_additions_list_spec_for_NotificationMetadata,
        _root_component_type_list_2_spec_for_NotificationMetadata,
        undefined,
    );
    return new NotificationMetadata(
        seqNumber,
        profileManagementOperation,
        notificationAddress,
        iccid
    );
}); }
    return _cached_decoder_for_NotificationMetadata(el);
}

let _cached_encoder_for_NotificationMetadata: $.ASN1Encoder<NotificationMetadata> | null = null;

/**
 * @summary Encodes a(n) NotificationMetadata into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The NotificationMetadata, encoded as an ASN.1 Element.
 */
export
function _encode_NotificationMetadata (value: NotificationMetadata, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_NotificationMetadata) { _cached_encoder_for_NotificationMetadata = $._encode_implicit(_TagClass.context, 47, () => function (value: NotificationMetadata): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 0, () => $._encodeInteger, $.BER)(value.seqNumber, $.BER),
            /* REQUIRED   */ $._encode_implicit(_TagClass.context, 1, () => _encode_NotificationEvent, $.BER)(value.profileManagementOperation, $.BER),
            /* REQUIRED   */ $._encodeUTF8String(value.notificationAddress, $.BER),
            /* IF_ABSENT  */ ((value.iccid === undefined) ? undefined : _encode_Iccid(value.iccid, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_NotificationMetadata(value, elGetter);
}


/* eslint-enable */
