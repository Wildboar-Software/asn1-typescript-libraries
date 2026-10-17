/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../Gprs-HI3-PS/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../Gprs-HI3-PS/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi3GPRSLIId
 * @description
 *
 * GPRS HI3 arc: `hi3(2) gPRSLI(3)` under `lawfulInterceptDomainId`. Clause D.2
 * points this arc at clause D.9. It is not the circuit-data arc `circuitLI(1)`
 * or the CC-link arc `ccLinkLI(4)`.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.9.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3GPRSLIId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi3(2) gPRSLI(3)}
 * ```
 * 
 * @constant
 */
export
const hi3GPRSLIId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* gPRSLI */ 3,
], lawfulInterceptDomainId);

/* eslint-enable */
