/* eslint-disable */
import {
    ASN1Element as _Element,
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary LpaMode
 * @description
 * 
 * Which LPA is active. SGP.22 v3.1 Annex H defines `lpad` (0) and `lpae` (1),
 * and marks the field mandatory on `EUICCInfo2` from v3.0.0. This module types
 * it as an un-named INTEGER, and its ASN.1 comment says the field is not used
 * by the version of the module.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * LpaMode  ::=  INTEGER
 * ```
 */
export
type LpaMode = INTEGER;
export const _decode_LpaMode = $._decodeInteger;
export const _encode_LpaMode = $._encodeInteger;


/* eslint-enable */
