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
import { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca';
export { SECURITY_TRANSFORMATION } from '../Notation/SECURITY-TRANSFORMATION.oca';
import { KEY_INFORMATION } from './KEY-INFORMATION.oca';
export { PROTECTION_MAPPING } from '../Notation/PROTECTION-MAPPING.oca';
import { securityTransformations } from '../ObjectIdentifiers/securityTransformations.va';
import {
    gulsSignedTransformation_XformedDataType,
    _decode_gulsSignedTransformation_XformedDataType,
    _encode_gulsSignedTransformation_XformedDataType,
} from "../GulsSecurityTransformations/gulsSignedTransformation-XformedDataType.ta";

/* START_OF_SYMBOL_DEFINITION gulsSignedTransformation */
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
        "&sT-Identifier": new ObjectIdentifier([ 4 ], securityTransformations),
        "&initialEncodingRules": new ObjectIdentifier([ 2, 1, 2, 0 ]),
        "&XformedDataType": 0 as never,
        "&StaticUnprotectedParm": undefined,
        "&DynamicUnprotectedParm": undefined,
        "&QualifierType": undefined,
    };
}
/* END_OF_SYMBOL_DEFINITION gulsSignedTransformation */

/* eslint-enable */
