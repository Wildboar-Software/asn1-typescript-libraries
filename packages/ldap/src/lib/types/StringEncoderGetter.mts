import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type StringEncoder from "./StringEncoder.mjs";

/**
 * @summary A function that gets a string encoder for an LDAP syntax.
 * @description
 * 
 * A function that gets a string encoder for an LDAP syntax based on
 * the syntax OID.
 * 
 * @param syntax The syntax to get a string encoder for.
 * @returns The string encoder.
 * @function
 */
export
type StringEncoderGetter = (syntax: OBJECT_IDENTIFIER) => StringEncoder | undefined;

export default StringEncoderGetter;
