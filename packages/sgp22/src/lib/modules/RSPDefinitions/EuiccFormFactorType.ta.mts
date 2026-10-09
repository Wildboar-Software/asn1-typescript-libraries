/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EuiccFormFactorType
 * @description
 * 
 * Whether the eUICC can be removed. SGP.22 v3.1 Annex H defines
 * `removableEuicc` (0) and `nonRemovableEuicc` (1). This module types the value
 * as an un-named INTEGER. The IMEI should be present when the form factor is
 * non-removable (§4.2).
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EuiccFormFactorType  ::=  INTEGER
 * ```
 */
export
type EuiccFormFactorType = INTEGER;
export const _decode_EuiccFormFactorType = $._decodeInteger;
export const _encode_EuiccFormFactorType = $._encodeInteger;


/* eslint-enable */
