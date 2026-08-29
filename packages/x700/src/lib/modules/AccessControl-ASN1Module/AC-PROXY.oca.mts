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
 * @summary AC_PROXY
 * @description
 *
 * Type identifier for proxy (anonymous) initiator
 * identities. Open object set `ProxySet` holds the
 * registered `&id`/`&Value` pairs. Introduced by Cor.3 in
 * place of `ANY DEFINED BY`. ITU-T Rec. X.741 Cor.3
 * (02/2000)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AC-PROXY ::= DMI-TYPE-IDENTIFIER
 * ```
 *
 * @interface
 */
export type AC_PROXY = DMI_TYPE_IDENTIFIER;

/* eslint-enable */
