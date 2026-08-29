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
} from '@wildboar/asn1';

/**
 * @summary REGISTERED_AS
 * @description
 *
 * GDMO example support from X.722 Amendment 2. Alias of
 * ASN.1 `TYPE-IDENTIFIER` (`&id` UNIQUE object identifier,
 * `&Type`). Used with `RegisteredAsTable` so ATTRIBUTE and
 * PARAMETER templates can identify an open type by a
 * registered object identifier. ITU-T Rec. X.722 (01/92)/Amd.2
 * (08/97)
 * [item 4](https://www.itu.int/rec/T-REC-X.722-199708-I).
 */
export type REGISTERED_AS = TYPE_IDENTIFIER;

/* eslint-enable */
