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
import * as $ from '@wildboar/asn1/functional';
import {
    AutoActionType,
    _decode_AutoActionType,
    _encode_AutoActionType,
} from '../MSAbstractService/AutoActionType.ta.mjs';
import { AUTO_ACTION_ERROR } from '../MSAbstractService/AUTO-ACTION-ERROR.oca.mjs';
/**
 * @summary AUTO_ACTION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * AUTO-ACTION ::= CLASS {
 *   &id                     AutoActionType UNIQUE,
 *   &RegistrationParameter  OPTIONAL,
 *   &Errors                 AUTO-ACTION-ERROR OPTIONAL
 * }
 * WITH SYNTAX {
 *   [REGISTRATION PARAMETER IS &RegistrationParameter]
 *   [ERRORS &Errors]
 *   IDENTIFIED BY &id
 * }
 * ```
 *
 * @interface
 */
export interface AUTO_ACTION<
    RegistrationParameter = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'AUTO-ACTION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof AUTO_ACTION<RegistrationParameter>]: $.ASN1Decoder<
                AUTO_ACTION<RegistrationParameter>[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof AUTO_ACTION<RegistrationParameter>]: $.ASN1Encoder<
                AUTO_ACTION<RegistrationParameter>[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: AutoActionType;
    /**
     * @summary &RegistrationParameter
     */
    readonly '&RegistrationParameter': RegistrationParameter;
    /**
     * @summary &Errors
     */
    readonly '&Errors'?: AUTO_ACTION_ERROR[];
}

/* eslint-enable */
