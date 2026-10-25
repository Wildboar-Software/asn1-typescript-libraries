/* eslint-disable */
import {
    type GraphicString,
    type ASN1Element as _Element,
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
 * @summary CrossConnectionName
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * CrossConnectionName  ::=  GraphicString
 * ```
 */
export type CrossConnectionName = GraphicString; // GraphicString




export const _decode_CrossConnectionName: $.ASN1Decoder<string> = $._decodeGraphicString;




export const _encode_CrossConnectionName: $.ASN1Encoder<string> = $._encodeGraphicString;


/* eslint-enable */
