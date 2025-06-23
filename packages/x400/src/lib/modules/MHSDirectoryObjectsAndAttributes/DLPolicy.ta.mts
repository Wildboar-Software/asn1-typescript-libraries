/* eslint-disable */
import {
    OPTIONAL,
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
import {
    DLPolicy_report_propagation,
    previous_dl_or_originator /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DLPolicy_report_propagation,
    _encode_DLPolicy_report_propagation,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-report-propagation.ta.mjs';
import {
    DLPolicy_report_from_dl,
    whenever_requested /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DLPolicy_report_from_dl,
    _encode_DLPolicy_report_from_dl,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-report-from-dl.ta.mjs';
import {
    DLPolicy_originating_MTA_report,
    _decode_DLPolicy_originating_MTA_report,
    _encode_DLPolicy_originating_MTA_report,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-originating-MTA-report.ta.mjs';
import {
    DLPolicy_originator_report,
    _decode_DLPolicy_originator_report,
    _encode_DLPolicy_originator_report,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-originator-report.ta.mjs';
import {
    DLPolicy_return_of_content,
    _enum_for_DLPolicy_return_of_content,
    DLPolicy_return_of_content_unchanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DLPolicy_return_of_content,
    _encode_DLPolicy_return_of_content,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-return-of-content.ta.mjs';
import {
    DLPolicy_priority,
    _decode_DLPolicy_priority,
    _encode_DLPolicy_priority,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-priority.ta.mjs';
import {
    DLPolicy_disclosure_of_other_recipients,
    _enum_for_DLPolicy_disclosure_of_other_recipients,
    DLPolicy_disclosure_of_other_recipients_unchanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DLPolicy_disclosure_of_other_recipients,
    _encode_DLPolicy_disclosure_of_other_recipients,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-disclosure-of-other-recipients.ta.mjs';
import {
    DLPolicy_implicit_conversion_prohibited,
    _enum_for_DLPolicy_implicit_conversion_prohibited,
    DLPolicy_implicit_conversion_prohibited_unchanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DLPolicy_implicit_conversion_prohibited,
    _encode_DLPolicy_implicit_conversion_prohibited,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-implicit-conversion-prohibited.ta.mjs';
import {
    DLPolicy_conversion_with_loss_prohibited,
    _enum_for_DLPolicy_conversion_with_loss_prohibited,
    DLPolicy_conversion_with_loss_prohibited_unchanged /* IMPORTED_LONG_ENUMERATION_ITEM */,
    _decode_DLPolicy_conversion_with_loss_prohibited,
    _encode_DLPolicy_conversion_with_loss_prohibited,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-conversion-with-loss-prohibited.ta.mjs';
import {
    DLPolicy_proof_of_delivery,
    dl_members /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_DLPolicy_proof_of_delivery,
    _encode_DLPolicy_proof_of_delivery,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-proof-of-delivery.ta.mjs';
import {
    DLPolicy_requested_delivery_method,
    _decode_DLPolicy_requested_delivery_method,
    _encode_DLPolicy_requested_delivery_method,
} from '../MHSDirectoryObjectsAndAttributes/DLPolicy-requested-delivery-method.ta.mjs';
import {
    AlgorithmInformation,
    _decode_AlgorithmInformation,
    _encode_AlgorithmInformation,
} from '../MHSDirectoryObjectsAndAttributes/AlgorithmInformation.ta.mjs';
/**
 * @summary DLPolicy
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * DLPolicy ::= SET {
 *   report-propagation
 *     [0]  INTEGER {previous-dl-or-originator(0), dl-owner(1),
 *                   both-previous-and-owner(2)} DEFAULT previous-dl-or-originator,
 *   report-from-dl
 *     [1]  INTEGER {whenever-requested(0), when-no-propagation(1)}
 *       DEFAULT whenever-requested,
 *   originating-MTA-report
 *     [2]  INTEGER {unchanged(0), report(2), non-delivery-report(3),
 *                   audited-report(4)} DEFAULT unchanged,
 *   originator-report
 *     [3]  INTEGER {unchanged(0), no-report(1), report(2), non-delivery-report(3)}
 *       DEFAULT unchanged,
 *   return-of-content
 *     [4]  ENUMERATED {unchanged(0), content-return-not-requested(1),
 *                      content-return-requested(2)} DEFAULT unchanged,
 *   priority
 *     [5]  INTEGER {unchanged(0), normal(1), non-urgent(2), urgent(3)}
 *       DEFAULT unchanged,
 *   disclosure-of-other-recipients
 *     [6]  ENUMERATED {unchanged(0),
 *                      disclosure-of-other-recipients-prohibited(1),
 *                      disclosure-of-other-recipients-allowed(2)}
 *       DEFAULT unchanged,
 *   implicit-conversion-prohibited
 *     [7]  ENUMERATED {unchanged(0), implicit-conversion-allowed(1),
 *                      implicit-conversion-prohibited(2)} DEFAULT unchanged,
 *   conversion-with-loss-prohibited
 *     [8]  ENUMERATED {unchanged(0), conversion-with-loss-allowed(1),
 *                      conversion-with-loss-prohibited(2)} DEFAULT unchanged,
 *   further-dl-expansion-allowed                      [9]  BOOLEAN DEFAULT TRUE,
 *   originator-requested-alternate-recipient-removed  [10]  BOOLEAN DEFAULT TRUE,
 *   proof-of-delivery
 *     [11]  INTEGER {dl-expansion-point(0), dl-members(1), both(2), neither(3)}
 *       DEFAULT dl-members,
 *   requested-delivery-method
 *     [12]  CHOICE {unchanged  [0]  NULL,
 *                   removed    [1]  NULL,
 *                   replaced   RequestedDeliveryMethod} DEFAULT unchanged:NULL,
 *   token-encryption-algorithm-preference
 *     [13]  SEQUENCE OF AlgorithmInformation OPTIONAL,
 *   token-signature-algorithm-preference
 *     [14]  SEQUENCE OF AlgorithmInformation OPTIONAL,
 *   ...
 * }
 * ```
 *
 * @class
 */
export class DLPolicy {
    constructor(
        /**
         * @summary `report_propagation`.
         * @public
         * @readonly
         */
        readonly report_propagation: OPTIONAL<DLPolicy_report_propagation>,
        /**
         * @summary `report_from_dl`.
         * @public
         * @readonly
         */
        readonly report_from_dl: OPTIONAL<DLPolicy_report_from_dl>,
        /**
         * @summary `originating_MTA_report`.
         * @public
         * @readonly
         */
        readonly originating_MTA_report: OPTIONAL<DLPolicy_originating_MTA_report>,
        /**
         * @summary `originator_report`.
         * @public
         * @readonly
         */
        readonly originator_report: OPTIONAL<DLPolicy_originator_report>,
        /**
         * @summary `return_of_content`.
         * @public
         * @readonly
         */
        readonly return_of_content: OPTIONAL<DLPolicy_return_of_content>,
        /**
         * @summary `priority`.
         * @public
         * @readonly
         */
        readonly priority: OPTIONAL<DLPolicy_priority>,
        /**
         * @summary `disclosure_of_other_recipients`.
         * @public
         * @readonly
         */
        readonly disclosure_of_other_recipients: OPTIONAL<DLPolicy_disclosure_of_other_recipients>,
        /**
         * @summary `implicit_conversion_prohibited`.
         * @public
         * @readonly
         */
        readonly implicit_conversion_prohibited: OPTIONAL<DLPolicy_implicit_conversion_prohibited>,
        /**
         * @summary `conversion_with_loss_prohibited`.
         * @public
         * @readonly
         */
        readonly conversion_with_loss_prohibited: OPTIONAL<DLPolicy_conversion_with_loss_prohibited>,
        /**
         * @summary `further_dl_expansion_allowed`.
         * @public
         * @readonly
         */
        readonly further_dl_expansion_allowed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `originator_requested_alternate_recipient_removed`.
         * @public
         * @readonly
         */
        readonly originator_requested_alternate_recipient_removed: OPTIONAL<BOOLEAN>,
        /**
         * @summary `proof_of_delivery`.
         * @public
         * @readonly
         */
        readonly proof_of_delivery: OPTIONAL<DLPolicy_proof_of_delivery>,
        /**
         * @summary `requested_delivery_method`.
         * @public
         * @readonly
         */
        readonly requested_delivery_method: OPTIONAL<DLPolicy_requested_delivery_method>,
        /**
         * @summary `token_encryption_algorithm_preference`.
         * @public
         * @readonly
         */
        readonly token_encryption_algorithm_preference: OPTIONAL<
            AlgorithmInformation[]
        >,
        /**
         * @summary `token_signature_algorithm_preference`.
         * @public
         * @readonly
         */
        readonly token_signature_algorithm_preference: OPTIONAL<
            AlgorithmInformation[]
        >,
        /**
         * @summary Extensions that are not recognized.
         * @public
         * @readonly
         */
        readonly _unrecognizedExtensionsList: _Element[] = []
    ) {}

    /**
     * @summary Restructures an object into a DLPolicy
     * @description
     *
     * This takes an `object` and converts it to a `DLPolicy`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `DLPolicy`.
     * @returns {DLPolicy}
     */
    public static _from_object(
        _o: { [_K in keyof DLPolicy]: DLPolicy[_K] }
    ): DLPolicy {
        return new DLPolicy(
            _o.report_propagation,
            _o.report_from_dl,
            _o.originating_MTA_report,
            _o.originator_report,
            _o.return_of_content,
            _o.priority,
            _o.disclosure_of_other_recipients,
            _o.implicit_conversion_prohibited,
            _o.conversion_with_loss_prohibited,
            _o.further_dl_expansion_allowed,
            _o.originator_requested_alternate_recipient_removed,
            _o.proof_of_delivery,
            _o.requested_delivery_method,
            _o.token_encryption_algorithm_preference,
            _o.token_signature_algorithm_preference,
            _o._unrecognizedExtensionsList
        );
    }

    /**
     * @summary Getter that returns the default value for `report_propagation`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_report_propagation(): DLPolicy_report_propagation {
        return previous_dl_or_originator;
    }
    /**
     * @summary Getter that returns the default value for `report_from_dl`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_report_from_dl(): DLPolicy_report_from_dl {
        return whenever_requested;
    }
    /**
     * @summary Getter that returns the default value for `originating_MTA_report`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_originating_MTA_report(): DLPolicy_originating_MTA_report {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `originator_report`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_originator_report(): DLPolicy_originator_report {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `return_of_content`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_return_of_content(): DLPolicy_return_of_content {
        return DLPolicy_return_of_content_unchanged;
    }
    /**
     * @summary Getter that returns the default value for `priority`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_priority(): DLPolicy_priority {
        return 0;
    }
    /**
     * @summary Getter that returns the default value for `disclosure_of_other_recipients`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_disclosure_of_other_recipients(): DLPolicy_disclosure_of_other_recipients {
        return DLPolicy_disclosure_of_other_recipients_unchanged;
    }
    /**
     * @summary Getter that returns the default value for `implicit_conversion_prohibited`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_implicit_conversion_prohibited(): DLPolicy_implicit_conversion_prohibited {
        return DLPolicy_implicit_conversion_prohibited_unchanged;
    }
    /**
     * @summary Getter that returns the default value for `conversion_with_loss_prohibited`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_conversion_with_loss_prohibited(): DLPolicy_conversion_with_loss_prohibited {
        return DLPolicy_conversion_with_loss_prohibited_unchanged;
    }
    /**
     * @summary Getter that returns the default value for `further_dl_expansion_allowed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_further_dl_expansion_allowed(): BOOLEAN {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `originator_requested_alternate_recipient_removed`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_originator_requested_alternate_recipient_removed(): BOOLEAN {
        return true;
    }
    /**
     * @summary Getter that returns the default value for `proof_of_delivery`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_proof_of_delivery(): DLPolicy_proof_of_delivery {
        return dl_members;
    }
    /**
     * @summary Getter that returns the default value for `requested_delivery_method`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_requested_delivery_method(): DLPolicy_requested_delivery_method {
        return { unchanged: null };
    }
    /**
     * @summary The enum used as the type of the component `return_of_content`
     * @public
     * @static
     */

    public static _enum_for_return_of_content = _enum_for_DLPolicy_return_of_content;
    /**
     * @summary The enum used as the type of the component `disclosure_of_other_recipients`
     * @public
     * @static
     */

    public static _enum_for_disclosure_of_other_recipients = _enum_for_DLPolicy_disclosure_of_other_recipients;
    /**
     * @summary The enum used as the type of the component `implicit_conversion_prohibited`
     * @public
     * @static
     */

    public static _enum_for_implicit_conversion_prohibited = _enum_for_DLPolicy_implicit_conversion_prohibited;
    /**
     * @summary The enum used as the type of the component `conversion_with_loss_prohibited`
     * @public
     * @static
     */

    public static _enum_for_conversion_with_loss_prohibited = _enum_for_DLPolicy_conversion_with_loss_prohibited;
}

/**
 * @summary The Leading Root Component Types of DLPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_DLPolicy: $.ComponentSpec[] = [
    new $.ComponentSpec(
        'report-propagation',
        true,
        $.hasTag(_TagClass.context, 0)
    ),
    new $.ComponentSpec(
        'report-from-dl',
        true,
        $.hasTag(_TagClass.context, 1)
    ),
    new $.ComponentSpec(
        'originating-MTA-report',
        true,
        $.hasTag(_TagClass.context, 2)
    ),
    new $.ComponentSpec(
        'originator-report',
        true,
        $.hasTag(_TagClass.context, 3)
    ),
    new $.ComponentSpec(
        'return-of-content',
        true,
        $.hasTag(_TagClass.context, 4)
    ),
    new $.ComponentSpec(
        'priority',
        true,
        $.hasTag(_TagClass.context, 5)
    ),
    new $.ComponentSpec(
        'disclosure-of-other-recipients',
        true,
        $.hasTag(_TagClass.context, 6)
    ),
    new $.ComponentSpec(
        'implicit-conversion-prohibited',
        true,
        $.hasTag(_TagClass.context, 7)
    ),
    new $.ComponentSpec(
        'conversion-with-loss-prohibited',
        true,
        $.hasTag(_TagClass.context, 8)
    ),
    new $.ComponentSpec(
        'further-dl-expansion-allowed',
        true,
        $.hasTag(_TagClass.context, 9)
    ),
    new $.ComponentSpec(
        'originator-requested-alternate-recipient-removed',
        true,
        $.hasTag(_TagClass.context, 10)
    ),
    new $.ComponentSpec(
        'proof-of-delivery',
        true,
        $.hasTag(_TagClass.context, 11)
    ),
    new $.ComponentSpec(
        'requested-delivery-method',
        true,
        $.hasTag(_TagClass.context, 12)
    ),
    new $.ComponentSpec(
        'token-encryption-algorithm-preference',
        true,
        $.hasTag(_TagClass.context, 13)
    ),
    new $.ComponentSpec(
        'token-signature-algorithm-preference',
        true,
        $.hasTag(_TagClass.context, 14)
    ),
];

/**
 * @summary The Trailing Root Component Types of DLPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_DLPolicy: $.ComponentSpec[] = [];

/**
 * @summary The Extension Addition Component Types of DLPolicy
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_DLPolicy: $.ComponentSpec[] = [];

let _cached_decoder_for_DLPolicy: $.ASN1Decoder<DLPolicy> | null = null;

/**
 * @summary Decodes an ASN.1 element into a(n) DLPolicy
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {DLPolicy} The decoded data structure.
 */
export function _decode_DLPolicy(el: _Element) {
    if (!_cached_decoder_for_DLPolicy) {
        _cached_decoder_for_DLPolicy = function (el: _Element): DLPolicy {
            /* START_OF_SET_COMPONENT_DECLARATIONS */
            let report_propagation: OPTIONAL<DLPolicy_report_propagation> =
                DLPolicy._default_value_for_report_propagation;
            let report_from_dl: OPTIONAL<DLPolicy_report_from_dl> =
                DLPolicy._default_value_for_report_from_dl;
            let originating_MTA_report: OPTIONAL<DLPolicy_originating_MTA_report> =
                DLPolicy._default_value_for_originating_MTA_report;
            let originator_report: OPTIONAL<DLPolicy_originator_report> =
                DLPolicy._default_value_for_originator_report;
            let return_of_content: OPTIONAL<DLPolicy_return_of_content> =
                DLPolicy._default_value_for_return_of_content;
            let priority: OPTIONAL<DLPolicy_priority> =
                DLPolicy._default_value_for_priority;
            let disclosure_of_other_recipients: OPTIONAL<DLPolicy_disclosure_of_other_recipients> =
                DLPolicy._default_value_for_disclosure_of_other_recipients;
            let implicit_conversion_prohibited: OPTIONAL<DLPolicy_implicit_conversion_prohibited> =
                DLPolicy._default_value_for_implicit_conversion_prohibited;
            let conversion_with_loss_prohibited: OPTIONAL<DLPolicy_conversion_with_loss_prohibited> =
                DLPolicy._default_value_for_conversion_with_loss_prohibited;
            let further_dl_expansion_allowed: OPTIONAL<BOOLEAN> =
                DLPolicy._default_value_for_further_dl_expansion_allowed;
            let originator_requested_alternate_recipient_removed: OPTIONAL<BOOLEAN> =
                DLPolicy._default_value_for_originator_requested_alternate_recipient_removed;
            let proof_of_delivery: OPTIONAL<DLPolicy_proof_of_delivery> =
                DLPolicy._default_value_for_proof_of_delivery;
            let requested_delivery_method: OPTIONAL<DLPolicy_requested_delivery_method> =
                DLPolicy._default_value_for_requested_delivery_method;
            let token_encryption_algorithm_preference: OPTIONAL<
                AlgorithmInformation[]
            >;
            let token_signature_algorithm_preference: OPTIONAL<
                AlgorithmInformation[]
            >;
            let _unrecognizedExtensionsList: _Element[] = [];
            /* END_OF_SET_COMPONENT_DECLARATIONS */
            const callbacks: $.DecodingMap = {
                'report-propagation': (_el: _Element): void => {
                    report_propagation = $._decode_implicit<DLPolicy_report_propagation>(
                        () => _decode_DLPolicy_report_propagation
                    )(_el);
                },
                'report-from-dl': (_el: _Element): void => {
                    report_from_dl = $._decode_implicit<DLPolicy_report_from_dl>(
                        () => _decode_DLPolicy_report_from_dl
                    )(_el);
                },
                'originating-MTA-report': (_el: _Element): void => {
                    originating_MTA_report = $._decode_implicit<DLPolicy_originating_MTA_report>(
                        () => _decode_DLPolicy_originating_MTA_report
                    )(_el);
                },
                'originator-report': (_el: _Element): void => {
                    originator_report = $._decode_implicit<DLPolicy_originator_report>(
                        () => _decode_DLPolicy_originator_report
                    )(_el);
                },
                'return-of-content': (_el: _Element): void => {
                    return_of_content = $._decode_implicit<DLPolicy_return_of_content>(
                        () => _decode_DLPolicy_return_of_content
                    )(_el);
                },
                priority: (_el: _Element): void => {
                    priority = $._decode_implicit<DLPolicy_priority>(
                        () => _decode_DLPolicy_priority
                    )(_el);
                },
                'disclosure-of-other-recipients': (_el: _Element): void => {
                    disclosure_of_other_recipients = $._decode_implicit<DLPolicy_disclosure_of_other_recipients>(
                        () => _decode_DLPolicy_disclosure_of_other_recipients
                    )(_el);
                },
                'implicit-conversion-prohibited': (_el: _Element): void => {
                    implicit_conversion_prohibited = $._decode_implicit<DLPolicy_implicit_conversion_prohibited>(
                        () => _decode_DLPolicy_implicit_conversion_prohibited
                    )(_el);
                },
                'conversion-with-loss-prohibited': (_el: _Element): void => {
                    conversion_with_loss_prohibited = $._decode_implicit<DLPolicy_conversion_with_loss_prohibited>(
                        () => _decode_DLPolicy_conversion_with_loss_prohibited
                    )(_el);
                },
                'further-dl-expansion-allowed': (_el: _Element): void => {
                    further_dl_expansion_allowed = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'originator-requested-alternate-recipient-removed': (
                    _el: _Element
                ): void => {
                    originator_requested_alternate_recipient_removed = $._decode_implicit<BOOLEAN>(
                        () => $._decodeBoolean
                    )(_el);
                },
                'proof-of-delivery': (_el: _Element): void => {
                    proof_of_delivery = $._decode_implicit<DLPolicy_proof_of_delivery>(
                        () => _decode_DLPolicy_proof_of_delivery
                    )(_el);
                },
                'requested-delivery-method': (_el: _Element): void => {
                    requested_delivery_method = $._decode_explicit<DLPolicy_requested_delivery_method>(
                        () => _decode_DLPolicy_requested_delivery_method
                    )(_el);
                },
                'token-encryption-algorithm-preference': (
                    _el: _Element
                ): void => {
                    token_encryption_algorithm_preference = $._decode_implicit<
                        AlgorithmInformation[]
                    >(() =>
                        $._decodeSequenceOf<AlgorithmInformation>(
                            () => _decode_AlgorithmInformation
                        )
                    )(_el);
                },
                'token-signature-algorithm-preference': (
                    _el: _Element
                ): void => {
                    token_signature_algorithm_preference = $._decode_implicit<
                        AlgorithmInformation[]
                    >(() =>
                        $._decodeSequenceOf<AlgorithmInformation>(
                            () => _decode_AlgorithmInformation
                        )
                    )(_el);
                },
            };
            $._parse_set(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_DLPolicy,
                _extension_additions_list_spec_for_DLPolicy,
                _root_component_type_list_2_spec_for_DLPolicy,
                (ext: _Element): void => {
                    _unrecognizedExtensionsList.push(ext);
                }
            );
            return new DLPolicy /* SET_CONSTRUCTOR_CALL */(
                report_propagation,
                report_from_dl,
                originating_MTA_report,
                originator_report,
                return_of_content,
                priority,
                disclosure_of_other_recipients,
                implicit_conversion_prohibited,
                conversion_with_loss_prohibited,
                further_dl_expansion_allowed,
                originator_requested_alternate_recipient_removed,
                proof_of_delivery,
                requested_delivery_method,
                token_encryption_algorithm_preference,
                token_signature_algorithm_preference,
                _unrecognizedExtensionsList
            );
        };
    }
    return _cached_decoder_for_DLPolicy(el);
}

let _cached_encoder_for_DLPolicy: $.ASN1Encoder<DLPolicy> | null = null;

/**
 * @summary Encodes a(n) DLPolicy into an ASN.1 Element.
 * @function
 * @param value The element being encoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The DLPolicy, encoded as an ASN.1 Element.
 */
export function _encode_DLPolicy(
    value: DLPolicy,
    elGetter: $.ASN1Encoder<DLPolicy>
) {
    if (!_cached_encoder_for_DLPolicy) {
        _cached_encoder_for_DLPolicy = function (
            value: DLPolicy        ): _Element {
            return $._encodeSet(
                ([] as (_Element | undefined)[])
                    .concat(
                        [
                            /* IF_DEFAULT */ value.report_propagation ===
                                undefined ||
                            $.deepEq(
                                value.report_propagation,
                                DLPolicy._default_value_for_report_propagation
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      0,
                                      () => _encode_DLPolicy_report_propagation,
                                      $.BER
                                  )(value.report_propagation, $.BER),
                            /* IF_DEFAULT */ value.report_from_dl ===
                                undefined ||
                            $.deepEq(
                                value.report_from_dl,
                                DLPolicy._default_value_for_report_from_dl
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      1,
                                      () => _encode_DLPolicy_report_from_dl,
                                      $.BER
                                  )(value.report_from_dl, $.BER),
                            /* IF_DEFAULT */ value.originating_MTA_report ===
                                undefined ||
                            $.deepEq(
                                value.originating_MTA_report,
                                DLPolicy._default_value_for_originating_MTA_report
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      2,
                                      () =>
                                          _encode_DLPolicy_originating_MTA_report,
                                      $.BER
                                  )(value.originating_MTA_report, $.BER),
                            /* IF_DEFAULT */ value.originator_report ===
                                undefined ||
                            $.deepEq(
                                value.originator_report,
                                DLPolicy._default_value_for_originator_report
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      3,
                                      () => _encode_DLPolicy_originator_report,
                                      $.BER
                                  )(value.originator_report, $.BER),
                            /* IF_DEFAULT */ value.return_of_content ===
                                undefined ||
                            $.deepEq(
                                value.return_of_content,
                                DLPolicy._default_value_for_return_of_content
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      4,
                                      () => _encode_DLPolicy_return_of_content,
                                      $.BER
                                  )(value.return_of_content, $.BER),
                            /* IF_DEFAULT */ value.priority === undefined ||
                            $.deepEq(
                                value.priority,
                                DLPolicy._default_value_for_priority
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      5,
                                      () => _encode_DLPolicy_priority,
                                      $.BER
                                  )(value.priority, $.BER),
                            /* IF_DEFAULT */ value.disclosure_of_other_recipients ===
                                undefined ||
                            $.deepEq(
                                value.disclosure_of_other_recipients,
                                DLPolicy._default_value_for_disclosure_of_other_recipients
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      6,
                                      () =>
                                          _encode_DLPolicy_disclosure_of_other_recipients,
                                      $.BER
                                  )(
                                      value.disclosure_of_other_recipients,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.implicit_conversion_prohibited ===
                                undefined ||
                            $.deepEq(
                                value.implicit_conversion_prohibited,
                                DLPolicy._default_value_for_implicit_conversion_prohibited
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      7,
                                      () =>
                                          _encode_DLPolicy_implicit_conversion_prohibited,
                                      $.BER
                                  )(
                                      value.implicit_conversion_prohibited,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.conversion_with_loss_prohibited ===
                                undefined ||
                            $.deepEq(
                                value.conversion_with_loss_prohibited,
                                DLPolicy._default_value_for_conversion_with_loss_prohibited
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      8,
                                      () =>
                                          _encode_DLPolicy_conversion_with_loss_prohibited,
                                      $.BER
                                  )(
                                      value.conversion_with_loss_prohibited,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.further_dl_expansion_allowed ===
                                undefined ||
                            $.deepEq(
                                value.further_dl_expansion_allowed,
                                DLPolicy._default_value_for_further_dl_expansion_allowed
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      9,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(value.further_dl_expansion_allowed, $.BER),
                            /* IF_DEFAULT */ value.originator_requested_alternate_recipient_removed ===
                                undefined ||
                            $.deepEq(
                                value.originator_requested_alternate_recipient_removed,
                                DLPolicy._default_value_for_originator_requested_alternate_recipient_removed
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      10,
                                      () => $._encodeBoolean,
                                      $.BER
                                  )(
                                      value.originator_requested_alternate_recipient_removed,
                                      $.BER
                                  ),
                            /* IF_DEFAULT */ value.proof_of_delivery ===
                                undefined ||
                            $.deepEq(
                                value.proof_of_delivery,
                                DLPolicy._default_value_for_proof_of_delivery
                            )
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      11,
                                      () => _encode_DLPolicy_proof_of_delivery,
                                      $.BER
                                  )(value.proof_of_delivery, $.BER),
                            /* IF_DEFAULT */ value.requested_delivery_method ===
                                undefined ||
                            $.deepEq(
                                value.requested_delivery_method,
                                DLPolicy._default_value_for_requested_delivery_method
                            )
                                ? undefined
                                : $._encode_explicit(
                                      _TagClass.context,
                                      12,
                                      () =>
                                          _encode_DLPolicy_requested_delivery_method,
                                      $.BER
                                  )(value.requested_delivery_method, $.BER),
                            /* IF_ABSENT  */ value.token_encryption_algorithm_preference ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      13,
                                      () =>
                                          $._encodeSequenceOf<AlgorithmInformation>(
                                              () =>
                                                  _encode_AlgorithmInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(
                                      value.token_encryption_algorithm_preference,
                                      $.BER
                                  ),
                            /* IF_ABSENT  */ value.token_signature_algorithm_preference ===
                            undefined
                                ? undefined
                                : $._encode_implicit(
                                      _TagClass.context,
                                      14,
                                      () =>
                                          $._encodeSequenceOf<AlgorithmInformation>(
                                              () =>
                                                  _encode_AlgorithmInformation,
                                              $.BER
                                          ),
                                      $.BER
                                  )(
                                      value.token_signature_algorithm_preference,
                                      $.BER
                                  ),
                        ],
                        value._unrecognizedExtensionsList
                            ? value._unrecognizedExtensionsList
                            : []
                    )
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_DLPolicy(value, elGetter);
}


/* eslint-enable */
