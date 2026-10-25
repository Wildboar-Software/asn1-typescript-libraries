/* eslint-disable */
import {
    type BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SGSNChange
 * @description
 *
 * This field is present only in the S-CDR to indicate that this is the first
 * record after an inter-SGSN routing area update.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.70.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGSNChange  ::=  BOOLEAN
 * ```
 */
export
type SGSNChange = BOOLEAN; // BooleanType

export
const _decode_SGSNChange: $.ASN1Decoder<SGSNChange> = $._decodeBoolean;

export
const _encode_SGSNChange: $.ASN1Encoder<SGSNChange> = $._encodeBoolean;

/* eslint-enable */
