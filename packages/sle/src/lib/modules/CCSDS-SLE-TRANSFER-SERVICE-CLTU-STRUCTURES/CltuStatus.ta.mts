/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1Error
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { _decode_ForwardDuStatus, _encode_ForwardDuStatus, type ForwardDuStatus,
    ForwardDuStatus_radiated,
    ForwardDuStatus_expired,
    ForwardDuStatus_interrupted,
    ForwardDuStatus_productionStarted,
    ForwardDuStatus_productionNotStarted
} from "../CCSDS-SLE-TRANSFER-SERVICE-COMMON-TYPES/ForwardDuStatus.ta.mjs";



import { integerIsOneOf } from "../../constraints.mjs";

/**
 * @summary CltuStatus
 * @description
 * 
 * Processing state of the CLTU named by cltu-last-processed. Present only when
 * that parameter is not null.
 *
 * radiated: radiation finished without abort; the CLTU was radiated.
 *
 * expired: latest-radiation-time passed before radiation began; the CLTU was
 * not radiated.
 *
 * interrupted: radiation started and stopped because production-status became
 * interrupted. Section 3.9.2.5 adds that the available status shows the CLTU
 * aborted before nominal completion.
 *
 * productionStarted: radiation has started and processing is still in progress.
 * Section 3 calls this radiation started. The Annex A comment is the same
 * mapping.
 *
 * productionNotStarted: the provider attempted the CLTU and radiation did not
 * start because production-status was interrupted. Section 3.7.2.7 and section
 * 3.9.2.5 call this radiation not started. Section 3.7.2.8 calls the same state
 * production not started when it sets radiation-start-time to null.
 *
 * CCSDS 912.1-B-5, sections 3.7.2.7 and 3.9.2.5.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CltuStatus                        ::=    ForwardDuStatus
 * (  radiated
 * |  expired
 * |  interrupted
 * |  productionStarted                   -- radiation started
 * |  productionNotStarted                -- radiation not started
 * )
 * ```
 */
export
type CltuStatus = ForwardDuStatus; // DefinedType

let _cached_decoder_for_CltuStatus: $.ASN1Decoder<CltuStatus> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) CltuStatus
 * @function
 * @param el The element being decoded.
 * @returns The decoded data structure.
 */
export
function _decode_CltuStatus (el: _Element): CltuStatus {
    if (!_cached_decoder_for_CltuStatus) { _cached_decoder_for_CltuStatus = _decode_ForwardDuStatus; }
    const _decoded = _cached_decoder_for_CltuStatus(el);
    if (!integerIsOneOf(_decoded, [BigInt(ForwardDuStatus_radiated), BigInt(ForwardDuStatus_expired), BigInt(ForwardDuStatus_interrupted), BigInt(ForwardDuStatus_productionStarted), BigInt(ForwardDuStatus_productionNotStarted)])) {
        throw new ASN1Error("CltuStatus violates ForwardDuStatus (radiated | expired | interrupted | productionStarted | productionNotStarted)");
    }
    return _decoded;
}

/**
 * @summary Encodes a(n) CltuStatus into an ASN.1 Element.
 * @function
 * @param value The value being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The CltuStatus, encoded as an ASN.1 Element.
 */
export const _encode_CltuStatus: $.ASN1Encoder<CltuStatus> = _encode_ForwardDuStatus;


/* eslint-enable */
