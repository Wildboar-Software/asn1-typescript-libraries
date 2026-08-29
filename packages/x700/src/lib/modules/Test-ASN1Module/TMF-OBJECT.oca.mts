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
 * @summary TMF_OBJECT
 * @description
 *
 * TYPE-IDENTIFIER class for associated-object extra information in a test
 * request or TO. X.745 Cor.3 rewrote AssociatedObjects to use `TMF-OBJECT ::=
 * DMI-TYPE-IDENTIFIER` (X.721) so the info id/value pair is constrained by
 * AssociatedObjectSet.
 * X.745 Cor.3 (02/00) A.7.1.
 * https://www.itu.int/rec/T-REC-X.745-200002-I_Cor3
 * ITU-T Rec. X.745 (11/93) §8.1.1.
 * [§8.1.1](https://www.itu.int/rec/T-REC-X.745-199311-I)
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TMF-OBJECT ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type TMF_OBJECT = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
