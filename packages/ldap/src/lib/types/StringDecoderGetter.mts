import type { OBJECT_IDENTIFIER } from "@wildboar/asn1";
import type StringDecoder from "./StringDecoder.mjs";

/**
 * @summary A function that gets a string decoder for an LDAP syntax.
 * @description
 * 
 * A function that gets a string decoder for an LDAP syntax based on
 * the syntax OID or name.
 * 
 * @param syntax The syntax to get a string decoder for.
 * @returns The string decoder.
 * @function
 */
export
type StringDecoderGetter = (syntax: string) => [ OBJECT_IDENTIFIER, StringDecoder ] | undefined;

export default StringDecoderGetter;
