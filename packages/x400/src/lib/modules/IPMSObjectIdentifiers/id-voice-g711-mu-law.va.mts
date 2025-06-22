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
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_eit_voice } from '../IPMSObjectIdentifiers/id-eit-voice.va.mjs';
/**
 * @summary id_voice_g711_mu_law
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-voice-g711-mu-law ID ::= {id-eit-voice  3}
 * ```
 *
 * @constant
 */
export const id_voice_g711_mu_law: ID = _OID.fromParts([3], id_eit_voice);

/* eslint-enable */
