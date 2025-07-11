/* eslint-disable */
import {
    OPTIONAL,
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    ASN1Construction as _Construction,
    ASN1UniversalType as _UniversalType,
    ObjectIdentifier as _OID,
    External as _External,
    EmbeddedPDV as _PDV,
    ASN1ConstructionError as _ConstructionError,
    type BOOLEAN,
} from '@wildboar/asn1';
import * as $ from '@wildboar/asn1/functional';
import {
    ThisEDIMField,
    _decode_ThisEDIMField,
    _encode_ThisEDIMField,
} from '../EDIMSInformationObjects/ThisEDIMField.ta.mjs';
import {
    OriginatorField,
    _decode_OriginatorField,
    _encode_OriginatorField,
} from '../EDIMSInformationObjects/OriginatorField.ta.mjs';
import {
    RecipientsField,
    _decode_RecipientsField,
    _encode_RecipientsField,
} from '../EDIMSInformationObjects/RecipientsField.ta.mjs';
import {
    EDINReceiverField,
    _decode_EDINReceiverField,
    _encode_EDINReceiverField,
} from '../EDIMSInformationObjects/EDINReceiverField.ta.mjs';
import {
    ResponsibilityForwarded,
    _decode_ResponsibilityForwarded,
    _encode_ResponsibilityForwarded,
} from '../EDIMSInformationObjects/ResponsibilityForwarded.ta.mjs';
import {
    EDIBodyPartType,
    _decode_EDIBodyPartType,
    _encode_EDIBodyPartType,
} from '../EDIMSInformationObjects/EDIBodyPartType.ta.mjs';
import {
    IncompleteCopyField,
    _decode_IncompleteCopyField,
    _encode_IncompleteCopyField,
} from '../EDIMSInformationObjects/IncompleteCopyField.ta.mjs';
import {
    ExpiryTimeField,
    _decode_ExpiryTimeField,
    _encode_ExpiryTimeField,
} from '../EDIMSInformationObjects/ExpiryTimeField.ta.mjs';
import {
    RelatedMessagesField,
    _decode_RelatedMessagesField,
    _encode_RelatedMessagesField,
} from '../EDIMSInformationObjects/RelatedMessagesField.ta.mjs';
import {
    ObsoletedEDIMsField,
    _decode_ObsoletedEDIMsField,
    _encode_ObsoletedEDIMsField,
} from '../EDIMSInformationObjects/ObsoletedEDIMsField.ta.mjs';
import {
    EDIApplicationSecurityElementsField,
    _decode_EDIApplicationSecurityElementsField,
    _encode_EDIApplicationSecurityElementsField,
} from '../EDIMSInformationObjects/EDIApplicationSecurityElementsField.ta.mjs';
import {
    CrossReferencingInformationField,
    _decode_CrossReferencingInformationField,
    _encode_CrossReferencingInformationField,
} from '../EDIMSInformationObjects/CrossReferencingInformationField.ta.mjs';
import {
    EDIMessageTypeField,
    _decode_EDIMessageTypeField,
    _encode_EDIMessageTypeField,
} from '../EDIMSInformationObjects/EDIMessageTypeField.ta.mjs';
import {
    ServiceStringAdviceField,
    _decode_ServiceStringAdviceField,
    _encode_ServiceStringAdviceField,
} from '../EDIMSInformationObjects/ServiceStringAdviceField.ta.mjs';
import {
    SyntaxIdentifierField,
    _decode_SyntaxIdentifierField,
    _encode_SyntaxIdentifierField,
} from '../EDIMSInformationObjects/SyntaxIdentifierField.ta.mjs';
import {
    InterchangeSenderField,
    _decode_InterchangeSenderField,
    _encode_InterchangeSenderField,
} from '../EDIMSInformationObjects/InterchangeSenderField.ta.mjs';
import {
    DateAndTimeOfPreparationField,
    _decode_DateAndTimeOfPreparationField,
    _encode_DateAndTimeOfPreparationField,
} from '../EDIMSInformationObjects/DateAndTimeOfPreparationField.ta.mjs';
import {
    ApplicationReferenceField,
    _decode_ApplicationReferenceField,
    _encode_ApplicationReferenceField,
} from '../EDIMSInformationObjects/ApplicationReferenceField.ta.mjs';
import {
    HeadingExtensionsField,
    _decode_HeadingExtensionsField,
    _encode_HeadingExtensionsField,
} from '../EDIMSInformationObjects/HeadingExtensionsField.ta.mjs';
import {
    id_bp_edifact_ISO646,
} from "../EDIMSObjectIdentifiers/id-bp-edifact-ISO646.va.mjs";

