/* eslint-disable */
import {
    itu_t,
    OBJECT_IDENTIFIER,
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
 * @summary m3108Part2Identifier
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108Part2Identifier OBJECT IDENTIFIER ::= {itu-t recommendation m lcs(3108) connectionManagement(2) informationModel(0)
 *    asn1Modules(2) asn1DefinedTypesModule(0)}
 * ```
 *
 * @constant
 */
export const m3108Part2Identifier: OBJECT_IDENTIFIER = _OID.fromParts(
    [
        /* recommendation */ 0,
        /* m */ 13,
        /* lcs */ 3108,
        /* connectionManagement */ 2,
        /* informationModel */ 0,
        /* asn1Modules */ 2,
        /* asn1DefinedTypesModule */ 0,
    ],
    itu_t
);

/* eslint-enable */
