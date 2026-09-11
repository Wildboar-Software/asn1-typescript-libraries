/* eslint-disable */
import { TYPE_IDENTIFIER } from "@wildboar/asn1";

/**
 * @summary BHSM_PSID
 * @description
 *
 * `TYPE-IDENTIFIER` class for BHSM pseudonymous-identifier
 * objects
 * ([ITU-T X.1085](https://www.itu.int/rec/T-REC-X.1085-201610-I)
 * | ISO/IEC 17922 Annex A.3). Each object binds a type to an
 * OID under the `bhsmpsid` arc. Constrains
 * `InstanceOfBHSM-PID`.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * BHSM-PSID ::= TYPE-IDENTIFIER
 * ```
 */
export type BHSM_PSID = TYPE_IDENTIFIER;

/* eslint-enable */
