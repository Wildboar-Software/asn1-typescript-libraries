/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary ComponentCorrelationID
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * ComponentCorrelationID  ::=  INTEGER
 * ```
 */
export
type ComponentCorrelationID = INTEGER;

export
const _decode_ComponentCorrelationID: $.ASN1Decoder<ComponentCorrelationID> = $._decodeInteger;

export
const _encode_ComponentCorrelationID: $.ASN1Encoder<ComponentCorrelationID> = $._encodeInteger;

/* eslint-enable */
