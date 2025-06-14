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
/* START_OF_SYMBOL_DEFINITION id_voice_g728_16k_ld_celp */
/**
 * @summary id_voice_g728_16k_ld_celp
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * id-voice-g728-16k-ld-celp ID ::= {id-eit-voice  5}
 * ```
 *
 * @constant
 */
export const id_voice_g728_16k_ld_celp: ID = new _OID([5], id_eit_voice);
/* END_OF_SYMBOL_DEFINITION id_voice_g728_16k_ld_celp */

/* eslint-enable */
