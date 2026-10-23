/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EquipmentId
 * @description
 *
 * This field contains a local identifier used to distinguish between
 * equipment of the same equipment type e.g. the number of the conference
 * circuit employed if more than one is available.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.22.
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
