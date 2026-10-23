/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeId
 * @description
 *
 * Correlates an invoke with its return result, return error, or reject
 * (ECMA-165 §6.4, §11.3.3.4). An invoke identifier must be unambiguous. When it
 * appears in an Invoke APDU it is constrained to `InvokeIdSet`, the range
 * -32768..32767. Annex G refers duplicate assignment to the rules of ITU-T
 * X.880.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeId  ::=  INTEGER
 * ```
 */
export
type InvokeId = INTEGER;

export
const _decode_InvokeId: $.ASN1Decoder<InvokeId> = $._decodeInteger;

export
const _encode_InvokeId: $.ASN1Encoder<InvokeId> = $._encodeInteger;

/* eslint-enable */
