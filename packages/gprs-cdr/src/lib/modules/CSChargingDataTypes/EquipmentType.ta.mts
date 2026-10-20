/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EquipmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * EquipmentType  ::=  INTEGER {
 *    conferenceBridge    ( 0 )}
 * ```
 */
export
type EquipmentType = INTEGER;

/**
 * @summary EquipmentType_conferenceBridge
 * @constant
 * @type {number}
 */
export
const EquipmentType_conferenceBridge: EquipmentType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EquipmentType_conferenceBridge
 * @constant
 * @type {number}
 */
export
const conferenceBridge: EquipmentType = EquipmentType_conferenceBridge; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_EquipmentType: $.ASN1Decoder<EquipmentType> = $._decodeInteger;

export
const _encode_EquipmentType: $.ASN1Encoder<EquipmentType> = $._encodeInteger;

/* eslint-enable */
