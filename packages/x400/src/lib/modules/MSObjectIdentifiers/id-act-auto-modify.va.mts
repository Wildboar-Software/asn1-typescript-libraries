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
import { ID, _decode_ID, _encode_ID } from '../MHSObjectIdentifiers/ID.ta.mjs';
import { id_act } from '../MSObjectIdentifiers/id-act.va.mjs';
/**
 * @summary id_act_auto_modify
 * @description
 *
 * OBJECT IDENTIFIER `id_act_auto_modify`. The Auto-modify auto-action enables the
 * MS-user to instruct the MS to apply modifications automatically to the attributes of
 * an entry provided that the entry satisfies given criteria. The auto-action is
 * performed whenever an entry of the Stored-message or Message-log entry-classes is
 * created, i.e., when a message or report is delivered, or when a draft message is
 * stored, or when a message or probe is submitted… See ITU-T X.413 (1999), §13.2.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-act-auto-modify ID ::= {id-act  4}
 * ```
 *
 * @constant
 */
export const id_act_auto_modify: ID = _OID.fromParts([4], id_act);

/* eslint-enable */
