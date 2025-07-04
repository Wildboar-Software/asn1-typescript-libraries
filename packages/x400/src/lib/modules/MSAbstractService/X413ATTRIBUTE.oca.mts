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
import * as $ from '@wildboar/asn1/functional';
import {
    AttributeType,
    _decode_AttributeType,
    _encode_AttributeType,
} from '../MSAbstractService/AttributeType.ta.mjs';
import { MATCHING_RULE } from '@wildboar/x500/src/lib/modules/InformationFramework/MATCHING-RULE.oca.mjs';
/**
 * @summary X413ATTRIBUTE
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * X413ATTRIBUTE ::= CLASS {
 *   &id               AttributeType UNIQUE,
 *   &Type             ,
 *   &equalityMatch    MATCHING-RULE OPTIONAL,
 *   &substringsMatch  MATCHING-RULE OPTIONAL,
 *   &orderingMatch    MATCHING-RULE OPTIONAL,
 *   &numeration       ENUMERATED {single-valued(0), multi-valued(1)},
 *   -- 1994 extension
 *   &OtherMatches     MATCHING-RULE OPTIONAL
 * }
 * WITH SYNTAX {
 *   WITH ATTRIBUTE-SYNTAX &Type,
 *   [EQUALITY MATCHING-RULE &equalityMatch,]
 *   [SUBSTRINGS MATCHING-RULE &substringsMatch,]
 *   [ORDERING MATCHING-RULE &orderingMatch,]
 *   [OTHER MATCHING-RULES &OtherMatches,]
 *   NUMERATION &numeration,
 *   ID &id
 * }
 * ```
 *
 * @interface
 */
export interface X413ATTRIBUTE<
    Type = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'X413ATTRIBUTE';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof X413ATTRIBUTE<Type>]: $.ASN1Decoder<
                X413ATTRIBUTE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof X413ATTRIBUTE<Type>]: $.ASN1Encoder<
                X413ATTRIBUTE<Type>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: AttributeType;
    /**
     * @summary &Type
     */
    readonly '&Type': Type;
    /**
     * @summary &equalityMatch
     */
    readonly '&equalityMatch'?: MATCHING_RULE;
    /**
     * @summary &substringsMatch
     */
    readonly '&substringsMatch'?: MATCHING_RULE;
    /**
     * @summary &orderingMatch
     */
    readonly '&orderingMatch'?: MATCHING_RULE;
    /**
     * @summary &orderingMatch
     */
    readonly '&numeration': 0 | 1;
    /**
     * @summary &OtherMatches
     */
    readonly '&OtherMatches'?: MATCHING_RULE[];
}

/* eslint-enable */
