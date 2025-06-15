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
 * @summary m3108PartVPNInformationModel
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * m3108PartVPNInformationModel OBJECT IDENTIFIER ::= {itu-t recommendation m lcs(3108) vpnServiceManagement(3) informationModel(0)}
 * ```
 *
 * @constant
 */
export const m3108PartVPNInformationModel: OBJECT_IDENTIFIER = new _OID(
    [
        /* recommendation */ 0,
        /* m */ 13,
        /* lcs */ 3108,
        /* vpnServiceManagement */ 3,
        /* informationModel */ 0,
    ],
    itu_t
);

/* eslint-enable */
