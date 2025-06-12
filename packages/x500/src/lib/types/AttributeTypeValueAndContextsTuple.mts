import type { ASN1Element, OBJECT_IDENTIFIER } from "asn1-ts";
import type { Context } from "../modules/InformationFramework/Context.ta.mjs";

export
type ATVAC = [ OBJECT_IDENTIFIER, ASN1Element | undefined, Context[] ];

export default ATVAC;
