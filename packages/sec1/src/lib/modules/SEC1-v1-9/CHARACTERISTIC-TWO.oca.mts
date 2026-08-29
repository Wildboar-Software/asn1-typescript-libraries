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
 * @summary CHARACTERISTIC_TWO
 * @description
 *
 * ITU-T X.681 `TYPE-IDENTIFIER` for an F_2^m basis: `&id` is `gnBasis` /
 * `tpBasis` / `ppBasis` and `&Type` is `NULL`, `Trinomial`, or `Pentanomial`.
 * [SEC 1 v2](https://www.secg.org/sec1-v2.pdf) §C.1.
 *
 * @interface
 */
export
type CHARACTERISTIC_TWO <Type> = TYPE_IDENTIFIER <Type>;

/* eslint-enable */
