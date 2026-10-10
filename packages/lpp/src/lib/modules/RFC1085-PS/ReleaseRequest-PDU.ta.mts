/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { SessionConnectionIdentifier, _decode_SessionConnectionIdentifier, _encode_SessionConnectionIdentifier } from "../RFC1085-PS/SessionConnectionIdentifier.ta.mjs";
import { UserData_PDU, _decode_UserData_PDU, _encode_UserData_PDU } from "../RFC1085-PS/UserData-PDU.ta.mjs";


/**
 * @summary ReleaseRequest_PDU
 * @description
 *
 * P-RELEASE request
 * ([RFC 1085 §8.1](https://datatracker.ietf.org/doc/html/rfc1085#section-8.1),
 * [§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)
 * DATA).
 *
 * Either presentation user may request release. The provider
 * waits for the serializer to drain, then sends this PDU. On
 * UDP, data still in transit may be discarded. Transport
 * resources are released when the connection returns to IDLE.
 * The service result is always release accepted; this PDU has
 * no rejection code.
 *
 * From DATA the provider enters WAIT3. On UDP it sets a
 * retransmission counter to a small value (the memo's example
 * is 2) and starts a small timer. The memo does not give the
 * timer duration. Expiry in WAIT3 decrements the counter. At
 * zero the provider sends a provider-initiated abort, issues
 * P-P-ABORT.INDICATION, and returns to IDLE; otherwise it
 * sends this PDU again.
 *
 * If both sides request release, the collision invokes a
 * provider-initiated abort. A `ReleaseRequest` received while
 * already in WAIT3 is not a handled event, so it is treated as
 * any other unexpected PDU
 * ([§10.3](https://datatracker.ietf.org/doc/html/rfc1085#section-10.3)).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ReleaseRequest-PDU ::= [2] IMPLICIT SEQUENCE {
 *     -- present only in the udp-based service
 *     reference   SessionConnectionIdentifier OPTIONAL,
 *     user-data   UserData-PDU
 * }
 * ```
 *
 * @class
 */
export
class ReleaseRequest_PDU {
    /**
     * @summary `reference`.
     * @description
     *
     * Session connection identifier. Present only on the
     * udp-based service (Appendix A).
     *
     * @public
     * @readonly
     */
    public readonly reference: OPTIONAL<SessionConnectionIdentifier>;
    /**
     * @summary `user_data`.
     * @description
     *
     * Release user data: one A-RELEASE PDU in presentation
     * context 3
     * ([§8.1](https://datatracker.ietf.org/doc/html/rfc1085#section-8.1)
     * item 2).
     *
     * @public
     * @readonly
     */
    public readonly user_data: UserData_PDU;

    constructor (
        reference: OPTIONAL<SessionConnectionIdentifier>,
        user_data: UserData_PDU,
    ) {
        this.reference = reference;
        this.user_data = user_data;
    }

    /**
     * @summary Restructures an object into a ReleaseRequest_PDU
     * @description
     * 
     * This takes an `object` and converts it to a `ReleaseRequest_PDU`.
     * 
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `ReleaseRequest_PDU`.
     * @returns {ReleaseRequest_PDU}
     */
    public static _from_object (_o: { [_K in keyof (ReleaseRequest_PDU)]: (ReleaseRequest_PDU)[_K] }): ReleaseRequest_PDU {
        return new ReleaseRequest_PDU(_o.reference, _o.user_data);
    }


}

/**
 * @summary The Leading Root Component Types of ReleaseRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_1_spec_for_ReleaseRequest_PDU: $.ComponentSpec[] = [
    new $.ComponentSpec("reference", true, $.hasTag(_TagClass.context, 0)),
    new $.ComponentSpec("user-data", false, $.hasTag(_TagClass.context, 5))
];

/**
 * @summary The Trailing Root Component Types of ReleaseRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _root_component_type_list_2_spec_for_ReleaseRequest_PDU: $.ComponentSpec[] = [
    
];

/**
 * @summary The Extension Addition Component Types of ReleaseRequest_PDU
 * @description
 * 
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 * 
 * @constant
 */
export
const _extension_additions_list_spec_for_ReleaseRequest_PDU: $.ComponentSpec[] = [
    
];

let _cached_decoder_for_ReleaseRequest_PDU: $.ASN1Decoder<ReleaseRequest_PDU> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) ReleaseRequest_PDU
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_ReleaseRequest_PDU (el: _Element): ReleaseRequest_PDU {
    if (!_cached_decoder_for_ReleaseRequest_PDU) { _cached_decoder_for_ReleaseRequest_PDU = $._decode_implicit<ReleaseRequest_PDU>(() => function (el: _Element): ReleaseRequest_PDU {
    let reference: OPTIONAL<SessionConnectionIdentifier>;
    let user_data!: UserData_PDU;
    const callbacks: $.DecodingMap = {
        "reference": (_el: _Element): void => { reference = _decode_SessionConnectionIdentifier(_el); },
        "user-data": (_el: _Element): void => { user_data = _decode_UserData_PDU(_el); }
    };
    $._parse_sequence(el, callbacks,
        _root_component_type_list_1_spec_for_ReleaseRequest_PDU,
        _extension_additions_list_spec_for_ReleaseRequest_PDU,
        _root_component_type_list_2_spec_for_ReleaseRequest_PDU,
        undefined,
    );
    return new ReleaseRequest_PDU(
        reference,
        user_data
    );
}); }
    return _cached_decoder_for_ReleaseRequest_PDU(el);
}

let _cached_encoder_for_ReleaseRequest_PDU: $.ASN1Encoder<ReleaseRequest_PDU> | null = null;

/**
 * @summary Encodes a(n) ReleaseRequest_PDU into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The ReleaseRequest_PDU, encoded as an ASN.1 Element.
 */
export
function _encode_ReleaseRequest_PDU (value: ReleaseRequest_PDU, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_ReleaseRequest_PDU) { _cached_encoder_for_ReleaseRequest_PDU = $._encode_implicit(_TagClass.context, 2, () => function (value: ReleaseRequest_PDU): _Element {
    return $._encodeSequence(([] as (_Element | undefined)[]).concat(
        [
            /* IF_ABSENT  */ ((value.reference === undefined) ? undefined : _encode_SessionConnectionIdentifier(value.reference, $.BER)),
            /* REQUIRED   */ _encode_UserData_PDU(value.user_data, $.BER)
        ],
    ).filter((c: (_Element | undefined)): c is _Element => (!!c)), $.BER);
}, $.BER); }
    return _cached_encoder_for_ReleaseRequest_PDU(value, elGetter);
}


/* eslint-enable */
