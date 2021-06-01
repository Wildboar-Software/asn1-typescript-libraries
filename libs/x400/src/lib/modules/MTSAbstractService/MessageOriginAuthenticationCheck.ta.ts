/* eslint-disable */
import {
    itu_t,
    itu_r,
    ccitt,
    iso,
    joint_iso_itu_t,
    joint_iso_ccitt,
    OPTIONAL,
    BOOLEAN,
    INTEGER,
    BIT_STRING,
    OCTET_STRING,
    NULL,
    OBJECT_IDENTIFIER,
    ObjectDescriptor,
    EXTERNAL,
    REAL,
    INSTANCE_OF,
    ENUMERATED,
    EMBEDDED_PDV,
    UTF8String,
    RELATIVE_OID,
    SEQUENCE,
    SEQUENCE_OF,
    SET,
    SET_OF,
    GraphicString,
    NumericString,
    VisibleString,
    PrintableString,
    ISO646String,
    TeletexString,
    GeneralString,
    T61String,
    UniversalString,
    VideotexString,
    BMPString,
    IA5String,
    CharacterString,
    UTCTime,
    GeneralizedTime,
    TIME,
    DATE,
    TIME_OF_DAY,
    DATE_TIME,
    DURATION,
    OID_IRI,
    RELATIVE_OID_IRI,
    TRUE,
    FALSE,
    TRUE_BIT,
    FALSE_BIT,
    PLUS_INFINITY,
    MINUS_INFINITY,
    NOT_A_NUMBER,
    TYPE_IDENTIFIER,
    ABSTRACT_SYNTAX,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
} from 'asn1-ts';
import * as $ from 'asn1-ts/dist/node/functional';
import {
    SIGNATURE,
    _decode_SIGNATURE,
    _encode_SIGNATURE,
    _root_component_type_list_1_spec_for_SIGNATURE,
    _extension_additions_list_spec_for_SIGNATURE,
    _root_component_type_list_2_spec_for_SIGNATURE,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta';
export {
    SIGNATURE,
    _decode_SIGNATURE as _decode_MessageOriginAuthenticationCheck,
    _encode_SIGNATURE as _encode_MessageOriginAuthenticationCheck,
} from '@wildboar/x500/src/lib/modules/AuthenticationFramework/SIGNATURE.ta';

/* START_OF_SYMBOL_DEFINITION MessageOriginAuthenticationCheck */
/**
 * @summary MessageOriginAuthenticationCheck
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * MessageOriginAuthenticationCheck  ::=
 *   SIGNATURE
 *     {SEQUENCE {algorithm-identifier
 *                  MessageOriginAuthenticationAlgorithmIdentifier,
 *                content                 Content,
 *                content-identifier      ContentIdentifier OPTIONAL,
 *                message-security-label  MessageSecurityLabel OPTIONAL}}
 * ```
 */
export type MessageOriginAuthenticationCheck = SIGNATURE; // DefinedType
/* END_OF_SYMBOL_DEFINITION MessageOriginAuthenticationCheck */

/* eslint-enable */
