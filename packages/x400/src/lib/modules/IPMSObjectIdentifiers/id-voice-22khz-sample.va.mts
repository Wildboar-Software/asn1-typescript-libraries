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
/* START_OF_SYMBOL_DEFINITION id_voice_22khz_sample */
/**
 * @summary id_voice_22khz_sample
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-voice-22khz-sample ID ::= {id-eit-voice  1}
 * ```
 *
 * @constant
 */
export const id_voice_22khz_sample: ID = new _OID([1], id_eit_voice);
/* END_OF_SYMBOL_DEFINITION id_voice_22khz_sample */

/* eslint-enable */
