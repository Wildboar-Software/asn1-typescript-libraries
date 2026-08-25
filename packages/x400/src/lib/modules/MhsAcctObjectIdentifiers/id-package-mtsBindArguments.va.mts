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
import { ID, _decode_ID, _encode_ID } from '../MhsAcctObjectIdentifiers/ID.ta.mjs';
import { id_package } from '../MhsAcctObjectIdentifiers/id-package.va.mjs';
/**
 * @summary id_package_mtsBindArguments
 * @description
 *
 * Table 1 lists the arguments of the MTS-bind, and for each argument qualifies its
 * presence and indicates the clause in which the argument is defined. Table 1 – MTS-bind
 * Arguments 8.1.1.1.1.1 Initiator-name This argument contains a name for the initiator of
 * the association. See ITU-T X.411 (1999), §8.1.1.1.1.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-package-mtsBindArguments ID ::= {id-package  35}
 * ```
 *
 * @constant
 */
export const id_package_mtsBindArguments: ID = _OID.fromParts([35], id_package);

/* eslint-enable */
