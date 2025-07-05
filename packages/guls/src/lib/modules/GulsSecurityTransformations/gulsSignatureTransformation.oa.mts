/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    ObjectIdentifier,
} from '@wildboar/asn1';
import { type SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.mjs';
import {
    gulsSignatureTransformation_XformedDataType,
    _decode_gulsSignatureTransformation_XformedDataType,
    _encode_gulsSignatureTransformation_XformedDataType,
} from "../GulsSecurityTransformations/gulsSignatureTransformation-XformedDataType.ta.mjs";
import { type KEY_INFORMATION } from './KEY-INFORMATION.oca.mjs';


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
        "&sT-Identifier": ObjectIdentifier.fromParts([ 5 ], securityTransformations),
        "&initialEncodingRules": ObjectIdentifier.fromParts([ 2, 1, 2, 0 ]),
        "&XformedDataType": 0 as never,
        "&StaticUnprotectedParm": undefined,
        "&DynamicUnprotectedParm": undefined,
        "&QualifierType": undefined,
    };
}

/* eslint-enable */
