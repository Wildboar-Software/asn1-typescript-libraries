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
} from "@wildboar/asn1";
import * as $ from "@wildboar/asn1/functional";



/**
 * @summary NotificationIdentifier
 * @description
 * 
 * Unique identifier of a notification so others can cite it in
 * `CorrelatedNotifications`. Reuse only when no requirement remains to
 * correlate a prior notification. MATCHES FOR EQUALITY. `{smi2AttributeID 16}`.
 * ITU-T Rec. X.721 (02/92) §8.7, §10.7.1.11, §14.2.
 *
 * ### ASN.1 Definition:
 * 
 * ```asn1
 * NotificationIdentifier  ::=  INTEGER
 * ```
 */
export
type NotificationIdentifier = INTEGER;


export const _decode_NotificationIdentifier = $._decodeInteger;


export const _encode_NotificationIdentifier = $._encodeInteger;


/* eslint-enable */
