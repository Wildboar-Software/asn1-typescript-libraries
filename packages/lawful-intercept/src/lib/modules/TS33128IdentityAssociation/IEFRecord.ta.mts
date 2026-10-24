/* eslint-disable */
import {
    type ASN1Element as _Element,
    ASN1TagClass as _TagClass
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { IEFAssociationRecord, _decode_IEFAssociationRecord, _encode_IEFAssociationRecord } from "../TS33128IdentityAssociation/IEFAssociationRecord.ta.mjs";
// export { IEFAssociationRecord, _decode_IEFAssociationRecord, _encode_IEFAssociationRecord } from "../TS33128IdentityAssociation/IEFAssociationRecord.ta.mjs";
import { IEFDeassociationRecord, _decode_IEFDeassociationRecord, _encode_IEFDeassociationRecord } from "../TS33128IdentityAssociation/IEFDeassociationRecord.ta.mjs";
// export { IEFDeassociationRecord, _decode_IEFDeassociationRecord, _encode_IEFDeassociationRecord } from "../TS33128IdentityAssociation/IEFDeassociationRecord.ta.mjs";
import { IEFKeepaliveMessage, _decode_IEFKeepaliveMessage, _encode_IEFKeepaliveMessage } from "../TS33128IdentityAssociation/IEFKeepaliveMessage.ta.mjs";
// export { IEFKeepaliveMessage, _decode_IEFKeepaliveMessage, _encode_IEFKeepaliveMessage } from "../TS33128IdentityAssociation/IEFKeepaliveMessage.ta.mjs";


/**
 * @summary IEFRecord
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * IEFRecord  ::=  CHOICE
 * {
 *     associationRecord   [1] IEFAssociationRecord,
 *     deassociationRecord [2] IEFDeassociationRecord,
 *     keepalive           [3] IEFKeepaliveMessage,
 *     keepaliveResponse   [4] IEFKeepaliveMessage
 * }
 * ```
 */
export
type IEFRecord =
    /**
     * @description
     *
     * For each association event, the IEF shall create an IEFAssociationRecord,
     * as defined below. (3GPP TS 33.128, clause 6.2.2A.2.2.)
     */
    { associationRecord: IEFAssociationRecord } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * For each de-association event, the IEF shall create an
     * IEFDeassociationRecord, as defined below. (3GPP TS 33.128, clause
     * 6.2.2A.2.2.)
     */
    | { deassociationRecord: IEFDeassociationRecord } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * The IEF may transmit a keepalive request using the keepalive record
     * defined in Annex F. (3GPP TS 33.128, clause 6.2.2A.2.3.)
     */
    | { keepalive: IEFKeepaliveMessage } /* CHOICE_ALT_ROOT */
    /**
     * @description
     *
     * Upon receiving a keepalive request, the ICF shall respond with a
     * keepaliveResponse record containing the same sequence number used in the
     * request. (3GPP TS 33.128, clause 6.2.2A.2.3.)
     */
    | { keepaliveResponse: IEFKeepaliveMessage } /* CHOICE_ALT_ROOT */
    | _Element /* CHOICE_ALT_UNRECOGNIZED_EXT */;

let _cached_decoder_for_IEFRecord: $.ASN1Decoder<IEFRecord> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) IEFRecord
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_IEFRecord (el: _Element): IEFRecord {
    if (!_cached_decoder_for_IEFRecord) { _cached_decoder_for_IEFRecord = $._decode_extensible_choice<IEFRecord>({
    "CONTEXT 1": [ "associationRecord", $._decode_implicit<IEFAssociationRecord>(() => _decode_IEFAssociationRecord) ],
    "CONTEXT 2": [ "deassociationRecord", $._decode_implicit<IEFDeassociationRecord>(() => _decode_IEFDeassociationRecord) ],
    "CONTEXT 3": [ "keepalive", $._decode_implicit<IEFKeepaliveMessage>(() => _decode_IEFKeepaliveMessage) ],
    "CONTEXT 4": [ "keepaliveResponse", $._decode_implicit<IEFKeepaliveMessage>(() => _decode_IEFKeepaliveMessage) ]
}); }
    return _cached_decoder_for_IEFRecord(el);
}

let _cached_encoder_for_IEFRecord: $.ASN1Encoder<IEFRecord> | null = null;

/**
 * @summary Encodes a(n) IEFRecord into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The IEFRecord, encoded as an ASN.1 Element.
 */
export
function _encode_IEFRecord (value: IEFRecord, elGetter: $.ASN1Encoder<any>): _Element {
    if (!_cached_encoder_for_IEFRecord) { _cached_encoder_for_IEFRecord = $._encode_choice<IEFRecord>({
    "associationRecord": $._encode_implicit(_TagClass.context, 1, () => _encode_IEFAssociationRecord, $.BER),
    "deassociationRecord": $._encode_implicit(_TagClass.context, 2, () => _encode_IEFDeassociationRecord, $.BER),
    "keepalive": $._encode_implicit(_TagClass.context, 3, () => _encode_IEFKeepaliveMessage, $.BER),
    "keepaliveResponse": $._encode_implicit(_TagClass.context, 4, () => _encode_IEFKeepaliveMessage, $.BER),
}, $.BER); }
    return _cached_encoder_for_IEFRecord(value, elGetter);
}


/* eslint-enable */
