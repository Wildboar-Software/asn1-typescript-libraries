/* eslint-disable */
import {
    INTEGER,
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";

/**
 * @summary OtherRecipientDesignator_type
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * OtherRecipientDesignator-type ::= INTEGER {
  primary(0),
  copy(1)
}
 * ```
 */
export
type OtherRecipientDesignator_type = INTEGER;

/**
 * @summary OtherRecipientDesignator_type_primary
 * @constant
 * @type {number}
 */
export
const OtherRecipientDesignator_type_primary: OtherRecipientDesignator_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_primary
 * @constant
 * @type {number}
 */
export
const primary: OtherRecipientDesignator_type = OtherRecipientDesignator_type_primary; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_copy
 * @constant
 * @type {number}
 */
export
const OtherRecipientDesignator_type_copy: OtherRecipientDesignator_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary OtherRecipientDesignator_type_copy
 * @constant
 * @type {number}
 */
export
const copy: OtherRecipientDesignator_type = OtherRecipientDesignator_type_copy; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_OtherRecipientDesignator_type = $._decodeInteger;
export const _encode_OtherRecipientDesignator_type = $._encodeInteger;

/* eslint-enable */
