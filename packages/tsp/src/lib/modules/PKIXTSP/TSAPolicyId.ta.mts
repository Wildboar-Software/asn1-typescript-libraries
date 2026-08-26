/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary TSAPolicyId
 * @description
 *
 * Object identifier naming a TSA policy
 * ([RFC 3161 §2.4.1](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.1)).
 * Optional in `TimeStampReq.reqPolicy` (policy under which the token
 * SHOULD be provided). Required in `TSTInfo.policy` (policy under which
 * the response was produced); if the request had a policy and it is
 * unsupported, the TSA MUST return `unacceptedPolicy`
 * ([RFC 3161 §2.4.2](https://datatracker.ietf.org/doc/html/rfc3161#section-2.4.2)).
 *
 * When `Accuracy` is omitted from `TSTInfo`, accuracy MAY still be
 * available via the policy (§2.4.2).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSAPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TSAPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_TSAPolicyId = $._decodeObjectIdentifier;


export const _encode_TSAPolicyId = $._encodeObjectIdentifier;


/* eslint-enable */
