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
} from 'asn1-ts';
import { ID, _decode_ID, _encode_ID } from '../IPMSObjectIdentifiers/ID.ta.mjs';
import { id_eit_voice } from '../IPMSObjectIdentifiers/id-eit-voice.va.mjs';
/* START_OF_SYMBOL_DEFINITION id_voice_cd_quality */
/**
 * @summary id_voice_cd_quality
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-voice-cd-quality ID ::= {id-eit-voice  2}
 * ```
 *
 * @constant
 */
export const id_voice_cd_quality: ID = new _OID([2], id_eit_voice);
/* END_OF_SYMBOL_DEFINITION id_voice_cd_quality */

/* eslint-enable */
