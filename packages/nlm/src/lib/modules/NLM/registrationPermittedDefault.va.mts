/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary registrationPermittedDefault
 * @description
 *
 * Default of `registrationPermitted`: `false` (online facility registration not
 * permitted). On `onlineRegistration-P`.
 * ITU-T Rec. X.283 (12/97)
 * [§5.10](https://www.itu.int/rec/T-REC-X.283-199712-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * registrationPermittedDefault BOOLEAN ::= FALSE
 * ```
 *
 * @constant
 */
export const registrationPermittedDefault: BOOLEAN = false;

/* eslint-enable */
