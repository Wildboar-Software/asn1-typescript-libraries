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
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca.mjs';
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va.mjs';
import {
    gulsSignedTransformation_XformedDataType,
    _decode_gulsSignedTransformation_XformedDataType,
    _encode_gulsSignedTransformation_XformedDataType,
} from "../GulsSecurityTransformations/gulsSignedTransformation-XformedDataType.ta.mjs";
import { KEY_INFORMATION } from './KEY-INFORMATION.oca.mjs';


/**
 * @summary gulsSignedTransformation
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * gulsSignedTransformation{KEY-INFORMATION:SupportedKIClasses}
 *   SECURITY-TRANSFORMATION ::= {
 *   IDENTIFIER              {securityTransformations guls-signed(4)}
 *   INITIAL-ENCODING-RULES
 *     {joint-iso-itu-t asn1(1) ber-derived(2) canonical-encoding(0)}
 *   -- This default for initial encoding rules may be overridden
 *   -- using a static protected parameter (initEncRules).
 *   XFORMED-DATA-TYPE
 *     SEQUENCE {intermediateValue
 *                 EMBEDDED PDV
 *                   (WITH COMPONENTS {
 *                      identification  (WITH COMPONENTS {
 *                                         transfer-syntax  (CONSTRAINED BY {
 *                                                             -- The transfer syntax to be used is that
 *                                                             -- indicated by the initEncRules value within
 *                                                             -- the intermediate value -- })PRESENT
 *                                       }),
 *                      data-value      (CONTAINING IntermediateType{{SupportedKIClasses}})
 *                    -- The data value encoded is a value of type
 *                    -- IntermediateType
 *                    }),
 *               appendix
 *                 BIT STRING
 *                   (CONSTRAINED BY {
 *                      -- the appendix value must be generated following
 *                      -- the procedure specified in D.4 of DIS 11586-1 -- })
 *   }
 * }
 * ```
 */
export
function gulsSignedTransformation (SupportedKIClasses: KEY_INFORMATION[]): SECURITY_TRANSFORMATION<
    undefined,
    undefined,
    gulsSignedTransformation_XformedDataType,
    undefined
> {
    return {
        class: "SECURITY-TRANSFORMATION",
        decoderFor: {
            "&XformedDataType": _decode_gulsSignedTransformation_XformedDataType,
        },
        encoderFor: {
            "&XformedDataType": _encode_gulsSignedTransformation_XformedDataType,
        },
        "&sT-Identifier": ObjectIdentifier.fromParts([ 4 ], securityTransformations),
        "&initialEncodingRules": ObjectIdentifier.fromParts([ 2, 1, 2, 0 ]),
        "&XformedDataType": 0 as never,
        "&StaticUnprotectedParm": undefined,
        "&DynamicUnprotectedParm": undefined,
        "&QualifierType": undefined,
    };
}

/* eslint-enable */
