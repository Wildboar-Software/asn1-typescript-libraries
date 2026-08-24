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
import { ID, _decode_ID, _encode_ID } from '../EDIMSObjectIdentifiers/ID.ta.mjs';
import { id_nat } from '../EDIMSObjectIdentifiers/id-nat.va.mjs';
/**
 * @summary id_nat_nn_extensions
 * @description
 *
 * OBJECT IDENTIFIER `id_nat_nn_extensions`. A mechanism is provided which allows for
 * future extensions to this Recommendation | International Standard. ExtensionField ::=
 * SEQUENCE { type [0] EDIM-EXTENSION.&id, criticality [1] Criticality DEFAULT FALSE,
 * value [2] EDIM-EXTENSION.&Type DEFAULT NULL:NULL } Each Extension has the following
 * components: a) Type : Identifies the semantics and restricts the abstract syntax of
 * the Value component. See ITU-T X.435 (1999), §7.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-nat-nn-extensions ID ::= {id-nat  11}
 * ```
 *
 * @constant
 */
export const id_nat_nn_extensions: ID = _OID.fromParts([11], id_nat);

/* eslint-enable */
