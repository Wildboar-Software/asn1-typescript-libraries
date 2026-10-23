/* eslint-disable */
import {
    BOOLEAN
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SGWChange
 * @description
 *
 * This field is present only in the SGW-CDR,ePDG-CDR or TWAG-CDR to indicate
 * that this is the first record after an inter serving node change (change
 * from SGW, ePDG, TWAG, HSGW).
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.2.56.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SGWChange   ::=  BOOLEAN
 * ```
 */
export
type SGWChange = BOOLEAN; // BooleanType

export
const _decode_SGWChange: $.ASN1Decoder<SGWChange> = $._decodeBoolean;

export
const _encode_SGWChange: $.ASN1Encoder<SGWChange> = $._encodeBoolean;

/* eslint-enable */
