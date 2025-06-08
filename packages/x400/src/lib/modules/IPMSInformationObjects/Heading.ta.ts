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
    ThisIPMField,
    _decode_ThisIPMField,
    _encode_ThisIPMField,
} from '../IPMSInformationObjects/ThisIPMField.ta';
export {
    ThisIPMField,
    _decode_ThisIPMField,
    _encode_ThisIPMField,
} from '../IPMSInformationObjects/ThisIPMField.ta';
import {
    OriginatorField,
    _decode_OriginatorField,
    _encode_OriginatorField,
} from '../IPMSInformationObjects/OriginatorField.ta';
export {
    OriginatorField,
    _decode_OriginatorField,
    _encode_OriginatorField,
} from '../IPMSInformationObjects/OriginatorField.ta';
import {
    AuthorizingUsersField,
    _decode_AuthorizingUsersField,
    _encode_AuthorizingUsersField,
} from '../IPMSInformationObjects/AuthorizingUsersField.ta';
export {
    AuthorizingUsersField,
    _decode_AuthorizingUsersField,
    _encode_AuthorizingUsersField,
} from '../IPMSInformationObjects/AuthorizingUsersField.ta';
import {
    PrimaryRecipientsField,
    _decode_PrimaryRecipientsField,
    _encode_PrimaryRecipientsField,
} from '../IPMSInformationObjects/PrimaryRecipientsField.ta';
export {
    PrimaryRecipientsField,
    _decode_PrimaryRecipientsField,
    _encode_PrimaryRecipientsField,
} from '../IPMSInformationObjects/PrimaryRecipientsField.ta';
import {
    CopyRecipientsField,
    _decode_CopyRecipientsField,
    _encode_CopyRecipientsField,
} from '../IPMSInformationObjects/CopyRecipientsField.ta';
export {
    CopyRecipientsField,
    _decode_CopyRecipientsField,
    _encode_CopyRecipientsField,
} from '../IPMSInformationObjects/CopyRecipientsField.ta';
import {
    BlindCopyRecipientsField,
    _decode_BlindCopyRecipientsField,
    _encode_BlindCopyRecipientsField,
} from '../IPMSInformationObjects/BlindCopyRecipientsField.ta';
export {
    BlindCopyRecipientsField,
    _decode_BlindCopyRecipientsField,
    _encode_BlindCopyRecipientsField,
} from '../IPMSInformationObjects/BlindCopyRecipientsField.ta';
import {
    RepliedToIPMField,
    _decode_RepliedToIPMField,
    _encode_RepliedToIPMField,
} from '../IPMSInformationObjects/RepliedToIPMField.ta';
export {
    RepliedToIPMField,
    _decode_RepliedToIPMField,
    _encode_RepliedToIPMField,
} from '../IPMSInformationObjects/RepliedToIPMField.ta';
import {
    ObsoletedIPMsField,
    _decode_ObsoletedIPMsField,
    _encode_ObsoletedIPMsField,
} from '../IPMSInformationObjects/ObsoletedIPMsField.ta';
export {
    ObsoletedIPMsField,
    _decode_ObsoletedIPMsField,
    _encode_ObsoletedIPMsField,
} from '../IPMSInformationObjects/ObsoletedIPMsField.ta';
import {
    RelatedIPMsField,
    _decode_RelatedIPMsField,
    _encode_RelatedIPMsField,
} from '../IPMSInformationObjects/RelatedIPMsField.ta';
export {
    RelatedIPMsField,
    _decode_RelatedIPMsField,
    _encode_RelatedIPMsField,
} from '../IPMSInformationObjects/RelatedIPMsField.ta';
import {
    SubjectField,
    _decode_SubjectField,
    _encode_SubjectField,
} from '../IPMSInformationObjects/SubjectField.ta';
export {
    SubjectField,
    _decode_SubjectField,
    _encode_SubjectField,
} from '../IPMSInformationObjects/SubjectField.ta';
import {
    ExpiryTimeField,
    _decode_ExpiryTimeField,
    _encode_ExpiryTimeField,
} from '../IPMSInformationObjects/ExpiryTimeField.ta';
export {
    ExpiryTimeField,
    _decode_ExpiryTimeField,
    _encode_ExpiryTimeField,
} from '../IPMSInformationObjects/ExpiryTimeField.ta';
import {
    ReplyTimeField,
    _decode_ReplyTimeField,
    _encode_ReplyTimeField,
} from '../IPMSInformationObjects/ReplyTimeField.ta';
export {
    ReplyTimeField,
    _decode_ReplyTimeField,
    _encode_ReplyTimeField,
} from '../IPMSInformationObjects/ReplyTimeField.ta';
import {
    ReplyRecipientsField,
    _decode_ReplyRecipientsField,
    _encode_ReplyRecipientsField,
} from '../IPMSInformationObjects/ReplyRecipientsField.ta';
export {
    ReplyRecipientsField,
    _decode_ReplyRecipientsField,
    _encode_ReplyRecipientsField,
} from '../IPMSInformationObjects/ReplyRecipientsField.ta';
import {
    ImportanceField,
    _enum_for_ImportanceField,
    ImportanceField_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
    low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
    high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ImportanceField,
    _encode_ImportanceField,
} from '../IPMSInformationObjects/ImportanceField.ta';
export {
    ImportanceField,
    _enum_for_ImportanceField,
    ImportanceField_low /* IMPORTED_LONG_ENUMERATION_ITEM */,
    low /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_normal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    normal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    ImportanceField_high /* IMPORTED_LONG_ENUMERATION_ITEM */,
    high /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_ImportanceField,
    _encode_ImportanceField,
} from '../IPMSInformationObjects/ImportanceField.ta';
import {
    SensitivityField,
    _enum_for_SensitivityField,
    SensitivityField_personal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    personal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SensitivityField_company_confidential /* IMPORTED_LONG_ENUMERATION_ITEM */,
    company_confidential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SensitivityField,
    _encode_SensitivityField,
} from '../IPMSInformationObjects/SensitivityField.ta';
export {
    SensitivityField,
    _enum_for_SensitivityField,
    SensitivityField_personal /* IMPORTED_LONG_ENUMERATION_ITEM */,
    personal /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    private_ /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    SensitivityField_company_confidential /* IMPORTED_LONG_ENUMERATION_ITEM */,
    company_confidential /* IMPORTED_SHORT_ENUMERATION_ITEM */,
    _decode_SensitivityField,
    _encode_SensitivityField,
} from '../IPMSInformationObjects/SensitivityField.ta';
import {
    AutoForwardedField,
    _decode_AutoForwardedField,
    _encode_AutoForwardedField,
} from '../IPMSInformationObjects/AutoForwardedField.ta';
export {
    AutoForwardedField,
    _decode_AutoForwardedField,
    _encode_AutoForwardedField,
} from '../IPMSInformationObjects/AutoForwardedField.ta';
import {
    ExtensionsField,
    _decode_ExtensionsField,
    _encode_ExtensionsField,
} from '../IPMSInformationObjects/ExtensionsField.ta';
export {
    ExtensionsField,
    _decode_ExtensionsField,
    _encode_ExtensionsField,
} from '../IPMSInformationObjects/ExtensionsField.ta';

