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
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';


/**
 * @summary Transfer_syntax_name
 * @description
 *
 * Registered name of a transfer syntax, or of a specification that
 * produces one (X.226 §6.2.2.7, Annex B). Selected per accepted
 * presentation context during connect or alter-context.
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Transfer-syntax-name  ::=  OBJECT IDENTIFIER
 * ```
 */
export type Transfer_syntax_name = OBJECT_IDENTIFIER; // ObjectIdentifierType




export const _decode_Transfer_syntax_name = $._decodeObjectIdentifier;




export const _encode_Transfer_syntax_name = $._encodeObjectIdentifier;


/* eslint-enable */
