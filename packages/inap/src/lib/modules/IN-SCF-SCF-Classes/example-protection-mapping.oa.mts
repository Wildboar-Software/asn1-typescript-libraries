/* eslint-disable */
import {
    type NULL,
    ObjectIdentifier as _OID,
    joint_iso_itu_t
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";
import { type PROTECTION_MAPPING } from "../Notation/PROTECTION-MAPPING.oca.mjs";
import { type SECURITY_TRANSFORMATION } from "@wildboar/guls";

/**
 * Example transformation named by the placeholder OID {1 2 4}.
 * The specification says an appropriate type goes here and uses NULL.
 */
const exampleSecurityTransformation: SECURITY_TRANSFORMATION<never, never, NULL, never> = {
    class: "SECURITY-TRANSFORMATION",
    decoderFor: {
        "&XformedDataType": $._decodeNull,
    },
    encoderFor: {
        "&XformedDataType": $._encodeNull,
    },
    "&sT-Identifier": _OID.fromParts([ /* placeholder */ 1, 2, 4, ]),
    "&StaticUnprotectedParm": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&DynamicUnprotectedParm": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&XformedDataType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
    "&QualifierType": 0 as never /* OBJECT_FIELD_SETTING OBJECT_TYPE_FIELD_SETTING */,
};


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
    "&SecurityTransformation": [ exampleSecurityTransformation, ] /* OBJECT_FIELD_SETTING */,
    "&protTransferSyntax": _OID.fromParts([/* genericULS */ 20, /* generalTransferSyntax */ 2,], joint_iso_itu_t) /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
    "&bypassPermitted": false /* OBJECT_FIELD_SETTING DEFAULT_OBJECT_FIELD_SETTING */,
};

/* eslint-enable */
