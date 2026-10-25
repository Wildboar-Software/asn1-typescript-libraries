/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    type OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../LI-PS-PDU/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../LI-PS-PDU/lawfulInterceptDomainId.va.mjs";


/**
 * @summary li_psDomainId
 * @description
 * 
 * Object identifier of this header module: `li-ps(5)`, `genHeader(1)`,
 * `version35(35)` under `lawfulInterceptDomainId`. The PS header carries this
 * identifier so the receiver can tell which version of the handover header is
 * in use. Version 35 is the module published with V3.29.1.
 *
 * ETSI TS 102 232-1 V3.29.1 (2023-03), clause 5.2.1, annex A, clause A.1,
 * clause A.2.
 *
 * https://www.etsi.org/deliver/etsi_ts/102200_102299/10223201/03.29.01_60/ts_10223201v032901p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * li-psDomainId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId li-ps(5) genHeader(1) version35(35)}
 * ```
 * 
 * @constant
 */
export
const li_psDomainId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* li-ps */ 5,
    /* genHeader */ 1,
    /* version35 */ 35,
], lawfulInterceptDomainId);

/* eslint-enable */
