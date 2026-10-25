/* eslint-disable */
import {
    type ASN1Element as _Element,
    type INTEGER
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary AddressListDesignator_type
 * @description
 * 
 * Whether an address list was submitted as action or as information. STANAG
 * 4406 (Ed. 2), Annex A, A1.11 and B.104.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * AddressListDesignator-type ::= INTEGER {
 *   primaryAddressList (0),
 *   copyAddressList    (1)
 * }
 * ```
 */
export
type AddressListDesignator_type = INTEGER;

/**
 * @summary AddressListDesignator_type_primaryAddressList
 * @description
 *
 * The address list was sent as action (primary). Integer 0. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const AddressListDesignator_type_primaryAddressList: AddressListDesignator_type = 0; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListDesignator_type_primaryAddressList
 * @description
 *
 * The address list was sent as action (primary). Integer 0. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const primaryAddressList: AddressListDesignator_type = AddressListDesignator_type_primaryAddressList; /* SHORT_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListDesignator_type_copyAddressList
 * @description
 *
 * The address list was sent as information (copy). Integer 1. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const AddressListDesignator_type_copyAddressList: AddressListDesignator_type = 1; /* LONG_NAMED_INTEGER_VALUE */

/**
 * @summary AddressListDesignator_type_copyAddressList
 * @description
 *
 * The address list was sent as information (copy). Integer 1. STANAG 4406 (Ed.
 * 2), Annex A, A1.11 and B.104.
 * @constant
 * @type {number}
 */
export
const copyAddressList: AddressListDesignator_type = AddressListDesignator_type_copyAddressList; /* SHORT_NAMED_INTEGER_VALUE */
export const _decode_AddressListDesignator_type: $.ASN1Decoder<AddressListDesignator_type> = $._decodeInteger;
export const _encode_AddressListDesignator_type: $.ASN1Encoder<AddressListDesignator_type> = $._encodeInteger;


/* eslint-enable */
