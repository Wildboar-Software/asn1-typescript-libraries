/* eslint-disable */
import {
    TYPE_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from "@wildboar/asn1";



/**
 * @summary CONTENT-TYPE
 * @description
 *
 * `TYPE-IDENTIFIER` used to type ACBio BPU report content.
 * ITU-T Rec. X.1089 (05/2008)
 * [Annex A](https://www.itu.int/rec/T-REC-X.1089-200805-I).
 */
export
type CONTENT_TYPE<Type> = TYPE_IDENTIFIER<Type>;

/* eslint-enable */