/* START_OF_SYMBOL_DEFINITION Heading */
/**
 * @summary Heading
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Heading ::= SET {
 *   this-IPM               ThisIPMField,
 *   originator             [0]  OriginatorField OPTIONAL,
 *   authorizing-users      [1]  AuthorizingUsersField OPTIONAL,
 *   primary-recipients     [2]  PrimaryRecipientsField DEFAULT {},
 *   copy-recipients        [3]  CopyRecipientsField DEFAULT {},
 *   blind-copy-recipients  [4]  BlindCopyRecipientsField OPTIONAL,
 *   replied-to-IPM         [5]  RepliedToIPMField OPTIONAL,
 *   obsoleted-IPMs         [6]  ObsoletedIPMsField DEFAULT {},
 *   related-IPMs           [7]  RelatedIPMsField DEFAULT {},
 *   subject                [8] EXPLICIT SubjectField OPTIONAL,
 *   expiry-time            [9]  ExpiryTimeField OPTIONAL,
 *   reply-time             [10]  ReplyTimeField OPTIONAL,
 *   reply-recipients       [11]  ReplyRecipientsField OPTIONAL,
 *   importance             [12]  ImportanceField DEFAULT normal,
 *   sensitivity            [13]  SensitivityField OPTIONAL,
 *   auto-forwarded         [14]  AutoForwardedField DEFAULT FALSE,
 *   extensions             [15]  ExtensionsField DEFAULT {}
 * }
 * ```
 *
 * @class
 */
