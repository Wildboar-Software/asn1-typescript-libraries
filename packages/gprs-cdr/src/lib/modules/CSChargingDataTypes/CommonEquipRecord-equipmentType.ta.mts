/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommonEquipRecord_equipmentType
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * CommonEquipRecord-equipmentType ::= INTEGER {
 *    conferenceBridge    ( 0 )
 * }
 * ```
 */
export
type CommonEquipRecord_equipmentType = INTEGER;

/**
 * @summary CommonEquipRecord_equipmentType_conferenceBridge
 * @constant
 * @type {number}
 */
export
const CommonEquipRecord_equipmentType_conferenceBridge: CommonEquipRecord_equipmentType = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary CommonEquipRecord_equipmentType_conferenceBridge
 * @constant
 * @type {number}
 */
export
const conferenceBridge: CommonEquipRecord_equipmentType = CommonEquipRecord_equipmentType_conferenceBridge; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_CommonEquipRecord_equipmentType: $.ASN1Decoder<CommonEquipRecord_equipmentType> = $._decodeInteger;

export
const _encode_CommonEquipRecord_equipmentType: $.ASN1Encoder<CommonEquipRecord_equipmentType> = $._encodeInteger;

/* eslint-enable */
