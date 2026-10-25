/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary RatingGroupId
 * @description
 * 
 * Charging key of a PCC rule or ADC rule (clause 5.2.1.3). FBC and ABC
 * report usage per rating group, or per rating group and service id, or
 * per rating group, sponsor identity, and application service provider
 * identity. Online credit-control is per rating group (clause 5.1.1). In a
 * service-data container the rating group is mandatory (table 6.1.3.3).
 * 
 * 3GPP TS 32.251 V19.0.0.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * RatingGroupId  ::=  INTEGER
 * ```
 */
export
type RatingGroupId = INTEGER;

export
const _decode_RatingGroupId: $.ASN1Decoder<RatingGroupId> = $._decodeInteger;

export
const _encode_RatingGroupId: $.ASN1Encoder<RatingGroupId> = $._encodeInteger;

/* eslint-enable */
