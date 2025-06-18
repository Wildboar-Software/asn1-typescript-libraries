import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import type { Context } from "../modules/InformationFramework/Context.ta.mjs";

/**
 * An attribute type `OBJECT IDENTIFIER`, the value itself, and the contexts
 * associated with it.
 *
 * (I am not sure why I allowed the value to be `undefined`. You might want to
 * define your own type if this is a problem.)
 */
export
type ATVAC = [ OBJECT_IDENTIFIER, ASN1Element | undefined, Context[] ];

export default ATVAC;
