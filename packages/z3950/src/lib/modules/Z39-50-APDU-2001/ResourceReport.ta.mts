/* eslint-disable */
import {
    EXTERNAL
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ResourceReport
 * @description
 * 
 * Resource report carried as an EXTERNAL (ANSI/NISO Z39.50-2003 §3.2.6.1.1,
 * Appendix RSC). resource-2 is `{Z39-50-resourceReport 2}`, an extensible
 * superset of the 1992 resource-1 format `{Z39-50-resourceReport 1}`. This
 * edition does not reprint resource-1. A client should still recognize that
 * object identifier.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ResourceReport  ::=  EXTERNAL
 * ```
 */
export
type ResourceReport = EXTERNAL; // ExternalType
export const _decode_ResourceReport = $._decodeExternal;
export const _encode_ResourceReport = $._encodeExternal;


/* eslint-enable */
