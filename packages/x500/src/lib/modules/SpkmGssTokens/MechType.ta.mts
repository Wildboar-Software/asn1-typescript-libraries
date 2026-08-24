/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary MechType
 * @description
 *
 * GSS mechanism OID in `InitialContextToken.thisMech`. SPKM uses
 * `{iso(1) identified-organization(3) dod(6) internet(1) security(5)
 * mechanisms(5) spkm(1) spkm-1(1)}` or `spkm-2(2)`. SPKM-1: randoms for
 * context-establishment replay; SPKM-2: timestamps (mandatory).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MechType  ::=  OBJECT IDENTIFIER
 * ```
 */
export type MechType = OBJECT_IDENTIFIER; // ObjectIdentifierType


export const _decode_MechType = $._decodeObjectIdentifier;


export const _encode_MechType = $._encodeObjectIdentifier;


/* eslint-enable */
