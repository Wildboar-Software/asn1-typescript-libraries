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
 * @summary MKMF_VALUES
 * @description
 *
 * Information-object class (`DMI-TYPE-IDENTIFIER`) that binds each
 * `attributeId` in `ImplementedValues` to that attribute's value
 * syntax. Introduced by X.750 Cor.1 in place of
 * `ANY DEFINED BY`. ITU-T Rec. X.750 Cor.1 (02/00)
 * [A.2.4](https://www.itu.int/rec/T-REC-X.750-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MKMF-VALUES ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type MKMF_VALUES = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
