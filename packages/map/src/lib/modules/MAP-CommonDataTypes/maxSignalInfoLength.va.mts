/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";



/**
 * @summary maxSignalInfoLength
 * @description
 *
 * Theoretical maximum octets for one `SignalInfo` without requiring
 * segmentation to cope with the network layer service. The actual maximum may
 * be lower when other information elements are included in the same component.
 * (3GPP TS 29.002 V19.1.0 clause 17.7.8).
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * maxSignalInfoLength  INTEGER ::= 200
 * ```
 * 
 * @constant
 */
export
const maxSignalInfoLength: INTEGER = 200;

/* eslint-enable */
