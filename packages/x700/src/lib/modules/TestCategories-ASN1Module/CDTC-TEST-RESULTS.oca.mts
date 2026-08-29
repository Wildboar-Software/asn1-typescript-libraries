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
} from '@wildboar/asn1';
import { type DMI_TYPE_IDENTIFIER } from '@wildboar/attribute-asn1module';
/**
 * @summary CDTC_TEST_RESULTS
 * @description
 *
 * Information object class for internal-resource test
 * result values (`DMI-TYPE-IDENTIFIER`). Cor.2 replacement for
 * ANY DEFINED BY on `InternalResourceTestResults`. ITU-T Rec.
 * X.737 Cor.2 (02/00) [https://www.itu.int/rec/T-REC-X.737-200002-I].
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CDTC-TEST-RESULTS ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type CDTC_TEST_RESULTS = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
