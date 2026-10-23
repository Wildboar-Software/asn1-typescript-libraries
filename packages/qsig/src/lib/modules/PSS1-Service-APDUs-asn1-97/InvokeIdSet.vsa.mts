/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary InvokeIdSet
 * @description
 *
 * The invoke identifiers an Invoke APDU may use: -32768..32767 (ECMA-165
 * §11.3.3.4). That is the same range as `InvokeIDType` in the X.208 module of
 * Annex K Table K.6. `InvokeId` itself is not limited; this value set is what
 * Table 34 applies.
 *
 * @see https://ecma-international.org/publications-and-standards/standards/ecma-165/
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * InvokeIdSet INTEGER ::= { INTEGER (-32768..32767) }
 * ```
 * 
 * @type {INTEGER}
 */
export
type InvokeIdSet = INTEGER; // VALUE_SET_TYPE

export
const _decode_InvokeIdSet: $.ASN1Decoder<InvokeIdSet> = $._decodeInteger;

export
const _encode_InvokeIdSet: $.ASN1Encoder<InvokeIdSet> = $._encodeInteger;

/* eslint-enable */