export class Heading {
    constructor(
        /**
         * @summary `this_IPM`.
         * @public
         * @readonly
         */
        readonly this_IPM: ThisIPMField,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OPTIONAL<OriginatorField>,
        /**
         * @summary `authorizing_users`.
         * @public
         * @readonly
         */
        readonly authorizing_users: OPTIONAL<AuthorizingUsersField>,
        /**
         * @summary `primary_recipients`.
         * @public
         * @readonly
         */
        readonly primary_recipients: OPTIONAL<PrimaryRecipientsField>,
        /**
         * @summary `copy_recipients`.
         * @public
         * @readonly
         */
        readonly copy_recipients: OPTIONAL<CopyRecipientsField>,
        /**
         * @summary `blind_copy_recipients`.
         * @public
         * @readonly
         */
        readonly blind_copy_recipients: OPTIONAL<BlindCopyRecipientsField>,
        /**
         * @summary `replied_to_IPM`.
         * @public
         * @readonly
         */
        readonly replied_to_IPM: OPTIONAL<RepliedToIPMField>,
        /**
         * @summary `obsoleted_IPMs`.
         * @public
         * @readonly
         */
        readonly obsoleted_IPMs: OPTIONAL<ObsoletedIPMsField>,
        /**
         * @summary `related_IPMs`.
         * @public
         * @readonly
         */
        readonly related_IPMs: OPTIONAL<RelatedIPMsField>,
        /**
         * @summary `subject`.
         * @public
         * @readonly
         */
        readonly subject: OPTIONAL<SubjectField>,
        /**
         * @summary `expiry_time`.
         * @public
         * @readonly
         */
        readonly expiry_time: OPTIONAL<ExpiryTimeField>,
        /**
         * @summary `reply_time`.
         * @public
         * @readonly
         */
        readonly reply_time: OPTIONAL<ReplyTimeField>,
        /**
         * @summary `reply_recipients`.
         * @public
         * @readonly
         */
        readonly reply_recipients: OPTIONAL<ReplyRecipientsField>,
        /**
         * @summary `importance`.
         * @public
         * @readonly
         */
        readonly importance: OPTIONAL<ImportanceField>,
        /**
         * @summary `sensitivity`.
         * @public
         * @readonly
         */
        readonly sensitivity: OPTIONAL<SensitivityField>,
        /**
         * @summary `auto_forwarded`.
         * @public
         * @readonly
         */
        readonly auto_forwarded: OPTIONAL<AutoForwardedField>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<ExtensionsField>
    ) {}

