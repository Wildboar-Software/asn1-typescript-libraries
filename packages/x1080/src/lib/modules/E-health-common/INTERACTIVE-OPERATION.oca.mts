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
 * Defines an operation that may run inside a session. `&Request` is
 * required; `&Response` and `&Error` absent means none defined.
 * Session specs also say who may initiate and who may terminate.
 * Messages are CMS-protected. ITU-T Rec. X.1080.1 (05/2018)
 * [§10.1](https://www.itu.int/rec/T-REC-X.1080.1-201805-I), §9;
 * CMS [X.1080.0 Annex B](https://www.itu.int/rec/T-REC-X.1080.0-201703-I!Cor1).
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
     * @description
     *
     * Unique within the session. 0 is the exit operation; do not use
     * 0 for other operations. ITU-T Rec. X.1080.1 (05/2018) §10.1 a).
     */
    readonly '&id'?: INTEGER;
    /**
     * @summary &content-req
     * @description
     *
     * `CONTENT-TYPE.&id` of the request. Optional in the class.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1, §10.2.
     */
    readonly '&content-req'?: OBJECT_IDENTIFIER;
    /**
     * @summary &content-rsp
     * @description
     *
     * `CONTENT-TYPE.&id` of the response. Optional in the class.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1, §10.2.
     */
    readonly '&content-rsp'?: OBJECT_IDENTIFIER;
    /**
     * @summary &content-err
     * @description
     *
     * `CONTENT-TYPE.&id` of the error. Optional in the class.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1, §10.2.
     */
    readonly '&content-err'?: OBJECT_IDENTIFIER;
    /**
     * @summary &sessionType
     * @description
     *
     * OID of the session type this operation belongs to.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1 b).
     */
    readonly '&sessionType'?: SessionType;
    /**
     * @summary &requirements
     * @description
     *
     * Voice and video requirements. Omitted defaults to `none`.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1 c).
     */
    readonly '&requirements'?: Requirements;
    /**
     * @summary &Voice-options
     * @description
     *
     * Type used for voice options. May be present only if
     * `&requirements` is not `none`; otherwise shall be absent.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1 d).
     */
    readonly '&Voice-options': Voice_options;
    /**
     * @summary &Video-options
     * @description
     *
     * Type used for video options. May be present only if
     * `&requirements` is `with-reverse-video-and-2-way-voice` or
     * `with-2-way-video-and-voice`; otherwise shall be absent.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1 e).
     */
    readonly '&Video-options': Video_options;
    /**
     * @summary &Request
     * @description
     *
     * Data type of the request value. Required.
     * ITU-T Rec. X.1080.1 (05/2018) §10.1 f).
     */
    readonly '&Request': Request;
    /**
     * @summary &Response
     * @description
     *
     * Data type of the response. Absent means no response is
     * defined. ITU-T Rec. X.1080.1 (05/2018) §10.1 g).
     */
    readonly '&Response': Response;
    /**
     * @summary &Error
     * @description
     *
     * Data type of an exception error. Absent means no error is
     * defined. ITU-T Rec. X.1080.1 (05/2018) §10.1 h).
     */
    readonly '&Error': Error;
    /**
     * @summary &exchangeMode
     * @description
     *
     * Restriction on message flow. Shall be absent if `&Response`
     * is absent. `sync`: sender shall not start another operation
     * until a response or error arrives. This class DEFAULT is
     * `async` (clause 10.1 also lists DEFAULT `sync` in one place).
     * ITU-T Rec. X.1080.1 (05/2018) §10.1 i).
     */
    readonly '&exchangeMode'?: ExchangeMode;
}

/* eslint-enable */
