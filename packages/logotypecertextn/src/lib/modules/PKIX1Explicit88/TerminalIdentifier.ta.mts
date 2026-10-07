/* eslint-disable */
import {
    ASN1Element as _Element,
    PrintableString,
    ASN1SizeError
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { ub_terminal_id_length } from "../PKIX1Explicit88/ub-terminal-id-length.va.mjs";



/**
 * @summary TerminalIdentifier
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * TerminalIdentifier  ::=  PrintableString (SIZE
 * (1..ub-terminal-id-length))
 * ```
 */
export
type TerminalIdentifier = PrintableString; // PrintableString
export const _decode_TerminalIdentifier = (el: _Element): TerminalIdentifier => {
    const value = $._decodePrintableString(el);
    if (value.length < 1 || value.length > Number(ub_terminal_id_length)) {
        throw new ASN1SizeError("TerminalIdentifier violates SIZE constraint");
    }
    return value;
};
export const _encode_TerminalIdentifier = $._encodePrintableString;


/* eslint-enable */
