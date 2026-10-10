/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
import { PresentationSelector, _decode_PresentationSelector, _encode_PresentationSelector } from "../RFC1085-PS/PresentationSelector.ta.mjs";
import { Rejection_reason, _decode_Rejection_reason, _encode_Rejection_reason } from "../RFC1085-PS/Rejection-reason.ta.mjs";
import { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";


/**
 * @summary ConnectResponse_PDU
 * @description
 *
 * P-CONNECT response
 * ([RFC 1085 §7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1),
 * [§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)
 * WAIT1 and WAIT2).
 *
 * The responder sends this from WAIT2 for P-CONNECT.RESPONSE.
 * User-rejection returns the responder to IDLE; acceptance
 * enters DATA. The initiator, in WAIT1, cancels its UDP timer
 * on receipt. Rejection yields P-CONNECT.CONFIRMATION(-) and
 * IDLE; acceptance yields P-CONNECT.CONFIRMATION(+) and DATA.
 *
 * Omit `reason` on acceptance. `reason` is present only when
 * the connection was rejected (Appendix A).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ConnectResponse-PDU ::= [1] IMPLICIT SEQUENCE {
 *     -- present only in the udp-based service
 *     reference   SessionConnectionIdentifier OPTIONAL,
 *     responding  PresentationSelector OPTIONAL,
 *     -- present only if the connection was rejected
 *     reason      [2] IMPLICIT Rejection-reason OPTIONAL,
 *     -- present only if reason is absent OR has the value rejected-by-responder
 *     user-data   UserData-PDU OPTIONAL
 * }
 * ```
 *
 * @class
 */
export
class ConnectResponse_PDU {
    constructor (
        /**
         * @summary `reference`.
         * @description
         *
         * Session connection identifier. Present only on the
         * udp-based service (Appendix A), where it identifies
         * the connection
         * ([§10.2](https://datatracker.ietf.org/doc/html/rfc1085#section-10.2)).
         *
         * @public
         * @readonly
         */
        readonly reference: OPTIONAL<SessionConnectionIdentifier>,
        /**
         * @summary `responding`.
         * @description
         *
         * Responding presentation selector. At the service, the
         * responding presentation address equals the called
         * presentation address of the P-CONNECT indication
         * ([§7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1)
         * item 3).
         * This field may be omitted.
         *
         * @public
         * @readonly
         */
        readonly responding: OPTIONAL<PresentationSelector>,
        /**
         * @summary `reason`.
         * @description
         *
         * Why the connection was rejected. Omit on acceptance.
         * `rejected-by-responder` is user-rejection; the other
         * named codes are provider rejections. The service
         * result is acceptance, user-rejection,
         * provider-rejection (transient), or
         * provider-rejection (permanent)
         * ([§7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1)
         * item 16).
         * The memo does not say which provider codes are
         * transient and which are permanent.
         *
         * @public
         * @readonly
         */
        readonly reason: OPTIONAL<Rejection_reason>,
        /**
         * @summary `user_data`.
         * @description
         *
         * P-CONNECT user data: one A-ASSOCIATE PDU in
         * presentation context 3
         * ([§7.1](https://datatracker.ietf.org/doc/html/rfc1085#section-7.1)
         * item 15).
         * Allowed only when `reason` is absent or is
         * `rejected-by-responder` (Appendix A). It may still be
         * omitted in those cases.
         *
         * @public
         * @readonly
         */
        readonly user_data: OPTIONAL<UserData_PDU>
    ) {}

    /**
     * @summary Restructures an object into a ConnectResponse_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `ConnectResponse_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ConnectResponse_PDU`.
     * @returns {ConnectResponse_PDU}
     */
    public static _from_object (_o: { [_K in keyof (ConnectResponse_PDU)]: (ConnectResponse_PDU)[_K] }): ConnectResponse_PDU {
        return new ConnectResponse_PDU(_o.reference, _o.responding, _o.reason, _o.user_data);
    }


}

/**
 * @summary The Leading Root Component Types of ConnectResponse_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ConnectResponse_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("responding", true, $.hasTag(_TagClass.context, 1)),
    new $.ComponentSpec("reason", true, $.hasTag(_TagClass.context, 2)),
    new $.ComponentSpec("user-data", true, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ConnectResponse_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ConnectResponse_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ConnectResponse_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ConnectResponse_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ConnectResponse_PDU: $.ASN1Decoder<ConnectResponse_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ConnectResponse_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ConnectResponse_PDU (el: _Element): ConnectResponse_PDU {
    if (!_cached_decoder_for_ConnectResponse_PDU) { _cached_decoder_for_ConnectResponse_PDU = $._decode_implicit<ConnectResponse_PDU>(() => function (el: _Element): ConnectResponse_PDU {
    let reference: OPTIONAL<SessionConnectionIdentifier>;
    let responding: OPTIONAL<PresentationSelector>;
    let reason: OPTIONAL<Rejection_reason>;
    let user_data: OPTIONAL<UserData_PDU>;
    const callbacks: $.DecodingMap = {
        "reference": (_el: _Element): void => { reference = _decode_SessionConnectionIdentifier(_el); },
        "responding": (_el: _Element): void => { responding = _decode_PresentationSelector(_el); },
        "reason": (_el: _Element): void => { reason = $._decode_implicit<Rejection_reason>(() => _decode_Rejection_reason)(_el); },
        "user-data": (_el: _Element): void => { user_data = _decode_UserData_PDU(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ConnectResponse_PDU,
        _extension_additions_list_spec_for_ConnectResponse_PDU,
        _root_component_type_list_2_spec_for_ConnectResponse_PDU,
        undefined,
    );
    return new ConnectResponse_PDU(
        reference,
        responding,
        reason,
        user_data
    );
}); }
    return _cached_decoder_for_ConnectResponse_PDU(el);
}

let _cached_encoder_for_ConnectResponse_PDU: $.ASN1Encoder<ConnectResponse_PDU> | null = null;

/**
 * @summary Encodes a(n) ConnectResponse_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ConnectResponse_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_ConnectResponse_PDU (value: ConnectResponse_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ConnectResponse_PDU) { _cached_encoder_for_ConnectResponse_PDU = $._encode_implicit(_TagClass.context, 1, () => function (value: ConnectResponse_PDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reference === undefined) ? undefined : _encode_SessionConnectionIdentifier(value.reference, $.BER)),
            /* IF_ABSENT  */ ((value.responding === undefined) ? undefined : _encode_PresentationSelector(value.responding, $.BER)),
            /* IF_ABSENT  */ ((value.reason === undefined) ? undefined : $._encode_implicit(_TagClass.context, 2, () => _encode_Rejection_reason, $.BER)(value.reason, $.BER)),
            /* IF_ABSENT  */ ((value.user_data === undefined) ? undefined : _encode_UserData_PDU(value.user_data, $.BER))
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ConnectResponse_PDU(value, elGetter);
}


/* eslint-enable */
