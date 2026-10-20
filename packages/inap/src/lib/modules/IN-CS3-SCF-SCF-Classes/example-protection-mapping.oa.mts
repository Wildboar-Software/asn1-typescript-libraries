/* eslint-disable */
import {
    ObjectIdentifier as _OID,
    joint_iso_itu_t
} from "@wildboar/asn1";
import { type PROTECTION_MAPPING } from "../Notation/PROTECTION-MAPPING.oca.mjs";


/**
 * @summary example_protection_mapping
 * @description
 * 
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * example-protection-mapping PROTECTION-MAPPING ::= {
 *   SECURITY-TRANSFORMATION
 *     {{IDENTIFIER         {1 2 4 -- an appropriate OID goes here --}
 *       XFORMED-DATA-TYPE  NULL -- an appropriate type goes here --}}
 * }
 * ```
 * 
 * @constant
 * @type {PROTECTION_MAPPING}
 * @implements {PROTECTION_MAPPING}
 */
export
const example_protection_mapping: PROTECTION_MAPPING = {
    class: "PROTECTION-MAPPING",
    decoderFor: {
    },
    encoderFor: {
    },
    "&SecurityTransformation": [ /* FIXME: COULD_NOT_COMPILE_DEFINED_SYNTAX_IN_OBJECT_SET */, ] /* OBJECT_FIELD_SETTING */,
    "&protTransferSyntax": _OID.fromParts([/* genericULS */ 20, /* generalTransferSyntax */ 2,], joint_iso_itu_t) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&bypassPermitted": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
