/* eslint-disable */
import {
    INTEGER,
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
import {
    SessionType,
    _decode_SessionType,
    _encode_SessionType,
} from '../E-health-common/SessionType.ta.mjs';
import {
    Requirements,
    _enum_for_Requirements,
    _decode_Requirements,
    _encode_Requirements,
} from '../E-health-common/Requirements.ta.mjs';
import {
    ExchangeMode,
    _enum_for_ExchangeMode,
    _decode_ExchangeMode,
    _encode_ExchangeMode,
} from '../E-health-common/ExchangeMode.ta.mjs';

/**
 * @summary INTERACTIVE_OPERATION
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * INTERACTIVE-OPERATION ::= CLASS {
 *   &id                INTEGER (0..MAX),
 *   &content-req       CONTENT-TYPE.&id          OPTIONAL,
 *   &content-rsp       CONTENT-TYPE.&id          OPTIONAL,
 *   &content-err       CONTENT-TYPE.&id          OPTIONAL,
 *   &sessionType       SessionType,
 *   &requirements      Requirements              DEFAULT none,
 *   &Voice-options                               OPTIONAL,
 *   &Video-options                               OPTIONAL,
 *   &Request,
 *   &Response                                    OPTIONAL,
 *   &Error                                       OPTIONAL,
 *   &exchangeMode      ExchangeMode              DEFAULT async }
 * WITH SYNTAX {
 *   OPERATION-ID       &id
 *   [CONTENT-REQ       &content-req]
 *   [CONTENT-RSP       &content-rsp]
 *   [CONTENT-ERR       &content-err]
 *   SESSION-TYPE       &sessionType
 *   [REQUIRING         &requirements]
 *   [VOICE OPTIONS     &Voice-options]
 *   [VIDEO OPTIONS     &Video-options]
 *   REQUEST            &Request
 *   [RESPONSE          &Response]
 *   [ERROR             &Error]
 *   [EXCHANGE MODE     &exchangeMode] }
 * ```
 *
 * @interface
 */
export interface INTERACTIVE_OPERATION<
    Voice_options = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Video_options = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Request = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Response = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */,
    Error = any /* OBJECT_CLASS_TYPE_FIELD_PARAMETER */
> {
    /**
     * @summary A fixed string that can be used for external programs to determine the object class of this object.
     */
    readonly class: 'INTERACTIVE-OPERATION';
    /**
     * @summary A map of type fields to their corresponding decoders.
     */
    readonly decoderFor: Partial<
        {
            // For decoding types supplied in type fields
            [_K in keyof INTERACTIVE_OPERATION<
                Voice_options,
                Video_options,
                Request,
                Response,
                Error
            >]: $.ASN1Decoder<
                INTERACTIVE_OPERATION<
                    Voice_options,
                    Video_options,
                    Request,
                    Response,
                    Error
                >[_K]
            >;
        }
    >;
    /**
     * @summary A map of type fields to their corresponding encoders.
     */
    readonly encoderFor: Partial<
        {
            // For encoding types supplied in type fields
            [_K in keyof INTERACTIVE_OPERATION<
                Voice_options,
                Video_options,
                Request,
                Response,
                Error
            >]: $.ASN1Encoder<
                INTERACTIVE_OPERATION<
                    Voice_options,
                    Video_options,
                    Request,
                    Response,
                    Error
                >[_K]
            >;
        }
    >;
    /**
     * @summary &id
     */
    readonly '&id'?: INTEGER;
    /**
     * @summary &content-req
     */
    readonly '&content-req'?: OBJECT_IDENTIFIER;
    /**
     * @summary &content-rsp
     */
    readonly '&content-rsp'?: OBJECT_IDENTIFIER;
    /**
     * @summary &content-err
     */
    readonly '&content-err'?: OBJECT_IDENTIFIER;
    /**
     * @summary &sessionType
     */
    readonly '&sessionType'?: SessionType;
    /**
     * @summary &requirements
     */
    readonly '&requirements'?: Requirements;
    /**
     * @summary &Voice-options
     */
    readonly '&Voice-options': Voice_options;
    /**
     * @summary &Video-options
     */
    readonly '&Video-options': Video_options;
    /**
     * @summary &Request
     */
    readonly '&Request': Request;
    /**
     * @summary &Response
     */
    readonly '&Response': Response;
    /**
     * @summary &Error
     */
    readonly '&Error': Error;
    /**
     * @summary &exchangeMode
     */
    readonly '&exchangeMode'?: ExchangeMode;
}

/* eslint-enable */
