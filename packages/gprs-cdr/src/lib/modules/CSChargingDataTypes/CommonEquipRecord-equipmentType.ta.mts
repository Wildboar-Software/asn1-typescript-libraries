/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary CommonEquipRecord_equipmentType
 * @description
 *
 * This field contains the type of common equipment employed e.g. conference
 * circuit for multi-party service.
 *
 * 3GPP TS 32.298 V20.1.0 clause 5.1.2.1.23.
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
