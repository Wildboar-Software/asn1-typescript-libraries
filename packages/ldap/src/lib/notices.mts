import { ObjectIdentifier, type OBJECT_IDENTIFIER } from "@wildboar/asn1";

/**
 * Aborted Transaction Notice [RFC5805]
 */
export const abortedTransaction: OBJECT_IDENTIFIER = ObjectIdentifier.fromParts([ 1,3,6,1,1,21,4 ]);
