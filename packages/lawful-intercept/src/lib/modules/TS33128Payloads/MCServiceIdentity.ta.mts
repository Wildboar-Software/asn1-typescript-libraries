/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
// export { MCServiceID, _decode_MCServiceID, _encode_MCServiceID } from "../TS33128Payloads/MCServiceID.ta.mjs";
import { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
// export { IMPU, _decode_IMPU, _encode_IMPU } from "../TS33128Payloads/IMPU.ta.mjs";
import { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
// export { IMPI, _decode_IMPI, _encode_IMPI } from "../TS33128Payloads/IMPI.ta.mjs";
import { InstanceIdentifierURN, _decode_InstanceIdentifierURN, _encode_InstanceIdentifierURN } from "../TS33128Payloads/InstanceIdentifierURN.ta.mjs";
// export { InstanceIdentifierURN, _decode_InstanceIdentifierURN, _encode_InstanceIdentifierURN } from "../TS33128Payloads/InstanceIdentifierURN.ta.mjs";


/**
 * @summary MCServiceIdentity
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MCServiceIdentity  ::=  CHOICE
 * {
 *     mCServiceID           [1] MCServiceID,
 *     iMPU                  [2] IMPU,
 *     iMPI                  [3] IMPI,
 *     instanceIdentifierURN [4] InstanceIdentifierURN
 * }
 * ```
 */
export
type MCServiceIdentity =
    /**
     * @description
     *
     * MC service ID of the target MC service user uploading a file or MC
     * service user uploading a file intended for a target MC service group.
     * (3GPP TS 33.128, clause 7.20.2.6.2.)
     */
    { mCServiceID: MCServiceID } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * IMPU of the target, if used for the service (see NOTE). (3GPP TS 33.128,
     * clause 7.3.1.4.)
     */
    | { iMPU: IMPU } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * IMPI of the target. (3GPP TS 33.128, clause 7.20.2.1.2.)
     */
    | { iMPI: IMPI } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Identity of the target MC service terminal. (3GPP TS 33.128, clause
     * 7.20.2.1.2.)
     */
    | { instanceIdentifierURN: InstanceIdentifierURN } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_MCServiceIdentity: $.ASN1Decoder<MCServiceIdentity> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) MCServiceIdentity
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_MCServiceIdentity (el: _Element): MCServiceIdentity {
    if (!_cached_decoder_for_MCServiceIdentity) { _cached_decoder_for_MCServiceIdentity = $._decode_extensible_choice<MCServiceIdentity>({
    "CONTEXT 1": [ "mCServiceID", $._decode_implicit<MCServiceID>(() => _decode_MCServiceID) ],
    "CONTEXT 2": [ "iMPU", $._decode_explicit<IMPU>(() => _decode_IMPU) ],
    "CONTEXT 3": [ "iMPI", $._decode_implicit<IMPI>(() => _decode_IMPI) ],
    "CONTEXT 4": [ "instanceIdentifierURN", $._decode_implicit<InstanceIdentifierURN>(() => _decode_InstanceIdentifierURN) ]
}); }
    return _cached_decoder_for_MCServiceIdentity(el);
}

let _cached_encoder_for_MCServiceIdentity: $.ASN1Encoder<MCServiceIdentity> | null = null;

/**
 * @summary Encodes a(n) MCServiceIdentity into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The MCServiceIdentity, encoded as an ASN.1 Element.
 */
export
function _encode_MCServiceIdentity (value: MCServiceIdentity, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_MCServiceIdentity) { _cached_encoder_for_MCServiceIdentity = $._encode_choice<MCServiceIdentity>({
    "mCServiceID": $._encode_implicit(_TagClass.context, 1, () => _encode_MCServiceID, $.BER),
    "iMPU": $._encode_explicit(_TagClass.context, 2, () => _encode_IMPU, $.BER),
    "iMPI": $._encode_implicit(_TagClass.context, 3, () => _encode_IMPI, $.BER),
    "instanceIdentifierURN": $._encode_implicit(_TagClass.context, 4, () => _encode_InstanceIdentifierURN, $.BER),
}, $.BER); }
    return _cached_encoder_for_MCServiceIdentity(value, elGetter);
}


/* eslint-enable */
