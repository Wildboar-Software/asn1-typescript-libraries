/* eslint-disable */
import {
    INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary SlduStatusNotification
 * @description
 * 
 * Whether an SLDU status notification is produced. Annex A2.1 assigns the two
 * numbers. Section 3 does not define when either value is selected.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * SlduStatusNotification  ::=    INTEGER
 * { produceNotification           (0)
 * , doNotProduceNotification      (1)
 * }
 * ```
 */
export
type SlduStatusNotification = INTEGER;

/**
 * @summary SlduStatusNotification_produceNotification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * selects it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const SlduStatusNotification_produceNotification: SlduStatusNotification = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SlduStatusNotification_produceNotification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define when it is selected
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const produceNotification: SlduStatusNotification = SlduStatusNotification_produceNotification; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary SlduStatusNotification_doNotProduceNotification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define the condition that
 * selects it.
 * 
 * CCSDS 911.1-B-5, annex A2.1.
 * @constant
 * @type {number}
 */
export
const SlduStatusNotification_doNotProduceNotification: SlduStatusNotification = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary SlduStatusNotification_doNotProduceNotification
 * @description
 * 
 * Annex A2.1 assigns this number. Section 3 does not define when it is selected
 * (CCSDS 911.1-B-5).
 * @constant
 * @type {number}
 */
export
const doNotProduceNotification: SlduStatusNotification = SlduStatusNotification_doNotProduceNotification; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_SlduStatusNotification: $.ASN1Decoder<SlduStatusNotification> = $._decodeInteger;
export const _encode_SlduStatusNotification: $.ASN1Encoder<SlduStatusNotification> = $._encodeInteger;


/* eslint-enable */