/**
 * @summary Heading
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * Heading ::= SEQUENCE {
 *   this-EDIM                          [1]  ThisEDIMField,
 *   originator                         [2]  OriginatorField OPTIONAL,
 *   recipients                         [3]  RecipientsField OPTIONAL,
 *   edin-receiver                      [4]  EDINReceiverField OPTIONAL,
 *   responsibility-forwarded           [5]  ResponsibilityForwarded DEFAULT FALSE,
 *   edi-bodypart-type
 *     [6]  EDIBodyPartType DEFAULT {id-bp-edifact-ISO646},
 *   incomplete-copy                    [7]  IncompleteCopyField DEFAULT FALSE,
 *   expiry-time                        [8]  ExpiryTimeField OPTIONAL,
 *   related-messages                   [9]  RelatedMessagesField OPTIONAL,
 *   obsoleted-EDIMs                    [10]  ObsoletedEDIMsField OPTIONAL,
 *   edi-application-security-elements
 *     [11]  EDIApplicationSecurityElementsField OPTIONAL,
 *   cross-referencing-information
 *     [12]  CrossReferencingInformationField OPTIONAL,
 *   -- Begin Fields from EDIFACT Interchange
 *   edi-message-type                   [13]  EDIMessageTypeField OPTIONAL,
 *   service-string-advice              [14]  ServiceStringAdviceField OPTIONAL,
 *   syntax-identifier                  [15]  SyntaxIdentifierField OPTIONAL,
 *   interchange-sender                 [16]  InterchangeSenderField OPTIONAL,
 *   date-and-time-of-preparation
 *     [17]  DateAndTimeOfPreparationField OPTIONAL,
 *   application-reference              [18]  ApplicationReferenceField OPTIONAL,
 *   -- End Fields from EDIFACT
 *   heading-extensions                 [19]  HeadingExtensionsField OPTIONAL
 * }
 * ```
 *
 */
