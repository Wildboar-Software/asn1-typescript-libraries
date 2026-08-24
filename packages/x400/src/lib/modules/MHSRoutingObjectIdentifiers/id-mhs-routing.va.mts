/* eslint-disable */
import {
    joint_iso_itu_t,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from '@wildboar/asn1';
import {
    ID,
    _decode_ID,
    _encode_ID,
} from '../MHSRoutingObjectIdentifiers/ID.ta.mjs';
/**
 * @summary id_mhs_routing
 * @description
 *
 * OBJECT IDENTIFIER `id_mhs_routing`. The following terms are defined in clauses 6 and 7
 * of this Recommendation | International Standard: – connection-group –
 * entry-connection-group – enumerated connection-group – indirect-exit-connection-group
 * – key-routing-collective – local-exit-connection-group – local-use-tables –
 * MHS-routing – next-MTA – OR-address-element – OR-address-subtree – routing-advice –
 * routing-collective – routing-collective-subtree –… See ITU-T X.412 (1999), §3.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-mhs-routing ID ::= {joint-iso-itu-t mhs(6) routing(10)}
 * ```
 *
 * @constant
 */
export const id_mhs_routing: ID = _OID.fromParts(
    [/* mhs */ 6, /* routing */ 10],
    joint_iso_itu_t
);

/* eslint-enable */
