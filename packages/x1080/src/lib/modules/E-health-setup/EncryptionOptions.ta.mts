/* eslint-disable */
import {
    BOOLEAN,
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
 * @summary EncryptionOptions
 * @description
 *
 * Whether CMS encryption is applied to subsequent content
 * (`TRUE`/`FALSE`). Used by 2011 `Command`, `Response`, and
 * `Command-Response`; when `TRUE`, `Command-Response` content is
 * encrypted. ITU-T Rec. X.1080.1 (10/2011) modules E-health-setup,
 * E-health-send-and-ack, E-health-command-response; (05/2018)
 * [§9](https://www.itu.int/rec/T-REC-X.1080.1-201805-I).
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * EncryptionOptions  ::=  BOOLEAN
 * ```
 */
export type EncryptionOptions = BOOLEAN; // BooleanType




export const _decode_EncryptionOptions = $._decodeBoolean;




export const _encode_EncryptionOptions = $._encodeBoolean;


/* eslint-enable */