    /**
     * @summary Restructures an object into a Heading
     * @description
     *
     * This takes an `object` and converts it to a `Heading`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `Heading`.
     * @returns {Heading}
     */
    public static _from_object(
        _o: { [_K in keyof Heading]: Heading[_K] }
    ): Heading {
        return new Heading(
            _o.this_IPM,
            _o.originator,
            _o.authorizing_users,
            _o.primary_recipients,
            _o.copy_recipients,
            _o.blind_copy_recipients,
            _o.replied_to_IPM,
            _o.obsoleted_IPMs,
            _o.related_IPMs,
            _o.subject,
            _o.expiry_time,
            _o.reply_time,
            _o.reply_recipients,
            _o.importance,
            _o.sensitivity,
            _o.auto_forwarded,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `primary_recipients`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_primary_recipients() {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `copy_recipients`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_copy_recipients() {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `obsoleted_IPMs`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_obsoleted_IPMs() {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `related_IPMs`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_related_IPMs() {
        return [];
    }
    /**
     * @summary Getter that returns the default value for `importance`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_importance() {
        return ImportanceField_normal;
    }
    /**
     * @summary Getter that returns the default value for `auto_forwarded`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_auto_forwarded() {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `extensions`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_extensions() {
        return [];
    }
    /**
     * @summary The enum used as the type of the component `importance`
     * @public
     * @static
     */

    public static _enum_for_importance = _enum_for_ImportanceField;
    /**
     * @summary The enum used as the type of the component `sensitivity`
     * @public
     * @static
     */

    public static _enum_for_sensitivity = _enum_for_SensitivityField;
}
/* END_OF_SYMBOL_DEFINITION Heading */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Heading */
/**
 * @summary The Leading Root Component Types of Heading
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_Heading: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'this-IPM',
        false,
        $.hasTag(_TagClass.application, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'originator',
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'authorizing-users',
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'primary-recipients',
        true,
        $.hasTag(_TagClass.context, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'copy-recipients',
        true,
        $.hasTag(_TagClass.context, 3),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'blind-copy-recipients',
        true,
        $.hasTag(_TagClass.context, 4),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'replied-to-IPM',
        true,
        $.hasTag(_TagClass.context, 5),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'obsoleted-IPMs',
        true,
        $.hasTag(_TagClass.context, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'related-IPMs',
        true,
        $.hasTag(_TagClass.context, 7),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'subject',
        true,
        $.hasTag(_TagClass.context, 8),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'expiry-time',
        true,
        $.hasTag(_TagClass.context, 9),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reply-time',
        true,
        $.hasTag(_TagClass.context, 10),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'reply-recipients',
        true,
        $.hasTag(_TagClass.context, 11),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'importance',
        true,
        $.hasTag(_TagClass.context, 12),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'sensitivity',
        true,
        $.hasTag(_TagClass.context, 13),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'auto-forwarded',
        true,
        $.hasTag(_TagClass.context, 14),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        'extensions',
        true,
        $.hasTag(_TagClass.context, 15),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_Heading */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Heading */
/**
 * @summary The Trailing Root Component Types of Heading
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Heading: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_Heading */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Heading */
/**
 * @summary The Extension Addition Component Types of Heading
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Heading: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_Heading */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_Heading */
let _cached_decoder_for_Heading: $.ASN1Decoder<Heading> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_Heading */

/* START_OF_SYMBOL_DEFINITION _decode_Heading */
/**
 * @summary Decodes an ASN.1 element into a(n) Heading
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Heading} The decoded data structure.
 */
export function _decode_Heading(el: _Element) {
    if (!_cached_decoder_for_Heading) {
        _cached_decoder_for_Heading = function (el: _Element): Heading {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let this_IPM!: ThisIPMField;
            let originator: OPTIONAL<OriginatorField>;
            let authorizing_users: OPTIONAL<AuthorizingUsersField>;
            let primary_recipients: OPTIONAL<PrimaryRecipientsField> =
                Heading._default_value_for_primary_recipients;
            let copy_recipients: OPTIONAL<CopyRecipientsField> =
                Heading._default_value_for_copy_recipients;
            let blind_copy_recipients: OPTIONAL<BlindCopyRecipientsField>;
            let replied_to_IPM: OPTIONAL<RepliedToIPMField>;
            let obsoleted_IPMs: OPTIONAL<ObsoletedIPMsField> =
                Heading._default_value_for_obsoleted_IPMs;
            let related_IPMs: OPTIONAL<RelatedIPMsField> =
                Heading._default_value_for_related_IPMs;
            let subject: OPTIONAL<SubjectField>;
            let expiry_time: OPTIONAL<ExpiryTimeField>;
            let reply_time: OPTIONAL<ReplyTimeField>;
            let reply_recipients: OPTIONAL<ReplyRecipientsField>;
            let importance: OPTIONAL<ImportanceField> =
                Heading._default_value_for_importance;
            let sensitivity: OPTIONAL<SensitivityField>;
            let auto_forwarded: OPTIONAL<AutoForwardedField> =
                Heading._default_value_for_auto_forwarded;
            let extensions: OPTIONAL<ExtensionsField> =
                Heading._default_value_for_extensions;
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                'this-IPM': (_el: _Element): void => {
                    this_IPM = _decode_ThisIPMField(_el);
                },
                originator: (_el: _Element): void => {
                    originator = $._decode_implicit<OriginatorField>(
                        () => _decode_OriginatorField
                    )(_el);
                },
                'authorizing-users': (_el: _Element): void => {
                    authorizing_users = $._decode_implicit<AuthorizingUsersField>(
                        () => _decode_AuthorizingUsersField
                    )(_el);
                },
                'primary-recipients': (_el: _Element): void => {
                    primary_recipients = $._decode_implicit<PrimaryRecipientsField>(
                        () => _decode_PrimaryRecipientsField
                    )(_el);
                },
                'copy-recipients': (_el: _Element): void => {
                    copy_recipients = $._decode_implicit<CopyRecipientsField>(
                        () => _decode_CopyRecipientsField
                    )(_el);
                },
                'blind-copy-recipients': (_el: _Element): void => {
                    blind_copy_recipients = $._decode_implicit<BlindCopyRecipientsField>(
                        () => _decode_BlindCopyRecipientsField
                    )(_el);
                },
                'replied-to-IPM': (_el: _Element): void => {
                    replied_to_IPM = $._decode_implicit<RepliedToIPMField>(
                        () => _decode_RepliedToIPMField
                    )(_el);
                },
                'obsoleted-IPMs': (_el: _Element): void => {
                    obsoleted_IPMs = $._decode_implicit<ObsoletedIPMsField>(
                        () => _decode_ObsoletedIPMsField
                    )(_el);
                },
                'related-IPMs': (_el: _Element): void => {
                    related_IPMs = $._decode_implicit<RelatedIPMsField>(
                        () => _decode_RelatedIPMsField
                    )(_el);
                },
                subject: (_el: _Element): void => {
                    subject = $._decode_explicit<SubjectField>(
                        () => _decode_SubjectField
                    )(_el);
                },
                'expiry-time': (_el: _Element): void => {
                    expiry_time = $._decode_implicit<ExpiryTimeField>(
                        () => _decode_ExpiryTimeField
                    )(_el);
                },
                'reply-time': (_el: _Element): void => {
                    reply_time = $._decode_implicit<ReplyTimeField>(
                        () => _decode_ReplyTimeField
                    )(_el);
                },
                'reply-recipients': (_el: _Element): void => {
                    reply_recipients = $._decode_implicit<ReplyRecipientsField>(
                        () => _decode_ReplyRecipientsField
                    )(_el);
                },
                importance: (_el: _Element): void => {
                    importance = $._decode_implicit<ImportanceField>(
                        () => _decode_ImportanceField
                    )(_el);
                },
                sensitivity: (_el: _Element): void => {
                    sensitivity = $._decode_implicit<SensitivityField>(
                        () => _decode_SensitivityField
                    )(_el);
                },
                'auto-forwarded': (_el: _Element): void => {
                    auto_forwarded = $._decode_implicit<AutoForwardedField>(
                        () => _decode_AutoForwardedField
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<ExtensionsField>(
                        () => _decode_ExtensionsField
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Heading,
                _extension_additions_list_spec_for_Heading,
                _root_component_type_list_2_spec_for_Heading,
                undefined
            );
            return new Heading /* SET_CONSTRUCTOR_CALL */(
                this_IPM,
                originator,
                authorizing_users,
                primary_recipients,
                copy_recipients,
                blind_copy_recipients,
                replied_to_IPM,
                obsoleted_IPMs,
                related_IPMs,
                subject,
                expiry_time,
                reply_time,
                reply_recipients,
                importance,
                sensitivity,
                auto_forwarded,
                extensions
            );
        };
    }
    return _cached_decoder_for_Heading(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_Heading */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_Heading */
let _cached_encoder_for_Heading: $.ASN1Encoder<Heading> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_Heading */

/* START_OF_SYMBOL_DEFINITION _encode_Heading */
/**
 * @summary Encodes a(n) Heading into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Heading, encoded as an ASN.1 Element.
 */
export function _encode_Heading(
    value: Heading,
    elGetter: $.ASN1Encoder<Heading>
) {
    if (!_cached_encoder_for_Heading) {
        _cached_encoder_for_Heading = function (
            value: Heading,
            elGetter: $.ASN1Encoder<Heading>
        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_ThisIPMField(
                            value.this_IPM,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.originator === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_OriginatorField,
                                  $.BER
                              )(value.originator, $.BER),
                        /* IF_ABSENT  */ value.authorizing_users === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_AuthorizingUsersField,
                                  $.BER
                              )(value.authorizing_users, $.BER),
                        /* IF_DEFAULT */ value.primary_recipients ===
                            undefined ||
                        $.deepEq(
                            value.primary_recipients,
                            Heading._default_value_for_primary_recipients
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_PrimaryRecipientsField,
                                  $.BER
                              )(value.primary_recipients, $.BER),
                        /* IF_DEFAULT */ value.copy_recipients === undefined ||
                        $.deepEq(
                            value.copy_recipients,
                            Heading._default_value_for_copy_recipients
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_CopyRecipientsField,
                                  $.BER
                              )(value.copy_recipients, $.BER),
                        /* IF_ABSENT  */ value.blind_copy_recipients ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_BlindCopyRecipientsField,
                                  $.BER
                              )(value.blind_copy_recipients, $.BER),
                        /* IF_ABSENT  */ value.replied_to_IPM === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_RepliedToIPMField,
                                  $.BER
                              )(value.replied_to_IPM, $.BER),
                        /* IF_DEFAULT */ value.obsoleted_IPMs === undefined ||
                        $.deepEq(
                            value.obsoleted_IPMs,
                            Heading._default_value_for_obsoleted_IPMs
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_ObsoletedIPMsField,
                                  $.BER
                              )(value.obsoleted_IPMs, $.BER),
                        /* IF_DEFAULT */ value.related_IPMs === undefined ||
                        $.deepEq(
                            value.related_IPMs,
                            Heading._default_value_for_related_IPMs
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_RelatedIPMsField,
                                  $.BER
                              )(value.related_IPMs, $.BER),
                        /* IF_ABSENT  */ value.subject === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_SubjectField,
                                  $.BER
                              )(value.subject, $.BER),
                        /* IF_ABSENT  */ value.expiry_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_ExpiryTimeField,
                                  $.BER
                              )(value.expiry_time, $.BER),
                        /* IF_ABSENT  */ value.reply_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_ReplyTimeField,
                                  $.BER
                              )(value.reply_time, $.BER),
                        /* IF_ABSENT  */ value.reply_recipients === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  11,
                                  () => _encode_ReplyRecipientsField,
                                  $.BER
                              )(value.reply_recipients, $.BER),
                        /* IF_DEFAULT */ value.importance === undefined ||
                        $.deepEq(
                            value.importance,
                            Heading._default_value_for_importance
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  12,
                                  () => _encode_ImportanceField,
                                  $.BER
                              )(value.importance, $.BER),
                        /* IF_ABSENT  */ value.sensitivity === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  13,
                                  () => _encode_SensitivityField,
                                  $.BER
                              )(value.sensitivity, $.BER),
                        /* IF_DEFAULT */ value.auto_forwarded === undefined ||
                        $.deepEq(
                            value.auto_forwarded,
                            Heading._default_value_for_auto_forwarded
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  14,
                                  () => _encode_AutoForwardedField,
                                  $.BER
                              )(value.auto_forwarded, $.BER),
                        /* IF_DEFAULT */ value.extensions === undefined ||
                        $.deepEq(
                            value.extensions,
                            Heading._default_value_for_extensions
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  15,
                                  () => _encode_ExtensionsField,
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Heading(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_Heading */

/* eslint-enable */
