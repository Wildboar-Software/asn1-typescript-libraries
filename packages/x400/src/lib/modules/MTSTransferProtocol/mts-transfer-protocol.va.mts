/* eslint-disable */
import {
    INTEGER,
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
 * @summary mts_transfer_protocol
 * @description
 *
 * The MTS Transfer Protocol (P1) provides the following services defined in a) MTA-bind b)
 * MTA-unbind 26 Message Transfer Service Element (MTSE) c) Message-transfer d)
 * Probe-transfer e) Report-transfer 11.3 Use of Underlying Services The MTS Transfer
 * Protocol (P1) makes use of underlying services as described below. 11.3.1 Use of the
 * RTSE Services The Reliable Transfer Service Element (RTSE) is defined in CCITT Rec. See
 * ITU-T X.419 (1999), §11.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * mts-transfer-protocol INTEGER ::= 12
 * ```
 *
 * @constant
 */
export const mts_transfer_protocol: INTEGER = 12;

/* eslint-enable */
