/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    OBJECT_IDENTIFIER
} from "@wildboar/asn1";
import { lawfulInterceptDomainId } from "../HI3CircuitDataOperations/lawfulInterceptDomainId.va.mjs";
// export { lawfulInterceptDomainId } from "../HI3CircuitDataOperations/lawfulInterceptDomainId.va.mjs";


/**
 * @summary hi3CircuitLIId
 * @description
 *
 * Circuit-switched HI3 user-data arc: `hi3(2) circuitLI(1)` under
 * `lawfulInterceptDomainId`. The operations transmit user data exchanged via
 * DSS1, ISUP, or MAP signalling, for example UUS or SMS. Clause D.2 points this
 * arc at clause D.6.
 *
 * ETSI TS 101 671 V3.15.1 (2018-06), clause D.2, clause D.6.
 * https://www.etsi.org/deliver/etsi_ts/101600_101699/101671/03.15.01_60/ts_101671v031501p.pdf
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * hi3CircuitLIId OBJECT IDENTIFIER ::= {lawfulInterceptDomainId hi3(2) circuitLI(1)}
 * ```
 * 
 * @constant
 */
export
const hi3CircuitLIId: OBJECT_IDENTIFIER = _OID.fromParts([
    /* hi3 */ 2,
    /* circuitLI */ 1,
], lawfulInterceptDomainId);

/* eslint-enable */
