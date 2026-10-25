/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary OtherRecipientDesignator_type
 * @description
 * 
 * Whether an other-recipient designator is an action or information addressee.
 * STANAG 4406 (Ed. 2), Annex A, A1.12.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRecipientDesignator-type ::= INTEGER {
 *   primary (0),
 *   copy    (1)
 * }
 * ```
 */
export
type OtherRecipientDesignator_type = INTEGER;

/**
 * @summary OtherRecipientDesignator_type_primary
 * @description
 *
 * That other recipient is an action (primary) addressee. Integer 0. STANAG 4406
 * (Ed. 2), Annex A, A1.12 and B.113.
 * @constant
 * @type {number}
 */
export
const OtherRecipientDesignator_type_primary: 0 = 0 satisfies OtherRecipientDesignator_type; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_primary
 * @description
 *
 * That other recipient is an action (primary) addressee. Integer 0. STANAG 4406
 * (Ed. 2), Annex A, A1.12 and B.113.
 * @constant
 * @type {number}
 */
export
const primary: 0 = OtherRecipientDesignator_type_primary; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_copy
 * @description
 *
 * That other recipient is an information (copy) addressee. Integer 1. STANAG
 * 4406 (Ed. 2), Annex A, A1.12 and B.113.
 * @constant
 * @type {number}
 */
export
const OtherRecipientDesignator_type_copy: 1 = 1 satisfies OtherRecipientDesignator_type; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_copy
 * @description
 *
 * That other recipient is an information (copy) addressee. Integer 1. STANAG
 * 4406 (Ed. 2), Annex A, A1.12 and B.113.
 * @constant
 * @type {number}
 */
export
const copy: 1 = OtherRecipientDesignator_type_copy; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_OtherRecipientDesignator_type: $.ASN1Decoder<OtherRecipientDesignator_type> = $._decodeInteger;
export const _encode_OtherRecipientDesignator_type: $.ASN1Encoder<OtherRecipientDesignator_type> = $._encodeInteger;


/* eslint-enable */
