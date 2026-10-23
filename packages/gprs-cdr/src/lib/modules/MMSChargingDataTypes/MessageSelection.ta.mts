/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary MessageSelection
 * @description
 *
 * Messages which are to be viewed may be selected by a list of Message
 * References or by a selection based on MM State and/or MM Flags keywords.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.4.1.22.
 *
 * On a Bx1V-CDR, the MMs to list: MM state or MM flag keywords, such as
 * new or draft, or message references. If neither a state or flag keyword
 * nor a message reference is given, every MM currently stored in the MMBox
 * is selected. Category OM.
 *
 * 3GPP TS 32.270 V19.0.0 clause 6.1.4.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * MessageSelection  ::=  INTEGER
 * ```
 */
export
type MessageSelection = INTEGER;

export
const _decode_MessageSelection: $.ASN1Decoder<MessageSelection> = $._decodeInteger;

export
const _encode_MessageSelection: $.ASN1Encoder<MessageSelection> = $._encodeInteger;

/* eslint-enable */
