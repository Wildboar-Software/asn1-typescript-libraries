/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ObjectIdentifier,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';
import { KEY_INFORMATION } from './KEY-INFORMATION.oca.mjs';
export { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca.mjs';
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.mjs';
import {
    gulsSignatureTransformation_XformedDataType,
    _decode_gulsSignatureTransformation_XformedDataType,
    _encode_gulsSignatureTransformation_XformedDataType,
} from "../GulsSecurityTransformations/gulsSignatureTransformation-XformedDataType.ta.mjs";

/* START_OF_SYMBOL_DEFINITION gulsSignatureTransformation */
/**
 * @summary gulsSignatureTransformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSignatureTransformation{KEY-INFORMATION:SupportedKIClasses}
 *   SECURITY-TRANSFORMATION ::= {
 *   IDENTIFIER              {securityTransformations guls-signature(5)}
 *   INITIAL-ENCODING-RULES
 *     {joint-iso-itu-t asn1(1) ber-derived(2) canonical-encoding(0)}
 *   -- This default for initial encoding rules may be overridden
 *   -- using a static protected parameter (initEncRules).
 *   XFORMED-DATA-TYPE
 *     SEQUENCE {initEncRules
 *                 OBJECT IDENTIFIER
 *                   DEFAULT
 *                     {joint-iso-itu-t asn1(1) ber-derived(2)
 *                      canonical-encoding(0)},
 *               signOrSealAlgorithm  AlgorithmIdentifier OPTIONAL,
 *               -- Identifies the signing or
 *               -- sealing algorithm, and can convey
 *               -- algorithm parameters
 *               hashAlgorithm        AlgorithmIdentifier OPTIONAL,
 *               -- Identifies a hash function,
 *               -- for use if a hash function is required
 *               -- and the signOrSealAlgorithm identifier
 *               -- does not imply a particular hash
 *               -- function. Can also convey algorithm parameters.
 *               keyInformation
 *                 SEQUENCE {kiClass
 *                             KEY-INFORMATION.&kiClass({SupportedKIClasses}),
 *                           keyInfo
 *                             KEY-INFORMATION.&KiType
 *                               ({SupportedKIClasses}{@.kiClass})} OPTIONAL,
 *               -- Key information may assume various
 *               -- formats, governed by supported members
 *               -- of the KEY-INFORMATION information
 *               -- object class (defined at start of the
 *               -- definitive ASN.1 module)
 *               appendix
 *                 BIT STRING
 *                   (CONSTRAINED BY {
 *                      -- the appendix value must be generated following
 *                      -- the procedure specified in D.5 of DIS 11586-1 -- })
 *   }
 * }
 * ```
 */
export
function gulsSignatureTransformation (SupportedKIClasses: KEY_INFORMATION[]): SECURITY_TRANSFORMATION<
    undefined,
    undefined,
    gulsSignatureTransformation_XformedDataType,
    undefined
> {
    return {
        class: "SECURITY-TRANSFORMATION",
        decoderFor: {
            "&XformedDataType": _decode_gulsSignatureTransformation_XformedDataType,
        },
        encoderFor: {
            "&XformedDataType": _encode_gulsSignatureTransformation_XformedDataType,
        },
        "&sT-Identifier": new ObjectIdentifier([ 5 ], securityTransformations),
        "&initialEncodingRules": new ObjectIdentifier([ 2, 1, 2, 0 ]),
        "&XformedDataType": 0 as never,
        "&StaticUnprotectedParm": undefined,
        "&DynamicUnprotectedParm": undefined,
        "&QualifierType": undefined,
    };
}
/* END_OF_SYMBOL_DEFINITION gulsSignatureTransformation */

/* eslint-enable */
