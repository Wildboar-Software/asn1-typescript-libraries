/* eslint-disable */
import { FIELD_ID } from "../ANSI-X9-42/FIELD-ID.oca.mjs";
import {
    _decode_DomainParameters,
    _encode_DomainParameters,
} from "../ANSI-X9-42/DomainParameters.ta.mjs";
import { gfPrime } from "../ANSI-X9-42/gfPrime.va.mjs";


/**
 * @summary FieldTypes
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * FieldTypes FIELD-ID ::= {
 * { DomainParameters IDENTIFIED BY gfPrime }, -- GF(p)
 * ...
 * }
 * ```
 *
 * @constant
 * @type {FIELD_ID[]}
 *
 */
export const FieldTypes: FIELD_ID[] = [
    {
        class: "FIELD-ID",
        decoderFor: {
            "&Type": _decode_DomainParameters,
        },
        encoderFor: {
            "&Type": _encode_DomainParameters,
        },
        "&id": gfPrime,
        "&Type": 0 as never,
    },
];

/* eslint-enable */
