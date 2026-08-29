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
import { type AC_PROXY } from '../AccessControl-ASN1Module/AC-PROXY.oca.mjs';
/**
 * @summary ProxySet
 * @description
 *
 * Extensible object set of `AC-PROXY` identities used to
 * type `Proxy.proxyValue`. Empty in this module (`{...}`);
 * implementations populate it. ITU-T Rec. X.741 Cor.3
 * (02/2000)
 * [A.6](https://www.itu.int/rec/T-REC-X.741-200002-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * ProxySet AC-PROXY ::= {...}
 * ```
 *
 * @constant
 * @type {AC_PROXY[]}
 *
 */
export const ProxySet: AC_PROXY[] = [];

/* eslint-enable */
