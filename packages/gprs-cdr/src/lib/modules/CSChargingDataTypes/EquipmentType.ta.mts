/* eslint-disable */
import {
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary EquipmentType
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
const EquipmentType_conferenceBridge = 0 satisfies EquipmentType; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary EquipmentType_conferenceBridge
 * @constant
 * @type {number}
 */
export
const conferenceBridge = EquipmentType_conferenceBridge; /* SHORT_NAMED_INTEGER_VALUE */

export
const _decode_EquipmentType: $.ASN1Decoder<EquipmentType> = $._decodeInteger;

export
const _encode_EquipmentType: $.ASN1Encoder<EquipmentType> = $._encodeInteger;

/* eslint-enable */
