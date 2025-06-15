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
} from 'asn1-ts';


/**
 * @summary m3100InformationModel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3100InformationModel OBJECT IDENTIFIER ::= {itu-t recommendation m gnm(3100) informationModel(0)}
 * ```
 *
 * @constant
 */
export const m3100InformationModel: OBJECT_IDENTIFIER = new _OID(
    [
        /* recommendation */ 0,
        /* m */ 13,
        /* gnm */ 3100,
        /* informationModel */ 0
    ],
    itu_t
);

/* eslint-enable */