export class Heading {
    constructor(
        /**
         * @summary `this_EDIM`.
         * @public
         * @readonly
         */
        readonly this_EDIM: ThisEDIMField,
        /**
         * @summary `originator`.
         * @public
         * @readonly
         */
        readonly originator: OPTIONAL<OriginatorField>,
        /**
         * @summary `recipients`.
         * @public
         * @readonly
         */
        readonly recipients: OPTIONAL<RecipientsField>,
        /**
         * @summary `edin_receiver`.
         * @public
         * @readonly
         */
        readonly edin_receiver: OPTIONAL<EDINReceiverField>,
        /**
         * @summary `responsibility_forwarded`.
         * @public
         * @readonly
         */
        readonly responsibility_forwarded: OPTIONAL<ResponsibilityForwarded>,
        /**
         * @summary `edi_bodypart_type`.
         * @public
         * @readonly
         */
        readonly edi_bodypart_type: OPTIONAL<EDIBodyPartType>,
        /**
         * @summary `incomplete_copy`.
         * @public
         * @readonly
         */
        readonly incomplete_copy: OPTIONAL<IncompleteCopyField>,
        /**
         * @summary `expiry_time`.
         * @public
         * @readonly
         */
        readonly expiry_time: OPTIONAL<ExpiryTimeField>,
        /**
         * @summary `related_messages`.
         * @public
         * @readonly
         */
        readonly related_messages: OPTIONAL<RelatedMessagesField>,
        /**
         * @summary `obsoleted_EDIMs`.
         * @public
         * @readonly
         */
        readonly obsoleted_EDIMs: OPTIONAL<ObsoletedEDIMsField>,
        /**
         * @summary `edi_application_security_elements`.
         * @public
         * @readonly
         */
        readonly edi_application_security_elements: OPTIONAL<EDIApplicationSecurityElementsField>,
        /**
         * @summary `cross_referencing_information`.
         * @public
         * @readonly
         */
        readonly cross_referencing_information: OPTIONAL<CrossReferencingInformationField>,
        /**
         * @summary `edi_message_type`.
         * @public
         * @readonly
         */
        readonly edi_message_type: OPTIONAL<EDIMessageTypeField>,
        /**
         * @summary `service_string_advice`.
         * @public
         * @readonly
         */
        readonly service_string_advice: OPTIONAL<ServiceStringAdviceField>,
        /**
         * @summary `syntax_identifier`.
         * @public
         * @readonly
         */
        readonly syntax_identifier: OPTIONAL<SyntaxIdentifierField>,
        /**
         * @summary `interchange_sender`.
         * @public
         * @readonly
         */
        readonly interchange_sender: OPTIONAL<InterchangeSenderField>,
        /**
         * @summary `date_and_time_of_preparation`.
         * @public
         * @readonly
         */
        readonly date_and_time_of_preparation: OPTIONAL<DateAndTimeOfPreparationField>,
        /**
         * @summary `application_reference`.
         * @public
         * @readonly
         */
        readonly application_reference: OPTIONAL<ApplicationReferenceField>,
        /**
         * @summary `heading_extensions`.
         * @public
         * @readonly
         */
        readonly heading_extensions: OPTIONAL<HeadingExtensionsField>
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
            _o.this_EDIM,
            _o.originator,
            _o.recipients,
            _o.edin_receiver,
            _o.responsibility_forwarded,
            _o.edi_bodypart_type,
            _o.incomplete_copy,
            _o.expiry_time,
            _o.related_messages,
            _o.obsoleted_EDIMs,
            _o.edi_application_security_elements,
            _o.cross_referencing_information,
            _o.edi_message_type,
            _o.service_string_advice,
            _o.syntax_identifier,
            _o.interchange_sender,
            _o.date_and_time_of_preparation,
            _o.application_reference,
            _o.heading_extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `responsibility_forwarded`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_responsibility_forwarded(): BOOLEAN {
        return false;
    }
    /**
     * @summary Getter that returns the default value for `edi_bodypart_type`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_edi_bodypart_type(): EDIBodyPartType {
        return id_bp_edifact_ISO646;
    }
    /**
     * @summary Getter that returns the default value for `incomplete_copy`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_incomplete_copy(): BOOLEAN {
        return false;
    }
}

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
        'this-EDIM',
        false,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'originator',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'recipients',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'edin-receiver',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'responsibility-forwarded',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'edi-bodypart-type',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'incomplete-copy',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'expiry-time',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'related-messages',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'obsoleted-EDIMs',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        'edi-application-security-elements',
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        'cross-referencing-information',
        true,
        $.hasTag(_TagClass.context, 12)
    ),
    new $.ComponentSpec(
        'edi-message-type',
        true,
        $.hasTag(_TagClass.context, 13)
    ),
    new $.ComponentSpec(
        'service-string-advice',
        true,
        $.hasTag(_TagClass.context, 14)
    ),
    new $.ComponentSpec(
        'syntax-identifier',
        true,
        $.hasTag(_TagClass.context, 15)
    ),
    new $.ComponentSpec(
        'interchange-sender',
        true,
        $.hasTag(_TagClass.context, 16)
    ),
    new $.ComponentSpec(
        'date-and-time-of-preparation',
        true,
        $.hasTag(_TagClass.context, 17)
    ),
    new $.ComponentSpec(
        'application-reference',
        true,
        $.hasTag(_TagClass.context, 18)
    ),
    new $.ComponentSpec(
        'heading-extensions',
        true,
        $.hasTag(_TagClass.context, 19)
    ),
];

/**
 * @summary The Trailing Root Component Types of Heading
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_Heading: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of Heading
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_Heading: $.ComponentSpec[] = [];

let _cached_decoder_for_Heading: $.ASN1Decoder<Heading> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) Heading
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {Heading} The decoded data structure.
 */
export function _decode_Heading(el: _Element): Heading {
    if (!_cached_decoder_for_Heading) {
        _cached_decoder_for_Heading = function (el: _Element): Heading {
            let this_EDIM!: ThisEDIMField;
            let originator: OPTIONAL<OriginatorField>;
            let recipients: OPTIONAL<RecipientsField>;
            let edin_receiver: OPTIONAL<EDINReceiverField>;
            let responsibility_forwarded: OPTIONAL<ResponsibilityForwarded> =
                Heading._default_value_for_responsibility_forwarded;
            let edi_bodypart_type: OPTIONAL<EDIBodyPartType> =
                Heading._default_value_for_edi_bodypart_type;
            let incomplete_copy: OPTIONAL<IncompleteCopyField> =
                Heading._default_value_for_incomplete_copy;
            let expiry_time: OPTIONAL<ExpiryTimeField>;
            let related_messages: OPTIONAL<RelatedMessagesField>;
            let obsoleted_EDIMs: OPTIONAL<ObsoletedEDIMsField>;
            let edi_application_security_elements: OPTIONAL<EDIApplicationSecurityElementsField>;
            let cross_referencing_information: OPTIONAL<CrossReferencingInformationField>;
            let edi_message_type: OPTIONAL<EDIMessageTypeField>;
            let service_string_advice: OPTIONAL<ServiceStringAdviceField>;
            let syntax_identifier: OPTIONAL<SyntaxIdentifierField>;
            let interchange_sender: OPTIONAL<InterchangeSenderField>;
            let date_and_time_of_preparation: OPTIONAL<DateAndTimeOfPreparationField>;
            let application_reference: OPTIONAL<ApplicationReferenceField>;
            let heading_extensions: OPTIONAL<HeadingExtensionsField>;
            const callbacks: $.DecodingMap = {
                'this-EDIM': (_el: _Element): void => {
                    this_EDIM = $._decode_implicit<ThisEDIMField>(
                        () => _decode_ThisEDIMField
                    )(_el);
                },
                originator: (_el: _Element): void => {
                    originator = $._decode_implicit<OriginatorField>(
                        () => _decode_OriginatorField
                    )(_el);
                },
                recipients: (_el: _Element): void => {
                    recipients = $._decode_implicit<RecipientsField>(
                        () => _decode_RecipientsField
                    )(_el);
                },
                'edin-receiver': (_el: _Element): void => {
                    edin_receiver = $._decode_implicit<EDINReceiverField>(
                        () => _decode_EDINReceiverField
                    )(_el);
                },
                'responsibility-forwarded': (_el: _Element): void => {
                    responsibility_forwarded = $._decode_implicit<ResponsibilityForwarded>(
                        () => _decode_ResponsibilityForwarded
                    )(_el);
                },
                'edi-bodypart-type': (_el: _Element): void => {
                    edi_bodypart_type = $._decode_implicit<EDIBodyPartType>(
                        () => _decode_EDIBodyPartType
                    )(_el);
                },
                'incomplete-copy': (_el: _Element): void => {
                    incomplete_copy = $._decode_implicit<IncompleteCopyField>(
                        () => _decode_IncompleteCopyField
                    )(_el);
                },
                'expiry-time': (_el: _Element): void => {
                    expiry_time = $._decode_implicit<ExpiryTimeField>(
                        () => _decode_ExpiryTimeField
                    )(_el);
                },
                'related-messages': (_el: _Element): void => {
                    related_messages = $._decode_implicit<RelatedMessagesField>(
                        () => _decode_RelatedMessagesField
                    )(_el);
                },
                'obsoleted-EDIMs': (_el: _Element): void => {
                    obsoleted_EDIMs = $._decode_implicit<ObsoletedEDIMsField>(
                        () => _decode_ObsoletedEDIMsField
                    )(_el);
                },
                'edi-application-security-elements': (_el: _Element): void => {
                    edi_application_security_elements = $._decode_implicit<EDIApplicationSecurityElementsField>(
                        () => _decode_EDIApplicationSecurityElementsField
                    )(_el);
                },
                'cross-referencing-information': (_el: _Element): void => {
                    cross_referencing_information = $._decode_implicit<CrossReferencingInformationField>(
                        () => _decode_CrossReferencingInformationField
                    )(_el);
                },
                'edi-message-type': (_el: _Element): void => {
                    edi_message_type = $._decode_implicit<EDIMessageTypeField>(
                        () => _decode_EDIMessageTypeField
                    )(_el);
                },
                'service-string-advice': (_el: _Element): void => {
                    service_string_advice = $._decode_implicit<ServiceStringAdviceField>(
                        () => _decode_ServiceStringAdviceField
                    )(_el);
                },
                'syntax-identifier': (_el: _Element): void => {
                    syntax_identifier = $._decode_implicit<SyntaxIdentifierField>(
                        () => _decode_SyntaxIdentifierField
                    )(_el);
                },
                'interchange-sender': (_el: _Element): void => {
                    interchange_sender = $._decode_implicit<InterchangeSenderField>(
                        () => _decode_InterchangeSenderField
                    )(_el);
                },
                'date-and-time-of-preparation': (_el: _Element): void => {
                    date_and_time_of_preparation = $._decode_implicit<DateAndTimeOfPreparationField>(
                        () => _decode_DateAndTimeOfPreparationField
                    )(_el);
                },
                'application-reference': (_el: _Element): void => {
                    application_reference = $._decode_implicit<ApplicationReferenceField>(
                        () => _decode_ApplicationReferenceField
                    )(_el);
                },
                'heading-extensions': (_el: _Element): void => {
                    heading_extensions = $._decode_implicit<HeadingExtensionsField>(
                        () => _decode_HeadingExtensionsField
                    )(_el);
                },
            };
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Heading,
                _extension_additions_list_spec_for_Heading,
                _root_component_type_list_2_spec_for_Heading,
                undefined
            );
            return new Heading (
                this_EDIM,
                originator,
                recipients,
                edin_receiver,
                responsibility_forwarded,
                edi_bodypart_type,
                incomplete_copy,
                expiry_time,
                related_messages,
                obsoleted_EDIMs,
                edi_application_security_elements,
                cross_referencing_information,
                edi_message_type,
                service_string_advice,
                syntax_identifier,
                interchange_sender,
                date_and_time_of_preparation,
                application_reference,
                heading_extensions
            );
        };
    }
    return _cached_decoder_for_Heading(el);
}

let _cached_encoder_for_Heading: $.ASN1Encoder<Heading> | null = null;

/**
 * @summary Encodes a(n) Heading into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The Heading, encoded as an ASN.1 Element.
 */
export function _encode_Heading(
    value: Heading,
    elGetter: $.ASN1Encoder<Heading>
): _Element {
    if (!_cached_encoder_for_Heading) {
        _cached_encoder_for_Heading = function (
            value: Heading        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ $._encode_implicit(
                            _TagClass.context,
                            1,
                            () => _encode_ThisEDIMField,
                            $.BER
                        )(value.this_EDIM, $.BER),
                        /* IF_ABSENT  */ value.originator === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  2,
                                  () => _encode_OriginatorField,
                                  $.BER
                              )(value.originator, $.BER),
                        /* IF_ABSENT  */ value.recipients === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  3,
                                  () => _encode_RecipientsField,
                                  $.BER
                              )(value.recipients, $.BER),
                        /* IF_ABSENT  */ value.edin_receiver === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  4,
                                  () => _encode_EDINReceiverField,
                                  $.BER
                              )(value.edin_receiver, $.BER),
                        /* IF_DEFAULT */ value.responsibility_forwarded ===
                            undefined ||
                        $.deepEq(
                            value.responsibility_forwarded,
                            Heading._default_value_for_responsibility_forwarded
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  5,
                                  () => _encode_ResponsibilityForwarded,
                                  $.BER
                              )(value.responsibility_forwarded, $.BER),
                        /* IF_DEFAULT */ value.edi_bodypart_type ===
                            undefined ||
                        $.deepEq(
                            value.edi_bodypart_type,
                            Heading._default_value_for_edi_bodypart_type
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  6,
                                  () => _encode_EDIBodyPartType,
                                  $.BER
                              )(value.edi_bodypart_type, $.BER),
                        /* IF_DEFAULT */ value.incomplete_copy === undefined ||
                        $.deepEq(
                            value.incomplete_copy,
                            Heading._default_value_for_incomplete_copy
                        )
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  7,
                                  () => _encode_IncompleteCopyField,
                                  $.BER
                              )(value.incomplete_copy, $.BER),
                        /* IF_ABSENT  */ value.expiry_time === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  8,
                                  () => _encode_ExpiryTimeField,
                                  $.BER
                              )(value.expiry_time, $.BER),
                        /* IF_ABSENT  */ value.related_messages === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  9,
                                  () => _encode_RelatedMessagesField,
                                  $.BER
                              )(value.related_messages, $.BER),
                        /* IF_ABSENT  */ value.obsoleted_EDIMs === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  10,
                                  () => _encode_ObsoletedEDIMsField,
                                  $.BER
                              )(value.obsoleted_EDIMs, $.BER),
                        /* IF_ABSENT  */ value.edi_application_security_elements ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  11,
                                  () =>
                                      _encode_EDIApplicationSecurityElementsField,
                                  $.BER
                              )(value.edi_application_security_elements, $.BER),
                        /* IF_ABSENT  */ value.cross_referencing_information ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  12,
                                  () =>
                                      _encode_CrossReferencingInformationField,
                                  $.BER
                              )(value.cross_referencing_information, $.BER),
                        /* IF_ABSENT  */ value.edi_message_type === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  13,
                                  () => _encode_EDIMessageTypeField,
                                  $.BER
                              )(value.edi_message_type, $.BER),
                        /* IF_ABSENT  */ value.service_string_advice ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  14,
                                  () => _encode_ServiceStringAdviceField,
                                  $.BER
                              )(value.service_string_advice, $.BER),
                        /* IF_ABSENT  */ value.syntax_identifier === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  15,
                                  () => _encode_SyntaxIdentifierField,
                                  $.BER
                              )(value.syntax_identifier, $.BER),
                        /* IF_ABSENT  */ value.interchange_sender === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  16,
                                  () => _encode_InterchangeSenderField,
                                  $.BER
                              )(value.interchange_sender, $.BER),
                        /* IF_ABSENT  */ value.date_and_time_of_preparation ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  17,
                                  () => _encode_DateAndTimeOfPreparationField,
                                  $.BER
                              )(value.date_and_time_of_preparation, $.BER),
                        /* IF_ABSENT  */ value.application_reference ===
                        undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  18,
                                  () => _encode_ApplicationReferenceField,
                                  $.BER
                              )(value.application_reference, $.BER),
                        /* IF_ABSENT  */ value.heading_extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  19,
                                  () => _encode_HeadingExtensionsField,
                                  $.BER
                              )(value.heading_extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_Heading(value, elGetter);
}


/* eslint-enable */
