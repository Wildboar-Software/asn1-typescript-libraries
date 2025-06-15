/* eslint-disable */
import {
    OBJECT_IDENTIFIER,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/functional.mjs';

/* START_OF_SYMBOL_DEFINITION Abstract_Syntax_Name */
/**
 * @summary Abstract_Syntax_Name
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Abstract-Syntax-Name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Abstract_Syntax_Name = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION Abstract_Syntax_Name */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Abstract_Syntax_Name */
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Abstract_Syntax_Name */

/* START_OF_SYMBOL_DEFINITION _decode_Abstract_Syntax_Name */
export const _decode_Abstract_Syntax_Name = $._decodeObjectIdentifier;
/* END_OF_SYMBOL_DEFINITION _decode_Abstract_Syntax_Name */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Abstract_Syntax_Name */
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Abstract_Syntax_Name */

/* START_OF_SYMBOL_DEFINITION _encode_Abstract_Syntax_Name */
export const _encode_Abstract_Syntax_Name = $._encodeObjectIdentifier;

/* END_OF_SYMBOL_DEFINITION _encode_Abstract_Syntax_Name */

/* eslint-enable */
