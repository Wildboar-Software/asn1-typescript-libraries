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
 * @summary ALGORITHM_IDENTIFIER
 * @description
 *
 * PKCS #5 `ALGORITHM-IDENTIFIER` class, used here for URL digest algorithms
 * (`DigestAlgorithms`). ISO/IEC 7816-15:2016 Annex A.2.5.
 *
 * @interface
 */
export
type ALGORITHM_IDENTIFIER<Type = any> = TYPE_IDENTIFIER<Type>;

/* eslint-enable */
