/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary FacilityGroupMember
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * FacilityGroupMember  ::=  INTEGER
 * ```
 */
export
type FacilityGroupMember = INTEGER;

export
const _decode_FacilityGroupMember: $.ASN1Decoder<FacilityGroupMember> = $._decodeInteger;

export
const _encode_FacilityGroupMember: $.ASN1Encoder<FacilityGroupMember> = $._encodeInteger;

/* eslint-enable */
