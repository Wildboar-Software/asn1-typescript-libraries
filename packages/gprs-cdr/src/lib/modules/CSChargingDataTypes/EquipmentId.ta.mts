/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EquipmentId
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentId  ::=  INTEGER
 * ```
 */
export
type EquipmentId = INTEGER;

export
const _decode_EquipmentId: $.ASN1Decoder<EquipmentId> = $._decodeInteger;

export
const _encode_EquipmentId: $.ASN1Encoder<EquipmentId> = $._encodeInteger;

/* eslint-enable */
